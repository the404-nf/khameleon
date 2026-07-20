// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ChatComposer, ChatComposerDrawer} from '@khameleon/core/Chat';
import {Token} from '@khameleon/core/Token';
import {Thumbnail} from '@khameleon/core/Thumbnail';
import {Carousel} from '@khameleon/core/Carousel';
import {Stack} from '@khameleon/core/Layout';

const IMAGE_ATTACHMENTS = [
  {
    id: '1',
    src: 'https://lookaside.facebook.com/assets/khameleon/illustrative-vertical-1.png',
    alt: 'River through a valley',
    label: 'valley.jpg',
  },
  {
    id: '2',
    src: 'https://lookaside.facebook.com/assets/khameleon/illustrative-vertical-2.png',
    alt: 'Foggy mountain peak',
    label: 'mountain.jpg',
  },
  {
    id: '3',
    src: 'https://lookaside.facebook.com/assets/khameleon/illustrative-vertical-3.png',
    alt: 'Golden retriever puppy',
    label: 'puppy.jpg',
  },
  {
    id: '4',
    src: 'https://lookaside.facebook.com/assets/khameleon/illustrative-vertical-4.png',
    alt: 'Bridge at sunset',
    label: 'bridge.jpg',
  },
  {
    id: '5',
    src: 'https://lookaside.facebook.com/assets/khameleon/illustrative-vertical-5.png',
    alt: 'Lakeside at dusk',
    label: 'lakeside.jpg',
  },
];

export default function ChatComposerDrawerAttachments() {
  return (
    <Stack direction="vertical" gap={4} width={480}>
      <ChatComposer
        onSubmit={() => {}}
        drawer={
          <ChatComposerDrawer>
            <Stack direction="vertical" gap={2} width="100%">
              <Carousel gap={1}>
                {IMAGE_ATTACHMENTS.map(img => (
                  <Thumbnail
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    label={img.label}
                    onRemove={() => {}}
                  />
                ))}
              </Carousel>
              <Stack direction="horizontal" gap={1} wrap="wrap">
                <Token label="quarterly-report.pdf" onRemove={() => {}} />
                <Token label="budget-forecast.xlsx" onRemove={() => {}} />
              </Stack>
            </Stack>
          </ChatComposerDrawer>
        }
      />
    </Stack>
  );
}
