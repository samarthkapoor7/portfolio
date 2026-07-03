import Reveal from "./Reveal";
import SupportCard from "./SupportCard";
import { DumbbellIcon } from "./icons";
import unitedCrest from "../assets/united.png";
import { SUPPORT } from "../data/support";
import { TRAINING } from "../data/training";

/**
 * A quiet "personality strip" — the static companion cards read as one unit,
 * not scattered gimmicks. Lives at the end of the About section.
 */
export default function CurrentlyStrip() {
  return (
    <div className="mt-14">
      <Reveal>
        <h3 className="mb-5 font-body text-xs uppercase tracking-eyebrow text-muted">
          Currently
        </h3>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SupportCard
          {...SUPPORT}
          iconVariant="image"
          icon={
            <img
              src={unitedCrest}
              alt="Manchester United crest"
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              /* Black crest: invert to off-white in dark mode so it stays visible.
                 Slightly dimmed at rest, full strength on hover. */
              className="h-full w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:invert"
            />
          }
          delay={0}
        />
        <SupportCard
          {...TRAINING}
          icon={<DumbbellIcon className="h-4 w-4" />}
          delay={80}
        />
      </div>
    </div>
  );
}
