// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {
  Layout,
  LayoutHeader,
  LayoutContent,
  Card,
  HStack,
} from '@khameleon/core/Layout';
import {Center} from '@khameleon/core/Center';
import {Heading} from '@khameleon/core/Text';
import {Button} from '@khameleon/core/Button';

export default function LayoutHeaderWithActions() {
  return (
    <Center width={400}>
      <Layout
        style={{width: '100%'}}
        height="fill"
        header={
          <LayoutHeader hasDivider>
            <HStack gap={2} vAlign="center" hAlign="between">
              <Heading level={4}>Dashboard</Heading>
              <Button label="New Item" variant="primary">
                New Item
              </Button>
            </HStack>
          </LayoutHeader>
        }
        content={
          <LayoutContent>
            <Card variant="muted" />
          </LayoutContent>
        }
      />
    </Center>
  );
}
