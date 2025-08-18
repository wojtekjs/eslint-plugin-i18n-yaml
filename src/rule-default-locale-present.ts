import type { TSESLint } from "@typescript-eslint/utils";
import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import { isYamlMapping } from "./utils.js";

/**
 * Type for the rule-specific options available in this rule.
 */
type RuleOptions = {
  defaultLocale?: string;
};
/**
 * The options tuple required by the `RuleModule` type from TSESLint.
 */
type Options = [RuleOptions?];
/**
 * String literal type for the MessageIds. This determines what keys are required under `messages` inside of `meta`.
 */
type MessageIds = "missingDefaultLocale";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Require default language to be present at the YAML root.",
      url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamldefault-locale-present",
    },
    schema: [
      {
        type: "object",
        properties: {
          defaultLocale: { type: "string", minLength: 2 },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      // we can have multiple. these are templates for reports we can make. placeholders mean the report MUST take a data arg with the key(s) being the same as the placeholder(s)
      missingDefaultLocale: "Missing default locale '{{defaultLang}}' at root",
    },
  },
  defaultOptions: [],

  create(context) {
    const options = (context.options[0] ?? {}) as RuleOptions;
    const defaultLang = options.defaultLocale ?? "en";

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;

        const anchor = (root.loc ?? doc.loc)?.start;

        const hasDefault = root.pairs.some((pair) => {
          if (!pair.key) return false;
          const key = getStaticYAMLValue(pair.key);
          return typeof key === "string" && key === defaultLang;
        });

        if (!hasDefault) {
          context.report({
            // use just the first key in the YAML as the error point
            loc: { start: anchor, end: anchor },
            messageId: "missingDefaultLocale",
            data: { defaultLang }, // required to fill the `defaultLang` placeholder we put in the message.
          });
        }
      },
    };
  },
};

export default rule;
