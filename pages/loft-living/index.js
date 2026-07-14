import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const LoftLivingApp = dynamic(() => import("../../components/LoftLivingApp"), {
  ssr: false,
});

// iOS Safari ignores manifest.json's background_color for the PWA launch
// splash — it only honors apple-touch-startup-image links, one per exact
// device size. Without these, iOS shows a plain white screen with a small
// centered icon before the app mounts. Each image is pre-rendered to match
// the LoadingScreen (dark bg + the same icon mark) so the native splash and
// the in-app loading screen read as one continuous transition.
const APPLE_SPLASH_SCREENS = [
  { w: 375, h: 667, dpr: 2, file: "apple-splash-750-1334.png" }, // iPhone SE/8
  { w: 375, h: 812, dpr: 3, file: "apple-splash-1125-2436.png" }, // iPhone X/11 Pro/12/13 mini
  { w: 414, h: 896, dpr: 2, file: "apple-splash-828-1792.png" }, // iPhone XR/11
  { w: 414, h: 896, dpr: 3, file: "apple-splash-1242-2688.png" }, // iPhone XS Max/11 Pro Max
  { w: 390, h: 844, dpr: 3, file: "apple-splash-1170-2532.png" }, // iPhone 12/13/14
  { w: 428, h: 926, dpr: 3, file: "apple-splash-1284-2778.png" }, // iPhone 12/13/14 Pro Max/Plus
  { w: 393, h: 852, dpr: 3, file: "apple-splash-1179-2556.png" }, // iPhone 14/15 Pro
  { w: 430, h: 932, dpr: 3, file: "apple-splash-1290-2796.png" }, // iPhone 14/15 Pro Max
  { w: 768, h: 1024, dpr: 2, file: "apple-splash-1536-2048.png" }, // iPad 10.2"/9.7"
  { w: 834, h: 1194, dpr: 2, file: "apple-splash-1668-2388.png" }, // iPad Pro 11"
  { w: 1024, h: 1366, dpr: 2, file: "apple-splash-2048-2732.png" }, // iPad Pro 12.9"
];

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
        {APPLE_SPLASH_SCREENS.map(({ w, h, dpr, file }) => (
          <link
            key={file + dpr}
            rel="apple-touch-startup-image"
            href={`/loft-living/splash/${file}`}
            media={`(device-width: ${w}px) and (device-height: ${h}px) and (-webkit-device-pixel-ratio: ${dpr}) and (orientation: portrait)`}
          />
        ))}
      </Head>
      <LoftLivingApp />
    </>
  );
}
