// Copyright (c) Meta Platforms, Inc. and affiliates.

/** @type {import('../../core/src/docs-types').ReferenceDoc} */

export const docs = {
  name: 'internationalization',
  title: 'Internationalization',
  category: 'guide',
  description:
    'Localize khameleon component strings, provide translation catalogs, override default text, coexist with your own i18n library, swap languages at runtime, and test translations with the pseudo locale.',

  sections: [
    {
      title: 'Quick Start',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Internationalization ships with `@khameleon/core`. There is nothing to install. Wrap your app in `<InternationalizationProvider>` and set a `locale`, and khameleon components pick up localized strings automatically.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Wrap your app',
          code: `import {InternationalizationProvider} from '@khameleon/core';

function App() {
  return (
    <InternationalizationProvider locale="en">
      <YourApp />
    </InternationalizationProvider>
  );
}`,
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Read strings inside a component',
          code: `import {useTranslator} from '@khameleon/core';

function SaveButton() {
  const t = useTranslator();
  return <button>{t('@myapp.actions.save')}</button>;
}`,
        },
        {
          type: 'prose',
          text: 'The hook is available to consumer components too, but using it is entirely optional: many teams keep their app strings on their existing i18n library (react-intl, i18next, next-intl, LinguiJS) and only use `useTranslator` when reading khameleon keys. If you do route your own strings through it, we recommend namespacing them (`@myapp.*` or your npm scope) to keep them separated from `@khameleon.*`, but this is a convention, not a requirement; the resolver treats every key as an opaque string.',
        },
        {
          type: 'prose',
          text: "Khameleon ships translations only for English today. First-party translations for other locales are on the roadmap; track https://github.com/the404-nf/khameleon/issues/3641. In the meantime, if you want khameleon UI translated into another locale, you can ship your own catalog through the `messages` prop (covered in the next section). If you're using `useTranslator` for your own strings, you'll want to ship your own catalog either way, since khameleon only carries the fallback for `@khameleon.*` keys, not the ones you author.",
        },
      ],
    },
    {
      title: 'Providing locale catalogs',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Khameleon bundles only the English catalog today. To render in any other locale, provide a translation catalog through the `messages` prop and set `locale` accordingly. This matches how MUI, Ant Design, and AG Grid work: the consumer app supplies the catalogs it actually needs so unused translations stay out of the bundle.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Add French',
          code: `import {InternationalizationProvider} from '@khameleon/core';
import fr from './locales/khameleon/fr.json';

<InternationalizationProvider locale="fr" messages={{fr}}>
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: "See `@khameleon/core/locales/en.json` for the full inventory of keys to translate. Copy it as the starting point: every key you translate replaces the English default; anything you omit falls back through the locale chain to English (e.g. `pt-BR` walks to `pt` then to shipped `en`), so a partial translation renders as a mix rather than empty text or raw key names.",
        },
        {
          type: 'prose',
          text: 'A community-maintained set of khameleon translations is on the roadmap but not shipped yet. For now, consumer apps that ship in multiple languages own their khameleon catalogs alongside their app catalogs. Contributions to a first-party set are welcome; track discussion at https://github.com/the404-nf/khameleon/issues/3641.',
        },
      ],
    },
    {
      title: "Overriding khameleon's default text",
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Use `overrides` to change individual strings without shipping a full catalog. Overrides are keyed by locale and merged on top of the built-in and user-supplied catalogs.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Change one string in English',
          code: `<InternationalizationProvider
  locale="en"
  overrides={{en: {'@khameleon.pagination.next': 'Next →'}}}
>
  <App />
</InternationalizationProvider>`,
        },
        {
          type: 'prose',
          text: 'Overrides win over both bundled English and any `messages` catalog for the same key. Use them for brand voice tweaks or one-off wording changes.',
        },
      ],
    },
    {
      title: 'Using khameleon with your own i18n library',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: "Khameleon components render khameleon strings through khameleon's provider. Consumer components render consumer strings through whatever i18n library you already use: react-intl, i18next, next-intl, LinguiJS, and so on. The two systems coexist and read from the same source of truth for the active locale.",
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Khameleon + react-intl side by side',
          code: `import {InternationalizationProvider} from '@khameleon/core';
import {Selector} from '@khameleon/core/Selector';
import {Button} from '@khameleon/core/Button';
import {FormattedMessage, IntlProvider, useIntl} from 'react-intl';
import khameleonFr from './locales/khameleon/fr.json'; // khameleon's UI, in French
import appFr from './locales/app/fr.json';       // your app strings, in French

function Pricing() {
  // Consumer strings — resolved by react-intl.
  const intl = useIntl();

  return (
    <section>
      <h1><FormattedMessage id="pricing.heading" /></h1>

      {/* Khameleon Selector — trigger placeholder, search-box placeholder,
          clear-button aria-label all resolved by
          <InternationalizationProvider>. Options come from react-intl. */}
      <Selector
        label={intl.formatMessage({id: 'pricing.region.label'})}
        options={[
          {value: 'na', label: intl.formatMessage({id: 'pricing.region.na'})},
          {value: 'eu', label: intl.formatMessage({id: 'pricing.region.eu'})},
        ]}
        hasSearch
        hasClear
      />

      <Button label={intl.formatMessage({id: 'pricing.cta.subscribe'})} />
    </section>
  );
}

export default function App() {
  return (
    // Same locale, two providers reading their own catalogs.
    <IntlProvider locale="fr" messages={appFr}>
      <InternationalizationProvider locale="fr" messages={{fr: khameleonFr}}>
        <Pricing />
      </InternationalizationProvider>
    </IntlProvider>
  );
}`,
        },
        {
          type: 'prose',
          text: 'Keep the two providers in sync on locale, and each library owns its own catalog. Khameleon never sees your app strings, and your i18n library never sees khameleon internals. Runtime locale swap works the same way: re-render both providers with a new `locale` prop and the whole tree updates live.',
        },
        {
          type: 'prose',
          text: "Single-catalog usage (where an external i18n runtime like react-intl or i18next resolves both your app strings AND khameleon's strings through one provider) is on the roadmap via a `Translator` adapter. Track https://github.com/the404-nf/khameleon/issues/4029. For now, run the two providers side by side as shown above.",
        },
      ],
    },
    {
      title: 'Runtime language swap',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Re-render `<InternationalizationProvider>` with a new `locale` prop and every khameleon string updates live. No reload, no separate API call.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Toggle between locales',
          code: `const [locale, setLocale] = useState<'en' | 'fr'>('en');

<InternationalizationProvider locale={locale} messages={{fr}}>
  <Button
    label={locale === 'en' ? 'Français' : 'English'}
    onClick={() => setLocale(l => (l === 'en' ? 'fr' : 'en'))}
  />
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: "Persisting the user's choice (localStorage, cookie, URL segment, account setting) is up to the consumer. Khameleon reads whatever `locale` you pass in.",
        },
      ],
    },
    {
      title: 'Testing your translations',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: 'Khameleon generates a `pseudo` locale that wraps every string in `⟦…⟧` and replaces letters with accented look-alikes. Switching to it in development instantly reveals any khameleon string that isn\'t going through the translator, plus any layout that breaks under longer text.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Turn on pseudo-localization',
          code: `import pseudo from '@khameleon/core/locales/pseudo.json';

<InternationalizationProvider locale="pseudo" messages={{pseudo}}>
  <App />
</InternationalizationProvider>;`,
        },
        {
          type: 'prose',
          text: 'Any bare English text you still see on screen is a hardcoded string that needs to be routed through `useTranslator`.',
        },
        {
          type: 'prose',
          text: "Pseudoloc also has a subtle caveat worth knowing: the pseudo catalog is complete (khameleon generates it from every shipped key), so a component using an khameleon-shipped key will always render its pseudo version. Your handwritten translation catalogs, on the other hand, only cover the keys you translated; anything missing falls back to English. That means \"looks perfect in pseudo\" is not the same guarantee as \"looks perfect in French.\" Check each real locale by hand for coverage gaps.",
        },
      ],
    },
    {
      title: 'For contributors',
      category: 'guide',
      content: [
        {
          type: 'prose',
          text: "Khameleon's own strings live in `packages/core/locales/en.json`. New user-facing strings must go through `useTranslator`; this is enforced by the `@khameleon/no-hardcoded-i18n-string` ESLint rule. See the AI contribution guide for the alias-and-resolve pattern used when adding new keys.",
        },
      ],
    },
  ],
};
