// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import {SyntaxTheme} from '@khameleon/core/theme';
import {githubDark} from '@khameleon/core/theme/syntax';
import {CodeBlock} from '@khameleon/core/CodeBlock';

const commands = `$ khameleon init --features agents
✓ AI agent docs installed → .claude/CLAUDE.md
$ pnpm khameleon component CodeBlock --dense`;

export default function CodeBlockTerminal() {
  return (
    <SyntaxTheme theme={githubDark}>
      <CodeBlock
        code={commands}
        language="bash"
        hasCopyButton
        style={{width: '100%', maxWidth: 480}}
      />
    </SyntaxTheme>
  );
}
