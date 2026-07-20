// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {ButtonGroup} from '@khameleon/core/ButtonGroup';
import {Button} from '@khameleon/core/Button';

export default function ButtonGroupBasic() {
  return (
    <ButtonGroup label="Text editing actions">
      <Button label="Copy" />
      <Button label="Cut" />
      <Button label="Paste" />
    </ButtonGroup>
  );
}
