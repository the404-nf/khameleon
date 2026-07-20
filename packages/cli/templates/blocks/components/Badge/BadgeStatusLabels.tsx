// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Badge} from '@khameleon/core/Badge';
import {Stack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function BadgeStatusLabels() {
  return (
    <Stack direction="vertical" gap={6}>
      <Stack direction="vertical" gap={2}>
        <Text type="supporting" color="secondary">
          System status
        </Text>
        <Stack direction="horizontal" gap={2} vAlign="center">
          <Badge variant="success" label="Active" />
          <Badge variant="warning" label="Pending" />
          <Badge variant="error" label="Failed" />
        </Stack>
      </Stack>
      <Stack direction="vertical" gap={2}>
        <Text type="supporting" color="secondary">
          Workflow
        </Text>
        <Stack direction="horizontal" gap={2} vAlign="center">
          <Badge variant="neutral" label="Draft" />
          <Badge variant="info" label="In Review" />
        </Stack>
      </Stack>
    </Stack>
  );
}
