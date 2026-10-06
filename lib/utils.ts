import { site } from "@/data/site";

/**
 * Returns true when a value is a placeholder you haven't filled in yet
 * (anything starting with "TODO"), or is empty.
 * Components use this to hide or disable things instead of showing broken links.
 */
export function isTodo(value: string | undefined | null): boolean {
  return !value || value.trim().toUpperCase().startsWith("TODO");
}

/**
 * The site's public URL, used for SEO tags, the sitemap and social previews.
 * Order of preference:
 *   1. `site.url` in data/site.ts (once you replace the TODO)
 *   2. NEXT_PUBLIC_SITE_URL environment variable
 *   3. The production URL Vercel provides automatically
 *   4. localhost for local development
 */
export function getSiteUrl(): string {
  if (!isTodo(site.url)) return site.url.replace(/\/$/, "");
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

/** Joins class names, skipping empty/false values. Tiny helper to keep JSX readable. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
