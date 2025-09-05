# eslint-plugin-i18n-yaml

Custom ESLint rules for high-quality, consistent i18n YAML files.

## Table of Contents

- [✨ Feature set](#-feature-set)
- [⚙️ Setup & installation (current state)](#-setup--installation-current-state)
  - [Peer requirements](#peer-requirements)
  - [Flat Config — Quick start](#flat-config--quick-start)
- [🛡️ Rules](#-rules)
  - [`i18n-yaml/default-locale-present`](#i18n-yamldefault-locale-present)
  - [`i18n-yaml/allowed-root-locales`](#i18n-yamlallowed-root-locales)
  - [`i18n-yaml/max-depth`](#i18n-yamlmax-depth)
  - [`i18n-yaml/key-order`](#i18n-yamlkey-order)
  - [`i18n-yaml/deep-keys-parity`](#i18n-yamldeep-keys-parity)
  - [`i18n-yaml/placeholder-parity`](#i18n-yamlplaceholder-parity)
  - [`i18n-yaml/placeholder-format`](#i18n-yamlplaceholder-format)
  - [`i18n-yaml/value-parity`](#i18n-yamlvalue-parity)

## ✨ Feature set

- Ensure a default locale exists at the YAML root (e.g., `en`).
- Restrict root keys to allowed locales and optional meta keys.
- Enforce a maximum nesting depth under each locale.
- Keep header keys and locale blocks in a consistent, alphabetical order (autofix).
- Verify deep key parity across all present locales (or optionally, only against a single locale).
- Verify placeholder parity across locales for leaf strings.
- Enforce format rules for placeholders (supports ICU syntax).
- Verify value parity in reciprocal keys across locales.

---

## ⚙️ Setup & installation (current state)

This package is **not published to npm** yet. Use one of the following approaches:

**1) Git dependency (recommended)**

```jsonc
// package.json
{
  "devDependencies": {
    "eslint-plugin-i18n-yaml": "git+ssh://git@github.com/YOUR_ORG/eslint-plugin-i18n-yaml.git#main"
  }
}
```

**2) Local folder / submodule**

- Add as a submodule (e.g., `plugins/eslint-plugin-i18n-yaml`).
- Reference it with a local path:

```json
{
  "devDependencies": {
    "eslint-plugin-i18n-yaml": "file:plugins/eslint-plugin-i18n-yaml"
  }
}
```

**3) Monorepo workspace**

- Place the plugin at `packages/eslint-plugin-i18n-yaml/` and add it as a workspace dependency.

### Peer requirements

- **ESLint**: v8+
- **Parser**: `yaml-eslint-parser`

### Flat Config — Quick start

This plugin ships a Flat Config preset at `configs["flat/recommended"]`.

**Option A — Extend the preset (simplest)**

```js
// eslint.config.js (ESM)
import i18nYaml from "eslint-plugin-i18n-yaml";

export default [
  // …your other configs
  ...i18nYaml.configs["flat/recommended"],
];
```

**Option B — Manual wiring**

```js
import ymlParser from "yaml-eslint-parser";
import i18nYaml from "eslint-plugin-i18n-yaml";

export default [
  {
    files: ["**/*.i18n.yaml", "**/*.i18n.yml"],
    languageOptions: { parser: ymlParser },
    plugins: { "i18n-yaml": i18nYaml },
    rules: {
      "i18n-yaml/default-locale-present": "error",
      "i18n-yaml/allowed-root-locales": "error",
      "i18n-yaml/max-depth": "error",
      "i18n-yaml/key-order": "warn",
      "i18n-yaml/deep-keys-parity": "warn",
      // Planned / coming soon (see status under each rule):
      // 'i18n-yaml/placeholder-parity': 'error',
    },
  },
];
```

> **Legacy .eslintrc**: This plugin is Flat-first. There is no legacy preset export; you can still use it with legacy config by wiring `overrides` with `parser`, `plugins`, `settings`, and `rules` manually.

---

## 🛡️ Rules

### `i18n-yaml/default-locale-present`

**What it is**: Requires the **default locale** (e.g., `en`) to be present at the YAML **root**.

**What it does**

- The presence of the default locale key (`defaultLocale`) at root-level.
- If missing, the rule reports the **first key of the file** for visibility.

**Configuration**

- **`defaultLocale`** (`string`, optional): Specifies which locale must always be present in the YAML file. If this locale key is missing, the rule will report an error.

  - **Valid values:** Any 2-letter locale code (e.g., `"en"`, `"fr"`).
  - **Default:** `"en"`

**Notes**

- Case‑sensitive match; only checks mapping roots.
- No autofix (the rule cannot infer content for the default locale block).

---

### `i18n-yaml/allowed-root-keys`

**What it is**: Restricts YAML **root keys** to known locales and a small set of allowed non-locale/meta keys.

**What it does**

- Every **root-level** key must be in the union of:

  - `allowedLocales` (locale codes), **or**
  - `allowedNonLocaleKeys` (meta/exception keys like `_meta`).

- Violations are reported at the offending key token.

**Configuration**

- **`allowedLocales`** (`string[]`, optional): Defines which locale codes are permitted at the root level of the YAML file. Keys outside this list will be reported.

  - **Valid values:** Any 2-letter locale code (e.g., `"en"`, `"fr"`).
  - **Default:** All known locale codes

- **`allowedNonLocaleKeys`** (`string[]`, optional): Defines which non-locale keys are permitted at the root level (e.g., metadata blocks). Does not accept complex keys (e.g., `{ a: 1 }`, `[1, 2]`). Any other non-locale root keys will be reported.

  - **Default:** `["_meta"]`

**Notes**

- By default, the rule permits **all known locale codes** plus the built-in meta keys (`_meta`). To tighten allowed locales, set `allowedLocales` explicitly. To turn off meta keys, set `allowedNonLocaleKeys` to `[]`.
- Keys are matched exactly (case-sensitive). Only mapping roots are checked.
- The provided Flat preset enables this rule without options, relying on the internal defaults. Override per-project by supplying options in your `rules` config if needed.

---

### `i18n-yaml/max-depth`

**What it is**: Caps the **nested path depth** under each top-level block (typically locales).

**What it does**

- Depth is counted in segments, including the leaf key: `en → a → b → c` has depth **4**.
- Traversal applies to **mapping nodes**; arrays/scalars are not recursed into.
- A violation is reported when at every key nested beyond the permitted depth. The report occurs at the enclosing mapping node’s location, with the following data:

  - `locale`: the first path segment (usually your locale code, e.g. `en`).
  - `path`: remaining segments joined with `.` (e.g., `a.b.c`).
  - `currentDepth` and `maxDepth` for clarity.

**Configuration**

- **`maxDepth`** (`number`, optional): Sets the maximum allowed nesting depth for keys in the YAML file. Any key path deeper than this limit will be reported.

  - **Default:** `2`

> Note: `maxDepth: 0` means **no keys** are allowed in the YAML at all. `maxDepth: 1` means no keys are allowed beneath the top-level key (useful for files that should only contain flat locale keys with no nesting).

**Examples**

_With `maxDepth: 3`_

✅ **Allowed**

```yaml
en:
  auth:
    login: Sign in
    # depth: en(1) → auth(2) → login(3). 'login' is permitted.
```

❌ **Disallowed**

```yaml
en:
  auth:
    login:
      title: Sign in
      # depth: en(1) → auth(2) → login(3) → title(4). 'title' violates the rule.
```

**Notes**

- The value set for `maxDepth` will be the last nesting level allowed in the YAML, with the count starting at 1 for root-level keys.

---

### `i18n-yaml/key-order`

**What it is**: Keeps root-level keys in a deterministic order to reduce diffs and improve readability. **Includes auto-fixing.**

**What it does**

- Keys are grouped and ordered as:

  1. **meta** → in the **configured order** of `metaKeys` (not alphabetical)
  2. **default** → the single `defaultLocale`
  3. **locales** → all other locales in **A–Z** order (case/diacritics-insensitive, numeric-aware)
  4. **other** → any non-locale, non-meta keys in **A–Z** order

- Reports the entire file when a key’s position doesn’t match the expected location based on (1) where the group should be located, and (2) the key's epected intra-group index.
- Provides a single document-level autofix that reorders blocks into the correct order.
- **Comments policy in autofix**: line comments immediately above a key **stick with that key**; top-of-file header comments are preserved at the very top.

**Configuration**

- **`metaKeys`** (`string[]`, optional): Defines which keys are treated as metadata blocks. The order of keys in this array determines the enforced order of metadata blocks.

  - **Default:** `["_meta"]`

- **`defaultLocale`** (`string`, optional): Specifies the default locale to be placed first in the locale order.

  - **Valid values:** Any 2-letter locale code (e.g., `"en"`, `"fr"`).
  - **Default:** `"en"`

- **`allowedLocales`** (`string[]`, optional): Restricts which locale codes are recognized and ordered. Keys outside this list are ignored.

  - **Valid values:** Any 2-letter locale codes (e.g., `"en"`, `"fr"`).
  - **Default:** All known locale codes.

**Examples**

_Before (unsorted)_

```yaml
notes: …
fr:
  title: Bonjour
_meta: v1
en:
  title: Hello
es:
  title: Hola
```

_Autofix output (with `metaKeys: ['_meta']`, `defaultLocale: 'en'`)_

```yaml
# meta key goes to the top
_meta: v1
# default locale is the first locale
en:
  title: Hello
# all other locales are sorted alphabetically
es:
  title: Hola
fr:
  title: Bonjour
# non-locale, non-meta keys are placed at the bottom and sorted alphabetically
notes: …
```

**Notes**

- Rule type: `layout`; `fixable: "code"`.
- Sorting within groups uses `Intl.Collator('en', { sensitivity: 'base', numeric: true })` for human-friendly ordering.
- Works only at the **root mapping** level; it does not reorder nested mappings.

---

### `i18n-yaml/deep-key-parity`

**What it is**: Ensures **all locales share the same nested key structure**. Each locale must contain every key path found in other locales. This is to ensure that every key renders content on the page, irrespective of the language chosen by the user.

**What it does**

- For each locale, reports when a path is missing that exists in at least one other locale.
- Paths include nested objects and arrays of objects (see examples below).
- Reports keys that exist on all locales but do not have the same path in each locale.

**Configuration**

- **`singleComprehensiveLocale`** (`string`, optional): Treat this locale as the single source of truth. When set, the rule only checks that this locale contains all keys present in other locales. Missing keys are only reported for the specified locale, and no reports are generated for the others.

  - **Valid values:** Any 2-letter locale code (e.g., `"en"`, `"fr"`).
  - **Default:** Not set.

**Examples**

_Missing key_

```yaml
en: # ⚠️ Locale 'en' is missing key 'text' (expected path: en.text) • Present in: 'fr'"
  title: big title
  subtitle: small title
fr:
  title: grand titre
  subtitle: petit titre
  text: contenu
```

_Missing key from object_

```yaml
en: # ⚠️ Locale 'en' is missing nested key 'a' (expected path: en.text.a) • Present in: 'fr'
  title: TITLE
  text: { b: 2 }
fr:
  title: TITRE
  text: { a: 1, b: 2 }
```

_Missing deep-nested key from object_

```yaml
# ⚠️ Locale 'en' is missing nested key 'a' (expected path: en.text.a) • Present in: 'fr'
# ⚠️ Locale 'en' is missing nested key 'obj' (expected path: en.text.a.obj) • Present in: 'fr'
# ⚠️ Locale 'en' is missing nested key 'i' (expected path: en.text.a.obj.i) • Present in: 'fr'
en:
  title: TITLE
  text: { b: 2 }
fr:
  title: TITRE
  text: { a: [{ obj: [{ i: 9 }] }], b: 2 }
```

**Notes**

- Paths are represented by joining segments with `"."` (e.g., `en.title`). This can become **ambiguous if your keys themselves contain dots**.  
  👉 Recommended: also enable case-enforcing rules from [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/) (`yml/key-name-casing`) or add project-specific rules to forbid dots in keys.
- The rule does **not autofix**, since inserting translations automatically is unsafe.
- Performance is optimized using **DFS and set-based maps**, making it practical even for large YAMLs with hundreds of keys.

---

### `i18n-yaml/placeholder-parity`

**What it is**: Ensures that **reciprocal keys across locales use the same set of placeholders** (e.g., `{count}`, `{name}`).

**What it does**

- Traverses all locales and collects placeholders from **leaf string values** (scalars).
- Placeholders are detected with this pattern: `{identifier}` where `identifier` matches `[A-Za-z_][A-Za-z0-9_]*`.
  - Double braces (e.g., `{{name}}`) are treated as a placeholder inside literal, renderable braces.
  - Braces containing space/comma/otherwise-separated values (e.g., `{name surname}`) are **ignored**.
- The order of placeholders in each scalar is irrelevant. Duplicate placeholders are ignored.
- Reports when **more than one distinct placeholder set** appears across locales for the same key path.

**Configuration**

None.

**Examples**

_✅ Consistent placeholder usage_

```yaml
en:
  inbox:
    summary: "You have {count} new messages"
fr:
  inbox:
    summary: "Vous avez {count} nouveaux messages"
es:
  inbox:
    summary: "Tienes {count} mensajes nuevos"
```

_❌ Inonsistent placeholder usage_

```yaml
# ⚠️ Placeholder usage for key 'summary' is not consistent across locales (3 variants) • en → {count}; fr → {count}, {name}; es → ∅
en:
  inbox:
    summary: "You have {count} new messages" # 1 placeholder
fr:
  inbox:
    summary: "Vous avez {count} nouveaux messages pour {name}" # 2 placeholders
es:
  inbox:
    summary: "Tienes mensajes nuevos" # no placeholders
```

> The error message is reported on every leaf.

**Notes**

- Array-based discrepancies are supported. Numeric indices are appended to the last named segment. E.g., `items[1][0]` for the first element of the second array inside a mapping with the key `items`.
- Variant groups in the error message appear in descending order by number of locales. Within each variant, locales and placeholders are arranged alphabetically.

---

### `i18n-yaml/placeholder-format`

**What it is**: Validates **placeholder token names** inside leaf strings (scalars). Prevents bad tokens like `{ user name }`, `{123id}`, `{constructor}`, or `{}`. Optionally supports ICU MessageFormat syntax.

**What it does**

- By default, checks _simple tokens only_ (e.g., `{tokenPlaceholder}`). With ICU mode enabled, also allows ICU headers (e.g., `{ count, plural, one {...} other {...} }`) — in that case only the **argument name** (`count`) is validated while the remainder of the ICU body is ignored.
- Runs a configurable set of checks (each can be turned on/off):

  - **forbiddenWhitespace**: no spaces or multiple tokens inside `{...}`.
  - **invalidCasing**: must follow the chosen casing convention (default: `camelCase`).
  - **invalidFirstCharacter**: must start with a letter.
  - **forbiddenReservedKey**: blocks reserved names (e.g. `constructor`, `hasOwnProperty`, `__proto__`).
  - **forbiddenInvisibleChars**: disallows zero-width/BiDi control chars.
  - **invalidCharset**: only ASCII letters, digits, `_`, and `-` allowed (spaces already blocked by `forbiddenWhitespace`).
  - **emptyPlaceholder**: `{}` is not allowed.

**Configuration**

- **`casing`** (`string`, optional, default: `"camelCase"`): Which naming convention placeholders must follow. Supports: `camelCase`, `kebab-case`, `snake_case`, `PascalCase`, `SCREAMING_CASE`.
- **`mode`** (`string`, optional, default: `"standard"`): If `"icu"`, the rule will parse ICU MessageFormat headers. It will ignore double-braced tokens (e.g., `{{token}}` would be ignored).
- **`checks`** (`object`, optional, default: all `true`): Object to selectively disable individual checks.

Example configuration:

```js
"i18n-yaml/placeholder-format": ["error", {
  casing: "snake_case",
  mode: "icu",
  checks: {
    invalidCasing: false,       // turn off casing enforcement
    forbiddenReservedKey: false, // turn off reserved key check
  }
}]
```

**Examples**

_✅ Allowed (ICU off)_

```yaml
en:
  inbox:
    summary: "You have {newMessages} new messages"
    user: "Welcome back, {firstName}"
```

_❌ Disallowed (ICU off)_

```yaml
en:
  inbox:
    badOne: "Hello { user name }" # ⚠️ spaces → forbiddenWhitespace
    badTwo: "Ref: {123id}" # ⚠️ starts with digit → invalidFirstCharacter
    badThree: "Key: {first-name}" # ⚠️ hyphen is ok charset-wise, but fails invalidCasing (camelCase)
    badFour: "Danger: {constructor}" # ⚠️ reserved → forbiddenReservedKey
    badFive: "Empty {} here" # ⚠️ → emptyPlaceholder
```

_✅ Allowed with ICU_

```yaml
en:
  cart:
    count: "{itemCount, plural, one {You have {itemCount} item} other {You have {itemCount} items}}"
```

> Extracted token is only the ICU arg name `itemCount` (from the header).
> Placeholders inside ICU bodies are ignored for token validation.

**Notes**

- With `mode` set to `"standard"`, double braces are permitted. Outer braces are considered literal and only the inner braces are treated as the placeholder. E.g., in `{foo{testName} bar}` only `{testName}` is matched as a placeholder and only `testName` is checked against active rules.

---

### `i18n-yaml/value-parity`

**What it is**: Ensures **reciprocal keys across locales** have the same **value type** (`string`/`number`/`boolean`/`null`/`mapping`/`sequence`) and, when arrays are used everywhere, the same **array length**.

**What it does**

- Walks through every locale in the file and builds a complete list of all relative key paths.
- For each path, records two things:
  - the **value type** at that path (e.g., `string`, `mapping`, `sequence`, `number`, `boolean`, `null`), and
  - if the value is a sequence, the **array length**.
- Compares the results across locales:
  - If one locale uses a different type than the others, the rule reports a **value type disparity**.
  - If all locales use sequences but with different lengths, the rule reports an **array length disparity**.
- Reports include a breakdown of which locales used which type or length, so it’s easy to spot the outlier.

**Configuration**

- **`checks`** (`object`, optional, default: `{ valueType: true, arrayLength: true }`): Choose which parity checks to enforce:

  - `valueType`: ensure type consistency.
  - `arrayLength`: ensure arrays have identical length if **all** locales use an array at that path.

- **`ignoredKeys`** (`string[]`, optional, default: `[]`): Paths/keys to exclude from parity checks. Important semantics:

  - Simple keys (e.g., `title`) are ignored everywhere they appear, irrespective of nesting depth.
  - Dotted key paths are always root-anchored. E.g., `title.primary` only matches if `title` exists as a key directly under the locale. It will not match `page.title.primary`.
  - Using `.*` on a dotted key path is identical in effect to foregoing it. It is allowed purely for legibility if preferred.
  - Using `.*` on a simple key causes it to be treated as root-anchored, i.e., it is no longer ignored at all depths but only if the key sits directly under the locale root.
  - Locale-wide ignores aren’t supported (e.g., `en` or `en.*` do nothing).
  - Double-barrel wildcards like `*foo*` are not supported.
  - Keys containing dots in their literal name cannot be ignored.
  - Mid-string wildcards (e.g., `ba*r`) are not supported.
  - `foo.*.bar` is supported → ignores all `bar` grandchildren of `foo`.
  - Array indices can be ignored with brackets:
    - `fooList[1]` ignores value at index `1`.
    - Nested lists/items can be ignored with `fooList[1][0]`.
    - Wildcards inside brackets are not supported (`fooList.[1*]` = invalid).
    - To ignore a mapping key literally named `"1"`, write `foo.1` (no brackets).
    - Keys cannot be negative (e.g., `-1`); they will be treated like named string keys.
  - An ignore key of `*` does nothing.
  - Single-segment prefix/suffix wildcards are allowed: `foo*`, `*bar`.

Example configuration:

```js
"i18n-yaml/value-parity": ["error", {
  checks: {
    // valueType is on by default
    arrayLength: false,   // ignore array length discrepancies
  },
  ignoredKeys: [
    "profile.photos",     // ignore parity checks for this path
    "menu.*.hotkey",      // ignore hotkeys under any menu child
    "users[0].id",       // ignore the id at index 0 of users list
    "foo.1"               // ignore a mapping key literally named "1"
  ]
}]
```

**Examples**

_✅ Allowed (matching value types)_

```yaml
en:
  profile:
    name: "Alice"
    age: 30
    photos: ["a.jpg", "b.jpg"]
fr:
  profile:
    name: "Alice"
    age: 28
    photos: ["a.jpg", "b.jpg"]
```

_❌ Disallowed (multiple parity errors)_

```yaml
en:
  settings:
    theme: "dark" # string
  menu:
    items: ["File", "Edit"] # array length 2
  # ⚠️ Value types for key 'items[1]' do not match across locales (2 variants) • en → boolean; fr → string
  integrations: ["Mobile", true] # [string, boolean]

fr:
  settings:
    # ⚠️ Value types for key 'theme' do not match across locales (2 variants) • en → string; fr → mapping
    theme:
      name: "dark" # mapping
  menu:
    # ⚠️ Array lengths for key 'items' do not match across locales (2 variants) • en → 2; fr → 1
    items: ["Fichier"] # array length 1
  integrations: ["Mobile", "Email"] # [string, string]
```

**Notes**

- Paths are joined with `"."`. Keys containing literal dots are ambiguous and **cannot** be ignored with `ignoredKeys`. Avoid using them as they can have unintended consequences.
- For best results, pair with [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/) key-naming rules to prevent dots in keys, avoiding path ambiguity.
