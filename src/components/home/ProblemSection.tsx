import type { CSSProperties } from "react";
import { problem as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow } from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;

/* Section 02 · The problem. One idea: capability followed size. A ledger of
   what size historically bought; beneath each item two lines. The large
   organization's is solid. The independent business's is dashed, and stays
   dashed: the animation only draws each line on, solid first, dashed after a
   pause, so the contrast is the point and is never erased. The lines are
   conceptual, not data: both run the full width and carry no measurement.
   Reduced motion and no-JS show both, finished. */
export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      data-theme="light"
      className={`mindra relative bg-mineral text-carbon ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <Reveal group>
          <Eyebrow tone="on-mineral" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
          <h2
            id="problem-title"
            className="rv m-0 max-w-[13ch] font-display text-[clamp(2.75rem,0.9rem+6.6vw,6.75rem)] font-normal leading-[1.02] tracking-[-0.025em] text-balance"
            style={I(1)}
          >
            {c.headline}
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 md:mt-28 lg:grid-cols-12 lg:gap-x-8">
          {/* The ledger */}
          <Reveal group threshold={0.3} className="lg:col-span-7">
            <p className="rv m-0 mb-8 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage-deep">
              {c.ledgerLabel}
            </p>

            {/* Key to the two lines */}
            <ul className="rv m-0 mb-4 flex list-none flex-wrap gap-x-8 gap-y-2 p-0 font-text text-[0.8125rem] font-semibold leading-[1.3] tracking-[0.04em]" style={I(1)}>
              <li className="flex items-center gap-3">
                <span aria-hidden className="block h-[2px] w-8 bg-carbon" />
                {c.legend.org}
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden className="block h-[2px] w-8 [background:repeating-linear-gradient(90deg,var(--mindra-carbon)_0_9px,transparent_9px_16px)]" />
                {c.legend.ind}
              </li>
            </ul>

            <ol className="m-0 list-none border-t border-carbon p-0">
              {c.ledger.map((item, i) => (
                <li key={item} className="border-b border-carbon/25 py-6 md:py-8">
                  <p
                    className="rv m-0 mb-5 font-display text-[clamp(1.5rem,1rem+1.8vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.015em]"
                    style={I(i)}
                  >
                    {item}
                  </p>
                  <div aria-hidden className="grid gap-3">
                    <span className="pl-org block h-[2px] w-full bg-carbon" style={I(i)} />
                    <span className="pl-ind block h-[2px] w-full [background:repeating-linear-gradient(90deg,var(--mindra-carbon)_0_9px,transparent_9px_16px)]" style={I(i)} />
                  </div>
                </li>
              ))}
            </ol>

            <p
              className="pl-turn rv m-0 mt-12 font-display text-[clamp(1.875rem,1.2rem+2.6vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.02em]"
              style={I(0)}
            >
              {c.turn}
            </p>
          </Reveal>

          {/* The argument, offset right and down */}
          <Reveal group className="lg:col-span-4 lg:col-start-9 lg:pt-28">
            <p className="rv m-0 mb-10 font-text text-[1.125rem] font-normal leading-[1.6] text-carbon/90 md:text-[1.25rem]">
              {c.lead}
            </p>
            <p
              className="rv m-0 border-l border-carbon pl-5 font-text text-[1.125rem] font-medium leading-[1.6] md:text-[1.25rem]"
              style={I(2)}
            >
              {c.close}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
