// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file naming.ts
 * @input None (pure constants/helpers)
 * @output Centralized namespace-prefix constants and helpers for all
 *   externally-observable name surfaces: CSS classes, data attributes,
 *   CSS custom properties, and CSS layer names.
 * @position Single source of truth consumed by the runtime (components,
 *   theme generation) AND by build/CLI tooling (build-theme.mjs, discovery)
 *   via the `@khameleon/core/naming` subpath export.
 *
 * ## Why this module exists
 *
 * The namespace prefix `khameleon` is part of several externally-observable
 * contracts (`.khameleon-button` classes, `data-khameleon-theme` attributes,
 * `--khameleon-card-padding` custom properties). Historically each of these was
 * hardcoded independently across the runtime, the theme build pipeline, and
 * discovery tooling, kept in sync only by `<!-- SYNC: ... -->` comments.
 * Centralizing the prefix here means it lives in ONE place instead of
 * hundreds of literals.
 *
 * ## Surfaces
 *
 * - CSS classes: `.khameleon-button` via {@link classPrefix} / {@link stableClassName}.
 * - data attributes: `data-khameleon-*` via {@link dataAttrNamespace} / {@link dataAttr}.
 * - CSS custom properties: `--khameleon-*` via {@link cssVarNamespace} / {@link cssVar}.
 * - CSS layers: `khameleon-base` / `khameleon-theme`.
 *
 * SYNC: packages/core/src/utils/themeProps.ts (consumes classPrefix)
 * SYNC: packages/core/src/utils/parseStyleKey.ts
 * SYNC: packages/cli/src/commands/build-theme.mjs (imports @khameleon/core/naming)
 */

/**
 * The DOM/CSS namespace prefix for all externally-observable surfaces
 * (classes, theme/media data attributes, CSS custom properties).
 */
export const NAMESPACE = 'khameleon';

/**
 * Class-name prefix for stable component classes, WITHOUT the trailing dash.
 *
 * Use {@link stableClassName} to build a full class token rather than
 * concatenating this directly.
 */
export const classPrefix = NAMESPACE;

/**
 * data-attribute namespace segment (the part between `data-` and the rest).
 * e.g. `dataAttrNamespace` = 'khameleon' -> `data-khameleon-theme`.
 */
export const dataAttrNamespace = NAMESPACE;

/**
 * CSS custom-property namespace segment.
 * e.g. `--khameleon-card-padding`.
 */
export const cssVarNamespace = NAMESPACE;

/**
 * Build a stable component class token, e.g. `stableClassName('button')`
 * -> `'khameleon-button'`.
 */
export function stableClassName(component: string): string {
  return `${classPrefix}-${component}`;
}

/**
 * Build a `data-*` attribute name in the current namespace, e.g.
 * `dataAttr('theme')` -> `'data-khameleon-theme'`.
 */
export function dataAttr(name: string): `data-${string}` {
  return `data-${dataAttrNamespace}-${name}`;
}

/**
 * Build a CSS custom-property name in the current namespace, e.g.
 * `cssVar('card-padding')` -> `'--khameleon-card-padding'`.
 */
export function cssVar(name: string): string {
  return `--${cssVarNamespace}-${name}`;
}

