// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Codemod: migrate `declare module "@xds/..."` augmentations to
 * `@khameleon/...`
 *
 * The v0.1.0 release moved the public package scope from @xds to
 * @khameleon. TypeScript module augmentations (`declare module "@xds/core"
 * { ... }`) reference the package by its string specifier, so they are dead
 * after the scope rename: TypeScript resolves the augmentation against a
 * module that no longer exists.
 *
 * This transform rewrites the augmented module string on `TSModuleDeclaration`
 * nodes whose `id` is a StringLiteral matching a renamed @xds package (or one
 * of its subpaths). It only touches the module path — identifiers *inside* the
 * augmentation (e.g. an augmented interface name) are a separate concern
 * handled by drop-xds-prefix-imports.
 *
 * Ordered AFTER migrate-xds-module-specifiers in the v0.1.0 manifest: it uses
 * the same PACKAGE_RENAMES mapping and cleans up the module-augmentation
 * surface alongside the import/export/require specifier rename.
 */

export const meta = {
  title: 'Migrate declare-module augmentations from @xds/* to @khameleon/*',
  description:
    'Rewrites the module specifier on TypeScript `declare module "@xds/..."` ' +
    'augmentations to the @khameleon/* packages used by Khameleon v0.1.0. ' +
    'Only the augmented module path is changed; identifiers inside the ' +
    'augmentation are left untouched.',
  pr: '#3092',
  fileExtensions: ['.ts', '.d.ts', '.tsx'],
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

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasChanges = false;

  root.find(j.TSModuleDeclaration).forEach(path => {
    const id = path.node.id;
    // Module augmentations name the module with a string literal id; a
    // `namespace Foo {}` uses an Identifier id, which we ignore.
    if (!id || (id.type !== 'StringLiteral' && id.type !== 'Literal')) return;
    if (typeof id.value !== 'string') return;
    const next = renamePackageSpecifier(id.value);
    if (next === id.value) return;
    id.value = next;
    hasChanges = true;
  });

  return hasChanges ? root.toSource() : undefined;
}
