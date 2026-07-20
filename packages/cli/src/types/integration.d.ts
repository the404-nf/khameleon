// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * The integration-manifest authoring surface moved to
 * `@khameleon/core/authoring`. `KhameleonIntegration` and `createIntegration`
 * are re-exported here so existing `@khameleon/cli/integration` type imports
 * keep resolving. `KhameleonIntegrationIssue` stays in the CLI — it is an internal
 * validation type, not part of the authoring surface.
 */
export type {KhameleonIntegration} from '@khameleon/core/authoring';
export {createIntegration} from '@khameleon/core/authoring';

/** An issue surfaced by an integration. */
export interface KhameleonIntegrationIssue {
  code: string;
  severity: 'warning' | 'error';
  message: string;
}
