import Reveal from "./Reveal";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 md:py-28">
      {/* Section heading */}
      <Reveal>
        <div className="mb-12 flex items-baseline gap-3">
          <span className="font-body text-xs tabular-nums text-muted">02</span>
          <h2 className="font-body text-xs uppercase tracking-eyebrow text-muted">
            Technologies
          </h2>
        </div>
      </Reveal>

      {/* Spec-grid: hairline-divided cells (bg-line shows through gap-px) */}
      <Reveal>
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className="group flex flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-medium text-ink">
                  {group.category}
                </h3>
                <span className="font-body text-xs tabular-nums text-muted transition-colors duration-300 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group/item flex items-center border-t border-line/60 py-2 font-body text-sm text-muted transition-all duration-200 first:border-t-0 hover:pl-1.5 hover:text-accent"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-line transition-colors duration-200 group-hover/item:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Closing cell — fills the grid + adds voice */}
          <div className="flex flex-col justify-center bg-bg p-7 md:p-8">
            <p className="font-serif text-xl font-light italic leading-snug text-ink">
              Comfortable across the whole stack — from voice pipelines to
              pixels.
            </p>
            <a
              href="#contact"
              className="link-underline mt-4 w-fit font-body text-sm text-accent"
            >
              Let&rsquo;s build something →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
