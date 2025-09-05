import { describe, expect, test } from "vitest";
import { LocaleCode } from "../../src/constants";
import { formatDisplayKey, prepareLocs } from "../../src/shared-parity";

type TestRow<V> = [label: string, testValue: V, expected: string];

describe("shared-parity utility functions", () => {
  const prepareLocsTestCases: TestRow<LocaleCode[]>[] = [
    ["empty array", [], ""],
    ["1 input", ["fr"], "fr"],
    ["2 inputs", ["en", "fr"], "en, fr"],
    ["3 inputs (boundary)", ["en", "fr", "de"], "en, fr, de"],
    ["4 inputs", ["es", "pl", "sw", "de"], "es, pl, sw, … (+1)"],
  ];
  test.each(prepareLocsTestCases)(
    "prepareLocs with %s",
    (_label, tV, expected) => {
      expect(prepareLocs(tV)).toBe(expected);
    }
  );

  const formatDisplayKeyTestCases: TestRow<string[]>[] = [
    ["empty path", [], ""],
    ["locale only path", ["en"], ""],
    ["short key-only path", ["fr", "title", "primary"], "primary"],
    [
      "long key-only path",
      ["fr", "titles", "landingPage", "heroSection", "secondary"],
      "secondary",
    ],
    ["sub-locale indexed array", ["en", "0"], "[0]"],
    ["sub-locale nested indexed array", ["en", "0", "1"], "[0][1]"],
    ["standalone indexed array", ["0", "1"], "[1]"], // yaml file containing only an array
    ["key-nested indexed array", ["fr", "list", "1"], "list[1]"],
    [
      "nested indexed array",
      ["en", "listOfLists", "first", "0", "2", "1"],
      "first[0][2][1]",
    ],
    ["named key inside indexed array", ["de", "list", "1", "abc"], "abc"],
    ["numeric-looking key", ["fr", "year", "2025"], "year[2025]"],
    ["leading-zero array index", ["pl", "list", "01"], "list[01]"],
    ["non-numeric index-like tail", ["es", "list", "1a"], "1a"],
    ["hyphen-prefixed index lookalike", ["it", "list", "-1"], "-1"],

    // ⚠️ Below are highly discouraged practices that users should never actually use
    ["key with dot", ["it", "a.b"], "a.b"],
    ["key with square brackets", ["bu", "list[test]", "0"], "list[test][0]"],
  ];
  test.each(formatDisplayKeyTestCases)(
    "formatDisplayKey with %s",
    (_label, tV, expected) => {
      expect(formatDisplayKey(tV)).toBe(expected);
    }
  );
});
