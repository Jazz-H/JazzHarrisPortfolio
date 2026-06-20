import Head from "next/head";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jazz Harris — Portfolio</title>
        <meta
          name="description"
          content="Software engineer and business analyst. I turn business problems into websites, tools, and dashboards that actually work."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#08080A" />

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

      <Portfolio />
    </>
  );
}
