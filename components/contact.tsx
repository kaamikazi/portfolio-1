import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { BrandIcon } from "@/components/brand-icon";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { isTodo } from "@/lib/utils";

/** "Contact" section: Fiverr, email and GitHub. */
export function Contact() {
  const emailMissing = isTodo(site.links.email);

  const channels: { label: string; value: string; href: string; icon: "chat" | "email" | "github"; hint: string }[] = [
    {
      label: "Fiverr",
      value: site.links.fiverrName,
      href: site.links.fiverr,
      icon: "chat",
      hint: "Best for new projects: orders, milestones and payment protection.",
    },
    {
      label: "Email",
      value: emailMissing ? "Email coming soon" : site.links.email,
      href: emailMissing ? "" : `mailto:${site.links.email}`,
      icon: "email",
      hint: "For questions before you order.",
    },
    {
      label: "GitHub",
      value: `@${site.links.githubName}`,
      href: site.links.github,
      icon: "github",
      hint: "Browse the code behind my projects.",
    },
  ];

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent-text">05</span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            Contact
          </p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl">
            Have an idea? <span className="font-serif font-normal italic text-accent-text">Let&apos;s ship it.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Send me a message on Fiverr with a few lines about your product. I&apos;ll reply with questions,
            a suggested scope and how long it will take.
          </p>
          <div className="mt-10">
            <ButtonLink href={site.links.fiverr} size="lg">
              Hire me on Fiverr
              <ArrowIcon />
            </ButtonLink>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 80}>
              {c.href ? (
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group/contact flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/40"
                >
                  <ContactInner {...c} />
                </a>
              ) : (
                <div className="flex h-full flex-col rounded-2xl border border-dashed border-line p-6 text-muted">
                  <ContactInner {...c} />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** The inside of a contact card: label, icon + value, and a short hint. */
function ContactInner({
  label,
  value,
  icon,
  hint,
  href,
}: {
  label: string;
  value: string;
  icon: "chat" | "email" | "github";
  hint: string;
  href: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{label}</span>
        {/* Only clickable cards get the arrow */}
        {href && (
          <ArrowIcon className="size-4 text-muted transition-transform group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 group-hover/contact:text-ink" />
        )}
      </div>
      <span className="mt-8 flex items-center gap-2.5 break-all text-xl font-semibold tracking-[-0.02em]">
        {icon === "github" && <BrandIcon name="github" className="size-5 shrink-0" />}
        {icon === "email" && (
          <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        )}
        {icon === "chat" && (
          <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
        )}
        {value}
      </span>
      <span className="mt-2 text-sm text-muted">{hint}</span>
    </>
  );
}
