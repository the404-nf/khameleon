// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {AspectRatio} from '@khameleon/core/AspectRatio';
import {Skeleton} from '@khameleon/core/Skeleton';
import {Center} from '@khameleon/core/Center';

export default function AspectRatioWithSkeleton() {
  return (
    <Center width={600}>
      <AspectRatio ratio={16 / 9}>
        <Skeleton width="100%" height="100%" />
      </AspectRatio>
    </Center>
  );
}
