# Khameleon Example: Next.js (Dist)

Reference application for consuming **@khameleon/core** as a pre-built dist package in a Next.js project.

No StyleX build plugin needed; Khameleon ships pre-compiled CSS and JS. This is the simplest way to get started.

## Setup Steps

### 1. Install dependencies

```bash
npm install @khameleon/core @khameleon/theme-neutral next react react-dom
npm install --save-dev @types/react @types/react-dom typescript
```

### 2. CSS imports

In `src/app/globals.css`, import the reset, component styles, and theme:

```css
@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';
```

The CSS import order matters:

1. `reset.css`: baseline resets (`@layer reset`)
2. `khameleon.css`: all component styles (`@layer khameleon-base`)
3. `theme.css`: theme token overrides (`@layer khameleon-theme`)

Import the CSS file in your root layout:

```tsx
import './globals.css';
```

### 3. Theme + Link provider (client boundary)

```tsx
// src/app/providers.tsx
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

`LinkProvider` wires up Next.js client-side navigation for all Khameleon link-based components (Link, Button with href, TopNav, SideNav, Breadcrumbs, TabList).

## Gotchas

| Issue                         | Symptom                                     | Fix                                         |
| ----------------------------- | ------------------------------------------- | ------------------------------------------- |
| Wrong CSS import order        | Missing theme tokens or broken layers       | Import reset → khameleon → theme in that order |
| No `'use client'` on provider | Server component error from `createContext` | Mark the provider file with `'use client'`  |

## Testing outside the monorepo

This example lives in the Khameleon monorepo for convenience, but it should be representative of a real app consuming `@khameleon/core` from npm. Monorepo workspace resolution can silently bypass issues that external consumers hit.

**Before merging changes to this example, test it as an external consumer.** See the [Testing Example Apps](https://github.com/the404-nf/khameleon/wiki/Testing-Example-Apps) wiki page for the full procedure.

## Related

- [Issue #145: Add example-nextjs project](https://github.com/the404-nf/khameleon/issues/145)
- [Khameleon + Tailwind example](../example-nextjs-tailwind/): same dist approach with Tailwind for custom layout styles
