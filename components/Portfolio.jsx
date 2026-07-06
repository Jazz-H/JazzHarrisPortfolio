"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
  FiArrowLeft,
  FiArrowRight,
  FiArrowDown,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiX,
  FiMapPin,
  FiBriefcase,
  FiActivity,
  FiBookOpen,
  FiTrendingUp,
  FiCode,
  FiBarChart2,
  FiLayers,
  FiGlobe,
  FiPenTool,
  FiLock,
  FiCpu,
  FiPaperclip,
  FiCheckCircle,
} from "react-icons/fi";

const HEADSHOT_SRC = "/jazz-headshot.jpg";
const FIE_BLOG =
  "https://fiestudyabroad.wordpress.com/2020/04/13/jazz-wrapping-up-study-abroad-after-covid-19/";

const PROJECTS = [
  {
    cat: "Websites", title: "Valora", ai: true,
    body: "A personal budgeting web app that turns messy finances into clear, calm decisions. Track spending, set goals, and see where your money actually goes, privately and without forced bank linking. Live in public beta as a website, with a native mobile app on the way.",
    tags: ["React", "TypeScript", "JavaScript", "CSS", "HTML"], status: "Beta",
    image: "/assets/ValoraReports.jpg",
    images: [
      "/assets/ValoraOverview.jpg",
      "/assets/ValoraPlan.jpg",
      "/assets/ValoraSpending.jpg",
      "/assets/ValoraTransactions.jpg",
      "/assets/ValoraGoals.jpg",
      "/assets/ValoraDebt.jpg",
      "/assets/ValoraFlow.jpg",
    ],
    live: "https://getvalora.netlify.app",
    company: "Independent project", role: "Solo design & development",
    study: {
      challenge: "I was tired of budgeting apps that overpromised and boxed you into rigid UIs, where you'd spend ages entering your data only to be frustrated by how it was shown. Most also force you to link a bank account but give you no real control over your own data. I wanted the opposite: a calm, flexible app that answers what actually matters, like where my money is going and what's safe to spend right now, while keeping you in control of your data.",
      approach: "I designed and built Valora end to end in React and TypeScript: the visual system, data model, and product flows. The home Overview surfaces the essentials at a glance, including savings rate, a safe-to-spend number, cash reserve, income, and goal milestones, paired with an AI Insight that recommends your next money move. I leaned on my design background for a calm, legible UI, built a guided first run so new users reach value in minutes, and made it private by default. Your financial data stays on your device unless you opt into cloud backup, with no forced bank linking.",
      outcome: "Live in public beta as a website and gathering real user feedback to shape the roadmap, with a native mobile app next. I took it from concept to a working product, owning the design, UX, and engineering end to end.",
    },
  },
  {
    cat: "Websites", title: "Alamance Community Foundation",
    body: "The website for the Alamance Community Foundation, a Burlington, NC public charity that stewards over $27M in assets and grants roughly $1.9M a year to local nonprofits. I designed and built it as a freelance project, focused on credibility, clear navigation, and making it easy for donors to find programs and give.",
    tags: ["Squarespace", "HTML", "CSS", "JavaScript"], image: "/assets/AlamanceCover.jpg",
    images: [
      "/assets/AlamanceFunds.jpg",
      "/assets/AlamanceScholarships.jpg",
      "/assets/AlamanceGive.jpg",
      "/assets/AlamanceAbout.jpg",
    ],
    live: "https://www.alamancecommunityfoundation.org",
    company: "Alamance Community Foundation (freelance)", role: "Solo design & development",
    study: {
      challenge: "A foundation stewarding $27M+ in assets needs a site that instantly reads as credible, makes it effortless for donors to find programs and give, and that a small staff can keep current themselves.",
      approach: "Designed and built the site solo, with clear navigation, a trustworthy structure, and content the staff can update themselves.",
      outcome: "A polished, credible home for a foundation that distributes roughly $1.9M in grants a year across 30+ local nonprofits, easy for donors to navigate and for the team to maintain.",
    },
  },
  {
    cat: "Websites", title: "Electric Supplies Online",
    body: "A live e-commerce storefront for an electrical-supplies retailer, with a deep, technical catalog spanning lighting, circuit breakers, transformers, and dozens of categories in between. As the in-house designer and developer, I organized the catalog for fast discovery, shaped the storefront and merchandising, and kept the customer-facing experience running for a real, operating business.",
    tags: ["HTML", "CSS", "JavaScript"], image: "/assets/ElectricCover.jpg",
    images: [
      "/assets/ElectricStore.jpg",
      "/assets/ElectricHome.jpg",
      "/assets/ElectricSignin.jpg",
      "/assets/ElectricAbout.jpg",
    ],
    live: "https://electricsuppliesonline.com/",
    company: "Electric Supplies Online", role: "Designer & developer",
    study: {
      challenge: "An electrical-supplies retailer carries a deep, technical catalog: breakers, dimmers, transformers, indoor and outdoor lighting, and dozens of categories in between. In a category that has shifted heavily online, where most buyers now shop the web for parts, the job was to make that range easy for a contractor or homeowner to navigate and buy from, without getting lost, on a platform a small team could keep current.",
      approach: "Working as the in-house designer and developer, I structured the catalog into clear, browsable categories built around how customers actually shop, shaped the homepage and merchandising to surface promotions and featured products, and maintained the storefront, account, and checkout experience. The focus was the customer-facing experience and information architecture, not a from-scratch rebuild of the platform.",
      outcome: "A live, operating storefront that serves real customers across a large product catalog, organized so a shopper reaches the right part with less friction. It remains in active use today.",
    },
  },
  {
    cat: "Apps", title: "Clearcast", ai: true,
    body: "Clearcast is a production-ready weather PWA that turns a raw forecast into a plain-English plan for your day. It uses Claude to generate structured activity recommendations, adapts its theme to live weather conditions, and works offline as an installable app. Every layer, from the API design to the caching strategy to unit detection, is built for correctness, not just demo appeal.",
    tags: ["Next.js", "TypeScript", "Claude API", "PWA", "Tailwind"],
    image: "/assets/ClearcastCover.png", tall: true,
    images: [
      "/assets/ClearcastRecommendation.png",
      "/assets/ClearcastCurrent.png",
      "/assets/ClearcastDaily.png",
      "/assets/ClearcastRain.png",
      "/assets/ClearcastStorm.png",
    ],
    live: "https://useclearcast.netlify.app/", code: "https://github.com/Jazz-H/WeatherApp",
    company: "Independent project", role: "Solo design & development",
    study: {
      challenge: "Most weather apps hand you data and leave the decision to you. I wanted one that makes the call, turning a noisy forecast into a single confident recommendation. The harder goal was building it for correctness rather than demo appeal: keep the API key off the client, keep cost predictable, fail gracefully, and get the units right, all fast enough to run on every page load.",
      approach: "Built in Next.js and TypeScript in strict mode, with Tailwind, deployed on Netlify. A server-only route calls Claude Haiku and validates the JSON it returns against a Zod schema that doubles as the app's TypeScript types, so a bad model response becomes a handled 502 instead of a client crash. Forecasts come from Open-Meteo, trimmed to current conditions plus the next 12 hours before they reach Claude, then cached in a 500-entry LRU with a daily call cap to hold down latency and cost. Eight CSS sky themes follow the live weather code, units auto-detect from the geocoded country with a saved manual override, and a service worker makes it an installable PWA that serves the last forecast offline.",
      outcome: "Shipped and production-ready. Clearcast geocodes any city, auto-selects °F or °C by country, and renders an AI recommendation with color-coded activity verdicts and a best-time callout in seconds, on a background that shifts across eight weather conditions. It's backed by 38 unit tests, Playwright smoke tests, and a GitHub Actions pipeline that lints, type-checks, and tests on every push.",
    },
  },
  {
    cat: "Apps", title: "Chat App", ai: true,
    body: "Chat App is a real-time messaging platform that works the way people expect: instant delivery, no refresh, no lag. It supports public channels, one-to-one direct messages, emoji reactions, typing indicators, and image sharing, all backed by Firebase and secured with server-side Firestore rules. Built solo, end to end, with a full QA and regression pipeline.",
    tags: ["React", "TypeScript", "Firebase", "Firestore", "Vite", "Tailwind"], image: "/assets/ChatAppCover.png", tall: true,
    images: [
      "/assets/ChatAppDMs.png",
      "/assets/ChatAppActions.png",
      "/assets/ChatAppReactions.png",
      "/assets/ChatAppImage.png",
      "/assets/ChatAppSignin.png",
      "/assets/ChatAppMobile.png",
    ],
    live: "https://chatappdemo-e1b26.web.app", code: "https://github.com/Jazz-H/Chat-Application",
    company: "Independent project", role: "Solo design & development",
    study: {
      challenge: "The hard part of a chat app isn't the messaging. It's making everything feel instantaneous across rooms, DMs, reactions, and typing indicators, while keeping Firestore costs low, writes safe, and the UI honest when something goes wrong. Most tutorials skip the edge cases. I wanted to build the version that doesn't.",
      approach: "Built with React 18 and TypeScript on Vite, using Firebase Auth for multi-provider sign-in (email and password, Google OAuth, anonymous guest) and Firestore onSnapshot listeners for push-based real-time updates, with no polling and no WebSocket management. The chat shell is code-split with React.lazy so the Firestore SDK only loads after sign-in, keeping the initial bundle lean. Security rules enforce access control server-side: authors-only edits and deletes, explicit membership checks for DMs, and content validation on every write. Typing indicators use throttled writes with client-side auto-expiry to keep costs predictable, images are compressed client-side through a canvas pipeline before storing, and messages paginate 25 at a time. A 21-check Playwright suite runs against the live dev server after every change to catch layout, auth, and interaction regressions automatically.",
      outcome: "Shipped a feature-complete chat platform across desktop and mobile: five public channels with real-time messaging and message grouping, one-to-one direct messages with deterministic conversation IDs, emoji reactions with live per-user counts, author-only edit and delete enforced on both client and server, live typing indicators with stale-entry handling, and image sharing with client-side compression. Three sign-in methods map every Firebase error code to human-readable copy, and the layout adapts from a collapsible desktop sidebar to a slide-out mobile drawer. Along the way I found and fixed five QA issues, from a silent failure on message actions to a blob URL memory leak on unmount.",
    },
  },
  {
    cat: "Power Apps & Data", kind: "Data", title: "DSD Support Operations Dashboard",
    body: "A ServiceNow analytics dashboard for Osapiens, the DSD (direct store delivery) routing app at Coca-Cola Consolidated, where I'm the primary support for Tier 2 incidents. It monitors a redesigned support model: Tier-1 vs Tier-2 routing, knowledge-base deflection, SLA health, and vendor escalations, so the team can see at a glance where work is being resolved and what to fix next. Visuals recreated without internal data for confidentiality.",
    tags: ["ServiceNow"], confidential: true, diagram: "dsd",
    image: "/assets/SupportDashTeam.jpg", tall: true,
    images: [
      "/assets/SupportDashPersonal.jpg",
      "/assets/SupportDashTeam.jpg",
      "/assets/SupportDashService.jpg",
    ],
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "The Osapiens routing app was sending 5+ tickets a day straight to Tier 2, with the first-line Service Center Team escalating entry-level issues instead of resolving them, and Tier 2 carrying an overnight on-call rotation. The fix wasn't more people; it was changing where work got resolved.",
      approach: "I analyzed the escalation pattern to find which issue types Tier 1 could own, and recognized the Service Center Team was missing the permissions inside the Osapiens app they needed to triage and resolve in the first place. I redesigned the support model around that: getting them the right access, writing step-by-step knowledge-base articles (cloud backup, shipment reset, mobile PIN, vendor e-bonding, routing) so they could resolve at first contact, routing after-hours escalations directly to CONA instead of a Tier 2 overnight on-call, and keeping a clear path to the vendor for true exceptions. I ran a training walkthrough and built a ServiceNow dashboard to monitor Tier-1 vs Tier-2 routing, KB deflection, and SLA health.",
      outcome: "Tier 2 escalations fell from 5+ a day to 2-3 a week, about a 95% reduction, and the after-hours on-call rotation was eliminated: the Service Center Team absorbed first-line resolution and after-hours escalations now route to CONA. Drivers and warehouse users get faster answers at Tier 1, with vendor escalation reserved for genuine exceptions.",
    },
  },
  {
    cat: "Power Apps & Data", kind: "Data", title: "Activity & Objective Dashboard",
    body: "A self-service Power BI dashboard, fed by a SharePoint form, that turns everyday BA work into a live view of progress against my 2026 objectives — instead of something pieced together from memory at review time. I designed the data model and multi-page report end to end; the data shown is generic for confidentiality.",
    tags: ["Power BI", "Power Query", "DAX", "SharePoint"], confidential: true, diagram: "activity",
    image: "/assets/ActivityCover.jpg", tall: true,
    images: [
      "/assets/ActivityOverview.jpg",
      "/assets/ActivityObjectives.jpg",
      "/assets/ActivityEffort.jpg",
      "/assets/ActivityLog.jpg",
      "/assets/ActivityStatus.jpg",
    ],
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "Across multiple projects and a set of annual objectives, I had no single, current view of where my effort was going or how close each objective was. Progress got reconstructed manually at review time, which was slow and always out of date.",
      approach: "I designed a small data model where every activity maps to a project, an objective, an activity type, and a competency behavior, captured through a SharePoint form for fast logging. On top of it I built a multi-page Power BI report: objective progress against target with on-track and needs-focus banding, an effort matrix of hours by project and activity type, project and behavior mix, delivery status and throughput, and a drill-down activity log back to the source records. I modeled, built, and wired it end to end. The data shown here is generic for confidentiality.",
      outcome: "A live, self-service view of objective progress that updates as I log work, so I can rebalance effort during the year instead of finding out at review time. It is the same shape of work I do for stakeholders, applied to my own goals: structured data in, a clear decision out.",
    },
  },
  {
    cat: "Agents", kind: "AI Agent", title: "Copilot Studio DevOps Agent",
    ai: true, confidential: true, noLink: true, diagram: "agent",
    image: "/assets/AgentCover.png", tall: true,
    images: ["/assets/AgentCover.png", "/assets/AgentTeams.png", "/assets/AgentBoard.png"],
    tags: ["Copilot Studio", "Azure DevOps", "Microsoft Teams"],
    body: "A Copilot Studio agent wired to my team's Azure DevOps board. From a plain-language ask in Microsoft Teams it creates and updates epics, features, and user stories, pulls board status and summaries, and drafts requirements, meeting notes, and communications — turning repetitive BA upkeep into a single request. Built and used on the job; shown without internal data for confidentiality.",
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "A lot of business-analyst work is repetitive by nature: opening and updating epics, features, and user stories in Azure DevOps, pulling board status together for stakeholders, and hand-writing the same shapes of requirements, meeting notes, and updates. It's necessary, but it's administration that eats time better spent on analysis.",
      approach: "I built an agent in Copilot Studio and connected it to my team's Azure DevOps board through the Azure DevOps connector, so it acts on real work items rather than a copy. From a plain-language request in Teams it creates and updates epics, features, and user stories, pulls back board status and summaries on demand, and drafts requirements, meeting notes, and communications from a short prompt. I designed the topics and grounding so responses reflect the live board, and kept a human in the loop to review before anything is finalized. The board and its data aren't shown here for confidentiality.",
      outcome: "Routine work-item upkeep and first drafts now start from a sentence in Teams instead of a manual pass through the board and a blank document. It shifts my time from administration toward the analysis the role is actually for, and gives the team a faster, more consistent way to keep the board and its paper trail current.",
    },
  },
  {
    cat: "Branding & Design", kind: "Branding", title: "Inventory Shrink Reduction Form", noLink: true, ai: true,
    body: "An app icon and visual identity I designed for a shrink-reporting form I supported as the BA. The form replaced a manual email process for logging excessive inventory shrink, and to make an internal tool feel like a real product and earn field adoption, I created a branded clipboard mark that reads instantly on a phone home screen. It shipped as a complete, production-ready app icon set at every screen density.",
    tags: ["Copilot", "Photoshop"],
    image: "/assets/ShrinkLogoCover.jpg",
    images: [
      "/assets/ShrinkLogo1.jpg",
      "/assets/ShrinkLogo2.jpg",
    ],
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "The excessive-shrink reporting process was a manual email template, which created friction in the field and made the data hard to track or trust. As it was digitized into a SharePoint form and mobile app, it had no identity, and an unbranded internal tool is easy for busy field users to overlook.",
      approach: "I designed an app icon and visual identity for the form: a clipboard mark carrying the report's checklist motif in the company brand red, built to stay legible from a full-size home-screen icon down to the smallest density. I delivered it as a complete, production-ready icon set, from 48 up to 192 px, so it could ship cleanly to every device.",
      outcome: "The form launched with a clear, recognizable identity and was pushed to all field devices, so users could find and trust it from day one. The branding turned an internal form into something that looked and felt like a real product, supporting fast adoption across sales and service.",
    },
  },
  // --- Scaffolded concept pieces (no live assets yet). Add image/images and
  // refine the case study, then this renders like any other project. ---
  {
    cat: "Branding & Design", kind: "Branding", title: "Craft Beverage Brand & Packaging", noLink: true, status: "Concept",
    body: "A self-initiated brand identity and packaging concept for a small-batch craft beverage — taken from a single logomark through a full color and type system to shelf-ready can and label artwork.",
    tags: ["Illustrator", "Photoshop", "Figma"],
    image: "/assets/BeverageCover.png", tall: true,
    images: ["/assets/BeverageCover.png", "/assets/BeverageSystem.png", "/assets/BeveragePackaging.png"],
    company: "Self-initiated concept", role: "Brand & packaging design",
    study: {
      challenge: "A small-batch craft beverage has to win the cooler: stand out against established brands, communicate flavor and personality at a glance, and stay legible from a full shelf down to a thumbnail product photo online.",
      approach: "Build the identity from one strong idea — a distinctive logomark and wordmark, a tight color and type system, and a flavor-led label layout that scales across can sizes. Design to production specs (dielines, print-ready color) and present it in realistic context mockups.",
      outcome: "A shelf-ready brand kit: logo suite, color and type system, can and label artwork, and a one-page brand guide, shown with realistic packaging mockups.",
    },
  },
  {
    cat: "Branding & Design", kind: "UI/UX", title: "LOFT Living — UX Redesign", noLink: true, status: "Concept",
    body: "A self-initiated, unaffiliated redesign of LOFT Living, a property-management resident app at 2.4 stars across 6,000+ reviews. I clustered the public complaints into six themes, benchmarked LOFT against higher-rated peers, traced the failures to likely architectural root causes, and sized the business impact — then rebuilt the sign-in, rent-payment, and maintenance flows around what residents hit most.",
    tags: ["Figma", "FigJam", "Maze"],
    image: "/assets/UxCover.png", tall: true,
    images: ["/assets/UxCover.png", "/assets/UxFindings.png", "/assets/UxBench.png", "/assets/UxTech.png", "/assets/UxBiz.png", "/assets/UxBefore.png", "/assets/UxAfter.png", "/assets/UxFigma.png"],
    company: "Self-initiated concept", role: "UX research, design & systems analysis",
    study: {
      challenge: "LOFT Living promises 'everything resident in one app,' but at 2.4 stars across 6,000+ reviews, residents disagree — while peer apps like RentCafe (4.8) and Zego (4.5) clear the bar easily. Clustering the public complaints surfaced six themes, and the biggest isn't cosmetic: people can't reliably sign in, then hit a confusing payment center with surprise fees, while the tasks they came for (rent, maintenance) sit buried under a five-item nav.",
      approach: "I built an affinity map from the public reviews to cluster the complaints into six themes, benchmarked LOFT against higher-rated peers to see what 'good' looks like, and connected the worst failures to their likely architectural root causes — a webview shell, fragile session handling, non-idempotent payments — so the fix targets systems, not just screens. Prioritizing by what blocks the core jobs (pay rent, request maintenance), the redesign lands on passwordless sign-in, a task-first home, fees shown up front, and a simplified nav — from an annotated before to a hi-fi after on a small design system.",
      outcome: "A research-driven before-and-after: the affinity map of six review themes, a competitive benchmark, a technical read tracing symptoms to likely root causes (from the outside), the business case for fixing it, an annotated teardown, the reworked sign-in and rent-payment flows, a clean hi-fi UI, and a clickable prototype — each change traced back to the complaint it resolves.",
    },
  },
];
// Category order mirrors the hero line ("websites, applications, and
// dashboards"), leading with the strongest disciplines and ending with the
// concept-heavy design work. Categories with no projects are hidden (e.g.
// "Apps" reappears automatically once an Apps project is added).
const CAT_ORDER = ["Websites", "Apps", "Agents", "Power Apps & Data", "Branding & Design"];
// "All" (reset) first, then the featured cross-cutting "AI" lens, then the
// categories in narrative order.
const FILTERS = [
  "All",
  ...(PROJECTS.some((p) => p.ai) ? ["AI"] : []),
  ...CAT_ORDER.filter((c) => PROJECTS.some((p) => p.cat === c)),
];
// Curated default ("All") order — a greatest-hits interleave that leads with
// range (product · AI app · enterprise dashboard) instead of grouping by
// category, keeps real work ahead of concepts, and ends on the polished
// concept pieces. Category filters re-slice this same list, so each category
// still reads strongest-first. Unlisted projects fall to the end.
const WORK_ORDER = [
  "Valora",
  "Clearcast",
  "Copilot Studio DevOps Agent",
  "DSD Support Operations Dashboard",
  "Alamance Community Foundation",
  "Chat App",
  "Activity & Objective Dashboard",
  "Electric Supplies Online",
  "Inventory Shrink Reduction Form",
  "Craft Beverage Brand & Packaging",
  "LOFT Living — UX Redesign",
];
const ORDERED_PROJECTS = [...PROJECTS].sort(
  (a, b) =>
    (WORK_ORDER.indexOf(a.title) + 1 || Infinity) -
    (WORK_ORDER.indexOf(b.title) + 1 || Infinity)
);
const TECH_GROUPS = [
  { label: "Languages", Icon: FiCode, items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frameworks & UI", Icon: FiLayers, items: ["React", "Next.js"] },
  { label: "AI & LLM", Icon: FiCpu, items: ["Claude", "Claude API", "Copilot Studio", "ChatGPT", "GitHub Copilot"] },
  { label: "Data & Power Platform", Icon: FiBarChart2, items: ["Power BI", "Power Apps", "SharePoint"] },
  { label: "Design & UX/UI", Icon: FiPenTool, items: ["Figma", "Photoshop", "Illustrator"] },
];
const SERVICES = [
  { Icon: FiTrendingUp, title: "Business analysis & strategy", body: "Translating business goals into clear requirements and a roadmap, working between stakeholders, vendors, and engineers to ship the right thing." },
  { Icon: FiCode, title: "Software & web development", body: "Building software and responsive websites, from applications to custom tools to polished web experiences, with React, Next.js, and modern tooling. Functional, reliable, and a pleasure to use." },
  { Icon: FiCpu, title: "AI engineering & agents", body: "Building with AI on both ends: LLM-powered product features and low-code agents. I shipped Clearcast on the Claude API with schema-validated outputs and cost controls, and built a Copilot Studio agent wired to our Azure DevOps board that creates and updates epics, features, and user stories, pulls board summaries, and drafts requirements, notes, and communications." },
  { Icon: FiBarChart2, title: "Data & dashboards", body: "Turning raw data into clear, decision-ready dashboards and reports with Power BI, Tableau, and the Python data stack." },
];
const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const EMAIL = "mauraharris948@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const SOCIALS = [
  { Icon: FiGithub, label: "GitHub", href: "https://github.com/Jazz-H" },
  { Icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/maurajharris/" },
  { Icon: FiMail, label: "Email", href: GMAIL_COMPOSE },
  { Icon: FiFileText, label: "Résumé", href: "/Jazz-Harris-Resume.pdf" },
];
const CAT_GRADIENT = {
  Websites: "linear-gradient(135deg, #4a9bf0 0%, #1a4e8f 100%)",
  Apps: "linear-gradient(135deg, #5f8ff0 0%, #2a3f86 100%)",
  Agents: "linear-gradient(135deg, #3a8bec 0%, #163f78 100%)",
  "Power Apps & Data": "linear-gradient(135deg, #3fa8d6 0%, #1a4f74 100%)",
  "Branding & Design": "linear-gradient(135deg, #7f9ff0 0%, #3a3f86 100%)",
};
// Result highlights per project (qualitative stat-style — swap in real
// numbers like donations raised, users, traffic, or time saved any time).
const METRICS = {
  "DSD Support Operations Dashboard": [
    { value: "~95% fewer", label: "Tier 2 escalations: 5+/day to 2-3/week" },
    { value: "On-call ended", label: "After-hours absorbed by Tier 1 (SCT)" },
    { value: "73% KB deflection", label: "New articles let first-line self-serve" },
  ],
  "Activity & Objective Dashboard": [
    { value: "Live progress", label: "Objective tracking that updates as work is logged" },
    { value: "End-to-end", label: "SharePoint form to Power BI, modeled and built solo" },
    { value: "Objective-aligned", label: "Every activity maps to a 2026 objective" },
  ],
  "Inventory Shrink Reduction Form": [
    { value: "Day one", label: "Launched with a ready identity, pushed to all field devices" },
    { value: "5 densities", label: "Production app icon set, 48 to 192 px" },
    { value: "Email to app", label: "A manual template reimagined as a branded mobile form" },
  ],
  "Valora": [
    { value: "Privacy-first", label: "Your data stays yours, no forced bank linking" },
    { value: "End-to-end", label: "Designed & built solo" },
    { value: "AI insights", label: "Recommends your next money move" },
  ],
  "Alamance Community Foundation": [
    { value: "$27M+", label: "Assets the foundation stewards" },
    { value: "$1.9M / yr", label: "Granted to 30+ local nonprofits" },
    { value: "Freelance", label: "Designed & built solo, end-to-end" },
  ],
  "Electric Supplies Online": [
    { value: "Live store", label: "Real, operating e-commerce business" },
    { value: "Deep catalog", label: "Lighting, breakers, transformers & more" },
    { value: "Owned in-house", label: "Designer and developer of the storefront" },
  ],
  "Chat App": [
    { value: "Real-time", label: "Messages, reactions & typing sync instantly" },
    { value: "Channels + DMs", label: "Public rooms and private conversations" },
    { value: "Type-safe & tested", label: "TS strict, CI-gated tests, auto-deploy" },
  ],
  "Clearcast": [
    { value: "AI recommendations", label: "Claude verdicts, validated at runtime with Zod" },
    { value: "Built for correctness", label: "TS strict, 38 unit tests, Playwright, CI/CD" },
    { value: "Adaptive & offline", label: "8 live sky themes, installable PWA, smart units" },
  ],
};
// Headline KPI band shown in the about section — career-level highlights spanning
// the full journey (Encompass, Canidium, Central Piedmont, Coca-Cola + freelance),
// drawn from the résumé and portfolio, not just the work grid.
const IMPACT = [
  { value: "5+ yrs", label: "Across software engineering & business analysis roles" },
  { value: "20+", label: "Projects delivered, from enterprise platforms to freelance builds" },
  { value: "$27M+", label: "In assets at a foundation whose site I built — ~$1.9M granted yearly to 30+ nonprofits" },
  { value: "~95%", label: "Fewer tickets on Coca-Cola's Osapiens app after I assisted on changing its triage model — ending the team's after-hours on-call" },
];
// Recognition quotes (social proof) — shown as a credibility block in the about
// view and as a single pull-quote on contact. Attributed to the named author
// (provided by the site owner); both lines are from internal kudos on the
// shrink-reporting form work.
const PRAISE = [
  {
    text: "Delivered a high-quality MVP with impressive speed, and with the end user in mind.",
    by: "John Palmer",
    role: "Senior Director, Operational Insights & Sales Effectiveness · Coca-Cola Consolidated",
  },
  {
    text: "Responsiveness, problem-solving mindset, and the ability to execute under a tight timeline truly stood out.",
    by: "John Palmer",
    role: "Senior Director, Operational Insights & Sales Effectiveness · Coca-Cola Consolidated",
  },
];

export default function Portfolio() {
  const [view, setView] = useState("work");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const rootRef = useRef(null);
  const didMount = useRef(false);
  // "stage" (default) scrolls new content to the top of .dp-stage — correct
  // for regular nav, since on mobile .dp-stage sits below the hero/poster and
  // switching sections shouldn't re-show it. "top" scrolls to the true page
  // top instead, for the logo's "back to home" click.
  const scrollMode = useRef("stage");

  useEffect(() => {
    const r = rootRef.current;
    if (!r) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) r.classList.add("motion-on");
  }, []);

  // Paint the page surface to match the portfolio canvas while it's mounted,
  // then restore on navigation away (so /work and other routes keep their theme).
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prev = { html: html.style.background, body: body.style.background };
    html.style.background = "#000000";
    body.style.background = "#000000";
    return () => {
      html.style.background = prev.html;
      body.style.background = prev.body;
    };
  }, []);

  useEffect(() => {
    // Don't jump on first load — let the page open at the hero/poster.
    if (!didMount.current) { didMount.current = true; return; }
    if (scrollMode.current === "top") {
      window.scrollTo({ top: 0, behavior: "auto" });
      scrollMode.current = "stage";
      return;
    }
    const stage = document.querySelector(".dp-stage");
    if (stage) {
      const top = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [view, selected]);

  const go = (v, opts) => { setSelected(null); setView(v); scrollMode.current = (opts && opts.toTop) ? "top" : "stage"; };
  const project = PROJECTS.find((p) => p.title === selected);

  return (
    <div className="dp-root" ref={rootRef}>
      <style>{CSS}</style>
      <div className="dp-shell">
        <Poster view={view} go={go} />
        <main className="dp-stage">
          <div className="dp-stagewrap" key={view + ":" + (selected || "")}>
            {view === "work" && !selected && <WorkList onOpen={setSelected} filter={filter} setFilter={setFilter} />}
            {view === "work" && selected && <Detail p={project} onBack={() => setSelected(null)} filter={filter} />}
            {view === "about" && <About go={go} />}
            {view === "contact" && <Contact />}
          </div>
        </main>
      </div>
      <div className="dp-sticky-bar">
        <button type="button" className="dp-sticky-cta" onClick={() => go("contact")}>
          Start a project <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function Poster({ view, go }) {
  return (
    <aside className="dp-poster">
      <div className="dp-glow" aria-hidden="true" />
      <button type="button" className="dp-id" onClick={() => go("work", { toTop: true })} aria-label="Jazz Harris — back to top">
        <span className="dp-mark" aria-hidden="true">
          <svg viewBox="0 0 132 104" fill="none">
            <path d="M23 24 H11 V80 H23" stroke="#1e78e4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M109 24 H121 V80 H109" stroke="#1e78e4" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M64 31 V73" stroke="#1e78e4" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M47 32 V58 C47 68 40 70 33 69" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" />
            <path d="M81 32 V72 M81 52 H101 M101 32 V72" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="dp-id-text">
          <span className="dp-name">Jazz Harris</span>
          <span className="dp-role">Software engineer &amp; business analyst</span>
        </span>
      </button>

      <div className="dp-statement">
        <p className="dp-kicker">Portfolio · 2026</p>
        <h1 className="dp-h1">
          I transform business challenges into websites, applications, and dashboards that deliver{" "}
          <span className="dp-mark-text">measurable results</span>.
        </h1>
        <span className="dp-status"><i className="dp-dot" /> Booking new projects for 2026</span>
      </div>

      <span className="dp-poster-rule" aria-hidden="true" />

      <nav className="dp-nav" aria-label="Sections">
        {NAV.map((n, i) => (
          <button
            key={n.id}
            className={"dp-nav-item" + (view === n.id ? " is-active" : "")}
            onClick={() => go(n.id)}
            aria-current={view === n.id ? "page" : undefined}
          >
            <span className="dp-nav-idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="dp-nav-label">{n.label}</span>
          </button>
        ))}
      </nav>

      <div className="dp-poster-bottom">
        <div className="dp-social">
          {SOCIALS.map(({ Icon, label, href }) => (
            <a
              key={label}
              className="dp-social-btn"
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <span className="dp-divider" aria-hidden="true" />
        <button className="dp-btn dp-btn-primary dp-poster-cta" onClick={() => go("contact")}>
          Start a project <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

function Thumb({ p }) {
  return (
    <span className="dp-thumb" style={{ background: CAT_GRADIENT[p.cat] }}>
      {p.image ? (
        <img className="dp-thumb-img" src={p.image} alt="" loading="lazy" />
      ) : (
        <span className="dp-thumb-mono">{p.title.split(" ")[0]}</span>
      )}
      <span className="dp-thumb-scrim" aria-hidden="true" />
      <span className="dp-thumb-cat">{p.kind || p.cat}</span>
      {p.ai && <span className={"dp-thumb-ai" + (p.status ? " is-stacked" : "")}><FiCpu aria-hidden="true" /> AI</span>}
      {p.status && <span className="dp-badge">{p.status}</span>}
    </span>
  );
}

// Fades + rises `.dp-reveal` descendants of the returned ref into view once,
// the first time each scrolls into the viewport. Skips straight to visible
// when the user prefers reduced motion (or the browser lacks the API).
function useReveal(deps) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".dp-reveal");
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

// A single "by the numbers" stat: fades in like the other reveal grids, and
// counts its leading number up from 0 the first time it scrolls into view.
function ImpactStat({ value, label, index }) {
  const ref = useRef(null);
  // If motion is reduced (or IO is unsupported) skip the effect's observer
  // entirely and start already "in" — resolved once, in the lazy initializer,
  // rather than via a synchronous setState in the effect body.
  const [on, setOn] = useState(
    () => typeof window !== "undefined" &&
      ((window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) || !("IntersectionObserver" in window))
  );
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || on) return;
    const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setOn(true);
          io.unobserve(el);
          if (!match) return;
          const prefix = match[1], target = parseFloat(match[2]), suffix = match[3];
          const isInt = Number.isInteger(target);
          const dur = 1100, start = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const cur = target * eased;
            setDisplay(`${prefix}${isInt ? Math.round(cur) : cur.toFixed(1)}${suffix}`);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <div className={"dp-impact-stat dp-reveal" + (on ? " is-in" : "")} style={{ "--i": index }} ref={ref}>
      <span className="dp-impact-v">{display}</span>
      <span className="dp-impact-l">{label}</span>
    </div>
  );
}

function WorkList({ onOpen, filter, setFilter }) {
  const shown = ORDERED_PROJECTS.filter((p) => filter === "All" || (filter === "AI" ? p.ai : p.cat === filter));
  const filtersRef = useRef(null);
  const gridRef = useReveal([shown.length, filter]);
  const [moreRight, setMoreRight] = useState(false);

  useEffect(() => {
    const el = filtersRef.current;
    if (!el) return;
    const update = () => {
      const overflow = el.scrollWidth - el.clientWidth > 1;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      setMoreRight(overflow && !atEnd);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Keep the selected filter fully in view, so it is never clipped under the fade.
  useEffect(() => {
    const el = filtersRef.current;
    if (!el) return;
    const active = el.querySelector(".dp-filter.is-active");
    if (!active) return;
    const target = active.offsetLeft - (el.clientWidth - active.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [filter]);

  return (
    <section className="dp-view">
      <div className="dp-work-head">
        <p className="dp-label">Selected work · {shown.length}</p>
        <div className={"dp-filters-wrap" + (moreRight ? " can-scroll-end" : "")}>
          <div className="dp-filters" role="tablist" aria-label="Filter work" ref={filtersRef}>
            {FILTERS.map((f) => (
              <button key={f} className={"dp-filter" + (filter === f ? " is-active" : "")} onClick={() => setFilter(f)} aria-pressed={filter === f}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="dp-grid" ref={gridRef}>
        {shown.map((p, i) => (
          <button className="dp-card dp-reveal" style={{ "--i": i }} key={p.title} onClick={() => onOpen(p.title)}>
            <Thumb p={p} />
            <span className="dp-card-body">
              <span className="dp-card-h">{p.title}</span>
              <span className="dp-card-p">{p.body}</span>
              <span className="dp-pills dp-card-pills">
                {p.tags.slice(0, 4).map((t) => (<span className="dp-pill" key={t}>{t}</span>))}
              </span>
              <span className="dp-card-open">Details <FiArrowRight aria-hidden="true" /></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Gallery({ images, title, gradient, status, fallbackWord, tall }) {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [broken, setBroken] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const multi = images.length > 1;

  const onScroll = () => {
    const el = trackRef.current;
    if (el) setIdx(Math.round(el.scrollLeft / el.clientWidth));
  };
  const go = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };
  const lbClamp = (i) => Math.max(0, Math.min(images.length - 1, i));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : lbClamp(v + 1)));
      else if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? v : lbClamp(v - 1)));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, images.length]);

  return (
    <div className="dp-gallery-wrap">
      <div
        className={"dp-gallery" + (tall ? " dp-gallery-tall" : "")}
        style={tall ? undefined : { background: gradient }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(idx + 1);
          if (e.key === "ArrowLeft") go(idx - 1);
        }}
      >
        {images.length && !broken ? (
          <div className="dp-gallery-track" ref={trackRef} onScroll={onScroll}>
            {images.map((src, i) => (
              <button
                type="button"
                className="dp-gallery-slide"
                key={src}
                onClick={() => setLightbox(i)}
                aria-label={multi ? `Enlarge ${title} screen ${i + 1}` : `Enlarge ${title}`}
              >
                <img
                  src={src}
                  alt={multi ? `${title} — screen ${i + 1}` : title}
                  loading={i === 0 ? undefined : "lazy"}
                  onError={() => { if (i === 0) setBroken(true); }}
                />
              </button>
            ))}
          </div>
        ) : (
          <span className="dp-thumb-mono dp-detail-mono">{fallbackWord}</span>
        )}
        {status && <span className="dp-badge dp-badge-lg">{status}</span>}
        {multi && (
          <>
            <button type="button" className="dp-gallery-nav dp-gallery-prev" aria-label="Previous image" onClick={() => go(idx - 1)} disabled={idx === 0}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="dp-gallery-nav dp-gallery-next" aria-label="Next image" onClick={() => go(idx + 1)} disabled={idx === images.length - 1}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      {multi && (
        <div className="dp-gallery-dots">
          {images.map((src, i) => (
            <button type="button" key={src} className={"dp-gallery-dot" + (i === idx ? " is-active" : "")} aria-label={`Go to image ${i + 1}`} aria-current={i === idx} onClick={() => go(i)} />
          ))}
        </div>
      )}
      {lightbox !== null && typeof document !== "undefined" && createPortal(
        <div className="dp-lightbox" role="dialog" aria-modal="true" aria-label={`${title} enlarged`} onClick={() => setLightbox(null)}>
          <button type="button" className="dp-lb-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <FiX aria-hidden="true" />
          </button>
          {multi && (
            <button type="button" className="dp-lb-nav dp-lb-prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); setLightbox(lbClamp(lightbox - 1)); }} disabled={lightbox === 0}>
              <FiChevronLeft aria-hidden="true" />
            </button>
          )}
          <img
            className="dp-lb-img"
            src={images[lightbox]}
            alt={multi ? `${title} — screen ${lightbox + 1}` : title}
            onClick={(e) => e.stopPropagation()}
          />
          {multi && (
            <button type="button" className="dp-lb-nav dp-lb-next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); setLightbox(lbClamp(lightbox + 1)); }} disabled={lightbox === images.length - 1}>
              <FiChevronRight aria-hidden="true" />
            </button>
          )}
          {multi && <div className="dp-lb-count">{lightbox + 1} / {images.length}</div>}
        </div>,
        document.body
      )}
    </div>
  );
}

// PII-safe visual proof for confidential internal tools: process/data-model
// flows that show the thinking and outcome without exposing any real data.
const DIAGRAM_CAPTION = {
  dsd: "The redesigned support model — before & after",
  activity: "The data model — from form to report",
  agent: "How the agent works — from a Teams ask to a saved work item",
};
function Diagram({ kind }) {
  if (kind === "dsd") {
    return (
      <div className="dp-diagram" role="img" aria-label="Support routing before and after the redesign. The chain runs Field users, Service Center Team (Tier 1), Tier 2 (DSD Team), Vendor. After granting the Service Center Team the Osapiens access they were missing and adding knowledge-base articles, first-line resolution moved to them, so far fewer tickets reach Tier 2; after-hours escalations route to CONA and the Tier 2 on-call ended.">
        <div className="dp-dgm-lane">
          <span className="dp-dgm-lane-l dp-dgm-before">Before</span>
          <div className="dp-dgm-flow">
            <span className="dp-dgm-node">Field users<small>Drivers &amp; warehouse</small></span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node">Service Center Team</span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node dp-dgm-bad">Tier 2 (DSD Team)</span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node">Vendor<small>True bugs — backend &amp; code</small></span>
          </div>
          <span className="dp-dgm-tag dp-dgm-tag-bad">5+ tickets/day · overnight on-call</span>
        </div>
        <div className="dp-dgm-lane">
          <span className="dp-dgm-lane-l dp-dgm-after">After</span>
          <div className="dp-dgm-flow">
            <span className="dp-dgm-node">Field users<small>Drivers &amp; warehouse</small></span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node dp-dgm-good">Service Center Team</span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node">Tier 2 (DSD Team)</span>
            <span className="dp-dgm-arrow" aria-hidden="true"><FiArrowRight /></span>
            <span className="dp-dgm-node">Vendor<small>True bugs — backend &amp; code</small></span>
          </div>
          <span className="dp-dgm-tag dp-dgm-tag-good">2–3 tickets/week · no on-call</span>
          <span className="dp-dgm-note">After hours, the Service Center Team escalates directly to CONA — not a Tier 2 on-call.</span>
        </div>
      </div>
    );
  }
  if (kind === "activity") {
    const DIMS = [
      { name: "Project", pk: "ProjectID", fields: "Name · Status" },
      { name: "Objective", pk: "ObjectiveID", fields: "Name · 2026 target" },
      { name: "Activity Type", pk: "ActivityTypeID", fields: "Name · Category" },
      { name: "Competency", pk: "BehaviorID", fields: "Behavior · Competency" },
    ];
    const PAGES = ["Objective progress", "Effort matrix", "Project & behavior mix", "Delivery status", "Activity log"];
    return (
      <div className="dp-diagram dp-diagram-activity" role="img" aria-label="Data model for the activity dashboard. A SharePoint form feeds an Activity fact table — one row per logged activity with hours, date and status — joined by key to four dimensions: Project, Objective, Activity Type and Competency Behavior. The model is surfaced as five Power BI report pages.">
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">Capture</span>
          <span className="dp-dgm-node dp-schema-src">SharePoint form<small>30-second entry</small></span>
        </div>
        <span className="dp-schema-arrow" aria-hidden="true"><FiArrowDown /></span>
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">Model · star schema</span>
          <div className="dp-schema-dims">
            {DIMS.map((d) => (
              <div className="dp-schema-dim" key={d.name}>
                <span className="dp-schema-h">{d.name}</span>
                <span className="dp-schema-pk">{d.pk}</span>
                <span className="dp-schema-f">{d.fields}</span>
              </div>
            ))}
          </div>
          <span className="dp-schema-join"><FiArrowDown aria-hidden="true" /> joined on keys</span>
          <div className="dp-schema-fact">
            <span className="dp-schema-h">Activity <small>fact · one row per logged activity</small></span>
            <div className="dp-schema-cols">
              {DIMS.map((d) => (<span className="dp-schema-fk" key={d.pk}>{d.pk}</span>))}
            </div>
            <div className="dp-schema-cols">
              <span className="dp-schema-m">Hours</span>
              <span className="dp-schema-m">Date</span>
              <span className="dp-schema-m">Status</span>
            </div>
          </div>
        </div>
        <span className="dp-schema-arrow" aria-hidden="true"><FiArrowDown /></span>
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">Report · 5 Power BI pages</span>
          <div className="dp-dgm-pages">
            {PAGES.map((pg) => (<span className="dp-dgm-page" key={pg}>{pg}</span>))}
          </div>
        </div>
      </div>
    );
  }
  if (kind === "agent") {
    const CAPS = [
      { h: "Work items", f: "Create & update epics, features, and user stories", eg: "New user story, with acceptance criteria" },
      { h: "Reports", f: "Board status & summaries, on demand", eg: "“What's still open this sprint?”" },
      { h: "Drafts", f: "Requirements, meeting notes, and comms", eg: "A stakeholder status update" },
    ];
    return (
      <div className="dp-diagram dp-diagram-activity dp-diagram-agent" role="img" aria-label="How the Copilot Studio agent works, in four steps. 1: I send a plain-language request in Microsoft Teams, for example asking it to create a user story for resetting a driver's app PIN. 2: the Copilot Studio agent interprets the request and reads or writes the live board through the Azure DevOps connector. 3: it does one of three jobs — create or update work items, pull board status and summaries, or draft requirements, notes and communications. 4: nothing is written to Azure DevOps until I review and confirm the draft.">
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">1 · Ask in Teams</span>
          <span className="dp-agent-bubble">&ldquo;Create a user story for resetting a driver&rsquo;s app PIN from the login screen — under the Driver Sign-in feature.&rdquo;</span>
        </div>
        <span className="dp-schema-arrow" aria-hidden="true"><FiArrowDown /></span>
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">2 · Copilot Studio agent</span>
          <span className="dp-dgm-node dp-dgm-good">Interprets the request &middot; grounded on the live board<small>Reads &amp; writes work items through the Azure DevOps connector</small></span>
        </div>
        <span className="dp-schema-arrow" aria-hidden="true"><FiArrowDown /></span>
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">3 · One of three jobs</span>
          <div className="dp-schema-dims">
            {CAPS.map((c) => (
              <div className="dp-schema-dim" key={c.h}>
                <span className="dp-schema-h">{c.h}</span>
                <span className="dp-schema-f">{c.f}</span>
                <span className="dp-agent-eg">{c.eg}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="dp-schema-arrow" aria-hidden="true"><FiArrowDown /></span>
        <div className="dp-schema-stage">
          <span className="dp-schema-tag">4 · I confirm, then it saves</span>
          <span className="dp-dgm-node">Human in the loop<small>Nothing is written to Azure DevOps until I review and approve the draft</small></span>
        </div>
      </div>
    );
  }
  return null;
}

function Detail({ p, onBack, filter = "All" }) {
  const studyRef = useReveal([p && p.title]);
  if (!p) return null;
  const gallery = (
    <Gallery
      images={p.images || (p.image ? [p.image] : [])}
      title={p.title}
      gradient={CAT_GRADIENT[p.cat]}
      status={p.status}
      fallbackWord={p.title.split(" ")[0]}
      tall={p.tall}
    />
  );
  return (
    <section className="dp-view dp-detail">
      <button className="dp-back" onClick={onBack}><FiArrowLeft aria-hidden="true" /> {filter === "All" ? "All work" : filter}</button>
      {gallery}
      <div className="dp-detail-head">
        <p className="dp-kicker">{p.kind || p.cat}{p.ai && <span className="dp-kicker-ai"><FiCpu aria-hidden="true" /> AI</span>}</p>
        <h2 className="dp-detail-h">{p.title}</h2>
      </div>
      <p className="dp-detail-overview">{p.body}</p>
      <div className="dp-meta">
        {p.company && <div><span className="dp-meta-l">Company</span><span className="dp-meta-v">{p.company}</span></div>}
        {p.role && <div><span className="dp-meta-l">Role</span><span className="dp-meta-v">{p.role}</span></div>}
      </div>
      <div className="dp-stack-row">
        <div className="dp-detail-stack">
          <span className="dp-meta-l">Stack</span>
          <div className="dp-pills">{p.tags.map((t) => (<span className="dp-pill" key={t}>{t}</span>))}</div>
        </div>
        <div className="dp-detail-links">
          {p.live && <a className="dp-btn dp-btn-primary" href={p.live} target="_blank" rel="noreferrer">Visit live <FiArrowUpRight aria-hidden="true" /></a>}
          {p.code && <a className="dp-btn dp-btn-ghost" href={p.code} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> View code</a>}
          {p.confidential && <span className="dp-detail-confidential"><FiLock aria-hidden="true" /> Confidential internal tool</span>}
          {!p.live && !p.code && !p.noLink && !p.confidential && <span className="dp-detail-soon">Link coming soon</span>}
        </div>
      </div>
      {p.study ? (
        <div className="dp-study" ref={studyRef}>
          <div className="dp-study-row">
            <span className="dp-study-l">Challenge</span>
            <p className="dp-study-p">{p.study.challenge}</p>
          </div>
          <div className="dp-study-row">
            <span className="dp-study-l">Approach</span>
            <p className="dp-study-p">{p.study.approach}</p>
          </div>
          {/* The diagram visualizes the approach — placed right after it, before the outcome. */}
          {p.diagram && (
            <figure className="dp-study-figure dp-reveal">
              <figcaption className="dp-study-figcap">{DIAGRAM_CAPTION[p.diagram]}</figcaption>
              <Diagram kind={p.diagram} />
            </figure>
          )}
          <div className="dp-study-row">
            <span className="dp-study-l">Outcome</span>
            <p className="dp-study-p">{p.study.outcome}</p>
          </div>
          {METRICS[p.title] && (
            <div className="dp-study-row">
              <span className="dp-study-l">Results</span>
              <div className="dp-metrics">
                {METRICS[p.title].map((m, i) => (
                  <div className="dp-metric dp-reveal" style={{ "--i": i }} key={m.value + m.label}>
                    <span className="dp-metric-v">{m.value}</span>
                    <span className="dp-metric-l">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="dp-detail-note">Your challenge → approach → outcome write-up goes here.</p>
      )}
    </section>
  );
}

function About({ go }) {
  const bentoRef = useReveal([]);
  const praiseRef = useReveal([]);
  return (
    <section className="dp-view dp-about">
      <div className="dp-bento" ref={bentoRef}>
        <div className="dp-bento-left">
          <div className="dp-bento-tile dp-bento-facts">
            <img className="dp-facts-avatar" src={HEADSHOT_SRC} alt="Jazz Harris" loading="lazy" />
            <div className="dp-facts-main">
              <p className="dp-sub">Quick facts</p>
              <div className="dp-about-facts">
                <div className="dp-fact"><FiMapPin aria-hidden="true" /><div><span className="dp-fact-l">Based in</span><span className="dp-fact-v">Charlotte, NC</span></div></div>
                <div className="dp-fact"><FiBriefcase aria-hidden="true" /><div><span className="dp-fact-l">By day</span><span className="dp-fact-v">Business Analyst · Coca-Cola Consolidated</span></div></div>
                <div className="dp-fact"><FiBookOpen aria-hidden="true" /><div><span className="dp-fact-l">Studied</span><span className="dp-fact-v">B.A. Computer Science · Elon University</span></div></div>
                <div className="dp-fact"><FiGlobe aria-hidden="true" /><div><span className="dp-fact-l">Studied abroad</span><span className="dp-fact-v">Dublin, Ireland · <a className="dp-link" href={FIE_BLOG} target="_blank" rel="noreferrer">FIE</a></span></div></div>
                <div className="dp-fact"><FiActivity aria-hidden="true" /><div><span className="dp-fact-l">Currently</span><span className="dp-fact-v">Building Valora, a budgeting app</span></div></div>
              </div>
            </div>
          </div>

          <details className="dp-acc dp-acc-stack">
            <summary className="dp-acc-sum">
              <span className="dp-acc-head">
                <span className="dp-sub">Tools &amp; technologies</span>
                <span className="dp-acc-preview">Full-stack dev · AI &amp; LLM · Data &amp; Power Platform · Design</span>
              </span>
              <FiChevronDown className="dp-acc-chev" aria-hidden="true" />
            </summary>
            <div className="dp-acc-body">
              <div className="dp-techgroups">
                {TECH_GROUPS.map(({ label, Icon, items }, i) => (
                  <div className="dp-service dp-techcard dp-reveal" style={{ "--i": i }} key={label}>
                    <span className="dp-techcard-icn"><Icon aria-hidden="true" /></span>
                    <h3 className="dp-service-h">{label}</h3>
                    <div className="dp-pills dp-techcard-pills">{items.map((t) => (<span className="dp-pill" key={t}>{t}</span>))}</div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>

        <div className="dp-bento-right">
          <div className="dp-bento-tile dp-bento-bio">
            <p className="dp-label">About</p>
            <h2 className="dp-detail-h">Builder by craft, analyst by training.</h2>
            <p className="dp-p">I studied Computer Science at Elon University, with minors in Art History and Digital Art, a blend that shapes how I work: technical problem-solving with a designer's eye. I also studied abroad in Dublin through FIE (Foundation for International Education), completing a software-engineering internship and writing about it on the <a className="dp-link" href={FIE_BLOG} target="_blank" rel="noreferrer">program blog</a>. Since then I've worked across both the technical and business sides of software, turning complex ideas into solutions that create real value.</p>
            <p className="dp-p">Today I'm a Business Analyst at Coca-Cola Consolidated, bridging business needs and technology. Outside of work I build websites, custom software, and tools for businesses and entrepreneurs, most recently Valora, a personal finance platform. When I'm not behind a screen: traveling, Legos, and anything with four wheels or two.</p>
          </div>

          <details className="dp-acc dp-acc-skills">
            <summary className="dp-acc-sum">
              <span className="dp-acc-head">
                <span className="dp-sub">Core skills</span>
                <span className="dp-acc-preview">Business analysis · Software &amp; web · AI &amp; LLM · Data</span>
              </span>
              <FiChevronDown className="dp-acc-chev" aria-hidden="true" />
            </summary>
            <div className="dp-acc-body">
              <div className="dp-bento-skills">
                {SERVICES.map(({ Icon, title, body }, i) => (
                  <div className="dp-service dp-reveal" style={{ "--i": i }} key={title}>
                    <span className="dp-service-icn"><Icon aria-hidden="true" /></span>
                    <h3 className="dp-service-h">{title}</h3>
                    <p className="dp-service-p">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="dp-about-impact">
        <p className="dp-label">By the numbers</p>
        <div className="dp-impact">
          {IMPACT.map((s, i) => (
            <ImpactStat key={s.value + s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>

      <div className="dp-about-praise">
        <p className="dp-label">Recognition</p>
        <div className="dp-praise-grid" ref={praiseRef}>
          {/* PRAISE[0] is featured on Contact; show the rest here to avoid repeating it */}
          {PRAISE.slice(1).map((q, i) => (
            <figure className="dp-quote dp-reveal" style={{ "--i": i }} key={q.text}>
              <blockquote className="dp-quote-t">{q.text}</blockquote>
              <figcaption className="dp-quote-by">
                <span className="dp-quote-name">— {q.by}</span>
                <span className="dp-quote-role">{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="dp-about-cta">
        <p className="dp-about-cta-t">Have something in mind?</p>
        <div className="dp-about-cta-btns">
          <a className="dp-btn dp-btn-ghost" href="/Jazz-Harris-Resume.pdf" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true" /> Résumé</a>
          <button className="dp-btn dp-btn-primary" onClick={() => go("contact")}>Start a project <FiArrowRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}

// Netlify's build-time crawler only registers a form if it finds matching
// static markup (see public/forms/project-request.html — Next.js pages no
// longer produce static HTML the crawler can read) — this name and every
// field here must match that markup exactly.
const PROJECT_FORM_NAME = "project-request";
const PROJECT_FORM_INITIAL = { firstName: "", lastName: "", email: "", phone: "", description: "" };
const PROJECT_FORM_MAX_FILES = 5;
const PROJECT_FORM_MAX_MB = 10;

function ContactModal({ open, onClose }) {
  const [values, setValues] = useState(PROJECT_FORM_INITIAL);
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState("");
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const fileInputRef = useRef(null);
  const firstFieldRef = useRef(null);
  const submitting = status === "submitting";

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape" && !submitting) onClose(); };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current && firstFieldRef.current.focus(), 60);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Reset a beat after close finishes, so the closing state doesn't flash empty.
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setValues(PROJECT_FORM_INITIAL);
      setLinks([]);
      setLinkInput("");
      setFiles([]);
      setStatus("idle");
    }, 300);
    return () => clearTimeout(t);
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  const setField = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const addLink = () => {
    const v = linkInput.trim();
    if (!v) return;
    setLinks((L) => (L.includes(v) ? L : [...L, v]));
    setLinkInput("");
  };
  const removeLink = (v) => setLinks((L) => L.filter((x) => x !== v));

  const addFiles = (list) => {
    const incoming = Array.from(list).filter(
      (f) => /^(image\/(png|jpe?g)|application\/pdf)$/.test(f.type) && f.size <= PROJECT_FORM_MAX_MB * 1024 * 1024
    );
    setFiles((F) => [...F, ...incoming].slice(0, PROJECT_FORM_MAX_FILES));
  };
  const removeFile = (i) => setFiles((F) => F.filter((_, idx) => idx !== i));

  const valid = values.firstName.trim() && values.lastName.trim() && values.email.trim() && values.phone.trim() && values.description.trim();

  const submit = async (e) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setStatus("submitting");
    try {
      const fd = new FormData();
      fd.append("form-name", PROJECT_FORM_NAME);
      fd.append("first_name", values.firstName);
      fd.append("last_name", values.lastName);
      fd.append("email", values.email);
      fd.append("phone", values.phone);
      fd.append("description", values.description);
      fd.append("reference_links", links.join(", "));
      files.forEach((f) => fd.append("attachments", f, f.name));
      const res = await fetch("/", { method: "POST", body: fd });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return createPortal(
    <div className="dp-modal-overlay" role="dialog" aria-modal="true" aria-label="Tell me about your project" onClick={() => !submitting && onClose()}>
      <div className="dp-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="dp-modal-close" aria-label="Close" onClick={onClose} disabled={submitting}>
          <FiX aria-hidden="true" />
        </button>
        {status === "success" ? (
          <div className="dp-modal-success">
            <span className="dp-modal-success-icn"><FiCheckCircle aria-hidden="true" /></span>
            <h3 className="dp-modal-h">Got it — thanks!</h3>
            <p className="dp-modal-sub">I reply within 24 hours. Talk soon.</p>
            <button type="button" className="dp-btn dp-btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="dp-modal-form" onSubmit={submit} noValidate>
            <p className="dp-label dp-modal-kicker">Start a project</p>
            <h3 className="dp-modal-h">Tell me about your project</h3>
            <p className="dp-modal-sub">I reply within 24 hours. No obligation.</p>

            <div className="dp-modal-row2">
              <label className="dp-field">
                <span className="dp-field-l">First name <b>*</b></span>
                <input ref={firstFieldRef} required value={values.firstName} onChange={setField("firstName")} placeholder="Jane" />
              </label>
              <label className="dp-field">
                <span className="dp-field-l">Last name <b>*</b></span>
                <input required value={values.lastName} onChange={setField("lastName")} placeholder="Doe" />
              </label>
            </div>
            <div className="dp-modal-row2">
              <label className="dp-field">
                <span className="dp-field-l">Email <b>*</b></span>
                <input type="email" required value={values.email} onChange={setField("email")} placeholder="jane@company.com" />
              </label>
              <label className="dp-field">
                <span className="dp-field-l">Phone <b>*</b></span>
                <input type="tel" required value={values.phone} onChange={setField("phone")} placeholder="(704) 555-0142" />
              </label>
            </div>
            <label className="dp-field">
              <span className="dp-field-l">Project description <b>*</b></span>
              <textarea required rows={4} value={values.description} onChange={setField("description")} placeholder="What are you building, what problem does it solve, any timeline or budget in mind…" />
            </label>

            <label className="dp-field">
              <span className="dp-field-l">Reference links <i>(optional)</i></span>
              <input
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addLink(); } }}
                placeholder="https://a-site-you-like.com"
              />
              <span className="dp-field-hint">Sites you like, your current site, a brief — press Enter to add.</span>
              {links.length > 0 && (
                <div className="dp-tag-row">
                  {links.map((l) => (
                    <span className="dp-tag" key={l}>
                      {l.replace(/^https?:\/\//, "")}
                      <button type="button" onClick={() => removeLink(l)} aria-label={`Remove ${l}`}><FiX aria-hidden="true" /></button>
                    </span>
                  ))}
                </div>
              )}
            </label>

            <div className="dp-field">
              <span className="dp-field-l">Attach images <i>(optional)</i></span>
              <div
                className={"dp-drop" + (dragOver ? " is-over" : "")}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files); }}
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <FiPaperclip aria-hidden="true" />
                <span><b>Drop sketches / screenshots here</b>, or click to browse</span>
                <span className="dp-drop-hint">PNG, JPG, PDF · up to {PROJECT_FORM_MAX_FILES} files · {PROJECT_FORM_MAX_MB} MB each</span>
                <input ref={fileInputRef} type="file" hidden multiple accept="image/png,image/jpeg,application/pdf" onChange={(e) => addFiles(e.target.files)} />
              </div>
              {files.length > 0 && (
                <div className="dp-tag-row">
                  {files.map((f, i) => (
                    <span className="dp-tag" key={f.name + i}>
                      {f.name}
                      <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}><FiX aria-hidden="true" /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {status === "error" && (
              <p className="dp-modal-error">Something went wrong sending that. Please try again, or email me directly at <a className="dp-link" href={GMAIL_COMPOSE}>{EMAIL}</a>.</p>
            )}

            <button type="submit" className="dp-btn dp-btn-primary dp-modal-submit" disabled={!valid || submitting}>
              {submitting ? "Sending…" : <>Send request <FiArrowRight aria-hidden="true" /></>}
            </button>
            <p className="dp-modal-privacy"><FiLock aria-hidden="true" /> Goes straight to Jazz. Never shared or sold.</p>
          </form>
        )}
      </div>
    </div>,
    document.querySelector(".dp-root") || document.body
  );
}

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="dp-view dp-contact">
      <div className="dp-contact-head">
        <p className="dp-label">Contact</p>
        <h2 className="dp-cta-h">Let's build something that works.</h2>
        <p className="dp-cta-sub">Got a project, a problem, or a half-formed idea? Tell me about it below, and I read everything.</p>
      </div>

      <figure className="dp-contact-quote dp-quote">
        <blockquote className="dp-quote-t">{PRAISE[0].text}</blockquote>
        <figcaption className="dp-quote-by">
          <span className="dp-quote-name">— {PRAISE[0].by}</span>
          <span className="dp-quote-role">{PRAISE[0].role}</span>
        </figcaption>
      </figure>

      <div className="dp-contact-card">
        <button type="button" className="dp-contact-row dp-contact-row-primary" onClick={() => setModalOpen(true)}>
          <span className="dp-cr-icn"><FiMail aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">Contact me</span><span className="dp-cr-v">Send a project request</span></span>
          <FiArrowRight className="dp-cr-arrow" aria-hidden="true" />
        </button>
        <a className="dp-contact-row" href="https://www.linkedin.com/in/maurajharris/" target="_blank" rel="noreferrer">
          <span className="dp-cr-icn"><FiLinkedin aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">LinkedIn</span><span className="dp-cr-v">/in/maurajharris</span></span>
          <FiArrowUpRight className="dp-cr-arrow" aria-hidden="true" />
        </a>
        <a className="dp-contact-row" href="https://github.com/Jazz-H" target="_blank" rel="noreferrer">
          <span className="dp-cr-icn"><FiGithub aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">GitHub</span><span className="dp-cr-v">/Jazz-H</span></span>
          <FiArrowUpRight className="dp-cr-arrow" aria-hidden="true" />
        </a>
        <a className="dp-contact-row" href="/Jazz-Harris-Resume.pdf" target="_blank" rel="noreferrer">
          <span className="dp-cr-icn"><FiFileText aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">Résumé</span><span className="dp-cr-v">View / download PDF</span></span>
          <FiArrowUpRight className="dp-cr-arrow" aria-hidden="true" />
        </a>
        <div className="dp-contact-row dp-contact-row-static">
          <span className="dp-cr-icn"><FiMapPin aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">Location</span><span className="dp-cr-v">Charlotte, NC</span></span>
        </div>
      </div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

const CSS = `
.dp-root{
  --bg:#000000; --bg-2:#080a0d; --card:#16181e; --card-2:#1e212a; --ink:#f3eaea; --muted:#b9a6ad; --faint:#8c7b84;
  --line:rgba(243,234,234,.10); --line-2:rgba(243,234,234,.17); --ember:#1e78e4; --amber:#8ab4f6;
  background:var(--bg); color:var(--ink); font-family:var(--font-inter),'Inter',system-ui,sans-serif; -webkit-font-smoothing:antialiased; line-height:1.55;
}
.dp-root *{box-sizing:border-box;margin:0;padding:0}
.dp-root a{color:inherit;text-decoration:none}
.dp-root a.dp-link{color:var(--ember);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px;font-weight:500;transition:color .18s}
.dp-root a.dp-link:hover{color:var(--amber)}
.dp-root button{font:inherit;color:inherit;background:none;border:none;cursor:pointer;text-align:left}
.dp-root svg{display:inline-block;vertical-align:middle}

.dp-shell{display:grid;grid-template-columns:minmax(360px,42%) 1fr;min-height:100vh}

/* poster (left) */
.dp-poster{position:sticky;top:0;height:100vh;overflow-y:auto;border-right:1px solid var(--line);
  background:var(--bg-2);padding:48px 44px;display:flex;flex-direction:column;gap:34px;
  border-bottom-left-radius:24px;border-bottom-right-radius:24px}
.dp-glow{position:absolute;top:-100px;left:-100px;width:380px;height:380px;
  background:radial-gradient(closest-side,rgba(30,120,228,.22),transparent 70%);filter:blur(14px);pointer-events:none}
.dp-root.motion-on .dp-glow{animation:dpDrift 13s ease-in-out infinite}
@keyframes dpDrift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(20px,16px) scale(1.08)}}
.dp-id{display:flex;gap:14px;align-items:center;position:relative;width:fit-content;border-radius:12px;transition:opacity .2s}
.dp-id:hover{opacity:.92}
.dp-id-text{display:flex;flex-direction:column}
.dp-mark{display:inline-flex;align-items:center;justify-content:center;color:var(--ink);flex:none;transition:transform .2s}
.dp-mark svg{width:50px;height:auto;display:block}
.dp-id:hover .dp-mark{transform:translateY(-1px)}
.dp-name{display:block;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.01em}
.dp-role{display:block;color:var(--muted);font-size:13px;margin-top:2px}
.dp-statement{position:relative}
.dp-kicker{font-family:var(--font-mono),'JetBrains Mono',monospace;color:var(--amber);font-size:13px;margin-bottom:14px}
.dp-h1{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;letter-spacing:-.02em;line-height:1.08;font-size:clamp(26px,2.7vw,38px)}
.dp-mark-text{position:relative;white-space:nowrap;color:var(--ember)}
.dp-mark-text::after{content:"";position:absolute;left:-2px;right:-2px;bottom:.05em;height:.13em;background:var(--ember);border-radius:3px;transform:rotate(-.6deg);opacity:.55}

/* status pill + pulsing dot */
.dp-status{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--muted);border:1px solid var(--line-2);border-radius:999px;padding:6px 12px;margin-top:22px}
.dp-dot{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ember);flex:none;box-shadow:0 0 8px rgba(30,120,228,.6)}
.dp-dot::after{content:"";position:absolute;inset:0;border-radius:50%;border:1.5px solid var(--ember);animation:dpPing 2s cubic-bezier(.2,.7,.2,1) infinite}
.dp-dot::before{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ember);animation:dpBreathe 2s ease-in-out infinite}
@keyframes dpPing{0%{transform:scale(1);opacity:.8}80%,100%{transform:scale(3.4);opacity:0}}
@keyframes dpBreathe{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.82)}}

.dp-nav{display:flex;flex-direction:column;gap:2px}
.dp-nav-item{display:flex;align-items:baseline;gap:12px;width:100%;padding:11px 14px;border-left:2px solid transparent;border-radius:0 8px 8px 0;color:var(--muted);transition:color .2s,border-color .2s,background .2s}
.dp-nav-item:hover{color:var(--ink);background:rgba(243,234,234,.03)}
.dp-nav-item.is-active{color:var(--ink);border-left-color:var(--ember);background:rgba(30,120,228,.08)}
.dp-nav-idx{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--faint)}
.dp-nav-item.is-active .dp-nav-idx{color:var(--ember)}
.dp-nav-label{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px}

/* grounded footer: social row + CTA */
.dp-poster-bottom{margin-top:auto;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;padding-top:24px;border-top:1px solid var(--line)}
.dp-social{display:flex;gap:9px}
.dp-social-btn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;font-size:16px;color:var(--muted);border:1px solid var(--line-2);border-radius:11px;transition:color .2s,border-color .2s,background .2s,transform .2s}
.dp-social-btn:hover{color:var(--ember);border-color:var(--ember);background:rgba(30,120,228,.07);transform:translateY(-2px)}
.dp-divider{width:1px;height:28px;background:var(--line-2);flex:none}
.dp-poster-cta{width:auto;gap:8px}
.dp-poster-cta svg{transition:transform .2s}
.dp-poster-cta:hover svg{transform:translateX(4px)}

/* buttons */
.dp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:14.5px;font-weight:500;border-radius:11px;padding:11px 18px;border:1px solid transparent;white-space:nowrap;transition:transform .15s,background .2s,border-color .2s,color .2s}
.dp-btn-primary{background:var(--ember);color:#f3f7ff;font-weight:600}
.dp-btn-primary:hover{background:#3d8bec;transform:translateY(-1px)}
.dp-btn-ghost{border-color:var(--line-2);color:var(--ink)}
.dp-btn-ghost:hover{border-color:var(--ember);color:var(--ember)}
.dp-btn-lg{padding:14px 22px;font-size:15px;font-family:var(--font-mono),'JetBrains Mono',monospace}

/* stage (right) */
.dp-stage{padding:48px 52px;min-height:100vh;background:var(--bg)}
.dp-label{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--amber)}
.dp-sub{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-bottom:18px}
.dp-work-head{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:26px}
.dp-filters-wrap{display:contents}
.dp-filters{display:flex;gap:8px;flex-wrap:wrap}
.dp-filter{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:13px;color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:7px 15px;transition:all .18s}
.dp-filter:hover{color:var(--ink);border-color:var(--line-2)}
.dp-filter.is-active{background:var(--ember);color:#f3f7ff;border-color:var(--ember);font-weight:500}

/* impact band — headline KPI stats (lives in the about section) */
.dp-impact{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line-2);border-radius:16px;overflow:hidden}
.dp-impact-stat{background:var(--card);padding:17px 18px;display:flex;flex-direction:column;justify-content:flex-start}
.dp-impact-v{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(21px,2.3vw,29px);letter-spacing:-.02em;line-height:1.04;color:var(--ember)}
.dp-impact-l{color:var(--muted);font-size:11.5px;line-height:1.45;margin-top:8px}
.dp-about-impact .dp-label{display:block;margin-bottom:16px}

/* recognition — social-proof quotes (credibility block in the about view) */
.dp-about-praise .dp-label{display:block;margin-bottom:16px}
.dp-praise-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
.dp-quote{position:relative;overflow:hidden;border:1px solid var(--line-2);border-radius:16px;padding:38px 22px 22px;
  background:radial-gradient(180px 120px at 10% -10%,rgba(30,120,228,.14),transparent 60%),var(--card);}
.dp-quote::before{content:"\\201C";position:absolute;top:12px;left:20px;z-index:0;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:42px;line-height:1;color:rgba(138,180,246,.32);pointer-events:none}
.dp-quote::after{content:"\\201D";position:absolute;bottom:10px;right:18px;z-index:0;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:34px;line-height:1;color:rgba(138,180,246,.14);pointer-events:none}
.dp-quote-t{position:relative;z-index:1;font-size:17px;font-weight:700;line-height:1.5;color:var(--ink);font-style:normal}
.dp-quote-by{position:relative;z-index:1;margin-top:14px;display:flex;flex-direction:column;gap:3px}
/* shared attribution: name (mono, accent) over title + company (muted) */
.dp-quote-name{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.03em;color:var(--amber)}
.dp-quote-role{font-size:11.5px;line-height:1.4;color:var(--faint)}
/* single pull-quote on the contact view, above the email action — same card
   style as the recognition quotes (.dp-quote), just with extra bottom margin */
.dp-contact-quote{margin:0 0 26px}

/* cards — lifted off true black with border + shadow */
.dp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.dp-card{display:flex;flex-direction:column;border:1px solid var(--line-2);border-radius:18px;overflow:hidden;background:var(--card);box-shadow:0 14px 34px -24px rgba(0,0,0,.9);transition:transform .2s,border-color .2s,box-shadow .25s}
.dp-card:hover{transform:translateY(-4px);border-color:rgba(30,120,228,.6);box-shadow:0 26px 56px -24px rgba(0,0,0,.95),0 0 0 1px rgba(30,120,228,.25)}
.dp-thumb{position:relative;aspect-ratio:16/10;display:flex;align-items:flex-end;padding:16px;overflow:hidden}
.dp-thumb-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.dp-card:hover .dp-thumb-img{transform:scale(1.045)}
.dp-thumb-scrim{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.30),transparent 32%,transparent 60%,rgba(0,0,0,.32));pointer-events:none}
.dp-thumb-cat{position:absolute;top:14px;left:14px;z-index:1;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(243,234,234,.92);background:rgba(8,6,9,.5);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(243,234,234,.12);border-radius:6px;padding:3px 8px;font-weight:500}
.dp-badge{position:absolute;top:13px;right:13px;z-index:1;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#f3f7ff;background:var(--ember);border-radius:6px;padding:3px 8px;font-weight:600}
.dp-thumb-ai{position:absolute;top:13px;right:13px;z-index:1;display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:#8ab4f6;background:rgba(8,6,9,.5);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(138,180,246,.45);border-radius:6px;padding:3px 8px}
.dp-thumb-ai svg{width:12px;height:12px}
.dp-thumb-ai.is-stacked{top:44px}
.dp-kicker-ai{display:inline-flex;align-items:center;gap:4px;margin-left:10px;color:#8ab4f6;font-weight:600}
.dp-kicker-ai svg{width:13px;height:13px}
.dp-badge-lg{font-size:12px;padding:5px 11px;top:18px;right:18px}
.dp-thumb-mono{position:relative;z-index:1;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:30px;color:rgba(20,8,14,.85);line-height:1}
.dp-card-body{padding:20px;display:flex;flex-direction:column;gap:10px}
.dp-card-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px;line-height:1.2}
.dp-card-p{color:var(--muted);font-size:13.5px}
.dp-card-pills{margin-top:4px}
.dp-card:hover .dp-pill{border-color:rgba(30,120,228,.35)}
.dp-card-open{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--ember);margin-top:4px;transition:gap .2s}
.dp-card:hover .dp-card-open{gap:10px}

/* detail */
.dp-detail{max-width:760px}
.dp-back{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:13px;color:var(--muted);transition:color .2s}
.dp-back:hover{color:var(--ember)}
.dp-gallery-wrap{margin:18px 0 24px}
.dp-gallery{position:relative;height:320px;border-radius:20px;overflow:hidden;border:1px solid var(--line-2);background:var(--card)}
.dp-gallery .dp-detail-mono{position:absolute;left:24px;bottom:24px}
.dp-detail-mono{font-size:48px;color:rgba(20,8,14,.85)}
.dp-gallery-track{position:absolute;inset:0;display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}
.dp-gallery-track::-webkit-scrollbar{display:none}
.dp-gallery-slide{flex:0 0 100%;width:100%;height:100%;scroll-snap-align:center}
.dp-gallery-slide img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
/* tall/portrait screenshots (e.g. full dashboards): show the whole page, matted on the gradient */
.dp-gallery-tall{height:520px;background:#202023}
.dp-gallery-tall .dp-gallery-slide img{object-fit:contain;object-position:center;padding:14px}
.dp-gallery-nav{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(138,180,246,.5);color:#8ab4f6;font-size:18px;z-index:2;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s,opacity .2s}
.dp-gallery-nav:hover{background:rgba(8,6,9,.92);border-color:#8ab4f6;color:#a9c9ff}
.dp-gallery-nav:disabled{opacity:0;pointer-events:none}
.dp-gallery-prev{left:12px}
.dp-gallery-next{right:12px}
.dp-gallery-dots{display:flex;justify-content:center;gap:8px;margin-top:12px}
.dp-gallery-dots .dp-gallery-dot{width:7px;height:7px;border-radius:50%;background:rgba(243,234,234,.9);box-shadow:0 1px 3px rgba(0,0,0,.55);transition:background .2s,transform .2s}
.dp-gallery-dots .dp-gallery-dot:hover{background:#fff}
.dp-gallery-dots .dp-gallery-dot.is-active{background:var(--ember);transform:scale(1.35)}
.dp-gallery-track .dp-gallery-slide{cursor:zoom-in;display:block}
.dp-lightbox{position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:32px;background:rgba(6,5,8,.93);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:dpLbIn .2s ease}
@keyframes dpLbIn{from{opacity:0}to{opacity:1}}
.dp-lightbox .dp-lb-img{max-width:92vw;max-height:88vh;width:auto;height:auto;object-fit:contain;border-radius:10px;box-shadow:0 24px 60px -20px rgba(0,0,0,.85);cursor:default}
.dp-lightbox .dp-lb-close{position:absolute;top:18px;right:18px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);border:1px solid rgba(138,180,246,.5);color:#8ab4f6;font-size:20px;cursor:pointer;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s}
.dp-lightbox .dp-lb-close:hover{background:rgba(8,6,9,.95);border-color:#8ab4f6;color:#a9c9ff}
.dp-lightbox .dp-lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);border:1px solid rgba(138,180,246,.5);color:#8ab4f6;font-size:22px;cursor:pointer;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s,opacity .2s}
.dp-lightbox .dp-lb-nav:hover{background:rgba(8,6,9,.95);border-color:#8ab4f6;color:#a9c9ff}
.dp-lightbox .dp-lb-nav:disabled{opacity:.25;pointer-events:none}
.dp-lightbox .dp-lb-prev{left:18px}
.dp-lightbox .dp-lb-next{right:18px}
.dp-lightbox .dp-lb-count{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);font-size:12px;letter-spacing:.08em;color:rgba(243,234,234,.85);background:rgba(8,6,9,.6);padding:5px 12px;border-radius:20px}
.dp-lightbox .dp-lb-close:focus-visible,.dp-lightbox .dp-lb-nav:focus-visible{outline:2px solid var(--amber);outline-offset:3px}
.dp-detail-head{margin-bottom:14px}
.dp-detail-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(26px,3.4vw,40px);letter-spacing:-.02em;line-height:1.06;margin-top:8px}
.dp-detail-overview{color:var(--muted);font-size:17px;max-width:62ch;margin-bottom:26px}
.dp-meta{display:flex;gap:36px;flex-wrap:wrap;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:24px}
.dp-meta-l{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin-bottom:6px}
.dp-meta-v{font-size:14.5px;color:var(--ink)}
.dp-stack-row{display:flex;align-items:flex-end;justify-content:space-between;gap:16px 28px;flex-wrap:wrap;margin-bottom:24px}
.dp-detail-stack{display:flex;flex-direction:column;gap:11px}
.dp-detail-stack .dp-meta-l{margin-bottom:0}
.dp-detail-links{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.dp-detail-soon{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--faint)}
.dp-detail-confidential{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--amber);border:1px solid rgba(30,120,228,.35);background:rgba(30,120,228,.08);border-radius:999px;padding:7px 13px}
.dp-detail-confidential svg{font-size:13px;flex:none}
.dp-detail-note{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--faint);border:1px dashed var(--line-2);border-radius:10px;padding:14px 16px}

/* confidential-project diagrams — PII-safe process / data-model flows */
.dp-diagram{border:1px solid var(--line-2);background:var(--card);border-radius:20px;padding:22px;margin:18px 0 24px}
.dp-dgm-lane{display:flex;flex-direction:column;gap:12px}
.dp-dgm-lane + .dp-dgm-lane{margin-top:18px;padding-top:18px;border-top:1px solid var(--line)}
.dp-dgm-lane-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase}
.dp-dgm-before{color:var(--faint)}
.dp-dgm-after{color:var(--ember)}
.dp-dgm-flow{display:flex;align-items:stretch;gap:8px}
.dp-dgm-node{flex:1 1 0;min-width:0;display:flex;flex-direction:column;gap:3px;background:var(--card-2);border:1px solid var(--line-2);border-radius:12px;padding:12px 14px;font-size:13.5px;font-weight:500;color:var(--ink)}
.dp-dgm-node small{font-weight:400;font-size:11.5px;color:var(--muted)}
.dp-dgm-good{border-color:rgba(30,120,228,.55);background:rgba(30,120,228,.08)}
.dp-dgm-bad{border-style:dashed;opacity:.85}
.dp-dgm-arrow{display:flex;align-items:center;justify-content:center;color:var(--faint);font-size:16px;flex:none}
.dp-dgm-tag{align-self:flex-start;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11.5px;border-radius:999px;padding:5px 12px}
.dp-dgm-tag-bad{color:var(--muted);border:1px solid var(--line-2)}
.dp-dgm-tag-good{color:var(--amber);background:rgba(30,120,228,.12);border:1px solid rgba(30,120,228,.4)}
.dp-dgm-note{font-size:12px;line-height:1.45;color:var(--muted)}
/* activity data model — SharePoint form -> star schema -> Power BI pages (vertical) */
.dp-diagram-activity{display:flex;flex-direction:column;gap:12px}
.dp-schema-stage{display:flex;flex-direction:column;gap:10px}
.dp-schema-tag{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--amber)}
.dp-schema-arrow{display:flex;justify-content:center;color:var(--faint);font-size:18px}
.dp-schema-src{max-width:280px}
.dp-schema-dims{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.dp-schema-dim{display:flex;flex-direction:column;gap:4px;background:var(--card-2);border:1px solid var(--line-2);border-radius:10px;padding:11px 12px}
.dp-schema-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:13.5px;color:var(--ink);display:flex;flex-wrap:wrap;align-items:baseline;gap:6px;line-height:1.2}
.dp-schema-h small{font-family:var(--font-inter),'Inter',sans-serif;font-weight:400;font-size:11px;color:var(--muted)}
.dp-schema-pk{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;color:var(--amber)}
.dp-schema-pk::before{content:"\\25C8";color:var(--ember);margin-right:5px}
.dp-schema-f{font-size:11.5px;color:var(--muted);line-height:1.4}
.dp-agent-bubble{align-self:flex-start;max-width:min(560px,92%);background:rgba(30,120,228,.12);border:1px solid rgba(30,120,228,.35);border-radius:14px 14px 14px 4px;padding:12px 16px;color:var(--ink);font-size:14px;line-height:1.5}
.dp-agent-eg{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10px;letter-spacing:.02em;color:var(--faint);line-height:1.4;margin-top:4px}
.dp-diagram-agent .dp-schema-dim{gap:6px}
.dp-schema-join{display:flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.dp-schema-fact{background:rgba(30,120,228,.1);border:1px solid rgba(30,120,228,.5);border-radius:12px;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.dp-schema-cols{display:flex;flex-wrap:wrap;gap:6px}
.dp-schema-fk,.dp-schema-m{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;border-radius:6px;padding:4px 9px}
.dp-schema-fk{color:var(--amber);background:rgba(30,120,228,.14);border:1px solid rgba(30,120,228,.3)}
.dp-schema-m{color:var(--muted);background:var(--card-2);border:1px solid var(--line-2)}
.dp-dgm-pages{display:flex;flex-wrap:wrap;gap:6px}
.dp-dgm-page{background:var(--card-2);border:1px solid var(--line-2);border-left:3px solid rgba(30,120,228,.6);border-radius:9px;padding:9px 12px;font-size:12.5px;color:var(--ink)}
/* diagram placed inside the case study (after Approach), as a labeled figure */
.dp-study-figure{margin:0}
.dp-study-figcap{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ember);margin-bottom:14px}
.dp-study-figure .dp-diagram{margin:0}
@media (max-width:680px){
  .dp-dgm-flow{flex-direction:column}
  .dp-dgm-flow .dp-dgm-arrow{transform:rotate(90deg);align-self:center}
  .dp-schema-dims{grid-template-columns:1fr 1fr}
}
.dp-study{display:flex;flex-direction:column;gap:18px;border-top:1px solid var(--line);padding-top:24px}
.dp-study-row{display:grid;grid-template-columns:118px 1fr;gap:18px;align-items:start}
.dp-study-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ember);padding-top:3px}
.dp-study-p{color:var(--muted);font-size:15.5px;line-height:1.6;max-width:60ch}
.dp-metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.dp-metric{position:relative;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:15px 16px 15px 19px;overflow:hidden;transition:border-color .2s,transform .2s,box-shadow .2s}
.dp-metric::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--ember);opacity:.85}
.dp-metric:hover{border-color:rgba(30,120,228,.4);transform:translateY(-2px);box-shadow:0 14px 30px -22px rgba(0,0,0,.9)}
.dp-metric-v{display:block;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:19px;color:var(--ink);letter-spacing:-.01em;line-height:1.1;overflow-wrap:break-word;hyphens:auto}
.dp-metric-l{display:block;color:var(--muted);font-size:12.5px;line-height:1.45;margin-top:6px}

/* about — bento grid */
.dp-about{max-width:960px;display:flex;flex-direction:column;gap:28px}
.dp-bento{display:grid;grid-template-columns:248px 1fr;gap:16px;align-items:stretch}
.dp-bento-left,.dp-bento-right{display:flex;flex-direction:column;gap:16px;min-width:0}
.dp-bento-tile{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:20px}
.dp-bento-bio .dp-p:first-of-type{margin-top:14px}
.dp-bento-facts{display:flex;flex-direction:column;gap:16px}

/* skills + stack accordions (collapsed by default, at every width) */
.dp-acc{min-width:0}
.dp-acc-sum{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none;cursor:pointer}
.dp-acc-sum::-webkit-details-marker{display:none}
.dp-acc-head{display:flex;flex-direction:column;gap:6px;min-width:0}
/* one-line summary of the section, shown only while collapsed (all widths) */
.dp-acc-preview{display:none;font-size:12.5px;color:var(--muted);line-height:1.5}
.dp-acc:not([open]) .dp-acc-preview{display:block}
.dp-facts-avatar{display:block;align-self:center;width:120px;height:120px;border-radius:50%;object-fit:cover;object-position:center 22%;border:1px solid var(--line-2)}
.dp-acc-chev{display:block;flex:none;color:var(--muted);font-size:18px;transition:transform .2s}
.dp-acc[open] .dp-acc-chev{transform:rotate(180deg)}
.dp-acc:not([open]) .dp-acc-sum{align-items:flex-start}
.dp-acc:not([open]) .dp-acc-chev{margin-top:1px}
/* Deterministic collapse: hide the body whenever the accordion is closed,
   independent of engine-specific ::details-content behavior. */
.dp-acc:not([open]) .dp-acc-body{display:none !important}
@media (min-width:881px){
  /* Accordions default open (the open attribute) but stay collapsible —
     let native details hide the content when the user closes them. */
  .dp-acc[open] .dp-acc-sum{margin-bottom:14px}
  .dp-acc-sum .dp-sub{margin-bottom:0}
}
/* tools card stretches to align its bottom with core skills (2-col, when open) */
@media (min-width:1081px){
  .dp-bento-left .dp-acc-stack[open]{flex:1;display:flex;flex-direction:column}
  .dp-bento-left .dp-acc-stack[open] .dp-acc-body{display:flex;flex-direction:column;flex:1}
  .dp-bento-left .dp-acc-stack[open] .dp-techgroups{flex:1;justify-content:space-between}
}
.dp-about-facts{display:flex;flex-direction:column;gap:13px}
.dp-fact{display:flex;align-items:flex-start;gap:11px;color:var(--muted);font-size:13px}
.dp-fact svg{color:var(--ember);font-size:15px;margin-top:2px;flex:none}
.dp-fact-l{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.dp-fact-v{display:block;color:var(--ink);font-size:13.5px;margin-top:1px}
.dp-p{color:var(--muted);font-size:15.5px;max-width:64ch;margin-top:14px}

.dp-bento-skills{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}
.dp-service{border:1px solid var(--line);background:var(--bg-2);border-radius:14px;padding:18px}
.dp-service-icn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:rgba(30,120,228,.12);color:var(--ember);font-size:18px;margin-bottom:13px}
.dp-service-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:16px;margin-bottom:7px}
.dp-service-p{color:var(--muted);font-size:13.5px;line-height:1.5}
/* core-skill cards: icon left + title right — only when cards are full-width
   (mobile/tablet single column). Desktop's narrow 3-up grid keeps icon-on-top. */
@media (max-width:880px){
  .dp-service:not(.dp-techcard){display:grid;grid-template-columns:auto 1fr;column-gap:13px;row-gap:12px;align-items:center}
  .dp-service:not(.dp-techcard) .dp-service-icn{grid-column:1;grid-row:1;margin-bottom:0}
  .dp-service:not(.dp-techcard) .dp-service-h{grid-column:2;grid-row:1;margin-bottom:0}
  .dp-service:not(.dp-techcard) .dp-service-p{grid-column:1 / -1;grid-row:2}
}
/* pills (stack / skills / card tags) — shared, on-brand */
.dp-pills{display:flex;flex-wrap:wrap;gap:8px}
.dp-pill{display:inline-flex;align-items:center;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;letter-spacing:.01em;color:var(--muted);background:rgba(243,234,234,.04);border:1px solid var(--line-2);border-radius:999px;padding:5px 12px;line-height:1.3;transition:color .18s,border-color .18s,background .18s}
.dp-pill:hover{color:var(--ink);border-color:rgba(30,120,228,.45);background:rgba(30,120,228,.08)}
.dp-techgroups{display:flex;flex-direction:column;gap:12px}
/* tech cards: icon on top, label, then pills below (narrow desktop column) */
.dp-techcard-icn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:8px;background:rgba(30,120,228,.12);color:var(--ember);font-size:15px;flex:none;margin-bottom:11px}
.dp-techcard .dp-service-h{margin-bottom:11px}
/* wide tools cards (tablet/mobile): icon + label on one row, pills below */
@media (max-width:1080px){
  .dp-techcard{display:grid;grid-template-columns:auto 1fr;column-gap:12px;row-gap:12px;align-items:center}
  .dp-techcard-icn{grid-column:1;grid-row:1;margin-bottom:0}
  .dp-techcard .dp-service-h{grid-column:2;grid-row:1;margin-bottom:0}
  .dp-techcard-pills{grid-column:1 / -1;grid-row:2}
}
.dp-about-cta{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;border-top:1px solid var(--line);padding-top:30px}
.dp-about-cta-t{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:20px}
.dp-about-cta-btns{display:flex;gap:12px;flex-wrap:wrap}

/* contact */
.dp-contact{max-width:680px}
.dp-contact-head{margin-bottom:30px}
.dp-cta-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(28px,4.4vw,48px);letter-spacing:-.02em;line-height:1.05;max-width:15ch;margin-top:14px}
.dp-cta-sub{color:var(--muted);font-size:17px;max-width:50ch;margin-top:18px}
.dp-contact-head .dp-status{margin-top:22px}
.dp-contact-card{border:1px solid var(--line-2);border-radius:18px;background:var(--card);overflow:hidden;box-shadow:0 18px 44px -28px rgba(0,0,0,.9)}
.dp-contact-row{display:flex;align-items:center;width:100%;gap:15px;padding:18px 20px;border-bottom:1px solid var(--line);transition:background .18s}
.dp-contact-row:last-child{border-bottom:none}
.dp-contact-row:not(.dp-contact-row-static):hover{background:rgba(30,120,228,.06)}
.dp-cr-icn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;background:var(--card-2);border:1px solid var(--line);color:var(--ink);font-size:17px;flex:none;transition:color .18s,border-color .18s}
.dp-contact-row:not(.dp-contact-row-static):hover .dp-cr-icn{color:var(--ember);border-color:rgba(30,120,228,.5)}
.dp-cr-text{display:flex;flex-direction:column;gap:2px;min-width:0}
.dp-cr-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.dp-cr-v{font-size:15px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dp-cr-arrow{margin-left:auto;color:var(--faint);font-size:16px;flex:none;transition:color .18s,transform .18s}
.dp-contact-row:hover .dp-cr-arrow{color:var(--ember);transform:translate(2px,-2px)}

/* project-request modal */
.dp-modal-overlay{position:fixed;inset:0;z-index:210;display:flex;align-items:flex-start;justify-content:center;padding:48px 20px;overflow-y:auto;background:rgba(6,5,8,.82);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:dpLbIn .2s ease}
.dp-modal{position:relative;width:100%;max-width:600px;background:var(--card);border:1px solid var(--line-2);border-radius:22px;padding:32px 36px 30px;box-shadow:0 40px 90px -30px rgba(0,0,0,.9)}
.dp-modal-close{position:absolute;top:18px;right:18px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--card-2);border:1px solid var(--line-2);color:var(--muted);font-size:18px;transition:color .18s,border-color .18s,background .18s}
.dp-modal-close:hover{color:var(--ink);border-color:rgba(30,120,228,.5)}
.dp-modal-close:disabled{opacity:.4;pointer-events:none}
.dp-modal-kicker{margin-bottom:8px}
.dp-modal-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(22px,3vw,27px);letter-spacing:-.01em;line-height:1.15;max-width:22ch}
.dp-modal-sub{color:var(--muted);font-size:14.5px;margin-top:8px}
.dp-modal-form{display:flex;flex-direction:column;gap:16px;margin-top:4px}
.dp-modal-row2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.dp-field{display:flex;flex-direction:column;gap:7px}
.dp-field-l{font-size:13px;font-weight:600;color:var(--ink)}
.dp-field-l b{color:var(--ember);font-weight:600}
.dp-field-l i{font-weight:400;font-style:normal;color:var(--faint)}
.dp-field input,.dp-field textarea{width:100%;background:var(--card-2);border:1px solid var(--line-2);border-radius:10px;padding:11px 13px;font:inherit;font-size:14.5px;color:var(--ink);transition:border-color .18s,background .18s}
.dp-field input::placeholder,.dp-field textarea::placeholder{color:var(--faint)}
.dp-field input:focus,.dp-field textarea:focus{outline:none;border-color:var(--ember);background:var(--card)}
.dp-field textarea{resize:vertical;min-height:96px;line-height:1.5}
.dp-field-hint{font-size:12px;color:var(--faint)}
.dp-tag-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:2px}
.dp-tag{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--ink);background:var(--card-2);border:1px solid var(--line-2);border-radius:999px;padding:5px 8px 5px 12px;max-width:100%}
.dp-tag button{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex:none;color:var(--faint);border-radius:50%;transition:color .15s,background .15s}
.dp-tag button:hover{color:var(--ink);background:rgba(243,234,234,.08)}
.dp-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;text-align:center;border:1.5px dashed var(--line-2);border-radius:12px;padding:22px 16px;color:var(--muted);font-size:13.5px;cursor:pointer;transition:border-color .18s,background .18s}
.dp-drop svg{font-size:19px;color:var(--faint);margin-bottom:3px}
.dp-drop:hover,.dp-drop.is-over{border-color:rgba(30,120,228,.55);background:rgba(30,120,228,.05)}
.dp-drop b{color:var(--ink);font-weight:600}
.dp-drop-hint{font-size:12px;color:var(--faint)}
.dp-modal-error{font-size:13.5px;color:#ff9f9f;line-height:1.5}
.dp-modal-submit{justify-content:center;width:100%;margin-top:2px}
.dp-modal-submit:disabled{opacity:.45;pointer-events:none}
.dp-modal-privacy{display:flex;align-items:center;justify-content:center;gap:7px;font-size:12.5px;color:var(--faint);text-align:center}
.dp-modal-success{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:26px 10px 6px}
.dp-modal-success-icn{font-size:40px;color:var(--ember);margin-bottom:4px}
.dp-modal-success .dp-btn{margin-top:10px}

.dp-root a:focus-visible,.dp-root button:focus-visible{outline:2px solid var(--amber);outline-offset:3px;border-radius:8px}

/* mobile-only helpers (hidden on desktop) */
.dp-sticky-bar{display:none}
.dp-poster-rule{display:none}

/* motion */
.dp-root.motion-on .dp-view > *{opacity:0;animation:dpRise .55s cubic-bezier(.2,.7,.2,1) forwards}
.dp-root.motion-on .dp-view > *:nth-child(1){animation-delay:.04s}
.dp-root.motion-on .dp-view > *:nth-child(2){animation-delay:.10s}
.dp-root.motion-on .dp-view > *:nth-child(3){animation-delay:.16s}
.dp-root.motion-on .dp-view > *:nth-child(4){animation-delay:.22s}
.dp-root.motion-on .dp-view > *:nth-child(5){animation-delay:.28s}
.dp-root.motion-on .dp-view > *:nth-child(6){animation-delay:.34s}
.dp-root.motion-on .dp-view > *:nth-child(7){animation-delay:.40s}
.dp-root.motion-on .dp-view > *:nth-child(8){animation-delay:.46s}
.dp-root.motion-on .dp-gallery{transform-origin:top center;animation:dpExpand .5s cubic-bezier(.2,.7,.2,1) forwards}
@keyframes dpRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes dpExpand{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
/* scroll reveal — grid/card items fade + rise once as they enter the viewport,
   staggered via the --i custom property set per item in JS */
.dp-reveal{opacity:0;transform:translateY(18px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);transition-delay:calc(var(--i,0) * 70ms)}
.dp-reveal.is-in{opacity:1;transform:none}
.dp-root:not(.motion-on) .dp-reveal{opacity:1;transform:none;transition:none}
@media (prefers-reduced-motion:reduce){.dp-root *{animation:none!important;transition:none!important}}

/* responsive */
@media (max-width:1080px){
  .dp-grid{grid-template-columns:1fr}
  .dp-bento{grid-template-columns:1fr}
  /* stacked About: flatten the two columns and order so About sits above Tools */
  .dp-bento-left,.dp-bento-right{display:contents}
  .dp-bento-facts{order:1}
  .dp-bento-bio{order:2}
  .dp-acc-skills{order:3}
  .dp-acc-stack{order:4}
  /* facts card: label + facts stacked in a left column (no gap), larger headshot on the right */
  .dp-bento-facts{display:grid;grid-template-columns:1fr auto;column-gap:20px;align-items:center}
  .dp-facts-main{grid-column:1;grid-row:1;min-width:0}
  .dp-bento-facts .dp-sub{margin-bottom:14px}
  .dp-facts-avatar{grid-column:2;grid-row:1;align-self:center;width:150px;height:150px}
}
@media (max-width:880px){
  .dp-root{overflow-x:clip}
  .dp-shell{grid-template-columns:1fr;min-width:0;max-width:100%;overflow-x:clip}
  .dp-work-head{flex-direction:column;align-items:flex-start;gap:14px;margin-bottom:26px}
  .dp-filters-wrap{display:block;position:relative;width:100%;max-width:100%;min-width:0}
  .dp-filters-wrap.can-scroll-end::after{content:"";position:absolute;top:0;right:0;bottom:12px;width:34px;background:linear-gradient(to right,transparent,var(--bg));pointer-events:none}
  .dp-filters{width:100%;max-width:100%;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--line-2) rgba(243,234,234,.06);-webkit-overflow-scrolling:touch;padding-bottom:8px}
  .dp-filters::-webkit-scrollbar{height:4px}
  .dp-filters::-webkit-scrollbar-track{background:rgba(243,234,234,.06);border-radius:999px}
  .dp-filters::-webkit-scrollbar-thumb{background:var(--line-2);border-radius:999px}
  .dp-filter{flex:0 0 auto;white-space:nowrap}
  .dp-impact{grid-template-columns:1fr 1fr}
  .dp-praise-grid{grid-template-columns:1fr}
  .dp-grid{grid-template-columns:1fr 1fr}
  .dp-poster{position:static;height:auto;flex-direction:column;gap:20px;padding:26px 22px}
  .dp-glow{display:none}
  .dp-h1{font-size:clamp(23px,5.8vw,30px);line-height:1.14}
  .dp-nav{flex-direction:row;gap:8px}
  .dp-nav-item{flex:1;flex-direction:row;align-items:center;justify-content:center;gap:0;border:1px solid var(--line);border-radius:10px;padding:11px 10px}
  .dp-nav-item.is-active{border-color:var(--ember);background:rgba(30,120,228,.08)}
  .dp-nav-idx{display:none}
  .dp-nav-label{font-size:15.5px}
  .dp-poster-rule{display:block;height:1px;background:var(--line)}
  .dp-poster-bottom{display:none}
  .dp-stage{padding:28px 20px;min-width:0}
  .dp-sticky-bar{display:flex;justify-content:center;padding:16px;padding-bottom:max(16px,env(safe-area-inset-bottom));border-top:1px solid var(--line-2);background:var(--bg)}
  .dp-sticky-cta{display:inline-flex;width:auto;align-items:center;justify-content:center;gap:8px;padding:13px 30px;font-family:var(--font-inter),'Inter',system-ui,sans-serif;font-size:15px;font-weight:600;border-radius:12px;border:1px solid rgba(30,120,228,.5);background:var(--ember);color:#f3f7ff;transition:background .2s,transform .15s,box-shadow .2s}
  .dp-sticky-cta svg{transition:transform .2s}
  .dp-sticky-cta:hover{background:#3d8bec;transform:translateY(-1px);box-shadow:0 8px 22px -10px rgba(30,120,228,.7)}
  .dp-sticky-cta:hover svg{transform:translateX(4px)}
  .dp-bento{grid-template-columns:1fr}
  .dp-bento-skills{grid-template-columns:1fr}
  .dp-acc{overflow:hidden;border-radius:16px}
  .dp-acc-skills,.dp-acc-stack{border:1px solid var(--line);background:var(--card)}
  .dp-acc-sum{padding:16px;align-items:flex-start}
  .dp-acc-sum .dp-sub{margin-bottom:0}
  .dp-acc[open] .dp-acc-sum{align-items:center}
  .dp-acc-body{padding:0 16px 16px}
  .dp-about-cta{display:none}
}
@media (max-width:560px){
  .dp-grid{grid-template-columns:1fr}
  .dp-facts-avatar{width:108px;height:108px}
  .dp-bento-facts{column-gap:16px}
  .dp-poster{padding:22px 18px;gap:16px}
  .dp-stage{padding:22px 16px}
  .dp-h1{font-size:clamp(22px,6.6vw,26px);line-height:1.16}
  .dp-kicker{margin-bottom:10px}
  .dp-statement .dp-status{margin-top:16px}
  .dp-name{font-size:19px}
  .dp-work-head{margin-bottom:24px;gap:12px}
  .dp-detail-h{font-size:clamp(22px,7vw,28px)}
  .dp-cta-h{font-size:clamp(25px,8vw,32px)}
  .dp-detail-overview{font-size:15px}
  .dp-gallery-wrap{margin:14px 0 20px}
  .dp-gallery{height:190px;border-radius:16px}
  .dp-gallery-tall{height:420px}
  .dp-lightbox{padding:14px}
  .dp-lightbox .dp-lb-nav{width:40px;height:40px;font-size:19px}
  .dp-lightbox .dp-lb-prev{left:8px}
  .dp-lightbox .dp-lb-next{right:8px}
  .dp-lightbox .dp-lb-close{top:10px;right:10px}
  .dp-detail-mono{font-size:36px}
  .dp-meta{gap:18px;padding:16px 0;margin-bottom:18px}
  .dp-stack-row{margin-bottom:20px}
  .dp-study{gap:14px;padding-top:20px}
  .dp-study-row{grid-template-columns:1fr;gap:6px}
  .dp-metrics{grid-template-columns:1fr 1fr;gap:10px}
  .dp-metric{padding:14px 13px 14px 16px}
  .dp-metric-v{font-size:17px}
  .dp-card-body{padding:16px;gap:8px}
  .dp-bento-tile{padding:16px}
  .dp-contact-row{padding:14px 15px;gap:12px}
  .dp-cr-icn{width:36px;height:36px;font-size:16px}
  .dp-about-cta{gap:14px}
  .dp-modal-overlay{padding:20px 12px}
  .dp-modal{padding:24px 20px 26px}
  .dp-modal-row2{grid-template-columns:1fr}
}
`;
