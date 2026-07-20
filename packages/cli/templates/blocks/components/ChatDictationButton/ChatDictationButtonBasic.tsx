// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useRef} from 'react';
import {
  ChatDictationButton,
  ChatComposer,
  ChatComposerInput,
  useChatDictation,
} from '@khameleon/core/Chat';
import type {ChatComposerInputHandle} from '@khameleon/core/Chat';
import {Stack} from '@khameleon/core/Layout';

export default function ChatDictationButtonBasic() {
  const inputRef = useRef<ChatComposerInputHandle>(null);

  const dictation = useChatDictation({
    inputRef,
    onResult: text => {
      console.log('Dictation result:', text);
    },
  });

  return (
    <Stack direction="vertical" width="100%" style={{maxWidth: 450}}>
      <ChatComposer
        onSubmit={value => console.log('Submit:', value)}
        input={<ChatComposerInput handleRef={inputRef} />}
        sendActions={<ChatDictationButton dictation={dictation} />}
      />
    </Stack>
  );
}
