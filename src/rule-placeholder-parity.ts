import { getStaticYAMLValue, type AST } from "yaml-eslint-parser";
import { LocaleCode, PH_RE } from "./constants.js";
import createRule from "./creator.js";
import {
  formatDisplayKey,
  KeyContentInfo,
  KeyPathToContentInfoMap,
  prepareLocs,
  UsageMap,
} from "./shared-parity.js";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";

type MessageIds = "placeholderDisparity";

const placeholderParity = createRule<[], MessageIds>({
  name: "placeholder-parity",
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce usage of identical placeholders in reciprocal keys across locales.",
    },
    schema: [],
    messages: {
      placeholderDisparity:
        "Placeholder usage for key '{{reportedKey}}' is not consistent across locales ({{variants}}) • {{usageList}}",
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;

        const anchors = collectAnchors(root, new Map());
        const kppMap = new Map<string, KeyContentInfo>();
        for (const localeBlock of root.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const stringLocKey = String(getStaticYAMLValue(localeBlock.key));
          if (!isLocaleCode(stringLocKey)) continue;
          dfsPlaceholders(localeBlock.value, [stringLocKey], kppMap, anchors);
        }

        for (const v of kppMap.values()) {
          // if it is bigger than 1 it means that for that key, multiple different placeholder sets were registered
          const variants = v.usageMap.size;
          if (variants <= 1) continue;

          for (const loc of v.locations) {
            context.report({
              loc,
              messageId: "placeholderDisparity",
              data: {
                reportedKey: v.key,
                usageList: formatPlaceholderUsageListMessage(v.usageMap),
                variants: `${variants} variants`,
              },
            });
          }
        }
      },
    };
  },
});

export default placeholderParity;

const formatPlaceholderUsageListMessage = (usageMap: UsageMap): string => {
  // sample message: 'en, fr -> {count}, {name}; es -> ∅'
  let msgArr = [];
  for (const [key, value] of usageMap) {
    const locsArr = Array.from(value).sort();
    const formattedLocs = prepareLocs(locsArr);
    const phsArr = JSON.parse(key)
      .map((k: string) => `{${k}}`)
      .sort();
    const phs = phsArr.length > 0 ? phsArr.join(", ") : "∅";
    msgArr.push({
      locales: locsArr,
      localesCount: locsArr.length,
      placeholders: phsArr,
      displayMsg: formattedLocs + " → " + phs,
    });
  }
  msgArr.sort(
    (a, b) =>
      b.localesCount - a.localesCount ||
      b.placeholders.length - a.placeholders.length ||
      (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") ||
      a.placeholders.join("|").localeCompare(b.placeholders.join("|"))
  );
  return msgArr.map((m) => m.displayMsg).join("; ");
};

const updateKppMap = (
  kppMap: KeyPathToContentInfoMap,
  loc: AST.SourceLocation,
  path: string[],
  phs: string[],
  locale: LocaleCode
): void => {
  const strId = JSON.stringify(path.slice(1)); // removing locale
  // sorting since order of placeholders doesn't matter. using set since duplicate placeholders don't matter
  const phsUniqueArray = Array.from(new Set<string>(phs.sort()));
  // using an array because all sets stringify to {}
  const phId = JSON.stringify(phsUniqueArray);
  const displayKey = formatDisplayKey(path);
  if (!kppMap.has(strId)) {
    const keyInfo = {
      key: displayKey,
      usageMap: new Map<string, Set<LocaleCode>>([
        [phId, new Set<LocaleCode>([locale])],
      ]),
      locations: new Set<AST.SourceLocation>([loc]),
    } satisfies KeyContentInfo;
    kppMap.set(strId, keyInfo);
  } else {
    const keyPhInfo = kppMap.get(strId);
    keyPhInfo?.locations.add(loc);

    if (keyPhInfo?.usageMap.has(phId)) {
      keyPhInfo.usageMap.get(phId)?.add(locale);
    } else {
      keyPhInfo?.usageMap.set(phId, new Set<LocaleCode>([locale]));
    }
  }
};

const dfsPlaceholders = (
  node: AST.YAMLNode,
  currPath: string[],
  kppMap: KeyPathToContentInfoMap,
  anchors: AnchorsMap,
  visited = new WeakSet<AST.YAMLNode>(),
  aliasLoc?: AST.SourceLocation
): void => {
  if (node.type === "YAMLScalar") {
    // m[0] gives the entire raw match like '{hey}' and m[1], m[2], etc. are the "capturing groups", like 'hey'
    const phs = [...String(node.value).matchAll(PH_RE)].map((m) => m[1]);
    if (phs && isLocaleCode(currPath[0])) {
      const reportLoc = aliasLoc ?? node.loc;
      updateKppMap(kppMap, reportLoc, currPath, phs, currPath[0]);
    }
  } else if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      const pV = pair.value;
      if (!pair.key || !pV) continue;
      const stringKey = String(getStaticYAMLValue(pair.key));
      currPath.push(stringKey);
      dfsPlaceholders(pV, currPath, kppMap, anchors, visited, aliasLoc);
      currPath.pop();
    }
  } else if (isYamlSequence(node)) {
    for (const [idx, item] of node.entries.entries()) {
      if (!item) continue;
      currPath.push(String(idx));
      dfsPlaceholders(item, currPath, kppMap, anchors, visited, aliasLoc);
      currPath.pop();
    }
  } else if (node.type === "YAMLWithMeta" && node.value) {
    dfsPlaceholders(node.value, currPath, kppMap, anchors, visited, aliasLoc);
  } else if (node.type === "YAMLAlias") {
    const target = anchors.get(node.name);
    if (target && !visited.has(target)) {
      visited.add(target);
      dfsPlaceholders(target, currPath, kppMap, anchors, visited, node.loc);
    }
  }
};

type AnchorsMap = Map<string, AST.YAMLNode>;

const collectAnchors = (
  node: AST.YAMLNode | null | undefined,
  anchors: AnchorsMap,
  visited = new WeakSet<object>()
): AnchorsMap => {
  if (!node || visited.has(node as object)) return anchors;
  visited.add(node as object);

  if (node.type === "YAMLWithMeta") {
    const v = node.value;
    // first-wins to avoid accidental overwrites if the same anchor name repeats
    if (node.anchor?.name && v && !anchors.has(node.anchor.name)) {
      anchors.set(node.anchor.name, v);
    }
    if (v) collectAnchors(v, anchors, visited);
    return anchors;
  }

  if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      if (pair?.value) collectAnchors(pair.value, anchors, visited);
    }
    return anchors;
  }

  if (isYamlSequence(node)) {
    for (const item of node.entries) {
      if (item) collectAnchors(item, anchors, visited);
    }
    return anchors;
  }
  // Not touching scalars/aliases since they won't contain anchors
  return anchors;
};
