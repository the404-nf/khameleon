// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {MoreMenu} from '@khameleon/core/MoreMenu';

export default function MoreMenuDefaultMoreMenu() {
  return (
    <MoreMenu
      items={[
        {label: 'Edit', onClick: () => {}},
        {label: 'Duplicate', onClick: () => {}},
        {label: 'Delete', onClick: () => {}},
      ]}
    />
  );
}
