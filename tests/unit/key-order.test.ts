import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import keyOrder from "../../src/rule-key-order";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("key-order rule", keyOrder as any, {
  // ✅ VALID
  valid: [
    // With default options
    {
      name: "empty document (no keys)",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "document with only comments",
      filename: "valid.yaml",
      code: `
# header
# another comment`,
    },
    {
      name: "non-mapping root: sequence → no-op",
      filename: "valid.yaml",
      code: `
- a
- b`,
    },
    {
      name: "non-mapping root: scalar → no-op",
      filename: "valid.yaml",
      code: `just a string`,
    },
    {
      name: "single meta key only",
      filename: "valid.yaml",
      code: `
_meta:
  version: 1`,
    },
    {
      name: "single default locale only",
      filename: "valid.yaml",
      code: `
en:
  welcome: Hello`,
    },
    {
      name: "single allowed locale only (non-default)",
      filename: "valid.yaml",
      code: `
fr:
  welcome: Bonjour`,
    },
    {
      name: "two meta keys in configured order",
      filename: "valid.yaml",
      code: `
_meta:
  version: 1
_component:
  name: hero`,
    },
    {
      name: "two allowed locales in A→Z order",
      filename: "valid.yaml",
      code: `
de:
  k: v
fr:
  k: v`,
    },
    {
      name: "meta + default in correct inter-group order",
      filename: "valid.yaml",
      code: `
_meta:
  version: 1
en:
  k: v`,
    },
    {
      name: "default + locales in correct inter-group order",
      filename: "valid.yaml",
      code: `
en:
  k: v
de:
  k: v
fr:
  k: v`,
    },
    {
      name: "meta + locales in correct intra- and inter-group order",
      filename: "valid.yaml",
      code: `
_meta:
  version: 1
de:
  a: 1
es:
  b: 2
fr:
  c: 3`,
    },
    {
      name: "meta + default + locales + other — all correctly ordered",
      filename: "valid.yaml",
      code: `
_meta:
  version: 1
en:
  z: 1
de:
  a: 1
fr:
  b: 2
a:
  x: 1
z:
  y: 2`,
    },
    {
      name: "other keys already A→Z",
      filename: "valid.yaml",
      code: `
a: 1
b: 2
c: 3`,
    },
    {
      name: "other keys with numeric suffixes sorted via numeric collator (k2 < k10)",
      filename: "valid.yaml",
      code: `
k2: 1
k10: 2
k100: 3`,
    },
    {
      name: "case differences only within group (stable by original index)",
      filename: "valid.yaml",
      code: `
Alpha: 1
alpha: 2`,
    },
    {
      name: "accents treated equal under collator; stable by index",
      filename: "valid.yaml",
      code: `
café: 1
cafe: 2`,
    },
    {
      name: "header comments + per-key comments present; ordering already correct",
      filename: "valid.yaml",
      code: `
# file header
# (keep pinned at top)

# meta block
_meta:
  # version comment
  version: 1

# default first
en:
  greet: Hello

# locales A→Z
de:
  greet: Hallo
fr:
  greet: Bonjour

# other A→Z
a: 1
z: 2`,
    },
    {
      name: "CRLF file with correct ordering",
      filename: "valid.yaml",
      code: `
_meta:\r
  version: 1\r
en:\r
  k: v\r
de:\r
  a: 1\r
fr:\r
  b: 2\r
a:\r
  x: 1\r
z:\r
  y: 2\r
`,
    },
    {
      name: "multiple YAML documents, each already ordered",
      filename: "valid.yaml",
      code: `
# doc 1
_meta:
  version: 1
en:
  k: v
de:
  a: 1
a: 1
---
# doc 2
_meta:
  version: 2
en:
  k: v
fr:
  b: 2
b: 2`,
    },
    {
      name: "tie-case resolved by original index",
      filename: "valid.yaml",
      code: `
cafe: 1
café: 2`,
    },

    // With custom options

    {
      name: "custom metaKeys subset respected, correct sequence",
      filename: "valid.yaml",
      options: [
        {
          metaKeys: ["_test", "_joyRide"],
        },
      ],
      code: `
_test:
  name: hero
_joyRide:
  version: 1
  `,
    },
    {
      name: "custom defaultLocale respected in default slot",
      filename: "valid.yaml",
      options: [
        {
          defaultLocale: "fr",
        },
      ],
      code: `
_meta:
  version: 1
fr:
  k: v
de:
  a: 1
en:
  b: 2
a: 1
z: 2`,
    },
    {
      name: "custom allowedLocales respected (default excluded from locales set); locales A→Z",
      filename: "valid.yaml",
      options: [
        {
          allowedLocales: ["de", "es"],
        },
      ],
      code: `
_meta:
  version: 1
en:
  k: v
de:
  a: 1
es:
  b: 2
a: 1
z: 2`,
    },
    {
      name: "all four groups present, correctly ordered under full custom options",
      filename: "valid.yaml",
      options: [
        {
          metaKeys: ["_component", "_meta"],
          defaultLocale: "sw",
          allowedLocales: ["de", "en", "fr"],
        },
      ],
      code: `
_component:
  name: hero
_meta:
  version: 1
sw:
  k: v
de:
  k: v
en:
  a: 1
fr:
  b: 2
a: 1
z: 2`,
    },
  ],
  // ❌ INVALID
  invalid: [
    // --- With default options ---

    {
      name: "meta-only group, keys out of order",
      filename: "invalid.yaml",
      code: `
_component: v
_meta: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
_component: v`,
    },
    {
      name: "locales-only group, keys not A→Z",
      filename: "invalid.yaml",
      code: `
fr: v
de: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
de: v
fr: v`,
    },
    {
      name: "other-only group, keys not A→Z",
      filename: "invalid.yaml",
      code: `
z: v
a: v
x: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
a: v
x: v
z: v`,
    },
    {
      name: "groups in wrong inter-group order",
      filename: "invalid.yaml",
      code: `
fr: v
en: v
_meta: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
en: v
fr: v`,
    },
    {
      name: "multi groups + multi keys, mixed disorder",
      filename: "invalid.yaml",
      code: `
zzz: v
fr: v
_meta: v
en: v
aaa: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
en: v
fr: v
aaa: v
zzz: v`,
    },
    {
      name: "1x per-group keys, grousp out of order",
      filename: "invalid.yaml",
      code: `
en: v
_meta: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
en: v`,
    },
    {
      name: "header comments + misordered keys",
      filename: "invalid.yaml",
      code: `
# header
fr: v
_meta: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
# header
_meta: v
fr: v`,
    },

    // TODO fix autofix moving inline comments in main code
    //     {
    //       name: "per-key in-line comments move with key on fix",
    //       filename: "invalid.yaml",
    //       code: `
    // fr: v # comment for fr
    // _meta: v # meta comment
    //     `,
    //       errors: [
    //         { messageId: "orderedKeys" },
    //         { messageId: "suggestedFix" },
    //         { messageId: "orderedKeys" },
    //       ],
    //       output: `
    // _meta: v # meta comment
    // fr: v # comment for fr
    //     `,
    //     },
    //     {
    //       name: "fix order for keys including YAML sequences and comments",
    //       filename: "invalid.yaml",
    //       code: `
    // zz:
    //   - true
    //   - false
    // en:
    //   names:
    //     - John # test comment
    //     - James
    // _meta: base # redo
    //         `,
    //       errors: [
    //         { messageId: "orderedKeys" },
    //         { messageId: "suggestedFix" },
    //         { messageId: "orderedKeys" },
    //       ],
    //       output: `
    // _meta: base # redo
    // en:
    //   names:
    //     - John # test comment
    //     - James
    // zz:
    //   - true
    //   - false
    //         `,
    //     },

    {
      name: "multi-line flow-style mappings moved fully by fix",
      filename: "invalid.yaml",
      code: `
de: {
    name: "Alice",  
    age: 30,  
    city: "London"
  }
ab: 123
        `,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
ab: 123
de: {
    name: "Alice",  
    age: 30,  
    city: "London"
  }
        `,
    },
    {
      name: "multi-line flow-style sequences moved fully by fix",
      filename: "invalid.yaml",
      code: `
de: 123
ab: [
    1,  
    2,  
    3,  
    4
  ]
        `,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
ab: [
    1,  
    2,  
    3,  
    4
  ]
de: 123
        `,
    },
    {
      name: "multi-line flow-style mappings AND sequences moved fully by fix",
      filename: "invalid.yaml",
      code: `
de: {
    name: "Alice",  
    age: 30,  
    city: "London"
  }
ab: [
    1,  
    2,  
    3,  
    4
  ]
        `,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
ab: [
    1,  
    2,  
    3,  
    4
  ]
de: {
    name: "Alice",  
    age: 30,  
    city: "London"
  }
        `,
    },
    {
      name: "per-key top-level comments move with key on fix",
      filename: "invalid.yaml",
      code: `
_meta: v
# comment for fr
fr: v
# comment for en
en: v
`,
      errors: [
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
# comment for en
en: v
# comment for fr
fr: v
`,
    },
    {
      name: "CRLF misordered",
      filename: "invalid.yaml",
      code: `
_meta: v\r
zzz: v\r
aaa: v`,
      errors: [
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v\r
aaa: v\r
zzz: v`,
    },

    // --- With custom options ---

    {
      name: "custom metaKeys wrong order",
      filename: "invalid.yaml",
      code: `
_test: v
_primary: v`,
      options: [
        {
          metaKeys: ["_primary", "_test"],
          defaultLocale: "en",
          allowedLocales: ["en", "fr"],
        },
      ],
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
_primary: v
_test: v`,
    },
    {
      name: "custom defaultLocale in wrong slot",
      filename: "invalid.yaml",
      code: `
en: v
_meta: v
fr: v`,
      options: [
        {
          metaKeys: ["_meta"],
          defaultLocale: "fr",
          allowedLocales: ["en", "fr"],
        },
      ],
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
fr: v
en: v`,
    },
    {
      name: "custom allowedLocales not A→Z",
      filename: "invalid.yaml",
      code: `
fr: v
de: v`,
      options: [
        {
          defaultLocale: "en",
          allowedLocales: ["fr", "de", "en"],
        },
      ],
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
de: v
fr: v`,
    },
    {
      name: "custom multi-group chaos",
      filename: "invalid.yaml",
      code: `
zzz: v
fr: v
_fallback: v
de: v
_test: v
xx: v
es: v2`,
      options: [
        {
          metaKeys: ["_test", "_fallback"],
          defaultLocale: "de",
          allowedLocales: ["de", "fr", "es"],
        },
      ],
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
_test: v
_fallback: v
de: v
es: v2
fr: v
xx: v
zzz: v`,
    },

    // --- Multi-document behavior ---

    {
      name: "two YAML docs misordered",
      filename: "invalid.yaml",
      code: `
---
fr: v
_meta: v
---
zzz: v
_meta: v`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
---
_meta: v
fr: v
---
_meta: v
zzz: v`,
    },
    {
      name: "block scalars (| and >) move intact, with inline comments",
      filename: "invalid.yaml",
      code: `
zzz: |
  line1
  line2 # keep
en: >
  wrapped line 1
  wrapped line 2
_meta: v
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
_meta: v
en: >
  wrapped line 1
  wrapped line 2
zzz: |
  line1
  line2 # keep
`,
    },
    {
      name: "quoted vs unquoted keys treated equal via getStaticYAMLValue",
      filename: "invalid.yaml",
      code: `
"b": 1
a: 2
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
a: 2
"b": 1
`,
    },
    {
      name: "meta-like but not configured → falls into other (after locales)",
      filename: "invalid.yaml",
      code: `
fr: v
_notMeta: v
en: v
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
en: v
fr: v
_notMeta: v
`,
    },
    {
      name: "unknown pseudo-locale en-GB (not allowed) treated as other",
      filename: "invalid.yaml",
      code: `
fr: v
en-GB: v
en: v
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
en: v
fr: v
en-GB: v
`,
    },
    {
      name: "multiple blank lines between keys collapse to a single newline",
      filename: "invalid.yaml",
      code: `
z: v


a: v
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
a: v
z: v
`,
    },
    {
      name: "anchors/aliases as values move intact (per-key internal anchors)",
      filename: "invalid.yaml",
      code: `
b:
  base: &y
    name: Bob
  copy: *y
a:
  base: &x
    name: Alice
  copy: *x
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
a:
  base: &x
    name: Alice
  copy: *x
b:
  base: &y
    name: Bob
  copy: *y
`,
    },
    {
      name: "emoji/unicode keys order consistently (α before β)",
      filename: "invalid.yaml",
      code: `
β: 2
α: 1
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
      ],
      output: `
α: 1
β: 2
`,
    },
    // TODO currently not working because a rogue new line is being added.
    // ! this new line thing is a consistent problem in a lot of places...
    //     {
    //       name: "CRLF + header comments + reordering combined",
    //       filename: "invalid.yaml",
    //       code: `
    // # header\r
    // fr: v\r
    // _meta: v\r
    // en: v\r
    // `,
    //       errors: [
    //         { messageId: "orderedKeys" },
    //         { messageId: "suggestedFix" },
    //         { messageId: "orderedKeys" },
    //         { messageId: "orderedKeys" },
    //       ],
    //       output: `
    // # header\r
    // _meta: v\r
    // en: v\r
    // fr: v\r
    // `,
    //     },
    {
      name: "empty metaKeys → meta group empty; _meta falls into other",
      filename: "invalid.yaml",
      options: [
        {
          metaKeys: [],
          defaultLocale: "en",
          allowedLocales: ["en", "de", "fr"],
        },
      ],
      code: `
_meta: v
en: v
de: v
a: v
`,
      errors: [
        { messageId: "orderedKeys" },
        { messageId: "suggestedFix" },
        { messageId: "orderedKeys" },
        { messageId: "orderedKeys" },
      ],
      output: `
en: v
de: v
_meta: v
a: v
`,
    },
  ],
});
