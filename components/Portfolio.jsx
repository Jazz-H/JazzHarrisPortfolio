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
} from "react-icons/fi";

const HEADSHOT_SRC = "/jazz-headshot.jpg";
const FIE_BLOG =
  "https://fiestudyabroad.wordpress.com/2020/04/13/jazz-wrapping-up-study-abroad-after-covid-19/";

const PROJECTS = [
  {
    cat: "Websites", title: "Valora",
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
    tags: ["E-commerce", "Information architecture", "HTML", "CSS", "JavaScript"], image: "/assets/ElectricCover.jpg",
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
    cat: "Apps", title: "Chat App",
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
    cat: "Apps", title: "Clearcast",
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
    cat: "Power Apps & Data", kind: "Data", title: "DSD Support Operations Dashboard",
    body: "A ServiceNow analytics dashboard for Osapiens, the DSD (direct store delivery) routing app at Coca-Cola Consolidated. It monitors a redesigned support model: Tier-1 vs Tier-2 routing, knowledge-base deflection, SLA health, and vendor escalations, so the team can see at a glance where work is being resolved and what to fix next. Visuals recreated without internal data for confidentiality.",
    tags: ["ServiceNow", "Knowledge Base", "Process Design", "Business Analysis"],
    image: "/assets/SupportDashHero.jpg", tall: true,
    images: [
      "/assets/SupportDashPersonal.jpg",
      "/assets/SupportDashTeam.jpg",
      "/assets/SupportDashService.jpg",
    ],
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "The Osapiens routing app was sending 5+ tickets a day straight to Tier 2, with the first-line Service Center Team escalating entry-level issues instead of resolving them, and Tier 2 carrying an overnight on-call rotation. The fix wasn't more people; it was changing where work got resolved.",
      approach: "I analyzed the escalation pattern to find which issue types Tier 1 could own, then redesigned the support model around it: step-by-step knowledge-base articles (cloud backup, shipment reset, mobile PIN, vendor e-bonding, routing) that let the Service Center Team resolve at first contact, with a clear escalation path to the vendor for true exceptions. I ran a training walkthrough and built a ServiceNow dashboard to monitor Tier-1 vs Tier-2 routing, KB deflection, and SLA health.",
      outcome: "Tier 2 escalations fell from 5+ a day to 2-3 a week, about a 95% reduction, and the after-hours on-call rotation was eliminated as the Service Center Team absorbed first-line resolution. Drivers and warehouse users get faster answers at Tier 1, with vendor escalation reserved for genuine exceptions.",
    },
  },
  {
    cat: "Power Apps & Data", kind: "Power Apps", title: "Activity Tracker",
    body: "An internal activity-tracking app for an enterprise team at Coca-Cola Consolidated. It replaces a manual, spreadsheet-driven process with a Power Apps front end on SharePoint, so the team logs and reports work in minutes instead of hours. In active development.",
    tags: ["Power Apps", "SharePoint", "Power Automate", "Business Analysis"],
    status: "Coming soon",
    company: "Coca-Cola Consolidated", role: "IT Business Analyst II",
    study: {
      challenge: "A team was tracking activity manually across spreadsheets and email, which was slow, error-prone, and hard to report on. As the BA, I own turning that pain into a tool people will actually use.",
      approach: "Gathering requirements from the team and stakeholders, modeling the data in SharePoint, and building a Power Apps front end (with Power Automate for notifications and approvals), all designed around the real workflow, not the org chart.",
      outcome: "In development. Full results, metrics, and screenshots coming soon.",
    },
  },
  {
    cat: "Power Apps & Data", kind: "Data", title: "Parcel",
    body: "Parcel is a real-estate market-analytics pipeline that turns official housing data into a clear answer to one investor question: where to buy, and whether now is the time. It pulls published market datasets, models them into investor metrics like rent-to-price and cap rate, and surfaces the result as an interactive Power BI dashboard that ranks markets and flags when one is heating or cooling. Built end to end in Python and sourced entirely from data published for use, not scraped.",
    tags: ["Python", "Power BI", "SQL", "pandas", "DAX"],
    status: "Coming soon",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "Most real-estate tools show listings, not decisions. As an investor I wanted the opposite: a single view that answers where to put money and whether the timing is right, built on data I could actually stand behind rather than scraped from a portal that prohibits it.",
      approach: "An end-to-end pipeline in Python that pulls published market data from Redfin, Zillow, and the Census, cleans and models it into a star schema, then turns raw medians into investor signals like rent-to-price, year-over-year appreciation, and a composite market-temperature score, delivered in Power BI and refreshed on a schedule.",
      outcome: "In development. Live dashboard, metrics, and screenshots coming soon.",
    },
  },
];
// Only show category filters that actually have projects (e.g. "Apps" hides
// when empty, and reappears automatically once an Apps project is added).
const CAT_ORDER = ["Websites", "Apps", "Power Apps & Data"];
const FILTERS = ["All", ...CAT_ORDER.filter((c) => PROJECTS.some((p) => p.cat === c))];
const TECH_GROUPS = [
  { label: "Languages", Icon: FiCode, items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frameworks & UI", Icon: FiLayers, items: ["React", "Next.js"] },
  { label: "Data & Power Platform", Icon: FiBarChart2, items: ["Power BI", "Power Apps", "SharePoint"] },
];
const SERVICES = [
  { Icon: FiTrendingUp, title: "Business analysis & strategy", body: "Translating business goals into clear requirements and a roadmap, working between stakeholders, vendors, and engineers to ship the right thing." },
  { Icon: FiCode, title: "Software & web development", body: "Building software and responsive websites, from applications to custom tools to polished web experiences, with React, Next.js, and modern tooling. Functional, reliable, and a pleasure to use." },
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
  Websites: "linear-gradient(135deg, #e98a99 0%, #9c4a60 100%)",
  Apps: "linear-gradient(135deg, #d77fa6 0%, #7d3f63 100%)",
  "Power Apps & Data": "linear-gradient(135deg, #b9697f 0%, #5e3450 100%)",
};
// Result highlights per project (qualitative stat-style — swap in real
// numbers like donations raised, users, traffic, or time saved any time).
const METRICS = {
  "DSD Support Operations Dashboard": [
    { value: "~95% fewer", label: "Tier 2 escalations: 5+/day to 2-3/week" },
    { value: "On-call ended", label: "After-hours absorbed by Tier 1 (SCT)" },
    { value: "73% KB deflection", label: "New articles let first-line self-serve" },
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

export default function Portfolio() {
  const [view, setView] = useState("work");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const rootRef = useRef(null);
  const didMount = useRef(false);

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
    const stage = document.querySelector(".dp-stage");
    if (stage) {
      const top = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [view, selected]);

  const go = (v) => { setSelected(null); setView(v); };
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
      <button type="button" className="dp-id" onClick={() => go("work")} aria-label="Jazz Harris — back to top">
        <span className="dp-mark" aria-hidden="true">
          <svg viewBox="0 0 132 104" fill="none">
            <path d="M23 24 H11 V80 H23" stroke="#EC7488" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M109 24 H121 V80 H109" stroke="#EC7488" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M64 31 V73" stroke="#EC7488" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M47 32 V58 C47 68 40 70 33 69" stroke="#EC7488" strokeWidth="7.5" strokeLinecap="round" />
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
      {p.status && <span className="dp-badge">{p.status}</span>}
    </span>
  );
}

function WorkList({ onOpen, filter, setFilter }) {
  const shown = PROJECTS.filter((p) => filter === "All" || p.cat === filter);
  const filtersRef = useRef(null);
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
      <div className="dp-grid">
        {shown.map((p) => (
          <button className="dp-card" key={p.title} onClick={() => onOpen(p.title)}>
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

function Detail({ p, onBack, filter = "All" }) {
  if (!p) return null;
  return (
    <section className="dp-view dp-detail">
      <button className="dp-back" onClick={onBack}><FiArrowLeft aria-hidden="true" /> {filter === "All" ? "All work" : filter}</button>
      <Gallery
        images={p.images || (p.image ? [p.image] : [])}
        title={p.title}
        gradient={CAT_GRADIENT[p.cat]}
        status={p.status}
        fallbackWord={p.title.split(" ")[0]}
        tall={p.tall}
      />
      <div className="dp-detail-head">
        <p className="dp-kicker">{p.kind || p.cat}</p>
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
          {!p.live && !p.code && <span className="dp-detail-soon">Link coming soon</span>}
        </div>
      </div>
      {p.study ? (
        <div className="dp-study">
          {[["Challenge", p.study.challenge], ["Approach", p.study.approach], ["Outcome", p.study.outcome]].map(([label, text]) => (
            <div className="dp-study-row" key={label}>
              <span className="dp-study-l">{label}</span>
              <p className="dp-study-p">{text}</p>
            </div>
          ))}
          {METRICS[p.title] && (
            <div className="dp-study-row">
              <span className="dp-study-l">Results</span>
              <div className="dp-metrics">
                {METRICS[p.title].map((m) => (
                  <div className="dp-metric" key={m.value + m.label}>
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
  return (
    <section className="dp-view dp-about">
      <div className="dp-bento">
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
                <span className="dp-acc-preview">Full-stack dev · Data &amp; BI · Microsoft Power Platform</span>
              </span>
              <FiChevronDown className="dp-acc-chev" aria-hidden="true" />
            </summary>
            <div className="dp-acc-body">
              <div className="dp-techgroups">
                {TECH_GROUPS.map(({ label, Icon, items }) => (
                  <div className="dp-service dp-techcard" key={label}>
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
                <span className="dp-acc-preview">Business analysis · Software &amp; web · Data &amp; dashboards</span>
              </span>
              <FiChevronDown className="dp-acc-chev" aria-hidden="true" />
            </summary>
            <div className="dp-acc-body">
              <div className="dp-bento-skills">
                {SERVICES.map(({ Icon, title, body }) => (
                  <div className="dp-service" key={title}>
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

function Contact() {
  return (
    <section className="dp-view dp-contact">
      <div className="dp-contact-head">
        <p className="dp-label">Contact</p>
        <h2 className="dp-cta-h">Let's build something that works.</h2>
        <p className="dp-cta-sub">Got a project, a problem, or a half-formed idea? Email is the fastest way to reach me, and I read everything.</p>
      </div>

      <div className="dp-contact-card">
        <a className="dp-contact-row" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer">
          <span className="dp-cr-icn"><FiMail aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">Email</span><span className="dp-cr-v">{EMAIL}</span></span>
          <FiArrowUpRight className="dp-cr-arrow" aria-hidden="true" />
        </a>
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
          <span className="dp-cr-text"><span className="dp-cr-l">Location</span><span className="dp-cr-v">Charlotte, NC · available worldwide</span></span>
        </div>
      </div>
    </section>
  );
}

const CSS = `
.dp-root{
  --bg:#000000; --bg-2:#0a080b; --card:#19141d; --card-2:#221b27; --ink:#f3eaea; --muted:#b9a6ad; --faint:#8c7b84;
  --line:rgba(243,234,234,.10); --line-2:rgba(243,234,234,.17); --ember:#d65f74; --amber:#e89aa8;
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
  background:var(--bg-2);padding:48px 44px;display:flex;flex-direction:column;gap:34px}
.dp-glow{position:absolute;top:-100px;left:-100px;width:380px;height:380px;
  background:radial-gradient(closest-side,rgba(214,95,116,.22),transparent 70%);filter:blur(14px);pointer-events:none}
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
.dp-dot{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ember);flex:none;box-shadow:0 0 8px rgba(214,95,116,.6)}
.dp-dot::after{content:"";position:absolute;inset:0;border-radius:50%;border:1.5px solid var(--ember);animation:dpPing 2s cubic-bezier(.2,.7,.2,1) infinite}
.dp-dot::before{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ember);animation:dpBreathe 2s ease-in-out infinite}
@keyframes dpPing{0%{transform:scale(1);opacity:.8}80%,100%{transform:scale(3.4);opacity:0}}
@keyframes dpBreathe{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.82)}}

.dp-nav{display:flex;flex-direction:column;gap:2px}
.dp-nav-item{display:flex;align-items:baseline;gap:12px;width:100%;padding:11px 14px;border-left:2px solid transparent;border-radius:0 8px 8px 0;color:var(--muted);transition:color .2s,border-color .2s,background .2s}
.dp-nav-item:hover{color:var(--ink);background:rgba(243,234,234,.03)}
.dp-nav-item.is-active{color:var(--ink);border-left-color:var(--ember);background:rgba(214,95,116,.08)}
.dp-nav-idx{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--faint)}
.dp-nav-item.is-active .dp-nav-idx{color:var(--ember)}
.dp-nav-label{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px}

/* grounded footer: social row + CTA */
.dp-poster-bottom{margin-top:auto;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;padding-top:24px;border-top:1px solid var(--line)}
.dp-social{display:flex;gap:9px}
.dp-social-btn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;font-size:16px;color:var(--muted);border:1px solid var(--line-2);border-radius:11px;transition:color .2s,border-color .2s,background .2s,transform .2s}
.dp-social-btn:hover{color:var(--ember);border-color:var(--ember);background:rgba(214,95,116,.07);transform:translateY(-2px)}
.dp-divider{width:1px;height:28px;background:var(--line-2);flex:none}
.dp-poster-cta{width:auto;gap:8px}
.dp-poster-cta svg{transition:transform .2s}
.dp-poster-cta:hover svg{transform:translateX(4px)}

/* buttons */
.dp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:14.5px;font-weight:500;border-radius:11px;padding:11px 18px;border:1px solid transparent;white-space:nowrap;transition:transform .15s,background .2s,border-color .2s,color .2s}
.dp-btn-primary{background:var(--ember);color:#2a0f15;font-weight:600}
.dp-btn-primary:hover{background:#e2748a;transform:translateY(-1px)}
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
.dp-filter.is-active{background:var(--ember);color:#2a0f15;border-color:var(--ember);font-weight:500}

/* cards — lifted off true black with border + shadow */
.dp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.dp-card{display:flex;flex-direction:column;border:1px solid var(--line-2);border-radius:18px;overflow:hidden;background:var(--card);box-shadow:0 14px 34px -24px rgba(0,0,0,.9);transition:transform .2s,border-color .2s,box-shadow .25s}
.dp-card:hover{transform:translateY(-4px);border-color:rgba(214,95,116,.6);box-shadow:0 26px 56px -24px rgba(0,0,0,.95),0 0 0 1px rgba(214,95,116,.25)}
.dp-thumb{position:relative;aspect-ratio:16/10;display:flex;align-items:flex-end;padding:16px;overflow:hidden}
.dp-thumb-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.dp-thumb-scrim{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.30),transparent 32%,transparent 60%,rgba(0,0,0,.32));pointer-events:none}
.dp-thumb-cat{position:absolute;top:14px;left:14px;z-index:1;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(243,234,234,.92);background:rgba(8,6,9,.5);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(243,234,234,.12);border-radius:6px;padding:3px 8px;font-weight:500}
.dp-badge{position:absolute;top:13px;right:13px;z-index:1;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#2a0f15;background:var(--ember);border-radius:6px;padding:3px 8px;font-weight:600}
.dp-badge-lg{font-size:12px;padding:5px 11px;top:18px;right:18px}
.dp-thumb-mono{position:relative;z-index:1;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:30px;color:rgba(20,8,14,.85);line-height:1}
.dp-card-body{padding:20px;display:flex;flex-direction:column;gap:10px}
.dp-card-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px;line-height:1.2}
.dp-card-p{color:var(--muted);font-size:13.5px}
.dp-card-pills{margin-top:4px}
.dp-card:hover .dp-pill{border-color:rgba(214,95,116,.35)}
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
.dp-gallery-nav{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(242,131,155,.5);color:#ff8fa6;font-size:18px;z-index:2;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s,opacity .2s}
.dp-gallery-nav:hover{background:rgba(8,6,9,.92);border-color:#ff8fa6;color:#ffa7bb}
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
.dp-lightbox .dp-lb-close{position:absolute;top:18px;right:18px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);border:1px solid rgba(242,131,155,.5);color:#ff8fa6;font-size:20px;cursor:pointer;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s}
.dp-lightbox .dp-lb-close:hover{background:rgba(8,6,9,.95);border-color:#ff8fa6;color:#ffa7bb}
.dp-lightbox .dp-lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.72);border:1px solid rgba(242,131,155,.5);color:#ff8fa6;font-size:22px;cursor:pointer;box-shadow:0 4px 14px -4px rgba(0,0,0,.6);transition:background .2s,border-color .2s,color .2s,opacity .2s}
.dp-lightbox .dp-lb-nav:hover{background:rgba(8,6,9,.95);border-color:#ff8fa6;color:#ffa7bb}
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
.dp-detail-note{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--faint);border:1px dashed var(--line-2);border-radius:10px;padding:14px 16px}
.dp-study{display:flex;flex-direction:column;gap:18px;border-top:1px solid var(--line);padding-top:24px}
.dp-study-row{display:grid;grid-template-columns:118px 1fr;gap:18px;align-items:start}
.dp-study-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ember);padding-top:3px}
.dp-study-p{color:var(--muted);font-size:15.5px;line-height:1.6;max-width:60ch}
.dp-metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.dp-metric{position:relative;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:15px 16px 15px 19px;overflow:hidden;transition:border-color .2s,transform .2s,box-shadow .2s}
.dp-metric::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--ember);opacity:.85}
.dp-metric:hover{border-color:rgba(214,95,116,.4);transform:translateY(-2px);box-shadow:0 14px 30px -22px rgba(0,0,0,.9)}
.dp-metric-v{display:block;font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:19px;color:var(--ink);letter-spacing:-.01em;line-height:1.1;overflow-wrap:break-word;hyphens:auto}
.dp-metric-l{display:block;color:var(--muted);font-size:12.5px;line-height:1.45;margin-top:6px}

/* about — bento grid */
.dp-about{max-width:960px;display:flex;flex-direction:column;gap:28px}
.dp-bento{display:grid;grid-template-columns:248px 1fr;gap:16px;align-items:stretch}
.dp-bento-left,.dp-bento-right{display:flex;flex-direction:column;gap:16px;min-width:0}
.dp-bento-tile{border:1px solid var(--line);background:var(--card);border-radius:16px;padding:20px}
.dp-bento-bio .dp-p:first-of-type{margin-top:14px}
.dp-bento-facts{display:flex;flex-direction:column;gap:16px}

/* skills + stack accordions (open on desktop, collapsible on mobile) */
.dp-acc{min-width:0}
.dp-acc-sum{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none}
.dp-acc-sum::-webkit-details-marker{display:none}
.dp-acc-head{display:flex;flex-direction:column;gap:6px;min-width:0}
.dp-acc-preview{display:none}
.dp-facts-avatar{display:block;align-self:center;width:120px;height:120px;border-radius:50%;object-fit:cover;object-position:center 22%;border:1px solid var(--line-2)}
.dp-acc-chev{display:none;flex:none;color:var(--muted);font-size:18px;transition:transform .2s}
.dp-acc[open] .dp-acc-chev{transform:rotate(180deg)}
@media (min-width:881px){
  .dp-acc-body{display:block !important}
  .dp-acc-sum{margin-bottom:14px}
  .dp-acc-sum .dp-sub{margin-bottom:0}
}
/* tools card stretches to align its bottom with core skills (2-col layout only) */
@media (min-width:1081px){
  .dp-bento-left .dp-acc-stack{flex:1;display:flex;flex-direction:column}
  .dp-bento-left .dp-acc-stack .dp-acc-body{display:flex !important;flex-direction:column;flex:1}
  .dp-bento-left .dp-acc-stack .dp-techgroups{flex:1;justify-content:space-between}
}
.dp-about-facts{display:flex;flex-direction:column;gap:13px}
.dp-fact{display:flex;align-items:flex-start;gap:11px;color:var(--muted);font-size:13px}
.dp-fact svg{color:var(--ember);font-size:15px;margin-top:2px;flex:none}
.dp-fact-l{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.dp-fact-v{display:block;color:var(--ink);font-size:13.5px;margin-top:1px}
.dp-p{color:var(--muted);font-size:15.5px;max-width:64ch;margin-top:14px}

.dp-bento-skills{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}
.dp-service{border:1px solid var(--line);background:var(--bg-2);border-radius:14px;padding:18px}
.dp-service-icn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:rgba(214,95,116,.12);color:var(--ember);font-size:18px;margin-bottom:13px}
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
.dp-pill:hover{color:var(--ink);border-color:rgba(214,95,116,.45);background:rgba(214,95,116,.08)}
.dp-techgroups{display:flex;flex-direction:column;gap:12px}
/* tech cards: icon on top, label, then pills below (narrow desktop column) */
.dp-techcard-icn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:8px;background:rgba(214,95,116,.12);color:var(--ember);font-size:15px;flex:none;margin-bottom:11px}
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
.dp-contact-row{display:flex;align-items:center;gap:15px;padding:18px 20px;border-bottom:1px solid var(--line);transition:background .18s}
.dp-contact-row:last-child{border-bottom:none}
.dp-contact-row:not(.dp-contact-row-static):hover{background:rgba(214,95,116,.06)}
.dp-cr-icn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;background:var(--card-2);border:1px solid var(--line);color:var(--ink);font-size:17px;flex:none;transition:color .18s,border-color .18s}
.dp-contact-row:not(.dp-contact-row-static):not(.dp-contact-row-primary):hover .dp-cr-icn{color:var(--ember);border-color:rgba(214,95,116,.5)}
.dp-contact-row-primary .dp-cr-icn{background:var(--ember);border-color:var(--ember);color:#2a0f15}
.dp-cr-text{display:flex;flex-direction:column;gap:2px;min-width:0}
.dp-cr-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.dp-cr-v{font-size:15px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dp-cr-arrow{margin-left:auto;color:var(--faint);font-size:16px;flex:none;transition:color .18s,transform .18s}
.dp-contact-row:hover .dp-cr-arrow{color:var(--ember);transform:translate(2px,-2px)}

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
  .dp-grid{grid-template-columns:1fr 1fr}
  .dp-poster{position:static;height:auto;flex-direction:column;gap:20px;padding:26px 22px}
  .dp-glow{display:none}
  .dp-h1{font-size:clamp(23px,5.8vw,30px);line-height:1.14}
  .dp-nav{flex-direction:row;gap:8px}
  .dp-nav-item{flex:1;flex-direction:row;align-items:center;justify-content:center;gap:0;border:1px solid var(--line);border-radius:10px;padding:11px 10px}
  .dp-nav-item.is-active{border-color:var(--ember);background:rgba(214,95,116,.08)}
  .dp-nav-idx{display:none}
  .dp-nav-label{font-size:15.5px}
  .dp-poster-rule{display:block;height:1px;background:var(--line)}
  .dp-poster-bottom{display:none}
  .dp-stage{padding:28px 20px;min-width:0}
  .dp-sticky-bar{display:flex;justify-content:center;padding:16px;padding-bottom:max(16px,env(safe-area-inset-bottom));border-top:1px solid var(--line-2);background:var(--bg)}
  .dp-sticky-cta{display:inline-flex;width:auto;align-items:center;justify-content:center;gap:8px;padding:13px 30px;font-family:var(--font-inter),'Inter',system-ui,sans-serif;font-size:15px;font-weight:600;border-radius:12px;border:1px solid rgba(214,95,116,.5);background:var(--ember);color:#2a0f15;transition:background .2s,transform .15s,box-shadow .2s}
  .dp-sticky-cta svg{transition:transform .2s}
  .dp-sticky-cta:hover{background:#e2748a;transform:translateY(-1px);box-shadow:0 8px 22px -10px rgba(214,95,116,.7)}
  .dp-sticky-cta:hover svg{transform:translateX(4px)}
  .dp-bento{grid-template-columns:1fr}
  .dp-bento-skills{grid-template-columns:1fr}
  .dp-acc{overflow:hidden;border-radius:16px}
  .dp-acc-skills,.dp-acc-stack{border:1px solid var(--line);background:var(--card)}
  .dp-acc-sum{padding:16px;cursor:pointer;align-items:flex-start}
  .dp-acc-sum .dp-sub{margin-bottom:0}
  .dp-acc-preview{display:block;font-size:12.5px;color:var(--muted);line-height:1.5}
  .dp-acc[open] .dp-acc-preview{display:none}
  .dp-acc[open] .dp-acc-sum{align-items:center}
  .dp-acc-chev{display:block;margin-top:1px}
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
}
`;
