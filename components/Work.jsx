import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";

const VALID_IDS = new Set(CATEGORIES.map((c) => c.id));

const Work = () => {
  const [active, setActive] = useState("all");

  // Hydrate the tab from the URL once on mount. Synchronous setState here
  // is intentional — the URL is an external source of truth that we read
  // exactly once. Refactor to useSyncExternalStore if this grows.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("work");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial && VALID_IDS.has(initial)) setActive(initial);
  }, []);

  const selectCategory = (id) => {
    setActive(id);
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete("work");
    else url.searchParams.set("work", id);
    window.history.replaceState({}, "", url);
  };

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="Work" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
              Things I've built &amp; shipped
            </h2>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Project categories"
          className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-800 dark:bg-zinc-900"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
