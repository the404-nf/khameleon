// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {Lightbox} from '@khameleon/core/Lightbox';
import {Thumbnail} from '@khameleon/core/Thumbnail';

export default function LightboxZoom() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Thumbnail
        src="https://lookaside.facebook.com/assets/khameleon/light-scene-horizontal-1.png"
        alt="Coastal shoreline with ocean waves"
        label="Coastal shoreline with ocean waves"
        onClick={() => setIsOpen(true)}
      />
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={{
          src: 'https://lookaside.facebook.com/assets/khameleon/light-scene-horizontal-1.png',
          alt: 'Coastal shoreline with ocean waves',
          caption:
            'A scenic coastline. Double-click to zoom in and drag to pan.',
        }}
        hasZoom
      />
    </>
  );
}
