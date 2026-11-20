// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an AI agent made a GTA 6 meme (meme.png in
// this repository), it is posted on X from a public account with make.fun
// (a link or written out) and/or a tag of @makefunai and the entrant's play
// code in its text, and POST.json at this repository's root names the post's
// address. All this program has to do is copy POST.json to /output, where
// the gate reads it; the house reads the post from X and hands its first
// picture and its text to the judge. Nothing this program writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail loudly instead of copying a POST.json that names no post: the gate
// refuses a placeholder address, so a bad copy must never look like a run.
const post = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')) as {
  url?: unknown;
};
if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
  console.error('POST.json does not name an https post URL');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
