# Khameleon Example: Next.js (Source Build)

Reference application for compiling **@khameleon/core** from raw TypeScript + StyleX source alongside product code. Uses `@khameleon/build` for independent CSS layer separation.

## Why source build?

|               | Source build                                       | Dist build                   |
| ------------- | -------------------------------------------------- | ---------------------------- |
| CSS output    | Only styles for components you import (~22KB)      | All component styles (~77KB) |
| Layer control | Full: reset < khameleon-base < khameleon-theme < product | Basic: import order          |
| Build time    | Slower (compiles Khameleon source through Babel)      | Fast (pre-built CSS)         |
| Setup         | More config (babel + postcss + next.config)        | Minimal (CSS imports)        |

## How it works

`@khameleon/build` provides two plugins that work together:

1. **`@khameleon/build/babel`**: wraps the StyleX babel plugin, routing Khameleon library files to `khameleon` class prefix and product files to default `x` prefix
2. **`@khameleon/build/postcss`**: compiles StyleX CSS in two passes with different prefixes, wrapping each in its own `@layer`

This creates completely independent class namespaces:

- `.khameleon78zum5 { display: flex }` in `@layer khameleon-base`
- `.x78zum5 { display: flex }` in `@layer product`

Theme sits between them in `@layer khameleon-theme`, so:

- Theme overrides library defaults ✓
- Product overrides theme when needed ✓
- No `!important` needed ✓

## Setup

### 1. Install

```bash
npm install @stylexjs/stylex @khameleon/core @khameleon/theme-neutral next react react-dom
npm install -D @khameleon/build @stylexjs/babel-plugin @babel/core autoprefixer typescript
```

### 2. babel.config.js

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
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: {
          '@khameleon/core/*': [
            path.join(__dirname, 'node_modules/@khameleon/core/*'),
          ],
          '@khameleon/core': [
            path.join(__dirname, 'node_modules/@khameleon/core'),
          ],
        },
        unstable_moduleResolution: {type: 'commonJS'},
      },
    ],
  ],
};
```

### 3. postcss.config.js

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
            enableInlinedConditionalMerge: true,
            treeshakeCompensation: true,
            aliases: {
              '@khameleon/core/*': [
                path.join(__dirname, 'node_modules/@khameleon/core/*'),
              ],
              '@khameleon/core': [
                path.join(__dirname, 'node_modules/@khameleon/core'),
              ],
            },
            unstable_moduleResolution: {type: 'commonJS'},
          },
        ],
      ],
    },
    autoprefixer: {},
  },
};
```

### 4. next.config.mjs

```js
const nextConfig = {
  transpilePackages: ['@khameleon/core', '@khameleon/theme-neutral'],
  webpack: config => {
    config.resolve.conditionNames = ['source', 'import', 'require', 'default'];
    return config;
  },
};

export default nextConfig;
```

### 5. CSS files

`src/app/layers.css` must be a separate file (webpack hoists `@import` content):

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

## Layer Demo

This example includes a visual demo showing:

1. **khameleon-base**: default Khameleon component styles
2. **khameleon-theme**: theme overrides (secondary button background)
3. **product**: app overrides (pill shape, green background, full-width)
4. **Class prefix verification**: Khameleon components use `khameleon` prefix, product uses `x`

Open devtools → CSS layers panel to see the separation.

## Gotchas

| Issue                    | Symptom                                      | Fix                                                                |
| ------------------------ | -------------------------------------------- | ------------------------------------------------------------------ |
| Missing `conditionNames` | Khameleon resolves to dist (no `khameleon` prefix) | Add `['source', 'import', 'require', 'default']` to webpack config |
| Missing `aliases`        | `defineVars` resolution fails                | Add aliases for `@khameleon/core` and `@khameleon/core/*`    |
| `layers.css` inline      | Layer order ignored                          | Keep as separate file (webpack hoists `@import`)                   |
| Missing `browserslist`   | `light-dark()` gets lowered                  | Add `["last 1 Chrome version"]`                                    |

## Related

- [Plain dist example](../example-nextjs/): simplest setup
- [Dist + Tailwind](../example-nextjs-tailwind/): Tailwind for layout
- [Dist + StyleX](../example-nextjs-stylex/): StyleX for product only
- [`@khameleon/build`](../../packages/build/): the build plugin source
