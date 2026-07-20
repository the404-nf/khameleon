// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {NavIcon} from '@khameleon/core/NavIcon';
import {Icon} from '@khameleon/core/Icon';
import {HStack} from '@khameleon/core/Layout';

export default function NavIconBasic() {
  return (
    <HStack gap={4} vAlign="center">
      <NavIcon icon={<Icon icon="search" />} />
      <NavIcon icon={<Icon icon="calendar" />} />
    </HStack>
  );
}
