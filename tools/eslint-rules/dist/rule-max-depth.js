import { getStaticYAMLValue } from "yaml-eslint-parser";
import { MAX_NESTING_DEPTH } from "./constants.js";
import createRule from "./rule-creator.js";
import { isYamlMapping } from "./utils.js";
const maxDepth = createRule({
    name: "max-depth",
    meta: {
        type: "problem",
        docs: {
            description: "Constrain nesting depth in i18n YAML files",
            url: "https://github.com/wojtekjs/eslint-plugin-i18n-yaml?tab=readme-ov-file#i18n-yamlmax-depth",
        },
        messages: {
            exceededMaxDepth: "Depth limit exceeded at {{locale}}.{{path}}: mapping has depth {{currentDepth}} which exceeds the permitted maximum of {{maxDepth}}",
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
    defaultOptions: [
        {
            maxDepth: MAX_NESTING_DEPTH,
        },
    ],
    create(context, [options]) {
        const { maxDepth } = options;
        return {
            YAMLDocument(doc) {
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                descend(root, 0, [], context, maxDepth);
            },
        };
    },
});
export default maxDepth;
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
