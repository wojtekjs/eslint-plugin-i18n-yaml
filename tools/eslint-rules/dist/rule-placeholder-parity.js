import { getStaticYAMLValue } from "yaml-eslint-parser";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";
const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce usage of identical placeholders in reciprocal keys across locales.",
            url: "",
        },
        schema: [],
        messages: {
            placeholderDisparity: "Placeholder usage for key '{{reportedKey}}' is not consistent across locales ({{variants}}) • {{usageList}}",
        },
    },
    defaultOptions: [],
    create(context) {
        return {
            YAMLDocument(doc) {
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                const kppMap = new Map();
                for (const localeBlock of root.pairs) {
                    if (!localeBlock.key || !localeBlock.value)
                        continue;
                    const stringLocKey = String(getStaticYAMLValue(localeBlock.key));
                    if (!isLocaleCode(stringLocKey))
                        continue;
                    dfsPlaceholders(localeBlock.value, [stringLocKey], kppMap);
                }
                for (const v of kppMap.values()) {
                    // if it is bigger than 1 it means that for that key, multiple different placeholder sets were registered
                    const variants = v.usageMap.size;
                    if (variants <= 1)
                        continue;
                    for (const loc of v.locations) {
                        context.report({
                            loc,
                            messageId: "placeholderDisparity",
                            data: {
                                reportedKey: v.key,
                                usageList: formatUsageListMessage(v.usageMap),
                                variants: `${variants} variants`,
                            },
                        });
                    }
                }
            },
        };
    },
};
export default rule;
const formatUsageListMessage = (usageMap) => {
    // sample message: 'en, fr -> {count}, {name}; es -> ∅'
    let msgArr = [];
    for (const [key, value] of usageMap) {
        const locsArr = Array.from(value).sort();
        const locs = locsArr.length > 3
            ? locsArr
                .slice(0, 3)
                .join(", ")
                .concat(`, … (+${locsArr.length - 3})`)
            : locsArr.join(", ");
        const phsArr = JSON.parse(key)
            .map((k) => `{${k}}`)
            .sort();
        const phs = phsArr.length > 0 ? phsArr.join(", ") : "∅";
        msgArr.push({
            locales: locsArr,
            localesCount: locsArr.length,
            placeholders: phsArr,
            displayMsg: locs + " → " + phs,
        });
    }
    msgArr.sort((a, b) => b.localesCount - a.localesCount ||
        b.placeholders.length - a.placeholders.length ||
        (a.locales[0] ?? "").localeCompare(b.locales[0] ?? "") ||
        a.placeholders.join("|").localeCompare(b.placeholders.join("|")));
    return msgArr.map((m) => m.displayMsg).join("; ");
};
const formatDisplayKey = (fullPath) => {
    const rel = fullPath.slice(1); // strip locale
    if (rel.length === 0)
        return "";
    // collect trailing numeric indices
    let i = rel.length - 1;
    const indices = [];
    while (i >= 0 && /^\d+$/.test(rel[i])) {
        indices.unshift(rel[i]);
        i--;
    }
    const base = rel[i];
    if (base !== undefined) {
        return base + indices.map((n) => `[${n}]`).join("");
    }
    // array directly under the locale (no named base key)
    // e.g. ["en","0","1"] -> "[0][1]"
    return indices.length ? `[${indices.join("][")}]` : rel[rel.length - 1];
};
const updateKppMap = (kppMap, loc, path, phs, locale) => {
    const strId = JSON.stringify(path.slice(1)); // removing locale
    // sorting since order of placeholders doesn't matter. using set since duplicate placeholders don't matter
    const phsUniqueArray = Array.from(new Set(phs.sort()));
    // using an array because all sets stringify to {}
    const phId = JSON.stringify(phsUniqueArray);
    const displayKey = formatDisplayKey(path);
    if (!kppMap.has(strId)) {
        const keyInfo = {
            key: displayKey,
            usageMap: new Map([
                [phId, new Set([locale])],
            ]),
            locations: new Set([loc]),
        };
        kppMap.set(strId, keyInfo);
    }
    else {
        const keyPhInfo = kppMap.get(strId);
        keyPhInfo?.locations.add(loc);
        if (keyPhInfo?.usageMap.has(phId)) {
            keyPhInfo.usageMap.get(phId)?.add(locale);
        }
        else {
            keyPhInfo?.usageMap.set(phId, new Set([locale]));
        }
    }
};
const dfsPlaceholders = (node, currPath, kppMap) => {
    if (node.type === "YAMLScalar") {
        // m[0] gives the entire raw match like '{hey}' and m[1], m[2], etc. are the "capturing groups", like 'hey'
        const phs = [...String(node.value).matchAll(PH_RE)].map((m) => m[1]);
        if (phs && isLocaleCode(currPath[0]) && node.loc) {
            updateKppMap(kppMap, node.loc, currPath, phs, currPath[0]);
        }
    }
    else if (isYamlMapping(node)) {
        for (const pair of node.pairs) {
            const pV = pair.value;
            if (!pair.key || !pV)
                continue;
            const stringKey = String(getStaticYAMLValue(pair.key));
            currPath.push(stringKey);
            // recursing regardless of type so that the triple if statement here can handle all values
            dfsPlaceholders(pV, currPath, kppMap);
            currPath.pop();
        }
    }
    else if (isYamlSequence(node)) {
        for (const [idx, item] of node.entries.entries()) {
            if (!item)
                continue;
            currPath.push(String(idx));
            dfsPlaceholders(item, currPath, kppMap);
            currPath.pop();
        }
    }
};
// regex to find placeholders marked with curly braces, and allowing lookback for escaped braces
const PH_RE = /(?<!\\)(?<!\{)\{([A-Za-z_][A-Za-z0-9_]*)\}(?!\})/g;
