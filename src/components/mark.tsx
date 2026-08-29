import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("text-fg", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 3.5 28.5 16 16 28.5 3.5 16 16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16 10v9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
      <path
        d="M11.5 16.5 16 21l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="miter"
      />
      <circle cx="16" cy="16" r="1.6" fill="var(--color-primary)" />
    </svg>
  );
}
