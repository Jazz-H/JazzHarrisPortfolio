import { Html, Head, Main, NextScript } from "next/document";

const setInitialTheme = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
      </Head>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{ __html: setInitialTheme }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
