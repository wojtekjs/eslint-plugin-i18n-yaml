import { TSESLint } from "@typescript-eslint/utils";
import type { AST } from "yaml-eslint-parser";
import { getStaticYAMLValue } from "yaml-eslint-parser";
import { MAX_NESTING_DEPTH } from "./constants.js";
import { isYamlMapping } from "./utils.js";

type RuleOptions = {
  maxDepth?: number;
};
type Options = [RuleOptions?];
type MessageIds = "exceededMaxDepth";

const rule: TSESLint.RuleModule<MessageIds, Options> = {
  meta: {
    type: "problem",
    docs: {
      description: "Constrain nesting depth in i18n YAML files",
    },
    messages: {
      exceededMaxDepth:
        "Depth of mapping {{locale}}.{{path}} ({{currentDepth}}) exceeds permitted maximum ({{maxDepth}})",
    },
    schema: [
      {
        type: "object",
        properties: {
          maxDepth: { type: "number", minimum: 0 },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [],

  create(context) {
    const options = context?.options[0] ?? ({} as RuleOptions);
    const maxDepth = options?.maxDepth ?? MAX_NESTING_DEPTH;
    return {
      YAMLDocument(doc: AST.YAMLDocument) {
        const root = doc.content;
        if (!isYamlMapping(root)) return;
        descend(root, 0, [], context, maxDepth);
      },
    };
  },
};

export default rule;

const descend = (
  node: AST.YAMLContent | AST.YAMLWithMeta,
  currentDepth: number,
  path: string[],
  context: TSESLint.RuleContext<MessageIds, Options>,
  maxDepth: number
): void => {
  if (!isYamlMapping(node)) return;

  for (const pair of node.pairs) {
    if (!pair.key) continue;

    const updatedDepth = currentDepth + 1;
    const updatedPath = path.concat(getKey(pair));

    if (updatedDepth > maxDepth) {
      context.report({
        loc: node.loc,
        messageId: "exceededMaxDepth",
        data: {
          locale: path[0],
          path: updatedPath.slice(1).join("."),
          currentDepth: updatedDepth,
          maxDepth,
        },
      });
    }

    if (!pair.value) continue;

    descend(pair.value, updatedDepth, updatedPath, context, maxDepth);
  }
};

const getKey = (pair: AST.YAMLPair): string => {
  if (!pair || !pair.key) return "";
  return String(getStaticYAMLValue(pair.key));
};
