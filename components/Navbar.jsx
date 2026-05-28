import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { href: "Work", label: "Work" },
  { href: "about", label: "About" },
  { href: "Contact", label: "Contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          scrolled || open ? "nav-blur" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            to="Home"
            spy
            smooth
            duration={400}
            offset={-80}
            className="flex cursor-pointer items-center gap-2"
          >
            <img
              src="./assets/JHNavLogo.png"
              alt="Jazz Harris logo"
              className="h-8 w-8"
            />
            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Jazz Harris
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1ZDRLfYgAmvWeZohlKUU1mZkrgpuLCxoD/view"
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-1 rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              {theme === "dark" ? (
                <FiSun className="h-4 w-4" />
              ) : (
                <FiMoon className="h-4 w-4" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              {theme === "dark" ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-full p-2 text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden border-zinc-200 bg-white transition-[max-height,opacity] duration-300 ease-out dark:border-zinc-800 dark:bg-zinc-950 ${
            open
              ? "max-h-96 border-t opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={close}
                className="rounded-lg px-4 py-3 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1ZDRLfYgAmvWeZohlKUU1mZkrgpuLCxoD/view"
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-1 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close menu"
        onClick={close}
        className={`fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
};

export default Navbar;
