"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

// Returns false on the server and true in the browser. We use it so the
// "pressed" state is only announced once we actually know the visitor's theme.
const noop = () => () => {};
function useIsClient() {
  return useSyncExternalStore(noop, () => true, () => false);
}

/**
 * Light / Dark switch shown in the header.
 *
 * - Every visitor can pick the mode they like; the choice is saved in their
 *   browser, so the site remembers it next time.
 * - Until they pick one, the site follows their phone/computer setting.
 * - The highlighted option is styled with the `dark:` class, so it's correct
 *   from the very first paint with no flicker.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const options = [
    {
      value: "light",
      label: "Light",
      // Highlighted when the page is NOT in dark mode
      activeClass: "bg-surface text-ink shadow-sm dark:bg-transparent dark:text-muted dark:shadow-none",
      icon: (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ),
    },
    {
      value: "dark",
      label: "Dark",
      // Highlighted when the page IS in dark mode
      activeClass: "text-muted dark:bg-surface dark:text-ink dark:shadow-sm",
      icon: (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="group"
      aria-label="Color mode"
      className="flex items-center gap-0.5 rounded-full border border-line bg-surface-2 p-0.5"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setTheme(option.value)}
          aria-pressed={isClient ? resolvedTheme === option.value : undefined}
          title={`Switch to ${option.label.toLowerCase()} mode`}
          className={`flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-colors hover:text-ink ${option.activeClass}`}
        >
          {option.icon}
          {/* Text label hidden on very small screens to save space; icon stays */}
          <span className="hidden min-[400px]:inline">{option.label}</span>
          <span className="sr-only min-[400px]:hidden">{option.label} mode</span>
        </button>
      ))}
    </div>
  );
}
