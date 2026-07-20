// Copyright (c) Meta Platforms, Inc. and affiliates.

import {describe, it, expect} from 'vitest';
import {
  NAMESPACE,
  classPrefix,
  dataAttrNamespace,
  cssVarNamespace,
  stableClassName,
  dataAttr,
  cssVar,
} from './naming';

describe('naming constants', () => {
  it('exposes the namespace prefix', () => {
    expect(NAMESPACE).toBe('khameleon');
  });

  it('derives per-surface prefixes from the namespace', () => {
    expect(classPrefix).toBe('khameleon');
    expect(dataAttrNamespace).toBe('khameleon');
    expect(cssVarNamespace).toBe('khameleon');
  });
});

describe('stableClassName', () => {
  it('builds namespace class tokens', () => {
    expect(stableClassName('button')).toBe('khameleon-button');
    expect(stableClassName('card')).toBe('khameleon-card');
  });
});

describe('dataAttr', () => {
  it('builds namespace data attribute names', () => {
    expect(dataAttr('theme')).toBe('data-khameleon-theme');
    expect(dataAttr('media')).toBe('data-khameleon-media');
  });
});

describe('cssVar', () => {
  it('builds namespace custom property names', () => {
    expect(cssVar('card-padding')).toBe('--khameleon-card-padding');
  });
});
