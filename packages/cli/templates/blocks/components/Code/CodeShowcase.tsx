// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Code} from '@khameleon/core/CodeBlock';
import {Text} from '@khameleon/core/Text';
import {Stack} from '@khameleon/core/Layout';

export default function CodeShowcase() {
  return (
    <Stack direction="vertical" gap={3}>
      <Text type="body">
        Run <Code>npm install @khameleon/core</Code> to add the package.
      </Text>
      <Text type="body">
        Use the <Code>variant</Code> prop to switch between{' '}
        <Code>primary</Code>, <Code>secondary</Code>, and{' '}
        <Code>ghost</Code> styles.
      </Text>
    </Stack>
  );
}
