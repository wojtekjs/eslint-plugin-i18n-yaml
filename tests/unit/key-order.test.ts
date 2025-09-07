import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import keyOrder from "../../src/rule-key-order";

// TODO ensure these tests are exhaustive of all autofixes

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
      code: `# header
# another comment`,
    },
    {
      name: "non-mapping root: sequence → no-op",
      filename: "valid.yaml",
      code: `- a
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

    // TODO the two tests below fail because inline comments aren't captured correctly and don't move with their key-value pairs as they should
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

    // TODO add tests with multiline values (like an array going over mulitple lines or an object doing that)

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
  ],
});
