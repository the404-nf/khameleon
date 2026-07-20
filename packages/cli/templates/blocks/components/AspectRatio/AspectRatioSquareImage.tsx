// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Center} from '@khameleon/core/Center';

export default function AspectRatioSquareImage() {
  return (
    <Center width={300}>
      <AspectRatio ratio={1} fit="cover">
        <img
          src="https://lookaside.facebook.com/assets/khameleon/light-home-square-1.png"
          alt="1:1 square"
        />
      </AspectRatio>
    </Center>
  );
}
