// Copyright (c) 2026 the404. Part of the Khameleon design system (MIT).

/**
 * @file Generates Figma-importable token files for the Khameleon theme.
 *
 * Sources:
 *   packages/tailwind/dist/tokens.css        — system default tokens (built)
 *   packages/themes/khameleon/dist/theme.css — khameleon theme overrides (built)
 *
 * Outputs (to figma/):
 *   khameleon.tokens-studio.json — Tokens Studio for Figma sets
 *                                  (khameleon/base, khameleon/light, khameleon/dark)
 *   khameleon.dtcg.tokens.json   — W3C DTCG-style file (light/dark groups)
 *
 * Run `pnpm build` first so both source files exist.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DEFAULTS_CSS = path.join(REPO_ROOT, 'packages', 'tailwind', 'dist', 'tokens.css');
const THEME_CSS = path.join(REPO_ROOT, 'packages', 'themes', 'khameleon', 'dist', 'theme.css');
const OUT_DIR = path.join(REPO_ROOT, 'figma');

/** Extract `--name: value` pairs from a CSS string (top-level declarations). */
function extractVars(css) {
  const out = new Map();
  for (const m of css.matchAll(/(--[a-zA-Z0-9-]+)\s*:\s*([^;}]+)[;}]/g)) {
    out.set(m[1], m[2].trim());
  }
  return out;
}

/** Extract vars only from `:scope { ... }` token blocks of a theme CSS. */
function extractThemeVars(css) {
  const out = new Map();
  for (const block of css.matchAll(/:scope\s*\{([^}]*)\}/g)) {
    for (const [k, v] of extractVars(block[1] + '}')) out.set(k, v);
  }
  return out;
}

const defaults = extractVars(fs.readFileSync(DEFAULTS_CSS, 'utf8'));
const themeVars = extractThemeVars(fs.readFileSync(THEME_CSS, 'utf8'));
const merged = new Map([...defaults, ...themeVars]);

/** Split `light-dark(a, b)` → {light, dark}; plain value → same both modes. */
function splitModes(value) {
  const m = value.match(/^light-dark\(\s*(.*?)\s*,\s*(.*)\s*\)$/s);
  return m ? {light: m[1], dark: m[2]} : {light: value, dark: value};
}

/** var(--x) reference → Tokens Studio alias {path} (best-effort). */
function toAlias(value) {
  const m = value.match(/^var\((--[a-zA-Z0-9-]+)\)$/);
  return m ? `{${varToPath(m[1]).join('.')}}` : null;
}

function varToPath(name) {
  // --color-text-primary → ['color','text','primary']; --spacing-0-5 → ['spacing','0-5']
  const bare = name.replace(/^--/, '');
  const known = [
    'color', 'spacing', 'radius', 'shadow', 'size', 'font-size',
    'font-weight', 'font-family', 'duration', 'ease', 'border-width',
    'text', 'transition',
  ];
  for (const prefix of known.sort((a, b) => b.length - a.length)) {
    if (bare === prefix) return [prefix];
    if (bare.startsWith(prefix + '-')) {
      const rest = bare.slice(prefix.length + 1);
      const group = prefix.replace(/-/g, '.');
      // Keep numeric-ish spacing keys intact (0-5, 1-5), split words otherwise.
      const restPath = /^\d/.test(rest) ? [rest] : rest.split('-');
      return [...group.split('.'), ...restPath];
    }
  }
  return bare.split('-');
}

function tokenType(name, value) {
  if (name.startsWith('--color-')) return 'color';
  if (name.startsWith('--font-family-')) return 'fontFamilies';
  if (name.startsWith('--font-weight-')) return 'fontWeights';
  if (name.startsWith('--font-size-') || name.startsWith('--spacing-') ||
      name.startsWith('--radius-') || name.startsWith('--size-') ||
      name.startsWith('--border-width')) return 'sizing';
  if (name.startsWith('--shadow-')) return 'boxShadow';
  if (name.startsWith('--duration-')) return 'other';
  return 'other';
}

/** Insert a token at a nested path inside a plain object. */
function setDeep(root, pathArr, token) {
  let node = root;
  for (const key of pathArr.slice(0, -1)) {
    node = node[key] ??= {};
    // Guard: a leaf token already exists where a group must go.
    if (node.value !== undefined || node.$value !== undefined) return;
  }
  const leaf = pathArr[pathArr.length - 1];
  if (node[leaf] && typeof node[leaf] === 'object' &&
      node[leaf].value === undefined && node[leaf].$value === undefined) {
    // A group already exists at the leaf name — store under `_`.
    node[leaf]._ = token;
  } else {
    node[leaf] = token;
  }
}

// ---------------------------------------------------------------------------
// Build Tokens Studio sets
// ---------------------------------------------------------------------------
const base = {};   // mode-independent: spacing, radius, sizes, fonts, durations
const light = {};  // colors + shadows, light values
const dark = {};   // colors + shadows, dark values

for (const [name, rawValue] of merged) {
  // Skip derived typography composites (text-heading-*, transition-*) — these
  // become Figma text styles, not variables. Skip eases (not representable).
  if (name.startsWith('--text-') || name.startsWith('--transition-') ||
      name.startsWith('--ease-')) continue;

  const type = tokenType(name, rawValue);
  const pathArr = varToPath(name);
  const modes = splitModes(rawValue);
  const alias = toAlias(rawValue);

  if (type === 'color' || type === 'boxShadow') {
    const lightVal = toAlias(modes.light) ?? modes.light;
    const darkVal = toAlias(modes.dark) ?? modes.dark;
    setDeep(light, pathArr, {value: lightVal, type});
    setDeep(dark, pathArr, {value: darkVal, type});
  } else {
    setDeep(base, pathArr, {value: alias ?? modes.light, type});
  }
}

const tokensStudio = {
  'khameleon/base': base,
  'khameleon/light': light,
  'khameleon/dark': dark,
  $themes: [
    {
      id: 'khameleon-light',
      name: 'Khameleon Light',
      selectedTokenSets: {'khameleon/base': 'enabled', 'khameleon/light': 'enabled'},
    },
    {
      id: 'khameleon-dark',
      name: 'Khameleon Dark',
      selectedTokenSets: {'khameleon/base': 'enabled', 'khameleon/dark': 'enabled'},
    },
  ],
  $metadata: {tokenSetOrder: ['khameleon/base', 'khameleon/light', 'khameleon/dark']},
};

// ---------------------------------------------------------------------------
// Build DTCG file (single tree; colors carry per-mode $extensions)
// ---------------------------------------------------------------------------
const dtcgTypeMap = {
  color: 'color',
  sizing: 'dimension',
  fontFamilies: 'fontFamily',
  fontWeights: 'fontWeight',
  boxShadow: 'shadow',
  other: 'string',
};
const dtcg = {};
for (const [name, rawValue] of merged) {
  if (name.startsWith('--text-') || name.startsWith('--transition-') ||
      name.startsWith('--ease-')) continue;
  const type = tokenType(name, rawValue);
  const modes = splitModes(rawValue);
  const token = {
    $type: dtcgTypeMap[type],
    $value: modes.light,
    $extensions: {
      'design.khameleon.modes': {light: modes.light, dark: modes.dark},
      'design.khameleon.cssVariable': name,
    },
  };
  setDeep(dtcg, varToPath(name), token);
}

fs.mkdirSync(OUT_DIR, {recursive: true});
fs.writeFileSync(
  path.join(OUT_DIR, 'khameleon.tokens-studio.json'),
  JSON.stringify(tokensStudio, null, 2),
);
fs.writeFileSync(
  path.join(OUT_DIR, 'khameleon.dtcg.tokens.json'),
  JSON.stringify(dtcg, null, 2),
);

const count = merged.size;
console.log(`generate-figma-tokens: ${count} vars → figma/khameleon.tokens-studio.json + khameleon.dtcg.tokens.json`);
