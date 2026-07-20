// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Avatar, AvatarStatusDot} from '@khameleon/core/Avatar';
import {Stack} from '@khameleon/core/Layout';

export default function AvatarWithStatus() {
  return (
    <Stack direction="horizontal" gap={4} vAlign="center">
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Itai-Jordaan.png"
        name="Itai Jordaan"
        size="large"
        status={<AvatarStatusDot variant="success" label="Online" />}
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Margot-Schroder.png"
        name="Margot Schroder"
        size="large"
        status={<AvatarStatusDot variant="neutral" label="Offline" />}
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Pablo-Morales.png"
        name="Pablo Morales"
        size="large"
        status={<AvatarStatusDot variant="error" label="Busy" />}
      />
    </Stack>
  );
}
