// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Toolbar} from '@khameleon/core/Toolbar';
import {Button} from '@khameleon/core/Button';
import {Icon} from '@khameleon/core/Icon';
import {Heading} from '@khameleon/core/Text';
import {Stack} from '@khameleon/core/Layout';
import {Card} from '@khameleon/core/Card';
import {FunnelIcon, PlusIcon} from '@heroicons/react/24/outline';

const SIZES = [
  {size: 'sm' as const, label: 'Small'},
  {size: 'md' as const, label: 'Medium'},
  {size: 'lg' as const, label: 'Large'},
];

export default function ToolbarSizes() {
  return (
    <Stack direction="vertical" gap={4} style={{width: 500}}>
      {SIZES.map(({size, label}) => (
        <Card key={size}>
          <Toolbar
            label={`${label} toolbar`}
            size={size}
            startContent={<Heading level={4}>{label}</Heading>}
            endContent={
              <>
                <Button
                  label="Filter"
                  variant="ghost"
                  icon={<Icon icon={FunnelIcon} />}
                  isIconOnly
                />
                <Button label="Add" icon={<Icon icon={PlusIcon} />} />
              </>
            }
          />
        </Card>
      ))}
    </Stack>
  );
}
