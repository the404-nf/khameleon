// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {CodeBlock} from '@khameleon/core/CodeBlock';
import {VStack} from '@khameleon/core/Stack';

export default function CodeBlockBashCommand() {
  return (
    <VStack gap={4} style={{width: '100%', maxWidth: 400}}>
      <CodeBlock
        code="npm install @khameleon/core"
        language="bash"
        hasCopyButton
        style={{width: '100%'}}
      />
      <CodeBlock
        code="yarn add @khameleon/theme-neutral"
        language="bash"
        hasCopyButton
        style={{width: '100%'}}
      />
    </VStack>
  );
}
