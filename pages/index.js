import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import ContactHeading from "../components/ContactHeading";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTheme } from "../lib/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

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

      <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
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
