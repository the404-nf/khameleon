// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {SyntaxTheme} from '@khameleon/core/theme';
import {dracula} from '@khameleon/core/theme/syntax';
import {CodeBlock} from '@khameleon/core/CodeBlock';

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`;

export default function SyntaxThemeDarkPreset() {
  return (
    <SyntaxTheme theme={dracula}>
      <CodeBlock code={code} language="tsx" title="Dracula preset" />
    </SyntaxTheme>
  );
}
