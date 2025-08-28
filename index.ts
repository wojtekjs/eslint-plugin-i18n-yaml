import { Linter } from "eslint";
import yamlParser from "yaml-eslint-parser";

export const PLUGIN_NAME = "i18n-yaml";

export const rules = {};

export const configs = {
  // Enables the plugin for *.i18n.yaml files with sane defaults.
  "flat/recommended": [
    {
      name: "i18n-yaml:recommended", // convention is name:purpose
      files: ["**/*.i18n.yaml", "**/*.i18n.yml"],
      languageOptions: {
        // IMPORTANT: use the YAML parser
        parser: yamlParser,
      },
      plugins: {
        // This states the plugins namespace. It needs to be listed under this in the project its being used
        [PLUGIN_NAME]: { rules },
      },
      // Rules are namespaced. They must always start with the name assigned under `plugins`, followed by a slash and then the rule name
      // (Only core/default ESLint rules do not start with a slash-prefixed namespace)
      rules: {
        [`${PLUGIN_NAME}/default-locale-present`]: "error",
        [`${PLUGIN_NAME}/allowed-root-keys`]: "error",
        [`${PLUGIN_NAME}/deep-key-parity`]: "warn",
        [`${PLUGIN_NAME}/placeholder-parity`]: "warn",
        [`${PLUGIN_NAME}/max-depth`]: "error",
        [`${PLUGIN_NAME}/key-order`]: "warn",
        [`${PLUGIN_NAME}/placeholder-format`]: "error",
        [`${PLUGIN_NAME}/value-parity`]: "warn",
      },
    },
  ] as Linter.Config[],
};
