// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@khameleon/core/Card';
import {VStack} from '@khameleon/core/Stack';
import {HStack} from '@khameleon/core/Stack';
import {Text} from '@khameleon/core/Text';
import {Heading} from '@khameleon/core/Text';
import {ProgressBar} from '@khameleon/core/ProgressBar';
import {formatScore, scoreToProgressVariant} from './utils';
import './report.css';

interface ScoreCardProps {
  label: string;
  score: number;
  compareScore?: number;
  compareLabel?: string;
}

function deltaClassName(delta: number): string {
  if (delta > 0) {
    return 'report-color-positive';
  }
  if (delta < 0) {
    return 'report-color-negative';
  }
  return 'report-color-neutral';
}

export function ScoreCard({
  label,
  score,
  compareScore,
  compareLabel,
}: ScoreCardProps) {
  const delta = compareScore != null ? score - compareScore : undefined;

  return (
    <Card>
      <div className="report-scoreCard-card">
        <VStack gap={2}>
          <Text type="label">{label}</Text>
          <HStack gap={2} hAlign="center">
            <Heading level={2}>{formatScore(score)}</Heading>
            {delta != null && (
              <Text type="supporting" className={deltaClassName(delta)}>
                {delta > 0 ? '+' : ''}
                {formatScore(delta)}
                {compareLabel ? ` vs ${compareLabel}` : ''}
              </Text>
            )}
          </HStack>
          <ProgressBar
            label={label}
            isLabelHidden
            value={score}
            max={100}
            variant={scoreToProgressVariant(score)}
            size="sm"
          />
        </VStack>
      </div>
    </Card>
  );
}
