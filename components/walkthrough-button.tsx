"use client";

import { useRef } from "react";
import type { Walkthrough } from "@/data/projects";

/**
 * "Watch walkthrough" button that plays a project's screen recording in a pop-up.
 *
 * Uses the browser's built-in <dialog>, so Esc closes it, focus is handled for
 * keyboard users, and the page behind can't be clicked while it's open.
 * The video only downloads when someone opens the pop-up (preload="none").
 */
export function WalkthroughButton({ title, walkthrough }: { title: string; walkthrough: Walkthrough }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    // Start from the beginning each time. play() can be refused by the browser; ignore that.
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 text-sm font-medium text-accent-ink shadow-[0_1px_0_rgba(0,0,0,0.08),inset_0_-2px_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:brightness-95 active:scale-[0.98]"
      >
        {/* Play icon */}
        <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
          <path d="M5 3.5v9a.5.5 0 0 0 .77.42l7-4.5a.5.5 0 0 0 0-.84l-7-4.5A.5.5 0 0 0 5 3.5z" />
        </svg>
        Watch walkthrough
        <span className="font-mono text-xs opacity-70">{walkthrough.duration}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} walkthrough video`}
        // Pause the video whenever the pop-up closes (button, Esc or backdrop click).
        onClose={() => videoRef.current?.pause()}
        // A click on the dark backdrop (outside the video box) closes the pop-up.
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[min(1100px,calc(100vw-2rem))] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-black/75 backdrop:backdrop-blur-sm"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <p className="truncate text-sm font-medium text-ink">
              {title} <span className="text-muted">· walkthrough with sample data</span>
            </p>
            <button
              type="button"
              onClick={close}
              className="grid size-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              aria-label="Close video"
            >
              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>
          {/* The browser plays the first format it supports: MP4 first (Chrome, Safari, Edge, iPhone), WebM as a fallback. */}
          <video
            ref={videoRef}
            poster={walkthrough.poster}
            controls
            playsInline
            muted
            preload="none"
            className="block aspect-[16/10] w-full bg-black"
          >
            <source src={walkthrough.src} type="video/mp4" />
            {walkthrough.webmSrc && <source src={walkthrough.webmSrc} type="video/webm" />}
          </video>
        </div>
      </dialog>
    </>
  );
}
