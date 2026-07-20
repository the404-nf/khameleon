// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Lightbox} from '@khameleon/core/Lightbox';

export default function LightboxShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>View image</button>
      <Lightbox
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        media={{
          src: 'https://lookaside.facebook.com/assets/khameleon/light-scene-horizontal-1.png',
          alt: 'Coastal shoreline with ocean waves',
          caption:
            'A scenic coastline with waves rolling onto a sandy beach beneath a clear sky.',
        }}
      />
    </>
  );
}
