# Vibe Coding for Educators (Exeter)

Slides, live demos, and copy-paste prompts for the **Teaching in the Age of AI** workshop at Phillips Exeter Academy (June 2026).

Workshop: *Coding with AI Could Change Your Life* — Josh Lake, Pomfret School.

## What's here

| Path | Description |
|------|-------------|
| [`index.html`](index.html) | reveal.js talk deck (13 slides, 2.5 hr) |
| [`demos/assessment-fairness.html`](demos/assessment-fairness.html) | Unit test alignment checker (fake data) |
| [`demos/game-generator.html`](demos/game-generator.html) | Dining hall food tier list (drag S–F) |
| [`LIVE-PROMPTS.md`](LIVE-PROMPTS.md) | Sanitized structure + Canvas / Cursor prompts |
| [`prompts/`](prompts/) | Same prompts as plain `.txt` / `.json` |
| [`PRESENTER-NOTES.md`](PRESENTER-NOTES.md) | 2.5 hr run-of-show |
| [`RUNNING.md`](RUNNING.md) | Local server & shortcuts |
| [`takeaways.html`](takeaways.html) | Mobile takeaways + links (QR on final slide) |

Demo dashboards load **pre-computed fake data** from `demos/data/*.js` — no student work.

## Run locally

From repo root:

```bash
npx serve .
```

Open `http://localhost:3000/`

## GitHub Pages (QR on slide 13)

When published, set the QR target to your Pages URL, e.g. `https://<username>.github.io/<repo>/takeaways.html`. Until then, the slide QR is a placeholder — use the local URL above or open [`takeaways.html`](takeaways.html) directly.

## License

MIT — see [LICENSE](LICENSE).
