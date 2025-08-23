import { getStaticYAMLValue } from "yaml-eslint-parser";
import { isYamlMapping, isYamlSequence } from "./utils.js";
const MESSAGE_IDS = [
    "forbiddenWhitespace", // no whitespace allowed inside a placeholder
    "invalidCasing", // depending on what casing is selected. default is camelCase
    "invalidFirstCharacter", // cannot start with a non alpha char
    "forbiddenReservedKey", // ban keys like `prototype`, `hasOwnProperty` because they can't be properly used when formatting the message
    "forbiddenInvisibleChars", // forbid zero-width/invisible/bidi control chars (e.g., \u200B, \u202A–\u202E) since they break matching
    "invalidCharset", // ASCII letters & digits only (no punctuation, emojis, etc.)
    "emptyPlaceholder", // forbid {}
];
const DEFAULT_CHECKS = Object.fromEntries(MESSAGE_IDS.map((id) => [id, true]));
const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce placeholder formatting rules in i18n YAML files.",
            url: "",
        },
        schema: [
            {
                type: "object",
                properties: {
                    casing: { type: "string", default: "camelCase" },
                    allowICU: { type: "boolean", default: false },
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
            forbiddenWhitespace: "Spaces/multiple tokens are not permitted inside placeholders",
            invalidCasing: "Placeholders must follow {{chosenCasing}}. '{{raw}}' is invalid",
            invalidFirstCharacter: "Placeholders must start with a letter. '{{raw}}' is invalid",
            forbiddenReservedKey: "Placeholder '{{raw}}' is a reserved key and cannot be used (e.g., `constructor`, `hasOwnProperty`)",
            forbiddenInvisibleChars: "Placeholder '{{raw}}' contains disallowed invisible or control characters",
            invalidCharset: "Placeholder '{{raw}}' contains invalid characters. Only letters, digits, '_' and '-' are allowed",
            emptyPlaceholder: "Empty placeholders '{}' are not allowed",
        },
    },
    defaultOptions: [],
    // TODO update to allow ICU. see gpt notes in notion for details
    create(context) {
        const options = (context.options[0] ?? {});
        const opts = {
            casing: options.casing ?? "camelCase",
            allowICU: options.allowICU ?? false,
            checks: options.checks ?? DEFAULT_CHECKS,
        };
        return {
            YAMLDocument(doc) {
                if (!isYamlMapping(doc.content))
                    return;
                for (const localeBlock of doc.content.pairs) {
                    if (!localeBlock.key || !localeBlock.value)
                        continue;
                    dfsPhs(localeBlock.value, opts, context);
                }
            },
        };
    },
};
export default rule;
const REGEX_CHECKS = {
    // Zero-width / Bidi controls (expand if policy requires more)
    forbiddenInvisibleChars: /[\u200B-\u200D\uFEFF\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069]/,
    // Any whitespace in the inner token
    forbiddenWhitespace: /\s/,
    // Contains invalid chars (anything not ASCII letter/digit or '_'/'-' or spaces (covered by whitespace rule))
    invalidCharset: /[^A-Za-z0-9_\-\s]/,
    // First char is not a letter
    invalidFirstCharacter: /^[^A-Za-z]/,
};
const CASING_REGEXES = {
    camelCase: /^[a-z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
    "kebab-case": /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/,
    PascalCase: /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)*$/,
    snake_case: /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/,
    SCREAMING_CASE: /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/,
};
const TOLERANT_PH_FINDER = /(?!\{\{)\{([^}]*)\}/g;
const RESERVED_PLACEHOLDER_KEYS = new Set([
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
const dfsPhs = (node, opts, ctx) => {
    if (node.type === "YAMLScalar") {
        const v = getStaticYAMLValue(node);
        if (typeof v !== "string")
            return;
        const phs = getPlaceholdersFromScalar(node, ctx);
        for (const ph of phs) {
            const checks = checkPh(ph.innerPh, opts);
            if (!checks.report)
                continue;
            reportPhs(ph.innerPh, ph.loc, checks, opts, ctx);
        }
    }
    else if (isYamlMapping(node)) {
        for (const pair of node.pairs) {
            if (!pair.value)
                continue;
            dfsPhs(pair.value, opts, ctx);
        }
    }
    else if (isYamlSequence(node)) {
        for (const item of node.entries) {
            if (!item)
                continue;
            dfsPhs(item, opts, ctx);
        }
    }
};
const getPlaceholdersFromScalar = (scalar, ctx) => {
    const src = ctx.sourceCode;
    const [nodeStart, nodeEnd] = scalar.range;
    const raw = src.text.slice(nodeStart, nodeEnd);
    const phs = [];
    // we're iterating over a RegExpMatchArray below
    for (const m of raw.matchAll(TOLERANT_PH_FINDER)) {
        const fullPh = m[0];
        const idx = m.index; // start offset inside the string we ran the regex on (`raw` here)
        const absStart = nodeStart + idx;
        const absEnd = absStart + fullPh.length;
        phs.push({
            fullPh,
            innerPh: m[1],
            indexInRaw: idx,
            absRange: [absStart, absEnd],
            loc: {
                start: src.getLocFromIndex(absStart),
                end: src.getLocFromIndex(absEnd),
            },
        });
    }
    return phs;
};
const checkPh = (ph, opts) => {
    const checks = {
        report: false,
        forbiddenReservedKey: RESERVED_PLACEHOLDER_KEYS.has(ph),
        emptyPlaceholder: ph.trim().length === 0,
        invalidCasing: !CASING_REGEXES[opts.casing ?? "camelCase"].test(ph),
    };
    for (const [checkName, checkRe] of Object.entries(REGEX_CHECKS)) {
        checks[checkName] = checkRe.test(ph);
    }
    if (Object.values(checks).some((v) => v === true)) {
        checks.report = true;
    }
    return checks;
};
const reportPhs = (ph, phLoc, checks, opts, ctx) => {
    for (const [checkName, checkOutcome] of Object.entries(checks)) {
        if (!checkOutcome ||
            !isMessageId(checkName) ||
            opts.checks[checkName] === false)
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
const isMessageId = (maybeMsgId) => {
    return (typeof maybeMsgId === "string" &&
        MESSAGE_IDS.includes(maybeMsgId));
};
