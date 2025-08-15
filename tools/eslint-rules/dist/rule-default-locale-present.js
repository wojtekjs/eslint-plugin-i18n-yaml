import { getStaticYAMLValue } from "yaml-eslint-parser";
const rule = {
    meta: {
        type: "problem",
        docs: {
            description: "Require default language to be present at the YAML root.",
        },
        schema: [
            {
                type: "object",
                properties: {
                    defaultLocale: { type: "string", minLength: 2 },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            missingDefaultLocale: "Missing default locale '{{defaultLang}}' at root",
        },
    },
    defaultOptions: [],
    create(context) {
        const options = (context.options[0] ?? {});
        const defaultLang = options.defaultLocale ?? "en";
        return {
            YAMLDocument(doc) {
                const root = doc.content;
                if (!isYamlMapping(root))
                    return;
                const anchor = (root.loc ?? doc.loc)?.start;
                const hasDefault = root.pairs.some((pair) => {
                    if (!pair.key)
                        return false;
                    const key = getStaticYAMLValue(pair.key);
                    return typeof key === "string" && key === defaultLang;
                });
                if (!hasDefault) {
                    context.report({
                        loc: { start: anchor, end: anchor },
                        messageId: "missingDefaultLocale",
                        data: { defaultLang },
                    });
                }
            },
        };
    },
};
export default rule;
const isYamlMapping = (node) => !!node && node.type === "YAMLMapping";
