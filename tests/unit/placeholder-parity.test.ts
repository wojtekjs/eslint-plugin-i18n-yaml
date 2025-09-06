import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import placeholderParity from "../../src/rule-placeholder-parity";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("placeholder-parity rule", placeholderParity as any, {
  // ✅ VALID
  valid: [
    {
      name: "empty yaml",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "yaml with comments only",
      filename: "valid.yaml",
      code: `
# just a comment
# another comment
    `,
    },
    {
      name: "no root-level locale keys & no placeholders",
      filename: "valid.yaml",
      code: `
meta: info
settings:
  option: true
    `,
    },
    {
      name: "no root-level locale keys but matching placeholders",
      filename: "valid.yaml",
      code: `
meta: "Hello {name}"
settings: "Welcome {name}"
    `,
    },
    {
      name: "no root-level locale keys & disparate placeholders (not flagged)",
      filename: "valid.yaml",
      code: `
meta: "Hi {name}"
settings: "Hello {id}"
    `,
    },
    {
      name: "missing sibling key across locales",
      filename: "valid.yaml",
      code: `
en:
  greeting: "Hi {name}"
fr:
  farewell: "Bye {name}"
    `,
    },
    {
      name: "matching placeholders under locales",
      filename: "valid.yaml",
      code: `
en:
  msg: "Order {id}"
fr:
  msg: "Commande {id}"
    `,
    },
    {
      name: "matching placeholders inside arrays",
      filename: "valid.yaml",
      code: `
en:
  list:
    - "Hello {name}"
    - "Bye {name}"
fr:
  list:
    - "Bonjour {name}"
    - "Au revoir {name}"
    `,
    },
    {
      name: "matching placeholders inside mappings nested in arrays",
      filename: "valid.yaml",
      code: `
en:
  items:
    - label: "Buy {item}"
fr:
  items:
    - label: "Acheter {item}"
    `,
    },
    {
      name: "duplicate placeholders in one string vs single",
      filename: "valid.yaml",
      code: `
en:
  msg: "Hello {id}{id}"
fr:
  msg: "Bonjour {id}"
    `,
    },
    {
      name: "placeholders in different order but same set",
      filename: "valid.yaml",
      code: `
en:
  msg: "{id} {name}"
fr:
  msg: "{name} {id}"
    `,
    },
    {
      name: "only non-string scalars (null, true, 123) treated as ∅",
      filename: "valid.yaml",
      code: `
en:
  value: 123
fr:
  value: 456
    `,
    },
    {
      name: "double brace vs single brace placeholder",
      filename: "valid.yaml",
      code: `
en:
  msg: "{{id}}"
fr:
  msg: "Hello {id}"
        `,
    },
    {
      name: "key present but only with container values (mapping/sequence)",
      filename: "valid.yaml",
      code: `
en:
  stuff: {}
fr:
  stuff: []
    `,
    },
    {
      name: "flow vs block syntax parity",
      filename: "valid.yaml",
      code: `
en:
  arr: [ "Hello {id}" ]
fr:
  arr:
    - "Bonjour {id}"
    `,
    },
    {
      name: "multiline scalars (literal & folded) with same placeholders",
      filename: "valid.yaml",
      code: `
en:
  msg: |
    Dear {name},
    Welcome.
fr:
  msg: >
    Cher {name},
    Bienvenue.
    `,
    },
    {
      name: "multiple yaml documents in one file (disparity ignored across docs)",
      filename: "valid.yaml",
      code: `
en:
  msg: "Hi {id}"
---
fr:
  msg: "Salut {name}"
    `,
    },
    {
      name: "anchors/aliases used but benign",
      filename: "valid.yaml",
      code: `
base: &welcome "Welcome {name}"
en:
  msg: *welcome
fr:
  msg: *welcome
    `,
    },
    {
      name: "explicit empty strings across locales",
      filename: "valid.yaml",
      code: `
en:
  msg: ""
fr:
  msg: ""
    `,
    },
    {
      name: "array directly under locale with parity",
      filename: "valid.yaml",
      code: `
en:
  - "Hi {id}"
  - "Bye"
fr:
  - "Salut {id}"
  - "Au revoir"
    `,
    },
    {
      name: "malformed placeholder braces (no match) vs none — both ∅",
      filename: "valid.yaml",
      code: `
en: 
  msg: Hello {  }
fr:
  msg: Bonjour
      `,
    },
    {
      name: "double braced placeholder",
      filename: "valid.yaml",
      code: `
en:
  user: hello {{userName}}
fr:
  user: bonjour {{userName}}
      `,
    },
    {
      name: "unquoted placeholders at the start (considered objects so ignored)",
      filename: "valid.yaml",
      code: `
en:
  mode: {mode}
fr:
  mode: {env}
      `,
    },

    {
      name: "flow mapping parity (inline map vs block map)",
      filename: "valid.yaml",
      code: `
en: { msg: "Hi {id}" }
fr:
  msg: "Salut {id}"
  `,
    },
    {
      name: "three locales all consistent",
      filename: "valid.yaml",
      code: `
en:
  msg: "Order {id}"
fr:
  msg: "Commande {id}"
es:
  msg: "Pedido {id}"
  `,
    },
    {
      name: "locales present but empty (no scalar leaves)",
      filename: "valid.yaml",
      code: `
en: {}
fr: []
  `,
    },
    {
      name: "nested 'locale-looking' keys not at root (ignored)",
      filename: "valid.yaml",
      code: `
meta:
  en:
    msg: "Hi {id}"
settings:
  fr:
    msg: "Salut {userName}"
es:
  msg: Welcome, {user}
  `,
    },
    {
      name: "arrays with null/empty entries (sparse) still parity",
      filename: "valid.yaml",
      code: `
en:
  list:
    - "Hi {id}"
    -
    - null
fr:
  list:
    - "Salut {id}"
    -
    - null
  `,
    },
    {
      name: "adjacent placeholders but same set",
      filename: "valid.yaml",
      code: `
en:
  msg: "{a}{b}"
fr:
  msg: "{b}{a}"
  `,
    },
    {
      name: "unicode placeholder name parity",
      filename: "valid.yaml",
      code: `
ru:
  msg: "Привет, {имя}"
fr:
  msg: "Bonjour, {имя}"
  `,
    },
    {
      name: "underscore placeholder name parity",
      filename: "valid.yaml",
      code: `
en:
  msg: "Hi {na_me}"
fr:
  msg: "Salut {na_me}"
  `,
    },
    {
      name: "keys with brackets/dots but consistent placeholders",
      filename: "valid.yaml",
      code: `
en:
  "user.profile[info]": "Hi {id}"
fr:
  "user.profile[info]": "Salut {id}"
  `,
    },
    {
      name: "mismatched placeholders ignored due to differing leaf types",
      filename: "valid.yaml",
      code: `
en:
  msg: "Hello {id}"
fr:
  msg:
    nested: "no placeholder"
    `,
    },
  ],

  // ❌ INVALID
  invalid: [
    {
      name: "placeholder vs none",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Hi"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "different number of placeholders",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Salut {id} {name}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "different placeholder names, same count",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Salut {name}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "case sensitivity",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Salut {ID}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "different punctuation/characters",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Salut {id_}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "whitespace inside braces",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi { name }"
fr:
  msg: "Salut {name}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "array index mismatch",
      filename: "invalid.yaml",
      code: `
en:
  items:
    - "Hello {id}"
fr:
  items:
    - "Bonjour"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "array directly under locale mismatch",
      filename: "invalid.yaml",
      code: `
en:
  - "Hi {id}"
  - "Bye"
fr:
  - "Salut"
  - "Au revoir"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "sparse/null arrays mismatch",
      filename: "invalid.yaml",
      code: `
en:
  list:
    - "Hi {id}"
    - null
fr:
  list:
    - "Salut {id}"
    - "Quelque chose {id}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "mixed scalar types",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Order {id}"
fr:
  msg: 123
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "multiline disparity",
      filename: "invalid.yaml",
      code: `
en:
  msg: |
    Dear {id},
    Welcome.
fr:
  msg: >
    Cher {name},
    Bienvenue.
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "quoted vs unquoted disparity",
      filename: "invalid.yaml",
      code: `
en:
  msg: "User {id}"
fr:
  msg: User {name}
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "disallowed punctuation in braces",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id!}"
fr:
  msg: "Salut {id}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "leading digit in placeholder",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {1id}"
fr:
  msg: "Salut {id}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "adjacent placeholders vs subset",
      filename: "invalid.yaml",
      code: `
en:
  msg: "{a}{b}"
fr:
  msg: "{a}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "alias introduces disparity",
      filename: "invalid.yaml",
      code: `
    base_id: &id "ID {id}"
    base_name: &name "NAME {name}"
    en:
      msg: *id
    fr:
      msg: *name
        `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "multiple variants across three locales",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hi {id}"
fr:
  msg: "Salut {name}"
es:
  msg: "Hola {id} {name}"
    `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "array of maps: nested key index-specific mismatch",
      filename: "invalid.yaml",
      code: `
en:
  items:
    - label: "A {id}"
    - label: "B {id}"
fr:
  items:
    - label: "A {id}"
    - label: "B"
  `,
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
    {
      name: "disallowed dot in placeholder name: '{user.name}' vs '{id}'",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello {user.name}"
fr:
  msg: "Bonjour {id}"
  `,
      // If PH_RE disallows dots in names, left side is ∅ → disparity
      errors: [
        { messageId: "placeholderDisparity" },
        { messageId: "placeholderDisparity" },
      ],
    },
  ],
});
