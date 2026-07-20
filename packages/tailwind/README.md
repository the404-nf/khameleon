# @khameleon/tailwind

The framework-agnostic Tailwind distribution of the **Khameleon** design
system. Use Khameleon's tokens and themes from **any stack** — Vue, Svelte,
Angular, Rails, plain HTML — with no React and no StyleX.

What ships:

| Export                           | What it is                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `@khameleon/tailwind/tokens.css` | Every default design token as plain `:root` custom properties (no component CSS) plus `data-khameleon-appearance` light/dark helpers |
| `@khameleon/tailwind/theme.css`  | Tailwind **v4** `@theme inline` bridge — utilities like `bg-surface`, `text-primary`, `rounded-lg` resolve to live Khameleon tokens  |
| `@khameleon/tailwind/preset`     | Tailwind **v3** preset for `tailwind.config.js`                                                                                      |

## Tailwind v4 (CSS-first)

```css
/* app.css */
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import '@khameleon/tailwind/tokens.css';
@import '@khameleon/theme-khameleon/theme.css'; /* any Khameleon theme */
@import '@khameleon/tailwind/theme.css';
@import 'tailwindcss/utilities.css' layer(utilities);
```

```html
<html data-khameleon-theme="khameleon" data-khameleon-appearance="auto">
  <body class="bg-body text-primary font-sans">
    <div class="bg-card rounded-lg shadow-md p-4">
      <h2 class="font-heading text-xl">Adaptive by nature</h2>
      <button class="bg-accent-bg text-on-accent rounded-full px-4 py-2">
        Blend in
      </button>
    </div>
  </body>
</html>
```

## Tailwind v3 (config-based)

```js
// tailwind.config.js
module.exports = {
  presets: [require('@khameleon/tailwind/preset')],
  content: ['./src/**/*.{html,js,vue,svelte}'],
};
```

```css
/* app.css */
@import '@khameleon/tailwind/tokens.css';
@import '@khameleon/theme-khameleon/theme.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Theming

Tokens use `light-dark()`, so light/dark switching is pure CSS:

- `data-khameleon-appearance="light" | "dark" | "auto"` on `<html>` (or any subtree)
- `data-khameleon-theme="<name>"` selects the active theme scope for any
  imported `@khameleon/theme-*` CSS file

Utilities automatically re-resolve — no Tailwind rebuild, no `dark:` variant
duplication needed (though Tailwind's `dark:` still works if you want
per-mode overrides).

## Relationship to `@khameleon/core`

If you're in React, you can use Tailwind utilities _alongside_ the real
components via `@khameleon/core/tailwind-theme.css` — see the core README.
This package is for everyone who can't ship React components but still wants
the same design decisions on-screen.
