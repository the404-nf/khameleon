# Khameleon Example: Next.js + StyleX (Dist)

Reference application for consuming **@khameleon/core** as a pre-built dist package with **StyleX** for product-level styles.

Khameleon component CSS comes pre-built; there is no need to compile Khameleon source. StyleX is only used for your own app-level layout and custom styles, compiled at build time via the PostCSS plugin.

## CSS Layer Integration

This example uses StyleX's `useCSSLayers.before` option to declare Khameleon dist layers before the StyleX app layers:

```js
// postcss.config.js
useCSSLayers: {
  before: ['reset', 'khameleon-base', 'khameleon-theme'],
}
```

This produces a layer order of:

```
reset < khameleon-base < khameleon-theme < stylex.base < stylex.1 < stylex.2 < ...
```

Product-level StyleX styles always win over Khameleon component defaults without needing `!important` or extra specificity.

## Key Difference from Source Build

|                     | This example (dist + StyleX)                            | Source build                                        |
| ------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| Khameleon CSS          | Pre-built via `@import "@khameleon/core/khameleon.css"` | Compiled from source via StyleX babel plugin        |
| PostCSS `include`   | `src/**/*` only (your code)                             | `src/**/*` + `node_modules/@khameleon/core/**/*` |
| StyleX `aliases`    | Not needed                                              | Required for `createTheme` resolution               |
| `transpilePackages` | Not needed                                              | Required in next.config                             |
| Layer ordering      | `useCSSLayers.before` declares Khameleon layers            | `useCSSLayers: true` (Khameleon layers mixed in)       |

## Setup Steps

### 1. Install dependencies

```bash
npm install @stylexjs/stylex @khameleon/core @khameleon/theme-neutral next react react-dom
npm install --save-dev @stylexjs/babel-plugin @stylexjs/postcss-plugin \
  @babel/preset-react @babel/preset-typescript typescript @types/react @types/react-dom
```

### 2. Browserslist

```json
{
  "browserslist": ["last 1 Chrome version"]
}
```

### 3. Babel config

`babel.config.js`: StyleX for app-level styles only:

```js
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@stylexjs/babel-plugin',
      {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      },
    ],
  ],
};
```

> No `aliases` config needed; we're not compiling Khameleon source.

### 4. PostCSS config

`postcss.config.js`: scan your app source, declare Khameleon layers before StyleX layers:

```js
module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      babelConfig: {
        /* ... */
      },
      useCSSLayers: {
        before: ['reset', 'khameleon-base', 'khameleon-theme'],
      },
    },
  },
};
```

### 5. CSS entry point

`src/app/globals.css`:

```css
@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';

@stylex;
```

### 6. Theme + Link provider

```tsx
'use client';
import Link from 'next/link';
import {Theme} from '@khameleon/core/theme';
import {LinkProvider} from '@khameleon/core/Link';
import {neutralTheme} from '@khameleon/theme-neutral/built';

export function Providers({children}) {
  return (
    <Theme theme={neutralTheme}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
```

## Related

- [Plain dist example](../example-nextjs/): no CSS framework, inline styles for layout
- [Dist + Tailwind example](../example-nextjs-tailwind/): Tailwind for layout styles
