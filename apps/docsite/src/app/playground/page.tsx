// Copyright (c) Meta Platforms, Inc. and affiliates.

import type {Metadata} from 'next';
import {Suspense} from 'react';
import {PlaygroundClient} from './PlaygroundClient';

export const metadata: Metadata = {
  title: 'Khameleon Playground',
  description: 'Interactive code playground for Khameleon components',
};

export default function PlaygroundPage() {
  return (
    <Suspense fallback={null}>
      <PlaygroundClient />
    </Suspense>
  );
}
