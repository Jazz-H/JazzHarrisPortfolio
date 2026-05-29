import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { id, title, description, tech, image, links } = project;
  const detailHref = `/work/${id}`;

  return (
    <article className="card-modern group flex flex-col overflow-hidden">
      <Link
        href={detailHref}
        aria-label={`${title} — view details`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            <Link
              href={detailHref}
              className="transition-colors hover:text-accent dark:hover:text-accent-light"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-zinc-900 dark:text-accent-light dark:hover:text-zinc-100"
          >
            Details
            <FiArrowRight className="h-4 w-4" />
          </Link>
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-accent dark:text-zinc-300 dark:hover:text-accent-light transition-colors"
              aria-label={`Code on GitHub: ${title}`}
            >
              <BsGithub className="h-4 w-4" />
              Code
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-accent dark:text-zinc-300 dark:hover:text-accent-light transition-colors"
              aria-label={`Live demo: ${title}`}
            >
              <FiExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
