"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import FoldMark from "@/components/brand/FoldMark";
/* Alpha-only silhouette derived from the approved Fold master. It is used as a
   mask for the light layers and is never displayed itself. */
import silhouette from "@/assets/brand/fold-silhouette.png";

/* The approved dimensional Fold with material light. Nothing about the artwork
   changes: no rotation, no invented geometry. Two light layers, clipped to the
   Fold's own silhouette, blend softly over its surfaces:
   · one slow pass of light after the entrance (CSS, plays once);
   · on fine pointers, a soft highlight that follows the cursor, and a 7 px
     drift of the whole object for depth.
   Both are off under prefers-reduced-motion. */
export default function HeroFold({ delay = 0 }: { delay?: number }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    const hero = el?.closest("section");
    if (!el || !hero) return;
    const fine   = window.matchMedia("(pointer: fine)");
    const calm   = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let raf = 0;
    let pending: { x: number; y: number } | null = null;

    const apply = () => {
      raf = 0;
      if (!pending) return;
      const r = el.getBoundingClientRect();
      const nx = (pending.x - r.left) / r.width;
      const ny = (pending.y - r.top) / r.height;
      const inside = nx > -0.1 && nx < 1.1 && ny > -0.1 && ny < 1.1;
      el.style.setProperty("--lx", `${(nx * 100).toFixed(1)}%`);
      el.style.setProperty("--ly", `${(ny * 100).toFixed(1)}%`);
      /* Drift is relative to the hero, not the Fold, so it stays tiny. */
      const h = hero.getBoundingClientRect();
      el.style.setProperty("--px", (((pending.x - h.left) / h.width - 0.5) * -2).toFixed(3));
      el.style.setProperty("--py", (((pending.y - h.top) / h.height - 0.5) * -2).toFixed(3));
      el.dataset.lit = inside ? "true" : "false";
    };
    const onMove = (e: PointerEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      el.dataset.lit = "false";
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stage}
      aria-hidden
      data-lit="false"
      className="fold-stage fold-rise pointer-events-none"
      style={{ "--delay": `${delay}ms`, "--fold-mask": `url(${silhouette.src})` } as CSSProperties}
    >
      <div className="fold-depth relative">
        <FoldMark
          priority
          quality={90}
          sizes="(min-width: 1440px) 740px, (min-width: 1024px) 50vw, (min-width: 768px) 680px, 92vw"
          className="block h-auto w-full select-none"
        />
        {/* A full and a partial soft-light layer: enough to read as light on
            metal, hue-true (soft-light keeps Sage and Copper on palette). */}
        <div className="fold-light">
          <div className="fold-sweep" />
          <div className="fold-pointer" />
        </div>
        <div className="fold-light" style={{ opacity: 0.4 }}>
          <div className="fold-sweep" />
          <div className="fold-pointer" />
        </div>
      </div>
    </div>
  );
}
