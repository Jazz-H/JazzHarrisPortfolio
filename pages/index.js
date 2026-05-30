import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import ContactHeading from "../components/ContactHeading";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initial =
      document.documentElement.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const next = e.matches ? "dark" : "light";
        applyTheme(next);
        setTheme(next);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
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

  return (
    <>
      <Head>
        <title>Jazz Harris — Portfolio</title>
        <meta
          name="description"
          content="Software engineer and business analyst. Selected projects and contact."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/assets/faviconjh.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jazz Harris — Portfolio" />
        <meta
          property="og:description"
          content="Software engineer and business analyst. Selected projects and contact."
        />
        <meta property="og:image" content="/assets/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jazz Harris — Portfolio" />
        <meta
          name="twitter:description"
          content="Software engineer and business analyst. Selected projects and contact."
        />
        <meta name="twitter:image" content="/assets/og.png" />
      </Head>

      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <main
        id="main"
        className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      >
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Header />
        <Work />
        <About />
        <ContactHeading />
        <Footer />
      </main>
    </>
  );
}
