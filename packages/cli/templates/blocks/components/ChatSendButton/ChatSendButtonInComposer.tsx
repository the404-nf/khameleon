// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ChatComposer} from '@khameleon/core/Chat';
import {Stack} from '@khameleon/core/Layout';

export default function ChatSendButtonInComposer() {
  return (
    <Stack direction="vertical" width="100%" style={{maxWidth: 450}}>
      <ChatComposer
        onSubmit={() => {}}
        value="Hello, how can you help?"
        onChange={() => {}}
      />
    </Stack>
  );
}
