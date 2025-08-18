# eslint-plugin-i18n-yaml

Custom ESLint rules for i18n YAML files. Keep locale files consistent by enforcing a default locale, constraining root keys, limiting nesting depth, and keeping keys sorted. (Parity checks for deep keys and placeholders are planned.)

## ✨ Feature set

- Ensure a default locale exists at the YAML root (e.g., `en`).
- Restrict root keys to allowed locales and optional meta keys.
- Enforce a maximum nesting depth under each locale.
- Keep header keys and locale blocks in a consistent, alphabetical order (autofix).
- _(Planned)_ Verify deep key parity with the default locale (same paths and value kinds).
- _(Planned)_ Verify placeholder parity across locales for leaf strings.

---

## 🔧 Setup & installation (current state)

This package is **not published to npm** yet. Use one of the following approaches:

**1) Git dependency (recommended)**

```json
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

> Add the YAML parser only for YAML files.

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
    settings: {
      "i18n-yaml": {
        defaultLocale: "en",
        locales: ["en", "fr", "de"],
        allowedMetaKeys: ["_meta"],
        maxDepth: 2,
        allowNonStringLeaves: false,
        placeholderRegex: "\\{([a-zA-Z0-9_]+)\\}",
        escapeDoubleBrace: true,
      },
    },
    rules: {
      "i18n-yaml/default-locale-present": "error",
      "i18n-yaml/allowed-root-locales": "error",
      "i18n-yaml/max-depth": "error",
      "i18n-yaml/key-order": "warn",
      // Planned / coming soon (see status under each rule):
      // 'i18n-yaml/deep-keys-parity': 'error',
      // 'i18n-yaml/placeholder-parity': 'error',
    },
  },
];
```

> **Legacy .eslintrc**: This plugin is Flat-first. There is no legacy preset export; you can still use it with legacy config by wiring `overrides` with `parser`, `plugins`, `settings`, and `rules` manually.

---

## 📏 Rules

### `i18n-yaml/default-locale-present`

**What it is**: Requires the **default locale** (e.g., `en`) to be present at the YAML **root**.

**What it enforces**

- The presence of the default locale key (`defaultLocale`) at root-level.
- If missing, the rule reports the **first key of the file** for visibility.

**Configuration**

```js
{
  defaultLocale?: string; // default: 'en'
}
```

**Notes**

- Case‑sensitive match; only checks mapping roots.
- No autofix (the rule cannot infer content for the default locale block).

**Status**: Stable.

---

### `i18n-yaml/allowed-root-keys`

**What it is**: Restricts YAML **root keys** to known locales and a small set of allowed non-locale/meta keys.

**What it enforces**

- Every **root-level** key must be in the union of:

  - `allowedLocales` (locale codes), **or**
  - `allowedNonLocaleKeys` (meta/exception keys like `_meta`).

- Violations are reported at the offending key token.

**Configuration**

```js
{
  allowedLocales?: string[];        // default: ALL_LOCALE_CODES
  allowedNonLocaleKeys?: string[];  // default: META_KEYS (e.g., ['_meta'])
}
```

**Notes**

- By default, the rule permits **all known locale codes** plus the built-in meta keys (`_meta`). To tighten allowed locales, set `allowedLocales` explicitly. To turn off meta keys, set `allowedNonLocaleKeys` to `[]`.
- Keys are matched exactly (case-sensitive). Only mapping roots are checked.
- The provided Flat preset enables this rule without options, relying on the internal defaults. Override per-project by supplying options in your `rules` config if needed.

**Status**: Stable.

---

### `i18n-yaml/max-depth`

**What it is**: Caps the **nested path depth** under each top-level block (typically locales).

**What it enforces**

- Depth is counted in segments, including the leaf key: `en → a → b → c` has depth **4**.
- Traversal applies to **mapping nodes**; arrays/scalars are not recursed into.
- A violation is reported when at every key nested beyond the permitted depth. The report occurs at the enclosing mapping node’s location, with the following data:

  - `locale`: the first path segment (usually your locale code, e.g. `en`).
  - `path`: remaining segments joined with `.` (e.g., `a.b.c`).
  - `currentDepth` and `maxDepth` for clarity.

**Configuration**

```js
{
  maxDepth?: number; // default: MAX_NESTING_DEPTH (set to 2)
}
```

> Note: `maxDepth: 0` means **no keys** are allowed in the YAML at all. `maxDepth: 1` means no keys are allowed beneath the top-level key (useful for files that should only contain flat locale keys with no nesting).

**Examples**
\*With \*_`maxDepth: 3`_

✅ **Allowed**

```yaml
en:
  auth:
    login: Sign in
    # depth: en(1) → auth(2) → login(3). Login is permitted.
```

❌ **Disallowed**

```yaml
en:
  auth:
    login:
      title: Sign in
      # depth: en(1) → auth(2) → login(3) → title(4). Title violates the rule.
```

**Notes**

- The value set for `maxDepth` will be the last nesting level allowed in the YAML, with the count starting at 1 for root-level keys.

**Status**: Stable.

---

### `i18n-yaml/key-order`

**What it is**: Keeps root-level keys in a deterministic order to reduce diffs and improve readability. **Includes auto-fixing.**

**What it enforces**

- Keys are grouped and ordered as:

  1. **meta** → in the **configured order** of `metaKeys` (not alphabetical)
  2. **default** → the single `defaultLocale`
  3. **locales** → all other locales in **A–Z** order (case/diacritics-insensitive, numeric-aware)
  4. **other** → any non-locale, non-meta keys in **A–Z** order

- Group membership:

  - `meta`: key is included in `metaKeys`.
  - `default`: key equals `defaultLocale`.
  - `locales`: key is in `allowedLocales` **excluding** `defaultLocale`.
  - `other`: everything else.

- Reports when a key’s position doesn’t match the expected location based on where 1) the group should be located and 2) the key's epected intra-group index.
- Provides a single document-level autofix that reorders blocks into the correct order.
- **Comments policy in autofix**: line comments immediately above a key **stick with that key**; top-of-file header comments are preserved at the very top.

**Configuration**

```js
{
  metaKeys?: string[];        // default: META_KEYS (set to [`_meta`]); order here defines the meta block order
  defaultLocale?: string;     // default: DEFAULT_LOCALE (set to 'en')
  allowedLocales?: string[];  // default: ALL_LOCALE_CODES (used to identify locale keys)
}
```

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

**Status**: Stable.
