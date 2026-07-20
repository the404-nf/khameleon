// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {MobileNav} from '@khameleon/core/MobileNav';
import {SideNavSection, SideNavItem} from '@khameleon/core/SideNav';
import {Button} from '@khameleon/core/Button';
import {Icon} from '@khameleon/core/Icon';
import {HomeIcon, FolderIcon} from '@heroicons/react/24/outline';

export default function MobileNavWithoutTitleMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        label="Open Navigation"
        icon={<Icon icon="menu" color="inherit" />}
        variant="ghost"
        onClick={() => setIsOpen(true)}
        isIconOnly
      />
      <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)}>
        <SideNavSection title="Main">
          <SideNavItem
            label="Dashboard"
            icon={HomeIcon}
            isSelected
            href="/dashboard"
          />
          <SideNavItem label="Projects" icon={FolderIcon} href="/projects" />
        </SideNavSection>
      </MobileNav>
    </>
  );
}
