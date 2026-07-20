// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * The template-authoring surface moved to `@khameleon/core/authoring`.
 * Re-exported here so existing `@khameleon/cli/template` type imports keep
 * resolving.
 */
export type {
  KhameleonTemplatePreview,
  KhameleonTemplateInput,
  KhameleonPageTemplateInput,
  KhameleonBlockTemplateInput,
  KhameleonPageTemplate,
  KhameleonBlockTemplate,
  KhameleonTemplate,
} from '@khameleon/core/authoring';

export {createPageTemplate, createBlockTemplate} from '@khameleon/core/authoring';
