import { getStaticYAMLValue } from "yaml-eslint-parser";
import createRule from "./rule-creator.js";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";
const deepKeyParity = createRule({
    name: "deep-key-parity",
    meta: {
        type: "problem",
        docs: {
            description: "Enforce key parity between locales in an i18n YAML file.",
        },
        messages: {
            deepKeyDisparity: 
            // `scope` can be 'key' if its second-level or `nested key` if its third-level and deeper
            "Locale '{{reportedLocale}}' is missing {{scope}} '{{missingKey}}' (expected path: {{expectedPath}}) • Present in: {{localesWithKey}}",
        },
        schema: [
            {
                type: "object",
                properties: {
                    singleComprehensiveLocale: {
                        type: "string",
                        minLength: 2,
                        maxLength: 2,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            singleComprehensiveLocale: null,
        },
    ],
    create(context, [options]) {
        const singleComprehensiveLocale = options.singleComprehensiveLocale;
        const EMPTY_PATH_SET = new Set();
        const EMPTY_LOCALE_SET = new Set();
        return {
            YAMLDocument(doc) {
                if (!isYamlMapping(doc.content))
                    return;
                const { pathsToLocaleMap, localeToPathsMap, allRelPaths, allLocales } = buildIndexes(doc.content);
                if (allLocales.size < 2)
                    return; // file does't contain enough locales for comparison, iteration is wasted compute cost
                // Check and report loop
                const allRelPathsArray = Array.from(allRelPaths);
                const reportedExpectedPaths = new Set();
                for (const localeBlock of doc.content.pairs) {
                    if (!localeBlock.key)
                        continue;
                    const currentLocale = String(getStaticYAMLValue(localeBlock.key));
                    if (!isLocaleCode(currentLocale))
                        continue;
                    // if user provides `singleComprehensiveLocale` we should only report on that one locale, nothing else
                    if (singleComprehensiveLocale != null &&
                        singleComprehensiveLocale !== currentLocale)
                        continue;
                    const presentRelPaths = localeToPathsMap.get(currentLocale) ?? EMPTY_PATH_SET;
                    for (const relId of allRelPathsArray) {
                        if (presentRelPaths.has(relId))
                            continue; // locale already has this so all good
                        const pathSegments = JSON.parse(relId);
                        const expectedPath = `${currentLocale}.${pathSegments.join(".")}`;
                        if (reportedExpectedPaths.has(expectedPath))
                            continue; // already reported on
                        const haveLocalesSet = pathsToLocaleMap.get(relId) ?? EMPTY_LOCALE_SET;
                        const localesWithKey = Array.from(haveLocalesSet)
                            .map((l) => `'${l}'`)
                            .join(", ");
                        const missingKey = pathSegments[pathSegments.length - 1];
                        const scope = 
                        // comparing to 1 because path construction earlier strips the first step of the path (the locale)
                        pathSegments.length === 1 ? "key" : "nested key";
                        context.report({
                            loc: localeBlock.key.loc,
                            messageId: "deepKeyDisparity",
                            data: {
                                reportedLocale: currentLocale,
                                scope,
                                missingKey,
                                expectedPath,
                                localesWithKey,
                            },
                        });
                        reportedExpectedPaths.add(expectedPath);
                    }
                }
            },
        };
    },
});
export default deepKeyParity;
const buildIndexes = (docContent) => {
    // Creating set-based maps for O(1)/O(k) compute speeds - important on large YAMLs with hundreds of keys
    const init = {
        localeToPathsMap: new Map(),
        pathsToLocaleMap: new Map(),
        allRelPaths: new Set(),
        allLocales: new Set(),
    };
    return docContent.pairs.reduce((acc, localeBlock) => {
        if (!localeBlock.key || !localeBlock.value)
            return acc;
        const stringLocaleKey = String(getStaticYAMLValue(localeBlock.key));
        if (!isLocaleCode(stringLocaleKey))
            return acc;
        // mutates acc objects
        keyDfs(localeBlock.value, stringLocaleKey, [stringLocaleKey], acc);
        return acc;
    }, init);
};
const mapGetSet = (map, key) => {
    let s = map.get(key);
    if (!s) {
        s = new Set();
        map.set(key, s);
    }
    return s;
};
const keyDfs = (currNode, locale, currentPath, ctx) => {
    const updateIndexes = (locale, keyPathSegments) => {
        // Stringifying path to avoid reliance on dots in the path and ensure each path is unique
        const keyRelPathId = JSON.stringify(keyPathSegments);
        mapGetSet(ctx.localeToPathsMap, locale).add(keyRelPathId);
        mapGetSet(ctx.pathsToLocaleMap, keyRelPathId).add(locale);
        ctx.allRelPaths.add(keyRelPathId);
        ctx.allLocales.add(locale);
    };
    // Ignores AST.Anchor and AST.Alias
    if (isYamlMapping(currNode)) {
        for (const pair of currNode.pairs) {
            if (!pair.key)
                continue;
            const keyString = String(getStaticYAMLValue(pair.key));
            // preferring push/pop pattern over spreading into a new const to avoid wasteful memory alloc
            currentPath.push(keyString);
            updateIndexes(locale, currentPath.slice(1));
            try {
                // Evaluate whether to continue recursing
                const pV = pair.value;
                if (pV && (isYamlMapping(pV) || isYamlSequence(pV))) {
                    keyDfs(pV, locale, currentPath, ctx);
                }
                // try/finally pattern ensures path array has no leftover elements even if a throw/continue occurs inside the recursion
            }
            finally {
                // removing the current key once it and all it's (potential) children were walked through, to make place for the next key
                currentPath.pop();
            }
        }
        // coverage for sequences for cases like: [ { a: 1 }, { b: 2 } ]
    }
    else if (isYamlSequence(currNode)) {
        // .entries gives access to the list items so we can iterate over them
        for (const item of currNode.entries) {
            if (!item)
                continue;
            keyDfs(item, locale, currentPath, ctx);
        }
    }
};
