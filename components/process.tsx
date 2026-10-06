import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/data/site";

/** "Process" section: four steps from brief to delivery (edit them in data/site.ts). */
export function Process() {
  return (
    <section id="process" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Process"
          title={
            <>
              From brief to launch, <span className="font-serif font-normal italic">no surprises.</span>
            </>
          }
          intro="You always know what's being built, what's next and when it will be ready."
        />

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="bg-bg">
              <div className="flex h-full flex-col p-7">
                <span className="font-serif text-6xl italic leading-none text-accent-text">{i + 1}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
