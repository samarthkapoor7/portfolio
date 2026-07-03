import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-36">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <Reveal className="md:pt-3">
          <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
            <span className="font-body text-xs tabular-nums text-muted">06</span>
            <h2 className="font-body text-xs uppercase tracking-eyebrow text-muted">
              Contact
            </h2>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <a
              href={`mailto:${SITE.email}`}
              className="group inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-ink"
            >
              Let&rsquo;s talk
              <span className="text-accent">.</span>
              <span className="mt-2 block h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-lg font-body text-base text-muted md:text-lg">
              Open to full-stack &amp; AI engineering roles and collaborations.
              The fastest way to reach me is email.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-body text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline text-ink"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink"
              >
                LinkedIn
              </a>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink"
              >
                GitHub
              </a>
              <a
                href={SITE.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink"
              >
                Twitter
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
