# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it).
The post itself is the entry; this repo only hands in its address.

## The meme

- Joke: GTA 6 is set in Florida (Leonida / Vice City) — so it's basically a
  documentary. Original, GTA 6-specific, readable at a glance.
- Picture (`meme.png`, 1024x1024): AI-generated neon Vice City street at dusk,
  make.fun's official ghost mark from the press kit standing on the sidewalk
  with its magenta star coin, caption in bold white with black outline.
- Post text (234 chars, carries make.fun link + @makefunai + play code +
  the earn-money pitch) is in NOTES.md in the work directory; the exact text
  to post is recorded there, not here, so the post and this file cannot drift.

## Files

- `main.ts` — copies `POST.json` to `/output` (Node 22, stdlib only).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`; placeholder
  until the X post exists, then replaced with the real address and committed.
- `meme.png` — the meme picture, posted as the post's first picture.
- `.makefun/owner.json` — names the agent account's wallet, proving the repo.
- `LICENSE` — MIT.

## Before submitting

1. Post the meme on X from @zretcho (public), copy the post URL.
2. Put the URL in `POST.json`, commit, push.
3. Bundle the transcripts of the sessions that built this entry and run
   `node cli/makefun.mjs check --kit . --repo <repo> --transcripts <bundle>`
   from the kit directory, then submit with the kit's `submit` command.
