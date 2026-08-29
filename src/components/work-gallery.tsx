import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Media } from "@/components/media";
import { FILTERS, WORK, type WorkCategory } from "@/lib/site";
import { asset, cn } from "@/lib/utils";

export function WorkGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<"all" | WorkCategory>("all");
  const [active, setActive] = useState<string | null>(null);

  const items = useMemo(() => {
    const list =
      filter === "all" ? WORK : WORK.filter((w) => w.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const selected = WORK.find((w) => w.id === active) ?? null;

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 rounded-full px-4 text-sm font-medium transition-[background-color,color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
              filter === f.id
                ? "bg-primary text-primary-fg"
                : "text-muted shadow-[var(--shadow-border)] hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.id}
            className={cn(item.featured && i === 0 && "sm:col-span-2")}
          >
            <button
              type="button"
              onClick={() => setActive(item.id)}
              className="group block w-full text-left"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-lg bg-surface-2 shadow-[var(--shadow-border)]",
                  item.featured && i === 0 ? "aspect-[16/9]" : "aspect-[4/3]",
                )}
              >
                <Media
                  src={item.src}
                  alt={item.alt}
                  className="transition-transform duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium text-fg">{item.title}</p>
                <p className="text-xs text-faint">{item.location}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selected ? (
        <div
          className="fixed inset-0 z-overlay flex items-center justify-center bg-bg/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-[10px] text-fg hover:bg-surface-2"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <figure
            className="max-h-[88dvh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-lg bg-surface">
              <img
                src={asset(selected.src)}
                alt={selected.alt}
                className="max-h-[76dvh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-sm">
              <span className="font-medium text-fg">{selected.title}</span>
              <span className="text-muted">{selected.location}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
