// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Link} from '@khameleon/core/Link';
import {Text} from '@khameleon/core/Text';

export default function LinkInlineLink() {
  return (
    <Text type="body">Read the{' '}
      <Link href="#">
        documentation
      </Link>{' '}for more information about using Khameleon components.
          </Text>
  );
}
