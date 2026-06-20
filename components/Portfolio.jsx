"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from "react";
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
  FiCopy,
  FiCheck,
  FiMapPin,
  FiBriefcase,
  FiActivity,
  FiBookOpen,
  FiTrendingUp,
  FiCode,
  FiBarChart2,
} from "react-icons/fi";

const HEADSHOT_SRC = "/jazz-headshot.jpg";

const PROJECTS = [
  {
    cat: "Apps", title: "Valora",
    body: "A personal budgeting app that turns messy finances into clear, calm decisions — track spending, set goals, and see where your money actually goes. Currently in public beta.",
    tags: ["React", "TypeScript", "JavaScript", "CSS", "HTML"], status: "Beta",
    image: "/assets/ValoraCover.jpg",
    live: "https://getvalora.netlify.app",
    company: "[ Your agency name ]", role: "Solo design & development",
    study: {
      challenge: "Most budgeting tools are noisy and guilt-driven. I wanted something calmer that answers one question fast: where is my money actually going?",
      approach: "Designed and built the product end to end — flows for tracking spending, setting goals, and seeing category breakdowns at a glance.",
      outcome: "Live in public beta and gathering real user feedback to shape the roadmap.",
    },
  },
  {
    cat: "Websites", title: "Alamance Community Foundation",
    body: "A community foundation site I designed, built, and maintained as a freelance project — focused on credibility, clear navigation, and making it easy for donors to engage.",
    tags: ["Squarespace", "HTML", "CSS", "JavaScript"], image: "/assets/AlamanceCover.jpg",
    live: "https://www.alamancecommunityfoundation.org",
    company: "Alamance Community Foundation (freelance)", role: "Solo design & development",
    study: {
      challenge: "A community foundation needs to read as credible and make it effortless for donors to find programs and give.",
      approach: "Designed and built the site solo — clear navigation, a trustworthy structure, and content the staff can update themselves.",
      outcome: "A polished, maintainable site the foundation keeps current without a developer.",
    },
  },
  {
    cat: "Websites", title: "Electric Supplies Online",
    body: "An e-commerce storefront for an electrical-supplies retailer, organized so customers can find and buy the right parts fast.",
    tags: ["Yahoo Manager", "HTML", "CSS", "JavaScript"], image: "/assets/ElectricCover.jpg",
    live: "https://electricsuppliesonline.com/",
    company: "Electric Supplies Online", role: "Designer & developer",
    study: {
      challenge: "Shoppers needed to find and buy the right electrical part quickly, across a large catalog.",
      approach: "Organized the storefront and product structure around fast discovery and a clean checkout path.",
      outcome: "A storefront that gets customers to the right part with less friction.",
    },
  },
  {
    cat: "Websites", title: "FIE Study Abroad",
    body: "An editorial post documenting a study-abroad experience cut short by COVID-19 — clean reading layout and storytelling.",
    tags: ["WordPress", "HTML", "CSS", "JavaScript"], image: "/assets/FIECover.jpg",
    live: "https://fiestudyabroad.wordpress.com/2020/04/13/jazz-wrapping-up-study-abroad-after-covid-19/",
    company: "Foundation for International Education (study-abroad program)", role: "Student & author",
    study: {
      challenge: "Tell the honest story of a study-abroad term cut short by COVID-19 in a way that's readable and useful to future students.",
      approach: "Wrote and laid out an editorial post with a clean reading structure and a clear narrative.",
      outcome: "A published piece that captures the experience for the program's audience.",
    },
  },
  {
    cat: "Apps", title: "To-Do App with Quote API",
    body: "A task tracker with daily-quote integration and full create/read/update/delete, backed by Firebase.",
    tags: ["React", "Firebase", "Axios", "REST API"], image: "/assets/ToDoAppLogo.png",
    live: "https://to-do-app-nu-cyan.vercel.app/", code: "https://github.com/Jazz-Harris/To-DoApp",
    company: "Personal project", role: "Solo developer",
    study: {
      challenge: "Build a task tracker that's a little more motivating than a plain checklist.",
      approach: "Implemented full create/read/update/delete on Firebase and pulled a daily quote from a REST API.",
      outcome: "A working app that exercises real data persistence and third-party API integration.",
    },
  },
  {
    cat: "Apps", title: "Weather Application",
    body: "Search any city and get live conditions through the OpenWeather API, built in Next.js.",
    tags: ["Next.js", "React", "Tailwind", "OpenWeather API"], image: "/assets/weatherappbg.png",
    live: "https://weather-app-sand-six-26.vercel.app/", code: "https://github.com/Jazz-Harris/WeatherApp",
    company: "Personal project", role: "Solo developer",
    study: {
      challenge: "Get accurate, current conditions for any city, fast.",
      approach: "Built a Next.js front end against the OpenWeather API with a clean search-driven flow.",
      outcome: "Type a city, get live conditions instantly.",
    },
  },
  {
    cat: "Apps", title: "Real-time Chat App",
    body: "A multi-user chat with authentication and live message sync on Firebase v9.",
    tags: ["React", "Firebase v9", "Tailwind"], image: "/assets/ChatAppLogo.png",
    live: "https://chata-27aa7.web.app/", code: "https://github.com/Jazz-Harris/ChatApp",
    company: "Personal project", role: "Solo developer",
    study: {
      challenge: "Support multiple people chatting live, with proper sign-in.",
      approach: "Used Firebase v9 for authentication and real-time message sync across clients.",
      outcome: "A multi-user chat that updates instantly for everyone in the room.",
    },
  },
  {
    cat: "Data", title: "KPI Management Dashboard",
    body: "An interactive sales-and-profit dashboard published to Tableau Public for quick decision-making.",
    tags: ["Tableau"], image: "/assets/KPIDashboardLogo.png",
    live: "https://public.tableau.com/views/SalesandProfitManagementDashboard_16673599690350/Dashboard1",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "Turn raw sales and profit data into something a manager can act on at a glance.",
      approach: "Modeled the data and built an interactive Tableau dashboard, published to Tableau Public.",
      outcome: "A shareable dashboard for quick sales-and-profit decisions.",
    },
  },
  {
    cat: "Data", title: "Data Professional Survey Dashboard",
    body: "Cleaned, transformed, and visualized survey data into a clear Power BI report.",
    tags: ["Power BI", "ETL"], image: "/assets/Dataprofessionallogo.png",
    code: "https://github.com/Jazz-Harris/DataProfessionalSurveyPowerbi",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "Make sense of a messy professional-survey dataset.",
      approach: "Cleaned and transformed the data, then visualized it in a clear Power BI report.",
      outcome: "An easy-to-read view of who data professionals are and what they earn.",
    },
  },
  {
    cat: "Data", title: "Real Estate Web Scraper",
    body: "A Python scraper that pulls listing data with BeautifulSoup and exports it to CSV.",
    tags: ["Python", "BeautifulSoup"], image: "/assets/webscraplogo.png",
    code: "https://github.com/Jazz-Harris/WebScrapingRealEstateData",
    company: "Personal project", role: "Developer",
    study: {
      challenge: "Collect real-estate listing data that isn't available as a clean export.",
      approach: "Wrote a Python + BeautifulSoup scraper that pulls listings and exports them to CSV.",
      outcome: "A repeatable way to gather listing data ready for analysis.",
    },
  },
  {
    cat: "Data", title: "Supermarket Sales EDA",
    body: "Exploratory data analysis on supermarket sales using the Python data stack.",
    tags: ["Pandas", "NumPy", "Seaborn"], image: "/assets/EDAProjectLogo.png",
    code: "https://github.com/Jazz-Harris/EDAWithSuperMarketData",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "Understand what actually drives supermarket sales.",
      approach: "Ran exploratory data analysis with Pandas, NumPy, and Seaborn.",
      outcome: "Clear visual insight into sales patterns and their drivers.",
    },
  },
  {
    cat: "Data", title: "U.S. Credit Card Defaults",
    body: "Prepared, transformed, and modeled credit-card default data into an analytical Power BI report.",
    tags: ["Power BI", "ETL"], image: "/assets/CreditCardDefaultsLogo.png",
    code: "https://github.com/Jazz-Harris/CreditCardDefaults-Powerbi",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "Explore what correlates with credit-card default risk.",
      approach: "Prepared, transformed, and modeled the data into an analytical Power BI report.",
      outcome: "An analytical view of default patterns across customer segments.",
    },
  },
  {
    cat: "Data", title: "Real-time Stock Market Dashboard",
    body: "Live market data pulled from a REST API into an interactive dashboard.",
    tags: ["Power BI", "REST API"], image: "/assets/RTSMDLogo.png",
    company: "Personal project", role: "Data analyst",
    study: {
      challenge: "See live market movement in one place instead of jumping between sources.",
      approach: "Pulled live data from a REST API into an interactive Power BI dashboard.",
      outcome: "A real-time market view that refreshes straight from the API.",
    },
  },
];
const FILTERS = ["All", "Websites", "Apps", "Data"];
const TECH = ["JavaScript", "TypeScript", "React", "Next.js", "Python", "SQL", "Firebase", "REST APIs", "Power Apps", "SharePoint", "Power BI", "Tableau", "Tailwind"];
const SERVICES = [
  { Icon: FiTrendingUp, title: "Business analysis & strategy", body: "Translating business goals into clear requirements and a roadmap — working between stakeholders, vendors, and engineers to ship the right thing." },
  { Icon: FiCode, title: "Software & web development", body: "Building software and responsive websites — applications, custom tools, and polished web experiences — with React, Next.js, and modern tooling. Functional, reliable, and a pleasure to use." },
  { Icon: FiBarChart2, title: "Data & dashboards", body: "Turning raw data into clear, decision-ready dashboards and reports with Power BI, Tableau, and the Python data stack." },
];
const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const SOCIALS = [
  { Icon: FiGithub, label: "GitHub", href: "https://github.com/Jazz-H" },
  { Icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/maurajharris/" },
  { Icon: FiMail, label: "Email", href: "mailto:mauraharris948@gmail.com" },
  { Icon: FiFileText, label: "Résumé", href: "/Jazz-Harris-Resume.pdf" },
];
const CAT_GRADIENT = {
  Websites: "linear-gradient(135deg, #e98a99 0%, #9c4a60 100%)",
  Apps: "linear-gradient(135deg, #d77fa6 0%, #7d3f63 100%)",
  Data: "linear-gradient(135deg, #b9697f 0%, #5e3450 100%)",
};
const EMAIL = "mauraharris948@gmail.com";

function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); })
        .catch(() => {});
    }
  };
  return [copied, copy];
}

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
    html.style.background = "#000000";
    body.style.background = "#000000";
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
            {view === "about" && <About go={go} />}
            {view === "contact" && <Contact />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Poster({ view, go }) {
  const [emailCopied, copyEmail] = useCopy();
  return (
    <aside className="dp-poster">
      <div className="dp-glow" aria-hidden="true" />
      <button type="button" className="dp-id" onClick={() => go("work")} aria-label="Jazz Harris — back to top">
        <span className="dp-mark">JH</span>
        <span className="dp-id-text">
          <span className="dp-name">Jazz Harris</span>
          <span className="dp-role">Software engineer &amp; business analyst</span>
        </span>
      </button>

      <div className="dp-statement">
        <p className="dp-kicker">Portfolio — 2026</p>
        <h1 className="dp-h1">
          I turn business problems into websites, applications, and dashboards that{" "}
          <span className="dp-mark-text">actually work</span>.
        </h1>
        <span className="dp-status"><i className="dp-dot" /> Available now — let's build something together</span>
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
        <div className="dp-social">
          {SOCIALS.map(({ Icon, label, href }) =>
            label === "Email" ? (
              <button
                key={label}
                type="button"
                className="dp-social-btn"
                aria-label={emailCopied ? "Email address copied" : "Copy email address"}
                title={emailCopied ? "Copied!" : EMAIL}
                onClick={() => copyEmail(EMAIL)}
              >
                {emailCopied ? <FiCheck aria-hidden="true" /> : <Icon aria-hidden="true" />}
              </button>
            ) : (
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
            )
          )}
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
      <span className="dp-thumb-cat">{p.cat}</span>
      {p.status && <span className="dp-badge">{p.status}</span>}
    </span>
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

function Gallery({ images, title, gradient, status, fallbackWord }) {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
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

  return (
    <div
      className="dp-gallery"
      style={{ background: gradient }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(idx + 1);
        if (e.key === "ArrowLeft") go(idx - 1);
      }}
    >
      {images.length ? (
        <div className="dp-gallery-track" ref={trackRef} onScroll={onScroll}>
          {images.map((src, i) => (
            <div className="dp-gallery-slide" key={src}>
              <img src={src} alt={multi ? `${title} — screen ${i + 1}` : title} loading={i === 0 ? undefined : "lazy"} />
            </div>
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
          <div className="dp-gallery-dots">
            {images.map((src, i) => (
              <button type="button" key={src} className={"dp-gallery-dot" + (i === idx ? " is-active" : "")} aria-label={`Go to image ${i + 1}`} aria-current={i === idx} onClick={() => go(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Detail({ p, onBack }) {
  if (!p) return null;
  return (
    <section className="dp-view dp-detail">
      <button className="dp-back" onClick={onBack}><FiArrowLeft aria-hidden="true" /> All work</button>
      <Gallery
        images={p.images || (p.image ? [p.image] : [])}
        title={p.title}
        gradient={CAT_GRADIENT[p.cat]}
        status={p.status}
        fallbackWord={p.title.split(" ")[0]}
      />
      <div className="dp-detail-head">
        <p className="dp-kicker">{p.cat}</p>
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
      <div className="dp-about-top">
        <div className="dp-about-media">
          <img className="dp-avatar" src={HEADSHOT_SRC} alt="Jazz Harris, Business Analyst" />
          <div className="dp-about-facts">
            <div className="dp-fact"><FiMapPin aria-hidden="true" /><div><span className="dp-fact-l">Based in</span><span className="dp-fact-v">Charlotte, NC</span></div></div>
            <div className="dp-fact"><FiBriefcase aria-hidden="true" /><div><span className="dp-fact-l">By day</span><span className="dp-fact-v">Business Analyst · Coca-Cola Consolidated</span></div></div>
            <div className="dp-fact"><FiBookOpen aria-hidden="true" /><div><span className="dp-fact-l">Studied</span><span className="dp-fact-v">B.A. Computer Science · Elon University</span></div></div>
            <div className="dp-fact"><FiActivity aria-hidden="true" /><div><span className="dp-fact-l">Currently</span><span className="dp-fact-v">Building Valora, a budgeting app</span></div></div>
          </div>
        </div>
        <div className="dp-about-body">
          <p className="dp-label">About</p>
          <h2 className="dp-detail-h">Builder by craft, analyst by training.</h2>
          <p className="dp-p">I studied Computer Science at Elon University, with minors in Art History and Digital Art. That combination shaped how I approach technology today: balancing technical problem-solving with a designer's eye for detail. I enjoy building things that are not only functional and reliable, but intuitive, polished, and enjoyable to use.</p>
          <p className="dp-p">While at Elon, I completed a software engineering internship in Dublin, Ireland, an experience that broadened my perspective on technology and collaboration. Since then, I've worked across both the technical and business sides of software—from development and analysis to working directly with stakeholders, vendors, and engineers. I enjoy taking complex ideas, defining a clear path forward, and helping turn them into solutions that create real value.</p>
          <p className="dp-p">Today, I'm a Business Analyst at Coca-Cola Consolidated. Outside of work, I build websites, custom software, and digital tools for businesses and entrepreneurs. Most recently, I created Valora, a personal finance platform focused on helping people gain clarity and confidence with their money. Whether I'm building a website, an application, or a business tool, my goal is always the same: create thoughtful solutions that solve problems and stand the test of time.</p>
          <p className="dp-p">When I'm not behind a screen, you'll usually find me traveling, exploring personal finance, working on a Lego project that's become bigger than expected, or enjoying anything with four wheels or two. I believe great technology starts with understanding people, and the best products are built with equal parts creativity, craftsmanship, and purpose.</p>
        </div>
      </div>

      <div className="dp-about-section">
        <p className="dp-sub">Core skills</p>
        <div className="dp-services">
          {SERVICES.map(({ Icon, title, body }) => (
            <div className="dp-service" key={title}>
              <span className="dp-service-icn"><Icon aria-hidden="true" /></span>
              <h3 className="dp-service-h">{title}</h3>
              <p className="dp-service-p">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dp-about-section">
        <p className="dp-sub">Tools &amp; technologies</p>
        <div className="dp-pills">{TECH.map((t) => (<span className="dp-pill" key={t}>{t}</span>))}</div>
      </div>

      <div className="dp-about-cta">
        <p className="dp-about-cta-t">Have something in mind?</p>
        <div className="dp-about-cta-btns">
          <button className="dp-btn dp-btn-primary" onClick={() => go("contact")}>Start a project <FiArrowRight aria-hidden="true" /></button>
          <a className="dp-btn dp-btn-ghost" href="/Jazz-Harris-Resume.pdf" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true" /> Résumé</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, copy] = useCopy();
  return (
    <section className="dp-view dp-contact">
      <div className="dp-contact-head">
        <p className="dp-label">Contact</p>
        <h2 className="dp-cta-h">Let's build something that works.</h2>
        <p className="dp-cta-sub">Got a project, a problem, or a half-formed idea? Email is the fastest way to reach me.<br />I read everything.</p>
        <span className="dp-status"><i className="dp-dot" /> Usually replies within a day</span>
      </div>

      <div className="dp-contact-card">
        <button type="button" className="dp-contact-row dp-contact-row-primary" onClick={() => copy(EMAIL)}>
          <span className="dp-cr-icn"><FiMail aria-hidden="true" /></span>
          <span className="dp-cr-text"><span className="dp-cr-l">Email</span><span className="dp-cr-v">{EMAIL}</span></span>
          <span className={"dp-cr-arrow dp-cr-copy" + (copied ? " is-copied" : "")}>{copied ? (<><FiCheck aria-hidden="true" /> Copied</>) : (<><FiCopy aria-hidden="true" /> Copy</>)}</span>
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
          <span className="dp-cr-text"><span className="dp-cr-l">Location</span><span className="dp-cr-v">Charlotte, NC · working with clients anywhere</span></span>
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
.dp-mark{font-family:var(--font-mono),'JetBrains Mono',monospace;font-weight:500;font-size:15px;letter-spacing:.04em;border:1px solid var(--line-2);border-radius:9px;padding:8px 10px;transition:border-color .2s,color .2s}
.dp-id:hover .dp-mark{border-color:var(--ember);color:var(--ember)}
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
.dp-gallery{position:relative;height:320px;border-radius:20px;overflow:hidden;margin:18px 0 24px;border:1px solid var(--line-2)}
.dp-gallery .dp-detail-mono{position:absolute;left:24px;bottom:24px}
.dp-detail-mono{font-size:48px;color:rgba(20,8,14,.85)}
.dp-gallery-track{position:absolute;inset:0;display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}
.dp-gallery-track::-webkit-scrollbar{display:none}
.dp-gallery-slide{flex:0 0 100%;width:100%;height:100%;scroll-snap-align:center}
.dp-gallery-slide img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
.dp-gallery-nav{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(8,6,9,.5);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(243,234,234,.18);color:var(--ink);font-size:18px;z-index:2;transition:background .2s,border-color .2s,color .2s,opacity .2s}
.dp-gallery-nav:hover{background:rgba(8,6,9,.85);border-color:var(--ember);color:var(--ember)}
.dp-gallery-nav:disabled{opacity:0;pointer-events:none}
.dp-gallery-prev{left:12px}
.dp-gallery-next{right:12px}
.dp-gallery-dots{position:absolute;bottom:13px;left:50%;transform:translateX(-50%);display:flex;gap:7px;z-index:2}
.dp-gallery-dot{width:7px;height:7px;border-radius:50%;background:rgba(243,234,234,.45);transition:background .2s,transform .2s}
.dp-gallery-dot.is-active{background:var(--ember);transform:scale(1.3)}
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
@media (max-width:560px){.dp-study-row{grid-template-columns:1fr;gap:6px}}

/* about */
.dp-about{max-width:880px;display:flex;flex-direction:column;gap:46px}
.dp-about-top{display:grid;grid-template-columns:240px 1fr;gap:44px;align-items:start}
.dp-about-media{display:flex;flex-direction:column;gap:18px}
.dp-avatar{width:240px;height:300px;border-radius:20px;object-fit:cover;border:1px solid var(--line-2);display:block}
.dp-about-facts{display:flex;flex-direction:column;gap:13px}
.dp-fact{display:flex;align-items:flex-start;gap:11px;color:var(--muted);font-size:13px}
.dp-fact svg{color:var(--ember);font-size:15px;margin-top:2px;flex:none}
.dp-fact-l{display:block;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint)}
.dp-fact-v{display:block;color:var(--ink);font-size:13.5px;margin-top:1px}
.dp-p{color:var(--muted);font-size:16px;max-width:58ch;margin-top:16px}

.dp-about-section{border-top:1px solid var(--line);padding-top:30px}
.dp-services{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.dp-service{border:1px solid var(--line);background:var(--card);border-radius:14px;padding:18px}
.dp-service-icn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:rgba(214,95,116,.12);color:var(--ember);font-size:18px;margin-bottom:13px}
.dp-service-h{font-family:var(--font-display),'Bricolage Grotesque',sans-serif;font-weight:600;font-size:16px;margin-bottom:7px}
.dp-service-p{color:var(--muted);font-size:13.5px;line-height:1.5}
/* pills (stack / skills / card tags) — shared, on-brand */
.dp-pills{display:flex;flex-wrap:wrap;gap:8px}
.dp-pill{display:inline-flex;align-items:center;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;letter-spacing:.01em;color:var(--muted);background:rgba(243,234,234,.04);border:1px solid var(--line-2);border-radius:999px;padding:5px 12px;line-height:1.3;transition:color .18s,border-color .18s,background .18s}
.dp-pill:hover{color:var(--ink);border-color:rgba(214,95,116,.45);background:rgba(214,95,116,.08)}
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
.dp-contact-row:not(.dp-contact-row-static):hover .dp-cr-icn{color:var(--ember);border-color:rgba(214,95,116,.5)}
.dp-contact-row-primary .dp-cr-icn{background:var(--ember);border-color:var(--ember);color:#2a0f15}
.dp-cr-text{display:flex;flex-direction:column;gap:2px;min-width:0}
.dp-cr-l{font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.dp-cr-v{font-size:15px;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dp-cr-arrow{margin-left:auto;color:var(--faint);font-size:16px;flex:none;transition:color .18s,transform .18s}
.dp-contact-row:hover .dp-cr-arrow{color:var(--ember);transform:translate(2px,-2px)}
.dp-cr-copy{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono),'JetBrains Mono',monospace;font-size:12px;transform:none}
.dp-contact-row:hover .dp-cr-copy{transform:none}
.dp-cr-copy.is-copied{color:var(--ember)}

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
.dp-root.motion-on .dp-gallery{transform-origin:top center;animation:dpExpand .5s cubic-bezier(.2,.7,.2,1)}
@keyframes dpRise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes dpExpand{from{transform:scale(.97)}to{transform:none}}
@media (prefers-reduced-motion:reduce){.dp-root *{animation:none!important;transition:none!important}}

/* responsive */
@media (max-width:1080px){.dp-grid{grid-template-columns:1fr}.dp-services{grid-template-columns:1fr}}
@media (max-width:880px){
  .dp-shell{grid-template-columns:1fr}
  .dp-poster{position:sticky;top:0;height:auto;flex-direction:column;gap:22px;padding:24px 22px}
  .dp-glow{display:none}
  .dp-nav{flex-direction:row;gap:6px;overflow-x:auto}
  .dp-nav-item{border-left:none;border-bottom:2px solid transparent;border-radius:8px 8px 0 0;padding:8px 12px;flex-direction:column;gap:2px}
  .dp-nav-item.is-active{border-left:none;border-bottom-color:var(--ember)}
  .dp-poster-bottom{flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap}
  .dp-poster-cta{width:auto}
  .dp-stage{padding:30px 22px}
  .dp-about-top{grid-template-columns:1fr;gap:24px}
  .dp-avatar{width:100%;max-width:280px;height:320px}
}
`;
