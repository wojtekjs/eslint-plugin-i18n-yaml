import { getStaticYAMLValue } from "yaml-eslint-parser";
import { isYamlMapping } from "./utils.js";
const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Constrain nesting depth in i18n YAML files",
        },
        messages: {
            exceededMaxDepth: "Depth of mapping {{locale}}.{{path}} ({{currentDepth}}) exceeds permitted maximum ({{maxDepth}})",
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
        const options = context?.options[0] ?? {};
        const maxDepth = options?.maxDepth ?? 2;
        return {
            YAMLDocument(doc) {
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                descend(root, 0, [], context, maxDepth);
            },
        };
    },
};
export default rule;
const descend = (node, currentDepth, path, context, maxDepth) => {
    if (!isYamlMapping(node))
        return;
    for (const pair of node.pairs) {
        if (!pair.key)
            continue;
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
        if (!pair.value)
            continue;
        descend(pair.value, updatedDepth, updatedPath, context, maxDepth);
    }
};
const getKey = (pair) => {
    if (!pair || !pair.key)
        return "";
    return String(getStaticYAMLValue(pair.key));
};
