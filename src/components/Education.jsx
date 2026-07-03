import Section from "./Section";
import Reveal from "./Reveal";
import { EDUCATION } from "../data/projects";

export default function Education() {
  return (
    <Section id="education" index="05" label="Education">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink">
              {EDUCATION.degree}
            </h3>
            <p className="mt-1 font-body text-sm text-muted">
              {EDUCATION.school}
            </p>
          </div>
          <p className="font-body text-sm tabular-nums text-muted">
            {EDUCATION.period}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
