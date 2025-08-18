import { getStaticYAMLValue } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES, DEFAULT_LOCALE, META_KEYS } from "./constants.js";
import { isYamlMapping } from "./utils.js";
const rule = {
    meta: {
        type: "layout",
        fixable: "code",
        docs: {
            description: "Prefer root-level key ordering by meta → default locale → all locales → other keys, with intra-group alphabetical sorting.",
            url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamlkey-order",
        },
        messages: {
            orderedKeys: "Key '{{key}}' (group '{{group}}') is in position {{actualPosition}} but should be in position {{requiredPosition}}. Expected group order: meta (configured order) → default locale (single key) → all locales (A-Z) → other keys (A-Z).",
            suggestedFix: "Sort root keys into meta → default → locales (A-Z) → other (A-Z).",
        },
        schema: [
            {
                type: "object",
                properties: {
                    metaKeys: {
                        type: "array",
                        items: { type: "string" },
                        uniqueItems: true,
                    },
                    defaultLocale: { type: "string", minLength: 2 },
                    allowedLocales: {
                        type: "array",
                        items: { type: "string" },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [],
    create(context) {
        const options = context?.options[0] ?? {};
        const defaultLocale = options.defaultLocale ?? DEFAULT_LOCALE;
        const keyGroups = {
            meta: {
                expectedGroupPosition: 0,
                permittedKeys: options.metaKeys ?? META_KEYS,
            },
            default: {
                expectedGroupPosition: 1,
                permittedKeys: [defaultLocale],
            },
            locales: {
                expectedGroupPosition: 2,
                permittedKeys: (options.allowedLocales ?? ALL_LOCALE_CODES).filter((l) => l !== defaultLocale),
            },
            other: { expectedGroupPosition: 3, permittedKeys: [] },
        };
        return {
            YAMLDocument(doc) {
                let didOfferFix = false;
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                const srcText = context.sourceCode.text;
                const [mapStart, mapEnd] = root.range;
                const richRootPairs = buildRichRootPairs(root.pairs, keyGroups, mapStart, mapEnd, srcText);
                const sortedPositionedRichPairs = assignPositions(richRootPairs, keyGroups).sort(byRank);
                const keyIndexMap = new Map(
                // using originalIndex instead of the key string value allows better handling of duplicate keys
                sortedPositionedRichPairs.map((pair, i) => [pair.originalIndex, i]));
                for (const pair of richRootPairs) {
                    const expectedPositionInYAML = keyIndexMap.get(pair.originalIndex);
                    if (pair.originalIndex !== expectedPositionInYAML) {
                        context.report({
                            loc: pair.location,
                            messageId: "orderedKeys",
                            data: {
                                key: pair.key,
                                group: pair.group,
                                // Adding 1 to each to ensure user-facing count is 1-based (not 0-based)
                                actualPosition: pair.originalIndex + 1,
                                requiredPosition: expectedPositionInYAML + 1,
                            },
                        });
                        if (!didOfferFix) {
                            const firstChunkStart = richRootPairs[0].chunkStart;
                            // Capturing anything that might exist before the first pair (e.g., comments). Since these are at the top of the file they are likely to be meant to stay at the top
                            const prefix = srcText.slice(mapStart, firstChunkStart);
                            const chunks = sortedPositionedRichPairs.map((pair) => pair.textChunk);
                            // strip any leading newlines from the first chunk (so moved-first blocks don't add a blank line)
                            if (chunks[0])
                                chunks[0] = chunks[0].replace(/^\r?\n+/, "");
                            // ensure there's exactly one newline between prefix and the first chunk when needed
                            const needsNLBetweenPrefixAndFirst = prefix.length > 0 && // only execute this if there even is a prefix at all
                                !/\r?\n$/.test(prefix) && // prefix does NOT already end with \n (Mac) or \r\n (Windows)
                                !(chunks[0] && /^\r?\n/.test(chunks[0])); // first chunk does NOT already start with \n or \r\n
                            const head = prefix + (needsNLBetweenPrefixAndFirst ? "\n" : "");
                            const rebuilt = head +
                                // inserting the first chunk outside of the reducer since we don't want to insert new lines in the same way as for the rest
                                (chunks[0] ?? "") +
                                chunks.slice(1).reduce((acc, currChunk) => {
                                    const leftHasNL = /\r?\n$/.test(acc);
                                    const rightHasNL = /^\r?\n/.test(currChunk);
                                    return (acc + (leftHasNL || rightHasNL ? "" : "\n") + currChunk);
                                }, "");
                            context.report({
                                node: root,
                                messageId: "suggestedFix",
                                fix(fixer) {
                                    return fixer.replaceTextRange([mapStart, mapEnd], rebuilt);
                                },
                            });
                            didOfferFix = true;
                        }
                    }
                }
            },
        };
    },
};
export default rule;
const KEY_GROUPS = ["meta", "default", "locales", "other"];
const buildRichRootPairs = (basePairs, keyGroups, mapStart, mapEnd, srcText) => {
    const basePairLen = basePairs.length;
    if (basePairLen === 0)
        return [];
    // Precompute non-overlapping chunk starts (leading-comment policy)
    const regexCommentPattern = /^(?:\s*(?:#.*)?\r?\n)*\s*$/; // only blank/comment lines
    const chunkStarts = new Array(basePairLen);
    for (let i = 0; i < basePairLen; i++) {
        const pairStart = basePairs[i].range[0];
        const prevEnd = i === 0 ? mapStart : basePairs[i - 1].range[1];
        const between = srcText.slice(prevEnd, pairStart);
        // Policy: comments above keys always belong to that key except for lines above the first locale, those are assumed to be header comments that should say pinned at the top
        chunkStarts[i] =
            i === 0
                ? pairStart // replace with mapStart if i want to change policy to attach the top comment(s) to the first chunk rather than leaving them as header comment(s)
                : regexCommentPattern.test(between)
                    ? prevEnd
                    : pairStart;
    }
    return basePairs.flatMap((pair, idx) => {
        if (!pair.key)
            return [];
        const stringKey = String(getStaticYAMLValue(pair.key));
        const keyGroup = getKeyGroup(stringKey, keyGroups);
        const chunkStart = chunkStarts[idx];
        const nextStart = idx < basePairLen - 1 ? chunkStarts[idx + 1] : mapEnd;
        const pairTextChunk = srcText.slice(chunkStart, nextStart);
        // Returning an array because flatMap expects an array it can flatten (thereby extracting this one object)
        return [
            {
                key: stringKey,
                pair,
                group: keyGroup,
                groupPosition: keyGroups[keyGroup].expectedGroupPosition,
                originalIndex: idx,
                location: pair.key.loc,
                textChunk: pairTextChunk,
                chunkStart,
            },
        ];
    });
};
const assignPositions = (richPairs, keyGroups) => {
    // using a collator for more "human" sorting
    const collator = new Intl.Collator("en", {
        sensitivity: "base", // case- and accent-insensitive
        numeric: true, // "k2" < "k10"
    });
    const presentKeys = {
        meta: [],
        default: [],
        locales: [],
        other: [],
    };
    for (const p of richPairs)
        presentKeys[p.group].push(p.key);
    const expectedMetaOrder = keyGroups.meta.permittedKeys.filter((k) => presentKeys.meta.includes(k));
    const expectedLocalesOrder = [...presentKeys.locales].sort(collator.compare);
    const expectedOtherOrder = [...presentKeys.other].sort(collator.compare);
    const idx = {
        meta: new Map(expectedMetaOrder.map((k, i) => [k, i])),
        locales: new Map(expectedLocalesOrder.map((k, i) => [k, i])),
        other: new Map(expectedOtherOrder.map((k, i) => [k, i])),
    };
    return richPairs.map((p) => ({
        ...p,
        expectedPositionInGroup: p.group === "meta"
            ? idx.meta.get(p.key) ?? 0
            : p.group === "default"
                ? 0
                : p.group === "locales"
                    ? idx.locales.get(p.key) ?? 0
                    : idx.other.get(p.key) ?? 0,
    }));
};
const getKeyGroup = (key, keyGroups) => {
    if (keyGroups.meta.permittedKeys.includes(key))
        return "meta";
    if (key === keyGroups.default.permittedKeys[0])
        return "default";
    if (keyGroups.locales.permittedKeys.includes(key))
        return "locales";
    return "other";
};
const byRank = (a, b) => a.groupPosition - b.groupPosition ||
    a.expectedPositionInGroup - b.expectedPositionInGroup ||
    a.originalIndex - b.originalIndex;
