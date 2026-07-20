// Copyright (c) Meta Platforms, Inc. and affiliates.
// Khameleon signature theme © 2026 the404.

/**
 * Khameleon Theme — the signature theme of the Khameleon design system.
 *
 * Editorial monochrome: a blue-gray grayscale spine in the spirit of ink and
 * noir print. The accent is monochrome — near-black ink on light surfaces,
 * parchment white on dark — so interactive elements read by weight and
 * contrast, not hue. Categorical and status colors are dusty, desaturated
 * tones that sit quietly inside the gray field.
 *
 * Core palette (blue-gray ramp):
 *   Parchment  #E8F1F6   (dark-mode text / dark-mode accent)
 *   Mist       #96A0AB   (secondary)
 *   Slate      #495056   (disabled dark / borders)
 *   Charcoal   #24292D   (dark popover)
 *   Ink        #14181B   (light-mode text & accent / dark canvas #101314)
 *   Paper      #EEF2F5   (light body) / #FFFFFF (light surface)
 *
 * Typography: Space Grotesk headings, Albert Sans body, JetBrains Mono code.
 *
 * Contrast targets: all text/on-color pairings hold WCAG AA at their
 * intended sizes; accent-on-surface pairs checked in both modes.
 */

import {defineTheme, defineSyntaxTheme} from '@khameleon/core/theme';
import {khameleonIconRegistry} from './icons';

/** Khameleon syntax palette — atmospheric dusty tones on the gray field. */
const khameleonSyntax = defineSyntaxTheme({
  name: 'xds-khameleon',
  tokens: {
    keyword: ['#6A4E96', '#C39ADB'], // cathedral plum
    string: ['#4E7347', '#A3C987'], // forest moss
    comment: ['#8A949D', '#6B7079'], // faded ink
    number: ['#8A6D1E', '#DEC074'], // aged gold
    function: ['#44598C', '#8AA1D8'], // midnight indigo
    type: ['#6A4E96', '#C39ADB'],
    variable: ['#14181B', '#E8F1F6'], // ink / parchment
    operator: ['#566068', '#96A0AB'],
    constant: ['#8A6D1E', '#E6B85E'], // candlelight amber
    tag: ['#9E4650', '#D97580'], // blood crimson
    attribute: ['#8A6D1E', '#DEC074'],
    property: ['#3E7264', '#7CC5B3'], // verdigris
    punctuation: ['#AEB9C1', '#495056'],
    background: ['#EEF2F5', '#101314'],
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
    // Colors — blue-gray grayscale spine, monochrome accent, dusty signals
    // =========================================================================

    // Core semantic — monochrome accent: ink in light mode, parchment in dark
    '--color-accent': ['#14181B', '#E8F1F6'],
    '--color-accent-muted': ['#14181B14', '#E8F1F620'],
    '--color-neutral': ['#14181B0F', '#E8F1F61A'],
    '--color-background-surface': ['#FFFFFF', '#16191B'],
    '--color-background-body': ['#EEF2F5', '#101314'],
    '--color-overlay': ['#14181B99', '#101314CC'],
    '--color-overlay-hover': ['#14181B0D', '#E8F1F60D'],
    '--color-overlay-pressed': ['#14181B1A', '#E8F1F61A'],
    '--color-background-muted': ['#E3E9ED', '#24292D'],

    // Text
    '--color-text-primary': ['#14181B', '#E8F1F6'],
    '--color-text-secondary': ['#566068', '#96A0AB'],
    '--color-text-disabled': ['#AEB9C1', '#495056'],
    '--color-text-accent': ['#14181B', '#E8F1F6'],
    '--color-on-dark': '#E8F1F6',
    '--color-on-light': '#14181B',
    '--color-on-accent': ['#FFFFFF', '#101314'],
    '--color-on-success': ['#FFFFFF', '#0F1B12'],
    '--color-on-error': ['#FFFFFF', '#2A0C0F'],
    '--color-on-warning': ['#231A04', '#231A04'],

    // Icon
    '--color-icon-accent': ['#14181B', '#E8F1F6'],
    '--color-icon-primary': ['#14181B', '#E8F1F6'],
    '--color-icon-secondary': ['#566068', '#96A0AB'],
    '--color-icon-disabled': ['#AEB9C1', '#495056'],

    // Surface variants
    '--color-background-card': ['#FFFFFF', '#1A1E20'],
    '--color-background-popover': ['#FFFFFF', '#24292D'],
    '--color-background-inverted': ['#14181B', '#E8F1F6'],

    // Status / Sentiment — dusty, desaturated; recognizable but quiet
    '--color-success': ['#38754A', '#A3C987'],
    '--color-success-muted': ['#38754A20', '#A3C98720'],
    '--color-error': ['#A8434D', '#D97580'],
    '--color-error-muted': ['#A8434D20', '#D9758020'],
    '--color-warning': ['#C79733', '#DEC074'],
    '--color-warning-muted': ['#C7973320', '#DEC07420'],

    // Border
    '--color-border': ['#DDE4E9', '#96A0AB26'],
    '--color-border-emphasized': ['#B7C2CA', '#495056'],

    // Effects
    '--color-skeleton': ['#DDE4E9', '#2C3236'],
    '--color-shadow': ['#14181B1A', '#0000004D'],
    '--color-tint-hover': ['black', 'white'],

    // Categorical — dusty pastel-on-dark / deepened-on-light pattern
    // Blue (midnight indigo)
    '--color-background-blue': ['#44598C26', '#8AA1D826'],
    '--color-border-blue': ['#44598C', '#8AA1D8'],
    '--color-icon-blue': ['#44598C', '#8AA1D8'],
    '--color-text-blue': ['#374874', '#A4B7E2'],

    // Categorical — Cyan (glacier)
    '--color-background-cyan': ['#3B738626', '#83BFCF26'],
    '--color-border-cyan': ['#3B7386', '#83BFCF'],
    '--color-icon-cyan': ['#3B7386', '#83BFCF'],
    '--color-text-cyan': ['#2F5D6D', '#9BCDDA'],

    // Categorical — Gray (the spine itself)
    '--color-background-gray': ['#56606826', '#49505633'],
    '--color-border-gray': ['#7A8790', '#7A8790'],
    '--color-icon-gray': ['#566068', '#96A0AB'],
    '--color-text-gray': ['#14181B', '#E8F1F6'],

    // Categorical — Green (forest moss)
    '--color-background-green': ['#4E734726', '#A3C98726'],
    '--color-border-green': ['#4E7347', '#A3C987'],
    '--color-icon-green': ['#4E7347', '#A3C987'],
    '--color-text-green': ['#3E5C39', '#B5D59D'],

    // Categorical — Orange (rust)
    '--color-background-orange': ['#A0622C26', '#D9A87226'],
    '--color-border-orange': ['#A0622C', '#D9A872'],
    '--color-icon-orange': ['#A0622C', '#D9A872'],
    '--color-text-orange': ['#815024', '#E2B989'],

    // Categorical — Pink (dried rose)
    '--color-background-pink': ['#A5577526', '#D89CB726'],
    '--color-border-pink': ['#A55775', '#D89CB7'],
    '--color-icon-pink': ['#A55775', '#D89CB7'],
    '--color-text-pink': ['#87465F', '#E2B0C6'],

    // Categorical — Purple (cathedral plum)
    '--color-background-purple': ['#6A4E9626', '#C39ADB26'],
    '--color-border-purple': ['#6A4E96', '#C39ADB'],
    '--color-icon-purple': ['#6A4E96', '#C39ADB'],
    '--color-text-purple': ['#553E7A', '#D1AEE4'],

    // Categorical — Red (blood crimson)
    '--color-background-red': ['#9E465026', '#D9758026'],
    '--color-border-red': ['#9E4650', '#D97580'],
    '--color-icon-red': ['#9E4650', '#D97580'],
    '--color-text-red': ['#813940', '#E28E98'],

    // Categorical — Teal (verdigris)
    '--color-background-teal': ['#3E726426', '#7CC5B326'],
    '--color-border-teal': ['#3E7264', '#7CC5B3'],
    '--color-icon-teal': ['#3E7264', '#7CC5B3'],
    '--color-text-teal': ['#325C51', '#93D1C2'],

    // Categorical — Yellow (aged gold)
    '--color-background-yellow': ['#8A6D1E26', '#DEC07426'],
    '--color-border-yellow': ['#8A6D1E', '#DEC074'],
    '--color-icon-yellow': ['#8A6D1E', '#DEC074'],
    '--color-text-yellow': ['#705818', '#E5CC8C'],

    // =========================================================================
    // Radius — organic curves, generous but not cartoonish
    // =========================================================================
    '--radius-inner': '6px',
    '--radius-element': '10px',
    '--radius-container': '16px',
    '--radius-page': '28px',

    // =========================================================================
    // Shadows — soft, ink-cast ambient depth
    // =========================================================================
    '--shadow-low': '0 1px 2px #14181B0D, 0 3px 8px #14181B14',
    '--shadow-med': '0 2px 4px #14181B0D, 0 6px 16px #14181B1A',
    '--shadow-high': '0 4px 8px #14181B14, 0 16px 32px #14181B26',
    '--shadow-inset-hover': 'inset 0px 0px 0px 2px #14181B30',
    '--shadow-inset-selected': 'inset 0px 0px 0px 2px #14181B50',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #38754A50',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #C7973350',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #A8434D50',
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
