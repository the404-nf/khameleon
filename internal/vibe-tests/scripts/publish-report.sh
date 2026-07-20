#!/usr/bin/env bash
# Copyright (c) Meta Platforms, Inc. and affiliates.

set -euo pipefail

# Publish a vibe test report to GitHub Pages.
#
# Usage:
#   ./scripts/publish-report.sh <khameleon-iteration> [baseline-iteration]
#
# The report is always published under reports/<khameleon-iteration>/ on gh-pages.
# No --slug, no --name, no override — just the hash.
#
# Examples:
#   ./scripts/publish-report.sh a87fa578
#   ./scripts/publish-report.sh a87fa578 446469c7

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
VIBE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ $# -lt 1 ]; then
  echo "Usage: $0 <khameleon-iteration> [baseline-iteration]"
  echo ""
  echo "Builds and deploys a vibe test report to GitHub Pages."
  echo "Report URL: https://facebook.github.io/khameleon/reports/<khameleon-iteration>/"
  exit 1
fi

KHAMELEON_ITER="$1"
BASELINE_ITER="${2:-}"

ARGS="--iteration $KHAMELEON_ITER"
if [ -n "$BASELINE_ITER" ]; then
  ARGS="$ARGS --baseline $BASELINE_ITER"
fi

echo ""
echo "📊 Publishing vibe test report"
echo "   Khameleon iteration:      $KHAMELEON_ITER"
if [ -n "$BASELINE_ITER" ]; then
  echo "   Baseline iteration: $BASELINE_ITER"
fi
echo "   Deploy to:          reports/$KHAMELEON_ITER/"
echo ""

cd "$VIBE_DIR"
exec npx tsx src/deploy-report.ts $ARGS
