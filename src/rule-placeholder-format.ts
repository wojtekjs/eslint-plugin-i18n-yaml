import { TSESLint } from "@typescript-eslint/utils";
import { getStaticYAMLValue, type AST } from "yaml-eslint-parser";
import { isYamlMapping, isYamlSequence } from "./utils.js";

type RuleOptions = {
  casing?: Casing;
  mode?: ParsingMode;
  checks?: Partial<Record<MessageIds, boolean>>;
};

type Options = [RuleOptions?];

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce placeholder formatting rules in i18n YAML files.",
      url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamlplaceholder-format",
    },
    schema: [
      {
        type: "object",
        properties: {
          casing: { type: "string", default: "camelCase" },
          mode: { type: "string", default: "standard" },
          checks: {
            type: "object",
            properties: {
              forbiddenWhitespace: { type: "boolean", default: true },
              invalidCasing: { type: "boolean", default: true },
              invalidFirstCharacter: { type: "boolean", default: true },
              forbiddenReservedKey: { type: "boolean", default: true },
              forbiddenInvisibleChars: { type: "boolean", default: true },
              invalidCharset: { type: "boolean", default: true },
              emptyPlaceholder: { type: "boolean", default: true },
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      forbiddenWhitespace:
        "Spaces/multiple tokens are not permitted inside placeholders",
      invalidCasing:
        "Placeholders must follow {{chosenCasing}}. '{{raw}}' is invalid",
      invalidFirstCharacter:
        "Placeholders must start with a letter. '{{raw}}' is invalid",
      forbiddenReservedKey:
        "Placeholder '{{raw}}' is a reserved key and cannot be used (e.g., `constructor`, `hasOwnProperty`)",
      forbiddenInvisibleChars:
        "Placeholder '{{raw}}' contains disallowed invisible or control characters",
      invalidCharset:
        "Placeholder '{{raw}}' contains invalid characters. Only ASCII letters, digits, '_' and '-' are allowed",
      emptyPlaceholder: "Empty placeholders '{}' are not allowed",
    },
  },
  defaultOptions: [],

  create(context) {
    const options = (context.options[0] ?? {}) as RuleOptions;
    const opts = {
      casing: options.casing ?? "camelCase",
      mode: options.mode ?? "standard",
      checks: { ...DEFAULT_CHECKS, ...options.checks },
    } as Required<RuleOptions>;
    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        if (!isYamlMapping(doc.content)) return;
        for (const localeBlock of doc.content.pairs) {
          if (!localeBlock.key || !localeBlock.value) continue;
          dfsPhs(localeBlock.value, opts, context);
        }
      },
    };
  },
};

export default rule;

// * --------- Logic

const dfsPhs = (
  node: AST.YAMLNode,
  opts: Required<RuleOptions>,
  ctx: Context
): void => {
  if (node.type === "YAMLScalar") {
    const v = getStaticYAMLValue(node);
    if (typeof v !== "string") return;

    const phs = getPlaceholdersFromScalar(node, opts.mode, ctx);
    for (const ph of phs) {
      const checks = checkPh(ph.innerPh, opts);
      if (!checks.report) continue;
      reportPhs(ph.innerPh, ph.loc, checks, opts, ctx);
    }
  } else if (isYamlMapping(node)) {
    for (const pair of node.pairs) {
      if (!pair.value) continue;
      dfsPhs(pair.value, opts, ctx);
    }
  } else if (isYamlSequence(node)) {
    for (const item of node.entries) {
      if (!item) continue;
      dfsPhs(item, opts, ctx);
    }
  }
};

const findIcuSpans = (text: string): Span[] => {
  const spans: Span[] = [];
  for (const m of text.matchAll(PH_FINDER_ICU_ON)) {
    // ICU heads by definition end with a comma
    if (!m[0].endsWith(",")) continue;

    let i = (m.index ?? 0) + m[0].length; // scan after the comma
    let depth = 1; // tracks the balance of opening/closing curly braces. starts at 1 since we opened at m.index which is a {
    // once depth === 0, we've reached the end of a balanced icu span - all opened braces got closed
    while (i < text.length && depth > 0) {
      const ch = text[i++];
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
    }
    spans.push([m.index ?? 0, i]); // [start at '{', end just after matching '}']
  }
  return spans;
};

const insideAnyIcuBody = (pos: number, spans: Span[]) =>
  spans.some(([s, e]) => pos > s && pos < e); // strict: head at pos==s is allowed

const getPlaceholdersFromScalar = (
  scalar: AST.YAMLScalar,
  mode: ParsingMode,
  ctx: Context
): PlaceholderInfo[] => {
  const icuOn = mode === "icu";
  const src = ctx.sourceCode;
  const [nodeStart, nodeEnd] = scalar.range;
  const raw = src.text.slice(nodeStart, nodeEnd);

  const RE = icuOn ? PH_FINDER_ICU_ON : PH_FINDER_ICU_OFF;
  const icuSpans = icuOn ? findIcuSpans(raw) : []; // only needed when ICU is ON

  const phs: PlaceholderInfo[] = [];
  for (const m of raw.matchAll(RE)) {
    const fullIdx = m.index!; // start of the match in `raw`
    const innerPh = m[1]; // the token / ICU arg (no braces)

    // ICU mode: skip past any tokens that start inside any ICU body (but keep header arg names)
    if (icuOn && insideAnyIcuBody(fullIdx, icuSpans)) continue;

    // start of captured name inside the match (skips "{" and any spaces)
    const startInMatch = m[0].indexOf(innerPh);
    const absStart = nodeStart + fullIdx + (icuOn ? startInMatch : 0);
    const absEnd = absStart + (icuOn ? innerPh.length : m[0].length);

    phs.push({
      innerPh,
      indexInRaw: fullIdx,
      loc: {
        start: src.getLocFromIndex(absStart),
        end: src.getLocFromIndex(absEnd),
      },
    });
  }
  return phs;
};

const checkPh = (
  ph: string,
  opts: Required<RuleOptions>
): PlaceholderChecks => {
  const checks: PlaceholderChecks = {
    report: false,
    forbiddenReservedKey: RESERVED_PLACEHOLDER_KEYS.has(ph),
    emptyPlaceholder: ph.trim().length === 0,
    invalidCasing: !CASING_REGEXES[opts.casing ?? "camelCase"].test(ph),
  };
  for (const [checkName, checkRe] of Object.entries(REGEX_CHECKS)) {
    checks[checkName as keyof PlaceholderChecks] = checkRe.test(ph);
  }
  if (Object.values(checks).some((v) => v === true)) {
    checks.report = true;
  }
  return checks;
};

const reportPhs = (
  ph: string,
  phLoc: AST.SourceLocation,
  checks: PlaceholderChecks,
  opts: Required<RuleOptions>,
  ctx: Context
): void => {
  for (const [checkName, checkOutcome] of Object.entries(checks)) {
    if (
      !checkOutcome ||
      !isMessageId(checkName) ||
      opts.checks[checkName] === false
    )
      continue;
    ctx.report({
      loc: phLoc,
      messageId: checkName,
      data: {
        raw: ph,
        ...(checkName === "invalidCasing" ? { chosenCasing: opts.casing } : {}),
      },
    });
  }
};

const isMessageId = (maybeMsgId: unknown): maybeMsgId is MessageIds => {
  return (
    typeof maybeMsgId === "string" &&
    MESSAGE_IDS.includes(maybeMsgId as MessageIds)
  );
};

// * --------- Constants

const REGEX_CHECKS = {
  // Zero-width / Bidi controls (expand if policy requires more)
  forbiddenInvisibleChars:
    /[\u200B-\u200D\uFEFF\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]/,
  // Any whitespace in the inner token
  forbiddenWhitespace: /\s/,
  // Contains invalid chars (anything not ASCII letter/digit or '_'/'-' or spaces (covered by whitespace rule))
  invalidCharset: /[^A-Za-z0-9_\-\s]/,
  // First char is not a letter
  invalidFirstCharacter: /^[^A-Za-z]/,
} satisfies Record<
  keyof Omit<
    PlaceholderChecks,
    "report" | "forbiddenReservedKey" | "invalidCasing" | "emptyPlaceholder"
  >,
  RegExp
>;

/*
as a secondary effect, these forbid spaces, non-alpha starting chars, usage of symbols other than _ or -
this is a standard industry expectation so it has been left in here
*/
const CASING_REGEXES = {
  camelCase: /^[a-z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
  "kebab-case": /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/,
  PascalCase: /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
  snake_case: /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/,
  SCREAMING_CASE: /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/,
} satisfies Record<Casing, RegExp>;

// find and return everything between a set of curly braces
const PH_FINDER_ICU_OFF = /(?!\{\{)\{([^}]*)\}/g;
// ignore {{placeholder}} completely since ICU doesn't permit it
const PH_FINDER_ICU_ON = /(?<!\{)\{(?!\{)\s*([^,}]+?)\s*(?:,|})/g;

const RESERVED_PLACEHOLDER_KEYS = new Set<string>([
  // Prototype pollution / object meta
  "__proto__",
  "prototype",
  "constructor",

  // Object.prototype methods
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",

  // Function / constructor internals
  "apply",
  "bind",
  "call",
  "arguments",
  "caller",

  // Other dangerous/ambiguous ones
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "eval",
]);

const MESSAGE_IDS = [
  "forbiddenWhitespace",
  "invalidCasing",
  "invalidFirstCharacter",
  "forbiddenReservedKey",
  "forbiddenInvisibleChars",
  "invalidCharset",
  "emptyPlaceholder",
] as const;

const DEFAULT_CHECKS: Record<MessageIds, boolean> = Object.fromEntries(
  MESSAGE_IDS.map((id) => [id, true])
) as Record<MessageIds, boolean>;

// * --------- Types

type Span = [start: number, endExclusive: number];

// doing {[key: MessageIds]: boolean} is wrong because TS only allows the usage of string, number, or symbol there
type PlaceholderChecks = { [K in MessageIds]?: boolean } & { report: boolean };

type PlaceholderInfo = {
  innerPh: string;
  indexInRaw: number;
  loc: AST.SourceLocation;
};

type Context = TSESLint.RuleContext<MessageIds, Options>;

type MessageIds = (typeof MESSAGE_IDS)[number];

type Casing =
  | "camelCase"
  | "kebab-case"
  | "snake_case"
  | "PascalCase"
  | "SCREAMING_CASE";

type ParsingMode = "standard" | "icu";
