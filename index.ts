import type { Linter, Rule } from "eslint";
import yamlParser from "yaml-eslint-parser";

import type { TSESLint } from "@typescript-eslint/utils";
import allowedRootKeys from "./src/rule-allowed-root-keys";
import deepKeyParity from "./src/rule-deep-key-parity";
import defaultLocalePresent from "./src/rule-default-locale-present";
import keyOrder from "./src/rule-key-order";
import maxDepth from "./src/rule-max-depth";
import placeholderFormat from "./src/rule-placeholder-format";
import placeholderParity from "./src/rule-placeholder-parity";
import valueParity from "./src/rule-value-parity";

export const PLUGIN_NAME = "i18n-yaml" as const;

type AnyRule =
  | TSESLint.RuleModule<string, readonly unknown[]>
  | Rule.RuleModule;

// 1) Rules map (typed, validated)
const rawRules = {
  "default-locale-present": defaultLocalePresent,
  "allowed-root-keys": allowedRootKeys,
  "deep-key-parity": deepKeyParity,
  "placeholder-parity": placeholderParity,
  "max-depth": maxDepth,
  "key-order": keyOrder,
  "placeholder-format": placeholderFormat,
  "value-parity": valueParity,
} satisfies Record<string, AnyRule>;

export const rules: Record<string, Rule.RuleModule> = Object.fromEntries(
  Object.entries(rawRules).map(([k, v]) => [k, v as unknown as Rule.RuleModule])
);

// 2) Recommended flat-config preset (plain object/array; no defineConfig)
export const configs = {
  recommended: [
    {
      name: "i18n-yaml:recommended",
      files: ["**/*.yml", "**/*.yaml"], // or your narrower *.i18n.yml pattern
      languageOptions: { parser: yamlParser },
      plugins: { [PLUGIN_NAME]: { rules } },
      rules: Object.fromEntries(
        Object.keys(rules).map((name) => [`${PLUGIN_NAME}/${name}`, "warn"])
      ) as Linter.RulesRecord,
    },
  ],
};

// 3) Default export (nice interop)
export default { rules, configs };
