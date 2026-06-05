---
target: work
total_score: 31
p0_count: 0
p1_count: 3
timestamp: 2026-06-04T01-20-20Z
slug: src-pages-work-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Strong hover/focus/active-link feedback; but below-fold content is reveal-gated (invisible until scroll), and remote images have no loading/skeleton state. |
| 2 | Match System / Real World | 3 | Spanish is natural and specific; "Resultado: Pendiente…" reads momentarily as an unfinished site. |
| 3 | User Control and Freedom | 3 | `case-back` "Volver a Trabajo" + next-case link are good; the 1s page-transition curtain delays every navigation with no skip. |
| 4 | Consistency and Standards | 4 | Token system is rigorously consistent; both case studies share one vocabulary. |
| 5 | Error Prevention | 3 | Few error surfaces; remote Unsplash images reserve no dimensions, so a slow load reflows layout. |
| 6 | Recognition Rather Than Recall | 3 | "Ver caso ↗" is clear; "01/02" + "Siguiente" ask the reader to infer navigation meaning on a 2-item list. |
| 7 | Flexibility and Efficiency | 3 | Magnetic buttons, cursor-peek, transitions are pleasant; no quick contact affordance on the list itself. |
| 8 | Aesthetic and Minimalist Design | 3 | Beautiful, but content-to-chrome ratio is inverted: ~2 sentences of substance per case wrapped in heavy ceremony. |
| 9 | Error Recovery | 3 | Honest `note-ph` placeholders are good faith, but they're confessions, not recovery. |
| 10 | Help and Documentation | 3 | Self-evident IA; nothing missing for this scope. |
| **Total** | | **31/40** | **Good — top of the real-interface band. Held back by thin substance, the 01/02 + eyebrow tells, and reveal-gated delivery.** |

## Anti-Patterns Verdict

**LLM assessment:** A notch above generic AI output. The dark Framer canvas, the cursor-peek project rows, the line-mask hero reveal, the two-part page-transition curtain, and the honest dashed `note-ph` placeholders are real craft decisions an LLM rarely volunteers, and the Spanish copy reads like an actual engineer ("tema custom en Liquid, sin depender de un theme genérico"). But the surface trips named tells:
- **Numbered-section scaffolding (01 / 02)** literally beside each project title (`work.astro`). On a 2-item list it's padding ceremony, not navigation.
- **Eyebrow-on-(almost)-every-section**: the glowing-blue-dot `.eyebrow` on the work hero ("Portafolio") and on both case headers ("Ecommerce · Shopify" / "· Web App").
- **Restated heading / two-beat cadence**: the list lead rephrases the meta description; "Dos proyectos a profundidad. Cómo el código…" is the LLM "X. Y." rhythm.
- **Identical case-study templates**: pure-over and cemex-supply are structurally byte-for-byte (same `U()` helper, same section order, same chip counts, same `grid-2` stock pair, same CTA). With two cases side by side, the sameness shows.
- **Topical stock photos as the entire visual argument** (coffee, construction) — known, but the loudest "this is a shell" signal.

**Deterministic scan:** `detect.mjs` over all three work files returned **clean (exit 0, zero findings)**. The scanner does not flag eyebrow/numbered-marker reflexes in `.astro` markup, so every AI-grammar tell above was caught by the design review, not the linter. No false positives to clear.

**Visual / browser evidence:** Browser visualization **succeeded this run** (the prior critique's macOS EPERM was an artifact of the dev server reading `src/`; serving the built `dist/` via `astro preview` avoids it). Captured `/work` (desktop + 375px mobile) and `/work/pure-over`. **No console errors; every image loads** (HTTP 200, `naturalWidth` 1600/1100). The captures exposed one issue the source review and the detector both missed: large black voids below the fold. Direct DOM inspection confirmed the cause — **9 of 12 `.reveal` elements sit at `opacity:0`** on load (the case study's "El reto", "Lo que construí", "Resultado", gallery, next-case nav, and CTA spotlight). After scrolling, all reach `opacity:1`. So the reveal system gates content visibility, and it only fires on scroll.

## Overall Impression

The craft outclasses the content, and that gap is itself the risk. For the agency audience that reads craft fluently, a beautiful shell wrapped around two 2023 projects with empty "Resultado" blocks reads as "great taste, no shipped outcomes." The single biggest opportunity isn't more polish, it's substance: one real screenshot and one real number per case would move this from "promising" to "convincing" faster than any visual change. The one genuine defect (not a content gap) is reveal-gated delivery: the page is robust for scrolling humans and fragile for everything else that reads it.

## What's Working

1. **The project-row interaction system** (`.project` + `.project__peek`). The `padding-left` slide, the muted→white title transition, and the cursor-following 4:3 peek compose into one bespoke, senior-feeling gesture, and it degrades correctly: the ≤680px block collapses to one column and forces `.project__view` to `--ink` so the row still reads as a link on touch (verified on the 375px capture: both rows show "Ver caso ↗"). This is the detail-sweat the brand claims.
2. **Honest, designed placeholders.** `note-ph` (dashed border, clock icon, plain admission) beats fabricating a fake "+47% conversion." It signals integrity to a craft-fluent reader.
3. **Resilient no-JS / reduced-motion handling.** The `<noscript>` block ships `.reveal` content visible with JS off, the inbound transition self-clears via a 2.4s ceiling, and `prefers-reduced-motion` bails the curtain. Content is never stuck blank or covered for those paths.

## Priority Issues

**[P1] Reveal-gating ships below-fold content blank to non-scrolling renderers.**
Why it matters: browser-verified — 9/12 `.reveal` blocks are `opacity:0` until IntersectionObserver fires on scroll. Real scrolling users are fine, but social/WhatsApp link unfurlers, headless snapshotters, some crawlers, and AI preview bots that run JS without scrolling see blank sections. The `<noscript>` fallback covers JS-*off*, not JS-*on-but-no-scroll*. For a portfolio shared as a link (a primary lead channel per PRODUCT.md), this degrades the first impression off-site. It's site-wide (`.reveal` lives in `global.css`). Fix: make reveals enhance an already-visible default — keep `opacity:1` and animate `transform` only, or apply `.in` to any element in/near viewport on load plus a scroll-independent fallback that marks everything visible after ~Nms if IO hasn't fired. Suggested command: **/impeccable harden** (or **/impeccable animate** to rework the reveal contract).

**[P1] Empty "Resultado" / "El reto" at the persuasion peak.**
Why it matters: both case studies show `note-ph` confessions exactly where a prospect looks for proof. PRODUCT.md defines success as "reaches contact convinced"; an advertised-but-empty result slot is the #1 conversion leak, worse than not having the section. The real content is the owner's job (tracked in CONTENIDO.md), but the *design* choice to display an empty slot is fixable now. Fix: until real metrics land, collapse "Resultado" entirely (don't advertise an empty frame) or replace with a concrete qualitative truth you can stand behind ("Tema entregado y en producción desde 2023"). Suggested command: **/impeccable distill** then **/impeccable clarify**.

**[P1] `.d-xxl` exceeds the display ceiling and over-tightens tracking.**
Why it matters: `clamp(52px, 12vw, 132px)` with `letter-spacing: -0.05em` (`global.css`). 132px blows past the ~96px display ceiling and -0.05em is tighter than the -0.04em floor; large Spanish headings ("Trabajo seleccionado") risk letter collision at the top end, and the tight tracking pinches legibility. Fix: lower the max to ~96–104px and relax tracking to -0.04em at the top. Suggested command: **/impeccable typeset**.

**[P2] Drop the "01 / 02" numbering.**
Why it matters: a literal hit on the banned numbered-scaffolding pattern; it adds zero wayfinding for two projects and reads as AI ceremony to exactly the agency audience you want to impress. Fix: remove `<span class="tag">01</span>`; let the title carry the row. Keep the "Siguiente" tag on the next-case link (that one earns its meaning). Suggested command: **/impeccable quieter**.

**[P2] `--ink-dim` small-text contrast fails AA.**
Why it matters: `--ink-dim: #6b6b6b` on `--canvas: #090909` is ≈4.0:1, used on the 12px uppercase `.specs dt` labels ("CLIENTE / ROL / AÑO / STACK") and footer text. PRODUCT.md targets WCAG AA (4.5:1 small text); these miss. Fix: bump `--ink-dim` to ≈#7a7a7a (~4.6:1) or use `--ink-muted` for these labels. Suggested command: **/impeccable colorize**.

**[P2] Remote images reserve no dimensions or failure fallback.**
Why it matters: every `.media img` is a hot-linked Unsplash URL with no `width/height`, `loading`, or fallback. They load today (verified), but a slow network reflows layout (the list `data-peek` and case galleries have no reserved box), and a future 404 leaves an empty `--surface-1` rectangle. Fix: add explicit dimensions + `loading="lazy"`, and self-host once real screenshots replace stock. Suggested command: **/impeccable harden** (also **/impeccable optimize**).

## Persona Red Flags

**Riley (craft-fluent agency lead):** clocks "01/02" and the duplicated case-study skeleton in seconds, then hits two empty "Resultado/El reto" blocks and a coffee-brewing stock photo whose own `alt` text admits it isn't the product. Verdict forms fast: "great front-end taste, no evidence of shipped outcomes." The craft buys a second look; the empty proof loses the booking.

**Jordan (non-technical Mérida shop owner):** wants "did this person build a *store* like I'd want?" Sees a photo of coffee, not a storefront, and a "Pendiente: …" note they may read as the site being broken. Trust dips because they can't see a screen they recognize as ecommerce.

**Casey (distracted mobile):** well served on the happy path — cursor-peek correctly hidden on touch, both rows show "Ver caso ↗" in white, tap targets fine (verified on 375px capture). Residual: the 1s page-transition curtain adds perceived latency on every tap on a flaky connection.

## Minor Observations

- `twitter:card` is `summary` with no `og:image` (known TODO). Combined with the reveal-gating finding, a shared link both unfurls bare *and* (for JS-no-scroll renderers) under-renders. Shareability is the weakest channel right now.
- `.specs` `auto-fit minmax(150px,1fr)` with 4 items yields an awkward 3+1 wrap around ~620px. Cosmetic.
- The two case studies being structurally identical is a faster tell with only two of them; more divergence (or one richer combined page) would read less templated.
- `.spotlight::after` scrim math is deliberately engineered for ≥3:1 large text over the orange gradient — credit where due.

## Questions to Consider

1. With only two 2023 projects and no metrics yet, is the case-study *template* doing more harm than good? Would one rich "Selected work" page with real screenshots out-persuade two hollow scaffolds?
2. The honest "Pendiente" notes are real integrity, but on a surface whose entire job is proof of competence, does advertising an empty "Resultado" read as honesty or as "not finished"? Is hiding the section until it's real more honest to the visitor's actual question?
3. The craft currently outclasses the content by a wide margin. For the agency audience, does that gap itself become the tell ("all chrome, no shipped outcome") and undercut the signal the craft is spending to send?
