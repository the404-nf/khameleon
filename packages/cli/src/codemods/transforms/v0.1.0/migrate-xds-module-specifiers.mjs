// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Codemod: migrate module specifiers from @xds/* to @khameleon/*
 *
 * The v0.1.0 release moved the public package scope from @xds to
 * @khameleon. Consumers update dependencies first, install, then run
 * `khameleon upgrade`; this transform only updates JS/TS module specifiers in
 * source code.
 */

export const meta = {
  title: 'Migrate module specifiers from @xds/* to @khameleon/*',
  description:
    'Updates JS/TS import, export, dynamic import, and require module ' +
    'specifiers from @xds/* to the @khameleon/* packages used by Khameleon v0.1.0.',
  pr: '#3092',
  fileExtensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
};

const PACKAGE_RENAMES = new Map([
  ['@xds/build', '@khameleon/build'],
  ['@xds/cli', '@khameleon/cli'],
  ['@xds/core', '@khameleon/core'],
  ['@xds/lab', '@khameleon/lab'],
  ['@xds/theme-butter', '@khameleon/theme-butter'],
  ['@xds/theme-chocolate', '@khameleon/theme-chocolate'],
  ['@xds/theme-daily', '@khameleon/theme-neutral'],
  ['@xds/theme-default', '@khameleon/theme-neutral'],
  ['@xds/theme-gothic', '@khameleon/theme-gothic'],
  ['@xds/theme-matcha', '@khameleon/theme-matcha'],
  ['@xds/theme-neutral', '@khameleon/theme-neutral'],
  ['@xds/theme-stone', '@khameleon/theme-stone'],
  ['@xds/theme-y2k', '@khameleon/theme-y2k'],
]);

function renamePackageSpecifier(value) {
  if (typeof value !== 'string') return value;
  for (const [from, to] of PACKAGE_RENAMES) {
    if (value === from) return to;
    if (value.startsWith(from + '/')) return to + value.slice(from.length);
  }
  return value;
}

function rewriteLiteral(node) {
  if (!node || typeof node.value !== 'string') return false;
  const next = renamePackageSpecifier(node.value);
  if (next === node.value) return false;
  node.value = next;
  return true;
}

// @xds/theme-default and @xds/theme-daily both collapse to
// @khameleon/theme-neutral, whose exported theme binding is `neutralTheme`
// (not `defaultTheme`). When we rewrite an import from one of those packages,
// remap a `defaultTheme` named import to `neutralTheme`, aliasing back to the
// original local name so downstream usages keep working unchanged:
//   import {defaultTheme} from '@xds/theme-default'
//     -> import {neutralTheme as defaultTheme} from '@khameleon/theme-neutral'
// An already-aliased `{defaultTheme as x}` just has its imported name remapped.
const THEME_EXPORT_RENAMES = new Map([['defaultTheme', 'neutralTheme']]);
const COLLAPSED_THEME_SOURCES = new Set([
  '@xds/theme-default',
  '@xds/theme-daily',
]);

function isCollapsedThemeSource(value) {
  if (typeof value !== 'string') return false;
  for (const src of COLLAPSED_THEME_SOURCES) {
    if (value === src || value.startsWith(src + '/')) return true;
  }
  return false;
}

function remapThemeExportNames(importPath, j) {
  let changed = false;
  importPath.node.specifiers = (importPath.node.specifiers || []).map(spec => {
    if (spec.type !== 'ImportSpecifier') return spec;
    const importedName = spec.imported.name;
    const renamed = THEME_EXPORT_RENAMES.get(importedName);
    if (!renamed) return spec;
    // Preserve the original local binding (so downstream usages keep working),
    // remapping only the imported name. Build a FRESH specifier node: recast
    // preserves the printed form of a mutated ImportSpecifier and would drop a
    // newly-introduced `as local` alias, so mutating in place loses it.
    const localName = spec.local.name;
    changed = true;
    return j.importSpecifier(j.identifier(renamed), j.identifier(localName));
  });
  return changed;
}

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasChanges = false;

  root.find(j.ImportDeclaration).forEach(path => {
    // Remap collapsed-theme export names BEFORE rewriting the source specifier
    // (the check keys off the original @xds/theme-default|daily path).
    if (isCollapsedThemeSource(path.node.source.value)) {
      hasChanges = remapThemeExportNames(path, j) || hasChanges;
    }
    hasChanges = rewriteLiteral(path.node.source) || hasChanges;
  });

  root.find(j.ExportNamedDeclaration).forEach(path => {
    hasChanges = rewriteLiteral(path.node.source) || hasChanges;
  });

  root.find(j.ExportAllDeclaration).forEach(path => {
    hasChanges = rewriteLiteral(path.node.source) || hasChanges;
  });

  root.find(j.CallExpression).forEach(path => {
    const isDynamicImport = path.node.callee.type === 'Import';
    const isRequire =
      path.node.callee.type === 'Identifier' &&
      path.node.callee.name === 'require';
    if (!isDynamicImport && !isRequire) return;
    const [arg] = path.node.arguments;
    if (arg?.type === 'StringLiteral' || arg?.type === 'Literal') {
      hasChanges = rewriteLiteral(arg) || hasChanges;
    }
  });

  return hasChanges ? root.toSource() : undefined;
}
