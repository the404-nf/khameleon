# @khameleon/build

Build plugins for XDS source builds. Provides babel, PostCSS, and Vite integrations that compile XDS library and product code with separate class name prefixes, which enables independent CSS layers:

```
reset < khameleon-base (library, khameleon prefix) < khameleon-theme < product (app, x prefix)
```

## Why?

StyleX generates atomic CSS: same declaration = same class name. Without separate prefixes, library and product classes collide and can't be placed in independent CSS layers, which breaks theme overrides.

`@khameleon/build` solves this by:

1. Compiling XDS library code with `khameleon` prefix (`.khameleon78zum5`)
2. Compiling product code with default `x` prefix (`.x78zum5`)
3. Placing each group in its own CSS `@layer`

## Packages

| Export               | Purpose                                       | Platform                    |
| -------------------- | --------------------------------------------- | --------------------------- |
| `@khameleon/build/babel`   | Babel plugin: splits class prefixes per file  | Next.js, any babel pipeline |
| `@khameleon/build/postcss` | PostCSS plugin: compiles + splits CSS layers  | Next.js                     |
| `@khameleon/build/vite`    | Vite plugin: wraps unplugin + splits layers   | Vite, Storybook             |

## Install

```bash
npm install -D @khameleon/build @stylexjs/babel-plugin @babel/core
```

For Vite, also install:

```bash
npm install -D @stylexjs/unplugin
```

---

## Next.js Setup

### 1. babel.config.js

```js
const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@khameleon/build/babel',
      {
        dev: process.env.NODE_ENV !== 'production',
        runtimeInjection: false,
        treeshakeCompensation: true,
        enableInlinedConditionalMerge: true,
        aliases: {
          '@khameleon/core/*': [path.join(__dirname, 'node_modules/@khameleon/core/*')],
          '@khameleon/core': [path.join(__dirname, 'node_modules/@khameleon/core')],
        },
        unstable_moduleResolution: {type: 'commonJS'},
      },
    ],
  ],
};
```

### 2. postcss.config.js

```js
const path = require('path');

module.exports = {
  plugins: {
    '@khameleon/build/postcss': {
      appDir: 'src',
      babelPlugins: [
        [
          '@stylexjs/babel-plugin',
          {
            dev: process.env.NODE_ENV !== 'production',
            runtimeInjection: false,
            treeshakeCompensation: true,
            enableInlinedConditionalMerge: true,
            aliases: {
              '@khameleon/core/*': [path.join(__dirname, 'node_modules/@khameleon/core/*')],
              '@khameleon/core': [path.join(__dirname, 'node_modules/@khameleon/core')],
            },
            unstable_moduleResolution: {type: 'commonJS'},
          },
        ],
      ],
    },
  },
};
```

### 3. next.config.mjs

```js
const nextConfig = {
  transpilePackages: ['@khameleon/core', '@khameleon/theme-neutral'],
  webpack: config => {
    // Resolve to source TypeScript instead of dist
    config.resolve.conditionNames = ['source', 'import', 'require', 'default'];
    return config;
  },
};

export default nextConfig;
```

### 4. CSS files

`src/app/layers.css`:

```css
@layer reset, khameleon-base, khameleon-theme, product;
```

`src/app/globals.css`:

```css
@import './layers.css';
@import '@khameleon/core/reset.css';
@import '@khameleon/theme-neutral/theme.css';

@stylex;
```

> `layers.css` must be a separate file because webpack hoists `@import` content above inline CSS.

### 5. Browserslist

```json
{
  "browserslist": ["last 1 Chrome version"]
}
```

---

## Vite Setup

```ts
import {khameleonStylex} from '@khameleon/build/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    ...khameleonStylex({
      stylexOptions: {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: false,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@khameleon/core': path.resolve(__dirname, 'node_modules/@khameleon/core/src'),
    },
  },
  optimizeDeps: {
    exclude: ['@khameleon/core', '@khameleon/theme-neutral'],
  },
});
```

---

## How it works

### Babel plugin (`@khameleon/build/babel`)

Wraps `@stylexjs/babel-plugin` with two internal instances: one with `classNamePrefix: 'khameleon'` for library files, one with default `'x'` for product files. Routes each file to the correct instance based on its path.

Library patterns (configurable):

- `packages/core/`
- `packages/themes/`
- `node_modules/@khameleon/`

### PostCSS plugin (`@khameleon/build/postcss`)

Compiles StyleX from both library and product source files in two separate passes with different prefixes. Wraps the results in named `@layer` blocks:

- Library rules → `@layer khameleon-base`
- Product rules → `@layer product`

### Vite plugin (`@khameleon/build/vite`)

Wraps `@stylexjs/unplugin` and intercepts the dev CSS endpoint (`/virtual:stylex.css`). Partitions the collected rules by file path and serves split-layer CSS.

---

## Advanced Options

### Babel plugin

```js
[
  '@khameleon/build/babel',
  {
    // Patterns to identify library files (default shown)
    libraryPatterns: [
      'packages/core/',
      'packages/themes/',
      'node_modules/@khameleon/',
    ],

    // Class name prefix for library styles (default: 'khameleon')
    libraryPrefix: 'khameleon',

    // Class name prefix for product styles (default: 'x')
    classNamePrefix: 'x',

    // ... all @stylexjs/babel-plugin options
  },
];
```

### PostCSS plugin

```js
'@khameleon/build/postcss': {
  appDir: 'src',           // Your app source directory
  babelPlugins: [...],     // StyleX babel plugin config
  libraryPrefix: 'khameleon',   // Prefix for library CSS (default: 'khameleon')
  extraInclude: [...],     // Additional glob patterns
  layers: {                // Layer names (defaults shown)
    library: 'khameleon-base',
    product: 'product',
  },
}
```

## Related

- [example-nextjs-source](../../apps/example-nextjs-source/): full Next.js source build example
- [`@stylexjs/babel-plugin`](https://github.com/facebook/stylex): the underlying StyleX compiler
