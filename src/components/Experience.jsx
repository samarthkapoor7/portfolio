import Section from "./Section";
import Reveal from "./Reveal";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCES } from "../data/experience";

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience">
      <div className="divide-y divide-line">
        {EXPERIENCES.map((experience, i) => (
          <Reveal key={experience.company} delay={i * 80}>
            <ExperienceItem experience={experience} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
