// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {Calendar, type ISODateString} from '@khameleon/core/Calendar';
import {Stack} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function CalendarSingle() {
  const [value, setValue] = useState<ISODateString>('2026-01-15');

  return (
    <Stack direction="vertical" gap={4} hAlign="center">
      <Text type="supporting" color="secondary">
        {value ? `Selected: ${value}` : 'Pick a date'}
      </Text>
      <Calendar
        mode="single"
        value={value}
        onChange={val => setValue(val)}
        focusDate="2026-01-01"
      />
    </Stack>
  );
}
