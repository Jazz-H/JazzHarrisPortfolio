import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <section
      id="Home"
      className="relative overflow-hidden pt-24 sm:pt-32 md:pt-40"
    >
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="hero-glow -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-24 sm:pb-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-zinc-700 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to new opportunities
        </div>

        <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-700 to-sky-700 bg-clip-text text-transparent dark:from-cyan-400 dark:to-sky-400">
            Jazz Harris
          </span>
          .
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Software engineer and business analyst building the things that
          bridge people, data, and code.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a href="#Work" className="btn-accent">
            See my work
            <FiArrowRight className="h-4 w-4" />
          </a>
          <a href="#Contact" className="btn-ghost">
            Get in touch
          </a>
          <a
            href="https://drive.google.com/file/d/1ZDRLfYgAmvWeZohlKUU1mZkrgpuLCxoD/view"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Resume
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-5 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="https://github.com/Jazz-H"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light transition-colors"
          >
            <BsGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/maurajharris/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light transition-colors"
          >
            <AiFillLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
