import { describe, expect, test } from "vitest";
import { AST, parseForESLint } from "yaml-eslint-parser";
import { YAMLProgram } from "yaml-eslint-parser/lib/ast";
import { isLocaleCode, isYamlMapping, isYamlSequence } from "../../src/utils";

type PickFunction = (p: YAMLProgram) => any;
type TestRow = [label: string, preYaml: string, pickFn: PickFunction];

const getContent = (ast: YAMLProgram) => ast.body[0].content;
const getPairsValue = (ast: YAMLProgram, pairIdx: number = 0) =>
  (getContent(ast) as AST.YAMLMapping).pairs[pairIdx].value;
const getPickedValue = (preYaml: string, pickFn: PickFunction) =>
  pickFn(parseForESLint(preYaml, { filePath: "x.yaml" }).ast);

describe("utils type guards", () => {
  // isYamlMapping & isYamlSequence invalid tests

  const invalidCases: TestRow[] = [
    ["null", "", () => null],
    ["undefined", "", () => undefined],
    [
      "YAMLDocument (with content)",
      "first: 123\nsecond: abc",
      (ast: YAMLProgram) => ast.body[0],
    ],
    ["YAMLDocument (empty)", "", (ast) => ast.body[0]],
    [
      "YAMLPair",
      "key: value",
      (ast) => (getContent(ast) as AST.YAMLMapping).pairs[0],
    ],
    ["YAMLScalar", "key: 123", (ast) => getPairsValue(ast)],
    [
      "YAMLWithMeta (anchor)",
      `
defaults: &def
  type: dev
            `,
      (ast) => getPairsValue(ast),
    ],
    [
      "YAMLWithMeta (tag)",
      `
home: !!map { a: 1 }
        `,
      (ast) => getPairsValue(ast), // `!!map { a: 1 }`
    ],
    [
      "YAMLWithMeta (tag at root)",
      `
!!map { a: 1 }
        `,
      (ast) => getContent(ast), // `!!map { a: 1 }`
    ],
    [
      "YAMLAlias",
      `
defaults: &def { a: 1 }
test: *def
        `,
      (ast) => getPairsValue(ast, 1),
    ],
    [
      "Merge pair (node '<<')",
      `
defaults: &def
  env: dev
custom:
  <<: *def
  `,
      (ast) =>
        ((getContent(ast) as AST.YAMLMapping).pairs[1].value as AST.YAMLMapping)
          .pairs[0],
    ],
  ];

  test.each(invalidCases)("invalid mapping '%s'", (_label, preYaml, pickFn) => {
    const pickedValue = getPickedValue(preYaml, pickFn);
    expect(isYamlMapping(pickedValue)).toBeFalsy();
  });

  test.each(invalidCases)(
    "invalid sequence '%s'",
    (_label, preYaml, pickFn) => {
      const pickedValue = getPickedValue(preYaml, pickFn);
      expect(isYamlSequence(pickedValue)).toBeFalsy();
    }
  );

  // isYamlMapping tests

  const validYamlMappingCases: TestRow[] = [
    ["root mapping", "en: test", (ast) => getContent(ast)],
    ["empty mapping", "{}", (ast) => getContent(ast)],
    [
      "nested mapping",
      `
en:
    test: { abc: hello }
      `,
      (ast) => (getContent(ast) as AST.YAMLMapping).pairs[0].value, // {abc: hello}
    ],
    [
      "merge value mapping (<<: { a: 1 })",
      `
x:
  <<: { a: 1 }
  `,
      (ast) => (getPairsValue(ast) as AST.YAMLMapping).pairs[0].value, // => YAMLMapping
    ],
  ];

  test.each(validYamlMappingCases)(
    "valid mapping '%s'",
    (_label, preYaml, pickFn) => {
      const pickedValue = getPickedValue(preYaml, pickFn);
      expect(isYamlMapping(pickedValue)).toBeTruthy();
    }
  );

  // isYamlSequence tests

  const validYamlSequenceCases: TestRow[] = [
    ["root sequence", "[1, 2, 3]", (ast) => getContent(ast)],
    ["empty sequence", "[]", (ast) => getContent(ast)],
    [
      "nested sequence",
      "key: [1, 2, 3]",
      (ast) => (getContent(ast) as AST.YAMLMapping).pairs[0].value,
    ],
    [
      "merge value sequence (<<: [{a:1},{b:2}])",
      `
x:
  <<: [ { a: 1 }, { b: 2 } ]
  `,
      (ast) => (getPairsValue(ast) as AST.YAMLMapping).pairs[0].value, // => YAMLSequence
    ],
  ];

  test.each(validYamlSequenceCases)(
    "valid sequence '%s'",
    (_label, preYaml, pickFn) => {
      const pickedValue = getPickedValue(preYaml, pickFn);
      expect(isYamlSequence(pickedValue)).toBeTruthy();
    }
  );

  // isLocaleCode tests

  test.each(["en", "fr", "pl", "es"])("valid locale '%s'", (localeCode) => {
    expect(isLocaleCode(localeCode)).toBeTruthy();
  });

  test.each([
    "",
    "x",
    "EN",
    "Fr",
    "en-US",
    " pl",
    "es ",
    "pt_BR",
    null,
    undefined,
    [],
    {},
    123,
    true,
  ])("invalid locale '%s'", (invalidCode) => {
    expect(isLocaleCode(invalidCode)).toBeFalsy();
  });
});
