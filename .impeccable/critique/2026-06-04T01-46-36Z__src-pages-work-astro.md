---
target: work
total_score: 35
p0_count: 0
p1_count: 1
timestamp: 2026-06-04T01-46-36Z
slug: src-pages-work-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Hover lift, cursor-peek, nav-scrolled, page transition all give strong feedback; nothing stale. |
| 2 | Match System / Real World | 3 | Terrakan eyebrow "Inmobiliaria · Landing · WordPress" contradicts the index "Inmobiliaria · WordPress"; English jargon (CRO, A/B, self-service, lead-gen) leaks into Spanish prose. |
| 3 | User Control and Freedom | 4 | "Volver a Trabajo" + "Siguiente" loop + persistent nav; clear exits everywhere. |
| 4 | Consistency and Standards | 3 | Strong visual consistency, but the Terrakan metadata mismatch and "Terrakan Residencial" vs "Terrakan" link label are real drifts. |
| 5 | Error Prevention | 4 | Reveal-gating fix removes the blank-content failure (verified: all reveals opacity:1 without scroll); transition has a hard-timeout safety. |
| 6 | Recognition Rather Than Recall | 4 | Case template is learnable; specs table + chips surface the stack without recall. |
| 7 | Flexibility and Efficiency | 3 | Six near-clones offer no scan-differentiation; "Siguiente" forces a linear loop with no jump-around. |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely restrained, editorial, one accent held. Distinctive. |
| 9 | Error Recovery | 3 | Index/CTA have no error surface (fine); scored neutral. |
| 10 | Help and Documentation | 3 | Specs self-document each project; no plain-language gloss of CRO/A/B for the non-technical local buyer. |
| **Total** | | **35/40** | **Strong (upper band). Up from 31. Content fill + reveal fix are the gains; the remaining ceiling is six interchangeable cases.** |

## Anti-Patterns Verdict

**LLM assessment:** This no longer reads as AI slop at the surface. The jump since the last critique is real: six genuine clients (Sandra Weil, Sognare, Pure Over, CEMEX Supply, Mi Tienda Socio / Grupo Salinas, Terrakan), real client-CDN imagery, specific narratives, filled metrics. The signature index interaction (row lift + cursor-peek, title muted→ink) is distinctive and not template-default; the absolute bans are clear (no gradient text, side-stripes, glassmorphism, skill bars, or 3-up icon-card grid). The `01–06` index numbering, borderline at two projects last time, now reads as wayfinding rather than scaffolding.

The remaining tell is not the layout, it's the **rhetorical cadence**: 4 of 6 "El reto" leads use the same shape, a definitional one-liner that then pivots to the real challenge (Terrakan "Vender lotes residenciales es vender futuro y confianza." → follow; Pure Over "vende una sola gran idea…" → "El reto fue…"; CEMEX "lleva el poder de compra de un gigante…" → "El reto era…"; Sandra Weil "El reto fue traducir…"). Combined with six byte-for-byte identical templates (same section order, same `data-parallax` 0.05/0.06/0.1, same `max-width:48ch` result, same orange CTA repeated on all six footers + the index = 7×), the work reads as one project shown six times rather than six distinct engagements. A craft-fluent reader clocks the sameness by the third case.

**Deterministic scan:** `detect.mjs` over all seven work files returned **clean (exit 0, zero findings)**. The scanner does not flag rhetorical cadence or template repetition, so the one real tell came from the design review, not the linter. No false positives.

**Browser evidence:** Visualization ran against the built `dist/` on localhost. **No console errors. All client-CDN images render in-browser** (verified Terrakan's self-hosted WordPress assets naturalWidth 1600/1200, Sandra Weil + Shopify CDN, and probed Sognare / Mi Tienda Socio / CEMEX lead images, all OK; the one image that first read "not loaded" was simply slow within a 2s window, confirmed HTTP 200). **The reveal-gating fix is verified working**: on `/work` and case pages, with `scrollY:0` and no scroll, all `.reveal` blocks (6 project rows + CTA) compute `opacity:1` via the load-time fallback.

One **false positive to flag**: a full-page screenshot shows a large black band in the middle of `/work`. This is NOT a rendering defect. DOM inspection proved all six rows are present at `opacity:1`; the band is the `.page-trans` curtain (`position:fixed; inset:0; background:#000; z-index:200`) sitting at `transform: translateY(699px)` (one viewport below the fold, invisible in a real browser) that Chrome's full-page stitcher mis-paints into the captured image. A normal viewport screenshot scrolled to rows 03–06 renders them perfectly.

## Overall Impression

The portfolio crossed the line from "promising shell" to "credible body of work." Six real clients with filled results is the single biggest gain, and the reveal-gating defect that hurt shareability is closed. The remaining ceiling is not correctness, it's distinctiveness inside the cases: the index is bespoke and the case studies are a template. The next move that matters is voice and structural variation across the six, not more polish.

## What's Working

1. **The index interaction is a true signature** — editorial row list, title color shift muted→ink, padding-left creep on hover, cursor-following `project__peek` now loaded with real client imagery. Proof-of-craft no template ships by default; it carries the brand promise in the first five seconds.
2. **Honest-by-construction system** — `TODO: confirmar dato real` comments, the reveal-default-visible contract, descriptive per-image alt text (a genuine, rare a11y win). This is the "serious craftsman" signal PRODUCT.md asks for.
3. **Restraint held at scale** — one accent, dark canvas, d-xxl now capped at 96px, real spacing rhythm across six pages without sliding into generic SaaS-dark.

## Priority Issues

**[P1] Six interchangeable cases: identical structure AND identical copy cadence.** Every case follows the same section order, the same parallax values, and 4 of 6 open with the "definition sentence, then the real challenge" shape. A craft-fluent prospect reads the third case as the first; the "six distinct senior engagements" claim flattens into "one template, nouns swapped." Fix: vary the entry point per case (lead one with the metric, one with a constraint, one with a client quote, one with a problem question) and break at least two cases out of the split-grid mold (a full-bleed before/after, a process timeline). Suggested command: **/impeccable clarify** (copy), then **/impeccable shape** (structural breaks).

**[P2] Placeholder metrics presented as confident fact.** "+14%", "38% más rápido", "+30% de los pedidos", "25% más rápido" render as bold claims while still carrying `TODO: confirmar dato real`. On a portfolio whose entire bet is trust, one number that doesn't survive "+14% on what test?" collapses the honesty equity the rest of the site builds. Fix: confirm the figures before this ships publicly, or soften unverified ones to defensible qualitative wins ("la variante ganadora quedó como nuevo estándar de producción") until the real data lands. Suggested command: **/impeccable harden** (or **clarify**).

**[P2] Terrakan metadata inconsistency.** Index says "Inmobiliaria · WordPress"; the case eyebrow says "Inmobiliaria · Landing · WordPress." Index title "Terrakan Residencial" vs the "Siguiente"/`data-label` "Terrakan." On a surface where execution IS the product, a visible metadata mismatch is a direct competence ding. Fix: drive the index rows and case headers from one shared data object so strings can't drift. Suggested command: **/impeccable harden**.

**[P3] Jargon unglossed for the non-technical half of the audience.** CRO, A/B, Convert, Liquid, self-service, lead-gen appear bare; PRODUCT.md's primary local buyer is explicitly non-technical. Fix: one plain-language clause per term on first use ("pruebas A/B: probar dos versiones y quedarse con la que vende más"). Suggested command: **/impeccable clarify**.

**[P3] The result metric is buried, not led.** The single number a skeptic wants sits mid-sentence in a 48ch muted-gray paragraph, the most-likely-skipped element on mobile. Fix: promote the figure to one editorial display number with a one-line caption above the prose (one figure, not a 3-stat hero-metric row). Suggested command: **/impeccable bolder** (or **layout**).

## Persona Red Flags

**Riley (agency lead / stress tester):** opens three cases, sees identical structure + identical "definition→challenge" cadence + identical parallax, concludes "one template, nouns swapped." Also clocks the Terrakan metadata mismatch immediately. The index craft doesn't fully survive contact with the repetitive cases.

**Jordan (non-technical Mérida shop owner):** hits CRO / A/B / Convert / Liquid / self-service with no translation, can't tell what was actually delivered for a business like hers; value is legible to engineers, opaque to the buyer.

**Casey (distracted mobile):** index collapses correctly (1fr, "Ver caso" forced visible, peek disabled on touch). But the result metric buried mid-paragraph in muted #999 at 16px is exactly what a thumb-scroller skips, so the strongest proof point is the most-likely-missed element on mobile.

## Minor Observations

- `--ink-muted` #999 on #090909 ≈ 7:1 (case body copy) and `--ink-dim` #7c7c7c ≈ 4.8:1 (small labels) both pass AA now. The contrast issue from the prior critique is resolved.
- d-xxl capped at 96px / -0.04em renders cleanly; no heading overflow at any breakpoint tested. The prior typography issue is resolved.
- Alt text is descriptive and per-image, not "image of project." Real win.
- The orange CTA "¿El siguiente proyecto es el tuyo?" is repeated verbatim 7× (index + six case footers); effective for "earn the contact," but edges toward wallpaper. Consider one variant for the index.
- `og:image` is still TODO (`twitter:card=summary`); shared links unfurl text-only. With the reveal fix in, this is now the weakest part of the shareability channel.

## Questions to Consider

1. If a prospect can read your third case study without learning anything new from the first, what is the third case *for*, and would five cases told differently beat six told identically?
2. The honest-placeholder system is a real differentiator, but a live "+14%" that's actually an example number is the one place that contract breaks. Is shipping fabricated-precise metrics, even temporarily, worth more than defensible qualitative wins until the real data lands?
3. The index interaction is clearly the best thing here. Why does that level of bespoke craft stop at the index door, and what would give each case one signature moment of its own?
