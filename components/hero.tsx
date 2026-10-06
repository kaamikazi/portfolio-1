import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { site } from "@/data/site";

// What every MVP I build includes. Shown in the card on the right.
const mvpChecklist = [
  { label: "Auth, accounts & user roles", note: "Supabase Auth" },
  { label: "Secure data per user or team", note: "Postgres RLS" },
  { label: "Subscriptions & payments", note: "Stripe" },
  { label: "AI features that respect permissions", note: "Claude / Gemini / GPT" },
  { label: "Live on your domain", note: "Vercel" },
];

/** The first thing visitors see: value proposition + two main buttons. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-10 lg:pt-28">
        <div className="lg:col-span-7">
          {/* Availability pill */}
          <p
            className="animate-rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
            style={{ "--rise-delay": "0ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-accent-text" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-text" />
            </span>
            Taking new MVP projects on Fiverr
          </p>

          {/* The one-line value proposition */}
          <h1
            className="animate-rise text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-[5.25rem]"
            style={{ "--rise-delay": "80ms" } as React.CSSProperties}
          >
            I turn your SaaS idea into a{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent-text">working product</span>{" "}
            in weeks.
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
            style={{ "--rise-delay": "160ms" } as React.CSSProperties}
          >
            I&apos;m {site.name}. I build SaaS MVPs for founders with Next.js, Supabase, Stripe and AI:
            sign-up, secure data, payments and AI features done properly the first time, so you can launch
            and start learning from real users.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            <ButtonLink href={site.links.fiverr} size="lg">
              Hire me on Fiverr
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="#projects" size="lg" variant="secondary">
              View projects
              <ArrowIcon className="size-4 rotate-90" />
            </ButtonLink>
          </div>
        </div>

        {/* Right column: what an MVP includes */}
        <aside
          className="animate-rise self-end lg:col-span-5"
          style={{ "--rise-delay": "320ms" } as React.CSSProperties}
          aria-label="What a typical MVP includes"
        >
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">mvp.scope</p>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-line" />
                <span className="size-2.5 rounded-full bg-accent" />
              </span>
            </div>
            <ul className="divide-y divide-line">
              {mvpChecklist.map((item) => (
                <li key={item.label} className="flex items-start justify-between gap-4 py-3.5">
                  <span className="flex items-start gap-3">
                    <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-accent-text" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <span className="shrink-0 pt-0.5 font-mono text-xs text-muted">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
