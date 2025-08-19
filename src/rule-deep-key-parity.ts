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
      url: "",
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

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        if (!isYamlMapping(doc.content)) return;

        // TODO modify the 2 loops below around allDeepKeys to be just one. the gatherKeys should build and return the 2 maps and the allRelPaths set
        // * doing this ^ means the part inside the 2nd for in loop needs to happen inside of where i am currently pushing keys into the `gatheredKeys` array inside gatherKeys()
        // * it also means giving gatherKeys new arguments so it can recurse over this properly

        // Gathering all keys from locale on down, excluding root-level locales themselves
        let allDeepKeys: DeepKey[] = [];
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          const stringLocaleKey = String(getStaticYAMLValue(localeBlock.key));
          if (!isLocaleCode(stringLocaleKey)) continue;

          // this mutates the allDeepKeys array in place
          gatherKeys(localeBlock.value, allDeepKeys, stringLocaleKey, [
            stringLocaleKey,
          ]);
        }

        // Creating set-based maps for O(1)/O(k) compute speeds - important on large YAMLs with hundreds of keys
        const localeToPathsMap = new Map<LocaleCode, Set<string>>();
        const pathsToLocaleMap = new Map<string, Set<LocaleCode>>();
        const allRelPaths = new Set<string>();
        const allLocales = new Set<LocaleCode>();
        for (const deepKey of allDeepKeys) {
          const loc = deepKey.locale;
          // Stringifying path to avoid reliance on dots in th path and ensure each path is unique
          const keyRelId = JSON.stringify(deepKey.keyPath.slice(1));

          const locSet = localeToPathsMap.get(loc) ?? new Set<string>();
          locSet.add(keyRelId);
          localeToPathsMap.set(loc, locSet);

          const rpSet = pathsToLocaleMap.get(keyRelId) ?? new Set<LocaleCode>();
          rpSet.add(loc);
          pathsToLocaleMap.set(keyRelId, rpSet);

          allRelPaths.add(keyRelId);
          allLocales.add(loc);
        }

        if (allLocales.size < 2) return; // file does't contain enough locales for comparison, iteration is wasted compute cost

        // Check and report loop
        const allRelPathsArray = Array.from(allRelPaths);
        const EMPTY_PATH_SET = new Set<string>();
        const EMPTY_LOCALE_SET = new Set<LocaleCode>();

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

type DeepKey = {
  key: string;
  locale: LocaleCode;
  keyPath: string[];
};

const gatherKeys = (
  currNode: AST.YAMLNode,
  gatheredKeys: DeepKey[],
  locale: LocaleCode,
  currentPath: string[]
): DeepKey[] => {
  // Ignores AST.Anchor and AST.Alias
  if (isYamlMapping(currNode)) {
    for (const pair of currNode.pairs) {
      // Add key to running count
      if (!pair.key) continue;
      const keyString = String(getStaticYAMLValue(pair.key));
      const updatedPath = [...currentPath, keyString];
      gatheredKeys.push({
        key: keyString,
        locale: locale,
        keyPath: updatedPath,
      });

      // Evaluate whether to continue recursing
      const pairValue = pair.value;
      if (!pairValue) continue;

      if (isYamlMapping(pairValue)) {
        gatherKeys(pairValue, gatheredKeys, locale, updatedPath);
      } else if (isYamlSequence(pairValue)) {
        for (const item of pairValue.entries) {
          if (!item) continue;
          gatherKeys(item, gatheredKeys, locale, updatedPath);
        }
      }
    }
    // coverage for sequences for cases like: [ { a: 1 }, { b: 2 } ]
  } else if (isYamlSequence(currNode)) {
    // .entries gives access to the list items so we can iterate over them
    for (const item of currNode.entries) {
      if (!item) continue;
      gatherKeys(item, gatheredKeys, locale, currentPath);
    }
  }
  return gatheredKeys;
};
