import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { MARQUEE_ROWS } from "../data/skills";

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

      {/* Full-bleed marquee bands, alternating direction, edge-faded */}
      <Reveal className="full-bleed">
        <div className="[mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]">
          {MARQUEE_ROWS.map((row, i) => (
            <Marquee
              key={i}
              items={row}
              reverse={i % 2 === 1}
              duration={46 + i * 8}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
