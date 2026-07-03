import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Section id="work" index="04" label="Selected Work">
      <div className="divide-y divide-line">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
