import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/mark";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
        scrolled || open
          ? "bg-bg/95 shadow-[var(--shadow-border)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg"
          aria-label={`${SITE.name} home`}
        >
          <Mark className="size-8" />
          <span className="font-display text-xl font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors duration-[var(--motion-quick)]",
                pathname === item.to
                  ? "text-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/contact">Request a quote</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-[var(--motion-fast)] ease-[var(--ease-smooth-out)]",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex min-h-11 items-center rounded-[10px] px-3 text-base font-medium",
                pathname === item.to ? "bg-surface-2 text-fg" : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <Link to="/contact">Request a quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
