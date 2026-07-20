// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Avatar} from '@khameleon/core/Avatar';
import {AvatarGroup, AvatarGroupOverflow} from '@khameleon/core/AvatarGroup';
import {Stack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

const USERS = [
  {
    name: 'Ami Pena',
    src: 'https://lookaside.facebook.com/assets/khameleon/DATA-Ami-Pena.png',
  },
  {
    name: 'Drew Young',
    src: 'https://lookaside.facebook.com/assets/khameleon/DATA-Drew-Young.png',
  },
  {
    name: 'Gabriela Fernandez',
    src: 'https://lookaside.facebook.com/assets/khameleon/DATA-Gabriela-Fernandez.png',
  },
  {
    name: 'Jihoo Song',
    src: 'https://lookaside.facebook.com/assets/khameleon/DATA-Jihoo-Song.png',
  },
  {
    name: 'Nam Tran',
    src: 'https://lookaside.facebook.com/assets/khameleon/DATA-Nam-Tran.png',
  },
];

export default function AvatarGroupBlock() {
  return (
    <Stack direction="vertical" gap={8}>
      <Stack direction="vertical" gap={3}>
        <Text type="supporting" color="secondary">
          Team members
        </Text>
        <AvatarGroup size="medium">
          {USERS.map(user => (
            <Avatar key={user.name} src={user.src} name={user.name} />
          ))}
          <AvatarGroupOverflow count={3} />
        </AvatarGroup>
      </Stack>
      <Stack direction="vertical" gap={3}>
        <Text type="supporting" color="secondary">
          Larger group
        </Text>
        <AvatarGroup size="medium">
          {USERS.slice(0, 3).map(user => (
            <Avatar key={user.name} src={user.src} name={user.name} />
          ))}
          <AvatarGroupOverflow count={8} />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}
