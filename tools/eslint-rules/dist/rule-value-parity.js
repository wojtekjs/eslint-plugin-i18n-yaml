import { getStaticYAMLValue } from "yaml-eslint-parser";
import { formatDisplayKey, prepareLocs, } from "./shared-parity.js";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";
// TODO update readme with this rule
const DEFAULT_CHECKS = {
    valueType: true,
    arrayLength: true,
};
const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforces value type and shape parity for reciprocal keys across locales.",
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
            valueTypeDisparity: "Value types for key '{{reportedKey}}' do not match across locales ({{variants}}) • {{usageList}}",
            arrayLengthDisparity: "Array lengths for key '{{reportedKey}}' do not match across locales ({{variants}}) • {{usageList}}",
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
            YAMLDocument(doc) {
                if (!isYamlMapping(doc.content))
                    return;
                const kMap = new Map();
                for (const localeBlock of doc.content.pairs) {
                    if (!localeBlock.key || !localeBlock.value)
                        continue;
                    const strKey = String(getStaticYAMLValue(localeBlock.key));
                    if (!isLocaleCode(strKey))
                        continue;
                    valueDfs(localeBlock.value, kMap, [strKey]);
                }
                for (const [k, v] of kMap) {
                    // if it is bigger than 1 it means that for that key, multiple different values were registered
                    const typeVariants = v.usageMap.size;
                    const lenVariants = v.arrLenMap.size;
                    if ((typeVariants <= 1 && lenVariants <= 1) ||
                        ignoreKey(k, ignoredKeysSet))
                        continue;
                    if (checks?.arrayLength && lenVariants > 1) {
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
const ignoreKey = (stringifiedKeyPath, ignoredKeys) => {
    const parsedKeyPath = JSON.parse(stringifiedKeyPath);
    for (const igKey of ignoredKeys) {
        const dotSplitIgKeySegs = igKey.trim().split(".");
        const igKeyHasMultipleSegs = dotSplitIgKeySegs.length > 1;
        const normalizedIgnoreKey = igKeyHasMultipleSegs && isLocaleCode(dotSplitIgKeySegs[0])
            ? dotSplitIgKeySegs.slice(1).join(".")
            : igKey;
        // an ending of .* means start walking at locale root level and go down the path until we hit *, then ignore everything below
        if (normalizedIgnoreKey.endsWith(".*")) {
            const normalizedIgKeySansWildcard = normalizedIgnoreKey.slice(0, -2);
            return checkFullPathMatch(normalizedIgKeySansWildcard, parsedKeyPath);
        }
        // TODO per-segment wildcard logic! all else works
        let pathMatching = true;
        for (const [idx, seg] of normalizedIgnoreKey.split(".").entries()) {
            if (!pathMatching)
                break;
            //   if (idx === 0 && (seg.startsWith("*") || seg.endsWith("*"))) {
            //     if (seg.startsWith("*")) {
            //       return parsedKeyPath[0].endsWith(seg.slice(1));
            //     }
            //     if (seg.endsWith("*")) {
            //       return parsedKeyPath[0].startsWith(seg.slice(0, -1));
            //     }
            //   }
            pathMatching = parsedKeyPath[idx] === seg;
            if (seg.startsWith("*")) {
                return parsedKeyPath[idx].endsWith(seg.slice(1));
            }
            if (seg.endsWith("*")) {
                return parsedKeyPath[idx].startsWith(seg.slice(0, -1));
            }
        }
        // if ignore key is a dotted path, i anchor at root and check if every path step matches
        if (igKeyHasMultipleSegs) {
            return checkFullPathMatch(normalizedIgnoreKey, parsedKeyPath);
        }
        // simple key case - ignore all keys that exactly match it at all nesting depths
        if (parsedKeyPath.includes(normalizedIgnoreKey))
            return true;
        continue;
    }
    return false;
};
const checkFullPathMatch = (ignoreKey, parsedKeyToCheck) => {
    for (const [idx, seg] of ignoreKey.split(".").entries()) {
        if (seg !== parsedKeyToCheck[idx])
            return false;
    }
    return true;
};
const valueDfs = (node, kMap, currPath) => {
    const nodeLen = isYamlSequence(node) ? node.entries.length : 0;
    updateKMap(kMap, {
        path: currPath,
        nodeType: typeTag(node),
        loc: node.loc,
        locale: currPath[0],
        nodeLength: nodeLen,
    });
    if (isYamlMapping(node)) {
        for (const pair of node.pairs) {
            if (!pair?.key || !pair?.value)
                continue;
            const strKey = String(getStaticYAMLValue(pair.key));
            currPath.push(strKey);
            valueDfs(pair.value, kMap, currPath);
            currPath.pop();
        }
        return;
    }
    if (node.type === "YAMLSequence") {
        for (const [idx, item] of node.entries.entries()) {
            currPath.push(String(idx));
            if (!item) {
                updateKMap(kMap, {
                    path: currPath,
                    nodeType: "null",
                    loc: node.loc,
                    locale: currPath[0],
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
const typeTag = (node) => {
    if (isYamlMapping(node))
        return "mapping";
    if (isYamlSequence(node))
        return "sequence";
    if (node.type === "YAMLScalar") {
        const v = getStaticYAMLValue(node);
        if (v === null || v === undefined)
            return "null";
        const t = typeof v;
        return t === "string" || t === "number" || t === "boolean" ? t : "string";
    }
    return "null";
};
const formatValueUsageListMessage = (usageMap) => {
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
    msgArr.sort((a, b) => b.localesCount - a.localesCount ||
        (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") ||
        (a.valueType ?? "").localeCompare(b.valueType ?? ""));
    return msgArr.map((m) => m.displayMsg).join("; ");
};
const updateKMap = (kMap, keyInfo) => {
    const { loc, path, nodeType, locale } = keyInfo;
    const strPathId = JSON.stringify(path.slice(1)); // removing locale
    const keyUsageId = JSON.stringify(nodeType);
    const arrLenId = JSON.stringify(nodeType === "sequence" ? keyInfo.nodeLength : 0);
    if (!kMap.has(strPathId)) {
        const newKeyInfo = {
            key: formatDisplayKey(path),
            usageMap: new Map([
                [keyUsageId, new Set([locale])],
            ]),
            arrLenMap: new Map([
                [arrLenId, new Set([locale])],
            ]),
            locations: new Set([loc]),
        };
        kMap.set(strPathId, newKeyInfo);
    }
    else {
        const existingKeyInfo = kMap.get(strPathId);
        existingKeyInfo?.locations.add(loc);
        if (existingKeyInfo?.usageMap.has(keyUsageId)) {
            existingKeyInfo.usageMap.get(keyUsageId)?.add(locale);
        }
        else {
            existingKeyInfo?.usageMap.set(keyUsageId, new Set([locale]));
        }
        if (existingKeyInfo?.arrLenMap.has(arrLenId)) {
            existingKeyInfo.arrLenMap.get(arrLenId)?.add(locale);
        }
        else {
            existingKeyInfo?.arrLenMap.set(arrLenId, new Set([locale]));
        }
    }
};
