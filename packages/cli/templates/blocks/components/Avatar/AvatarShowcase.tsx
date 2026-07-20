// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Avatar, AvatarStatusDot} from '@khameleon/core/Avatar';
import {Stack} from '@khameleon/core/Layout';

export default function AvatarShowcase() {
  return (
    <Stack direction="horizontal" gap={4} vAlign="center">
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Ana-Thomas.png"
        name="Ana Thomas"
        size="large"
        status={<AvatarStatusDot variant="success" label="Online" />}
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Drew-Young.png"
        name="Drew Young"
        size="large"
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Jihoo-Song.png"
        name="Jihoo Song"
        size="large"
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Nam-Tran.png"
        name="Nam Tran"
        size="large"
        status={<AvatarStatusDot variant="error" label="Online" />}
      />
    </Stack>
  );
}
