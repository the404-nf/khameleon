// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {Tokenizer} from '@khameleon/core/Tokenizer';
import type {SearchableItem, SearchSource} from '@khameleon/core/Typeahead';

const source: SearchSource = {
  search: () => [],
  bootstrap: () => [],
};

export default function TokenizerShowcase() {
  const [value, setValue] = useState<SearchableItem[]>([
    {id: '1', label: 'Design'},
    {id: '2', label: 'Engineering'},
  ]);
  return (
    <Tokenizer
      label="Tags"
      placeholder="Search..."
      searchSource={source}
      value={value}
      onChange={setValue}
      style={{width: 400}}
    />
  );
}
