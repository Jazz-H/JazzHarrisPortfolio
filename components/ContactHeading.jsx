import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail, FiArrowRight } from "react-icons/fi";

const ContactHeading = () => {
  return (
    <section id="Contact" className="section-pad">
      <div className="mx-auto max-w-3xl">
        <div className="card-modern p-8 text-center sm:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
            Let's build something great.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            I'm always open to new opportunities and the chance to create
            something meaningful. The fastest way to reach me is by email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:mauraharris948@gmail.com"
              className="btn-accent"
            >
              <FiMail className="h-4 w-4" />
              mauraharris948@gmail.com
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="https://github.com/Jazz-H"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light"
            >
              <BsGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/maurajharris/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent-light"
            >
              <AiFillLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeading;
