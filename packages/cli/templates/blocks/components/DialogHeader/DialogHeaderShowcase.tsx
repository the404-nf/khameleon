// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Dialog, DialogHeader} from '@khameleon/core/Dialog';
import {Layout, LayoutContent, Card} from '@khameleon/core/Layout';
import {Text} from '@khameleon/core/Text';

export default function DialogHeaderShowcase() {
  return (
    <Dialog isOpen isInline onOpenChange={() => {}}>
      <Layout
        header={
          <DialogHeader
            title="Edit Profile"
            subtitle="Update your personal information"
            onOpenChange={() => {}}
          />
        }
        content={
          <LayoutContent>
            <Card variant="muted">
              <Text type="body" color="secondary">
                Dialog body content goes here.
              </Text>
            </Card>
          </LayoutContent>
        }
      />
    </Dialog>
  );
}
