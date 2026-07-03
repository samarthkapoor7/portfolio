export default function ExperienceItem({ experience }) {
  const { period, role, company, location, impact, description, technologies } =
    experience;

  return (
    <article className="group grid grid-cols-1 gap-4 py-10 md:grid-cols-[10rem_1fr] md:gap-10">
      {/* Left rail: period */}
      <div>
        <p className="font-body text-sm text-muted">{period}</p>
        {location && (
          <p className="mt-1 font-body text-xs text-muted/70">{location}</p>
        )}
      </div>

      {/* Right: role, impact, description, tags */}
      <div>
        <h3 className="font-display text-2xl font-medium text-ink">
          {role}
        </h3>
        <p className="mt-1 font-body text-sm text-muted">
          {company}
        </p>

        {impact && impact.length > 0 && (
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3">
            {impact.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-3xl font-light tabular-nums text-accent">
                  {m.value}
                </dt>
                <dd className="mt-1 font-body text-sm leading-snug text-muted">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
          {technologies.map((tech) => (
            <li key={tech} className="font-body text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
