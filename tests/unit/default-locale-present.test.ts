import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import defaultLocalePresent from "../../src/rule-default-locale-present";

const tester = new RuleTester({
  languageOptions: { parser: yamlParser },
});

tester.run("default-locale-present", defaultLocalePresent as any, {
  // ✅ Success cases
  valid: [
    {
      name: "Preset default locale",
      filename: "sample.yaml",
      code: `
en: 
    title: test
fr:
    title: test
        `,
    },
    {
      name: "Custom default locale",
      filename: "customsample.yaml",
      code: `
en:
    title: test
pl:
    title: test
      `,
      options: [{ defaultLocale: "pl" }],
    },
    {
      name: "Empty yaml",
      filename: "emptysample.yaml",
      code: ``,
    },
    {
      name: "Default locale present as non-mapping",
      filename: "nonmapping.yaml",
      code: `
- en
- fr
- test
        `,
    },
    {
      name: "Null default locale",
      filename: "nulldl.yaml",
      code: `
en: null
        `,
    },
    {
      name: "Empty default locale",
      filename: "emptydl.yaml",
      code: `
en:
        `,
    },
    {
      name: "Comment-only yaml",
      filename: "commentsonly.yaml",
      code: `
# test comment 
        `,
    },
  ],

  // ❌ Error cases
  invalid: [
    {
      name: "Missing standard default locale",
      filename: "badsample.yaml",
      code: `
fr:
    title: test
pl:
    title: test
      `,
      errors: [{ messageId: "missingDefaultLocale" }],
    },
    {
      name: "Missing custom default locale",
      filename: "custombadsample.yaml",
      code: `
en: 
    title: test
fr:
    title: test
        `,
      errors: [{ messageId: "missingDefaultLocale" }],
      options: [{ defaultLocale: "pl" }],
    },
    {
      name: "No locales",
      filename: "nolocalessample.yaml",
      code: `
key: value
name: text
        `,
      errors: [{ messageId: "missingDefaultLocale" }],
    },
    {
      name: "Default locale nested below root",
      filename: "nesteddl.yaml",
      code: `
main:
    en: test
        `,
      errors: [{ messageId: "missingDefaultLocale" }],
    },
  ],
});
