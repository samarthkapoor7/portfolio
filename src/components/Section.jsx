import Reveal from "./Reveal";

/**
 * Editorial section shell: a hairline top divider, an eyebrow index + label
 * on the left rail (desktop), and content on the right.
 */
export default function Section({ id, index, label, children }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-28">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[10rem_1fr] md:gap-12">
        <Reveal className="md:pt-1">
          <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
            {index && (
              <span className="font-body text-xs tabular-nums text-muted">
                {index}
              </span>
            )}
            <h2 className="font-body text-xs uppercase tracking-eyebrow text-muted">
              {label}
            </h2>
          </div>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
