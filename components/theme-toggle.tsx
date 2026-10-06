"use client";

import { useTheme } from "next-themes";

/**
 * Sun/moon button that switches between light and dark mode.
 * Both icons are always rendered; CSS shows the right one based on the
 * "dark" class, so there's no flicker while the page loads.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {/* Sun: shown in dark mode (click to go light) */}
      <svg viewBox="0 0 24 24" className="hidden size-4 dark:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Moon: shown in light mode (click to go dark) */}
      <svg viewBox="0 0 24 24" className="block size-4 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
