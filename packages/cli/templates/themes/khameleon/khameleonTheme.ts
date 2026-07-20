// Copyright (c) Meta Platforms, Inc. and affiliates.
// Khameleon signature theme © 2026 the404.

/**
 * Khameleon Theme — the signature theme of the Khameleon design system.
 *
 * Adaptive iridescence: a deep emerald-teal spine (the chameleon at rest)
 * with a violet iridescent flourish (the chameleon in display). Light mode
 * sits on a warm, green-cast paper; dark mode is a deep jungle green-black,
 * never pure black.
 *
 * Core palette:
 *   Emerald spine:  #0E7C66 (light accent) / #53D7B0 (dark accent)
 *   Jungle ink:     #16281F (text / dark canvas root #0A100D)
 *   Paper:          #F3F7F4 (light body) / #FFFFFF (light surface)
 *   Iridescent violet (display accent, categorical purple): #6D4FC4 / #B9A5F2
 *
 * Contrast targets: all text/on-color pairings hold WCAG AA at their
 * intended sizes; accent-on-surface pairs checked in both modes.
 */

import {defineTheme, defineSyntaxTheme} from '@khameleon/core/theme';
import {khameleonIconRegistry} from './icons';

/** Khameleon syntax palette — jungle greens with iridescent accents. */
const khameleonSyntax = defineSyntaxTheme({
  name: 'xds-khameleon',
  tokens: {
    keyword: ['#6D4FC4', '#B9A5F2'], // iridescent violet
    string: ['#0E7C66', '#53D7B0'], // emerald spine
    comment: ['#6E8377', '#7E948A'],
    number: ['#A05A18', '#E8A660'],
    function: ['#1F5F9E', '#7FB4E8'],
    type: ['#6D4FC4', '#B9A5F2'],
    variable: ['#16281F', '#D7E9DD'],
    operator: ['#51685B', '#8FA697'],
    constant: ['#A05A18', '#E8A660'],
    tag: ['#B03540', '#F08A92'],
    attribute: ['#7A6210', '#D9BC4A'],
    property: ['#0E6E7C', '#5CC8D7'],
    punctuation: ['#A9BCB0', '#46584D'],
    background: ['#F3F7F4', '#0A100D'],
  },
});

export const khameleonTheme = defineTheme({
  name: 'khameleon',

  typography: {
    // base 15 / ratio 1.22 — slightly denser than the default scale, with a
    // geometric grotesk for headings and a humanist sans for body.
    scale: {base: 15, ratio: 1.22},
    body: {
      family: 'Albert Sans',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'Space Grotesk',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      weights: {3: 'bold', 4: 'bold'},
    },
    code: {
      family: 'JetBrains Mono',
      fallbacks: '"SF Mono", Monaco, Consolas, monospace',
    },
  },

  // Deliberate, fluid movement — a chameleon never darts.
  motion: {fast: 120, medium: 280, slow: 600, ratio: 0.8},

  syntax: khameleonSyntax,

  tokens: {
    // =========================================================================
    // Colors — emerald spine, jungle ink, iridescent violet flourish
    // =========================================================================

    // Core semantic
    '--color-accent': ['#0E7C66', '#53D7B0'],
    '--color-accent-muted': ['#0E7C6614', '#53D7B01F'],
    '--color-neutral': ['#16281F0F', '#D7E9DD14'],
    '--color-background-surface': ['#FFFFFF', '#111A15'],
    '--color-background-body': ['#F3F7F4', '#0A100D'],
    '--color-overlay': ['#10241B99', '#050B08CC'],
    '--color-overlay-hover': ['#16281F0D', '#D7E9DD0D'],
    '--color-overlay-pressed': ['#16281F1A', '#D7E9DD1A'],
    '--color-background-muted': ['#E9F0EB', '#1A2820'],

    // Text
    '--color-text-primary': ['#16281F', '#D7E9DD'],
    '--color-text-secondary': ['#51685B', '#8FA697'],
    '--color-text-disabled': ['#A9BCB0', '#46584D'],
    '--color-text-accent': ['#0B6653', '#53D7B0'],
    '--color-on-dark': '#F3F7F4',
    '--color-on-light': '#16281F',
    '--color-on-accent': ['#FFFFFF', '#06251B'],
    '--color-on-success': ['#FFFFFF', '#0A2410'],
    '--color-on-error': ['#FFFFFF', '#33080C'],
    '--color-on-warning': ['#2A1F04', '#2A1F04'],

    // Icon
    '--color-icon-accent': ['#0E7C66', '#53D7B0'],
    '--color-icon-primary': ['#16281F', '#D7E9DD'],
    '--color-icon-secondary': ['#51685B', '#8FA697'],
    '--color-icon-disabled': ['#A9BCB0', '#46584D'],

    // Surface variants
    '--color-background-card': ['#FFFFFF', '#15211B'],
    '--color-background-popover': ['#FFFFFF', '#1A2820'],
    '--color-background-inverted': ['#16281F', '#D7E9DD'],

    // Status / Sentiment
    '--color-success': ['#27803A', '#5FCE74'],
    '--color-success-muted': ['#27803A20', '#5FCE7420'],
    '--color-error': ['#CE3340', '#FF7B84'],
    '--color-error-muted': ['#CE334020', '#FF7B8420'],
    '--color-warning': ['#E9A013', '#F5C351'],
    '--color-warning-muted': ['#E9A01320', '#F5C35120'],

    // Border
    '--color-border': ['#DCE6DF', '#8FA69726'],
    '--color-border-emphasized': ['#B4C6BA', '#46584D'],

    // Effects
    '--color-skeleton': ['#DCE6DF', '#2A3A31'],
    '--color-shadow': ['#10241B1A', '#0000004D'],
    '--color-tint-hover': ['black', 'white'],

    // Categorical — Blue
    '--color-background-blue': ['#1F5F9E26', '#7FB4E826'],
    '--color-border-blue': ['#1F5F9E', '#7FB4E8'],
    '--color-icon-blue': ['#1F5F9E', '#7FB4E8'],
    '--color-text-blue': ['#194D80', '#95C3EE'],

    // Categorical — Cyan
    '--color-background-cyan': ['#0E6E7C26', '#5CC8D726'],
    '--color-border-cyan': ['#0E6E7C', '#5CC8D7'],
    '--color-icon-cyan': ['#0E6E7C', '#5CC8D7'],
    '--color-text-cyan': ['#0B5762', '#74D3E0'],

    // Categorical — Gray
    '--color-background-gray': ['#51685B26', '#46584D33'],
    '--color-border-gray': ['#6E8377', '#6E8377'],
    '--color-icon-gray': ['#51685B', '#8FA697'],
    '--color-text-gray': ['#16281F', '#D7E9DD'],

    // Categorical — Green
    '--color-background-green': ['#2C8C3C26', '#5FCE7426'],
    '--color-border-green': ['#2C8C3C', '#5FCE74'],
    '--color-icon-green': ['#2C8C3C', '#5FCE74'],
    '--color-text-green': ['#226E2F', '#78DA8A'],

    // Categorical — Orange
    '--color-background-orange': ['#A05A1826', '#E8A66026'],
    '--color-border-orange': ['#A05A18', '#E8A660'],
    '--color-icon-orange': ['#A05A18', '#E8A660'],
    '--color-text-orange': ['#824812', '#EFB878'],

    // Categorical — Pink
    '--color-background-pink': ['#B84A8026', '#EE86B426'],
    '--color-border-pink': ['#B84A80', '#EE86B4'],
    '--color-icon-pink': ['#B84A80', '#EE86B4'],
    '--color-text-pink': ['#973B68', '#F49AC2'],

    // Categorical — Purple (the iridescent flourish)
    '--color-background-purple': ['#6D4FC426', '#B9A5F226'],
    '--color-border-purple': ['#6D4FC4', '#B9A5F2'],
    '--color-icon-purple': ['#6D4FC4', '#B9A5F2'],
    '--color-text-purple': ['#57409E', '#C9B9F6'],

    // Categorical — Red
    '--color-background-red': ['#CE334026', '#FF7B8426'],
    '--color-border-red': ['#CE3340', '#FF7B84'],
    '--color-icon-red': ['#CE3340', '#FF7B84'],
    '--color-text-red': ['#A82934', '#FF959C'],

    // Categorical — Teal
    '--color-background-teal': ['#0E7C6626', '#53D7B026'],
    '--color-border-teal': ['#0E7C66', '#53D7B0'],
    '--color-icon-teal': ['#0E7C66', '#53D7B0'],
    '--color-text-teal': ['#0B6653', '#6FE0BF'],

    // Categorical — Yellow
    '--color-background-yellow': ['#7A621026', '#D9BC4A26'],
    '--color-border-yellow': ['#A98A18', '#D9BC4A'],
    '--color-icon-yellow': ['#7A6210', '#D9BC4A'],
    '--color-text-yellow': ['#63500D', '#E3CB6B'],

    // =========================================================================
    // Radius — organic curves, generous but not cartoonish
    // =========================================================================
    '--radius-inner': '6px',
    '--radius-element': '10px',
    '--radius-container': '16px',
    '--radius-page': '28px',

    // =========================================================================
    // Shadows — soft, green-cast ambient depth
    // =========================================================================
    '--shadow-low': '0 1px 2px #10241B0D, 0 3px 8px #10241B14',
    '--shadow-med': '0 2px 4px #10241B0D, 0 6px 16px #10241B1A',
    '--shadow-high': '0 4px 8px #10241B14, 0 16px 32px #10241B26',
    '--shadow-inset-hover': 'inset 0px 0px 0px 2px #0E7C6630',
    '--shadow-inset-selected': 'inset 0px 0px 0px 2px #0E7C6650',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #2C8C3C50',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #E9A01350',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #CE334050',
  },

  components: {
    button: {
      base: {
        borderRadius: 'var(--radius-full)',
      },
    },
    card: {
      base: {
        borderRadius: 'var(--radius-container)',
      },
    },
  },

  icons: khameleonIconRegistry,
});
