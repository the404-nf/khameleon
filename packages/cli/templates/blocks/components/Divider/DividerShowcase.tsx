// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Divider} from '@khameleon/core/Divider';
import {Stack} from '@khameleon/core/Layout';

export default function DividerShowcase() {
  return (
    <Stack direction="vertical" gap={4} style={{width: 500}}>
      <Divider variant="subtle" />
      <Divider variant="strong" />
      <Divider label="or" />
    </Stack>
  );
}
