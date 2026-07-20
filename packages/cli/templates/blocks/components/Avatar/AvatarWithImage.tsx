// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Avatar} from '@khameleon/core/Avatar';
import {Stack} from '@khameleon/core/Layout';

export default function AvatarWithImage() {
  return (
    <Stack direction="horizontal" gap={4} vAlign="center">
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Ami-Pena.png"
        name="Ami Pena"
        size="tiny"
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Ana-Thomas.png"
        name="Ana Thomas"
        size="small"
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Daniela-Gimenez.png"
        name="Daniela Gimenez"
        size="medium"
      />
      <Avatar
        src="https://lookaside.facebook.com/assets/khameleon/DATA-Gabriela-Fernandez.png"
        name="Gabriela Fernandez"
        size="large"
      />
    </Stack>
  );
}
