import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import allowedRootKeys from "../../src/rule-allowed-root-keys";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("allowed-root-keys rule", allowedRootKeys as any, {
  valid: [
    {
      name: "sinlge root key",
      filename: "valid1.yaml",
      code: `
en:
    test: hey
        `,
    },
  ],
  invalid: [],
});
