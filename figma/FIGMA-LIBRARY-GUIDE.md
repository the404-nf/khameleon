# Khameleon — Figma Library Build Guide

How to build the Khameleon Figma library **from scratch** so it corresponds
1:1 with the code in this repo. The goal is not just visual parity: every
variable, style, and component property in Figma should carry the **same name
as its code counterpart**, so design↔code mapping stays lossless (and any
future tooling — token sync, drift detection, design-infrastructure platforms
— can bind Figma nodes to code by lookup instead of inference).

Files in this folder (regenerate with `node scripts/generate-figma-tokens.mjs`):

| File                           | Use                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `khameleon.tokens-studio.json` | Import with the [Tokens Studio](https://tokens.studio) plugin — fastest path to native Figma Variables                               |
| `khameleon.dtcg.tokens.json`   | W3C DTCG-style export — for other import plugins or future pipeline use; each token records its source CSS variable in `$extensions` |

## 1. File & library setup

1. Create a new Figma file named **`Khameleon DS`** in a team library-enabled
   project.
2. Pages, in order: `📖 Cover`, `🎨 Foundations`, `🧩 Components`,
   `🧪 Playground`, `🗃 Archive`.
3. Install fonts locally / enable Google Fonts: **Space Grotesk** (headings),
   **Albert Sans** (body), **JetBrains Mono** (code).

## 2. Variables (tokens)

### Option A — Tokens Studio import (recommended)

1. Install the **Tokens Studio for Figma** plugin.
2. `Tools → Load from file` → pick `khameleon.tokens-studio.json`.
3. You get three sets: `khameleon/base` (spacing, radius, sizes, fonts,
   durations), `khameleon/light`, `khameleon/dark`.
4. Use **Export to Figma → Variables** to materialize native variables:
   - `base` → collection **`Khameleon Core`** (single mode)
   - `light` + `dark` → collection **`Khameleon Color`** with two modes,
     **Light** and **Dark** (mode names matter — keep exactly these).
5. Naming stays slash-delimited automatically (`color/text/primary`,
   `spacing/4`, `radius/container`). Do not rename in Figma — the names mirror
   the CSS custom properties (`--color-text-primary`, `--spacing-4`,
   `--radius-container`).

> Plan note: multiple variable modes require a paid Figma plan (Professional
> allows 4 modes/collection). On the free plan, keep two separate collections
> `Khameleon Color Light` / `Khameleon Color Dark` instead, and swap
> library-wide when needed.

### Option B — Manual native variables

Create the two collections above by hand from `khameleon.dtcg.tokens.json`
(each token lists `light`/`dark` values under
`$extensions["design.khameleon.modes"]`). Tedious but plugin-free: ~200
variables.

### Scoping (do this either way)

In Figma's variable settings, scope variables so pickers stay clean:
`color/background/*` → Fill only; `color/border/*` → Stroke only;
`color/text/*` + `color/icon/*` → Text/Fill; `radius/*` → Corner radius;
`spacing/*` → Gap/padding; `size/*` → Width/height.

## 3. Text & effect styles

Variables don't cover composite typography and shadows well — create Figma
**styles** for those, on the `🎨 Foundations` page:

Text styles (values from the khameleon theme: base 15, ratio 1.22):

| Style name  | Font           | Size | Weight   | Line height |
| ----------- | -------------- | ---- | -------- | ----------- |
| `heading/1` | Space Grotesk  | 27   | Semibold | 133%        |
| `heading/2` | Space Grotesk  | 22   | Semibold | 145%        |
| `heading/3` | Space Grotesk  | 18   | Bold     | 156%        |
| `heading/4` | Space Grotesk  | 15   | Bold     | 160%        |
| `body/base` | Albert Sans    | 15   | Regular  | 160%        |
| `body/sm`   | Albert Sans    | 12   | Regular  | 150%        |
| `body/xs`   | Albert Sans    | 10   | Regular  | 140%        |
| `code/base` | JetBrains Mono | 15   | Regular  | 160%        |

(Cross-check px values against `packages/themes/khameleon/dist/theme.css`
`--font-size-*` — rem × 16.)

Effect styles from `--shadow-*`: `shadow/low`, `shadow/med`, `shadow/high` —
multi-layer drop shadows; copy the offsets/blur/color from the token values
in the DTCG file.

## 4. Components — build order and conventions

Mirror code names **exactly**: component = PascalCase code name, properties =
prop names, variant values = prop values. Example for Button
(`@khameleon/core/Button`):

- Component set: **`Button`**
- Properties: `variant` = `primary | secondary | ghost | destructive`
  (default `secondary`), `size` = `sm | md | lg` (default `md`),
  `isLoading`, `isDisabled`, `isIconOnly` = boolean props,
  `icon`, `endContent` = instance-swap (boolean-gated).
- Every layer that carries color binds to a variable, never a raw hex.
  Button primary fill → `color/accent`, label → `color/on/accent`,
  radius → `radius/full` (khameleon theme pills buttons via component
  override — see `components.button` in `khameleonTheme.ts`).

Starter set (phase 1 — enough for real product screens; the code has 150
exported components, don't chase them all up front):

1. **Primitives:** Text, Heading, Icon, Divider, Avatar, Badge, Tag, Kbd
2. **Actions:** Button, IconButton, ButtonGroup, Link
3. **Forms:** TextInput, TextArea, Select, CheckboxInput, RadioList, Switch,
   Field (label + status wrapper), SearchInput
4. **Containers:** Card, ClickableCard, Banner, EmptyState, Tooltip, Popover
5. **Overlays:** Dialog, AlertDialog, DropdownMenu
6. **Navigation:** Tabs, Breadcrumbs, Pagination
7. **Data:** Table (header/row/cell as sub-components), List, Code/CodeBlock

Phase 2: layout shells (AppShell, FormLayout, Grid/Stacks as frame
templates), Calendar/date inputs, Chat, CommandPalette, Carousel, charts.

For each component, check the real API first:

```bash
node packages/cli/bin/khameleon.mjs component <Name> --dense
```

and copy its variants/props/anatomy table into the component's Figma
description.

## 5. Publishing checklist

- [ ] All fills/strokes/radii/gaps bound to variables (Figma's "detach"
      audit: select-all → check no raw values on system components)
- [ ] Light and Dark modes both proofed per component (toggle collection mode)
- [ ] Component descriptions carry the import path
      (`import {Button} from '@khameleon/core/Button'`)
- [ ] Publish as **Khameleon DS** library; enable in team projects
- [ ] Record library file key + published component keys — the future
      design↔code binding layer will want them

## 6. Keeping Figma and code in sync

The tokens files in this folder are **generated from the built code** — code
is the source of truth for values. When a theme or token changes:

1. `pnpm build` (rebuilds theme CSS + tailwind tokens)
2. `node scripts/generate-figma-tokens.mjs`
3. Re-import the updated JSON in Tokens Studio → export to variables again

Component API changes (new variants, renamed props) must be mirrored by hand
in the Figma component set — the CLI (`component <Name> --dense`) is the
authoritative diff source.
