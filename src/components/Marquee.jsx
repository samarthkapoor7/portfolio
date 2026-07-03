/**
 * Seamless infinite marquee. Renders the item set twice and translates -50%,
 * so the loop is invisible. Pauses on hover. `reverse` flips direction.
 * Respects prefers-reduced-motion (animation disabled via CSS).
 */
export default function Marquee({ items, reverse = false, duration = 46 }) {
  return (
    <div className="marquee-group overflow-hidden py-3">
      <div
        className={`marquee ${reverse ? "marquee--reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center"
            aria-hidden={dup === 1}
          >
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center whitespace-nowrap font-display text-2xl font-medium text-muted transition-colors duration-300 hover:text-ink md:text-4xl"
              >
                <span className="px-6 md:px-8">{item}</span>
                <span className="text-accent" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
