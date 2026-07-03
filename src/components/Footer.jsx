import { SITE } from "../data/site";
import { scrollToTop } from "../lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8">
      <div className="flex flex-col items-start justify-between gap-3 font-body text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {year} {SITE.name} — {SITE.location}
        </p>
        <div className="flex items-center gap-2">
          <span>Built with React &amp; Vite</span>
          <a
            href="#top"
            onClick={scrollToTop}
            className="link-underline text-ink"
            aria-label="Back to top"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
