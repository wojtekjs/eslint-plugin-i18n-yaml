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
      // TODO move these into individual rules' settings so they are properly accessible and more clearly scoped
      settings: {
        [PLUGIN_NAME]: {
          defaultLocale: "en",
          locales: ["en", "fr", "de"], // TODO expand these to all langauges
          allowedMetaKeys: ["_meta"],
          maxDepth: 2,
          allowNonStringLeaves: false,
          placeholderRegex: "\\{([a-zA-Z0-9_]+)\\}",
          escapeDoubleBrace: true,
        },
      },
      // Rules are namespaced. They must always start with the name assigned under `plugins`, followed by a slash and then the rule name
      // (Only core/default ESLint rules do not start with a slash-prefixed namespace)
      rules: {
        [`${PLUGIN_NAME}/default-locale-present`]: "error",
        [`${PLUGIN_NAME}/allowed-root-locales`]: "error",
        [`${PLUGIN_NAME}/deep-keys-parity`]: "error",
        [`${PLUGIN_NAME}/placeholder-parity`]: "error",
        [`${PLUGIN_NAME}/max-depth`]: "error",
        [`${PLUGIN_NAME}/value-kind`]: "error",
      },
    },
  ] as Linter.Config[],
};
