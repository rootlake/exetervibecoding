# Live Prompts — Exeter Teaching in the Age of AI

Copy-paste pack for live demos and breakouts. **Never paste raw student work** — use sanitized structure or fake demo data.

**Files:** [`prompts/`](prompts/) — open `03-canvas-game-HUMAN.txt` for the live Canvas demo.

---

## Tier 0 — Sanitize (run locally, not in public chat)

```
Remove all student names, IDs, and essay text from this grade export or assessment file.
Output ONLY these structures as JSON I can paste into a public AI tool:
- unit objectives (id + text + weight %)
- test sections (name + point value + which objectives they map to)
- rubric criteria (names and point weights only)
No row-level student data. No essay content. No LMS user IDs.
```

---

## Sanitized structure JSON (safe to paste)

See [`prompts/02-assessment-demo.json`](prompts/02-assessment-demo.json).

---

## Tier 1 — Live Canvas demo (slide 07)

Dining hall tier list — fun, fast, ~3 minutes. Edit the prompt live if the room picks another topic.

```
Build a simple one-page dining hall food tier list I can open in my browser. Keep it small and fast — I need this in a few minutes.

Standard S · A · B · C · D · F tiers with the classic tier-list colors. Drag-and-drop items between tiers and an unranked pool at the bottom.

Include the classics: chicken tenders, pizza, mac & cheese, cheeseburger, fries, grilled cheese, pasta bar, tacos, waffles, cereal, salad bar, ice cream, cookies, mystery meat — plus lobster and filet mignon.

Clean and crafted — readable fonts, simple layout, no animation fluff. One HTML file, no backend.
```

Full version: [`prompts/03-canvas-game-HUMAN.txt`](prompts/03-canvas-game-HUMAN.txt)

Fallback built demo: [`demos/game-generator.html`](demos/game-generator.html)

---

## Breakout option A — Assessment fairness

[`prompts/03-canvas-assessment-HUMAN.txt`](prompts/03-canvas-assessment-HUMAN.txt)

---

## Breakout option B — Dining hall tier list

Same as live demo — [`prompts/03-canvas-game-HUMAN.txt`](prompts/03-canvas-game-HUMAN.txt) — swap items or topic for your unit.

---

## Style block (append to any prompt)

```
STYLE: white background, thin black borders (1px rgba(0,0,0,0.12)), Pomfret crimson #8C1D18 accents.
Fonts: Source Serif 4 titles, Inter body. Clean, printable, conference handout.
```

Full: [`prompts/04-style-block.txt`](prompts/04-style-block.txt)

---

## Cursor — multi-file game build

[`prompts/09-game-generator-FULL.txt`](prompts/09-game-generator-FULL.txt)

---

## The pattern (slide 08)

```
DATA: sanitized structure only — objectives, rubrics, weights; never student work
VIEWS: list each screen + plain-English subtitle a teacher can read
STYLE: white field, thin black lines, Pomfret crimson accent — clean, printable
BUILD: one-off HTML — one file, simple, fast; no backend
LIBS: JS from CDN if needed — Chart.js for alignment bars, or none for simple tools
SHARE: email the file or any static link — opens in any browser
```
