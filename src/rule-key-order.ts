import { TSESLint } from "@typescript-eslint/utils";
import { AST, getStaticYAMLValue } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES, DEFAULT_LOCALE, META_KEYS } from "./constants.js";
import { isYamlMapping } from "./utils.js";

type RuleOptions = {
  metaKeys?: string[];
  defaultLocale?: string;
  allowedLocales?: string[];
};
type Options = [RuleOptions?];
type MessageIds = "orderedKeys";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description:
        "Prefer root-level key ordering by meta → default locale → all locales → other keys, with intra-group alphabetical sorting.",
    },
    messages: {
      orderedKeys:
        "Key '{{key}}' (group '{{group}}') is in position {{actualPosition}} but should be in position {{requiredPosition}}. Expected group order: meta (configured order) → default locale (single key) → all locales (A-Z) → other keys (A-Z).",
    },
    schema: [
      {
        type: "object",
        properties: {
          metaKeys: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
          defaultLocale: { type: "string", minLength: 2 },
          allowedLocales: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [],

  // TODO 2 - implement autofixer on save

  create(context) {
    const options = context?.options[0] ?? ({} as RuleOptions);
    const defaultLocale = options.defaultLocale ?? DEFAULT_LOCALE;

    const keyGroups: KeyGroupMap = {
      meta: {
        expectedGroupPosition: 0,
        permittedKeys: options.metaKeys ?? META_KEYS,
      },
      default: {
        expectedGroupPosition: 1,
        permittedKeys: [defaultLocale],
      },
      locales: {
        expectedGroupPosition: 2,
        permittedKeys: (options.allowedLocales ?? ALL_LOCALE_CODES).filter(
          (l) => l !== defaultLocale
        ),
      },
      other: { expectedGroupPosition: 3, permittedKeys: [] },
    };

    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;

        const richRootPairs = buildRichRootPairs(root.pairs, keyGroups);
        const sortedPositionedRichPairs = assignPositions(
          richRootPairs,
          keyGroups
        ).sort(byRank);
        const keyIndexMap = new Map<number, number>(
          // using originalIndex instead of the key string value allows better handling of duplicate keys
          sortedPositionedRichPairs.map((pair, i) => [pair.originalIndex, i])
        );

        for (const pair of richRootPairs) {
          const expectedPositionInYAML = keyIndexMap.get(pair.originalIndex)!;

          if (pair.originalIndex !== expectedPositionInYAML) {
            context.report({
              loc: pair.location,
              messageId: "orderedKeys",
              data: {
                key: pair.key,
                group: pair.group,
                // Adding 1 to each to ensure user-facing count is 1-based (not 0-based)
                actualPosition: pair.originalIndex + 1,
                requiredPosition: expectedPositionInYAML + 1,
              },
            });
          }
        }
      },
    };
  },
};

export default rule;

const KEY_GROUPS = ["meta", "default", "locales", "other"] as const;

type KeyGroup = (typeof KEY_GROUPS)[number];

type KeyGroupMap = Record<KeyGroup, KeyGroupMetaData>;

type KeyGroupMetaData = {
  expectedGroupPosition: number;
  permittedKeys: string[];
};

type RichPair = {
  key: string;
  pair: AST.YAMLPair;
  group: KeyGroup;
  groupPosition: number;
  expectedPositionInGroup?: number;
  originalIndex: number;
  location: AST.SourceLocation;
};

type PositionedRichPair = RichPair & { expectedPositionInGroup: number };

const buildRichRootPairs = (
  basePairs: AST.YAMLPair[],
  keyGroups: KeyGroupMap
): RichPair[] => {
  return basePairs.flatMap<RichPair>((pair, idx) => {
    if (!pair.key) return [];
    const stringKey = String(getStaticYAMLValue(pair.key));
    const keyGroup = getKeyGroup(stringKey, keyGroups);
    // Returning an array because flatMap expects an array it can flatten (thereby extracting this one object)
    return [
      {
        key: stringKey,
        pair,
        group: keyGroup,
        groupPosition: keyGroups[keyGroup].expectedGroupPosition,
        originalIndex: idx,
        location: pair.key.loc,
      },
    ];
  });
};

const assignPositions = (
  richPairs: RichPair[],
  keyGroups: KeyGroupMap
): PositionedRichPair[] => {
  // using a collator for more "human" sorting
  const collator = new Intl.Collator("en", {
    sensitivity: "base", // case- and accent-insensitive
    numeric: true, // "k2" < "k10"
  });

  const presentKeys = {
    meta: [] as string[],
    default: [] as string[],
    locales: [] as string[],
    other: [] as string[],
  };

  for (const p of richPairs) presentKeys[p.group].push(p.key);

  const expectedMetaOrder = keyGroups.meta.permittedKeys.filter((k) =>
    presentKeys.meta.includes(k)
  );
  const expectedLocalesOrder = [...presentKeys.locales].sort(collator.compare);
  const expectedOtherOrder = [...presentKeys.other].sort(collator.compare);

  const idx = {
    meta: new Map(expectedMetaOrder.map((k, i) => [k, i])),
    locales: new Map(expectedLocalesOrder.map((k, i) => [k, i])),
    other: new Map(expectedOtherOrder.map((k, i) => [k, i])),
  };

  return richPairs.map((p) => ({
    ...p,
    expectedPositionInGroup:
      p.group === "meta"
        ? idx.meta.get(p.key) ?? 0
        : p.group === "default"
        ? 0
        : p.group === "locales"
        ? idx.locales.get(p.key) ?? 0
        : idx.other.get(p.key) ?? 0,
  }));
};

const getKeyGroup = (key: string, keyGroups: KeyGroupMap): KeyGroup => {
  if (keyGroups.meta.permittedKeys.includes(key)) return "meta";
  if (key === keyGroups.default.permittedKeys[0]) return "default";
  if (keyGroups.locales.permittedKeys.includes(key)) return "locales";
  return "other";
};

const byRank = (a: PositionedRichPair, b: PositionedRichPair) =>
  a.groupPosition - b.groupPosition ||
  a.expectedPositionInGroup - b.expectedPositionInGroup ||
  a.originalIndex - b.originalIndex;
