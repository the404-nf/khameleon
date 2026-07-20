// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {SyntaxTheme} from '@khameleon/core/theme';
import {githubLight} from '@khameleon/core/theme/syntax';
import {CodeBlock} from '@khameleon/core/CodeBlock';

const code = `const status = response.ok ? 'success' : 'error';
console.log({status});`;

export default function SyntaxThemeLightPreset() {
  return (
    <SyntaxTheme theme={githubLight}>
      <CodeBlock code={code} language="tsx" title="GitHub Light preset" />
    </SyntaxTheme>
  );
}
