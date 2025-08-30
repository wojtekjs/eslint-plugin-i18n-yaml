import { TSESLint } from "@typescript-eslint/utils";
import { getStaticYAMLValue, type AST } from "yaml-eslint-parser";
import { LocaleCode } from "./constants.js";
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
  checks?: Checks;
  ignoredKeys?: string[];
};
type Options = [RuleOptions?];
type MessageIds = "valueTypeDisparity" | "arrayLengthDisparity";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforces value type and shape parity for reciprocal keys across locales.",
      url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamlvalue-parity",
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
  create(context) {
    const options = context.options[0];
    const { checks, ignoredKeys } = {
      checks: { ...DEFAULT_CHECKS, ...(options?.checks ?? {}) },
      ignoredKeys: options?.ignoredKeys ?? [],
    };
    const ignoredKeysSet = new Set(ignoredKeys);

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        if (!isYamlMapping(doc.content)) return;

        const kMap: Map<string, KeyContentInfoWithArrLen> = new Map();
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const strKey = String(getStaticYAMLValue(localeBlock.key));
          if (!isLocaleCode(strKey)) continue;
          valueDfs(localeBlock.value, kMap, [strKey]);
        }

        for (const [k, v] of kMap) {
          // if it is bigger than 1 it means that for that key, multiple different values were registered
          const typeVariants = v.usageMap.size;
          const lenVariants = v.arrLenMap.size;
          if (
            (typeVariants <= 1 && lenVariants <= 1) ||
            ignoreKey(k, ignoredKeysSet)
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
};

export default rule;

const isIndexPattern = (s: string) => /^\[\d+\]$/.test(s); // "[12]"
const isBareNumeric = (s: string) => /^\d+$/.test(s); // 12

const ignoreKey = (
  stringifiedKeyPath: string,
  ignoredKeys: Set<string>
): boolean => {
  const parsedKeyPath: string[] = JSON.parse(stringifiedKeyPath); // locale at indx 0 already stripped
  for (const igKey of ignoredKeys) {
    const trimIgKey = igKey.trim();
    // if its a plain key, we match at all depths but if it ends in .* its anchored at root despite stripping it we should preserve that info
    const isIgKeyAnchored = trimIgKey.endsWith(".*");
    // .* is purely syntactic sugar which can be stripped
    const igKeyWithoutSyntacticSugar = isIgKeyAnchored
      ? trimIgKey.slice(0, -2)
      : trimIgKey;
    const dotSplitIgKeySegs = igKeyWithoutSyntacticSugar.split(".");
    const hasIgKeyPathSegWildcard = igKeyWithoutSyntacticSugar.includes("*"); // whether or not one of the path segs uses a wildcard

    const hasIgKeyMultipleSegs = dotSplitIgKeySegs.length > 1;
    const normalizedIgnoreKey =
      hasIgKeyMultipleSegs && isLocaleCode(dotSplitIgKeySegs[0])
        ? dotSplitIgKeySegs.slice(1).join(".").trim()
        : igKeyWithoutSyntacticSugar.trim();

    if (!normalizedIgnoreKey || normalizedIgnoreKey === "*") continue;

    // --- SIMPLE-KEY CASE (no dots) ---
    if (!normalizedIgnoreKey.includes(".")) {
      // wildcard single-term (foo*, *bar) → match at any depth
      if (hasIgKeyPathSegWildcard) {
        for (const i of parsedKeyPath.keys()) {
          if (checkWildcardSegment(normalizedIgnoreKey, parsedKeyPath, i))
            return true;
        }
        continue;
      }

      // bracketed index: only match exact "[N]" path segments
      else if (isIndexPattern(normalizedIgnoreKey)) {
        if (parsedKeyPath.includes(normalizedIgnoreKey)) return true;
      }

      // plain digits: treat as mapping key only (exclude indices)
      else if (isBareNumeric(normalizedIgnoreKey)) {
        for (const seg of parsedKeyPath) {
          if (seg === normalizedIgnoreKey) return true; // mapping key "1"
          // segs like "[1]" won't equal "1", because DFS brackets indices
        }
      }

      // generic simple key: exact match at any depth
      else if (parsedKeyPath.includes(normalizedIgnoreKey)) return true;
      continue;
    }

    // --- DOTTED-PATH CASE ---
    // loop through whole ignore key AND parsed key to check full path match, accounting for wildcard matching
    let pathMatching = true;
    /*
    since we break early if the ignore key path is longer than the parsed key path, this ensures we've checked the full ignore key and 
    avoids situations where the ignore key path was party checked and matched all the way because that's a false positive
    */
    let fullPathConsumed = false;
    const splitNormIgKey = normalizedIgnoreKey.split(".");
    for (const [idx, seg] of splitNormIgKey.entries()) {
      if (!pathMatching || idx >= parsedKeyPath.length) break;
      if (seg === "*") continue; // allows 'foo.*.bar'
      const isLastSeg = idx === splitNormIgKey.length - 1;
      pathMatching =
        seg.startsWith("*") || seg.endsWith("*")
          ? checkWildcardSegment(seg, parsedKeyPath, idx)
          : parsedKeyPath[idx] === seg; // handles bracketed key matching as well
      if (isLastSeg) fullPathConsumed = true;
    }
    if (pathMatching && fullPathConsumed) return true;

    // if ignore key is a dotted path, i anchor at root and check if every path step matches
    if ((hasIgKeyMultipleSegs || isIgKeyAnchored) && !hasIgKeyPathSegWildcard) {
      if (checkRootAnchoredPrefixPathMatch(normalizedIgnoreKey, parsedKeyPath))
        return true;
      continue;
    }
  }
  return false;
};

const checkWildcardSegment = (
  segment: string,
  keyPath: string[],
  idx: number
): boolean => {
  if (segment.startsWith("*") && segment.endsWith("*")) return false; // ! '*foo*' is unsupported
  if (
    (segment.startsWith("*") && keyPath[idx].endsWith(segment.slice(1))) ||
    (segment.endsWith("*") && keyPath[idx].startsWith(segment.slice(0, -1)))
  ) {
    return true;
  }
  return false;
};

const checkRootAnchoredPrefixPathMatch = (
  ignoreKey: string,
  parsedKeyToCheck: string[]
): boolean => {
  for (const [idx, seg] of ignoreKey.split(".").entries()) {
    if (seg !== parsedKeyToCheck[idx]) return false;
  }

  return true;
};

const valueDfs = (
  node: AST.YAMLNode,
  kMap: Map<string, KeyContentInfoWithArrLen>,
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
      if (!pair?.key || !pair?.value) continue;
      const strKey = String(getStaticYAMLValue(pair.key));
      currPath.push(strKey);
      valueDfs(pair.value, kMap, currPath);
      currPath.pop();
    }
    return;
  }

  if (node.type === "YAMLSequence") {
    for (const [idx, item] of node.entries.entries()) {
      currPath.push(`[${idx}]`);
      //   currPath.push(String(idx));
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
  kMap: Map<string, KeyContentInfoWithArrLen>,
  keyInfo: KeyInfo
): void => {
  const { loc, path, nodeType, locale } = keyInfo;
  const strPathId = JSON.stringify(path.slice(1)); // removing locale
  const arrLenId = JSON.stringify(
    nodeType === "sequence" ? keyInfo.nodeLength : 0
  );

  if (!kMap.has(strPathId)) {
    const newKeyInfo = {
      key: formatDisplayKey(path),
      usageMap: new Map<string, Set<LocaleCode>>([
        [nodeType, new Set<LocaleCode>([locale])],
      ]),
      arrLenMap: new Map<string, Set<LocaleCode>>([
        [arrLenId, new Set<LocaleCode>([locale])],
      ]),
      locations: new Set<AST.SourceLocation>([loc]),
    } satisfies KeyContentInfoWithArrLen;
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

export interface KeyContentInfoWithArrLen extends KeyContentInfo {
  arrLenMap: UsageMap;
}

type KeyInfo = {
  loc: AST.SourceLocation;
  path: string[];
  nodeType: string;
  locale: LocaleCode;
  nodeLength: number;
};
