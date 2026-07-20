// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.ts
 * @input None (barrel).
 * @output The Khameleon integration-authoring surface: the stamp-only factories an
 *   integration package uses to describe what it contributes (integrations,
 *   templates, docs), plus their TypeScript input/output types.
 * @position Producer-facing authoring surface, exported as
 *   `@khameleon/core/authoring`.
 *
 * ## Why these live in core
 *
 * These factories are tiny, zero-runtime-dependency identity functions whose
 * value is their TypeScript surface. Hosting them in `@khameleon/core` (the
 * base of the dependency graph) means core's own docs can adopt them without a
 * core -> cli -> core cycle, and integration authors get the types without a
 * hard dependency on the CLI. The CLI re-exports every factory from its
 * existing subpaths (`@khameleon/cli/integration|template|doc`) for
 * back-compat; the CLI keeps the Zod validation schemas at its load boundary.
 *
 * `createConfig` is intentionally NOT here — it is a consumer surface (every app
 * with an `khameleon.config`), exported separately as `@khameleon/core/config`.
 */

export {createIntegration} from './integration';
export type {KhameleonIntegration} from './integration';

export {createPageTemplate, createBlockTemplate} from './template';
export type {
  KhameleonTemplatePreview,
  KhameleonTemplateInput,
  KhameleonPageTemplateInput,
  KhameleonBlockTemplateInput,
  KhameleonPageTemplate,
  KhameleonBlockTemplate,
  KhameleonTemplate,
} from './template';

export {createComponentDoc, createFunctionDoc, createDoc} from './doc';
export type {
  KhameleonBaseDocInput,
  KhameleonPropInput,
  KhameleonParamInput,
  KhameleonReturnInput,
  KhameleonComponentDocInput,
  KhameleonFunctionDocInput,
  KhameleonGenericDocInput,
  KhameleonComponentDoc,
} from './doc';
