// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {Popover} from '@khameleon/core/Popover';
import {Button} from '@khameleon/core/Button';
import {VStack} from '@khameleon/core/Layout';
import {Heading} from '@khameleon/core/Text';
import {Switch} from '@khameleon/core/Switch';
import {Divider} from '@khameleon/core/Divider';
export default function PopoverSettingsPanel() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sounds, setSounds] = useState(true);

  return (
    <Popover
      placement="below"
      label="Settings"
      width={280}
      content={
        <VStack gap={3}>
          <Heading level={4}>Settings</Heading>
          <Divider />
          <Switch
            label="Notifications"
            description="Receive push notifications"
            value={notifications}
            onChange={setNotifications}
          />
          <Switch
            label="Dark mode"
            description="Use dark color theme"
            value={darkMode}
            onChange={setDarkMode}
          />
          <Switch
            label="Sounds"
            description="Play sounds for actions"
            value={sounds}
            onChange={setSounds}
          />
        </VStack>
      }>
      <Button label="Settings">Settings</Button>
    </Popover>
  );
}
