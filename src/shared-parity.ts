import { type AST } from "yaml-eslint-parser";
import { LocaleCode } from "./constants.js";

export const prepareLocs = (locsArr: LocaleCode[]): string => {
  return locsArr.length > 3
    ? locsArr
        .slice(0, 3)
        .join(", ")
        .concat(`, … (+${locsArr.length - 3})`)
    : locsArr.join(", ");
};

export const formatDisplayKey = (fullPath: string[]): string => {
  const relPath = fullPath.slice(1); // strip locale
  if (relPath.length === 0) return "";

  // collect trailing numeric indices
  let i = relPath.length - 1;
  const indices: string[] = [];
  // i >= 0 AND current indexed value is purely numeric (i.e., an array index)
  while (i >= 0 && /^\d+$/.test(relPath[i])) {
    indices.unshift(relPath[i]);
    i--;
  }

  const base = relPath[i];
  if (base !== undefined) {
    return base + indices.map((n) => `[${n}]`).join("");
  }

  // array directly under the locale (no named base key)
  // e.g. ["en","0","1"] -> "[0][1]"
  return `[${indices.join("][")}]`;
};

/**
 * Maps a stringified identifiers (e.g., placeholders ["{count}", "{name}"] or the full value of a key)
 * to the set of locales in which that exact identifier appears.
 *
 * Example:
 *   {
 *     '["{count}"]' -> Set { "en", "fr" },
 *     '["{count}","{user}"]' -> Set { "es" }
 *   }
 */
export type UsageMap = Map<string, Set<LocaleCode>>;

/**
 * Represents placeholder usage information for a single YAML key.
 *
 * - `key`: The raw key string from the YAML file.
 * - `phUsageMap`: A mapping of placeholder sets (stringified arrays) to the locales
 *   where they occur.
 * - `valUsageMap`: A mapping of the stringified full value of a key to the locales where it occurs.
 * - `locations`: The AST locations of this key across locales, for accurate reporting.
 */
export type KeyContentInfo = {
  key: string;
  usageMap: UsageMap;
  locations: Set<AST.SourceLocation>;
};

/**
 * Top-level map that connects each stringified relative YAML key path
 * (excluding the locale prefix) to its key information package.
 *
 * Example:
 *   {
 *     "messages.welcome" -> KeyContentInfo { ... }
 *     "errors.notFound" -> KeyContentInfo { ... }
 *   }
 */
export type KeyPathToContentInfoMap = Map<string, KeyContentInfo>;
