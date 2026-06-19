"use client";

import { useState, useEffect, useRef } from "react";

const HEADSHOT_SRC = "/jazz-headshot.jpg";

const PROJECTS = [
  { cat: "Websites", title: "Alamance Community Foundation", body: "A community foundation site built and maintained with the team — focused on credibility, clear navigation, and making it easy for donors to engage.", tags: ["Squarespace", "HTML", "CSS", "JS"], live: "https://www.alamancecommunityfoundation.org" },
  { cat: "Websites", title: "Electric Supplies Online", body: "An e-commerce storefront for an electrical-supplies retailer, organized so customers can find and buy the right parts fast.", tags: ["E-commerce", "HTML", "CSS", "JS"], live: "https://electricsuppliesonline.com/" },
  { cat: "Websites", title: "FIE Study Abroad", body: "An editorial post documenting a study-abroad experience cut short by COVID-19 — clean reading layout and storytelling.", tags: ["WordPress", "HTML", "CSS"], live: "https://fiestudyabroad.wordpress.com/2020/04/13/jazz-wrapping-up-study-abroad-after-covid-19/" },
  { cat: "Apps", title: "To-Do App with Quote API", body: "A task tracker with daily-quote integration and full create/read/update/delete, backed by Firebase.", tags: ["React", "Firebase", "Axios", "REST"], live: "https://to-do-app-nu-cyan.vercel.app/", code: "https://github.com/Jazz-Harris/To-DoApp" },
  { cat: "Apps", title: "Weather Application", body: "Search any city and get live conditions through the OpenWeather API, built in Next.js.", tags: ["Next.js", "React", "Tailwind"], live: "https://weather-app-sand-six-26.vercel.app/", code: "https://github.com/Jazz-Harris/WeatherApp" },
  { cat: "Apps", title: "Real-time Chat App", body: "A multi-user chat with authentication and live message sync on Firebase v9.", tags: ["React", "Firebase v9", "Tailwind"], live: "https://chata-27aa7.web.app/", code: "https://github.com/Jazz-Harris/ChatApp" },
  { cat: "Data", title: "KPI Management Dashboard", body: "An interactive sales-and-profit dashboard published to Tableau Public for quick decision-making.", tags: ["Tableau"], live: "https://public.tableau.com/views/SalesandProfitManagementDashboard_16673599690350/Dashboard1" },
  { cat: "Data", title: "Data Professional Survey Dashboard", body: "Cleaned, transformed, and visualized survey data into a clear Power BI report.", tags: ["Power BI", "ETL"], code: "https://github.com/Jazz-Harris/DataProfessionalSurveyPowerbi" },
  { cat: "Data", title: "Real Estate Web Scraper", body: "A Python scraper that pulls listing data with BeautifulSoup and exports it to CSV.", tags: ["Python", "BeautifulSoup"], code: "https://github.com/Jazz-Harris/WebScrapingRealEstateData" },
  { cat: "Data", title: "Supermarket Sales EDA", body: "Exploratory data analysis on supermarket sales using the Python data stack.", tags: ["Pandas", "NumPy", "Seaborn"], code: "https://github.com/Jazz-Harris/EDAWithSuperMarketData" },
  { cat: "Data", title: "U.S. Credit Card Defaults", body: "Prepared, transformed, and modeled credit-card default data into an analytical Power BI report.", tags: ["Power BI", "ETL"], code: "https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi" },
  { cat: "Data", title: "Real-time Stock Market Dashboard", body: "Live market data pulled from a REST API into an interactive dashboard.", tags: ["Power BI", "REST API"] },
];
const FILTERS = ["All", "Websites", "Apps", "Data"];
const TECH = ["JavaScript", "React", "Next.js", "Python", "Firebase", "SQL", "REST APIs", "Power BI", "Tailwind"];
const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const CAT_GRADIENT = {
  Websites: "linear-gradient(135deg, #e98a99 0%, #9c4a60 100%)",
  Apps: "linear-gradient(135deg, #d77fa6 0%, #7d3f63 100%)",
  Data: "linear-gradient(135deg, #b9697f 0%, #5e3450 100%)",
};

export default function Portfolio() {
  const [view, setView] = useState("work");
  const [selected, setSelected] = useState(null);
  const rootRef = useRef(null);

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
    html.style.background = "#17131a";
    body.style.background = "#17131a";
    return () => {
      html.style.background = prev.html;
      body.style.background = prev.body;
    };
  }, []);

  useEffect(() => {
    const el = document.querySelector(".dp-stage");
    if (el) el.scrollTo ? el.scrollTo({ top: 0 }) : (el.scrollTop = 0);
    window.scrollTo({ top: 0, behavior: "auto" });
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
            {view === "work" && !selected && <WorkList onOpen={setSelected} />}
            {view === "work" && selected && <Detail p={project} onBack={() => setSelected(null)} />}
            {view === "about" && <About />}
            {view === "contact" && <Contact />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Poster({ view, go }) {
  return (
    <aside className="dp-poster">
      <div className="dp-glow" aria-hidden="true" />
      <div className="dp-id">
        <span className="dp-mark">JH</span>
        <div>
          <p className="dp-name">Jazz Harris</p>
          <p className="dp-role">Software engineer &amp; business analyst</p>
        </div>
      </div>

      <div className="dp-statement">
        <p className="dp-kicker">Portfolio — 2026</p>
        <h1 className="dp-h1">
          I turn business problems into websites, tools, and dashboards that{" "}
          <span className="dp-mark-text">actually work</span>.
        </h1>
        <span className="dp-status"><i className="dp-dot" /> Open for project inquiries</span>
      </div>

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
        <div className="dp-links">
          <a href="https://github.com/Jazz-H" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/maurajharris/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Jazz-Harris-Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </div>
        <button className="dp-btn dp-btn-primary dp-poster-cta" onClick={() => go("contact")}>
          Start a project
        </button>
      </div>
    </aside>
  );
}

function WorkList({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const shown = PROJECTS.filter((p) => filter === "All" || p.cat === filter);
  return (
    <section className="dp-view">
      <div className="dp-work-head">
        <p className="dp-label">Selected work · {shown.length}</p>
        <div className="dp-filters" role="tablist" aria-label="Filter work">
          {FILTERS.map((f) => (
            <button key={f} className={"dp-filter" + (filter === f ? " is-active" : "")} onClick={() => setFilter(f)} aria-pressed={filter === f}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="dp-grid">
        {shown.map((p) => (
          <button className="dp-card" key={p.title} onClick={() => onOpen(p.title)}>
            <span className="dp-thumb" style={{ background: CAT_GRADIENT[p.cat] }}>
              <span className="dp-thumb-cat">{p.cat}</span>
              <span className="dp-thumb-mono">{p.title.split(" ")[0]}</span>
            </span>
            <span className="dp-card-body">
              <span className="dp-card-h">{p.title}</span>
              <span className="dp-card-p">{p.body}</span>
              <span className="dp-card-open">View case study →</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Detail({ p, onBack }) {
  if (!p) return null;
  return (
    <section className="dp-view dp-detail">
      <button className="dp-back" onClick={onBack}>← All work</button>
      <div className="dp-detail-hero" style={{ background: CAT_GRADIENT[p.cat] }}>
        <span className="dp-thumb-mono dp-detail-mono">{p.title.split(" ")[0]}</span>
      </div>
      <div className="dp-detail-head">
        <p className="dp-kicker">{p.cat}</p>
        <h2 className="dp-detail-h">{p.title}</h2>
      </div>
      <p className="dp-detail-overview">{p.body}</p>
      <div className="dp-meta">
        <div><span className="dp-meta-l">Type</span><span className="dp-meta-v">{p.cat}</span></div>
        <div><span className="dp-meta-l">Role</span><span className="dp-meta-v">Design &amp; build</span></div>
        <div><span className="dp-meta-l">Stack</span><span className="dp-meta-v">{p.tags.join(", ")}</span></div>
      </div>
      <div className="dp-detail-links">
        {p.live && <a className="dp-btn dp-btn-primary" href={p.live} target="_blank" rel="noreferrer">Visit live ↗</a>}
        {p.code && <a className="dp-btn dp-btn-ghost" href={p.code} target="_blank" rel="noreferrer">View code</a>}
      </div>
      <p className="dp-detail-note">Your challenge → approach → outcome write-up goes here.</p>
    </section>
  );
}

function About() {
  return (
    <section className="dp-view dp-about">
      <div className="dp-about-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="dp-avatar" src={HEADSHOT_SRC} alt="Jazz Harris, Business Analyst" />
      </div>
      <div className="dp-about-body">
        <p className="dp-label">About</p>
        <h2 className="dp-detail-h">Builder by craft, analyst by training.</h2>
        <p className="dp-p">My path runs from a digital marketing agency in Ireland to local businesses to a multinational enterprise. By day I'm a Business Analyst at Coca-Cola Consolidated, sitting between stakeholders, vendors, and engineers.</p>
        <p className="dp-p">On my own time, I build websites and custom software for businesses that want technology to actually pay off — more leads, less manual work, better decisions. I care about clear thinking, honest scope, and shipping things that hold up.</p>
        <div className="dp-tech">{TECH.map((t) => (<span className="dp-chip" key={t}>{t}</span>))}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="dp-view dp-contact">
      <p className="dp-label">Contact</p>
      <h2 className="dp-cta-h">Let's build something that works.</h2>
      <p className="dp-cta-sub">Got a project, a problem, or a half-formed idea? Email is the fastest way to reach me — I read everything.</p>
      <div className="dp-cta-row">
        <a className="dp-btn dp-btn-primary dp-btn-lg" href="mailto:mauraharris948@gmail.com">mauraharris948@gmail.com</a>
        <div className="dp-links dp-contact-links">
          <a href="https://github.com/Jazz-H" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/maurajharris/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p className="dp-loc">Based in Charlotte, NC · working with clients anywhere.</p>
    </section>
  );
}

const CSS = `
.dp-root{
  --bg:#17131a; --bg-2:#1e1820; --card:#251d27; --ink:#f3eaea; --muted:#b9a6ad; --faint:#8c7b84;
  --line:rgba(243,234,234,.10); --line-2:rgba(243,234,234,.18); --ember:#d65f74; --amber:#e89aa8;
  background:var(--bg); color:var(--ink); font-family:var(--font-inter),'Inter',system-ui,sans-serif; -webkit-font-smoothing:antialiased; line-height:1.55;
}
.dp-root *{box-sizing:border-box;margin:0;padding:0}
.dp-root a{color:inherit;text-decoration:none}
.dp-root button{font:inherit;color:inherit;background:none;border:none;cursor:pointer;text-align:left}

.dp-shell{display:grid;grid-template-columns:minmax(360px,42%) 1fr;min-height:100vh}

/* poster (left) */
.dp-poster{position:sticky;top:0;height:100vh;overflow-y:auto;border-right:1px solid var(--line);
  background:var(--bg-2);padding:48px 44px;display:flex;flex-direction:column;gap:34px}
.dp-glow{position:absolute;top:-100px;left:-100px;width:380px;height:380px;
  background:radial-gradient(closest-side,rgba(214,95,116,.20),transparent 70%);filter:blur(12px);pointer-events:none}
.dp-id{display:flex;gap:14px;align-items:flex-start;position:relative}
.dp-mark{font-family:var(--font-mono),'JetBrains Mono',monospace;font-weight:500;font-size:15px;letter-spacing:.04em;border:1px solid var(--line-2);border-radius:9px;padding:8px 10px}
.dp-name{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.01em}
.dp-role{color:var(--muted);font-size:13px;margin-top:2px}
.dp-statement{position:relative}
.dp-kicker{font-family:var(--font-mono),'JetBrains Mono',monospace;color:var(--amber);font-size:13px;margin-bottom:14px}
.dp-h1{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;letter-spacing:-.02em;line-height:1.08;font-size:clamp(26px,2.7vw,38px)}
.dp-mark-text{position:relative;white-space:nowrap;color:var(--ember)}
.dp-mark-text::after{content:"";position:absolute;left:-2px;right:-2px;bottom:.05em;height:.13em;background:var(--ember);border-radius:3px;transform:rotate(-.6deg);opacity:.55}
.dp-status{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--muted);border:1px solid var(--line-2);border-radius:999px;padding:6px 12px;margin-top:22px}
.dp-dot{width:7px;height:7px;border-radius:50%;background:var(--ember);box-shadow:0 0 0 3px rgba(214,95,116,.25)}

.dp-nav{display:flex;flex-direction:column;gap:2px}
.dp-nav-item{display:flex;align-items:baseline;gap:12px;width:100%;padding:11px 14px;border-left:2px solid transparent;border-radius:0 8px 8px 0;color:var(--muted);transition:color .2s,border-color .2s,background .2s}
.dp-nav-item:hover{color:var(--ink);background:rgba(243,234,234,.03)}
.dp-nav-item.is-active{color:var(--ink);border-left-color:var(--ember);background:rgba(214,95,116,.07)}
.dp-nav-idx{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;color:var(--faint)}
.dp-nav-item.is-active .dp-nav-idx{color:var(--ember)}
.dp-nav-label{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px}

.dp-poster-bottom{margin-top:auto;display:flex;flex-direction:column;gap:16px}
.dp-links{display:flex;gap:16px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted)}
.dp-links a:hover{color:var(--ember)}

/* buttons */
.dp-btn{display:inline-flex;align-items:center;justify-content:center;font-size:14.5px;font-weight:500;border-radius:11px;padding:11px 18px;border:1px solid transparent;white-space:nowrap;transition:transform .15s,background .2s,border-color .2s,color .2s}
.dp-btn-primary{background:var(--ember);color:#2a0f15;font-weight:600}
.dp-btn-primary:hover{background:#e2748a;transform:translateY(-1px)}
.dp-btn-ghost{border-color:var(--line-2);color:var(--ink)}
.dp-btn-ghost:hover{border-color:var(--ember);color:var(--ember)}
.dp-btn-lg{padding:14px 22px;font-size:15px;font-family:var(--font-mono),'JetBrains Mono',monospace}

/* stage (right) */
.dp-stage{padding:48px 52px;min-height:100vh}
.dp-label{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--amber)}
.dp-work-head{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-bottom:26px}
.dp-filters{display:flex;gap:8px;flex-wrap:wrap}
.dp-filter{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:13px;color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:7px 15px;transition:all .18s}
.dp-filter:hover{color:var(--ink);border-color:var(--line-2)}
.dp-filter.is-active{background:var(--ember);color:#2a0f15;border-color:var(--ember);font-weight:500}

/* cards */
.dp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.dp-card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card);transition:transform .2s,border-color .2s,box-shadow .25s}
.dp-card:hover{transform:translateY(-4px);border-color:rgba(214,95,116,.55);box-shadow:0 22px 50px -26px rgba(0,0,0,.85),0 0 0 1px rgba(214,95,116,.18)}
.dp-thumb{position:relative;aspect-ratio:16/10;display:flex;align-items:flex-end;padding:16px;overflow:hidden}
.dp-thumb-cat{position:absolute;top:14px;left:14px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(38,12,20,.85);background:rgba(255,255,255,.34);border-radius:6px;padding:3px 8px;font-weight:500}
.dp-thumb-mono{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:30px;color:rgba(38,12,20,.82);line-height:1}
.dp-card-body{padding:20px;display:flex;flex-direction:column;gap:10px}
.dp-card-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:18px;line-height:1.2}
.dp-card-p{color:var(--muted);font-size:13.5px}
.dp-card-open{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--ember);margin-top:2px;opacity:0;transform:translateX(-4px);transition:opacity .2s,transform .2s}
.dp-card:hover .dp-card-open{opacity:1;transform:none}

/* detail */
.dp-detail{max-width:760px}
.dp-back{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:13px;color:var(--muted);transition:color .2s}
.dp-back:hover{color:var(--ember)}
.dp-detail-hero{height:260px;border-radius:20px;display:flex;align-items:flex-end;padding:24px;margin:18px 0 24px}
.dp-detail-mono{font-size:48px;color:rgba(38,12,20,.85)}
.dp-detail-head{margin-bottom:14px}
.dp-detail-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(26px,3.4vw,40px);letter-spacing:-.02em;line-height:1.06;margin-top:8px}
.dp-detail-overview{color:var(--muted);font-size:17px;max-width:62ch;margin-bottom:26px}
.dp-meta{display:flex;gap:36px;flex-wrap:wrap;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:24px}
.dp-meta-l{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin-bottom:6px}
.dp-meta-v{font-size:14.5px;color:var(--ink)}
.dp-detail-links{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px}
.dp-detail-note{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--faint);border:1px dashed var(--line-2);border-radius:10px;padding:14px 16px}

/* about */
.dp-about{display:grid;grid-template-columns:240px 1fr;gap:44px;align-items:start;max-width:860px}
.dp-avatar{width:240px;height:300px;border-radius:20px;object-fit:cover;border:1px solid var(--line-2);display:block}
.dp-p{color:var(--muted);font-size:16px;max-width:58ch;margin-top:16px}
.dp-tech{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.dp-chip{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--muted);border:1px solid var(--line);border-radius:8px;padding:6px 11px}

/* contact */
.dp-cta-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(28px,4.4vw,50px);letter-spacing:-.02em;line-height:1.05;max-width:14ch;margin-top:14px}
.dp-cta-sub{color:var(--muted);font-size:17px;max-width:48ch;margin-top:18px}
.dp-cta-row{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:30px}
.dp-contact-links{font-size:12.5px}
.dp-loc{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12.5px;color:var(--faint);margin-top:28px}

.dp-root a:focus-visible,.dp-root button:focus-visible{outline:2px solid var(--amber);outline-offset:3px;border-radius:8px}

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
.dp-root.motion-on .dp-detail-hero{transform-origin:top center;animation:dpExpand .5s cubic-bezier(.2,.7,.2,1)}
@keyframes dpRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes dpExpand{from{transform:scale(.97)}to{transform:none}}
@media (prefers-reduced-motion:reduce){.dp-root *{animation:none!important;transition:none!important}}

/* responsive */
@media (max-width:1080px){.dp-grid{grid-template-columns:1fr}}
@media (max-width:880px){
  .dp-shell{grid-template-columns:1fr}
  .dp-poster{position:sticky;top:0;height:auto;flex-direction:column;gap:22px;padding:24px 22px}
  .dp-glow{display:none}
  .dp-nav{flex-direction:row;gap:6px;overflow-x:auto}
  .dp-nav-item{border-left:none;border-bottom:2px solid transparent;border-radius:8px 8px 0 0;padding:8px 12px;flex-direction:column;gap:2px}
  .dp-nav-item.is-active{border-left:none;border-bottom-color:var(--ember)}
  .dp-poster-bottom{margin-top:0;flex-direction:row;align-items:center;justify-content:space-between}
  .dp-stage{padding:30px 22px}
  .dp-about{grid-template-columns:1fr;gap:22px}
  .dp-avatar{width:100%;max-width:280px;height:300px}
}
`;
