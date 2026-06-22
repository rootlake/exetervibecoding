# Presenter Notes — Exeter "Teaching in the Age of AI"

Private cheat sheet. Not projected.

---

## Run of show (2.5 hours)

| Time | Block | Slides |
|------|-------|--------|
| 0:00–0:15 | Intro, poll, meta, vibe coding | 01–04 |
| 0:15–0:25 | Macondo Constellation — Ron Spalletta in the room | 05 |
| 0:25–0:40 | Safety / sanitize | 06 |
| 0:40–0:50 | Live Canvas (~3 min) + pattern | 07–08 |
| 0:50–0:55 | Claude Design → Code pipeline | 09 |
| 0:55–1:00 | Breakout kickoff | 10 |
| 1:00–1:45 | **Breakout** — room experiments | (slide 10 stays up) |
| 1:45–2:00 | Debrief discussion | 11 |
| 2:00–2:05 | Now What? — deploy options | 12 |
| 2:05–2:18 | Cursor demo + Star Field 3D | 13 |
| 2:18–2:22 | Try Cursor — referral + download | 14 |
| 2:22–2:27 | Error correction — Console → Cursor | 15 |
| 2:27–2:30 | Takeaways + Q&A | 16 |

Adjust timing if the room is fast or slow on Canvas.

---

## Assessment demo in 30 seconds

Synthetic Algebra II unit — **no student responses**.

| Panel | What it means |
|-------|---------------|
| **Objectives** | What you said you'd teach — with target weights |
| **Test sections** | What's actually on the test — points and objective mapping |
| **Alignment bars** | Which objectives get coverage (O5 = gap) |
| **Flags** | High: uncovered objective, unmapped vocabulary section; medium: overweighted graphing |

Narrative: "Paste objectives + test outline — catch fairness holes before students sit down."

---

## Game demo in 30 seconds

Jeopardy-style review board — fake quadratics Q&A.

| Feature | What it means |
|---------|---------------|
| **4×4 board** | Categories × point values |
| **Click to reveal** | Question → answer flow for class |
| **Swap question set** | Cosmetic toggle — shows iteration in Cursor |
| **Print** | Board for classroom without projector |

Narrative: "Canvas gives you a one-file draft in minutes. Cursor gives you HTML + data files you keep."

---

## Breakout facilitation

- Slide 10 — parameters + Vibe-rary inspiration; no prescribed project
- **Rules:** fake or sanitized data only; no gradebook screenshots with names
- Float the room; note 1–2 wins for debrief
- Use `prompts/05-breakout-followups.txt` on slide 11

---

## Error correction (slide 14)

Live demo if time allows:

1. Open any demo in browser → DevTools → **Console** (`F12`)
2. Show a red error (or trigger one intentionally)
3. Copy verbatim → paste into Cursor with: what you clicked, expected behavior, file name
4. Apply fix → refresh → confirm console is clean

Key line: *"The error message is the prompt."*

---

## Safe answers

| Question | Answer |
|----------|--------|
| Is this FERPA-safe? | Only if you sanitize — no names, essays, or row-level grades in public AI |
| Can it read my LMS? | Not live. Export structure (objectives, rubrics), sanitize, then prompt |
| Can students use this? | Different conversation — today's focus is teacher tooling |
| What about AI-generated tests? | You still judge fairness, alignment, and rigor |

---

## What NOT to do live

- Paste raw essay text or grade exports with names into public AI
- Promise live LMS integration
- Use real student work in breakout examples

---

## If embed fails

Open directly: `https://rs31415.github.io/100YOSchart/` (slide 05 — Ron Spalletta), `demos/game-generator.html`, or `demos/assessment-fairness.html` in a new tab.

---

## Related sessions at conference

- Keynote talk: "Let's Game It Out: AI and Ethics in Education"
- This workshop: "Coding with AI Could Change Your Life"
