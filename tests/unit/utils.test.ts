import { describe, expect, test } from "vitest";
import { parseForESLint } from "yaml-eslint-parser";
import { isYamlMapping } from "../../src/utils";

// TODO move this into beforeEach
const { ast } = parseForESLint(
  `
key: value
sequence: [1, 2, 3]
obj: { v: 1 }
    `,
  { filePath: "test.yaml" }
);

const doc = ast.body[0];
const root = doc.content;

// TODO finish testing utils
describe("utils type guards", () => {
  test("isYamlMapping valid", () => {
    expect(isYamlMapping(root)).toBeTruthy();
  });
});
