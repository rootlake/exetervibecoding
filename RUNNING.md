# Running the Exeter Workshop

## Start local server

From the **repo root**:

```bash
npx serve .
```

Open `http://localhost:3000/`

## Direct links

| What | URL |
|------|-----|
| Slide deck | `http://localhost:3000/` |
| Assessment demo | `http://localhost:3000/demos/assessment-fairness.html` |
| Game demo | `http://localhost:3000/demos/game-generator.html` |
| Takeaways (mobile) | `http://localhost:3000/takeaways.html` |

## Present shortcuts (reveal.js)

| Key | Action |
|-----|--------|
| → / ↓ | Next slide |
| ← / ↑ | Previous slide |
| `s` | Speaker notes |
| `f` | Fullscreen |
| `o` | Overview grid |
| `Esc` | Exit overview / fullscreen |

## Export to PDF

Open `http://localhost:3000/?print-pdf` then browser Print → Save as PDF.

## Pre-talk checklist

- [ ] `npx serve .` running from repo root
- [ ] Assessment + game demos open in backup tabs
- [ ] `LIVE-PROMPTS.md` — game prompt copied into three AI tools
- [ ] Breakout prompts ready (`03-canvas-assessment-HUMAN.txt`, `03-canvas-game-HUMAN.txt`)
- [ ] Cursor open on this repo folder
- [ ] Read `PRESENTER-NOTES.md` for 2.5 hr run-of-show

## Project layout

```
index.html              ← reveal.js deck (13 slides)
takeaways.html          ← mobile QR destination
assets/                 ← crest, headshot, QR
demos/
  assessment-fairness.html
  game-generator.html
  data/*.js             ← fake demo data only
prompts/                ← copy-paste prompts
LIVE-PROMPTS.md
PRESENTER-NOTES.md
```
