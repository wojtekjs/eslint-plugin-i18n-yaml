import { AST } from "yaml-eslint-parser";

export const isYamlMapping = (
  node: AST.YAMLNode | null | undefined
): node is AST.YAMLMapping => !!node && node.type === "YAMLMapping";
