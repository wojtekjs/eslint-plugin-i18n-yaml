import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import createRule from "./rule-creator.js";
import { isYamlMapping } from "./utils.js";
/**
 * Type for the rule-specific options available in this rule.
 */
type RuleOptions = {
  defaultLocale: string;
};
/**
 * String literal type for the MessageIds. This determines what keys are required under `messages` inside of `meta`.
 */
type MessageIds = "missingDefaultLocale";

const defaultLocalePresent = createRule<[RuleOptions], MessageIds>({
  name: "default-locale-present",
  meta: {
    type: "problem",
    docs: {
      description: "Require default language to be present at the YAML root.",
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
      missingDefaultLocale:
        "Missing default locale '{{defaultLocale}}' at root",
    },
  },
  defaultOptions: [{ defaultLocale: "en" }],

  create(context, [options]) {
    const { defaultLocale } = options;

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;

        const anchor = (root.loc ?? doc.loc)?.start;

        const hasDefault = root.pairs.some((pair) => {
          if (!pair.key) return false;
          const key = getStaticYAMLValue(pair.key);
          return typeof key === "string" && key === defaultLocale;
        });

        if (!hasDefault) {
          context.report({
            // use just the first key in the YAML as the error point
            loc: { start: anchor, end: anchor },
            messageId: "missingDefaultLocale",
            data: { defaultLocale }, // required to fill the `defaultLang` placeholder we put in the message.
          });
        }
      },
    };
  },
});

export default defaultLocalePresent;
