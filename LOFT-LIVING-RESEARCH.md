# LOFT Living — Refreshed Research (Phase 1)

Sourced July 2026 via web search aggregators (JustUseApp, chrome-stats.com) plus
one user-verified primary source (Google Play, screenshot). Ratings are a
snapshot, not pulled directly from Apple/Google's own dashboards — flag as
"as of July 2026" in any copy that cites them.

## Competitive benchmark

| App | Rating | Volume | Source |
|---|---|---|---|
| **LOFT Living** (RealPage) | 1.94★ | 5.2K ratings (Android) | Aggregator |
| **Zego Resident** (PayLease) | 3.56★ | ~2K ratings | Aggregator |
| **RentCafe Resident** (Yardi) | **4.7★** | 164K reviews, 1M+ downloads | **User-verified, Google Play, direct screenshot** |

LOFT isn't just below-average — it's in a different tier from a
same-category competitor with 30x the review volume and a near-perfect
score. Replaces the site's current "2.4★ / 6,000+ reviews" claim, which is
now stale and actually undersells how bad the gap is.

## Complaint themes (re-confirmed against current reviews)

1. **Forced re-login every session** — no persistence, no biometric login.
2. **Crashes / failures after app updates.**
3. **Inconsistent UI / design language** — reviewers describe pages as
   feeling like separate embedded web pages, not one native app.
4. **Payment failures and rigid payment rules** — can't pay early, can't
   customize amount, submissions silently fail.
5. **"Invalid token" / random logout errors** (also present on Zego —
   suggests a shared category-wide pattern, not just a LOFT-specific bug).
6. **Buggy rewards / secondary features** overshadowing the core payment
   and maintenance-request tasks.

## Root-cause analysis (inferred from public behavior — not insider knowledge)

**Symptom: forced re-login every session, "invalid token" errors, no
biometric.**
Likely cause: session tokens aren't being persisted or refreshed properly —
either short-lived tokens with no refresh-token flow, or auth state that
isn't wired into native secure storage (Keychain/Keystore), so biometric
unlock has nothing durable to unlock. If the screens are server-rendered
(see below), session cookies scoped to a webview may not survive between
app launches, forcing a full re-auth every time rather than a silent
token refresh.

**Symptom: can't pay early, can't customize payment amount, submissions
silently fail.**
Likely cause: payment logic without idempotency handling. Retrying a
timed-out request risks a duplicate charge, so instead of building a
proper payment state machine (submit → pending → confirmed, safe to
retry), the app appears to sidestep the risk by restricting what a user
can even attempt — fixed amounts, no early payment, no editable in-flight
state. The "silent failure" reports look like exactly what happens when a
request times out client-side with no distinct error state to show.

**Symptom: inconsistent UI, "just web frames," breaks after updates.**
Likely cause: a webview-shell architecture — each screen is a separately
styled web page loaded inside a thin native wrapper, rather than truly
native (or React Native/Flutter) screens sharing one design system. That
explains the inconsistent look (each "page" was built independently) and
why app *updates* specifically trigger crashes — webview cache/version
mismatches and JS-bridge breakage are a known failure mode for that
architecture, distinct from a typical native-app update.

## What this means for the redesign

The three flows already scoped in `LOFT-LIVING-PLAN.md` (sign-in,
rent-payment, maintenance) map directly onto the three root causes above —
each flow's redesign should visibly address its specific failure mode, not
just look nicer:

- **Sign-in** → persistent session + biometric unlock, one native auth
  state instead of a re-auth-per-webview pattern.
- **Rent-payment** → a visible payment state machine (submit → pending →
  confirmed) so retries are safe and the user always sees *why* something
  did or didn't go through.
- **Maintenance** → a single consistent native design system across the
  flow, replacing the "stitched-together web pages" feel.
