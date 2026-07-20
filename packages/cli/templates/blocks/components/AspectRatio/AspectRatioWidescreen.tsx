// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Center} from '@khameleon/core/Center';

export default function AspectRatioWidescreen() {
  return (
    <Center width={600}>
      <AspectRatio ratio={16 / 9} fit="cover">
        <img
          src="https://lookaside.facebook.com/assets/khameleon/light-scene-horizontal-1.png"
          alt="16:9 widescreen"
        />
      </AspectRatio>
    </Center>
  );
}
