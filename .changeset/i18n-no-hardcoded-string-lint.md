---
'@khameleon/core': patch
---

[feat] New ESLint rule `@khameleon/no-hardcoded-i18n-string` (in `@khameleon/eslint-plugin-khameleon`, `khameleon.configs.strict` / `khameleon.configs.recommended`). Flags hardcoded English string literals on user-facing props so future component work can't skip translation. The rule is filesystem-agnostic — downstream packages that ship translatable UI can enable it in their own ESLint config with the standard `files` / `ignores` pattern.

@nynexman4464
