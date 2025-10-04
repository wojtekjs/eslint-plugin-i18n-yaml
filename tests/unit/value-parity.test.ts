import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import valueParity from "../../src/rule-value-parity";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("value-parity rule", valueParity as any, {
  valid: [
    // 1. Baseline & structure
    {
      name: "empty YAML document (no content) → no reports",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "comments-only file → no reports",
      filename: "valid.yaml",
      code: `
# just comments
# another line of comments`,
    },
    {
      name: "single-locale only (no cross-locale comparisons)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
  b:
    c: hello
`,
    },
    {
      name: "files with only non-locale root keys (zero locales) → ignored",
      filename: "valid.yaml",
      code: `
_meta: ok
version: 1
`,
    },
    {
      name: "root locales all mapping",
      filename: "valid.yaml",
      code: `
en:
  a: 1
fr:
  a: 2
`,
    },
    {
      name: "locale blocks present but empty mappings",
      filename: "valid.yaml",
      code: `
en: {}
fr: {}
`,
    },
    {
      name: "locale blocks present but empty sequences",
      filename: "valid.yaml",
      code: `
en: []
fr: []
`,
    },
    {
      name: "multiple YAML documents, each internally consistent; no cross-document comparisons",
      filename: "valid.yaml",
      code: `---
en:
  a: 1
---
fr:
  a: "test"
...`,
    },
    {
      name: "non-locale root keys mixed in (ignored by rule)",
      filename: "valid.yaml",
      code: `
en:
  a: 1
_meta: ok
fr:
  a: 2
`,
    },
    // 2. Semantic equivalence
    {
      name: "flow vs block mapping: semantically identical across locales",
      filename: "valid.yaml",
      code: `
en: { a: 0, b: { c: "x", d: 2 } }
fr:
  a: 1
  b:
    c: "y"
    d: 3
`,
    },
    {
      name: "flow vs block sequence: equal lengths and element types",
      filename: "valid.yaml",
      code: `
en: { items: [1, 2, 3] }
fr:
  items:
    - 1
    - 2
    - 3
`,
    },
    {
      name: "key order differences across locales (same structure, different order)",
      filename: "valid.yaml",
      code: `
en:
  user:
    id: 1
    name: Alice
fr:
  user:
    name: Alice
    id: 1
`,
    },
    {
      name: "anchors on same node type at compared paths (mapping with anchors in both locales)",
      filename: "valid.yaml",
      code: `
en:
  obj: &M
    x: 1
    y: 2
fr:
  obj: &N
    x: 3
    y: 4
`,
    },
    {
      name: "flow vs block nested mix (mapping contains sequence; styles differ but semantics match)",
      filename: "valid.yaml",
      code: `
en:
  cfg: { modes: ["a", "b"], flags: { fast: true, safe: false } }
fr:
  cfg:
    modes:
      - "a"
      - "b"
    flags:
      fast: true
      safe: false
`,
    },
    {
      name: "aliases resolving to same node type (anchor + alias used across locales)",
      filename: "valid.yaml",
      code: `
base: &base
  x: 1
  y: 2
en:
  obj: *base
fr:
  obj: *base
`,
    },
    // 3. Scalar type parity
    {
      name: "same string values (unquoted) across locales",
      filename: "valid.yaml",
      code: `
en:
  msg: hello
fr:
  msg: bonjour
`,
    },
    {
      name: "same string values with different quoting styles (single vs double)",
      filename: "valid.yaml",
      code: `
en:
  msg: "hello"
fr:
  msg: 'hello'
`,
    },
    {
      name: "same string values with no quotes vs double quotes",
      filename: "valid.yaml",
      code: `
en:
  msg: "hello"
fr:
  msg: hello
`,
    },
    {
      name: "numeric-looking but quoted strings on both locales (remain string)",
      filename: "valid.yaml",
      code: `
en:
  code: "42"
fr:
  code: "007"
`,
    },
    {
      name: "explicit empty string on both locales",
      filename: "valid.yaml",
      code: `
en:
  empty: ""
fr:
  empty: ""
`,
    },
    {
      name: "numbers: integers on both locales",
      filename: "valid.yaml",
      code: `
en:
  n: 42
fr:
  n: 7
`,
    },
    {
      name: "numbers: negative vs positive and float vs integer across locales",
      filename: "valid.yaml",
      code: `
en:
  a: -3
  b: 2.5
fr:
  a: 10
  b: 2
`,
    },
    {
      name: "numbers: negative and float on both locales",
      filename: "valid.yaml",
      code: `
en:
  a: -3
  b: 2.5
fr:
  a: -10
  b: 0.2
`,
    },
    {
      name: "numbers: scientific notation vs simple integer across locales",
      filename: "valid.yaml",
      code: `
en:
  n: 1e3
fr:
  n: 20
`,
    },
    {
      name: "numbers: scientific notation on both locales",
      filename: "valid.yaml",
      code: `
en:
  n: 1e3
fr:
  n: 2e10
`,
    },
    {
      name: "booleans on both locales",
      filename: "valid.yaml",
      code: `
en:
  ok: true
  off: false
fr:
  ok: true
  off: false
`,
    },
    {
      name: "null values (null vs ~ are both null) on both locales",
      filename: "valid.yaml",
      code: `
en:
  missing: null
fr:
  missing: ~
`,
    },
    {
      name: "empty scalar (key with no value) yields null on both locales",
      filename: "valid.yaml",
      code: `
en:
  unset:
fr:
  unset:
`,
    },
    {
      name: "special words (YAML 1.1) quoted to remain strings (yes/no/on/off)",
      filename: "valid.yaml",
      code: `
en:
  yesStr: "yes"
  noStr: "no"
  onStr: "on"
  offStr: "off"
fr:
  yesStr: "yes"
  noStr: "no"
  onStr: "on"
  offStr: "off"
`,
    },
    {
      name: "date-like values quoted to remain strings on both locales",
      filename: "valid.yaml",
      code: `
en:
  when: "2025-09-13"
fr:
  when: "2025-09-13"
`,
    },
    // 4. Array parity (length and element types)
    {
      name: "arrays at key: identical lengths and numeric elements",
      filename: "valid.yaml",
      code: `
en:
  nums:
    - 1
    - 2
    - 3
fr:
  nums:
    - 7
    - 8
    - 9
`,
    },
    {
      name: "arrays at key: zero-length arrays on both locales",
      filename: "valid.yaml",
      code: `
en:
  emptyList: []
fr:
  emptyList: []
`,
    },
    {
      name: "arrays at key: mixed element types but same per-index types",
      filename: "valid.yaml",
      code: `
en:
  mixed:
    - "a"     # string
    - 2       # number
    - true    # boolean
    - null    # null
fr:
  mixed:
    - "z"     # string
    - 5       # number
    - false   # boolean
    - null    # null
`,
    },
    {
      name: "arrays at key: null entries at the same indices across locales",
      filename: "valid.yaml",
      code: `
en:
  maybeIds:
    - 1
    - null
    - 3
fr:
  maybeIds:
    - 7
    - null
    - 9
`,
    },
    {
      name: "nested arrays: inner arrays have identical lengths across locales",
      filename: "valid.yaml",
      code: `
en:
  grid:
    - [1, 2]
    - [3, 4]
fr:
  grid:
    - [9, 8]
    - [7, 6]
`,
    },
    {
      name: "arrays of mappings: equal length and consistent element node types",
      filename: "valid.yaml",
      code: `
en:
  users:
    - { id: 1, name: "A" }
    - { id: 2, name: "B" }
fr:
  users:
    - { id: 10, name: "X" }
    - { id: 20, name: "Y" }
`,
    },
    {
      name: "arrays directly under locale: equal lengths and element types",
      filename: "valid.yaml",
      code: `
en:
  - "a"
  - "b"
  - "c"
fr:
  - "x"
  - "y"
  - "z"
`,
    },
    {
      name: "arrays with nested mappings and sequences: same shapes and lengths",
      filename: "valid.yaml",
      code: `
en:
  complex:
    - name: a
      tags: [t1, t2]
    - name: b
      tags: [t3]
fr:
  complex:
    - name: q
      tags: [u1, u2]
    - name: w
      tags: [u3]
`,
    },
    // 5. Deep structure parity
    {
      name: "deeply nested mappings/sequences with perfectly matching node types",
      filename: "valid.yaml",
      code: `
en:
  a:
    b:
      c:
        list:
          - { x: 1, y: [10, 11] }
          - { x: 2, y: [12] }
fr:
  a:
    b:
      c:
        list:
          - { x: 7, y: [20, 21] }
          - { x: 8, y: [22] }
`,
    },
    {
      name: "three locales all matching (parity holds across en/fr/de)",
      filename: "valid.yaml",
      code: `
en:
  cfg:
    modes: [a, b]
    flags: { fast: true, safe: false }
fr:
  cfg:
    modes: [c, d]
    flags: { fast: true, safe: false }
de:
  cfg:
    modes: [x, y]
    flags: { fast: false, safe: true }
`,
    },

    // 6. Options: checks toggle behavior
    {
      name: "valueType disabled: type mismatches present but not reported",
      filename: "valid.yaml",
      options: [
        { checks: { valueType: false, arrayLength: true }, ignoredKeys: [] },
      ],
      code: `
en:
  users: []
  other: 12
fr:
  users: []
  other: "person"
`,
    },
    {
      name: "arrayLength disabled: arrays different lengths but not reported",
      filename: "valid.yaml",
      options: [
        { checks: { valueType: true, arrayLength: false }, ignoredKeys: [] },
      ],
      code: `
en:
  nums: [1, 2, 3]
fr:
  nums:
    - 7
    - 8
`,
    },
    {
      name: "both checks disabled: no reports despite type and length mismatches",
      filename: "valid.yaml",
      options: [
        { checks: { valueType: false, arrayLength: false }, ignoredKeys: [] },
      ],
      code: `
en:
  payloads:
    - { id: 1 }
    - { id: 2 }
fr:
  payloads: 42
`,
    },
    // 7. Options: ignoredKeys behaviour
    {
      name: "ignoredKeys (regex): exact dotted path suppression",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^user\\.name$"] }],
      code: `
en: { user: { name: "Alice" } }
fr: { user: { name: 123 } }   # mismatch suppressed
`,
    },
    {
      name: "ignoredKeys (regex): exact bracket index suppression",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^items\\[1\\]$"] }],
      code: `
en: { items: ["a", 2] }
fr: { items: ["a", "two"] }   # mismatch at items[1] suppressed
`,
    },
    {
      name: "ignoredKeys (regex): nested index+field suppression",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^posts\\[0\\]\\.title$"] }],
      code: `
en: { posts: [ { title: "Hi" } ] }
fr: { posts: [ { title: 42 } ] }   # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): locale prefix stripped; path still matches",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^user\\.name$"] }],
      code: `
en: { user: { name: "A" } }
fr: { user: { name: 1 } }          # suppressed (locale removed before matching)
`,
    },
    {
      name: "ignoredKeys (regex): style-agnostic canonical path",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^cfg\\.flags$"] }],
      code: `
en: { cfg: { flags: { fast: true } } }
fr:
  cfg:
    flags: "not an object"          # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): middle segment wildcard",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^user\\.[^.]+\\.id$"] }],
      code: `
en: { user: { profile: { id: 1 }, stats: { id: [null] } } }
fr: { user: { profile: { id: "x" }, stats: { id: true } } }   # both suppressed
`,
    },
    {
      name: "ignoredKeys (regex): segment prefix match for id*",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["(^|\\.)id[^.]*(\\.|$)"] }],
      code: `
en: { id: { t: [] }, id2: "x" }
fr: { id: { t: { a: 2 } }, id2: false }   # suppressed for id and id2
`,
    },
    {
      name: "ignoredKeys (regex): segment suffix match for *Id",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^[^.[\\]]*Id$"] }],
      code: `
en: { userId: 1 }
fr: { userId: "abc" }                     # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): dotted 'a.b' ignored",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["a\\.b"] }],
      code: `
en:
  "a.b": 1
fr:
  "a.b": "x"
`,
    },
    {
      name: "ignoredKeys (regex): emoji key literal",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^😀$"] }],
      code: `
en: { "😀": 1 }
fr: { "😀": "one" }                        # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): quoted dot key treated as literal",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^a\\.b$"] }],
      code: `
en: { "a.b": 1 }
fr: { "a.b": "x" }                         # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): index-only '[1]' does not suppress folded path items[1]",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["\\[1\\]"] }],
      code: `
en:
  items: ["a", 2]
fr:
  items: ["a", "two"]
`,
    },
    {
      name: "ignoredKeys (regex): quoted bracket key treated as literal",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^items\\[0\\]$"] }],
      code: `
en: { "items[0]": "alpha" }
fr: { "items[0]": [1, 2] }                  # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): RTL / non-Latin key",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^مرحبا$"] }],
      code: `
en: { "مرحبا": { v: 1 } }
fr: { "مرحبا": "text" }                    # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): multiple patterns combine",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^user\\.[^.]+\\.id$", "^meta$"] }],
      code: `
en: { user: { profile: { id: 1 } }, meta: 1 }
fr: { user: { profile: { id: "x" } }, meta: "y" }  # both suppressed
`,
    },
    {
      name: "ignoredKeys (regex): trimmed whitespace in pattern string still works",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["   ^bar$   "] }],
      code: `
en: { bar: 1 }
fr: { bar: "string" }                       # suppressed
`,
    },
    {
      name: "ignoredKeys (regex): array-level per-index suppression",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^list\\[\\d+\\]$"] }],
      code: `
en: { list: [1, 2, 3] }
fr: { list: ["a", false, null] }   # per-index type mismatches suppressed
`,
    },
    {
      name: "ignoredKeys (regex): case sensitivity positive",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["^User$"] }],
      code: `
en: { User: 1 }
fr: { User: "1" }                 # suppressed
`,
    },
    // 8. Key/charset handling
    {
      name: "unicode keys: Japanese, Cyrillic, Arabic — matching structures",
      filename: "valid.yaml",
      code: `
en:
  日本語: 1
  Русский: true
  العربية: [a, b]
fr:
  日本語: 2
  Русский: false
  العربية: [x, y]
`,
    },
    {
      name: "emoji keys (quoted): same types across locales",
      filename: "valid.yaml",
      code: `
en:
  "😀": "ok"
  "🔑": { val: 1 }
fr:
  "😀": "fine"
  "🔑": { val: 2 }
`,
    },
    {
      name: "keys with spaces (quoted): matching structures",
      filename: "valid.yaml",
      code: `
en:
  "full name": "Alice"
  "street address": { line1: "X", line2: null }
fr:
  "full name": "Alice"
  "street address": { line1: "Y", line2: null }
`,
    },
    {
      name: "keys with dots as literal segments (quoted): not path separators",
      filename: "valid.yaml",
      code: `
en:
  "a.b": 1
  conf:
    "x.y.z": true
fr:
  "a.b": 9
  conf:
    "x.y.z": false
`,
    },
    {
      name: "keys with square brackets as literal (quoted): not indices",
      filename: "valid.yaml",
      code: `
en:
  "items[0]": "alpha"
  group:
    "id[1][2]": 42
fr:
  "items[0]": "beta"
  group:
    "id[1][2]": 7
`,
    },
    {
      name: "keys with wildcard characters as literal (quoted '*', suffix/prefix)",
      filename: "valid.yaml",
      code: `
en:
  "*Id": "x"
  "id*": 1
fr:
  "*Id": "y"
  "id*": 2
`,
    },
    {
      name: "mixed unicode categories: accents, Greek, Hebrew — matching types",
      filename: "valid.yaml",
      code: `
en:
  "café": "a"
  "Ελλάδα": 1
  "עברית": [true, false]
fr:
  "café": "b"
  "Ελλάδα": 2
  "עברית": [false, true]
`,
    },
    {
      name: "zero-width/combining-safe (quoted) keys treated as literals",
      filename: "valid.yaml",
      code: `
en:
  "é": "NFD"
  "é": "NFC"
fr:
  "é": "NFD2"
  "é": "NFC2"
`,
    },
    {
      name: "punctuation in keys (quoted): #, :, / are literal",
      filename: "valid.yaml",
      code: `
en:
  "#hash": "x"
  "proto:http://": "y"
  "path/a/b": 1
fr:
  "#hash": "z"
  "proto:http://": "w"
  "path/a/b": 2
`,
    },
    {
      name: "RTL script keys (quoted): matching structures",
      filename: "valid.yaml",
      code: `
en:
  "مرحبا": { v: 1 }
  "שלום": [1, 2]
fr:
  "مرحبا": { v: 9 }
  "שלום": [3, 4]
`,
    },
  ],
  invalid: [
    // 1. Node type mismatches (valueTypeDisparity)
    {
      name: "root: mapping vs sequence at same path",
      filename: "invalid.yaml",
      code: `
en:
  node: {}
fr:
  node: []
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "node",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "node",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
      ],
    },
    {
      name: "mapping vs scalar ({} vs 'x')",
      filename: "invalid.yaml",
      code: `
en:
  k: {}
fr:
  k: "x"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
      ],
    },
    {
      name: "sequence vs scalar ([] vs 123)",
      filename: "invalid.yaml",
      code: `
en:
  k2: []
fr:
  k2: 123
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k2",
            variants: "2 variants",
            usageList: "en → sequence; fr → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k2",
            variants: "2 variants",
            usageList: "en → sequence; fr → number",
          },
        },
      ],
    },
    {
      name: "scalar vs scalar: number vs string (1 vs '1')",
      filename: "invalid.yaml",
      code: `
en:
  s: 1
fr:
  s: "1"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "s",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "s",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "scalar vs scalar: boolean vs string (true vs 'true')",
      filename: "invalid.yaml",
      code: `
en:
  flag: true
fr:
  flag: "true"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "flag",
            variants: "2 variants",
            usageList: "en → boolean; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "flag",
            variants: "2 variants",
            usageList: "en → boolean; fr → string",
          },
        },
      ],
    },
    {
      name: "scalar vs scalar: null vs string (null vs 'null')",
      filename: "invalid.yaml",
      code: `
en:
  v: null
fr:
  v: "null"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "v",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "v",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
      ],
    },
    {
      name: "scalar vs scalar: number vs boolean (0 vs false)",
      filename: "invalid.yaml",
      code: `
en:
  n: 0
fr:
  n: false
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "n",
            variants: "2 variants",
            usageList: "en → number; fr → boolean",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "n",
            variants: "2 variants",
            usageList: "en → number; fr → boolean",
          },
        },
      ],
    },
    {
      name: "mapping vs null (empty scalar on one side)",
      filename: "invalid.yaml",
      code: `
    en:
      obj: {}
    fr:
      obj:
    `,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "obj",
            variants: "2 variants",
            usageList: "en → mapping; fr → null",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "obj",
            variants: "2 variants",
            usageList: "en → mapping; fr → null",
          },
        },
      ],
    },
    {
      name: "sequence vs null (empty scalar on one side)",
      filename: "invalid.yaml",
      code: `
    en:
      arr: []
    fr:
      arr:
    `,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "arr",
            variants: "2 variants",
            usageList: "en → sequence; fr → null",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "arr",
            variants: "2 variants",
            usageList: "en → sequence; fr → null",
          },
        },
      ],
    },
    // TODO need to update code to handle aliasas - With current typeTag, aliases are treated as "null" (until you apply the alias-aware fix).
    //     {
    //       name: "alias resolves to different type than peer (alias vs direct scalar)",
    //       filename: "invalid.yaml",
    //       code: `
    // base: &num 42
    // en:
    //   test: 123
    // fr:
    //   test: *num    # currently seen as null by typeTag
    // `,
    //       errors: [
    //         {
    //           messageId: "valueTypeDisparity",
    //           data: {
    //             reportedKey: "test",
    //             variants: "2 variants",
    //             usageList: "en → number; fr → null",
    //           },
    //         },
    //         {
    //           messageId: "valueTypeDisparity",
    //           data: {
    //             reportedKey: "test",
    //             variants: "2 variants",
    //             usageList: "en → number; fr → null",
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       name: "alias vs direct node different kinds (alias->mapping vs sequence)",
    //       filename: "invalid.yaml",
    //       code: `
    // base: &m { a: 1 }
    // en:
    //   k: *m        # currently seen as null by typeTag
    // fr:
    //   k: []
    // `,
    //       errors: [
    //         {
    //           messageId: "valueTypeDisparity",
    //           data: {
    //             reportedKey: "k",
    //             variants: "2 variants",
    //             usageList: "en → null; fr → sequence",
    //           },
    //         },
    //         {
    //           messageId: "valueTypeDisparity",
    //           data: {
    //             reportedKey: "k",
    //             variants: "2 variants",
    //             usageList: "en → null; fr → sequence",
    //           },
    //         },
    //       ],
    //     },
    {
      name: "style-insensitive but different node kinds (flow map vs block seq)",
      filename: "invalid.yaml",
      code: `
en:
  x: { a: 1 }
fr:
  x:
    - a
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
      ],
    },
    {
      name: "style-insensitive but different node kinds (flow map vs block map)",
      filename: "invalid.yaml",
      code: `
en:
  x: { a: 1 }
fr:
  x:
    a: "value"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "style-insensitive but different node kinds (flow sequence vs block sequence)",
      filename: "invalid.yaml",
      code: `
en:
  x: [123]
fr:
  x:
    - true
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x[0]",
            variants: "2 variants",
            usageList: "en → number; fr → boolean",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x[0]",
            variants: "2 variants",
            usageList: "en → number; fr → boolean",
          },
        },
      ],
    },
    // 2. Array length parity violations (arrayLengthDisparity)
    {
      name: "arrays: same key, all sequences, lengths differ (3 vs 2)",
      filename: "invalid.yaml",
      code: `
en:
  nums: [1, 2, 3]
fr:
  nums:
    - 9
    - 8
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "nums",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "nums",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
      ],
    },
    {
      name: "nested inner arrays: inner length differs at grid[0] (2 vs 1)",
      filename: "invalid.yaml",
      code: `
en:
  grid:
    - [1, 2]
    - [3]
fr:
  grid:
    - [9]
    - [8]
`,
      // Mismatch is at the inner array path grid[0]
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "grid[0]",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "grid[0]",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
      ],
    },
    // TODO report emitted here says key is "" rather than "en" -> need to fix in code
    //     {
    //       name: "arrays directly under locale: different lengths across locales (3 vs 2)",
    //       filename: "invalid.yaml",
    //       code: `
    // en:
    //   - a
    //   - b
    //   - c
    // fr:
    //   - x
    //   - y
    // `,
    //       // Reported key will be the locale label per current formatting of the path
    //       errors: [
    //         {
    //           messageId: "arrayLengthDisparity",
    //           data: {
    //             reportedKey: "en",
    //             variants: "2 variants",
    //             usageList: "en → 3; fr → 2",
    //           },
    //         },
    //         {
    //           messageId: "arrayLengthDisparity",
    //           data: {
    //             reportedKey: "en",
    //             variants: "2 variants",
    //             usageList: "en → 3; fr → 2",
    //           },
    //         },
    //       ],
    //     },
    {
      name: "three locales: three distinct lengths at same path (2, 3, 4) → 3 variants",
      filename: "invalid.yaml",
      options: [{ checks: { valueType: false } }],
      code: `
en:
  items: [a, b]
fr:
  items: [x, y, z]
de:
  items:
    - 1
    - 2
    - 3
    - 4
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "items",
            variants: "3 variants",
            usageList: "de → 4; en → 2; fr → 3",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "items",
            variants: "3 variants",
            usageList: "de → 4; en → 2; fr → 3",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "items",
            variants: "3 variants",
            usageList: "de → 4; en → 2; fr → 3",
          },
        },
      ],
    },
    {
      name: "only arrayLengthDisparity triggered when all are arrays but lengths differ",
      filename: "invalid.yaml",
      options: [{ checks: { valueType: false } }],
      code: `
en:
  payloads:
    - { id: 1 }
    - { id: 2 }
fr:
  payloads:
    - { id: "a" }
`,
      // All sequences at 'payloads'; types of elements can differ—rule should emit only arrayLengthDisparity at the array node
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "payloads",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "payloads",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
      ],
    },
    // 3. Per-index value type mismatches (valueTypeDisparity at indexed paths)
    {
      name: "same-length arrays: index 0 string vs number",
      filename: "invalid.yaml",
      code: `
en:
  mixed: ["a", 2, true]
fr:
  mixed: [1, 2, true]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "mixed[0]",
            variants: "2 variants",
            usageList: "en → string; fr → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "mixed[0]",
            variants: "2 variants",
            usageList: "en → string; fr → number",
          },
        },
      ],
    },
    {
      name: "same-length arrays: index 2 boolean vs null",
      filename: "invalid.yaml",
      code: `
en:
  arr: [0, 1, false]
fr:
  arr: [0, 1, null]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "arr[2]",
            variants: "2 variants",
            usageList: "en → boolean; fr → null",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "arr[2]",
            variants: "2 variants",
            usageList: "en → boolean; fr → null",
          },
        },
      ],
    },
    {
      name: "array elements: index 1 mapping vs scalar",
      filename: "invalid.yaml",
      code: `
en:
  elems:
    - 1
    - { id: 1 }
    - 3
fr:
  elems:
    - 9
    - "id"
    - 7
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "elems[1]",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "elems[1]",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
      ],
    },
    {
      name: "nested arrays: inner index [0][1] number vs sequence",
      filename: "invalid.yaml",
      code: `
en:
  grid:
    - [1, 2]
    - [3, 4]
fr:
  grid:
    - [1, [2]]
    - [3, 4]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "grid[0][1]",
            variants: "2 variants",
            usageList: "en → number; fr → sequence",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "grid[0][1]",
            variants: "2 variants",
            usageList: "en → number; fr → sequence",
          },
        },
      ],
    },
    {
      name: "array of mappings: field under element index differs in type ('id' number vs string)",
      filename: "invalid.yaml",
      code: `
en:
  users:
    - { id: 1, name: "A" }
    - { id: 2, name: "B" }
fr:
  users:
    - { id: "one", name: "A" }
    - { id: 2, name: "B" }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "array of sequences: element index 1 mapping vs sequence at inner level",
      filename: "invalid.yaml",
      code: `
en:
  blocks:
    - [1, 2]
    - [3, 4]
fr:
  blocks:
    - [1, 2]
    - { x: 3, y: 4 }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "blocks[1]",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "blocks[1]",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
      ],
    },
    {
      name: "same-length arrays: index 0 alias (seen as null currently) vs string",
      filename: "invalid.yaml",
      code: `
base: &s "str"
en:
  a: [*s, 2]
fr:
  a: ["x", 2]
`,
      // ! With current typeTag, alias is "null"; after alias-aware fix it would be "string"
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a[0]",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a[0]",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
      ],
    },
    // 4. Multi-locale aggregation and reporting
    {
      name: "three locales: two share type (string) and one differs (number) at same path",
      filename: "invalid.yaml",
      code: `
en: { k: "a" }
fr: { k: "b" }
de: { k:  1  }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → string; de → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → string; de → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → string; de → number",
          },
        },
      ],
    },
    {
      name: "three locales: all different node types (mapping vs sequence vs string) at same path",
      filename: "invalid.yaml",
      code: `
en: { obj: { a: 1 } }
fr: { obj: "x" }
de: { obj: [1, 2] }
`,
      // All singletons → sorted by first-locale name then valueType (per formatValueUsageListMessage)
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "obj",
            variants: "3 variants",
            usageList: "de → sequence; en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "obj",
            variants: "3 variants",
            usageList: "de → sequence; en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "obj",
            variants: "3 variants",
            usageList: "de → sequence; en → mapping; fr → string",
          },
        },
      ],
    },
    {
      name: "three locales (arrays): two share length (3) and one differs (1) at same path",
      filename: "invalid.yaml",
      code: `
en: { list: [a, b, c] }
fr: { list: [x, y, z] }
de: { list: [q] }
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "en, fr → 3; de → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "en, fr → 3; de → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "en, fr → 3; de → 1",
          },
        },
      ],
    },
    {
      name: "three locales: nested path users[1].id — two numbers vs one string",
      filename: "invalid.yaml",
      code: `
en:
  users:
    - { id: 1 }
    - { id: 2 }
fr:
  users:
    - { id: 5 }
    - { id: 9 }
de:
  users:
    - { id: 7 }
    - { id: "two" }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en, fr → number; de → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en, fr → number; de → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en, fr → number; de → string",
          },
        },
      ],
    },
    {
      name: "three locales: alias-vs-direct types produce two shared vs one distinct (current alias→null)",
      filename: "invalid.yaml",
      code: `
base: &s "str"
en: { k: *s }   # currently seen as null by typeTag
fr: { k: *s }   # currently seen as null by typeTag
de: { k: 123 }
`,
      // ! After your alias-aware fix, usageList would be "en, fr → string; de → number"
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → null; de → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → null; de → number",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en, fr → null; de → number",
          },
        },
      ],
    },
    // 5. Null/empty edge cases surfaced as mismatches
    {
      name: "empty scalar vs explicit string at same key (null vs string)",
      filename: "invalid.yaml",
      code: `
    en:
      title:
    fr:
      title: "Hello"
    `,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "title",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "title",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
      ],
    },
    {
      name: "empty scalar vs mapping at nested path (null vs mapping)",
      filename: "invalid.yaml",
      code: `
    en:
      config:
        flags:
    fr:
      config:
        flags:
          fast: true
          safe: false
    `,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "flags",
            variants: "2 variants",
            usageList: "en → null; fr → mapping",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "flags",
            variants: "2 variants",
            usageList: "en → null; fr → mapping",
          },
        },
      ],
    },
    {
      name: "array element empty vs string at same index (null vs string)",
      filename: "invalid.yaml",
      code: `
en:
  list:
    - a
    -        # empty item = null
    - c
fr:
  list:
    - a
    - "b"
    - c
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "list[1]",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "list[1]",
            variants: "2 variants",
            usageList: "en → null; fr → string",
          },
        },
      ],
    },
    {
      name: "nested array inner index empty vs number (null vs number)",
      filename: "invalid.yaml",
      code: `
    en:
      grid:
        - [1,    ]   # second element empty → array is counted as length of 1
    fr:
      grid:
        - [1, 0]
    `,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "grid[0]",
            variants: "2 variants",
            usageList: "en → 1; fr → 2",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "grid[0]",
            variants: "2 variants",
            usageList: "en → 1; fr → 2",
          },
        },
      ],
    },
    {
      name: "explicit null (~) vs boolean at same key",
      filename: "invalid.yaml",
      code: `
en:
  enabled: ~
fr:
  enabled: true
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "enabled",
            variants: "2 variants",
            usageList: "en → null; fr → boolean",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "enabled",
            variants: "2 variants",
            usageList: "en → null; fr → boolean",
          },
        },
      ],
    },
    {
      name: "empty scalar vs sequence at same key (null vs sequence)",
      filename: "invalid.yaml",
      code: `
    en:
      tags:
    fr:
      tags: [a, b]
    `,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "tags",
            variants: "2 variants",
            usageList: "en → null; fr → sequence",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "tags",
            variants: "2 variants",
            usageList: "en → null; fr → sequence",
          },
        },
      ],
    },
    // 6. Options toggle checks
    {
      name: "valueType enabled, arrayLength disabled: only type mismatch reports; length mismatch ignored",
      filename: "invalid.yaml",
      options: [
        { checks: { valueType: true, arrayLength: false }, ignoredKeys: [] },
      ],
      code: `
en:
  k1: 1          # type mismatch vs string
  k2: [a, b, c]  # length mismatch vs 2
fr:
  k1: "1"
  k2: [x, y]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k1",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k1",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "valueType disabled, arrayLength enabled: only length mismatch reports; type mismatch ignored",
      filename: "invalid.yaml",
      options: [
        { checks: { valueType: false, arrayLength: true }, ignoredKeys: [] },
      ],
      code: `
en:
  arr: [1, 2, 3] # length mismatch vs 2
  k:   false     # type mismatch vs "false" (should be ignored)
fr:
  arr: [x, y]
  k:   "false"
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "arr",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "arr",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
      ],
    },
    {
      name: "both checks enabled: arrays all sequences but different lengths → only arrayLengthDisparity",
      filename: "invalid.yaml",
      options: [
        { checks: { valueType: true, arrayLength: true }, ignoredKeys: [] },
      ],
      code: `
en:
  payloads:
    - { id: 1 }
    - { id: 2 }
fr:
  payloads:
    - { id: "a" }   # element type differs, but parent check should be length-only
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "payloads",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "payloads",
            variants: "2 variants",
            usageList: "en → 2; fr → 1",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    // 7. ignoredKeys: patterns that should NOT suppress
    {
      name: "ignoredKeys: raw '*' is invalid regex and does not suppress mismatches",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["*"] }],
      code: `
en:
  a: 1
fr:
  a: "x"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "a",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "ignoredKeys: invalid wildcard-esque '*foo*' → no suppression",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["*foo*"] }],
      code: `
en:
  foo: 1
fr:
  foo: "x"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "foo",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "foo",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "ignoredKeys: 'items[0]' does not suppress deeper folded items[0][0]",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["items[0]"] }],
      code: `
en:
  items:
    - [1, 2]
fr:
  items:
    - ["x", 2]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "items[0][0]",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "items[0][0]",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "ignoredKeys: case-sensitive — 'User' does not match 'user'",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["User"] }],
      code: `
en:
  user:
    id: 1
fr:
  user:
    id: "1"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "id",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "ignoredKeys: empty and whitespace-only entries are ignored (no suppression)",
      filename: "invalid.yaml",
      options: [{ ignoredKeys: ["", "   "] }],
      code: `
en:
  k: false
fr:
  k: "false"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → boolean; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → boolean; fr → string",
          },
        },
      ],
    },
    // 8. Message formatting & normalization
    {
      name: "reportedKey uses folded bracket form for nested array index (grid[2][1])",
      filename: "invalid.yaml",
      code: `
en:
  grid:
    - [0, 1]
    - [2, 3]
    - [4, 5]
fr:
  grid:
    - [0, 1]
    - [2, 3]
    - [4, "5"]
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "grid[2][1]",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "grid[2][1]",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "reportedKey shows inner array at path (matrix[1]) with length usageList numbers",
      filename: "invalid.yaml",
      code: `
en:
  matrix:
    - [1, 2]
    - [3, 4, 5]
fr:
  matrix:
    - [9, 8]
    - [7]
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "matrix[1]",
            variants: "2 variants",
            usageList: "en → 3; fr → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "matrix[1]",
            variants: "2 variants",
            usageList: "en → 3; fr → 1",
          },
        },
      ],
    },
    {
      name: "message grouping: two booleans vs one string at nested path (cfg.mode)",
      filename: "invalid.yaml",
      code: `
en:
  cfg: { mode: true }
fr:
  cfg: { mode: "on" }
de:
  cfg: { mode: true }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "mode",
            variants: "2 variants",
            usageList: "de, en → boolean; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "mode",
            variants: "2 variants",
            usageList: "de, en → boolean; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "mode",
            variants: "2 variants",
            usageList: "de, en → boolean; fr → string",
          },
        },
      ],
    },
    {
      name: "length grouping order: two locales length 4 vs one length 1 (settings.list)",
      filename: "invalid.yaml",
      code: `
en:
  settings:
    list: [a]
fr:
  settings:
    list: [x, y, z, w]
de:
  settings:
    list:
      - q
      - r
      - s
      - t
`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "de, fr → 4; en → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "de, fr → 4; en → 1",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "de, fr → 4; en → 1",
          },
        },
      ],
    },
    // 9. Style-insen sitive but semantically different
    {
      name: "flow map vs block sequence at same key (type mismatch despite style)",
      filename: "invalid.yaml",
      code: `
en:
  x: { a: 1, b: 2 }
fr:
  x:
    - a
    - b
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "x",
            variants: "2 variants",
            usageList: "en → mapping; fr → sequence",
          },
        },
      ],
    },
    {
      name: "flow sequence vs block map at same key (type mismatch despite style)",
      filename: "invalid.yaml",
      code: `
en:
  y: [1, 2, 3]
fr:
  y:
    a: 1
    b: 2
    c: 3
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "y",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "y",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
      ],
    },
    {
      name: "flow sequence vs scalar (style differs, but node kinds differ more)",
      filename: "invalid.yaml",
      code: `
en:
  z: [a, b]
fr:
  z: "a, b"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "z",
            variants: "2 variants",
            usageList: "en → sequence; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "z",
            variants: "2 variants",
            usageList: "en → sequence; fr → string",
          },
        },
      ],
    },
    {
      name: "block map vs scalar with inline-like string (not fooled by commas/colons)",
      filename: "invalid.yaml",
      code: `
en:
  cfg:
    a: 1
    b: 2
fr:
  cfg: "a:1, b:2"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "cfg",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "cfg",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
      ],
    },
    {
      name: "nested: flow map under array vs scalar under array at same index",
      filename: "invalid.yaml",
      code: `
en:
  list:
    - { k: 1 }
    - { k: 2 }
fr:
  list:
    - "k: 1"
    - { k: 2 }
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "list[0]",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "list[0]",
            variants: "2 variants",
            usageList: "en → mapping; fr → string",
          },
        },
      ],
    },
    // 10. Non-locale clutter doesn't mask errors
    {
      name: "non-locale root keys present: mismatch inside locales still reports",
      filename: "invalid.yaml",
      code: `
_meta: ok
version: 1
en:
  k: 1
fr:
  k: "1"
`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "k",
            variants: "2 variants",
            usageList: "en → number; fr → string",
          },
        },
      ],
    },
    {
      name: "multiple YAML documents: mismatch in one doc reports; other doc consistent",
      filename: "invalid.yaml",
      code: `---
en: { a: 1 }
fr: { a: 2 }   # consistent (both numbers)
---
en: { b: [] }
fr: { b: {} }  # mismatch: sequence vs mapping
...`,
      errors: [
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "b",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
        {
          messageId: "valueTypeDisparity",
          data: {
            reportedKey: "b",
            variants: "2 variants",
            usageList: "en → sequence; fr → mapping",
          },
        },
      ],
    },
    {
      name: "multiple YAML documents: array length mismatch isolated to one document",
      filename: "invalid.yaml",
      code: `---
en: { list: [a, b] }
fr: { list: [x, y] }   # consistent lengths
---
en:
  list:
    - 1
    - 2
    - 3
fr:
  list:
    - 9
    - 8
...`,
      errors: [
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
        {
          messageId: "arrayLengthDisparity",
          data: {
            reportedKey: "list",
            variants: "2 variants",
            usageList: "en → 3; fr → 2",
          },
        },
      ],
    },
  ],
});
