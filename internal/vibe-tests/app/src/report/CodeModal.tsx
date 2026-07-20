// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Dialog} from '@khameleon/core/Dialog';
import {VStack} from '@khameleon/core/Stack';
import {Text} from '@khameleon/core/Text';
import {Heading} from '@khameleon/core/Text';
import {Button} from '@khameleon/core/Button';
import {Icon} from '@khameleon/core/Icon';
import './report.css';

interface CodeModalProps {
  isOpen: boolean;
  onHide: () => void;
  promptId: string;
  target: 'khameleon' | 'baseline' | 'html';
  code: string;
}

export function CodeModal({
  isOpen,
  onHide,
  promptId,
  target,
  code,
}: CodeModalProps) {
  const targetLabel =
    target === 'khameleon' ? 'Khameleon' : target === 'baseline' ? 'Baseline' : 'HTML';
  const lineCount = code.split('\n').length;

  return (
    <Dialog
      isOpen={isOpen}
      onHide={onHide}
      purpose="info"
      width={800}
      aria-label={`${targetLabel} code for ${promptId}`}>
      <div className="report-codeModal-header">
        <VStack gap={1}>
          <Heading level={3}>
            {promptId} — {targetLabel}
          </Heading>
          <Text type="supporting">{lineCount} lines</Text>
        </VStack>
        <Button
          variant="ghost"
          label="Close"
          tooltip="Close"
          icon={<Icon icon="close" color="inherit" />}
          onClick={onHide}
        />
      </div>
      <div className="report-codeModal-content">
        <div className="report-codeModal-codeBlock">{code}</div>
      </div>
    </Dialog>
  );
}
