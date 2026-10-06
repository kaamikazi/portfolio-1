"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps the app so dark/light mode works everywhere.
 * - attribute="class": adds class="dark" to <html> in dark mode.
 * - defaultTheme="system": follows the visitor's OS setting until they click the toggle.
 * - The choice is remembered in the browser.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
