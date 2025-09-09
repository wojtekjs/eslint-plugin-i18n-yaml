import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import deepKeyParity from "../../src/rule-deep-key-parity";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

// TODO add invalid tests

// TODO review valid tests - ensure comprehensiveness
tester.run("deep-key-parity rule", deepKeyParity as any, {
  valid: [
    {
      name: "empty document",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "comments only document",
      filename: "valid.yaml",
      code: `# just comments`,
    },
    {
      name: "non-mapping root: scalar",
      filename: "valid.yaml",
      code: `'hello'`,
    },
    {
      name: "non-mapping root: sequence",
      filename: "valid.yaml",
      code: `
- 1
- 2
- 3
    `,
    },
    {
      name: "single locale only",
      filename: "valid.yaml",
      code: `
en:
  a: 1
  b:
    c: 2
    `,
    },
    {
      name: "single locale with non-locale root keys",
      filename: "valid.yaml",
      code: `
_meta: v
en:
  a: 1
    `,
    },
    {
      name: "multiple locales with matching top-level keys (block)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
  b: 2
fr:
  a: 3
  b: 4
    `,
    },
    {
      name: "multiple locales with matching nested keys (block)",
      filename: "valid.yaml",
      code: `
en:
  user:
    profile:
      name: "W"
      age: 28
fr:
  user:
    profile:
      name: "X"
      age: 40
    `,
    },
    {
      name: "multiple locales with matching keys (flow)",
      filename: "valid.yaml",
      code: `
en: { a: { b: 1 }, c: 2 }
fr: { a: { b: 9 }, c: 5 }
    `,
    },
    {
      name: "matching keys inside sequences of objects",
      filename: "valid.yaml",
      code: `
en:
  items:
    - { a: 1 }
    - { a: 2 }
fr:
  items:
    - { a: 3 }
    `,
    },
    {
      name: "arrays of scalars only under locales",
      filename: "valid.yaml",
      code: `
en:
  tags: ["x", "y"]
fr:
  tags: ["a", "b"]
    `,
    },
    {
      name: "special-character keys matched (top-level and deep)",
      filename: "valid.yaml",
      code: `
en:
  "a.b":
    "x[y]": 1
fr:
  "a.b":
    "x[y]": 2
    `,
    },
    {
      name: "three+ locales all matching (deep)",
      filename: "valid.yaml",
      code: `
en:
  a:
    b:
      c: 1
fr:
  a:
    b:
      c: 2
de:
  a:
    b:
      c: 3
    `,
    },
    {
      name: "multi-document YAML with all docs valid",
      filename: "valid.yaml",
      code: `
---
en:
  a: 1
fr:
  a: 2
---
en:
  b:
    c: 1
es:
  b:
    c: 2
    `,
    },
    {
      name: "same keys but different order across locales",
      filename: "valid.yaml",
      code: `
en:
  a: 1
  b:
    c: 2
fr:
  b:
    c: 9
  a: 3
    `,
    },
    {
      name: "same mapping, block vs flow style between locales",
      filename: "valid.yaml",
      code: `
en:
  a:
    b: 1
    c: 2
fr:
  a: { b: 3, c: 4 }
    `,
    },
    {
      name: "both locales: empty mapping at a key (no children)",
      filename: "valid.yaml",
      code: `
en:
  a: {}
fr:
  a: {}
    `,
    },
    {
      name: "both locales: null at a key (no children)",
      filename: "valid.yaml",
      code: `
en:
  a: null
fr:
  a: null
    `,
    },
    {
      name: "one locale scalar, other empty mapping at same key (no children)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
fr:
  a: {}
    `,
    },
    {
      name: "both locales: empty sequence at a key",
      filename: "valid.yaml",
      code: `
en:
  items: []
fr:
  items: []
    `,
    },
    {
      name: "numeric/boolean keys (quoted vs unquoted) matched across locales",
      filename: "valid.yaml",
      code: `
en:
  true: 1
  "1": 2
fr:
  "true": 3
  1: 4
    `,
    },
    {
      name: "quoted vs unquoted special-char keys matched across locales",
      filename: "valid.yaml",
      code: `
en:
  "a.b": 1
fr:
  a.b: 2
    `,
    },
    {
      name: "same keys present but different value types (number vs string)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
fr:
  a: "1"
    `,
    },
    {
      name: "non-locale root keys interleaved before/between locales (ignored)",
      filename: "valid.yaml",
      code: `
_meta: v
en:
  a: 1
config: { debug: true }
fr:
  a: 2
    `,
    },
    {
      name: "hyphenated pseudo-locale present alongside real locales (ignored)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
en-GB:
  a: 2
fr:
  a: 3
    `,
    },
    {
      name: "SCL: non-SCL locale is empty mapping (still valid)",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
fr:
  a: 1
en: {}
    `,
    },
    {
      name: "SCL: non-locale root keys also present (ignored)",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
_meta: x
fr:
  a: 1
en:
  a: 1
    `,
    },
    {
      name: "SCL: SCL has all keys, others missing → no reports",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  a: 1
fr:
  a: 1
  b: 2
    `,
    },
    {
      name: "SCL: all locales match fully",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  a: 1
  b: 2
fr:
  a: 1
  b: 2
    `,
    },
    {
      name: "SCL: arrays of objects matched to others",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
fr:
  items:
    - { a: 1 }
    - { a: 2 }
en:
  items:
    - { a: 3 }
    `,
    },
  ],
  invalid: [],
});
