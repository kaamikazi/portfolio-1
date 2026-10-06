import { cn, isTodo } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  // Lime button: the main call to action.
  primary:
    "bg-accent text-accent-ink hover:brightness-95 shadow-[0_1px_0_rgba(0,0,0,0.08),inset_0_-2px_0_rgba(0,0,0,0.08)]",
  // Outlined button.
  secondary: "border border-line bg-surface text-ink hover:border-ink/40",
  // Text-like button for less important links.
  ghost: "text-ink hover:bg-surface-2",
};

/**
 * A link that looks like a button.
 *
 * - External links (http...) open in a new tab automatically.
 * - If `href` is a placeholder like "TODO_LIVE_URL", it renders a disabled
 *   button with the `todoLabel` text instead of a broken link.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  todoLabel = "Coming soon",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  todoLabel?: string;
  className?: string;
}) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap",
    size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-4 text-sm",
    className,
  );

  // Placeholder link → disabled look, not clickable.
  if (isTodo(href)) {
    return (
      <span
        aria-disabled="true"
        title="Link not added yet"
        className={cn(base, "cursor-not-allowed border border-dashed border-line text-muted")}
      >
        {todoLabel}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(base, styles[variant], "active:scale-[0.98]")}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Small arrow icon used inside buttons. */
export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
