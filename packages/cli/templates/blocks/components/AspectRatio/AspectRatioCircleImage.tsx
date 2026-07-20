// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Center} from '@khameleon/core/Center';

export default function AspectRatioCircleImage() {
  return (
    <Center width={300}>
      <AspectRatio ratio={1} shape="ellipse" fit="cover">
        <img
          src="https://lookaside.facebook.com/assets/khameleon/light-home-square-1.png"
          alt="Circular image"
        />
      </AspectRatio>
    </Center>
  );
}
