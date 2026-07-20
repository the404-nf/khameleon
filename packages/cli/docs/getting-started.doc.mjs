// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../../core/src/docs-types').ReferenceDoc} */

export const docs = {
  name: 'getting-started',
  title: 'Getting Started',
  category: 'guide',
  description:
    'Add the design system to your project and start building.',

  sections: [
    {
      title: 'Quick Start with AI',
      content: [
        {
          type: 'prose',
          text: 'Paste this into your AI coding tool and let it handle the setup:',
        },
        {
          type: 'code',
          lang: 'text',
          label: 'Paste this into your AI',
          code: 'Install @khameleon/core, @khameleon/theme-neutral, and @khameleon/cli in this project. Run `npx khameleon init` to set up agent docs. Read the generated files to learn the conventions.',
        },
      ],
    },
    {
      title: 'Install',
      content: [
        {
          type: 'prose',
          text: 'Add the core package, a theme, and the CLI to your existing project.',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npm install @khameleon/core @khameleon/theme-neutral @khameleon/cli`,
        },
        {
          type: 'prose',
          text: 'Then run the init wizard to set up AI agent docs, pick a starter template, and learn about theming.',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npx khameleon init`,
        },
      ],
    },
    {
      title: 'Add the theme CSS',
      content: [
        {
          type: 'prose',
          text: 'Import the reset stylesheet and a theme in your global CSS file. Themes provide all design tokens (colors, spacing, radius, typography) as CSS custom properties.',
        },
        {
          type: 'code',
          lang: 'css',
          label: 'globals.css',
          code: `@import '@khameleon/core/reset.css';
@import '@khameleon/core/khameleon.css';
@import '@khameleon/theme-neutral/theme.css';`,
        },
        {
          type: 'prose',
          text: 'Available themes: @khameleon/theme-neutral (muted minimal, a good starting point), @khameleon/theme-butter, @khameleon/theme-chocolate, @khameleon/theme-gothic (dark-only), @khameleon/theme-matcha, @khameleon/theme-stone, and @khameleon/theme-y2k. See `npx khameleon docs theme` for the full theming guide.',
        },
        {
          type: 'prose',
          text: 'These stylesheets are cascade-layered: the reset loads in @layer reset and component styles in @layer khameleon-base. If your project has existing global CSS, a legacy reset, or Tailwind, declare the layer order explicitly and assign every stylesheet to a layer deliberately: unlayered styles and later layers both override khameleon-base regardless of specificity. See the Cascade Layer Safety section in `npx khameleon docs migration` before building screens.',
        },
      ],
    },
    {
      title: 'Add your first component',
      content: [
        {
          type: 'prose',
          text: 'Components are imported from per-category subpath entrypoints. This keeps bundles small and makes intent clear.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'app/page.tsx',
          code: `import {Button} from '@khameleon/core/Button';
import {VStack} from '@khameleon/core/Layout';

export default function Page() {
  return (
    <VStack gap={2}>
      <Button label="Hello Khameleon" onClick={() => alert('Hi!')} />
    </VStack>
  );
}`,
        },
      ],
    },
    {
      title: 'Customize with StyleX',
      content: [
        {
          type: 'prose',
          text: 'Khameleon components support various styling solutions, from plain CSS and `className` to Tailwind and CSS-in-JS. See the [styling docs](/docs/styling) for the full guide. Khameleon also has a deep integration with [StyleX](https://stylexjs.com/), an atomic CSS-in-JS library: create styles with `stylex.create()` and pass them to components with the `xstyle` prop.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Style overrides',
          code: `import * as stylex from '@stylexjs/stylex';

const overrides = stylex.create({
  save: { alignSelf: 'flex-end', marginTop: 16 },
});

<Button label="Save" xstyle={overrides.save} />`,
        },
      ],
    },
    {
      title: 'Example Apps',
      content: [
        {
          type: 'prose',
          text: 'For a full working project, clone one of the example apps from the repo. These are complete setups with routing, theming, and components wired together.',
        },
        {
          type: 'table',
          headers: ['Example', 'Stack', 'Path'],
          rows: [
            ['Next.js', 'Next.js + theme CSS', '[apps/example-nextjs](https://github.com/the404-nf/khameleon/tree/main/apps/example-nextjs)'],
            ['Next.js + StyleX', 'Next.js + StyleX for custom styles', '[apps/example-nextjs-stylex](https://github.com/the404-nf/khameleon/tree/main/apps/example-nextjs-stylex)'],
            ['Next.js + Tailwind', 'Next.js + Tailwind bridge', '[apps/example-nextjs-tailwind](https://github.com/the404-nf/khameleon/tree/main/apps/example-nextjs-tailwind)'],
            ['Next.js Source', 'Next.js importing from source', '[apps/example-nextjs-source](https://github.com/the404-nf/khameleon/tree/main/apps/example-nextjs-source)'],
            ['Vite', 'Vite', '[apps/example-vite](https://github.com/the404-nf/khameleon/tree/main/apps/example-vite)'],
          ],
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Clone and run an example',
          code: `git clone https://github.com/the404-nf/khameleon.git
cd khameleon/apps/example-nextjs
pnpm install
pnpm dev`,
        },
      ],
    },
    {
      title: 'Explore the CLI',
      content: [
        {
          type: 'prose',
          text: 'The CLI is your reference for components, tokens, templates, and docs. For reliable invocation (especially with AI assistants), add this script to your package.json:',
        },
        {
          type: 'code',
          lang: 'json',
          label: 'package.json',
          code: `"scripts": {
  "khameleon": "node node_modules/@khameleon/cli/bin/khameleon.mjs"
}`,
        },
        {
          type: 'prose',
          text: 'Then discover what\'s available:',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npx khameleon component          # list all components
npx khameleon component Button   # props, usage, theming for Button
npx khameleon docs               # list all doc topics
npx khameleon template --list    # available page templates
npx khameleon docs tokens        # spacing, color, radius reference`,
        },
      ],
    },
  ],
};
