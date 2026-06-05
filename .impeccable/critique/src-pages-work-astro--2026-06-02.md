---
slug: src-pages-work-astro
target: work
date: 2026-06-02
total_score: 28
p0_count: 0
p1_count: 2
---

# Critique — work.astro (Work / Portfolio)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good hover/scroll/active-link feedback; little else needed |
| 2 | Match System / Real World | 3 | Clear Spanish labels; `01 — Pure Over` is mild scaffolding noise |
| 3 | User Control and Freedom | 3 | Anchor jumps + nav fine; mobile loses the "Ver caso" affordance |
| 4 | Consistency and Standards | 3 | Tokens consistent, but project-list duplicates the case sections |
| 5 | Error Prevention | 3 | No forms; reveal-gating risk (blank if JS fails) is the only flag |
| 6 | Recognition Rather Than Recall | 3 | Visible nav, clear section structure |
| 7 | Flexibility and Efficiency | 3 | Adequate for the surface (anchor links) |
| 8 | Aesthetic and Minimalist Design | 2 | Craft is real, but dresses thin substance: 2 projects, stock photos |
| 9 | Error Recovery | 3 | n/a for content (live dev EPERM is environment, not design) |
| 10 | Help and Documentation | 2 | The case studies are the documentation of the work, and prove nothing |
| **Total** | | **28/40** | **Good — solid shell, weak substance** |

## Anti-Patterns Verdict

Partly AI-shaped, and the tells are content-shaped not style-shaped. The visual system is genuinely distinctive (dark Framer canvas, cursor-following project peek, row hover that shifts padding and lifts the title). Two AI-grammar tells present: per-section eyebrow (`Portafolio`, `01 — Pure Over`, `02 — CEMEX Supply`) and numbered section markers (`01/02` tags + `01 —` eyebrows), and each case eyebrow restates the heading directly below it. Deeper tell is substance: a portfolio whose principle is "the site IS the portfolio" ships two projects, both 2023, illustrated with stock photos of strangers — none of it Ivan's real work.

Deterministic scan: detect.mjs returned clean (exit 0, zero findings); it does not flag the eyebrow/numbered-marker reflex in .astro markup, so the LLM review caught what the scanner missed. No false positives.

Visual overlays: not available. Browser injection against http://localhost:4321/work blocked by a macOS process-level EPERM (dev server cannot read src/pages/work.astro; built-file reads fail too). Environment permission boundary on this machine, not a design defect. Enable later via Full Disk Access + restart dev server.

## What's Working

1. The project-row interaction is a genuine signature (hover padding shift, title color lift, cursor-tracking preview). Keep it.
2. Cohesive committed visual system: one display family (Mona Sans) by weight/scale contrast, single decisive blue accent, deliberate dark canvas. Reads as one confident hand.
3. Motion discipline mostly right: prefers-reduced-motion honored, outbound-only page-transition curtain, hero safety-net timeout.

## Priority Issues

[P1] Portfolio too thin: 2 projects, both 2023, on the page meant to prove capability. Both audiences (local owners + remote agencies) judge by volume and recency; two stale entries contradict the craftsman impression. Fix: add real projects (4–6); if only two are presentable, go deep with full case studies + measurable results. Command: /impeccable craft work (or shape first).

[P1] Case studies use stock photos and claim results with zero proof. Images are strangers using credit cards / generic code-background stock; copy promises conversion + business outcomes with no evidence. A dev portfolio illustrated with stock instead of the real work is the fastest trust-killer. Fix: replace every image with real storefront/app screenshots or credible mockups; add one concrete result per project. Command: /impeccable harden work (primarily a content task).

[P2] Project list and case sections are redundant. Top list re-expanded as full sections one scroll down; an index makes sense for 8+ entries, not 2. Fix: pick one model — rich index linking to dedicated case pages, or drop the list and let cases carry the page (drop the list for 2–4 projects). Command: /impeccable layout work or /impeccable distill work.

[P2] Eyebrow + numbered-marker scaffolding with restated headings. Portafolio, then 01 — Pure Over directly above <h2>Pure Over. Two named AI tells together + redundant copy. Fix: drop per-section eyebrows; keep numbering only if it carries info (it doesn't with two items). Command: /impeccable typeset work.

[P2] Accessibility + mobile gaps. Meaningful case images carry empty alt=""; on mobile .project__view "Ver caso" is display:none and hover peek can't fire, so rows lose any clickable signal; .tag uses --ink-dim (#6b6b6b on #090909 ≈ 3.8:1) below 4.5:1 AA for small text. Fix: descriptive alt on every case image; persistent visible mobile affordance (arrow/label, not hover-only); bump tag/meta to at least --ink-muted. Command: /impeccable audit work then /impeccable adapt work.

## Persona Red Flags

Marisol (local Mérida shop owner, non-technical): sees a stock credit-card photo, can't tell which project is a store like hers, can't map the work to her need.

Daniel (remote agency lead, reads craft): clocks the stock imagery and the two-project 2023-only set; interaction quality is a plus but "show three recent shipped things + results" fails.

Casey (distracted mobile): "Ver caso" hidden and no hover peek on touch, so rows read as plain headings not links; case images stack with no caption.

## Minor Observations

- d-xxl caps at 132px (above ~96px display ceiling) and tracks -0.05em (tighter than -0.04em floor).
- .reveal content starts opacity:0 dependent on IO; reduced-motion + real browsers fine, but JS-disabled/crawlers get blank below hero. Add a no-JS visible fallback.
- Hero min-height:62svh with sparse content leaves a large empty band above the fold.
- CTA heading #fff on the orange spotlight gradient: verify ≥3:1 across the gradient's lightest region.

## Questions to Consider

- If the page could show only one thing to win a client — interaction polish or a real before/after result? It shows neither decisively.
- What would the page look like with zero eyebrows and zero index numbers?
- Do you need a project list at all, or just the cases?
