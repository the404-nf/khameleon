---
'@khameleon/core': patch
'@khameleon/cli': patch
---

[feat] Export the authoring factories from `@khameleon/core`: `createConfig` at `@khameleon/core/config` and `createIntegration`/`createPageTemplate`/`createBlockTemplate`/`createComponentDoc`/`createFunctionDoc`/`createDoc` at `@khameleon/core/authoring`. Authoring a config or integration no longer requires depending on the CLI. Existing `@khameleon/cli/*` imports keep working via re-export.

@ejhammond
