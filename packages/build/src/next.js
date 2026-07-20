// Copyright (c) Meta Platforms, Inc. and affiliates.

"use strict";

/**
 * @khameleon/build/next
 *
 * Next.js configuration helper for Khameleon source builds.
 *
 * Usage in next.config.mjs:
 *   import {withKhameleon} from '@khameleon/build/next';
 *   export default withKhameleon({
 *     // your normal next config
 *   });
 */

/**
 * Wraps a Next.js config to enable Khameleon source builds.
 * - Adds transpilePackages for @khameleon/* packages
 * - Sets conditionNames to resolve source exports
 */
function withKhameleon(nextConfig = {}) {
  const khameleonPackages = [
    '@khameleon/core',
    '@khameleon/theme-neutral',
    '@khameleon/lab',
  ];

  const existingTranspile = nextConfig.transpilePackages || [];
  const merged = Array.from(new Set([...existingTranspile, ...khameleonPackages]));

  const existingWebpack = nextConfig.webpack;

  return {
    ...nextConfig,
    transpilePackages: merged,
    webpack: (config, context) => {
      // Resolve to source exports
      config.resolve.conditionNames = [
        'source',
        'import',
        'require',
        'default',
      ];

      // Preserve the symlinked node_modules path so Next.js's
      // transpilePackages matcher recognizes @khameleon/* packages under
      // pnpm's symlinked layout. Without this, webpack dereferences
      // the symlink to packages/<name>/... which doesn't contain
      // "node_modules/@khameleon" and transpilation is silently skipped,
      // breaking subpath imports like '@khameleon/core/AlertDialog'.
      config.resolve.symlinks = false;

      // Call user's webpack config if provided
      if (existingWebpack) {
        return existingWebpack(config, context);
      }
      return config;
    },
  };
}

module.exports = {withKhameleon};
