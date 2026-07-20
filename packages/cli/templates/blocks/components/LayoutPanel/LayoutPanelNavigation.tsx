// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {
  Layout,
  LayoutPanel,
  LayoutContent,
  Card,
} from '@khameleon/core/Layout';
import {Center} from '@khameleon/core/Center';
import {List, ListItem} from '@khameleon/core/List';

export default function LayoutPanelNavigation() {
  return (
    <Center width={400}>
      <Layout
        style={{width: '100%'}}
        height="fill"
        start={
          <LayoutPanel hasDivider width={140} role="navigation">
            <List>
              <ListItem label="Overview" isSelected />
              <ListItem label="Analytics" />
              <ListItem label="Settings" />
            </List>
          </LayoutPanel>
        }
        content={
          <LayoutContent>
            <Card variant="muted" />
          </LayoutContent>
        }
      />
    </Center>
  );
}
