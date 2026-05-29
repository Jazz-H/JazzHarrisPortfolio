const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Jazz Harris. All rights reserved.
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Built with Next.js, React, and Tailwind. Source on{" "}
          <a
            href="https://github.com/Jazz-H/JazzHarrisPortfolio"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-2 dark:text-accent-light"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
