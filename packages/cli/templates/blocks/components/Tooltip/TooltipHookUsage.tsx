// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useTooltip} from '@khameleon/core/Tooltip';
import {Button} from '@khameleon/core/Button';
import {Center} from '@khameleon/core/Center';

export default function TooltipHookUsage() {
  const tooltip = useTooltip({
    placement: 'above',
    delay: 100,
  });

  return (
    <Center>
      <Button
        label="Using hook directly"
        ref={tooltip.ref}
        aria-describedby={tooltip.describedBy}
      />
      {tooltip.renderTooltip('Tooltip via hook')}
    </Center>
  );
}
