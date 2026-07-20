// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@khameleon/core/Card';
import {VStack} from '@khameleon/core/Stack';
import {Text} from '@khameleon/core/Text';
import {Heading} from '@khameleon/core/Text';
import {Badge} from '@khameleon/core/Badge';
import {Table} from '@khameleon/core/Table';
import type {TableColumn} from '@khameleon/core/Table';
import type {
  UniversalComparison,
  UniversalDimension,
  CostMetrics,
} from './types';
import {
  ALL_DIMENSIONS,
  CODE_DIMENSIONS,
  DIMENSION_LABELS,
  formatScore,
} from './utils';
import './report.css';

type WinnerType = 'khameleon' | 'khameleon-tailwind' | 'baseline' | 'html' | 'tie';

interface CompareViewProps {
  comparison: UniversalComparison;
}

interface DimRow extends Record<string, unknown> {
  id: string;
  dimension: string;
  khameleonScore: number;
  baselineScore: number;
  htmlScore?: number;
  khameleonTailwindScore?: number;
  delta: number;
  winner: string;
}

interface CatRow extends Record<string, unknown> {
  id: string;
  category: string;
  khameleonOverall: number;
  baselineOverall: number;
  htmlOverall?: number;
  khameleonTailwindOverall?: number;
  delta: number;
}

interface CostRow extends Record<string, unknown> {
  id: string;
  metric: string;
  khameleon: string;
  baseline: string;
  html?: string;
  khameleonTailwind?: string;
  winner: string;
}

function costWinner(
  khameleonVal: number,
  baseVal: number,
  lowerIsBetter: boolean,
  htmlVal?: number,
  twVal?: number,
): WinnerType {
  const entries: [WinnerType, number][] = [
    ['khameleon', khameleonVal],
    ['baseline', baseVal],
  ];
  if (htmlVal != null) {
    entries.push(['html', htmlVal]);
  }
  if (twVal != null) {
    entries.push(['khameleon-tailwind', twVal]);
  }

  const best = lowerIsBetter
    ? Math.min(...entries.map(([, v]) => v))
    : Math.max(...entries.map(([, v]) => v));
  const atBest = entries.filter(([, v]) => v === best);
  if (atBest.length > 1) {
    return 'tie';
  }
  return atBest[0][0];
}

function winnerBadgeVariant(
  w: string,
): 'success' | 'error' | 'warning' | 'neutral' | 'info' {
  switch (w) {
    case 'khameleon':
      return 'success';
    case 'baseline':
      return 'error';
    case 'html':
      return 'warning';
    case 'khameleon-tailwind':
      return 'info';
    default:
      return 'neutral';
  }
}

function winnerLabel(w: string): string {
  switch (w) {
    case 'khameleon':
      return 'Khameleon';
    case 'baseline':
      return 'Baseline';
    case 'html':
      return 'HTML';
    case 'khameleon-tailwind':
      return 'Khameleon+TW';
    default:
      return 'Tie';
  }
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

function CostComparisonSection({
  khameleonCost,
  baselineCost,
  htmlCost,
  khameleonTailwindCost,
}: {
  khameleonCost: CostMetrics;
  baselineCost: CostMetrics;
  htmlCost?: CostMetrics;
  khameleonTailwindCost?: CostMetrics;
}) {
  const isThreeWay = !!htmlCost;
  const isFourWay = !!khameleonTailwindCost;
  const hasDuration =
    khameleonCost.avgDurationMs > 0 || baselineCost.avgDurationMs > 0;

  const costData: CostRow[] = [
    ...(hasDuration
      ? [
          {
            id: 'duration',
            metric: 'Avg Duration',
            khameleon: `${(khameleonCost.avgDurationMs / 1000).toFixed(1)}s`,
            baseline: `${(baselineCost.avgDurationMs / 1000).toFixed(1)}s`,
            ...(isThreeWay
              ? {html: `${((htmlCost?.avgDurationMs ?? 0) / 1000).toFixed(1)}s`}
              : {}),
            ...(isFourWay
              ? {
                  khameleonTailwind: `${((khameleonTailwindCost?.avgDurationMs ?? 0) / 1000).toFixed(1)}s`,
                }
              : {}),
            winner: costWinner(
              khameleonCost.avgDurationMs,
              baselineCost.avgDurationMs,
              true,
              htmlCost?.avgDurationMs,
              khameleonTailwindCost?.avgDurationMs,
            ),
          },
        ]
      : []),
    {
      id: 'input-tokens',
      metric: 'Input Tokens',
      khameleon: `~${khameleonCost.estimatedInputTokens.toLocaleString()}`,
      baseline: `~${baselineCost.estimatedInputTokens.toLocaleString()}`,
      ...(isThreeWay
        ? {html: `~${htmlCost?.estimatedInputTokens.toLocaleString()}`}
        : {}),
      ...(isFourWay
        ? {
            khameleonTailwind: `~${khameleonTailwindCost?.estimatedInputTokens.toLocaleString()}`,
          }
        : {}),
      winner: costWinner(
        khameleonCost.estimatedInputTokens,
        baselineCost.estimatedInputTokens,
        true,
        htmlCost?.estimatedInputTokens,
        khameleonTailwindCost?.estimatedInputTokens,
      ),
    },
    {
      id: 'output-tokens',
      metric: 'Output Tokens',
      khameleon: `~${khameleonCost.estimatedOutputTokens.toLocaleString()}`,
      baseline: `~${baselineCost.estimatedOutputTokens.toLocaleString()}`,
      ...(isThreeWay
        ? {html: `~${htmlCost?.estimatedOutputTokens.toLocaleString()}`}
        : {}),
      ...(isFourWay
        ? {
            khameleonTailwind: `~${khameleonTailwindCost?.estimatedOutputTokens.toLocaleString()}`,
          }
        : {}),
      winner: costWinner(
        khameleonCost.estimatedOutputTokens,
        baselineCost.estimatedOutputTokens,
        true,
        htmlCost?.estimatedOutputTokens,
        khameleonTailwindCost?.estimatedOutputTokens,
      ),
    },
    {
      id: 'total-tokens',
      metric: 'Total Tokens',
      khameleon: `~${(khameleonCost.estimatedInputTokens + khameleonCost.estimatedOutputTokens).toLocaleString()}`,
      baseline: `~${(baselineCost.estimatedInputTokens + baselineCost.estimatedOutputTokens).toLocaleString()}`,
      ...(isThreeWay
        ? {
            html: `~${((htmlCost?.estimatedInputTokens ?? 0) + (htmlCost?.estimatedOutputTokens ?? 0)).toLocaleString()}`,
          }
        : {}),
      ...(isFourWay
        ? {
            khameleonTailwind: `~${((khameleonTailwindCost?.estimatedInputTokens ?? 0) + (khameleonTailwindCost?.estimatedOutputTokens ?? 0)).toLocaleString()}`,
          }
        : {}),
      winner: costWinner(
        khameleonCost.estimatedInputTokens + khameleonCost.estimatedOutputTokens,
        baselineCost.estimatedInputTokens + baselineCost.estimatedOutputTokens,
        true,
        htmlCost
          ? htmlCost.estimatedInputTokens + htmlCost.estimatedOutputTokens
          : undefined,
        khameleonTailwindCost
          ? khameleonTailwindCost.estimatedInputTokens +
              khameleonTailwindCost.estimatedOutputTokens
          : undefined,
      ),
    },
    {
      id: 'output-lines',
      metric: 'Avg Output Lines',
      khameleon: String(khameleonCost.avgOutputLines),
      baseline: String(baselineCost.avgOutputLines),
      ...(isThreeWay ? {html: String(htmlCost?.avgOutputLines)} : {}),
      ...(isFourWay
        ? {khameleonTailwind: String(khameleonTailwindCost?.avgOutputLines)}
        : {}),
      winner: costWinner(
        khameleonCost.avgOutputLines,
        baselineCost.avgOutputLines,
        true,
        htmlCost?.avgOutputLines,
        khameleonTailwindCost?.avgOutputLines,
      ),
    },
    {
      id: 'docs-read',
      metric: 'Avg Docs Read',
      khameleon: String(khameleonCost.avgDocsRead),
      baseline: String(baselineCost.avgDocsRead),
      ...(isThreeWay ? {html: String(htmlCost?.avgDocsRead)} : {}),
      ...(isFourWay
        ? {khameleonTailwind: String(khameleonTailwindCost?.avgDocsRead)}
        : {}),
      winner: 'tie', // not inherently better or worse
    },
  ];

  const costColumns: TableColumn<CostRow>[] = [
    {key: 'metric', header: 'Metric'},
    {
      key: 'khameleon',
      header: 'Khameleon',
      renderCell: row => <Text type="body">{row.khameleon}</Text>,
    },
    {
      key: 'baseline',
      header: 'Baseline',
      renderCell: row => <Text type="body">{row.baseline}</Text>,
    },
    ...(isThreeWay
      ? [
          {
            key: 'html' as const,
            header: 'HTML',
            renderCell: (row: CostRow) => (
              <Text type="body">{row.html ?? '—'}</Text>
            ),
          } satisfies TableColumn<CostRow>,
        ]
      : []),
    ...(isFourWay
      ? [
          {
            key: 'khameleonTailwind' as const,
            header: 'Khameleon+TW',
            renderCell: (row: CostRow) => (
              <Text type="body">{row.khameleonTailwind ?? '—'}</Text>
            ),
          } satisfies TableColumn<CostRow>,
        ]
      : []),
    {
      key: 'winner',
      header: 'Lower Cost',
      renderCell: row => (
        <Badge
          variant={winnerBadgeVariant(row.winner)}
          label={row.winner === 'tie' ? '—' : winnerLabel(row.winner)}
        />
      ),
    },
  ];

  return (
    <Table<CostRow>
      data={costData}
      columns={costColumns}
      idKey="id"
      density="balanced"
      dividers="rows"
    />
  );
}

export function CompareView({comparison}: CompareViewProps) {
  const {khameleon, baseline, html, khameleonTailwind, winners} = comparison;
  const isThreeWay = !!html;
  const isFourWay = !!khameleonTailwind;

  let khameleonWins = 0;
  let baselineWins = 0;
  let htmlWins = 0;
  let khameleonTailwindWins = 0;
  let ties = 0;
  for (const dim of ALL_DIMENSIONS) {
    const w = winners[dim];
    if (w === 'khameleon') {
      khameleonWins++;
    } else if (w === 'baseline') {
      baselineWins++;
    } else if (w === 'html') {
      htmlWins++;
    } else if (w === 'khameleon-tailwind') {
      khameleonTailwindWins++;
    } else {
      ties++;
    }
  }

  const dimData: DimRow[] = ALL_DIMENSIONS.filter(
    dim => khameleon.averages[dim] != null || baseline.averages[dim] != null,
  ).map(dim => ({
    id: dim,
    dimension: DIMENSION_LABELS[dim],
    khameleonScore: khameleon.averages[dim] ?? 0,
    baselineScore: baseline.averages[dim] ?? 0,
    ...(isThreeWay ? {htmlScore: html?.averages[dim] ?? 0} : {}),
    ...(isFourWay
      ? {khameleonTailwindScore: khameleonTailwind?.averages[dim] ?? 0}
      : {}),
    delta: (khameleon.averages[dim] ?? 0) - (baseline.averages[dim] ?? 0),
    winner: winners[dim],
  }));

  const dimColumns: TableColumn<DimRow>[] = [
    {key: 'dimension', header: 'Dimension'},
    {
      key: 'khameleonScore',
      header: 'Khameleon',
      renderCell: row => (
        <Text type="body">{formatScore(row.khameleonScore)}</Text>
      ),
    },
    {
      key: 'baselineScore',
      header: 'Baseline',
      renderCell: row => (
        <Text type="body">{formatScore(row.baselineScore)}</Text>
      ),
    },
    ...(isThreeWay
      ? [
          {
            key: 'htmlScore' as const,
            header: 'HTML',
            renderCell: (row: DimRow) => (
              <Text type="body">
                {row.htmlScore != null ? formatScore(row.htmlScore) : '—'}
              </Text>
            ),
          } satisfies TableColumn<DimRow>,
        ]
      : []),
    ...(isFourWay
      ? [
          {
            key: 'khameleonTailwindScore' as const,
            header: 'Khameleon+TW',
            renderCell: (row: DimRow) => (
              <Text type="body">
                {row.khameleonTailwindScore != null
                  ? formatScore(row.khameleonTailwindScore)
                  : '—'}
              </Text>
            ),
          } satisfies TableColumn<DimRow>,
        ]
      : []),
    {
      key: 'delta',
      header: 'Delta (Khameleon−Base)',
      renderCell: row => (
        <Text type="body" className={deltaClassName(row.delta)}>
          {row.delta > 0 ? '+' : ''}
          {formatScore(row.delta)}
        </Text>
      ),
    },
    {
      key: 'winner',
      header: 'Winner',
      renderCell: row => (
        <Badge
          variant={winnerBadgeVariant(row.winner)}
          label={winnerLabel(row.winner)}
        />
      ),
    },
  ];

  const allCategories = new Set([
    ...Object.keys(khameleon.byCategory),
    ...Object.keys(baseline.byCategory),
    ...(html ? Object.keys(html.byCategory) : []),
    ...(khameleonTailwind ? Object.keys(khameleonTailwind.byCategory) : []),
  ]);

  const catData: CatRow[] = [...allCategories].map(cat => {
    const khameleonCat = khameleon.byCategory[cat] ?? {};
    const baseCat = baseline.byCategory[cat] ?? {};
    const htmlInit = {};
    const htmlCat =
      html?.byCategory[cat] ?? (htmlInit as Record<UniversalDimension, number>);
    const twInit = {};
    const twCat =
      khameleonTailwind?.byCategory[cat] ??
      (twInit as Record<UniversalDimension, number>);
    const khameleonAvg =
      CODE_DIMENSIONS.reduce(
        (s, d) => s + ((khameleonCat[d as UniversalDimension] as number) ?? 0),
        0,
      ) / CODE_DIMENSIONS.length;
    const baseAvg =
      CODE_DIMENSIONS.reduce(
        (s, d) => s + ((baseCat[d as UniversalDimension] as number) ?? 0),
        0,
      ) / CODE_DIMENSIONS.length;
    const htmlAvg = isThreeWay
      ? CODE_DIMENSIONS.reduce(
          (s, d) => s + ((htmlCat[d as UniversalDimension] as number) ?? 0),
          0,
        ) / CODE_DIMENSIONS.length
      : undefined;
    const twAvg = isFourWay
      ? CODE_DIMENSIONS.reduce(
          (s, d) => s + ((twCat[d as UniversalDimension] as number) ?? 0),
          0,
        ) / CODE_DIMENSIONS.length
      : undefined;
    return {
      id: cat,
      category: cat,
      khameleonOverall: khameleonAvg,
      baselineOverall: baseAvg,
      ...(htmlAvg != null ? {htmlOverall: htmlAvg} : {}),
      ...(twAvg != null ? {khameleonTailwindOverall: twAvg} : {}),
      delta: khameleonAvg - baseAvg,
    };
  });

  const catColumns: TableColumn<CatRow>[] = [
    {key: 'category', header: 'Category'},
    {
      key: 'khameleonOverall',
      header: 'Khameleon',
      renderCell: row => (
        <Text type="body">{formatScore(row.khameleonOverall)}</Text>
      ),
    },
    {
      key: 'baselineOverall',
      header: 'Baseline',
      renderCell: row => (
        <Text type="body">{formatScore(row.baselineOverall)}</Text>
      ),
    },
    ...(isThreeWay
      ? [
          {
            key: 'htmlOverall' as const,
            header: 'HTML',
            renderCell: (row: CatRow) => (
              <Text type="body">
                {row.htmlOverall != null ? formatScore(row.htmlOverall) : '—'}
              </Text>
            ),
          } satisfies TableColumn<CatRow>,
        ]
      : []),
    ...(isFourWay
      ? [
          {
            key: 'khameleonTailwindOverall' as const,
            header: 'Khameleon+TW',
            renderCell: (row: CatRow) => (
              <Text type="body">
                {row.khameleonTailwindOverall != null
                  ? formatScore(row.khameleonTailwindOverall)
                  : '—'}
              </Text>
            ),
          } satisfies TableColumn<CatRow>,
        ]
      : []),
    {
      key: 'delta',
      header: 'Delta (Khameleon−Base)',
      renderCell: row => (
        <Text type="body" className={deltaClassName(row.delta)}>
          {row.delta > 0 ? '+' : ''}
          {formatScore(row.delta)}
        </Text>
      ),
    },
  ];

  // Determine grid class based on number of win cards
  const winCardCount = 2 + (isThreeWay ? 1 : 0) + (isFourWay ? 1 : 0) + 1; // targets + ties
  const summaryGridClass =
    winCardCount >= 5
      ? 'report-compare-summaryGrid5'
      : winCardCount === 4
        ? 'report-compare-summaryGrid4'
        : 'report-compare-summaryGrid';

  return (
    <VStack gap={4}>
      <div className={summaryGridClass}>
        <Card>
          <div className="report-compare-winCard">
            <VStack gap={2}>
              <Text type="label">Khameleon Wins</Text>
              <Heading level={2}>
                <span className="report-color-positive">{khameleonWins}</span>
              </Heading>
            </VStack>
          </div>
        </Card>
        <Card>
          <div className="report-compare-winCard">
            <VStack gap={2}>
              <Text type="label">Baseline Wins</Text>
              <Heading level={2}>
                <span className="report-color-negative">{baselineWins}</span>
              </Heading>
            </VStack>
          </div>
        </Card>
        {isThreeWay && (
          <Card>
            <div className="report-compare-winCard">
              <VStack gap={2}>
                <Text type="label">HTML Wins</Text>
                <Heading level={2}>
                  <span className="report-color-warning">{htmlWins}</span>
                </Heading>
              </VStack>
            </div>
          </Card>
        )}
        {isFourWay && (
          <Card>
            <div className="report-compare-winCard">
              <VStack gap={2}>
                <Text type="label">Khameleon+TW Wins</Text>
                <Heading level={2}>
                  <span className="report-color-info">
                    {khameleonTailwindWins}
                  </span>
                </Heading>
              </VStack>
            </div>
          </Card>
        )}
        <Card>
          <div className="report-compare-winCard">
            <VStack gap={2}>
              <Text type="label">Ties</Text>
              <Heading level={2}>
                <span className="report-color-neutral">{ties}</span>
              </Heading>
            </VStack>
          </div>
        </Card>
      </div>

      <VStack gap={3}>
        <Heading level={3}>Dimension Comparison</Heading>
        <Table<DimRow>
          data={dimData}
          columns={dimColumns}
          idKey="id"
          density="balanced"
          dividers="rows"
        />
      </VStack>

      {catData.length > 0 && (
        <VStack gap={3}>
          <Heading level={3}>Category Breakdown</Heading>
          <Table<CatRow>
            data={catData}
            columns={catColumns}
            idKey="id"
            density="balanced"
            dividers="rows"
          />
        </VStack>
      )}

      {khameleon.cost && baseline.cost && (
        <VStack gap={3}>
          <Heading level={3}>Cost Comparison</Heading>
          <CostComparisonSection
            khameleonCost={khameleon.cost}
            baselineCost={baseline.cost}
            htmlCost={html?.cost}
            khameleonTailwindCost={khameleonTailwind?.cost}
          />
        </VStack>
      )}
    </VStack>
  );
}
