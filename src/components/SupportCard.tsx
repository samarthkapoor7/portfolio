import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export interface SupportCardData {
  /** Eyebrow, e.g. "Currently Supporting" / "Currently Training". */
  label: string;
  /** Headline, e.g. "Manchester United" / "Strength block". */
  title: string;
  /** One short static line you edit in the data file. */
  line: string;
  /** Icon rendered top-left — a line-art node or an image. */
  icon: ReactNode;
  /** "line" = bordered circle w/ currentColor; "image" = borderless (e.g. a crest). */
  iconVariant?: "line" | "image";
  /** Optional outbound link (whole card becomes a link when set). */
  href?: string;
  /** Faint accent revealed on hover only. Defaults to graphite. */
  hoverAccent?: "red" | "graphite";
  /** Stagger for the fade-in. */
  delay?: number;
}

const ACCENT_CLASS: Record<NonNullable<SupportCardData["hoverAccent"]>, string> = {
  // Man Utd: the one sanctioned splash of colour — hover only.
  red: "hover:border-[#DA291C]/60 hover:text-[#DA291C]",
  graphite: "hover:border-accent hover:text-accent",
};

export default function SupportCard({
  label,
  title,
  line,
  icon,
  iconVariant = "line",
  href,
  hoverAccent = "graphite",
  delay = 0,
}: SupportCardData) {
  const reduce = useReducedMotion();

  const accent = ACCENT_CLASS[hoverAccent];
  const Tag = (href ? motion.a : motion.div) as typeof motion.a;

  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      whileHover={reduce ? undefined : { y: -4 }}
      className={`group flex items-start gap-4 rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur-md transition-colors duration-300 ${accent}`}
    >
      {/* Icon — line-art inherits the hover accent via currentColor; an image
          sits borderless (grayscale→colour handled by the caller). */}
      {iconVariant === "image" ? (
        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center overflow-hidden">
          {icon}
        </span>
      ) : (
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-current group-hover:text-current">
          {icon}
        </span>
      )}

      <span className="min-w-0">
        <span className="block font-body text-[11px] uppercase tracking-eyebrow text-muted">
          {label}
        </span>
        <span className="mt-1 block font-display text-lg font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-current">
          {title}
        </span>
        <span className="mt-1 block font-body text-sm text-muted">{line}</span>
      </span>
    </Tag>
  );
}
