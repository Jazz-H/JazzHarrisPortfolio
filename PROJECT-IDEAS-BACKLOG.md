# Project Ideas Backlog

Candidate portfolio projects, unrelated to existing site work. Scoped to be
buildable with PII-safe / demo (or spec) assets so each can be showcased.

---

## 🎨 Branding & Design — two pieces to round out the section

### 1. Craft Beverage Brand & Packaging *(spec)* — pulled from site, pending real Figma work
A small-batch craft soda or cold-brew brand, logo through physical packaging.
Was live on the site as a "Coming soon" placeholder card with an AI-mockup
image; pulled off the site so the portfolio only shows finished/real work.

- **Scope / deliverables:** Logomark + wordmark, color & type system, can /
  bottle / label design with realistic mockups, and a one-page brand guide.
- **Stack:** Illustrator, Photoshop, Figma.
- **Why it's the stronger branding pick:** adds **packaging design** (a distinct,
  tangible discipline), and a beverage brand reads as on-narrative given the
  CPG / Coca-Cola background — credible, not a hobby piece.
- **Finished case-study copy (ready to paste back into `PROJECTS` once real
  Figma assets replace the placeholder image):**
  - `cat`: "Branding & Design", `kind`: "Branding", `title`: "Craft Beverage Brand & Packaging"
  - `tags`: ["Illustrator", "Photoshop", "Figma"]
  - `company`: "Self-initiated concept", `role`: "Brand & packaging design"
  - `body`: "A self-initiated brand identity and packaging concept for a small-batch craft beverage — taken from a single logomark through a full color and type system to shelf-ready can and label artwork."
  - `challenge`: "A small-batch craft beverage has to win the cooler: stand out against established brands, communicate flavor and personality at a glance, and stay legible from a full shelf down to a thumbnail product photo online."
  - `approach`: "Build the identity from one strong idea — a distinctive logomark and wordmark, a tight color and type system, and a flavor-led label layout that scales across can sizes. Design to production specs (dielines, print-ready color) and present it in realistic context mockups."
  - `outcome`: "A shelf-ready brand kit: logo suite, color and type system, can and label artwork, and a one-page brand guide, shown with realistic packaging mockups."
  - Existing brand direction to build on: "Wildroot" — craft soda, blackberry basil flavor, small-batch positioning (see prior mockup for color/type starting point: pink/orange/green/near-black palette).

### 2. UX Redesign Teardown *(UI/UX)* — shipped as a finished case study
Take a real product with a clunky flow, diagnose why it fails users, and
rebuild it — a before-and-after redesign that leans on the BA strengths
(research, problem-solving) more than pure visual output. Live on `PROJECTS`
as a finished piece, no longer a placeholder (it's the strongest
BA-methodology fit in the whole portfolio — see the recruiter-critique
conversation this came from). See **`LOFT-LIVING-PLAN.md`** and
**`LOFT-LIVING-RESEARCH.md`** for the execution plan and underlying research.

- **Delivered:** an affinity map of six complaint themes, a competitive
  benchmark (LOFT 1.94★ vs. Zego 3.56★ vs. RentCafe 4.7★), a root-cause
  analysis, a reasoned business case, and a real, installable PWA at
  `/loft-living` covering sign-in, rent-payment, and maintenance — not
  static screens.
- **Subject:** LOFT Living resident app (1.94★ across 5,200+ ratings) — a
  real, poorly-reviewed product with public complaints to mine. Unaffiliated
  concept.
- **Built with:** React (`components/LoftLivingApp.jsx`), not Figma — no
  Figma access was available in the sessions that built this, so a working
  PWA was built instead of a Figma prototype. Case-study copy and tags
  (React, PWA) reflect that; "Visit live" and "View code" links are real.
- **Why it fits:** shows analytical UX (research → problem → redesign) *and*
  the engineering to actually ship it, which most design-only portfolios
  lack and which pairs with the analyst + software-engineer background.

**Restoring Craft Beverage** (item 1 above): re-add the object to `PROJECTS` in
`components/Portfolio.jsx` (the fields above map directly), re-add the title
to `WORK_ORDER`, point `image`/`images` at the new real Figma exports, and
drop `status: "Coming soon"` once it's finished.

_Parked UX alternatives:_ travel itinerary planner, strength/MMA training
tracker, recipe & meal planner, home-renovation planner, enterprise request
portal.

_Backup branding idea (parked):_ Performance Auto Garage brand identity
(logo + merch + signage + social kit).

---

## ⚡ Power Apps — small projects to *learn the tool* (selection on hold)

Options for when you're ready to start learning; ordered easiest first. Each is a weekend-sized build on a SharePoint or
Dataverse list; all teach core Power Apps muscles.

1. **To-Do / Task app** — gallery + edit form over a list; add, complete,
   filter. _Teaches:_ galleries, forms, data sources, basic formulas.
2. **Expense & Receipt tracker** — log an expense, snap a receipt photo,
   categorize, running total + a simple chart. _Teaches:_ camera/attachments,
   aggregation, filtering.
3. **Pantry / Inventory stock** — items, quantities, a low-stock flag, search.
   _Teaches:_ CRUD, search/filter, conditional formatting.
4. **Event RSVP & check-in** — attendee list, check-in toggle, live count.
   _Teaches:_ Patch(), status toggles, counters.
5. **Feedback / Suggestion box** — submit feedback, an admin view, and a
   Power Automate email on new entry. _Teaches:_ forms + a first taste of flows.

_When ready for a portfolio-grade one:_ a **Project Intake & Prioritization**
app (intake → value/effort scoring → approval flow → Power BI dashboard) — a
strong BA/PMO showcase once the basics click.
