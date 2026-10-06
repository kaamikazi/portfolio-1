import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

/** "Projects" section. Cards come from data/projects.ts. */
export function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="Projects"
          title={
            <>
              Real apps, <span className="font-serif font-normal italic">real code.</span>
            </>
          }
          intro="Each one is labelled honestly. Open the code on GitHub and see exactly how I build."
        />

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
