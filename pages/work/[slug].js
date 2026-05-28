import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { CATEGORIES, projects } from "../../lib/projects";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const categoryLabel = (id) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? "Project";

export default function ProjectDetail({ project }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initial =
      document.documentElement.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initial);
  }, []);

  const applyTheme = (next) => {
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    root.dataset.theme = next;
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const { title, description, category, tech, image, links, details } =
    project;
  const pageTitle = `${title} — Jazz Harris`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
      </Head>

      <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <article className="section-pad">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/#Work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light"
            >
              <FiArrowLeft className="h-4 w-4" />
              All work
            </Link>

            <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
              {categoryLabel(category)}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent"
                >
                  <FiExternalLink className="h-4 w-4" />
                  Visit live
                </a>
              )}
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <BsGithub className="h-4 w-4" />
                  Source on GitHub
                </a>
              )}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <img
                src={image}
                alt={title}
                className="h-auto w-full"
                loading="eager"
              />
            </div>

            {details ? (
              <div className="mt-12 space-y-10">
                {details.role && (
                  <section>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      My role
                    </h2>
                    <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
                      {details.role}
                    </p>
                  </section>
                )}
                {details.responsibilities?.length > 0 && (
                  <section>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      What I did
                    </h2>
                    <ul className="mt-3 space-y-2 text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
                      {details.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                {details.outcomes?.length > 0 && (
                  <section>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                      Outcomes
                    </h2>
                    <ul className="mt-3 space-y-2 text-base text-zinc-700 dark:text-zinc-300 sm:text-lg">
                      {details.outcomes.map((o, i) => (
                        <li key={i} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                          />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            ) : null}

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <Link
                href="/#Work"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light"
              >
                <FiArrowLeft className="h-4 w-4" />
                Back to all work
              </Link>
              <Link href="/#Contact" className="btn-accent">
                Get in touch
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}
