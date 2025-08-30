import { ESLintUtils } from "@typescript-eslint/utils";
const createRule = ESLintUtils.RuleCreator((ruleName) => `https://github.com/wojtekjs/eslint-plugin-i18n-yaml#i18n-yaml${ruleName}`);
export default createRule;
