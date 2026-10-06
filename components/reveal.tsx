"use client";

import { useEffect, useRef } from "react";

/**
 * Fades its content in the first time it scrolls into view.
 *
 * Usage:
 *   <Reveal>...</Reveal>
 *   <Reveal delay={120}>...</Reveal>   // wait 120ms (nice for staggering cards)
 *
 * The CSS for this lives in app/globals.css (`.reveal`).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Watch the element; once it's ~10% visible, add the class and stop watching.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // The ref type differs per tag; this cast keeps TypeScript happy.
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
