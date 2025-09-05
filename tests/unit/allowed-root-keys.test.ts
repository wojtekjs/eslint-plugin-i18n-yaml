import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import allowedRootKeys from "../../src/rule-allowed-root-keys";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("allowed-root-keys rule", allowedRootKeys as any, {
  valid: [
    {
      name: "sinlge default locale",
      filename: "valid.yaml",
      code: `
en:
    test: hey
        `,
    },
    {
      name: "multiple default locales",
      filename: "valid.yaml",
      code: `
en:
    first: hey
fr:
    second: hello
        `,
    },
    {
      name: "single custom allowed locale",
      filename: "valid.yaml",
      code: `
test:
    hello: goodbye
        `,
      options: [
        {
          allowedLocales: ["test"],
        },
      ],
    },
    {
      name: "multiple custom allowed locales",
      filename: "valid.yaml",
      code: `
test:
    hello: goodbye
trial:
    bonjour: au revoir
        `,
      options: [
        {
          allowedLocales: ["test", "trial"],
        },
      ],
    },
    {
      name: "single default non-locale key",
      filename: "valid.yaml",
      code: `
_meta: react
        `,
    },
    {
      name: "multiple default non-locale keys",
      filename: "valid.yaml",
      code: `
_meta: react
_component: button
        `,
    },
    {
      name: "single custom allowed non-locale key",
      filename: "valid.yaml",
      code: `
en:
    test: trial
_meta: react
        `,
      options: [{ allowedNonLocaleKeys: ["_meta"] }],
    },
    {
      name: "multiple custom allowed non-locale keys",
      filename: "valid.yaml",
      code: `
en:
    test: trial
_meta: react
_component: button
        `,
      options: [{ allowedNonLocaleKeys: ["_meta", "_component"] }],
    },
    {
      name: "single custom allowed locales & non-locale keys",
      filename: "valid.yaml",
      code: `
abc: 123
_test: react
        `,
      options: [{ allowedLocales: ["abc"], allowedNonLocaleKeys: ["_test"] }],
    },
    {
      name: "multiple custom allowed locales & non-locale keys",
      filename: "valid.yaml",
      code: `
abc: 123
xyz: 098
_test: react
_trial: button
        `,
      options: [
        {
          allowedLocales: ["abc", "xyz"],
          allowedNonLocaleKeys: ["_test", "_trial"],
        },
      ],
    },
    {
      name: "default settings  empty yaml",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "root is scalar",
      filename: "valid.yaml",
      code: `hello`,
    },
    {
      name: "root is sequence",
      filename: "valid.yaml",
      code: `
- hello
- goodbye
      `,
    },
    {
      name: "root is comment only",
      filename: "valid.yaml",
      code: `# a comment`,
    },
    {
      name: "multiple documents using defaults",
      filename: "valid.yaml",
      code: `
en:
    hello: goodbye
_component: button

---

fr:
    bonjour: au revoir
_meta: react
        `,
    },
    {
      name: "multiple documents using custom",
      filename: "valid.yaml",
      code: `
abc:
    alpha: beta

---

_test:
    under: score
        `,
      options: [{ allowedLocales: ["abc"], allowedNonLocaleKeys: ["_test"] }],
    },
  ],
  invalid: [
    {
      name: "root key not in default allowed keys (locale or non-locale)",
      filename: "invalid.yaml",
      code: `
err: break
    `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "hyphenated locale at root (forbidden)",
      filename: "invalid.yaml",
      code: `
pt-BR:
  hello: world
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "uppercase locale variant (forbidden unless whitelisted)",
      filename: "invalid.yaml",
      code: `
EN:
  hi: there
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "quoted numeric-looking key (still string) forbidden",
      filename: "invalid.yaml",
      code: `
"123": value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "numeric scalar key forbidden",
      filename: "invalid.yaml",
      code: `
123: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "boolean scalar key forbidden",
      filename: "invalid.yaml",
      code: `
true: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "null scalar key forbidden",
      filename: "invalid.yaml",
      code: `
null: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "empty string key (explicit) forbidden",
      filename: "invalid.yaml",
      code: `
? ""
: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "whitespace-only key forbidden",
      filename: "invalid.yaml",
      code: `
? "   "
: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "key with space forbidden",
      filename: "invalid.yaml",
      code: `
"en us": value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "key with dot forbidden",
      filename: "invalid.yaml",
      code: `
en.us: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "key with underscore (non-meta) forbidden",
      filename: "invalid.yaml",
      code: `
en_us: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "underscore-prefixed non-meta key forbidden",
      filename: "invalid.yaml",
      code: `
_meta2: value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "complex mapping key forbidden",
      filename: "invalid.yaml",
      code: `
? { a: 1 }
: 2
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "mixed allowed and forbidden at root",
      filename: "invalid.yaml",
      code: `
en:
  ok: 1
_meta: x
oops: y
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "multiple YAML documents — one forbidden",
      filename: "invalid.yaml",
      code: `
---
en:
  ok: 1
---
oops: nope
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "options empty arrays — everything forbidden",
      filename: "invalid.yaml",
      code: `
en: { ok: 1 }
_meta: x
  `,
      options: [{ allowedLocales: [], allowedNonLocaleKeys: [] }],
      errors: [
        { messageId: "disallowedRootKey" },
        { messageId: "disallowedRootKey" },
      ],
    },
    {
      name: "partial options provided — forbidden not in provided sets",
      filename: "invalid.yaml",
      code: `
oops: 1
  `,
      options: [{ allowedLocales: ["en"] }], // no change to non-locale allowed list beyond defaults
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "quoted allowed name with trailing space (forbidden)",
      filename: "invalid.yaml",
      code: `
"en ": value
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
    {
      name: "unicode/emoji key forbidden",
      filename: "invalid.yaml",
      code: `
"😀": party
  `,
      errors: [{ messageId: "disallowedRootKey" }],
    },
  ],
});
