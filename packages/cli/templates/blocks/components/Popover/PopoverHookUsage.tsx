// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {usePopover} from '@khameleon/core/Popover';
import {Button} from '@khameleon/core/Button';
import {Card} from '@khameleon/core/Card';
import {Center} from '@khameleon/core/Center';
import {VStack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function PopoverHookUsage() {
  const popover = usePopover({dialogLabel: 'Quick actions'});

  return (
    <Center height={240}>
      <Button
        label="Open actions"
        ref={popover.triggerRef}
        onClick={popover.toggle}
        {...popover.triggerProps}
      />
      {popover.render(
        <Card width={220} padding={3} variant="transparent">
          <VStack gap={2}>
            <Text type="body" weight="bold">
              Quick actions
            </Text>
            <Button label="Create task" size="sm" />
            <Button label="Share report" variant="secondary" size="sm" />
          </VStack>
        </Card>,
        {placement: 'below', alignment: 'center'},
      )}
    </Center>
  );
}
