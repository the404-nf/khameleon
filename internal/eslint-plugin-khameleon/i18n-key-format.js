// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file i18n-key-format.js
 * @description Enforce catalog-key naming conventions for
 * `t('@khameleon.<path>')` calls and `i18nKey: '@khameleon.<path>'` config
 * fields. Complements `no-hardcoded-i18n-string`: the sibling rule
 * enforces WHERE strings go (through the catalog), and this rule
 * enforces WHAT the catalog keys look like.
 *
 * Khameleon catalog keys are dot-separated paths under the `@khameleon.`
 * namespace, e.g. `@khameleon.pagination.next` or
 * `@khameleon.powersearch.operator.isAnyOf`. Every path segment must be
 * camelCase — no snake_case, no PascalCase, no kebab-case. camelCase
 * is the ecosystem-dominant convention (React Aria, MUI X, Ant Design,
 * Ark UI all camelCase) and matches JS identifier conventions so the
 * key body can lift straight into a props / config field name.
 *
 * The rule flags:
 *
 *   1. Khameleon-namespaced string literal arguments to any `t(...)` /
 *      `translator(...)` / `useTranslator()(...)` call.
 *   2. Khameleon-namespaced string literal values assigned to an
 *      `i18nKey` property.
 *
 * Only `@khameleon.` keys are checked — third-party namespaces are left
 * to their owners to enforce.
 *
 * Good:
 *   t('@khameleon.pagination.next')
 *   t('@khameleon.powersearch.operator.isAnyOf')
 *   {key: 'is_any_of', i18nKey: '@khameleon.powersearch.operator.isAnyOf'}
 *
 * Bad:
 *   t('@khameleon.pagination.NEXT')          // SCREAMING is not camelCase
 *   t('@khameleon.power_search.operator')    // snake_case segment
 *   t('@khameleon.PowerSearch.operator')     // PascalCase segment
 *   t('@khameleon.power-search.operator')    // kebab-case segment
 *   t('khameleon.pagination.next')           // missing @ prefix — resolver
 *                                         // looks up '@khameleon.<key>'
 *                                         // literally so this misses.
 *   t('@khameleon.pagination')               // no leaf key (must be
 *                                         // @khameleon.<component>.<key>+)
 */

const KHAMELEON_KEY_PATTERN = /^@khameleon\.[^ ]+$/;

/**
 * A path segment is camelCase when it:
 *   - starts with a lowercase letter
 *   - contains only letters and digits (no `_`, `-`, no whitespace)
 *   - is not entirely uppercase (`URL` is fine as a suffix but `URL` on
 *     its own would fail the lowercase-start check anyway)
 */
const CAMEL_CASE_SEGMENT = /^[a-z][a-zA-Z0-9]*$/;

/**
 * Check if a full khameleon catalog key is well-formed.
 * Returns { ok: true } or { ok: false, reason: string }.
 */
function checkKey(key) {
  if (!KHAMELEON_KEY_PATTERN.test(key)) {
    return {
      ok: false,
      reason:
        'Khameleon catalog keys must match `@khameleon.<segment>(.<segment>)+` with no whitespace.',
    };
  }
  const segments = key.slice('@khameleon.'.length).split('.');
  if (segments.length < 2) {
    return {
      ok: false,
      reason:
        'Khameleon catalog keys need at least two segments after `@khameleon.` (component + leaf, e.g. `@khameleon.pagination.next`).',
    };
  }
  for (const segment of segments) {
    if (!segment) {
      return {ok: false, reason: 'Empty path segment (double dot?).'};
    }
    if (!CAMEL_CASE_SEGMENT.test(segment)) {
      return {
        ok: false,
        reason: `Path segment \`${segment}\` is not camelCase. Use \`camelCase\` — no snake_case, PascalCase, or kebab-case.`,
      };
    }
  }
  return {ok: true};
}

/** Names of translator functions we recognize as call targets. */
const TRANSLATOR_CALL_NAMES = new Set(['t', 'translator', 'translate']);

function isTranslatorCall(node) {
  // Direct: t('@khameleon.foo.bar')
  if (node.callee.type === 'Identifier') {
    return TRANSLATOR_CALL_NAMES.has(node.callee.name);
  }
  // Member: some.thing.t('...') — check the final property
  if (
    node.callee.type === 'MemberExpression' &&
    !node.callee.computed &&
    node.callee.property.type === 'Identifier'
  ) {
    return TRANSLATOR_CALL_NAMES.has(node.callee.property.name);
  }
  return false;
}

function getStringArg(node) {
  const first = node.arguments[0];
  if (!first) return null;
  if (first.type === 'Literal' && typeof first.value === 'string') {
    return {value: first.value, node: first};
  }
  return null;
}

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce camelCase path segments for @khameleon.* i18n catalog keys',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      badKey: 'Malformed khameleon catalog key {{key}}. {{reason}}',
    },
    schema: [],
  },
  create(context) {
    function reportIfBad(strValue, node) {
      // Enforce anything that clearly targets the khameleon namespace — with
      // or without the `@` prefix. A missing `@` is a real bug (the
      // runtime resolver looks up `@khameleon.<key>` literally); silently
      // skipping the check means the string routes through the catalog
      // but never hits a key. Third-party namespaces (`@myapp.*`,
      // `@company.*`) are still their owner's concern; we only recognize
      // khameleon.
      const isKhameleonKey =
        strValue.startsWith('@khameleon.') || strValue.startsWith('khameleon.');
      if (!isKhameleonKey) return;
      const result = checkKey(strValue);
      if (result.ok) return;
      context.report({
        node,
        messageId: 'badKey',
        data: {key: JSON.stringify(strValue), reason: result.reason},
      });
    }

    return {
      // 1. t('@khameleon.foo.bar') / translator('@khameleon.foo.bar')
      CallExpression(node) {
        if (!isTranslatorCall(node)) return;
        const arg = getStringArg(node);
        if (arg === null) return;
        reportIfBad(arg.value, arg.node);
      },

      // 2. Object property `i18nKey: '@khameleon.foo.bar'`
      Property(node) {
        if (node.computed || node.shorthand) return;
        const name =
          node.key.type === 'Identifier'
            ? node.key.name
            : node.key.type === 'Literal'
            ? node.key.value
            : null;
        if (name !== 'i18nKey') return;
        if (
          node.value.type !== 'Literal' ||
          typeof node.value.value !== 'string'
        )
          return;
        reportIfBad(node.value.value, node.value);
      },
    };
  },
};

export default rule;
