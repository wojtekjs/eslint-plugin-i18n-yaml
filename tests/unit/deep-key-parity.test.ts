import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import deepKeyParity from "../../src/rule-deep-key-parity";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

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
    {
      name: "both locales: scalar at root (no keys)",
      filename: "valid.yaml",
      code: `
en: 1
fr: 2
  `,
    },
    {
      name: "both locales: empty mapping at root",
      filename: "valid.yaml",
      code: `
en: {}
fr: {}
  `,
    },
    {
      name: "both locales: sequence at root (scalars)",
      filename: "valid.yaml",
      code: `
en: [1, 2, 3]
fr: [4, 5]
  `,
    },
    {
      name: "both locales: sequence at root (objects inside)",
      filename: "valid.yaml",
      code: `
en:
  - { a: 1 }
  - { b: 2 }
fr:
  - { a: 9 }
  - { b: 8 }
  `,
    },
    {
      name: "empty-string key matched across locales",
      filename: "valid.yaml",
      code: `
en:
  "": 1
  a:
    "": 2
fr:
  "": 3
  a:
    "": 4
  `,
    },
    {
      name: "multi-document YAML: one doc has only non-locale keys (vacuous)",
      filename: "valid.yaml",
      code: `
---
_meta: 1
config: { debug: true }
# no locales here
---
en:
  a: 1
fr:
  a: 2
  `,
    },
    {
      name: "mapping root with only non-locale keys (no locales → vacuous)",
      filename: "valid.yaml",
      code: `
_meta: 1
config:
  debug: true
  `,
    },
    // TODO aliases currently unsupported by will be later
    //     {
    //       name: "anchors/aliases under a key (identical usage; parity by parent key only)",
    //       filename: "valid.yaml",
    //       code: `
    // en:
    //   a: &X
    //     b: 1
    //     c: 2
    //   ref: *X
    // fr:
    //   a: &Y
    //     b: 9
    //     c: 8
    //   ref: *Y
    //   `,
    //     },
    {
      name: "SCL-only document (only SCL present)",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
fr:
  a: 1
  b:
    c: 2
  `,
    },
    {
      name: "SCL present; non-SCL locales are scalars (ignored for reporting)",
      filename: "valid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
fr:
  a: 1
  b:
    c: 2
en: 42
de: null
  `,
    },
  ],

  // ❌ INVALID
  invalid: [
    {
      name: "two locales; one missing a top-level key (block)",
      filename: "invalid.yaml",
      code: `
en:
  a: 1
  b: 2
fr:
  a: 3
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "two locales; one missing a deeply nested key (block)",
      filename: "invalid.yaml",
      code: `
en:
  user:
    name: "Alice"
    age: 30
fr:
  user:
    name: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "two locales; one missing a top-level key defined via flow in the other",
      filename: "invalid.yaml",
      code: `
en: { a: 1, b: 2 }
fr:
  a: 3
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "two locales; one missing a deeply nested key defined via flow in the other",
      filename: "invalid.yaml",
      code: `
en: { user: { name: "Alice", age: 30 } }
fr:
  user:
    name: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "three locales; one missing a shared top-level key present in the other two",
      filename: "invalid.yaml",
      code: `
en: { a: 1 }
fr: { a: 2 }
de: {}
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "de",
            scope: "key",
            missingKey: "a",
            expectedPath: "de.a",
            localesWithKey: "'en', 'fr'",
          },
        },
      ],
    },
    {
      name: "three locales; different locales each missing different nested keys",
      filename: "invalid.yaml",
      code: `
en:
  user:
    name: "A"
    age: 10
fr:
  user:
    name: "B"
de:
  user:
    age: 30
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en', 'de'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "de",
            scope: "nested key",
            missingKey: "name",
            expectedPath: "de.user.name",
            localesWithKey: "'en', 'fr'",
          },
        },
      ],
    },
    {
      name: "sequences of objects: one locale missing a key found in the other’s sequence objects",
      filename: "invalid.yaml",
      code: `
en:
  items:
    - { a: 1 }
    - { a: 2 }
fr:
  items:
    - {}
    - {}
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "fr.items.a",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "sequence of scalars vs sequence containing objects with keys (same path)",
      filename: "invalid.yaml",
      code: `
en:
  items: [1, 2, 3]
fr:
  items:
    - { a: 1 }
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "en.items.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    {
      name: "empty sequence vs sequence of objects with keys",
      filename: "invalid.yaml",
      code: `
en:
  items: []
fr:
  items:
    - { a: 1 }
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "en.items.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    // TODO ? consider whether i want this to be picked up by this rule or whether this is more for the value parity rule...
    {
      name: "mixed array depths: one vs nested array of objects",
      filename: "invalid.yaml",
      code: `
en:
  items:
    - { a: 1 }
fr:
  items:
    - - { a: 1 }
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "en.items.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    {
      name: "nested key is mapping in one locale, scalar in another",
      filename: "invalid.yaml",
      code: `
en:
  user:
    name: "Alice"
    age: 30
fr:
  user: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "name",
            expectedPath: "fr.user.name",
            localesWithKey: "'en'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "empty-string key present in one locale but missing in another (top-level)",
      filename: "invalid.yaml",
      code: `
en:
  "": 1
fr:
  a: 2
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "",
            expectedPath: "fr.",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "empty-string key present in one locale but missing in another (deep)",
      filename: "invalid.yaml",
      code: `
en:
  user:
    "": 1
fr:
  user:
    name: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "nested key",
            missingKey: "name",
            expectedPath: "en.user.name",
            localesWithKey: "'fr'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "",
            expectedPath: "fr.user.",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "special-character key missing in another (top-level)",
      filename: "invalid.yaml",
      code: `
en:
  "a.b": 1
fr:
  c: 2
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "c",
            expectedPath: "en.c",
            localesWithKey: "'fr'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "a.b",
            expectedPath: "fr.a.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "special-character key missing in another (deep)",
      filename: "invalid.yaml",
      code: `
en:
  user:
    "x[y]": 1
fr:
  user:
    z: 2
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "nested key",
            missingKey: "z",
            expectedPath: "en.user.z",
            localesWithKey: "'fr'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "x[y]",
            expectedPath: "fr.user.x[y]",
            localesWithKey: "'en'",
          },
        },
      ],
    },

    // TODO this is not throwing an error but should - need to update code
    {
      name: "locale present as empty mapping while others have keys",
      filename: "invalid.yaml",
      code: `
en: {}
fr:
  a: 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    // TODO this is not throwing an error but should - need to update code
    {
      name: "locale root is null while others have mappings",
      filename: "invalid.yaml",
      code: `
en: null
fr:
  a: 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    // TODO this is not throwing an error but should - need to update code
    {
      name: "locale root is scalar while others have mappings",
      filename: "invalid.yaml",
      code: `
en: "hello"
fr:
  a: 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    {
      name: "mixed mappings/sequences: nested object under a sequence missing",
      filename: "invalid.yaml",
      code: `
en:
  items:
    - { a: 1 }
fr:
  items:
    - 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "fr.items.a",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "multi-document YAML: one doc valid, another mismatched",
      filename: "invalid.yaml",
      code: `
---
en: { a: 1 }
fr: { a: 2 }
---
en: { b: 1 }
fr: { c: 3}
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "c",
            expectedPath: "en.c",
            localesWithKey: "'fr'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },

    // --- With singleComprehensiveLocale (SCL) ---
    {
      name: "SCL missing a top-level key present in others",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  a: 1
  b: 2
fr:
  a: 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "SCL missing a deeply nested key present in others",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  user:
    name: "Alice"
    age: 30
fr:
  user:
    name: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "SCL missing keys defined via flow in others",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en: { a: 1, b: 2 }
fr:
  a: 1
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "SCL missing keys inside sequence objects",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  items:
    - { a: 1 }
fr:
  items:
    - {}
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "fr.items.a",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    // TODO this is not throwing an error but should - need to update code
    // * overarching bug seems to be that empty mappings are skipped and the comparison doesn't run somehow as it should
    {
      name: "SCL is empty mapping while non-SCLs have nested keys",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  a:
    b: 1
fr: {}
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "a",
            expectedPath: "fr.a",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "SCL has scalar at a parent where others have children",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
en:
  user:
    name: "Alice"
    age: 30
fr:
  user: "X"
    `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "name",
            expectedPath: "fr.user.name",
            localesWithKey: "'en'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    // TODO this is not throwing an error but should - need to update code
    // * it appears if the locale isnt a mapping it gets fully skipped and this is causing a lot of issues
    // ! notably, it works on keys below locale, so its just the locale loop here
    {
      name: "locale root is sequence of scalars while other has mapping with keys",
      filename: "invalid.yaml",
      code: `
en: [1, 2, 3]
fr:
  a: 1
  `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    // TODO same as elsewhere issue
    {
      name: "locale root is empty sequence while other has mapping with keys",
      filename: "invalid.yaml",
      code: `
en: []
fr:
  a: 1
  `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "en",
            scope: "key",
            missingKey: "a",
            expectedPath: "en.a",
            localesWithKey: "'fr'",
          },
        },
      ],
    },
    {
      name: "nested key is mapping in one locale, null in another",
      filename: "invalid.yaml",
      code: `
en:
  user:
    name: "Alice"
    age: 30
fr:
  user: null
  `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "name",
            expectedPath: "fr.user.name",
            localesWithKey: "'en'",
          },
        },
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "nested key",
            missingKey: "age",
            expectedPath: "fr.user.age",
            localesWithKey: "'en'",
          },
        },
      ],
    },
    {
      name: "SCL with multi-doc: doc1 valid, doc2 SCL missing key",
      filename: "invalid.yaml",
      options: [{ singleComprehensiveLocale: "fr" }],
      code: `
---
en:
  a: 1
fr:
  a: 2
---
en:
  b: 1
fr: 
  c: 3
  `,
      errors: [
        {
          messageId: "deepKeyDisparity",
          data: {
            reportedLocale: "fr",
            scope: "key",
            missingKey: "b",
            expectedPath: "fr.b",
            localesWithKey: "'en'",
          },
        },
      ],
    },
  ],
});
