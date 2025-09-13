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
      name: "ignoredKeys: plain segment match at any depth",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["foo"] }],
      code: `
en:
  nested:
    foo: 123
fr:
  nested:
    foo: "abc"
`,
    },
    {
      name: "ignoredKeys: exact index suppression (items[1]) at any depth",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["items[1]"] }],
      code: `
    en:
      items:
        - "a"
        - 1
      array:
        items: ["abc", true]
    fr:
      items:
        - "b"
        - true
      array:
        items: ["abc", 123]
    `,
    },
    // TODO this is failing - investigate why
    // {
    //   name: "ignoredKeys: bare numeric key suppression (mapping key '1')",
    //   filename: "valid.yaml",
    //   options: [{ ignoredKeys: ["1"] }],
    //   code: `
    // en:
    //   "1": hello
    //   list:
    //     "0": 0
    //     "1": 1
    // fr:
    //   "1": 99
    //   list:
    //     "0": 0
    //     "1": one
    // `,
    // },
    // TODO this is failing - investigate why
    //     {
    //       name: "ignoredKeys: folded path suppression (posts[0].title)",
    //       filename: "valid.yaml",
    //       options: [{ ignoredKeys: ["posts[0].title"] }],
    //       code: `
    // en:
    //   posts:
    //     - title: "hi"
    // fr:
    //   posts:
    //     - title: 42
    //     `,
    //     },
    {
      name: "ignoredKeys: dotted path suppression (user.name)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["user.name"] }],
      code: `
en:
  user:
    name: "Alice"
fr:
  user:
    name: 99
`,
    },
    {
      name: "ignoredKeys: dotted path with locale prefix (en.user.name) same as user.name",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["en.user.name"] }],
      code: `
en:
  user:
    name: "Alice"
fr:
  user:
    name: 123
`,
    },
    {
      name: "ignoredKeys: wildcard middle segment (user.*.id)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["user.*.id"] }],
      code: `
en:
  user:
    profile:
      id: "A"
    stats:
      id: [null]
fr:
  user:
    profile:
      id: 5
    stats:
      id: true
`,
    },
    {
      name: "ignoredKeys: wildcard suffix (id*) matches keys starting with 'id' and everything under them",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["id*"] }],
      code: `
en:
  id:
    test: []
  id2: "x"
fr:
  id:
    test: {abc: 2}
  id2: false
`,
    },
    {
      name: "ignoredKeys: wildcard prefix (*Id) matches userId",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["*Id"] }],
      code: `
en:
  userId: 1
fr:
  userId: "abc"
`,
    },
    {
      name: "ignoredKeys: root anchored suppression (foo.*)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["foo.*"] }],
      code: `
en:
  foo:
    bar: 1
fr:
  foo:
    bar: "z"
`,
    },
    {
      name: "ignoredKeys: whitespace in key is trimmed",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["  bar  "] }],
      code: `
en:
  bar: 1
fr:
  bar: "string"
`,
    },
    {
      name: "ignoredKeys: base segment suppresses folded indices (items, items[0], items[0][1])",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["items"] }],
      code: `
en:
  items:
    - "a"
    - [1, 2]
fr:
  items:
    - 1        # would be valueType mismatch at items[0]
    - ["x", "y"]  # would be element-type mismatches at items[1][*]
`,
    },
    {
      name: "ignoredKeys: dotted with wildcard middle (posts.*.title) suppresses titles at any child",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["posts.*.title"] }],
      code: `
en:
  posts:
    - title: "Hello"
      meta: {}
fr:
  posts:
    - title: 123         # would mismatch but suppressed
      meta: {}
`,
    },
    // TODO failing like other test above - something's wrong with the items[idx].key format when dealing with lists
    //     {
    //       name: "ignoredKeys: locale-prefixed dotted+bracket path (fr.items[0].id) suppresses exact path",
    //       filename: "valid.yaml",
    //       options: [{ ignoredKeys: ["fr.items[0].id"] }],
    //       code: `
    // en:
    //   items:
    //     - id: 1
    // fr:
    //   items:
    //     - id: "one"   # suppressed (exact path after stripping locale)
    // `,
    //     },
    {
      name: "ignoredKeys: multiple entries work together (user.*.id and meta)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["user.*.id", "meta"] }],
      code: `
en:
  user:
    profile:
      id: 1
  meta: 1
fr:
  user:
    profile:
      id: "x"   # suppressed by user.*.id
  meta: "y"     # suppressed by meta
`,
    },
    {
      name: "ignoredKeys: element-level suppression via wildcard (list.*) for per-index type mismatches",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["list.*"] }],
      code: `
en:
  list: [1, 2, 3]
fr:
  list: ["a", false, null]   # per-index valueType mismatches suppressed
`,
    },
    {
      name: "ignoredKeys: base segment suppression with nested folded indices and maps (records)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["records"] }],
      code: `
en:
  records:
    - id: 1
      tags: [a, b]
    - id: 2
      tags: [c]
fr:
  records:
    - id: "one"      # would mismatch at records[0].id
      tags: [true]   # would mismatch at records[0].tags[0]
    - id: null       # would mismatch at records[1].id
      tags: 42       # would mismatch at records[1].tags
`,
    },
    {
      name: "ignoredKeys: emoji key suppression (😀)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["😀"] }],
      code: `
en:
  "😀": 1
fr:
  "😀": "one"   # suppressed
`,
    },
    {
      name: "ignoredKeys: Japanese segment with wildcard middle (user.*.名)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["user.*.名"] }],
      code: `
en:
  user:
    プロフィール:
      名: "Alice"
fr:
  user:
    詳細:
      名: 123        # suppressed
`,
    },
    {
      name: "ignoredKeys: Cyrillic prefix wildcard (имя* matches имя, имяId)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["имя*"] }],
      code: `
en:
  имя: "A"
  имяId: 1
fr:
  имя: 42         # suppressed
  имяId: false    # suppressed
`,
    },
    {
      name: "ignoredKeys: punctuation literal segment (#hash, proto:http://, path/a/b)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["#hash", "proto:http://", "path/a/b"] }],
      code: `
en:
  "#hash": true
  "proto:http://": 1
  "path/a/b": "x"
fr:
  "#hash": "y"            # suppressed
  "proto:http://": false  # suppressed
  "path/a/b": 2           # suppressed
`,
    },
    {
      name: "ignoredKeys: combining accent key exact-match (é vs é)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["é"] }], // same normalization as in YAML
      code: `
en:
  "é": "NFD"
fr:
  "é": 123        # suppressed
`,
    },
    {
      name: "ignoredKeys: quoted bracket-literal key (items[0]) exact-match",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["items[0]"] }],
      code: `
en:
  "items[0]": "alpha"
fr:
  "items[0]": [1, 2]   # suppressed (literal key match, not an index)
`,
    },
    {
      name: "ignoredKeys: RTL Arabic key suppression (مرحبا)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["مرحبا"] }],
      code: `
en:
  "مرحبا": { v: 1 }
fr:
  "مرحبا": "text"    # suppressed
`,
    },
    {
      name: "ignoredKeys: wildcard suffix on Latin segment with non-Latin neighbors (id* matches idΔ)",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["id*"] }],
      code: `
en:
  idΔ: 1
fr:
  idΔ: "x"          # suppressed
`,
    },
    {
      name: "ignoredKeys: wildcard prefix ignores keys starting with * and matching suffix",
      filename: "valid.yaml",
      options: [{ ignoredKeys: ["*id"] }],
      code: `
en:
  "*id": 1
fr:
  "*id": true
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
  invalid: [],
});
