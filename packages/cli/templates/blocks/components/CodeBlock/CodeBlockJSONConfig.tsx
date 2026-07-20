// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {CodeBlock} from '@khameleon/core/CodeBlock';

const code = `{
  "name": "@khameleon/core",
  "version": "0.0.5",
  "dependencies": {
    "@khameleon/theme-neutral": "^0.1.0",
    "react": "^19.0.0"
  },
  "scripts": {
    "build": "tsup",
    "test": "vitest"
  }
}`;

export default function CodeBlockJSONConfig() {
  return (
    <CodeBlock
      code={code}
      language="json"
      title="package.json"
      hasLineNumbers
    />
  );
}
