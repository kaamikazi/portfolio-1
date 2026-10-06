import { Reveal } from "@/components/reveal";

/**
 * The heading used at the top of each section:
 *   01 — Projects
 *   Big title
 *   Optional intro text
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-accent-text">{index}</span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-md text-pretty text-lg leading-relaxed text-muted md:col-span-5 md:justify-self-end">{intro}</p>}
    </Reveal>
  );
}
