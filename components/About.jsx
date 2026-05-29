import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const TECH = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Python", Icon: SiPython },
  { name: "SQL", Icon: SiMysql },
  { name: "REST API", Icon: TbApi },
];

const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent dark:text-accent-light">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl">
            A bit about me
          </h2>
        </div>

        <div className="card-modern grid grid-cols-1 gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl sm:h-44 sm:w-44 md:mx-0 md:h-52 md:w-52">
            <Image
              src="/assets/JHPhoto.png"
              alt="Jazz Harris"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              My passion for continuously learning and seeing new ideas come to
              life sparked my interest in coding. Since then I've had the
              privilege of working at a digital marketing agency in Ireland,
              several local businesses, and a multinational enterprise.
            </p>
            <p>
              Currently, as a Business Relationship Analyst at Central Piedmont
              Community College, I act as a liaison between stakeholders,
              vendors, and technical teams — overseeing software and hardware
              acquisitions to keep them aligned with business needs.
            </p>
            <p>
              I'm passionate about leveraging my technical background and
              communication skills to drive impactful solutions. Let's
              connect.
            </p>

            <div className="pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Recent tech I've worked with
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH.map(({ name, Icon }) => (
                  <span key={name} className="chip">
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4 text-zinc-600 dark:text-zinc-300"
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
