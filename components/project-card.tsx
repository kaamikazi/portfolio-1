import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { BrandIcon } from "@/components/brand-icon";
import { ProjectMedia } from "@/components/project-media";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * One project, shown as a wide card: screenshot on one side, details on the other.
 * `index` flips the layout on every other card so the page doesn't feel repetitive.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" className="group">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Screenshot / video */}
        <div className={cn("lg:col-span-7", flipped && "lg:order-2")}>
          <ProjectMedia project={project} priority={index === 0} />
        </div>

        {/* Text */}
        <div className="lg:col-span-5">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-muted">{number}</span>
            {/* Honest label: Demo / Personal product / Client project */}
            <span
              className={cn(
                "rounded-full px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em]",
                project.label === "Client project"
                  ? "bg-accent text-accent-ink"
                  : "border border-line text-muted",
              )}
            >
              {project.label}
            </span>
            {project.kind && <span className="text-sm text-muted">{project.kind}</span>}
          </div>

          <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-pretty text-lg leading-relaxed text-muted">{project.problem}</p>

          {/* Key features */}
          <ul className="mt-6 space-y-2.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-[15px] leading-snug">
                <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-accent-text" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech stack badges */}
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>

          {/* Buttons: only shown if the link exists in data/projects.ts */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl !== undefined && (
              <ButtonLink href={project.liveUrl} todoLabel="Live demo soon">
                Live demo
                <ArrowIcon />
              </ButtonLink>
            )}
            {project.githubUrl !== undefined && (
              <ButtonLink href={project.githubUrl} variant="secondary" todoLabel="Code coming soon">
                <BrandIcon name="github" />
                GitHub
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
