import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-xs font-medium tracking-wide text-muted",
        className,
      )}
      {...props}
    />
  );
}

const fieldClass =
  "w-full rounded-[10px] bg-surface-2 px-3.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] placeholder:text-faint focus-visible:shadow-[0_0_0_1px_var(--color-primary)]";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={cn(fieldClass, "h-11", className)} {...props} />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "min-h-32 resize-y py-3", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldClass, "h-11", className)} {...props}>
      {children}
    </select>
  );
}
