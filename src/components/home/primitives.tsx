import type { ReactNode } from "react";

/* Shared layout primitives for the homepage. Playbook p. 22:
   max 1440 px, outer margin max(48px, 6vw) desktop · 32 px tablet · 20 px mobile. */
export const CONTAINER =
  "mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-[max(48px,6vw)]";

/* Section rhythm: generous, stepping on the spacing scale. */
export const SECTION_Y = "py-24 md:py-32 lg:py-40";

/* Technical label: Manrope 600 caps, 12 px, 0.12 em. `tone` picks a text-safe
   colour for the ground it sits on. */
const LABEL_TONE = {
  "on-carbon":  "text-sage",
  "on-mineral": "text-sage-deep",
  "on-sage":    "text-carbon",
} as const;

export function Eyebrow({
  children, tone, className = "",
}: { children: ReactNode; tone: keyof typeof LABEL_TONE; className?: string }) {
  return (
    <p
      className={`m-0 flex items-center gap-4 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] ${LABEL_TONE[tone]} ${className}`}
    >
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

/* Button: 2 px radius, Manrope 600 15 px, 52 px tall (touch target ≥ 44). */
export const BTN =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[2px] px-7 font-text text-[0.9375rem] font-semibold leading-none tracking-[0.01em] no-underline transition-colors duration-[240ms]";

export const BTN_ON_CARBON_PRIMARY   = `${BTN} bg-mineral text-carbon hover:bg-sage`;
export const BTN_ON_CARBON_SECONDARY = `${BTN} border border-mineral/60 text-mineral hover:border-mineral hover:bg-mineral/10`;
export const BTN_ON_LIGHT_PRIMARY    = `${BTN} bg-carbon text-mineral hover:bg-[#3B443F]`;
export const BTN_ON_LIGHT_SECONDARY  = `${BTN} border border-carbon text-carbon hover:bg-carbon hover:text-mineral`;

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
    </svg>
  );
}
export function External({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M5 11l6-6M6 5h5v5" strokeLinecap="square" />
    </svg>
  );
}
