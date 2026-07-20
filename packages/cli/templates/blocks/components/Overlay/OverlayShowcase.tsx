// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Overlay} from '@khameleon/core/Overlay';
import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Button} from '@khameleon/core/Button';
import {VStack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function OverlayShowcase() {
  return (
    <Overlay
      align="center"
      content={
        <VStack gap={2} style={{textAlign: 'center'}}>
          <Text type="supporting" weight="bold" color="inherit">
            Design system foundations
          </Text>
          <Button label="Open gallery" variant="secondary" size="sm" />
        </VStack>
      }>
      <AspectRatio
        ratio={16 / 9}
        style={{width: 520, maxWidth: '100%', borderRadius: 16, overflow: 'clip'}}>
        <img
          src="https://lookaside.facebook.com/assets/khameleon/light-scene-horizontal-1.png"
          alt="Abstract landscape"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </AspectRatio>
    </Overlay>
  );
}
