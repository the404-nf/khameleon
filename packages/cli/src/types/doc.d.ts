// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * The doc-authoring surface moved to `@khameleon/core/authoring`. Re-exported
 * here so existing `@khameleon/cli/doc` type imports keep resolving. The Zod
 * load-boundary schemas remain in the CLI (see `src/doc.mjs`).
 */
export type {
  KhameleonBaseDocInput,
  KhameleonPropInput,
  KhameleonParamInput,
  KhameleonReturnInput,
  KhameleonComponentDocInput,
  KhameleonFunctionDocInput,
  KhameleonGenericDocInput,
  KhameleonComponentDoc,
} from '@khameleon/core/authoring';

export {
  createComponentDoc,
  createFunctionDoc,
  createDoc,
} from '@khameleon/core/authoring';
