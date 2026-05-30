import Script from "next/script";

// Umami analytics. Renders nothing until NEXT_PUBLIC_UMAMI_WEBSITE_ID is
// set, so local dev and feature branches without the env var stay silent.
//
// To enable:
//   1. Sign in at https://cloud.umami.is (free tier) and create a site
//      for jazz-harris.netlify.app — copy the Website ID it gives you.
//   2. In Netlify -> Site settings -> Environment variables, add:
//        NEXT_PUBLIC_UMAMI_WEBSITE_ID = <the UUID from step 1>
//      (optionally also NEXT_PUBLIC_UMAMI_SRC if self-hosting Umami)
//   3. Trigger a new deploy. The script will start firing.
export default function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const src =
    process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js";

  if (!websiteId) return null;

  return (
    <Script
      strategy="afterInteractive"
      src={src}
      data-website-id={websiteId}
    />
  );
}
