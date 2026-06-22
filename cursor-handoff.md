# Cursor Handoff — Exeter Teacher Workshop

Open this repo in Cursor, then paste prompts **one at a time** from `prompts/`. Keep this file as context.

---

## Context (read first)

Finishing a **reveal.js talk deck** (`index.html`) for a 2.5-hour Exeter workshop on vibe coding for educators. Two slides embed teacher demos built from **fake/sanitized data only**.

**Target structure**
```
index.html
takeaways.html
assets/
demos/
  assessment-fairness.html
  game-generator.html
  data/assessment-demo-data.js
  data/game-demo-data.js
prompts/
```

**Hard rules**
- Demos load **only pre-computed fake data** from `*-data.js`. Never real student work.
- Everything runs **offline from `file://`** — CDN scripts OK, no backend.

**Design tokens**
- white `#FFFFFF` · soft `#FAFAFA` · ink `#111111` · line `rgba(0,0,0,0.12)` · accent `#8C1D18`
- fonts: Source Serif 4 (titles), Inter (body), JetBrains Mono (code/labels)

---

## Prompt 1 — Verify deck

```
Open index.html with a static server (npx serve . from repo root).
Confirm all 13 slides load, dot nav works, embeds point to demos/assessment-fairness.html and demos/game-generator.html.
```

## Prompt 2 — Assessment fairness demo

```
Build demos/assessment-fairness.html + data/assessment-demo-data.js per cursor-handoff.md.
Fake Algebra II unit: objectives, test sections, alignment gaps, flagged issues.
Aggregates/structure only — no student responses. Match deck design tokens.
```

## Prompt 3 — Game generator demo

```
Build demos/game-generator.html + data/game-demo-data.js.
Jeopardy-style 4×4 board, fake quadratics Q&A, swap between two pre-baked sets.
Multi-file narrative for Cursor slide. Match deck tokens. Offline/file://.
```

## Prompt 4 — Polish

```
Add speaker notes to any slides missing data-notes.
Confirm breakout slide lists both prompt files.
Update takeaways.html slide hash links for 13 slides.
```

---

### Live-demo note

Slide 05 = assessment fairness. Slide 07 = live Canvas (game prompt). Slide 10 = breakout. Slide 12 = Cursor game embed.
