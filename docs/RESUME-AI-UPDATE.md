# Résumé — AI / LLM Update

Vetted AI/LLM content to add to the résumé. Everything here maps to real,
demonstrable work (see the portfolio's Work section and About → AI & LLM),
so it holds up in an interview. Nothing is fabricated.

**How to use:** paste into a résumé-editing session and ask it to integrate
this into the existing résumé format and tone, keeping the résumé to one page.
Don't invent metrics — leave the bracketed placeholders to fill or cut.

---

## Skills line (add to Technical Skills)

> **AI / LLM:** Copilot Studio (agent building) · Claude API · ChatGPT · prompt design · schema-validated LLM outputs · GitHub / Microsoft Copilot

Short variant if space is tight:

> **AI / LLM:** Copilot Studio, Claude API, ChatGPT, prompt design, schema-validated outputs, Copilot

---

## Bullets (lead with the DevOps agent — it's the strongest)

- Built a **Copilot Studio agent** integrated with the team's **Azure DevOps**
  board that **creates and updates epics, features, and user stories**, pulls
  board reports and summaries on demand, and **drafts requirements, meeting
  notes, and communications** — cutting manual work-item upkeep and
  documentation overhead for the BA workflow[, saving ~X hours/week].
- Shipped **Clearcast**, a production weather PWA that uses the **Claude API**
  to turn raw forecasts into structured, plain-English recommendations —
  validated against a schema at runtime so a bad model response fails safely
  instead of crashing.
- Engineered the LLM layer for **cost and reliability**: trimmed model context,
  added an LRU cache with a daily call cap, and handled errors gracefully —
  backed by 38 unit tests and a CI pipeline.
- Designed **AI-backed product features** (e.g., Valora's "next best money move"
  insight) and use **ChatGPT / GitHub Copilot** day-to-day to accelerate
  development.

---

## Optional summary / headline tweak

> Software engineer & business analyst who ships full-stack products **and
> AI/LLM-powered features and agents** that deliver measurable results.

---

## Notes (for editing — not for the résumé)

- The `[~X hours/week]` placeholder in bullet 1 is the one spot worth
  quantifying. Use a figure you can defend in an interview, or cut the bracket.
  Don't invent a number.
- If you don't use **Microsoft Copilot** (M365) separately from **Copilot
  Studio**, drop it from the skills line to stay precise.

## Source of truth (where each claim shows up in the portfolio)

- **Copilot Studio + Azure DevOps agent** — About → AI & LLM ("AI engineering &
  agents"). (Candidate for its own PII-safe case study in Work.)
- **Clearcast** — Work → Clearcast (Claude API, Zod-validated output, LRU cache,
  daily call cap, 38 tests + CI).
- **Valora** — Work → Valora ("AI Insight" feature).
- **AI-assisted delivery** — Chat App and the Inventory Shrink Reduction Form
  are tagged AI in the Work section (Copilot-assisted build / design).
