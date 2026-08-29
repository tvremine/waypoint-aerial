import { asset, cn } from "@/lib/utils";

export function Media({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
