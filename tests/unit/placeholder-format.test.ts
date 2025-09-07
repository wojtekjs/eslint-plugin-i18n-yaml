import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import placeholderFormat, {
  MESSAGE_IDS,
} from "../../src/rule-placeholder-format";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

const allChecksFalse = Object.fromEntries(
  MESSAGE_IDS.map((msgId) => [msgId, false])
);

tester.run("placeholder-format rule", placeholderFormat as any, {
  // ✅ VALID
  valid: [
    {
      name: "empty document",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "multiple locales with valid placeholders",
      filename: "valid.yaml",
      code: `
en:
  welcome: Hello, {userName}
  goodbye: See you later, {id}
fr: 
  welcome: Bonjour, {profile1}
  goodbye: Au revoir, {person}
        `,
    },
    {
      name: "valid camelCase",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {userName}
        `,
      options: [
        {
          casing: "camelCase",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
    {
      name: "valid kebab-case",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {user-name}
        `,
      options: [
        {
          casing: "kebab-case",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
    {
      name: "valid snake_case",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {user_name}
        `,
      options: [
        {
          casing: "snake_case",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
    {
      name: "valid PascalCase",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      options: [
        {
          casing: "PascalCase",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
    {
      name: "valid SCREAMING_CASE",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {USER_NAME}
        `,
      options: [
        {
          casing: "SCREAMING_CASE",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
    {
      name: "reserved term lookalike",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {constructorX} {hasOwnProperty1}
        `,
      options: [{ checks: { ...allChecksFalse, forbiddenReservedKey: true } }],
    },
    {
      name: "reserved term with modified casing",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {Constructor} {__PROTO__}
        `,
      options: [{ checks: { ...allChecksFalse, forbiddenReservedKey: true } }],
    },
    {
      name: "underscore allowed by invalidCharset",
      filename: "valid.yaml",
      code: `
en:
  name: Hello, {user_name}
        `,
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "dash allowed by invalidCharset",
      filename: "valid.yaml",
      code: `
en:
  name: Hello, {user-name}
        `,
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "digits allowed by invalidCharset",
      filename: "valid.yaml",
      code: `
en:
  name: Hello, {user1name}
        `,
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "casing violation ignored because casing checking is off",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {User_NAME}
        `,
      options: [{ checks: { invalidCasing: false } }],
    },
    {
      name: "standard mode - double brace placeholder",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {{name}}
        `,
    },
    {
      name: "ICU mode - double brace placeholder",
      filename: "valid.yaml",
      code: `
en:
  name: Hey, {{name}}
        `,
      options: [{ mode: "icu" }],
    },
    {
      name: "ICU mode valid header placeholder",
      filename: "valid.yaml",
      code: `
en:
  inboxSummary: "Hi {name}, you’ve got {count, plural, one {1 message} other {{count} messages}}."
        `,
      options: [{ mode: "icu" }],
    },
    {
      name: "ICU: body-only invalid placeholders are ignored (no reports)",
      filename: "valid.yaml",
      code: `
en:
  msg: "{count, plural, one {Bad One} other {Also_Bad}}"
`,
      // Header arg 'count' is camelCase (valid); body placeholders are ignored in ICU mode
      options: [{ mode: "icu" }],
    },
    {
      name: "traversal: nested mapping/sequence with valid placeholders",
      filename: "valid.yaml",
      code: `
en:
  outer:
    inner: "Hi {userName}"
    list:
      - "Welcome {sessionId}"
      - { deep: "OK {profileId}" }
  `,
      options: [
        {
          casing: "camelCase",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
    },
  ],

  // ❌ INVALID
  invalid: [
    {
      name: "empty placeholder with only emptyPlaceholder=true",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {}
    `,
      errors: [{ messageId: "emptyPlaceholder" }],
      options: [{ checks: { ...allChecksFalse, emptyPlaceholder: true } }],
    },
    {
      name: "invalid first character: digit",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {1user}
    `,
      errors: [{ messageId: "invalidFirstCharacter" }],
      options: [{ checks: { ...allChecksFalse, invalidFirstCharacter: true } }],
    },
    {
      name: "invalid first character: symbol",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {_user}
    `,
      errors: [{ messageId: "invalidFirstCharacter" }],
      options: [{ checks: { ...allChecksFalse, invalidFirstCharacter: true } }],
    },
    {
      name: "invalid first character: emoji",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {🦊user}
    `,
      errors: [{ messageId: "invalidFirstCharacter" }],
      options: [{ checks: { ...allChecksFalse, invalidFirstCharacter: true } }],
    },
    {
      name: "invalid first character: underscore with snake_case",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {_user}
    `,
      errors: [{ messageId: "invalidFirstCharacter" }],
      options: [
        {
          casing: "snake_case",
          checks: { ...allChecksFalse, invalidFirstCharacter: true },
        },
      ],
    },
    {
      name: "invalid charset: symbol",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {user&}
        `,
      errors: [{ messageId: "invalidCharset" }],
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "invalid charset: non-ascii",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {userNäme}
        `,
      errors: [{ messageId: "invalidCharset" }],
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "invalid charset: emoji",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {user🫨name}
        `,
      errors: [{ messageId: "invalidCharset" }],
      options: [{ checks: { ...allChecksFalse, invalidCharset: true } }],
    },
    {
      name: "forbidden whitespace separating words",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, {user name}
        `,
      errors: [{ messageId: "forbiddenWhitespace" }],
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
    },
    {
      name: "forbidden whitespace around placeholder",
      filename: "invalid.yaml",
      code: `
en:
  name: Hello, { userName }
        `,
      errors: [{ messageId: "forbiddenWhitespace" }],
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
    },
    {
      name: "violating default casing (camelCase)",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "symbol-only placeholder",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {__}
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "invalid PascalCase",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {userName}
        `,
      options: [
        {
          casing: "PascalCase",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "invalid camelCase",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      options: [
        {
          casing: "camelCase",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "invalid snake_case",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      options: [
        {
          casing: "snake_case",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "invalid kebab-case",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      options: [
        {
          casing: "kebab-case",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "invalid SCREAMING_CASE",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {UserName}
        `,
      options: [
        {
          casing: "SCREAMING_CASE",
          checks: { ...allChecksFalse, invalidCasing: true },
        },
      ],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "sample reserved keys",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {constructor} {toString} {__defineGetter__}
        `,
      errors: [
        { messageId: "forbiddenReservedKey" },
        { messageId: "forbiddenReservedKey" },
        { messageId: "forbiddenReservedKey" },
      ],
      options: [{ checks: { ...allChecksFalse, forbiddenReservedKey: true } }],
    },
    {
      name: "violations across multiple yaml docs",
      filename: "invalid.yaml",
      code: `
en:
  name: Hi, {PersonId}

---

fr: 
  name: Bonjour, {_currUser()}
        `,
      errors: [
        { messageId: "invalidCasing" }, // for en
        { messageId: "invalidCasing" }, // for fr
        { messageId: "invalidCharset" }, // for fr
        { messageId: "invalidFirstCharacter" }, // for fr
      ],
    },
    {
      name: "deeply nested bad placeholder in flow-style mapping",
      filename: "invalid.yaml",
      code: `
en:
  name: { first: "User's name is {$user}" }
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "deeply nested bad placeholder in flow-style sequence",
      filename: "invalid.yaml",
      code: `
en:
  name: [Smith, "{$first}"]
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "deeply nested bad placeholder in block-style sequence",
      filename: "invalid.yaml",
      code: `
en:
  name:
    - Smith
    - "{$first}"
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "3 checks turned off, others remain on by default",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {} {na*me  } {eval}
        `,
      errors: [
        { messageId: "emptyPlaceholder" },
        { messageId: "forbiddenWhitespace" },
        { messageId: "invalidCharset" },
        { messageId: "forbiddenReservedKey" },
      ],
      options: [
        {
          checks: {
            invalidCasing: false,
            invalidFirstCharacter: false,
            forbiddenInvisibleChars: false,
          },
        },
      ],
    },
    {
      name: "empty checks object leaves all on by default",
      filename: "invalid.yaml",
      code: `
en:
  name: Hey, {} {&user} { test}
        `,
      errors: [
        { messageId: "emptyPlaceholder" }, // {}
        { messageId: "invalidCasing" }, // {}
        { messageId: "invalidCasing" }, // &user
        { messageId: "invalidCharset" }, // &user
        { messageId: "invalidFirstCharacter" }, // &user
        { messageId: "invalidCasing" }, //  test
        { messageId: "forbiddenWhitespace" }, //  test
        { messageId: "invalidFirstCharacter" }, //   test
      ],
      options: [{ checks: {} }],
    },
    {
      name: "mixed validity",
      filename: "invalid.yaml",
      code: `
en:
  greeting: Hey, {firstName} {lastName}
  goodbye: See you, {$USER}
  msg: You have { num# } items in your cart
        `,
      errors: [
        { messageId: "invalidCasing" }, // $USER
        { messageId: "invalidCharset" }, // $USER
        { messageId: "invalidFirstCharacter" }, // $USER
        { messageId: "invalidCasing" }, // num$
        { messageId: "forbiddenWhitespace" }, // num$
        { messageId: "invalidCharset" }, // num$
        { messageId: "invalidFirstCharacter" }, // num$
      ],
    },
    {
      name: "checks inside block scalars",
      filename: "invalid.yaml",
      code: `
en:
  greeting: |
    hey,
    how are you?
    yours,
    {__customerDeptName*}
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "checks inside folded scalars",
      filename: "invalid.yaml",
      code: `
en:
  greeting: >
    hey,
    how are you?
    yours,
    {__customerDeptName*}
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "forbidden whitespace: TAB inside placeholder",
      filename: "invalid.yaml",
      code: `
en:
  name: "Hello {user\tname}"
  `,
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
      errors: [{ messageId: "forbiddenWhitespace" }],
    },
    {
      name: "forbidden whitespace: NEWLINE inside placeholder (block scalar)",
      filename: "invalid.yaml",
      code: `
en:
  name: |
    Hello {user
    name}
  `,
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
      errors: [{ messageId: "forbiddenWhitespace" }],
    },
    {
      name: "forbidden whitespace: NBSP inside placeholder",
      filename: "invalid.yaml",
      code: `
en:
  name: "Hello {user\u00A0name}"
  `,
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
      errors: [{ messageId: "forbiddenWhitespace" }],
    },
    {
      name: "invisible: ZWJ inside placeholder",
      filename: "invalid.yaml",
      code: `en:\n  name: "Hello {na\u200Dme}"\n`,
      options: [
        { checks: { ...allChecksFalse, forbiddenInvisibleChars: true } },
      ],
      errors: [{ messageId: "forbiddenInvisibleChars" }],
    },
    {
      name: "invisible: LRM inside placeholder",
      filename: "invalid.yaml",
      code: `en:\n  name: "Hello {na\u200Eme}"\n`,
      options: [
        { checks: { ...allChecksFalse, forbiddenInvisibleChars: true } },
      ],
      errors: [{ messageId: "forbiddenInvisibleChars" }],
    },
    {
      name: "invisible: BOM inside placeholder",
      filename: "invalid.yaml",
      code: `en:\n  name: "Hello {na\uFEFFme}"\n`,
      options: [
        { checks: { ...allChecksFalse, forbiddenInvisibleChars: true } },
      ],
      errors: [{ messageId: "forbiddenInvisibleChars" }],
    },
    {
      name: "skip non-strings: number/boolean/null ignored; string with space reports",
      filename: "invalid.yaml",
      code: `
en:
  numberVal: 123
  boolVal: true
  nullVal: null
  stringVal: "Hello {first name}"   # only this one should be scanned & reported
`,
      options: [{ checks: { ...allChecksFalse, forbiddenWhitespace: true } }],
      errors: [{ messageId: "forbiddenWhitespace" }],
    },
    {
      name: "multi-violation: (almost) everything wrong in one placeholder",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello { 1$na\u200D me }"
  `,
      // Use default checks (all ON) so we see multiple reports
      errors: [
        // Order follows rule's reporting order: invalidCasing first, then regex checks
        { messageId: "invalidCasing" },
        { messageId: "forbiddenInvisibleChars" },
        { messageId: "forbiddenWhitespace" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "multi-violation: digit start + dollar symbol",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello {1$name}"
  `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "no de-dupe: same invalid placeholder twice",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello {1name} and {1name}"
  `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidFirstCharacter" },
        { messageId: "invalidCasing" },
        { messageId: "invalidFirstCharacter" },
      ],
    },
    {
      name: "ICU mode invalid header placeholder",
      filename: "invalid.yaml",
      code: `
en:
  inboxSummary: "Hi {name}, you’ve got {1$count test/, plural, one {1 message} other {{count} messages}}."
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "forbiddenWhitespace" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
      options: [{ mode: "icu" }],
    },
    {
      name: "ICU mode - valid ICU placeholder, invalid plain placeholder",
      filename: "invalid.yaml",
      code: `
en:
  inboxSummary: "Hi {%user}, you’ve got {count, plural, one {1 message} other {{count} messages}}."
        `,
      errors: [
        { messageId: "invalidCasing" },
        { messageId: "invalidCharset" },
        { messageId: "invalidFirstCharacter" },
      ],
      options: [{ mode: "icu" }],
    },
    {
      name: "CRLF line endings don't break reporting",
      filename: "invalid.yaml",
      // Use explicit CRLFs between lines in this template literal
      code: 'en:\r\n  user: "{$user}"\r\n',
      options: [{ checks: { ...allChecksFalse, invalidFirstCharacter: true } }],
      errors: [{ messageId: "invalidFirstCharacter" }],
    },
    {
      name: "ICU: malformed body → header evaluated; body ignored",
      filename: "invalid.yaml",
      code: `
en:
  msg: "{Count, plural, one {item} other {items"
`,
      options: [
        { mode: "icu", casing: "camelCase", checks: { invalidCasing: true } },
      ],
      // Only the header arg 'Count' should be validated (camelCase expected) → invalidCasing
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "adjacent brace noise: extracts placeholder despite trailing extra '}' after {name}}",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello {name}}"
`,
      options: [{ casing: "PascalCase", checks: { invalidCasing: true } }],
      errors: [{ messageId: "invalidCasing" }],
    },
    {
      name: "adjacent brace noise: extracts placeholder despite leading stray '}' before }{name}",
      filename: "invalid.yaml",
      code: `
en:
  msg: "Hello }{name}"
`,
      // Again, PascalCase makes {name} invalid → proves extraction still works amid noise
      options: [{ casing: "PascalCase", checks: { invalidCasing: true } }],
      errors: [{ messageId: "invalidCasing" }],
    },
  ],
});
