// Copyright (c) Meta Platforms, Inc. and affiliates.
'use client';

import {Avatar} from '@khameleon/core/Avatar';
import {AvatarGroup, AvatarGroupOverflow} from '@khameleon/core/AvatarGroup';
import {Stack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

const REVIEWERS = [
  {
    name: 'Alex Daniels',
  },
  {
    name: 'Ann Smith',
  },
  {
    name: 'Carol Davis',
  },
];

export default function AvatarGroupOverflowDefault() {
  return (
    <Stack direction="vertical" gap={3}>
      <Text type="supporting" color="secondary">
        Reviewers
      </Text>
      <AvatarGroup size="medium">
        {REVIEWERS.map(reviewer => (
          <Avatar key={reviewer.name} name={reviewer.name} />
        ))}
        <AvatarGroupOverflow count={2} />
      </AvatarGroup>
    </Stack>
  );
}
