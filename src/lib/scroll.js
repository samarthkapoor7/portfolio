/**
 * Scroll to the top of the page without leaving a `#top` hash in the URL.
 * Used by the nav logo and the footer "back to top" link. Keeps the anchor
 * href as a no-JS fallback; this handler takes over when JS is available.
 */
export function scrollToTop(e) {
  if (e) e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
}
