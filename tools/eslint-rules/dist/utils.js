import { ALL_LOCALE_CODES_SET } from "./constants.js";
export const isYamlMapping = (node) => !!node && node.type === "YAMLMapping";
export const isYamlSequence = (node) => !!node && node.type === "YAMLSequence";
export const isLocaleCode = (maybeLocaleCode) => {
    return ALL_LOCALE_CODES_SET.has(maybeLocaleCode);
};
