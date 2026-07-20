// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Spinner} from '@khameleon/core/Spinner';
import {HStack} from '@khameleon/core/Layout';

export default function SpinnerOnMedia() {
  return (
    <HStack gap={4} vAlign="center">
      <Spinner shade="default" />
      <div
        style={{
          backgroundColor: '#1a1a2e',
          padding: 16,
          borderRadius: 8,
        }}>
        <Spinner shade="onMedia" />
      </div>
    </HStack>
  );
}
