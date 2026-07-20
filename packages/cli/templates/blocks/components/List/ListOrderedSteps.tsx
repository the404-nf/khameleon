// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {List, ListItem} from '@khameleon/core/List';

export default function ListOrderedSteps() {
  return (
    <List listStyle="decimal">
      <ListItem
        label="Install the package"
        description="npm install @khameleon/core"
      />
      <ListItem
        label="Import components"
        description="import { List } from '@khameleon/core'"
      />
      <ListItem
        label="Start building"
        description="Use components in your app"
      />
    </List>
  );
}
