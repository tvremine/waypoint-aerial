import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5 text-fg">
            <Mark className="size-7" />
            <span className="font-display text-lg font-semibold">
              {SITE.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.description}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-faint uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-faint uppercase">
            Studio
          </p>
          <p className="mt-4 text-sm text-muted">{SITE.owner}</p>
          <p className="mt-1 text-sm text-muted">{SITE.city}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 inline-block text-sm text-muted transition-colors hover:text-fg"
          >
            {SITE.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-faint sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {SITE.name} · {SITE.owner}</p>
          <p>FAA Part 107 commercial operations.</p>
        </div>
      </div>
    </footer>
  );
}
