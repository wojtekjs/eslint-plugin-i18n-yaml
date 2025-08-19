import { AST } from "yaml-eslint-parser";
import { ALL_LOCALE_CODES_SET, LocaleCode } from "./constants.js";

export const isYamlMapping = (
  node: AST.YAMLNode | null | undefined
): node is AST.YAMLMapping => !!node && node.type === "YAMLMapping";

export const isYamlSequence = (
  node: AST.YAMLNode | null | undefined
): node is AST.YAMLSequence => !!node && node.type === "YAMLSequence";

export const isLocaleCode = (
  maybeLocaleCode: unknown
): maybeLocaleCode is LocaleCode => {
  return ALL_LOCALE_CODES_SET.has(maybeLocaleCode as LocaleCode);
};
