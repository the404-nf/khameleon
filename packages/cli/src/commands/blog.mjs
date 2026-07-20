// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file blog command (hidden) — read the Khameleon blog from the published feed.
 *
 * Hidden on purpose: it's not part of the documented command surface and does
 * not appear in --help or the manifest. It reads the blog the same way any
 * feed reader would — over the public RSS feed — and prints a post's plaintext
 * (.txt) variant. Nothing about the blog's structure has to change for this to
 * work; the CLI is just a consumer of the feed.
 *
 *   khameleon blog                    List posts from the feed
 *   khameleon blog <slug>             Print a post as plaintext
 */

import {getRunPrefix} from '../utils/package-manager.mjs';
import {humanLog} from '../lib/json.mjs';
import {cliError} from '../lib/cli-error.mjs';
import {blog as blogApi} from '../api/blog.mjs';

function formatList({feedUrl, posts}, run) {
  const lines = [`\nKhameleon blog · feed: ${feedUrl}\n`];
  if (posts.length === 0) {
    lines.push('No posts found in the feed.');
    return lines.join('\n');
  }
  for (const p of posts) {
    lines.push(`  ${p.slug}`);
    lines.push(`    ${p.title}`);
    if (p.type) lines.push(`    ${p.type}`);
    if (p.textUrl) lines.push(`    ${p.textUrl}`);
    lines.push('');
  }
  lines.push(`Read one: ${run} khameleon blog <slug>`);
  return lines.join('\n');
}

export function registerBlog(program) {
  program
    .command('blog [slug]', {hidden: true})
    .description('Read the Khameleon blog from the published feed')
    .action(async slug => {
      const run = getRunPrefix();
      let result;
      try {
        result = await blogApi(slug);
      } catch (e) {
        cliError(e.message, {suggestions: e.suggestions || [], code: e.code});
        return;
      }

      if (result.type === 'blog.list') {
        humanLog(formatList(result.data, run));
      } else {
        // blog.detail — print the feed URL, then the plaintext body.
        humanLog(`Feed: ${result.data.feedUrl}\n`);
        humanLog(result.data.text);
      }
    });
}
