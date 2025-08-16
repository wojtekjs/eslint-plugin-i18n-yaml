import { TSESLint } from "@typescript-eslint/utils";
import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES, META_KEYS } from "./constants.js";
import { isYamlMapping } from "./utils.js";

type RuleOptions = {
  allowedLocales?: string[];
  allowedNonLocaleKeys?: string[];
};

type Options = [RuleOptions?];
type MessageIds = "disallowedRootKey";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
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
  defaultOptions: [],

  create(context) {
    const options = context.options[0] ?? ({} as RuleOptions);
    const allowedLocales = options?.allowedLocales ?? ALL_LOCALE_CODES;
    const allowedNonLocaleKeys = options?.allowedNonLocaleKeys ?? META_KEYS;

    const allAllowedKeys = [...allowedNonLocaleKeys, ...allowedLocales];

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
};

export default rule;
