// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {HStack, StackItem} from '@khameleon/core/Layout';
import {Card} from '@khameleon/core/Card';
import {Text} from '@khameleon/core/Text';

export default function StackItemShowcase() {
  return (
    <HStack gap={3} vAlign="center" width="100%" style={{maxWidth: 500}}>
      <StackItem size="static">
        <Card padding={3}>
          <Text type="supporting" color="secondary">
            Static Width
          </Text>
        </Card>
      </StackItem>
      <StackItem size="fill">
        <Card padding={3}>
          <Text type="supporting" color="secondary">
            Fills remaining space
          </Text>
        </Card>
      </StackItem>
      <StackItem size="static">
        <Card padding={3}>
          <Text type="supporting" color="secondary">
            Static Width
          </Text>
        </Card>
      </StackItem>
    </HStack>
  );
}
