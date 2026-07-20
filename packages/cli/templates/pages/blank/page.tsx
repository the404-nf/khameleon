// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Layout, LayoutContent} from '@khameleon/core';
import {Text} from '@khameleon/core';

export default function Page() {
  return (
    <Layout
      content={
        <LayoutContent>
          <Text type="large">New Page</Text>
        </LayoutContent>
      }
    />
  );
}
