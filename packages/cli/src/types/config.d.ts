// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * The config-authoring surface moved to `@khameleon/core/config` so an app's
 * config file gets type feedback without depending on the CLI. Re-exported here
 * so existing `@khameleon/cli/config` type imports keep resolving.
 */
export type {
  PostCodemodCommand,
  PostCodemodHook,
  XleComponent,
  KhameleonConfig,
} from '@khameleon/core/config';

export {createConfig} from '@khameleon/core/config';
