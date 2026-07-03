import { useRef } from "react";
import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function Hero() {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center pt-24"
    >
      {/* Line-grid graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "clamp(48px, 8vw, 96px) clamp(48px, 8vw, 96px)",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 78%)",
        }}
      />
      {/* Cursor-follow spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 40%), var(--accent-weak), transparent 70%)",
        }}
      />

      <div className="w-full">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-eyebrow text-muted">
            {SITE.title} <span className="mx-2 text-line">/</span> {SITE.location}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="group mt-6 font-display font-medium leading-[0.9] tracking-[-0.02em] text-ink">
            <span className="block text-[clamp(3.5rem,14vw,12rem)] font-normal">
              {SITE.firstName}
            </span>
            <span className="block text-[clamp(3.5rem,14vw,12rem)]">
              {SITE.lastName}
              <span className="inline-block text-accent transition-transform duration-500 group-hover:translate-x-2">
                .
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl font-body text-lg text-muted md:text-xl">
            {SITE.valueProp}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 font-body text-sm">
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
            <a href={`mailto:${SITE.email}`} className="link-underline text-ink">
              Email
            </a>
            <a
              href={SITE.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cv inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              CV
              <span className="inline-block transition-transform duration-300 group-hover/cv:translate-x-0.5 group-hover/cv:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <Reveal
        delay={360}
        className="absolute bottom-8 left-0 hidden items-center gap-3 md:flex"
      >
        <span className="font-body text-xs uppercase tracking-eyebrow text-muted">
          Scroll
        </span>
        <span className="relative h-px w-12 overflow-hidden bg-line">
          <span className="absolute inset-y-0 left-0 w-4 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-accent" />
        </span>
      </Reveal>
    </section>
  );
}
