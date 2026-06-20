import React from "react";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
