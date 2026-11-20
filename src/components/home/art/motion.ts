import type { CSSProperties } from "react";

/* Timing for the drawn visuals: delay and duration in ms, read by the .dr,
   .dn, .dy and .df classes in globals.css. */
export const d = (delay = 0, duration?: number): CSSProperties =>
  ({ "--dl": `${delay}ms`, ...(duration ? { "--dur": `${duration}ms` } : {}) }) as CSSProperties;
