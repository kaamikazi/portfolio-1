import Image from "next/image";
import type { Project } from "@/data/projects";
import { isTodo } from "@/lib/utils";

/**
 * Shows a project's screenshot or demo video inside a simple browser frame.
 * If the project has no `media` yet, a placeholder is shown instead.
 */
export function ProjectMedia({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { media } = project;

  // The fake address bar shows the live URL's domain when there is one.
  const address = !isTodo(project.liveUrl) && project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `${project.slug}.app`;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.35)]">
      {/* Browser top bar */}
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-2.5" aria-hidden="true">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted">
          {address}
        </span>
        <span className="w-[42px]" />
      </div>

      {/* 16:10 area for the screenshot / video / placeholder */}
      <div className="relative aspect-[16/10] w-full">
        {media?.type === "image" && (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        )}

        {media?.type === "video" && (
          // Muted + playsInline lets the video autoplay on phones too.
          <video
            src={media.src}
            poster={media.poster}
            className="absolute inset-0 size-full object-cover object-top"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

        {!media && <MediaPlaceholder title={project.title} />}
      </div>
    </div>
  );
}

/** Placeholder shown until you add a screenshot or video in data/projects.ts. */
function MediaPlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      {/* Faint wireframe of an app, so the placeholder still looks intentional */}
      <div className="absolute inset-6 grid grid-cols-[1fr_3fr] gap-3 opacity-60" aria-hidden="true">
        <div className="space-y-2 rounded-lg border border-dashed border-line p-3">
          <div className="h-2 w-3/4 rounded bg-line" />
          <div className="h-2 w-1/2 rounded bg-line" />
          <div className="h-2 w-2/3 rounded bg-line" />
        </div>
        <div className="grid grid-rows-[auto_1fr] gap-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="h-12 rounded-lg border border-dashed border-line" />
            <div className="h-12 rounded-lg border border-dashed border-line" />
            <div className="h-12 rounded-lg border border-dashed border-line" />
          </div>
          <div className="rounded-lg border border-dashed border-line" />
        </div>
      </div>
      <p className="relative rounded-full border border-line bg-surface px-4 py-2 text-center text-sm text-muted">
        {title}: screenshot coming soon
      </p>
    </div>
  );
}
