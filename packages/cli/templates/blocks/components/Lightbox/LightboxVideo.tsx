// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {Lightbox} from '@khameleon/core/Lightbox';
import {Button} from '@khameleon/core/Button';

export default function LightboxVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Play video" onClick={() => setIsOpen(true)} />
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={{
          src: 'https://lookaside.facebook.com/assets/?set=khameleon&name=Nature-1&density=1',
          alt: 'Flower blooming in time-lapse',
          type: 'video',
          caption: 'A flower blooming in time-lapse',
        }}
      />
    </>
  );
}
