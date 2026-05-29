import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initial =
      document.documentElement.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initial);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      if (next === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return (
    <>
      <Head>
        <title>404 — Jazz Harris</title>
        <meta name="description" content="Page not found." />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <section className="flex flex-1 items-center justify-center px-4 py-32 sm:px-6">
          <div className="card-modern mx-auto w-full max-w-xl p-8 text-center sm:p-12">
            <p
              aria-hidden="true"
              className="bg-gradient-to-r from-cyan-700 to-sky-700 bg-clip-text text-7xl font-black tracking-tight text-transparent dark:from-cyan-400 dark:to-sky-400 sm:text-8xl"
            >
              404
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              That page wandered off.
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
              The link might be broken or the page may have moved. Try the home
              page, or jump straight to my work.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/" className="btn-accent">
                <FiArrowLeft className="h-4 w-4" />
                Back home
              </Link>
              <Link href="/#Work" className="btn-ghost">
                <FiSearch className="h-4 w-4" />
                See my work
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
