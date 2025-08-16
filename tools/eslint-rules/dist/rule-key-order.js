import { getStaticYAMLValue } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES, DEFAULT_LOCALE, META_KEYS } from "./constants.js";
import { isYamlMapping } from "./utils.js";
const rule = {
    meta: {
        type: "layout",
        fixable: "code",
        docs: {
            description: "Prefer root-level key ordering by meta → default locale → all locales → other keys, with intra-group alphabetical sorting.",
        },
        messages: {
            orderedKeys: "Key '{{key}}' is out of order. Expected ordering: meta keys, default locale, all locales, other keys. Keys in each group should be sorted alphabetically.",
        },
        schema: [
            {
                type: "object",
                properties: {
                    metaKeys: { type: "array" },
                    defaultLocale: { type: "string", minLength: 2 },
                    allowedLocales: { type: "array" },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [],
    create(context) {
        const options = context?.options[0] ?? {};
        const metaKeys = options.metaKeys ?? META_KEYS;
        const defaultLocale = options.defaultLocale
            ? [options.defaultLocale]
            : [DEFAULT_LOCALE];
        const allowedLocales = (options.allowedLocales ?? ALL_LOCALE_CODES).filter((l) => !defaultLocale.includes(l));
        return {
            YAMLDocument(doc) {
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                const rootKeys = [];
                for (const pair of root.pairs) {
                    if (!pair.key)
                        continue;
                    rootKeys.push(String(getStaticYAMLValue(pair.key)));
                }
                const unsortedKeyRanks = [];
                for (const group of [metaKeys, defaultLocale, allowedLocales]) {
                    const keysInGroup = rootKeys.filter((k) => group.includes(k));
                    for (const [idx, k] of keysInGroup.entries()) {
                        const keyGroup = getKeyGroup(k, metaKeys, defaultLocale, allowedLocales);
                        unsortedKeyRanks.push({
                            key: k,
                            groupName: keyGroup,
                            groupPosition: KEY_GROUPS.indexOf(keyGroup),
                            keyPositionInGroup: rankKeyInGroup(k, keysInGroup, group),
                            keyActualPosition: rootKeys.indexOf(k),
                        });
                    }
                }
                const miscOtherKeys = rootKeys.filter((k) => !metaKeys.includes(k) &&
                    !defaultLocale.includes(k) &&
                    !allowedLocales.includes(k));
                for (const [idx, otherKey] of miscOtherKeys.entries()) {
                    unsortedKeyRanks.push({
                        key: otherKey,
                        groupName: "other",
                        groupPosition: KEY_GROUPS.indexOf("other"),
                        keyPositionInGroup: idx,
                        keyActualPosition: rootKeys.indexOf(otherKey),
                    });
                }
                const sortedKeyRanks = sortKeys(unsortedKeyRanks);
                const sortedPlainkeys = sortedKeyRanks.map((keyRank) => keyRank.key);
                let runningIndex = 0;
                for (const pair of root.pairs) {
                    if (!pair.key || !pair.value)
                        continue;
                    const stringKey = String(getStaticYAMLValue(pair.key));
                    if (runningIndex !== sortedPlainkeys.indexOf(stringKey)) {
                        context.report({
                            loc: pair.key.loc,
                            messageId: "orderedKeys",
                            data: {
                                key: stringKey,
                            },
                        });
                    }
                    runningIndex += 1;
                }
            },
        };
    },
};
export default rule;
const KEY_GROUPS = ["meta", "default", "locales", "other"];
const getKeyGroup = (key, metaKeys, defaultLocale, allowedLocales) => {
    switch (true) {
        case metaKeys.includes(key):
            return "meta";
        case defaultLocale.includes(key):
            return "default";
        case allowedLocales.includes(key):
            return "locales";
        default:
            return "other";
    }
};
const rankKeyInGroup = (targetKey, otherKeysInGroup, groupKeys) => {
    const rankedPresentKeys = [];
    for (const groupKey of groupKeys) {
        if (otherKeysInGroup.includes(groupKey))
            rankedPresentKeys.push(groupKey);
    }
    return rankedPresentKeys.indexOf(targetKey);
};
const sortKeys = (rankedKeys) => {
    const intraGroupSortedKeys = [];
    for (const group of KEY_GROUPS) {
        const keysInGroup = rankedKeys.filter((key) => key.groupName === group);
        const sortedKeysInGroup = keysInGroup.sort((a, b) => a.keyPositionInGroup - b.keyPositionInGroup);
        intraGroupSortedKeys.push(...sortedKeysInGroup);
    }
    return intraGroupSortedKeys.sort((a, b) => a.groupPosition - b.groupPosition);
};
