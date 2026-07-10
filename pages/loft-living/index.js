import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const LoftLivingApp = dynamic(() => import("../../components/LoftLivingApp"), {
  ssr: false,
});

export default function LoftLivingPage() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/loft-living/sw.js", { scope: "/loft-living/" })
        .catch(() => {});
    }
  }, []);

  return (
    <>
      <Head>
        <title>LOFT Living Redesign — Prototype · Jazz Harris</title>
        <meta
          name="description"
          content="A working prototype of a self-initiated LOFT Living redesign: persistent sign-in, transparent rent payment, and a task-first home. Install it as an app."
        />
        <meta name="robots" content="noindex" />
        <link rel="manifest" href="/loft-living/manifest.json" />
        <meta name="theme-color" content="#0B0E14" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="LOFT Redesign" />
        <link rel="apple-touch-icon" href="/loft-living/icon-192.png" />
      </Head>
      <LoftLivingApp />
    </>
  );
}
