// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Overlay} from '@khameleon/core/Overlay';
import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Badge} from '@khameleon/core/Badge';
import {VStack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function OverlayBottomStrip() {
  return (
    <Overlay
      position="bottom"
      align="start"
      content={
        <VStack gap={1}>
          <Badge label="New" variant="green" />
          <Text type="body" weight="bold" color="inherit">
            Weekly product highlights
          </Text>
          <Text type="supporting" color="inherit">
            12 updates across templates and tokens
          </Text>
        </VStack>
      }>
      <AspectRatio
        ratio={16 / 9}
        style={{width: 420, maxWidth: '100%', borderRadius: 12, overflow: 'clip'}}>
        <img
          src="https://lookaside.facebook.com/assets/khameleon/illustrative-horizontal-1.png"
          alt="Product highlight preview"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </AspectRatio>
    </Overlay>
  );
}
