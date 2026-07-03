const STAGES = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "result", label: "Result" },
];

export default function ProjectCard({ project, index }) {
  const { title, tagline, technologies, links } = project;
  const primary = links && links[0];

  return (
    <article className="group grid grid-cols-1 gap-6 py-12 md:grid-cols-[10rem_1fr] md:gap-10">
      {/* Left rail: index + primary link */}
      <div className="flex items-baseline justify-between md:flex-col md:justify-start md:gap-4">
        <span className="font-body text-sm tabular-nums text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        {/* Title row */}
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 className="font-display text-3xl font-medium text-ink md:text-4xl">
              {title}
            </h3>
            <p className="mt-1 font-body text-sm text-muted">{tagline}</p>
          </div>
          {primary && (
            <a
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-body text-sm text-ink transition-colors duration-300 hover:text-accent"
            >
              {primary.label}
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                ↗
              </span>
            </a>
          )}
        </div>

        {/* Problem -> Approach -> Result */}
        <dl className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STAGES.map((stage) => (
            <div key={stage.key}>
              <dt className="font-body text-xs uppercase tracking-eyebrow text-muted">
                {stage.label}
              </dt>
              <dd className="mt-2 font-body text-sm leading-relaxed text-ink/85">
                {project[stage.key]}
              </dd>
            </div>
          ))}
        </dl>

        {/* Tech tags */}
        <ul className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-body text-xs text-muted transition-colors duration-300 group-hover:border-line/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
