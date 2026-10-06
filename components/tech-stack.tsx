import { BrandIcon } from "@/components/brand-icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { techStack } from "@/data/site";

/** "Tech stack" section: logo badges grouped by area (edit them in data/site.ts). */
export function TechStack() {
  // Group the flat list by its `group` field, keeping the original order.
  const groups = techStack.reduce<Record<string, typeof techStack>>((acc, tech) => {
    (acc[tech.group] ??= []).push(tech);
    return acc;
  }, {});

  return (
    <section id="stack" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Tech stack"
          title={
            <>
              Proven tools, <span className="font-serif font-normal italic">picked on purpose.</span>
            </>
          }
          intro="A modern, popular stack, so your product is fast to build and easy to hire for later."
        />

        <div className="divide-y divide-line border-y border-line">
          {Object.entries(groups).map(([group, items], i) => (
            <Reveal key={group} delay={i * 60} className="grid gap-4 py-6 md:grid-cols-12 md:items-center">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:col-span-3">{group}</p>
              <ul className="flex flex-wrap gap-2.5 md:col-span-9">
                {items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-2.5 rounded-full border border-line bg-surface py-2 pl-3 pr-4 text-[15px] font-medium transition-colors hover:border-ink/40"
                  >
                    {tech.icon ? (
                      <BrandIcon name={tech.icon} className="size-[18px]" />
                    ) : (
                      // No logo available: show a small dot instead.
                      <span className="grid size-[18px] place-items-center" aria-hidden="true">
                        <span className="size-1.5 rounded-full bg-muted" />
                      </span>
                    )}
                    {tech.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
