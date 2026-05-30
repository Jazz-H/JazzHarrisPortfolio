import React from "react";
import { Inter } from "next/font/google";
import Analytics from "../components/Analytics";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Analytics />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
