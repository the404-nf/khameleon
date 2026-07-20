// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {Breadcrumbs, BreadcrumbItem} from '@khameleon/core/Breadcrumbs';
import {Icon} from '@khameleon/core/Icon';
import {HomeIcon} from '@heroicons/react/24/outline';

export default function BreadcrumbsDeepHierarchy() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem
        href="/"
        startIcon={<Icon icon={HomeIcon} size="sm" />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">
        Electronics
      </BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics/phones">
        Phones
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>iPhone 15 Pro</BreadcrumbItem>
    </Breadcrumbs>
  );
}
