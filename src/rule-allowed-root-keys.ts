import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES, LocaleCode, META_KEYS } from "./constants.js";
import createRule from "./rule-creator.js";
import { isYamlMapping } from "./utils.js";

type RuleOptions = {
  allowedLocales: readonly LocaleCode[];
  allowedNonLocaleKeys: readonly string[];
};
type MessageIds = "disallowedRootKey";

const allowedRootKeys = createRule<[RuleOptions], MessageIds>({
  name: "allowed-root-keys",
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow non-locale or exceptional meta keys at root-level in i18n YAML files",
    },
    messages: {
      disallowedRootKey:
        "Key '{{key}}' is forbidden at root-level. Permitted keys: [{{allowedKeys}}]",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowedLocales: { type: "array" },
          allowedNonLocaleKeys: { type: "array" },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [
    {
      allowedLocales: ALL_LOCALE_CODES,
      allowedNonLocaleKeys: META_KEYS,
    },
  ],

  create(context, [options]) {
    const allAllowedKeys = [
      ...options.allowedNonLocaleKeys,
      ...options.allowedLocales,
    ];

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;

        for (const pair of root.pairs) {
          if (!pair.key) continue; // goes to the next pair; return would exit completely
          const key = String(getStaticYAMLValue(pair.key));
          if (!allAllowedKeys.includes(key)) {
            context.report({
              loc: pair.key?.loc,
              messageId: "disallowedRootKey",
              data: { key, allowedKeys: allAllowedKeys.join(", ") },
            });
          }
        }
      },
    };
  },
});

export default allowedRootKeys;
