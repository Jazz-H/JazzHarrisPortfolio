import { projects } from "../lib/projects";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jazz-harris.netlify.app";

function generateSiteMap() {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = [
    `${SITE_URL}/`,
    ...projects.map((p) => `${SITE_URL}/work/${p.id}`),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) =>
      `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
  )
  .join("\n")}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(sitemap);
  res.end();
  return { props: {} };
}
