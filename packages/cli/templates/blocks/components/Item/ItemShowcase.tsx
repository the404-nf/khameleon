// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Item} from '@khameleon/core/Item';
import {Avatar} from '@khameleon/core/Avatar';
import {Badge} from '@khameleon/core/Badge';
import {Icon} from '@khameleon/core/Icon';
import {Text} from '@khameleon/core/Text';
import {Stack} from '@khameleon/core/Layout';
import {UserIcon, DocumentIcon, BellIcon} from '@heroicons/react/24/outline';

export default function ItemShowcase() {
  return (
    <Stack gap={0}>
      <Item
        startContent={<Avatar name="Alice Johnson" size={40} />}
        label="Alice Johnson"
        description="Engineering Lead"
        endContent={<Badge label="Admin" />}
        onClick={() => {}}
      />
      <Item
        startContent={<Icon icon={BellIcon} size="sm" />}
        label="Build completed successfully"
        description="Pipeline #4521 — all 42 tests passed"
        endContent={<Text color="secondary">5h ago</Text>}
        descriptionLines={1}
        onClick={() => {}}
      />
      <Item
        startContent={<Icon icon={DocumentIcon} size="sm" />}
        label="design-spec.pdf"
        description="Modified 2 hours ago"
        endContent={<Text color="secondary">2.4 MB</Text>}
        isSelected
        onClick={() => {}}
      />
      <Item
        startContent={<Icon icon={UserIcon} size="sm" />}
        label="Compact menu item"
        density="compact"
        onClick={() => {}}
      />
    </Stack>
  );
}
