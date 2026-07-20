# @khameleon/theme-neutral

Muted, minimal aesthetic with system fonts. Uses [Lucide](https://lucide.dev) icons.

## Install

```bash
npm install @khameleon/theme-neutral
```

## Usage

Wrap your app with `XDSTheme` and pass the theme:

```tsx
import {XDSTheme} from '@khameleon/core/theme';
import {neutralTheme} from '@khameleon/theme-neutral/built';

function App() {
  return <XDSTheme theme={neutralTheme}>{/* your app */}</XDSTheme>;
}
```

### Import paths

| Path                           | Use case                                               |
| ------------------------------ | ------------------------------------------------------ |
| `@khameleon/theme-neutral`           | Source build (StyleX compilation via `@khameleon/build`)     |
| `@khameleon/theme-neutral/built`     | Pre-built dist (Tailwind, plain CSS, or no build step) |
| `@khameleon/theme-neutral/theme.css` | Pre-built CSS file (import in your stylesheet)         |

If you're using `@khameleon/build` for StyleX source compilation, import from the bare path. Otherwise, use `/built`.

### CSS import

Add the theme CSS to your stylesheet:

```css
@import '@khameleon/theme-neutral/theme.css';
```

This is required for component-level theme overrides (colors, radii, typography) to take effect.

This theme uses system fonts; no external font loading is required.

## Related Packages

| Package                                                                              | Description                            |
| ------------------------------------------------------------------------------------ | -------------------------------------- |
| [`@khameleon/core`](https://github.com/the404-nf/khameleon/tree/main/packages/core)   | Core components and theme system       |
| [`@khameleon/build`](https://github.com/the404-nf/khameleon/tree/main/packages/build) | Build plugins for StyleX source builds |
| [`@khameleon/cli`](https://github.com/the404-nf/khameleon/tree/main/packages/cli)     | CLI tooling including `khameleon docs theme` |
