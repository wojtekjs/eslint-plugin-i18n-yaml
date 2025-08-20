import { TSESLint } from "@typescript-eslint/utils";
import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import { LocaleCode } from "./constants.js";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "./utils.js";

type RuleOptions = {
  singleComprehensiveLocale?: LocaleCode;
};
type Options = [RuleOptions?];
type MessageIds = "deepKeyDisparity";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce key parity between locales in an i18n YAML file.",
      url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamldeep-keys-parity",
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
          singleComprehensiveLocale: { type: "string" },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [],

  create(context) {
    const options = (context.options[0] ?? {}) as RuleOptions;
    const singleComprehensiveLocale = options.singleComprehensiveLocale ?? null;

    const EMPTY_PATH_SET = new Set<string>();
    const EMPTY_LOCALE_SET = new Set<LocaleCode>();

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        if (!isYamlMapping(doc.content)) return;

        const { pathsToLocaleMap, localeToPathsMap, allRelPaths, allLocales } =
          buildIndexes(doc.content);

        if (allLocales.size < 2) return; // file does't contain enough locales for comparison, iteration is wasted compute cost

        // Check and report loop
        const allRelPathsArray = Array.from(allRelPaths);
        const reportedExpectedPaths = new Set<string>();
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key) continue;
          const currentLocale = String(getStaticYAMLValue(localeBlock.key));
          if (!isLocaleCode(currentLocale)) continue;

          // if user provides `singleComprehensiveLocale` we should only report on that one locale, nothing else
          if (
            singleComprehensiveLocale != null &&
            singleComprehensiveLocale !== currentLocale
          )
            continue;

          const presentRelPaths =
            localeToPathsMap.get(currentLocale) ?? EMPTY_PATH_SET;

          for (const relId of allRelPathsArray) {
            if (presentRelPaths.has(relId)) continue; // locale already has this so all good

            const pathSegments = JSON.parse(relId);
            const expectedPath = `${currentLocale}.${pathSegments.join(".")}`;

            if (reportedExpectedPaths.has(expectedPath)) continue; // already reported on

            const haveLocalesSet =
              pathsToLocaleMap.get(relId) ?? EMPTY_LOCALE_SET;
            const localesWithKey = Array.from(haveLocalesSet)
              .map((l) => `'${l}'`)
              .join(", ");

            const missingKey = pathSegments[pathSegments.length - 1];
            const scope: Scope =
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
};

export default rule;

type Scope = "key" | "nested key";

type Indexes = {
  localeToPathsMap: Map<LocaleCode, Set<string>>;
  pathsToLocaleMap: Map<string, Set<LocaleCode>>;
  allRelPaths: Set<string>;
  allLocales: Set<LocaleCode>;
};

const buildIndexes = (docContent: AST.YAMLMapping): Indexes => {
  // Creating set-based maps for O(1)/O(k) compute speeds - important on large YAMLs with hundreds of keys
  const init: Indexes = {
    localeToPathsMap: new Map<LocaleCode, Set<string>>(),
    pathsToLocaleMap: new Map<string, Set<LocaleCode>>(),
    allRelPaths: new Set<string>(),
    allLocales: new Set<LocaleCode>(),
  };

  return docContent.pairs.reduce<Indexes>((acc, localeBlock) => {
    if (!localeBlock.key || !localeBlock.value) return acc;
    const stringLocaleKey = String(getStaticYAMLValue(localeBlock.key));
    if (!isLocaleCode(stringLocaleKey)) return acc;

    // mutates acc objects
    keyDfs(localeBlock.value, stringLocaleKey, [stringLocaleKey], acc);
    return acc;
  }, init);
};

const mapGetSet = <K, V>(map: Map<K, Set<V>>, key: K): Set<V> => {
  let s = map.get(key);
  if (!s) {
    s = new Set<V>();
    map.set(key, s);
  }
  return s;
};

const keyDfs = (
  currNode: AST.YAMLNode,
  locale: LocaleCode,
  currentPath: string[],
  ctx: Indexes
): void => {
  const updateIndexes = (
    locale: LocaleCode,
    keyPathSegments: string[]
  ): void => {
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
      if (!pair.key) continue;
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
      } finally {
        // removing the current key once it and all it's (potential) children were walked through, to make place for the next key
        currentPath.pop();
      }
    }
    // coverage for sequences for cases like: [ { a: 1 }, { b: 2 } ]
  } else if (isYamlSequence(currNode)) {
    // .entries gives access to the list items so we can iterate over them
    for (const item of currNode.entries) {
      if (!item) continue;
      keyDfs(item, locale, currentPath, ctx);
    }
  }
};
