// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ButtonGroup} from '@khameleon/core/ButtonGroup';
import {Button} from '@khameleon/core/Button';
import {IconButton} from '@khameleon/core/IconButton';
import {Stack} from '@khameleon/core/Layout';
import {Icon} from '@khameleon/core/Icon';
import {
  ClipboardDocumentIcon,
  ScissorsIcon,
  ClipboardIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function ButtonGroupShowcase() {
  return (
    <Stack direction="horizontal" gap={6} vAlign="center">
      <ButtonGroup label="Clipboard actions">
        <Button
          label="Copy"
          icon={<Icon icon={ClipboardDocumentIcon} />}
        />
        <Button label="Cut" icon={<Icon icon={ScissorsIcon} />} />
        <Button label="Paste" icon={<Icon icon={ClipboardIcon} />} />
      </ButtonGroup>
      <ButtonGroup label="Save options">
        <Button label="Save" variant="primary" />
        <IconButton
          label="Save options"
          variant="primary"
          icon={<Icon icon={ChevronDownIcon} />}
        />
      </ButtonGroup>
    </Stack>
  );
}
