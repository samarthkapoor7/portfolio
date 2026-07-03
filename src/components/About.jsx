import Section from "./Section";
import Reveal from "./Reveal";
import CurrentlyStrip from "./CurrentlyStrip";
import { ABOUT_TEXT } from "../data/site";

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <Reveal>
        <p className="max-w-2xl font-serif text-2xl font-light leading-snug text-ink md:text-[2rem]">
          Most of my work lives where{" "}
          <span className="italic text-accent">AI meets production</span> —
          turning models and messy, real-world inputs into systems people can
          actually <span className="italic text-accent">rely on</span>.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
          {ABOUT_TEXT}
        </p>
      </Reveal>

      <CurrentlyStrip />
    </Section>
  );
}
