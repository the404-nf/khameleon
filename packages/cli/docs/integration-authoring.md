# Authoring an Khameleon Integration

> **Status:** working notes. This should eventually move to the public wiki
> alongside the rest of the integration-authoring guidance; it lives here for
> now so it ships and is versioned with the CLI.

An **Integration** is an npm package that contributes components, templates, and/or
codemods to a consumer's design-system workflow. Consumers install the 3rd party
package, add a line to their khameleon.config file:

```js
import {createConfig} from '@khameleon/cli/config';

export default createConfig({
  integrations: ['@acme/khameleon-widgets'],
  ...
});
```

Then the integration's components and templates will be surfaced alongside Khameleon
components in the Khameleon CLI.

```sh
khameleon component AcmeCarousel --props
khameleon component --list --package @acme/khameleon-widgets
```

## The Integration File

In order to register your package as an Khameleon Integration, create an
`khameleon.integration.{ts,mjs,js}` file as a sibling to your `package.json`. This file
tells Khameleon where to find your components, templates, codemods, etc.

```js
// khameleon.integration.{ts,mjs,js}
import {createIntegration} from '@khameleon/cli/integration';

export default createIntegration({
  components: './components',
  templates: './templates',
  codemods: './codemods',
  issuesUrl: 'https://github.com/acme/widgets/issues',
});
```

## Components

Your components themselves may be exported from your library as you see fit (consumers
will still import them from your package) but Khameleon CLI will look for a .doc.{ts,mjs,js}
file with the same stem e.g. `AcmeCarousel.tsx` and `AcmeCarousel.doc.ts`.

```js
// AcmeCarousel.doc.ts
import {createComponentDoc} from '@khameleon/cli/doc';

export default createComponentDoc({
  name: 'AcmeCarousel',
  description: '...',
  ...
});
```

## Templates

Templates are typically not exported from the package directly, but instead accessed
via the Khameleon CLI. Consumers can look through your templates and materialize them
into their apps.

You define a template with the `createPageTemplate` (for full pages) or `createBlockTemplate`
(for smaller chunks). e.g. `AcmeLandingPage.tsx`, `AcmeLandingPage.template.ts`

```js
// AcmeLandingPage.template.ts
import {createPageTemplate} from '@khameleon/cli/template';

export default createPageTemplate({
  ...
});
```

Note that, since the CLI needs access to the template source code, you need to make sure
that it is included in your published package. This will also allow us to render previews
of templates in the future by bundling your template into a doc site build.

Typically, this is done via the package.json `exports` key.

```jsonc
{
  "exports": {
    // ...
    "./templates/*.tsx": "./templates/*.tsx",
  },
}
```

In order to verify that it's working, you can test importing the template component like this:

```ts
import('@acme/khameleon-widgets/templates/AcmeLandingPage.tsx');
```

Import **with the `.tsx` extension** — an extensionless specifier won't resolve
under `moduleResolution: bundler`. The extensionful `"./templates/*.tsx"` export
above is what lets that import type-check without consumers enabling
`allowImportingTsExtensions`.
