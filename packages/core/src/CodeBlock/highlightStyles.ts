// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file highlightStyles.ts
 * @input Syntax token defaults from domainTokens
 * @output Injects ::highlight() CSS rules + fallback token values into the document head
 * @position Shared utility; consumed by CodeBlock and CodeEditor
 *
 * SYNC: When modified, update:
 * - /packages/core/src/theme/domainTokens/syntaxTokens.ts (syntax color token names/defaults)
 */

import {syntaxTokenDefaults} from '../theme';

/**
 * Build the fallback CSS custom properties from the syntax token defaults.
 * These provide colors when no theme explicitly sets --color-syntax-* tokens.
 * Themes override these via higher-specificity [data-khameleon-theme] selectors.
 */
const FALLBACK_TOKENS = `:root {\n${Object.entries(syntaxTokenDefaults)
  .map(([name, value]) => `  ${name}: ${value};`)
  .join('\n')}\n}`;

/**
 * Scoped ::highlight() rules — attached to the `code` element so the
 * browser only checks highlight ranges within code content, not the
 * entire document tree. Using `code::highlight()` instead of bare
 * `::highlight()` avoids expensive style recalc on every element.
 */
const HIGHLIGHT_STYLES = `
${FALLBACK_TOKENS}

.khameleon-codeblock code::highlight(khameleon-keyword),
.khameleon-codeeditor code::highlight(khameleon-keyword) { color: var(--color-syntax-keyword); }
.khameleon-codeblock code::highlight(khameleon-string),
.khameleon-codeeditor code::highlight(khameleon-string) { color: var(--color-syntax-string); }
.khameleon-codeblock code::highlight(khameleon-comment),
.khameleon-codeeditor code::highlight(khameleon-comment) { color: var(--color-syntax-comment); }
.khameleon-codeblock code::highlight(khameleon-number),
.khameleon-codeeditor code::highlight(khameleon-number) { color: var(--color-syntax-number); }
.khameleon-codeblock code::highlight(khameleon-function),
.khameleon-codeeditor code::highlight(khameleon-function) { color: var(--color-syntax-function); }
.khameleon-codeblock code::highlight(khameleon-type),
.khameleon-codeeditor code::highlight(khameleon-type) { color: var(--color-syntax-type); }
.khameleon-codeblock code::highlight(khameleon-tag),
.khameleon-codeeditor code::highlight(khameleon-tag) { color: var(--color-syntax-tag); }
.khameleon-codeblock code::highlight(khameleon-attribute),
.khameleon-codeeditor code::highlight(khameleon-attribute) { color: var(--color-syntax-attribute); }
.khameleon-codeblock code::highlight(khameleon-property),
.khameleon-codeeditor code::highlight(khameleon-property) { color: var(--color-syntax-property); }
.khameleon-codeblock code::highlight(khameleon-operator),
.khameleon-codeeditor code::highlight(khameleon-operator) { color: var(--color-syntax-operator); }
.khameleon-codeblock code::highlight(khameleon-constant),
.khameleon-codeeditor code::highlight(khameleon-constant) { color: var(--color-syntax-constant); }
.khameleon-codeblock code::highlight(khameleon-punctuation),
.khameleon-codeeditor code::highlight(khameleon-punctuation) { color: var(--color-syntax-punctuation); }
.khameleon-codeblock code::highlight(khameleon-variable),
.khameleon-codeeditor code::highlight(khameleon-variable) { color: var(--color-syntax-variable); }

/* Span-based fallback classes — used when highlightMode='spans' or
   when the CSS Custom Highlight API is not available. */
.khameleon-token-keyword         { color: var(--color-syntax-keyword); }
.khameleon-token-string           { color: var(--color-syntax-string); }
.khameleon-token-comment         { color: var(--color-syntax-comment); }
.khameleon-token-number           { color: var(--color-syntax-number); }
.khameleon-token-function       { color: var(--color-syntax-function); }
.khameleon-token-type               { color: var(--color-syntax-type); }
.khameleon-token-tag                 { color: var(--color-syntax-tag); }
.khameleon-token-attribute     { color: var(--color-syntax-attribute); }
.khameleon-token-property       { color: var(--color-syntax-property); }
.khameleon-token-operator       { color: var(--color-syntax-operator); }
.khameleon-token-constant       { color: var(--color-syntax-constant); }
.khameleon-token-punctuation { color: var(--color-syntax-punctuation); }
.khameleon-token-variable       { color: var(--color-syntax-variable); }
`;

let inserted = false;

/**
 * Injects the ::highlight() CSS rules into the document <head>.
 * Safe to call multiple times — only injects once.
 */
export function ensureHighlightStyles(): void {
  if (inserted) {
    return;
  }
  if (typeof document === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('data-khameleon-highlight-styles', '');
  style.textContent = HIGHLIGHT_STYLES;
  document.head.appendChild(style);
  inserted = true;
}

/**
 * Token types that map to highlight names.
 * Used to create CSS.highlights entries with the `khameleon-` prefix.
 */
export const TOKEN_TYPES = [
  'keyword',
  'string',
  'comment',
  'number',
  'function',
  'type',
  'tag',
  'attribute',
  'property',
  'operator',
  'constant',
  'punctuation',
  'variable',
] as const;
