// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Tooltip} from '@khameleon/core/Tooltip';
import {Button} from '@khameleon/core/Button';
import {HStack} from '@khameleon/core/Layout';
import {Center} from '@khameleon/core/Center';

export default function TooltipActionBarTooltips() {
  return (
    <Center>
      <HStack gap={4}>
        <Tooltip content="Save your changes" placement="above">
          <Button label="Save" />
        </Tooltip>
        <Tooltip content="Discard changes" placement="above">
          <Button label="Cancel" />
        </Tooltip>
        <Tooltip content="Delete permanently" placement="above">
          <Button label="Delete" variant="destructive" />
        </Tooltip>
      </HStack>
    </Center>
  );
}
