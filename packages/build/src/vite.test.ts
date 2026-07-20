// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file vite.test.ts
 * @description Verifies CSS layer-order injection in the XDS Vite plugin.
 *   The library layer name is configurable (default `khameleon-base`); the
 *   theme layer name is fixed at `khameleon-theme`.
 */

import {describe, it, expect} from 'vitest';
import {khameleonStylex} from './vite';

/** Pull the injected `@layer ...;` order statement out of the plugin set. */
function getLayerOrder(plugins: ReturnType<typeof khameleonStylex>): string {
  const layerPlugin = plugins.find(p => p.name === 'khameleon-css-layer-order');
  expect(layerPlugin, 'khameleon-css-layer-order plugin should exist').toBeTruthy();
  const transform = (layerPlugin as any).transformIndexHtml;
  const tags =
    typeof transform === 'function' ? transform() : transform.handler();
  const styleTag = tags.find((t: any) => t.tag === 'style');
  expect(styleTag, 'a <style> tag should be injected').toBeTruthy();
  return styleTag.children as string;
}

describe('khameleonStylex layer order (modern API)', () => {
  it('uses the khameleon-* layer names (theme layer is khameleon-theme)', () => {
    const order = getLayerOrder(khameleonStylex());
    expect(order).toBe('@layer reset, khameleon-base, khameleon-theme, product;');
  });

  it('honors configured library and product layer names', () => {
    const order = getLayerOrder(
      khameleonStylex({layers: {library: 'custom-base', product: 'app'}}),
    );
    // The theme layer stays khameleon-theme regardless of other layer config.
    expect(order).toBe('@layer reset, custom-base, khameleon-theme, app;');
  });
});

describe('khameleonStylex layer order (legacy API)', () => {
  it('uses the khameleon-* layer names (theme layer is khameleon-theme)', () => {
    const order = getLayerOrder(khameleonStylex({stylexOptions: {}}));
    expect(order).toBe('@layer reset, khameleon-base, khameleon-theme, product;');
  });
});
