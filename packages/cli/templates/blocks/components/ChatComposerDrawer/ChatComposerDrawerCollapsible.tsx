// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ChatComposer, ChatComposerDrawer} from '@khameleon/core/Chat';
import {Token} from '@khameleon/core/Token';
import {Stack} from '@khameleon/core/Layout';

export default function ChatComposerDrawerCollapsible() {
  return (
    <Stack direction="vertical" gap={4} width={480}>
      <ChatComposer
        onSubmit={() => {}}
        drawer={
          <ChatComposerDrawer count={6} label="Files">
            <Token label="design-spec.pdf" onRemove={() => {}} />
            <Token label="api-schema.json" onRemove={() => {}} />
            <Token label="screenshot.png" onRemove={() => {}} />
            <Token label="meeting-notes.md" onRemove={() => {}} />
            <Token label="test-results.csv" onRemove={() => {}} />
            <Token label="deploy-log.txt" onRemove={() => {}} />
          </ChatComposerDrawer>
        }
      />
    </Stack>
  );
}
