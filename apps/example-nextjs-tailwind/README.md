# Khameleon + Tailwind (Dist Build)

Example Next.js app using Khameleon pre-built dist CSS alongside Tailwind CSS v4. No StyleX build plugin needed: Khameleon components are consumed as a regular npm package with a CSS import.

## How it works

Khameleon ships pre-compiled CSS (`khameleon.css`) with all component styles as atomic classes in CSS cascade layers. Tailwind handles layout, spacing, and custom styling via utility classes. Both systems coexist through explicit layer ordering.

## CSS Layer Order

The key to coexistence is declaring **all** layers upfront in `globals.css`:

```css
@layer reset, theme, base, khameleon-base, khameleon-theme, components, utilities;
```

This gives the correct priority (lowest → highest):

| Layer          | Source   | What it does                                       |
| -------------- | -------- | -------------------------------------------------- |
| `reset`        | Khameleon   | CSS reset (`:where()` selectors, zero specificity) |
| `theme`        | Tailwind | Theme variables (colors, fonts, spacing)           |
| `base`         | Tailwind | Preflight reset (element-level normalization)      |
| `khameleon-base`  | Khameleon   | Component styles (buttons, cards, inputs, etc.)    |
| `khameleon-theme` | Khameleon   | Theme overrides (typography, color mappings)       |
| `components`   | Tailwind | Component classes (if any)                         |
| `utilities`    | Tailwind | Utility classes: **wins over all layers**          |
| _(unlayered)_  | Consumer | Your custom CSS: highest priority                  |

Without this declaration, Khameleon layers are created _after_ Tailwind's declared layers, making Khameleon component styles outrank Tailwind utilities. That means `className="bg-red-500"` on an Khameleon component wouldn't work.

## Usage patterns

### Khameleon for components, Tailwind for layout

```tsx
<main className="flex min-h-screen items-center p-8">
  <Card className="max-w-md">
    <VStack gap={4}>
      <Heading level={2}>Dashboard</Heading>
      <Button label="Save" variant="primary" />
    </VStack>
  </Card>
</main>
```

### Khameleon Tailwind Bridge (recommended)

Import `@khameleon/core/tailwind-theme.css` to register Khameleon tokens as Tailwind theme variables. This maps all Khameleon design tokens to native Tailwind utilities, with no `var()` needed:

```tsx
// Before (verbose arbitrary values):
<div className="rounded-[var(--radius-container)] bg-[var(--color-background-surface)] p-[var(--spacing-4)]">
  <p className="text-[var(--color-text-primary)]">Styled with Khameleon tokens</p>
</div>

// After (with tailwind-theme.css):
<div className="rounded-lg bg-surface p-4">
  <p className="text-primary">Styled with Khameleon tokens</p>
</div>
```

The bridge uses Tailwind v4's `@theme inline`: it tells Tailwind to generate utilities from Khameleon's existing CSS custom properties without emitting duplicate declarations. Theme switching just works.

Available utilities include `text-primary`, `text-secondary`, `bg-surface`, `bg-card`, `border-strong`, `text-error`, `bg-success`, `bg-blue-subtle`, `text-blue-vivid`, `border-blue-ring`, and 80+ more.

### Khameleon tokens via arbitrary values (escape hatch)

If you need a token the bridge doesn't cover, you can still use Tailwind's bracket syntax:

```tsx
<div className="bg-[var(--color-background-surface)]">
  <p className="text-[var(--color-text-primary)]">Escape hatch</p>
</div>
```

### Tailwind overrides on Khameleon components

All Khameleon components accept `className`. Tailwind utilities in the `utilities` layer override Khameleon component styles in `khameleon-base`:

```tsx
<Button label="Custom" variant="primary" className="rounded-full shadow-xl" />
<Text type="body" className="text-blue-600 italic">Custom styled text</Text>
```

### Mixing Khameleon and Tailwind components

Shadcn-style Tailwind components render correctly alongside Khameleon. Both resets are nearly identical (shared modern-normalize lineage), so there are no conflicts:

```tsx
<div className="grid grid-cols-2 gap-6">
  <Card>...</Card>
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    ...
  </div>
</div>
```

## Reset compatibility

Khameleon reset and Tailwind Preflight overlap ~80%. The meaningful differences:

- **Font smoothing**: Khameleon enables `-webkit-font-smoothing: antialiased`; Tailwind doesn't
- **Color scheme**: Khameleon maps `data-theme` to `color-scheme` for light/dark mode
- **Placeholder color**: Khameleon uses `var(--color-text-secondary)` token; Tailwind uses `color-mix()`

Both resets can run together without conflicts. Neither breaks the other's components.

## Running

```bash
pnpm install
pnpm dev  # or: cd apps/example-nextjs-tailwind && npx next dev
```
