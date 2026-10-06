import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/data/site";

// Links in the top navigation. The `href` must match a section's `id`.
const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

/** Sticky top bar: name, section links, theme toggle and the Fiverr button. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Name / logo: clicking it scrolls back to the top */}
        <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-ink font-mono text-sm text-bg transition-transform group-hover:-rotate-6">
            {site.name.charAt(0)}
          </span>
          <span>{site.name}</span>
        </a>

        {/* Section links: hidden on small phones to keep the bar clean */}
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={site.links.fiverr} size="md" className="hidden sm:inline-flex">
            Hire me
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
