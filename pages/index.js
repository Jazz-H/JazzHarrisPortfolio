import { useState } from "react";
import Head from "next/head";
import NavMenu from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import ContactHeading from "./components/ContactHeading";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jazz Harris Portfolio</title>
        <meta name="description" content="portfolio for Jazz Harris" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="./assets/faviconjh.ico" />
      </Head>

      <section id="Home" className="bg-white dark:bg-gray-900">
        <NavMenu />
        <Header />
        <Work />
        <About />
        <ContactHeading />
        <Footer />

        <div className="icon-bar">
          <a
            className="cursor-pointer dark:text-gray-400 dark:hover:text-white"
            href="https://github.com/Jazz-H"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
          <a
            className="cursor-pointer dark:text-gray-400 dark:hover:text-white"
            href="https://www.linkedin.com/in/maurajharris/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer p-1.5 md:p-3 dark:text-gray-400 dark:hover:text-white"
            aria-label="Toggle dark mode"
          >
            <BsFillMoonStarsFill />
          </button>
        </div>
      </section>
    </main>
  );
}
