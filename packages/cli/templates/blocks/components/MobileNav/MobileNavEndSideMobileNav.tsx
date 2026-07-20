// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {useState} from 'react';
import {MobileNav} from '@khameleon/core/MobileNav';
import {SideNavSection, SideNavItem} from '@khameleon/core/SideNav';
import {Button} from '@khameleon/core/Button';
import {Cog6ToothIcon, UsersIcon} from '@heroicons/react/24/outline';

export default function MobileNavEndSideMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button label="Open from Right" onClick={() => setIsOpen(true)} />
      <MobileNav
        isOpen={isOpen}
        onOpenChange={open => setIsOpen(open)}
        header="Settings"
        side="end">
        <SideNavSection title="Settings">
          <SideNavItem
            label="General"
            icon={Cog6ToothIcon}
            href="/settings"
          />
          <SideNavItem label="Team" icon={UsersIcon} href="/team" />
        </SideNavSection>
      </MobileNav>
    </>
  );
}
