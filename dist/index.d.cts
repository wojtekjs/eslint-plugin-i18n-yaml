import { Rule, Linter } from 'eslint';
import yamlParser from 'yaml-eslint-parser';

declare const PLUGIN_NAME: "i18n-yaml";
declare const rules: Record<string, Rule.RuleModule>;
declare const configs: {
    recommended: {
        name: string;
        files: string[];
        languageOptions: {
            parser: typeof yamlParser;
        };
        plugins: {
            "i18n-yaml": {
                rules: Record<string, Rule.RuleModule>;
            };
        };
        rules: Linter.RulesRecord;
    }[];
};
declare const _default: {
    rules: Record<string, Rule.RuleModule>;
    configs: {
        recommended: {
            name: string;
            files: string[];
            languageOptions: {
                parser: typeof yamlParser;
            };
            plugins: {
                "i18n-yaml": {
                    rules: Record<string, Rule.RuleModule>;
                };
            };
            rules: Linter.RulesRecord;
        }[];
    };
};

export { PLUGIN_NAME, configs, _default as default, rules };
