// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ClickableCard} from '@khameleon/core/ClickableCard';
import {Stack} from '@khameleon/core/Layout';
import {Text, Heading} from '@khameleon/core/Text';
import {Button} from '@khameleon/core/Button';

export default function ClickableCardWithNestedButton() {
  return (
    <ClickableCard label="Product" href="#" width={320}>
      <Stack direction="vertical" gap={3}>
        <Stack direction="vertical" gap={1}>
          <Heading level={4}>Wireless Headphones</Heading>
          <Text type="body" color="secondary">
            $79.99
          </Text>
        </Stack>
        <Button label="Add to cart" onClick={() => {}} variant="primary" />
      </Stack>
    </ClickableCard>
  );
}
