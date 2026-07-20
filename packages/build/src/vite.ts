// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Plugin, UserConfig} from 'vite';
import stylexBabelPlugin from '@stylexjs/babel-plugin';
import stylex from '@stylexjs/unplugin';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LIBRARY_PATTERN = 'node_modules/@khameleon/';
const STYLEX_CSS_PATH = '/virtual:stylex.css';

/**
 * Browser targets for lightningcss (opt-in).
 * Only needed if your StyleX version lowers light-dark() without them.
 * Exported for consumers who want to opt in explicitly.
 */
export const LIGHTNINGCSS_TARGETS = {
  chrome: 123 << 16,
  firefox: 120 << 16,
  safari: (17 << 16) | (5 << 8),
};

/**
 * Legacy options shape — kept for backward compatibility.
 * Prefer the zero-config form: khameleonStylex()
 */
export interface KhameleonVitePluginLegacyOptions {
  stylexOptions: Parameters<typeof stylex.vite>[0];
  libraryPattern?: string;
  /** StyleX atomic class-name prefix for Khameleon library styles. @default 'khameleon' */
  stylexPrefix?: string;
  layers?: {
    library?: string;
    product?: string;
  };
}

export interface KhameleonVitePluginOptions {
  /**
   * Whether to enable dev mode for StyleX.
   * @default process.env.NODE_ENV !== 'production'
   */
  dev?: boolean;

  /**
   * Root directory for module resolution.
   * @default process.cwd()
   */
  rootDir?: string;

  /**
   * Pattern to identify Khameleon library files vs product files.
   * @default 'node_modules/@khameleon/'
   */
  libraryPattern?: string;

  /**
   * CSS layer names for the split output.
   */
  layers?: {
    /** Layer name for Khameleon library styles @default 'khameleon-base' */
    library?: string;
    /** Layer name for product styles @default 'product' */
    product?: string;
  };

  /**
   * LightningCSS browser targets. Only needed if your StyleX version
   * lowers light-dark() without them. Most recent versions preserve
   * light-dark() by default.
   * @default undefined (no targets set)
   */
  lightningcssTargets?: Record<string, number>;

  /**
   * StyleX atomic class-name prefix for Khameleon *library* styles. The product
   * build uses a distinct prefix so library and product atoms never collide
   * across layers.
   *
   * Configurable if a consumer needs a custom library atom prefix.
   * Defaults to `khameleon`.
   *
   * @default 'khameleon'
   */
  stylexPrefix?: string;

  /**
   * Extra StyleX options to merge.
   */
  stylexOverrides?: Record<string, unknown>;
}

/**
 * Khameleon Vite plugin for source builds.
 *
 * Provides sensible defaults for StyleX compilation with Khameleon.
 * Just spread into your plugins array:
 *
 *   plugins: [...khameleonStylex(), react()]
 *
 * Handles:
 * - StyleX compilation with correct settings
 * - CSS layer ordering (reset < khameleon-base < khameleon-theme < product)
 * - resolve.alias for @khameleon/core source
 * - optimizeDeps.exclude to prevent Vite pre-bundling Khameleon
 *
 * @param options — optional overrides
 */
export function khameleonStylex(
  options: KhameleonVitePluginOptions | KhameleonVitePluginLegacyOptions = {},
): Plugin[] {
  // Detect legacy API: khameleonStylex({stylexOptions: {...}})
  if ('stylexOptions' in options && options.stylexOptions) {
    return khameleonStylexLegacy(options as KhameleonVitePluginLegacyOptions);
  }

  const opts = options as KhameleonVitePluginOptions;
  const {
    dev = process.env.NODE_ENV !== 'production',
    rootDir = process.cwd(),
    libraryPattern = LIBRARY_PATTERN,
    layers = {},
    lightningcssTargets,
    stylexPrefix = 'khameleon',
    stylexOverrides = {},
  } = opts;

  const libraryLayer = layers.library ?? 'khameleon-base';
  const productLayer = layers.product ?? 'product';

  // Build StyleX options with sensible defaults
  const stylexOptions: Record<string, unknown> = {
    dev,
    runtimeInjection: false,
    treeshakeCompensation: true,
    unstable_moduleResolution: {
      type: 'commonJS',
      rootDir,
    },
    ...(lightningcssTargets && {
      lightningcssOptions: {targets: lightningcssTargets},
    }),
    ...stylexOverrides,
  };

  // Inject our babel wrapper as a user plugin — it runs before the
  // unplugin's hardcoded StyleX instance and handles prefix routing.
  const khameleonBabelPlugin = path.resolve(__dirname, 'babel.js');

  const basePlugin = stylex.vite({
    ...(stylexOptions as any),
    useCSSLayers: true,
    babelConfig: {
      plugins: [
        [
          khameleonBabelPlugin,
          {
            ...stylexOptions,
            libraryPrefix: stylexPrefix,
            babelConfig: undefined,
          },
        ],
      ],
    },
  });

  // Layer order declaration plugin
  const layerOrderPlugin: Plugin = {
    name: 'khameleon-css-layer-order',
    transformIndexHtml() {
      return [
        {
          tag: 'style',
          children: `@layer reset, ${libraryLayer}, khameleon-theme, ${productLayer};`,
          injectTo: 'head-prepend',
        },
      ];
    },
  };

  // Config plugin — injects resolve.alias and optimizeDeps
  const configPlugin: Plugin = {
    name: 'khameleon-config',
    config(): UserConfig {
      // Discover all @khameleon/* packages to exclude from pre-bundling.
      // Khameleon ships as source that must be compiled by StyleX — pre-bundling
      // strips stylex.create/defineVars calls and causes runtime errors.
      let xdsPackages: string[] = ['@khameleon/core'];
      try {
        const fs = require('node:fs');
        const xdsDir = path.resolve(rootDir, 'node_modules/@khameleon');
        if (fs.existsSync(xdsDir)) {
          xdsPackages = fs
            .readdirSync(xdsDir)
            .filter((name: string) => !name.startsWith('.'))
            .map((name: string) => `@khameleon/${name}`);
        }
      } catch {
        // Fallback to just @khameleon/core if discovery fails
      }

      return {
        resolve: {
          alias: {
            '@khameleon/core/theme/tokens.stylex': path.resolve(
              rootDir,
              'node_modules/@khameleon/core/src/theme/tokens.stylex.ts',
            ),
            '@khameleon/core': path.resolve(
              rootDir,
              'node_modules/@khameleon/core/src',
            ),
          },
        },
        optimizeDeps: {
          exclude: xdsPackages,
        },
      };
    },
  };

  // Split-layer interceptor plugin (dev server only)
  const splitLayerPlugin: Plugin = {
    name: 'khameleon-split-layers',
    configureServer(server) {
      let stylexPlugin: any = null;

      return () => {
        for (const p of server.config.plugins.flat()) {
          if ((p as any)?.__stylexGetSharedStore) {
            stylexPlugin = p;
            break;
          }
        }

        server.middlewares.stack.unshift({
          route: '',
          handle: (req: any, res: any, next: any) => {
            if (!req.url?.startsWith(STYLEX_CSS_PATH)) {
              return next();
            }

            if (!stylexPlugin) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/css');
              res.end('');
              return;
            }

            const shared = stylexPlugin.__stylexGetSharedStore?.();
            const rulesById = shared?.rulesById;

            if (!rulesById || rulesById.size === 0) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/css');
              res.end('');
              return;
            }

            const libraryRules: any[] = [];
            const productRules: any[] = [];

            for (const [filePath, rules] of rulesById.entries()) {
              if (filePath.includes(libraryPattern)) {
                libraryRules.push(...rules);
              } else {
                productRules.push(...rules);
              }
            }

            const libraryCss = libraryRules.length
              ? stylexBabelPlugin.processStylexRules(libraryRules, {
                  useLayers: true,
                })
              : '';
            const productCss = productRules.length
              ? stylexBabelPlugin.processStylexRules(productRules, {
                  useLayers: true,
                })
              : '';

            const parts: string[] = [];
            if (libraryCss)
              parts.push(`@layer ${libraryLayer} {\n${libraryCss}\n}`);
            if (productCss)
              parts.push(`@layer ${productLayer} {\n${productCss}\n}`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.setHeader('Cache-Control', 'no-store');
            res.end(parts.join('\n\n'));
          },
        });
      };
    },
  };

  return [configPlugin, layerOrderPlugin, basePlugin, splitLayerPlugin];
}

/**
 * Legacy implementation — handles the old khameleonStylex({stylexOptions: {...}}) API.
 * Used by Storybook and other existing configs.
 */
function khameleonStylexLegacy(options: KhameleonVitePluginLegacyOptions): Plugin[] {
  const {
    stylexOptions,
    libraryPattern = LIBRARY_PATTERN,
    stylexPrefix = 'khameleon',
    layers = {},
  } = options;

  const libraryLayer = layers.library ?? 'khameleon-base';
  const productLayer = layers.product ?? 'product';

  const khameleonBabelPlugin = path.resolve(__dirname, 'babel.js');
  const existingPlugins = (stylexOptions as any).babelConfig?.plugins ?? [];

  const basePlugin = stylex.vite({
    ...(stylexOptions as any),
    useCSSLayers: true,
    babelConfig: {
      ...(stylexOptions as any).babelConfig,
      plugins: [
        [
          khameleonBabelPlugin,
          {
            ...(stylexOptions as any),
            libraryPrefix: stylexPrefix,
            babelConfig: undefined,
          },
        ],
        ...existingPlugins,
      ],
    },
  });

  const layerOrderPlugin: Plugin = {
    name: 'khameleon-css-layer-order',
    transformIndexHtml() {
      return [
        {
          tag: 'style',
          children: `@layer reset, ${libraryLayer}, khameleon-theme, ${productLayer};`,
          injectTo: 'head-prepend',
        },
      ];
    },
  };

  const splitLayerPlugin: Plugin = {
    name: 'khameleon-split-layers',
    configureServer(server) {
      let stylexPlugin: any = null;

      return () => {
        for (const p of server.config.plugins.flat()) {
          if ((p as any)?.__stylexGetSharedStore) {
            stylexPlugin = p;
            break;
          }
        }

        server.middlewares.stack.unshift({
          route: '',
          handle: (req: any, res: any, next: any) => {
            if (!req.url?.startsWith(STYLEX_CSS_PATH)) {
              return next();
            }

            if (!stylexPlugin) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/css');
              res.end('');
              return;
            }

            const shared = stylexPlugin.__stylexGetSharedStore?.();
            const rulesById = shared?.rulesById;

            if (!rulesById || rulesById.size === 0) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/css');
              res.end('');
              return;
            }

            const libraryRules: any[] = [];
            const productRules: any[] = [];

            for (const [filePath, rules] of rulesById.entries()) {
              if (filePath.includes(libraryPattern)) {
                libraryRules.push(...rules);
              } else {
                productRules.push(...rules);
              }
            }

            const libraryCss = libraryRules.length
              ? stylexBabelPlugin.processStylexRules(libraryRules, {
                  useLayers: true,
                })
              : '';
            const productCss = productRules.length
              ? stylexBabelPlugin.processStylexRules(productRules, {
                  useLayers: true,
                })
              : '';

            const parts: string[] = [];
            if (libraryCss)
              parts.push(`@layer ${libraryLayer} {\n${libraryCss}\n}`);
            if (productCss)
              parts.push(`@layer ${productLayer} {\n${productCss}\n}`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.setHeader('Cache-Control', 'no-store');
            res.end(parts.join('\n\n'));
          },
        });
      };
    },
  };

  return [layerOrderPlugin, basePlugin, splitLayerPlugin];
}
