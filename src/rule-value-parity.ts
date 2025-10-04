import { getStaticYAMLValue, type AST } from "yaml-eslint-parser";
import { LocaleCode } from "./constants.js";
import createRule from "./creator.js";
import {
  formatDisplayKey,
  KeyContentInfo,
  prepareLocs,
  UsageMap,
} from "./shared-parity.js";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";

const DEFAULT_CHECKS = {
  valueType: true,
  arrayLength: true,
} satisfies Required<Checks>;

type Checks = {
  valueType?: boolean;
  arrayLength?: boolean;
};
type RuleOptions = {
  checks: Checks;
  ignoredKeys: readonly string[];
};
type MessageIds = "valueTypeDisparity" | "arrayLengthDisparity";

const valueParity = createRule<[RuleOptions], MessageIds>({
  name: "value-parity",
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforces value type and shape parity for reciprocal keys across locales.",
    },
    schema: [
      {
        type: "object",
        properties: {
          checks: {
            type: "object",
            additionalProperties: false,
            properties: {
              valueType: { type: "boolean", default: true },
              arrayLength: { type: "boolean", default: true },
            },
          },
          ignoredKeys: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
            default: [],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      valueTypeDisparity:
        "Value types for key '{{reportedKey}}' do not match across locales ({{variants}}) • {{usageList}}",
      arrayLengthDisparity:
        "Array lengths for key '{{reportedKey}}' do not match across locales ({{variants}}) • {{usageList}}",
    },
  },
  defaultOptions: [{ checks: DEFAULT_CHECKS, ignoredKeys: [] }],
  create(context, [options]) {
    const { checks, ignoredKeys } = options;
    const ignoredKeysSet = new Set(ignoredKeys);

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        if (!isYamlMapping(doc.content)) return;

        const kMap: Map<string, ExtendedKeyContentInfo> = new Map();
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const strKey = String(getStaticYAMLValue(localeBlock.key));
          if (!isLocaleCode(strKey)) continue;
          valueDfs(localeBlock.value, kMap, [strKey]);
        }

        for (const [_, v] of kMap) {
          // if it is bigger than 1 it means that for that key, multiple different values were registered
          const typeVariants = v.usageMap.size;
          const lenVariants = v.arrLenMap.size;
          if (
            (typeVariants <= 1 && lenVariants <= 1) ||
            regexIgnoreKey(v.canonicalPath, ignoredKeysSet)
          )
            continue;

          const isAllValsSeq = Array.from(v.usageMap.keys()).every(
            (k) => k === "sequence"
          );
          if (checks?.arrayLength && lenVariants > 1 && isAllValsSeq) {
            for (const loc of v.locations) {
              context.report({
                loc,
                messageId: "arrayLengthDisparity",
                data: {
                  reportedKey: v.key,
                  usageList: formatValueUsageListMessage(v.arrLenMap),
                  variants: `${lenVariants} variants`,
                },
              });
            }
          }
          if (checks?.valueType && typeVariants > 1) {
            for (const loc of v.locations) {
              context.report({
                loc,
                messageId: "valueTypeDisparity",
                data: {
                  reportedKey: v.key,
                  usageList: formatValueUsageListMessage(v.usageMap),
                  variants: `${typeVariants} variants`,
                },
              });
            }
          }
        }
      },
    };
  },
});

export default valueParity;

const regexIgnoreKey = (
  canonicalKeyPath: string,
  ignoredKeys: Set<string>
): boolean => {
  for (const igRegExpKey of ignoredKeys) {
    if (typeof igRegExpKey !== "string") continue;
    const cleanIgnoreKey = igRegExpKey.trim();
    if (!cleanIgnoreKey) continue;

    try {
      const re = new RegExp(cleanIgnoreKey);
      if (re.test(canonicalKeyPath)) return true;
    } catch (e: unknown) {
      continue;
    }
  }
  return false;
};

const getCanonicalKeyPath = (pathElements: string[]): string => {
  let out = "";
  for (const seg of pathElements as string[]) {
    if (!out) {
      out = seg;
    } else if (seg.startsWith("[")) {
      out += seg;
    } else {
      out += `.${seg}`;
    }
  }
  return out;
};

export const normalizeKeyPath = (fullPath: string[]): string[] => {
  if (fullPath.length <= 1) return [...fullPath];

  const locale = fullPath[0];
  const rel = fullPath.slice(1);
  if (rel.length === 0) return [locale];

  const out: string[] = [locale];
  for (const seg of rel) {
    if (/^\d+$/.test(seg)) {
      if (out.length > 1 && !out[out.length - 1].startsWith("[")) {
        out[out.length - 1] = `${out[out.length - 1]}[${seg}]`;
      } else {
        out.push(`[${seg}]`);
      }
    } else {
      out.push(seg);
    }
  }
  return out;
};

const valueDfs = (
  node: AST.YAMLNode,
  kMap: Map<string, ExtendedKeyContentInfo>,
  currPath: string[]
): void => {
  const nodeLen: number = isYamlSequence(node) ? node.entries.length : 0;
  updateKMap(kMap, {
    path: currPath,
    nodeType: typeTag(node),
    loc: node.loc,
    locale: currPath[0] as LocaleCode,
    nodeLength: nodeLen,
  });

  if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      if (!pair?.key) continue;
      const strKey = String(getStaticYAMLValue(pair.key));
      currPath.push(strKey);
      if (!pair?.value) {
        updateKMap(kMap, {
          path: currPath,
          nodeType: "null",
          loc: node.loc,
          locale: currPath[0] as LocaleCode,
          nodeLength: 0,
        });
        currPath.pop();
        continue;
      }
      valueDfs(pair.value, kMap, currPath);
      currPath.pop();
    }
    return;
  }

  if (isYamlSequence(node)) {
    for (const [idx, item] of node.entries.entries()) {
      currPath.push(String(idx));
      if (!item) {
        updateKMap(kMap, {
          path: currPath,
          nodeType: "null",
          loc: node.loc,
          locale: currPath[0] as LocaleCode,
          nodeLength: 0,
        });
        currPath.pop();
        continue;
      }
      valueDfs(item, kMap, currPath);
      currPath.pop();
    }
  }
};

const typeTag = (
  node: AST.YAMLNode
): "mapping" | "sequence" | "string" | "number" | "boolean" | "null" => {
  if (isYamlMapping(node)) return "mapping";
  if (isYamlSequence(node)) return "sequence";
  if (node.type === "YAMLScalar") {
    const v = getStaticYAMLValue(node);
    if (v === null || v === undefined) return "null";
    const t = typeof v;
    return t === "string" || t === "number" || t === "boolean" ? t : "string";
  }
  return "null";
};

const formatValueUsageListMessage = (usageMap: UsageMap): string => {
  let msgArr = [];
  for (const [key, value] of usageMap) {
    const locsArr = Array.from(value).sort();
    const formattedLocs = prepareLocs(locsArr);
    msgArr.push({
      locales: locsArr,
      localesCount: locsArr.length,
      valueType: key,
      displayMsg: formattedLocs + " → " + key,
    });
  }
  msgArr.sort(
    (a, b) =>
      b.localesCount - a.localesCount ||
      (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") ||
      (a.valueType ?? "").localeCompare(b.valueType ?? "")
  );
  return msgArr.map((m) => m.displayMsg).join("; ");
};

const updateKMap = (
  kMap: Map<string, ExtendedKeyContentInfo>,
  keyInfo: KeyInfo
): void => {
  const { loc, path, nodeType, locale } = keyInfo;
  const lastPathSeg = formatDisplayKey(path);
  const compressedPath = normalizeKeyPath(path);
  const strPathId = JSON.stringify(compressedPath.slice(1)); // removing locale
  const canonicalPath = getCanonicalKeyPath(compressedPath.slice(1));
  const arrLenId = JSON.stringify(
    nodeType === "sequence" ? keyInfo.nodeLength : 0
  );

  if (!kMap.has(strPathId)) {
    const newKeyInfo = {
      key: lastPathSeg,
      canonicalPath,
      usageMap: new Map<string, Set<LocaleCode>>([
        [nodeType, new Set<LocaleCode>([locale])],
      ]),
      arrLenMap: new Map<string, Set<LocaleCode>>([
        [arrLenId, new Set<LocaleCode>([locale])],
      ]),
      locations: new Set<AST.SourceLocation>([loc]),
    } satisfies ExtendedKeyContentInfo;
    kMap.set(strPathId, newKeyInfo);
  } else {
    const existingKeyInfo = kMap.get(strPathId);
    existingKeyInfo?.locations.add(loc);

    if (existingKeyInfo?.usageMap.has(nodeType)) {
      existingKeyInfo.usageMap.get(nodeType)?.add(locale);
    } else {
      existingKeyInfo?.usageMap.set(nodeType, new Set<LocaleCode>([locale]));
    }

    if (existingKeyInfo?.arrLenMap.has(arrLenId)) {
      existingKeyInfo.arrLenMap.get(arrLenId)?.add(locale);
    } else {
      existingKeyInfo?.arrLenMap.set(arrLenId, new Set<LocaleCode>([locale]));
    }
  }
};

export interface ExtendedKeyContentInfo extends KeyContentInfo {
  arrLenMap: UsageMap;
  canonicalPath: string;
}

type KeyInfo = {
  loc: AST.SourceLocation;
  path: string[];
  nodeType: string;
  locale: LocaleCode;
  nodeLength: number;
};
