import { RuleTester } from "eslint";
import yamlParser from "yaml-eslint-parser";
import maxDepth from "../../src/rule-max-depth";

const tester = new RuleTester({ languageOptions: { parser: yamlParser } });

tester.run("max-depth rule", maxDepth as any, {
  // ✅ VALID
  valid: [
    {
      name: "below default maxdepth value",
      filename: "valid.yaml",
      code: `
en: val
    `,
    },
    {
      name: "below custom maxdepth value",
      filename: "valid.yaml",
      options: [{ maxDepth: 5 }],
      code: `
en:
  a:
    b:
      c:
        d: val
    `,
    },
    {
      name: "at default maxdepth value",
      filename: "valid.yaml",
      code: `
en:
  a: val
    `,
    },
    {
      name: "at custom maxdepth value",
      filename: "valid.yaml",
      options: [{ maxDepth: 4 }],
      code: `
en:
  a:
    b:
      c: val
    `,
    },
    {
      name: "mapping with null value within maxdepth",
      filename: "valid.yaml",
      code: `
en:
  a: null
    `,
    },
    {
      name: "nested empty mapping within maxdepth",
      filename: "valid.yaml",
      code: `
en:
  a: {}
    `,
    },
    {
      name: "multiple root-level locales within maxdepth",
      filename: "valid.yaml",
      code: `
en:
  a: foo
fr:
  b: bar
    `,
    },
    {
      name: "flow-style mappings within custom maxdepth",
      filename: "valid.yaml",
      code: `
en: { a: { b: 1 } }
    `,
      options: [{ maxDepth: 3 }],
    },
    {
      name: "file with only comments",
      filename: "valid.yaml",
      code: `
# just a comment
    `,
    },
    {
      name: "empty with default maxdepth",
      filename: "valid.yaml",
      code: ``,
    },
    {
      name: "empty with maxdepth of 0",
      filename: "valid.yaml",
      options: [{ maxDepth: 0 }],
      code: ``,
    },
    {
      name: "arbitrarily deep sequence at root",
      filename: "valid.yaml",
      code: `
- - - foo
    `, // equivalent to [[["foo"]]]
    },
    {
      name: "non mapping root",
      filename: "valid.yaml",
      code: `just a string`,
    },
    {
      name: "mapping with arbitrarily deep sequence",
      filename: "valid.yaml",
      code: `
en:
  a:
    - - - foo
    `,
    },
    {
      name: "unusual keys within default maxdepth",
      filename: "valid.yaml",
      code: `
en:
  "a.b[c]😀": val
    `,
    },
    {
      name: "multiple yaml docs",
      filename: "valid.yaml",
      code: `
en:
  a: foo
---
fr:
  b: bar
    `,
    },
  ],

  // ❌ INVALID
  invalid: [
    {
      name: "exceeds default maxdepth value",
      filename: "invalid.yaml",
      code: `
en:
  a:
    b:
      c: val
    `,
      // each offending line throws its own error. since default maxDepth is 2 and here we have 4-level nesting, there are 2 errors
      errors: [
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
      ],
    },
    {
      name: "exceeds custom maxdepth value",
      filename: "invalid.yaml",
      options: [{ maxDepth: 4 }],
      code: `
en:
  a:
    b:
      c:
        d: val
    `,
      errors: [{ messageId: "exceededMaxDepth" }],
    },
    {
      name: "non empty yaml with maxdepth of 0",
      filename: "invalid.yaml",
      options: [{ maxDepth: 0 }],
      code: `
en:
  a: val
    `,
      errors: [
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
      ],
    },
    {
      name: "exceeds maxdepth with unusual keys",
      filename: "invalid.yaml",
      code: `
en:
  "a.b😀":
    c:
      d[1]:
        e: val
    `,
      errors: [
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
      ],
    },
    {
      name: "multiple yaml docs with one exceeding maxdepth",
      filename: "invalid.yaml",
      code: `
en:
  a:
    b:
      c:
        d: val
---
fr:
  x: y
    `,
      errors: [
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
      ],
    },
    {
      name: "multiple root-level locales with one exceeding maxdepth but another not",
      filename: "invalid.yaml",
      code: `
en:
  a:
    b:
      c:
        d: val
fr:
  a: val
    `,
      errors: [
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
        { messageId: "exceededMaxDepth" },
      ],
    },
  ],
});
