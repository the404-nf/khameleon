# @khameleon/core

Core UI components, theme system, and utilities for the Khameleon design system. For project setup, see [Quick Start](#quick-start) below.

> **Building with an AI agent?** Run **`npx khameleon init`** first. It installs the Khameleon CLI's component index into your `AGENTS.md`/`CLAUDE.md` so your agent discovers components, templates, and design tokens instead of guessing. Without it, agents can't see the CLI — see [XDS CLI](#xds-cli).

## Component Docs

Look up any component's full API (props, types, best practices, and theming):

```bash
node node_modules/@khameleon/core/docs.mjs Button        # full docs for a component
node node_modules/@khameleon/core/docs.mjs --list         # list all components
node node_modules/@khameleon/core/docs.mjs --list --brief  # brief summaries
```

## Page Layouts

Building a full page? Start with a template rather than composing from scratch.
Templates are content-only; they compose `Layout` with header, content, and
panel slots into common page patterns (dashboards, settings, forms, detail pages).
Wrap them in your own app chrome (`AppShell`, `TopNav`, `SideNav`) to add
global navigation.

Requires `@khameleon/cli` (`npm install -D @khameleon/cli`):

```bash
npx khameleon template --list              # browse all page and block templates
npx khameleon template dashboard           # emit full page source
npx khameleon template settings --skeleton # layout skeleton with spatial annotations
```

## Khameleon CLI

The CLI (`@khameleon/cli`) provides additional tooling:

```bash
npx khameleon --help                       # full listing of all commands
npx khameleon component Button             # full docs + related block templates
npx khameleon docs                         # reference docs (principles, tokens, theming, styling)
npx khameleon docs theme                   # theming guide (Theme, defineTheme, light/dark)
npx khameleon docs tokens                  # spacing, color, radius, typography token reference
npx khameleon init                         # initialize Khameleon in your project
npx khameleon theme build                  # build theme CSS for production
npx khameleon swizzle Button               # eject component source for customization
npx khameleon upgrade --apply              # run codemods to migrate between versions
npx khameleon discover                     # discover external Khameleon packages
npx khameleon gap-report                   # report a missing capability
```

## Related Packages

| Package                                                                                               | Description                                                   |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`@khameleon/cli`](https://github.com/the404-nf/khameleon/tree/main/packages/cli)                      | CLI tooling: component docs, templates, scaffolding, codemods |
| [`@khameleon/theme-neutral`](https://github.com/the404-nf/khameleon/tree/main/packages/themes/neutral) | Muted, minimal theme (Lucide icons)                           |

## Resources

- [Component Storybook](https://facebook.github.io/khameleon/)
- [GitHub Repository](https://github.com/the404-nf/khameleon)

---

## Quick Start

Install Khameleon and a theme:

```bash
npm install @khameleon/core @khameleon/theme-neutral
```

Then pick your setup below based on your framework and styling approach.

### Next.js (simplest)

The fastest way to get started. No build plugins, no PostCSS, no Babel config — Khameleon ships pre-built CSS and JS, so you import three stylesheets (order matters) and wrap your app in a theme provider.

**`src/app/globals.css`**

```css
@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';
```

The import order maps to the layer cascade: `reset.css` (`@layer reset`) → `khameleon.css` component styles (`@layer khameleon-base`) → `theme.css` token overrides (`@layer khameleon-theme`).

**`src/app/providers.tsx`**

```tsx
'use client';

import Link from 'next/link';
import {Theme} from '@khameleon/core/theme';
import {LinkProvider} from '@khameleon/core/Link';
import {neutralTheme} from '@khameleon/theme-neutral/built';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
```

**`src/app/layout.tsx`**

```tsx
import './globals.css';
import {Providers} from './providers';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Next.js + Tailwind

No build plugins needed; Khameleon ships pre-built CSS that works alongside Tailwind.

**`src/app/globals.css`**

```css
@layer reset, theme, base, khameleon-base, khameleon-theme, components, utilities;

@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';
@import '@khameleon/core/tailwind-theme.css';
@import 'tailwindcss/utilities.css' layer(utilities);
```

The `tailwind-theme.css` import maps system tokens to Tailwind utilities via `@theme inline`:

```tsx
// Without the bridge — verbose:
<div className="rounded-[var(--radius-container)] bg-[var(--color-background-surface)] text-[var(--color-text-primary)]">

// With the bridge — just works:
<div className="rounded-lg bg-surface text-primary">
```

Some useful mappings:

| Tailwind class                                            | Khameleon token                                      |
| --------------------------------------------------------- | ------------------------------------------------- |
| `text-primary` / `text-secondary`                         | `--color-text-primary` / `--color-text-secondary` |
| `bg-surface` / `bg-card` / `bg-body`                      | `--color-background-surface` / `card` / `body`    |
| `border-border` / `border-strong`                         | `--color-border` / `--color-border-emphasized`    |
| `bg-success` / `text-error` / `text-warning`              | Status tokens                                     |
| `bg-blue-subtle` / `border-blue-ring` / `text-blue-vivid` | Hue palette (×10 hues)                            |
| `rounded-sm` / `rounded-md` / `rounded-lg`                | `--radius-inner` / `element` / `container`        |
| `shadow-sm` / `shadow-md` / `shadow-lg`                   | `--shadow-low` / `med` / `high`                   |

Spacing references `var(--spacing-1)` as the base unit, so `p-4` = 16px, matching Khameleon's `--spacing-4`. Arbitrary values still work as an escape hatch: `bg-[var(--color-background-surface)]`.

**`src/app/providers.tsx`**

```tsx
'use client';

import Link from 'next/link';
import {Theme} from '@khameleon/core/theme';
import {LinkProvider} from '@khameleon/core/Link';
import {neutralTheme} from '@khameleon/theme-neutral/built';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme}>
      <LinkProvider component={Link}>{children}</LinkProvider>
    </Theme>
  );
}
```

**`src/app/layout.tsx`**

```tsx
import './globals.css';
import {Providers} from './providers';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

That's it. Start using components:

```tsx
import {Button} from '@khameleon/core/Button';

export default function Page() {
  return <Button label="Hello Khameleon" variant="primary" />;
}
```

### Next.js + StyleX

Use the pre-built dist alongside StyleX for your own styles.

```bash
npm install @khameleon/core @khameleon/theme-neutral
```

**`src/app/globals.css`**

```css
@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';
```

Providers and layout are the same as the Tailwind example (use `@khameleon/theme-neutral/built`).

### Vite

```bash
npm install @khameleon/core @khameleon/theme-neutral
```

Same CSS imports and providers as above. No build plugins needed; Khameleon ships pre-built.

### No build step (CDN)

For prototypes, embeds, or pages without a bundler, load the components straight
from a public CDN. Two delivery options ship in the published package:

**1. UMD global (`<script>` tag).** A single pre-bundled file exposes every export
on `window.Khameleon`. React and ReactDOM are peer dependencies — load them yourself.
Pair it with the precompiled stylesheet.

```html
<!doctype html>
<html data-khameleon-theme="neutral">
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@khameleon/core/src/reset.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@khameleon/core/dist/khameleon.css" />
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@khameleon/core/dist/khameleon.umd.js"></script>
    <script>
      const {Button, Card} = window.Khameleon;
      const e = React.createElement;
      ReactDOM.createRoot(document.getElementById('root')).render(
        e(Card, null, e(Button, {variant: 'primary'}, 'Hello from a CDN')),
      );
    </script>
  </body>
</html>
```

**2. ES modules (no UMD, no globals).** Use [esm.sh](https://esm.sh), which rewrites
bare imports to browser-resolvable URLs. An import map keeps a single React instance.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@khameleon/core/dist/khameleon.css" />
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@19",
      "react-dom/client": "https://esm.sh/react-dom@19/client",
      "@khameleon/core": "https://esm.sh/@khameleon/core?external=react,react-dom"
    }
  }
</script>
<script type="module">
  import {createRoot} from 'react-dom/client';
  import {Button} from '@khameleon/core';
  // ...render as usual
</script>
```

> Pin a version in production (e.g. `@khameleon/core@0.1.1`) — unversioned CDN URLs
> resolve to the latest release and are cached aggressively. The raw ESM entry
> (`dist/index.js`) uses bare `react` imports and will **not** run from a plain
> `<script src>`; use the UMD global or esm.sh as shown above.
