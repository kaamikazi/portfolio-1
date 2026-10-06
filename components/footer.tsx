import { site } from "@/data/site";

/** Simple footer with name, year and a back-to-top link. */
export function Footer() {
  // The year updates automatically each time the site is rebuilt.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
