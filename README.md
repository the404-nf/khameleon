<!-- SYNC CONTRACT: Architecture changes require documentation updates. -->

<div align="center">

# Khameleon

A fully customizable design system built for how we build now: <br/> by people and the agents working alongside them.

**Currently in Beta** · Built on [React](https://react.dev) and [StyleX](https://stylexjs.com)

[![license MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

**[Repository](https://github.com/the404-nf/khameleon)**

</div>

## Overview

Khameleon is a design system for humans and AI agents, maintained by the404. It is a fork of [Astryx](https://github.com/facebook/astryx), Meta's open source design system (MIT licensed) — see [Attribution](#attribution) below.

It ships 150+ accessible components, brand-level theming, dark mode, ready-to-ship templates, and a CLI as one cohesive system. You import pre-built CSS and use typed React components — no build plugin, no styling library to adopt — and both people and AI assistants build with the same tooling.

**What makes Khameleon different:**

- **Open internals.** Components are built to be composed at any level, not locked behind a closed top-level API. The building blocks you'd reach for are exported directly, and when you need to go deeper, swizzle ejects a component's full source into your project to own.
- **No styling lock-in.** Khameleon authors its styles with StyleX, but that's invisible to consumers. Override with `className` using Tailwind, CSS modules, or plain CSS — whatever your project already uses.
- **Customize without wrapping.** A theme is a set of CSS custom property overrides, so a designer can make Khameleon unmistakably theirs without forking or wrapping component source.
- **Built for people and agents.** The API, docs, and CLI are designed together so a person and an AI assistant build the same way, from the same reference.

## Getting Started

Install Khameleon and a theme:

```bash
# npm
npm install @khameleon/core @khameleon/theme-neutral
npm install -D @khameleon/cli

# pnpm
pnpm add @khameleon/core @khameleon/theme-neutral
pnpm add -D @khameleon/cli

# yarn
yarn add @khameleon/core @khameleon/theme-neutral
yarn add -D @khameleon/cli
```

The simplest setup is a few CSS imports plus a theme provider — no build plugin, no PostCSS or Babel config. See the **[@khameleon/core README](packages/core/README.md#quick-start)** for the full guide (Next.js, Tailwind, Vite, and CDN).

For reliable CLI access, add a script to your `package.json`:

```json
"scripts": {
  "khameleon": "node node_modules/@khameleon/cli/bin/khameleon.mjs"
}
```

Then use it as `npm run khameleon -- component --list`. This avoids path errors when AI assistants or new developers invoke the CLI directly.

## Packages

| Package                                    | Description                                                                                          | README                             |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`@khameleon/core`](packages/core)      | Components, theme system, and utilities                                                              | [README](packages/core/README.md)  |
| [`@khameleon/cli`](packages/cli)        | CLI tooling: component docs, templates, scaffolding, themes, and codemods                            | [README](packages/cli/README.md)   |
| [`@khameleon/build`](packages/build)    | Build plugins for StyleX source builds                                                               | [README](packages/build/README.md) |
| [`@khameleon/theme-*`](packages/themes) | Seven ready-made, fully customizable themes (neutral, butter, chocolate, matcha, stone, gothic, y2k) | [README](packages/themes)          |

> `@khameleon/lab` (experimental components) is used internally for Storybook and the sandbox and is not published to npm. `@khameleon/vega` (Vega/Vega-Lite chart wrapper) and `@khameleon/charts` (chart components) are published to npm only under the `@canary` dist-tag — there is no stable release yet.

## Principles

These are the promises Khameleon makes to the people building on it.

- **Guidance over enforcement.** Components give you capability rather than guardrails that fight you. Design opinions live in docs and examples — if you pass a value, the component renders it.
- **Strong, documented conventions.** Every component follows the same naming, prop, and composition rules, and every one is thoroughly documented — so once you've learned a few, the rest feel familiar, and both people and AI can predict how an unfamiliar component behaves.
- **One system for humans and AI.** The API, conventions, docs, and CLI are designed together so people and AI assistants build the same way. Every change that made Khameleon easier for AI made it easier for people too.
- **Earned by measurement.** We test conventions rather than assert them, hold the results loosely, and revisit them when a new situation proves them wrong.

## Architecture

### Foundations

The building blocks for visually cohesive and accessible interfaces: typography, color, layout, and accessibility.

### Components

A library of 150+ reusable UI building blocks with full TypeScript support.

### Patterns

Battle-tested design solutions for common interactions and workflows: table pages, detail page layouts, form wizards, navigation patterns, data entry flows.

## Project Structure

| Directory   | Purpose                                                     |
| ----------- | ----------------------------------------------------------- |
| `apps/`     | Example apps, the docsite, and Storybook                    |
| `packages/` | Published packages: core, cli, build, themes                |
| `internal/` | Internal tooling: test utilities, eslint plugin, vibe tests |

## Contributing

We welcome contributions! See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full guide.

Our conventions and review rubrics live in the
[Contributing wiki](https://github.com/the404-nf/khameleon/wiki/Contributing) —
including [API Conventions](https://github.com/the404-nf/khameleon/wiki/API-Conventions),
[Design Conventions](https://github.com/the404-nf/khameleon/wiki/Design-Conventions),
the [Component Lifecycle](https://github.com/the404-nf/khameleon/wiki/Component-Lifecycle),
and the [Contributing Templates](https://github.com/the404-nf/khameleon/wiki/Contributing-Templates)
and [Blog Review](https://github.com/the404-nf/khameleon/wiki/Blog-Review-Rubric)
rubrics. Read the relevant one before opening a PR.

Quick start for contributors: this repo uses **Node 22+ on an active LTS line**
and **pnpm 11**. Install pnpm directly, or enable
[Corepack](https://nodejs.org/api/corepack.html) once so the pinned pnpm version
installs automatically:

```bash
corepack enable
pnpm install
```

If `corepack` is missing, install pnpm directly or install Corepack manually;
see the troubleshooting notes in
[CONTRIBUTING.md](CONTRIBUTING.md#troubleshooting).

## Attribution

Khameleon is a fork of [Astryx](https://github.com/facebook/astryx), an open
source design system by Meta Platforms, Inc., released under the MIT license.
Astryx grew inside Meta over eight years and ships 150+ accessible components,
brand-level theming, dark mode, templates, and a CLI as one cohesive system.
Khameleon renames and rebrands that foundation, adds its own signature theme,
a Tailwind token preset for non-React stacks, and a corresponding Figma
library. Original copyright headers from Meta Platforms, Inc. are preserved
throughout the source.

## License

MIT — original work © Meta Platforms, Inc. (as Astryx); modifications © 2026 the404.
