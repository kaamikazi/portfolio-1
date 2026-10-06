import { getIcon } from "@/components/tech-icons";

/**
 * Draws a brand logo in the current text color.
 * Example: <BrandIcon name="github" className="size-4" />
 */
export function BrandIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  const icon = getIcon(name);
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={icon.title}>
      <path d={icon.path} />
    </svg>
  );
}
