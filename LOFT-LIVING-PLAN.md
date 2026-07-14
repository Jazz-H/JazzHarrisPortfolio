# LOFT Living — Lightweight Execution Plan

**Status: shipped — and upgraded past the original scope.** The "Coming
soon" placeholder is gone. The site shows the real affinity map,
competitive benchmark, and root-cause analysis described below, and instead
of static hi-fi mockups, the sign-in/rent-payment/maintenance flows are a
real, installable PWA live at `/loft-living` (source:
`components/LoftLivingApp.jsx`). See `LOFT-LIVING-RESEARCH.md` for the
underlying research and `components/Portfolio.jsx` (search "LOFT Living")
for the live copy.

Two deliberate deviations from the original plan, both upgrades: no Figma
was used (no access in the sessions that built this) — the screens are a
real working React app instead, which is a stronger claim than a Figma
prototype, not a weaker one. And the "clickable prototype" line in the
outcome copy is no longer a claim to avoid — it's true, since the app is
genuinely installable and functional at that URL.

Goal (as originally scoped): turn the "Coming soon" placeholder into a real,
finished case study — without the full production Figma buildout from the
original plan. Enough to be genuinely defensible in an interview, not
vaporware. See `PROJECT-IDEAS-BACKLOG.md` for why this project specifically
is worth the time (it's the strongest BA-methodology fit in the portfolio).

## What "done" looks like

- A real affinity map image (not just prose) showing the six complaint
  themes, pulled from actual public reviews.
- A real competitive benchmark visual (LOFT vs. RentCafe vs. Zego) citing
  current App Store / Google Play ratings.
- A short root-cause writeup connecting symptoms to likely architecture
  causes (webview shell, session handling, payment idempotency) — analysis
  and writing, no design tool needed.
- 4-6 real hi-fi screens covering the three redesigned flows (sign-in,
  rent-payment, maintenance) — not a full clickable prototype, just enough
  static before/after screens to show the redesign concretely.
- New `image`/`images` pointing at the real exports, replacing the current
  placeholder mockup images (`UxCover.png` etc.).
- `status: "Coming soon"` removed once the above is live.

## Phase 1 — Validate/refresh the research (no design tools needed)

1. Pull current LOFT Living reviews from the App Store / Google Play — the
   "2.4 stars / 6,000+ reviews" stat needs re-verifying, ratings drift.
2. Re-confirm (or update) the six complaint themes against the current
   review set.
3. Pull current ratings for RentCafe and Zego, or swap in better-fitting
   comparators if the market's shifted.
4. Write a one-page root-cause note: for the 2-3 worst symptoms (sign-in
   failures, payment confusion, buried core tasks), name the *likely*
   technical cause — inferred from public behavior, not insider knowledge —
   and why it produces that symptom.

## Phase 2 — Lightweight visual deliverables (Figma, scoped small)

5. Build the affinity map as an actual Figma/FigJam board: six theme
   clusters, a handful of representative (anonymized/paraphrased) review
   quotes per cluster.
6. Build a simple benchmark comparison visual — a small table or chart, not
   elaborate — LOFT vs. the two competitors on rating and the 2-3 specific
   pain points.
7. Low-fi wireframe the three flows first (sign-in, rent-payment,
   maintenance) to confirm the redesign logic before investing in hi-fi.
8. Build 4-6 hi-fi screens total across the three flows — e.g. 2 for
   sign-in (before/after), 2 for rent-payment, 2 for maintenance — reusing
   the before/after pattern already established in the current placeholder
   cover image.
9. Optional stretch: wire the hi-fi screens into a short 2-3 click Figma
   prototype (sign in → pay rent). Not required for "done."

## Phase 3 — Ship it

10. Export the affinity map, benchmark visual, and hi-fi screens as the new
    `images` array.
11. Update the case study `challenge`/`approach`/`outcome` copy if the
    refreshed research (Phase 1) changed any specifics — ratings, theme
    wording, comparators.
12. Bring the exports here — I'll swap the assets into `PROJECTS`, drop
    `status: "Coming soon"`, and reconsider its `WORK_ORDER` position now
    that it's a finished piece rather than a placeholder.

## Two things to reconcile with the existing case-study copy

The current `outcome` text already claims "a clickable prototype." If step 9
is skipped, that line needs to come out before this ships — don't let the
copy claim more than what's actually built.

The `tags` array includes "Maze" (a usability-testing tool), but this plan
doesn't include running usability tests. Either drop the Maze tag, or add a
lightweight Phase 2.5: run 3-5 unmoderated Maze tests on the redesigned
flows and fold the findings into the outcome copy. Don't keep the tag if the
tool wasn't actually used.

## Explicitly out of scope for this pass

- Full clickable end-to-end prototype (nice-to-have, not required)
- Formal usability testing sessions (see caveat above — only in scope if
  the Maze tag stays)
- A full design system / component library — ad hoc styling that's
  consistent across the 4-6 screens is enough, it doesn't need to be a
  formal system
