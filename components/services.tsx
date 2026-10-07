import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services, site } from "@/data/site";
import { cn, isTodo } from "@/lib/utils";

/** "Services" section: one card per Fiverr gig, from data/site.ts. */
export function Services() {
  return (
    <section id="services" className="border-t border-line bg-surface-2/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title={
            <>
              Pick what you need. <span className="font-serif font-normal italic">Nothing you don&apos;t.</span>
            </>
          }
          intro="Each service is a Fiverr gig with a fixed scope, agreed before work starts."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 100} className="flex">
              <div
                className={cn(
                  "flex w-full flex-col rounded-2xl border p-7 transition-transform duration-300 hover:-translate-y-1",
                  service.featured
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("font-mono text-xs", service.featured ? "text-bg/60" : "text-muted")}>
                    0{i + 1}
                  </span>
                  {service.featured && (
                    <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-accent-ink">
                      Best place to start
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em]">{service.name}</h3>
                <p className={cn("mt-2 text-pretty leading-relaxed", service.featured ? "text-bg/70" : "text-muted")}>
                  {service.forWho}
                </p>

                {/* Price and delivery time: hidden until you replace the TODOs in data/site.ts */}
                {(!isTodo(service.price) || !isTodo(service.delivery)) && (
                  <p className="mt-5 flex flex-wrap items-baseline gap-x-3">
                    {!isTodo(service.price) && <span className="text-2xl font-semibold">{service.price}</span>}
                    {!isTodo(service.delivery) && (
                      <span className={cn("text-sm", service.featured ? "text-bg/60" : "text-muted")}>
                        {service.delivery}
                      </span>
                    )}
                  </p>
                )}

                <p className={cn("mt-7 font-mono text-xs uppercase tracking-[0.16em]", service.featured ? "text-bg/60" : "text-muted")}>
                  You get
                </p>
                <ul className="mt-3 flex-1 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-snug">
                      <svg
                        viewBox="0 0 16 16"
                        className={cn("mt-0.5 size-4 shrink-0", service.featured ? "text-accent" : "text-accent-text")}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Links to this package's own gig; falls back to the profile until the gig URL is filled in */}
                <ButtonLink
                  href={isTodo(service.fiverrGigUrl) ? site.links.fiverr : service.fiverrGigUrl}
                  variant={service.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Order on Fiverr
                  <ArrowIcon />
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
