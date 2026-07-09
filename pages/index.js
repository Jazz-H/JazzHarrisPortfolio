import Head from "next/head";
import Portfolio from "../components/Portfolio";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jazzharris.com";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Jazz Harris",
      alternateName: "Maura Harris",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/jazz-headshot.jpg`,
      jobTitle: "Business Analyst & Software Engineer",
      email: "mailto:mauraharris948@gmail.com",
      description:
        "Business analyst and software engineer who bridges business goals and software engineering to build digital products that deliver measurable results.",
      worksFor: { "@type": "Organization", name: "Coca-Cola Consolidated" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Elon University" },
      knowsAbout: [
        "Web Development",
        "Software Engineering",
        "Business Analysis",
        "Data Visualization",
        "React",
        "Next.js",
        "Power BI",
      ],
      sameAs: [
        "https://github.com/Jazz-H",
        "https://www.linkedin.com/in/maurajharris/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Jazz Harris · Portfolio",
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Jazz Harris · Portfolio</title>
        <meta
          name="description"
          content="Business analyst and software engineer. I bridge business goals and software engineering to build digital products that deliver measurable results."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#08080A" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Jazz Harris · Portfolio" />
        <meta
          property="og:description"
          content="Business analyst and software engineer. Selected projects and contact."
        />
        <meta property="og:image" content={`${SITE_URL}/assets/og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jazz Harris · Portfolio" />
        <meta
          name="twitter:description"
          content="Business analyst and software engineer. Selected projects and contact."
        />
        <meta name="twitter:image" content={`${SITE_URL}/assets/og.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </Head>

      <Portfolio />
    </>
  );
}
