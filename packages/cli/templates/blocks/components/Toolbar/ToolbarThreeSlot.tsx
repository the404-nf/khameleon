// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Toolbar} from '@khameleon/core/Toolbar';
import {Button} from '@khameleon/core/Button';
import {Icon} from '@khameleon/core/Icon';
import {Heading} from '@khameleon/core/Text';
import {Card} from '@khameleon/core/Card';
import {Section} from '@khameleon/core/Section';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';

export default function ToolbarThreeSlot() {
  return (
    <Card style={{width: 600, height: '100%', marginTop: 260}}>
      <Toolbar
        label="Document toolbar"
        dividers={['bottom']}
        startContent={
          <Button
            label="Back"
            variant="ghost"
            icon={<Icon icon={ArrowLeftIcon} />}
            isIconOnly
          />
        }
        centerContent={<Heading level={4}>Title</Heading>}
        endContent={
          <>
            <Button label="Discard" variant="secondary" />
            <Button label="Save" variant="primary" />
          </>
        }
      />
      <Section />
    </Card>
  );
}
