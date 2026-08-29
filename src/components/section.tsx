import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24", className)}
    >
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
      {children}
    </p>
  );
}

export function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
