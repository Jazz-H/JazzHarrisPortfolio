import Head from "next/head";
import Portfolio from "../components/Portfolio";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jazzharris.com";

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
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Jazz Harris — Portfolio" />
        <meta
          property="og:description"
          content="Software engineer and business analyst. Selected projects and contact."
        />
        <meta property="og:image" content={`${SITE_URL}/assets/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jazz Harris — Portfolio" />
        <meta
          name="twitter:description"
          content="Software engineer and business analyst. Selected projects and contact."
        />
        <meta name="twitter:image" content={`${SITE_URL}/assets/og.png`} />
      </Head>

      <Portfolio />
    </>
  );
}
