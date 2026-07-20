// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ChatComposer, ChatComposerDrawer} from '@khameleon/core/Chat';
import {Token} from '@khameleon/core/Token';
import {Button} from '@khameleon/core/Button';
import {Icon} from '@khameleon/core/Icon';
import {Stack} from '@khameleon/core/Layout';
import {PaperClipIcon} from '@heroicons/react/24/outline';
import type {CSSProperties} from 'react';

const drawerBorder: CSSProperties = {
  border: 'var(--border-width) solid var(--color-border)',
  borderRadius: 'var(--radius-chat)',
};

export default function ChatComposerDrawerShowcase() {
  return (
    <Stack direction="vertical" gap={4} width={480}>
      <ChatComposer
        onSubmit={() => {}}
        drawer={
          <ChatComposerDrawer
            count={4}
            label="Attachments"
            style={drawerBorder}>
            <Token label="design-spec.pdf" onRemove={() => {}} />
            <Token label="api-schema.json" onRemove={() => {}} />
            <Token label="screenshot.png" onRemove={() => {}} />
            <Token label="meeting-notes.md" onRemove={() => {}} />
          </ChatComposerDrawer>
        }
        headerActions={
          <Button
            label="Attach"
            variant="ghost"
            size="sm"
            icon={<Icon icon={PaperClipIcon} size="sm" />}
            isIconOnly
            onClick={() => {}}
          />
        }
      />
    </Stack>
  );
}
