// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {TopNav, TopNavHeading} from '@khameleon/core/TopNav';
import {NavIcon} from '@khameleon/core/NavIcon';
import {Icon} from '@khameleon/core/Icon';

export default function TopNavHeadingBasic() {
  return (
    <TopNav
      label="Product navigation"
      heading={
        <TopNavHeading
          heading="Acme Platform"
          logo={<NavIcon icon={<Icon icon="viewColumns" />} />}
          headingHref="/"
        />
      }
    />
  );
}
