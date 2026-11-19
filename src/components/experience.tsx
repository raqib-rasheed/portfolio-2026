import { JOBS } from "@/content/career";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raqib-abdul-rasheed/" },
  { label: "GitHub", href: "https://github.com/raqib-rasheed" },
  { label: "X", href: "https://x.com/raqib__rasheed" },
] as const;

export function Experience() {
  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-title"
      className="mt-28 outline-none"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">03</p>
      <h2 id="experience-title" className="mt-2 text-3xl tracking-tight">
        Experience
      </h2>
      <div className="mt-6">
        {JOBS.map((job) => (
          <article
            key={job.title}
            className="grid gap-2 border-t border-white/[0.08] py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8"
          >
            <div>
              <h3 className="text-xl tracking-tight">{job.title}</h3>
              <p className="mt-1 text-sm text-bone/60">{job.line}</p>
            </div>
            <p className="font-mono text-sm text-bone/45">{job.when}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.08] pt-5 font-mono text-sm">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-bone/60 hover:text-accent">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
