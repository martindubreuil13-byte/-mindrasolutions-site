import type { CSSProperties } from "react";
import { philosophy as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow } from "@/components/home/primitives";
import {
  HumanSymbol, OrganizationalSymbol, SyntheticSymbol, Convergence, UnifiedMark,
} from "@/components/home/art/IntelligenceSymbols";

const I = (n: number) => ({ "--i": n }) as CSSProperties;
/* Fixed order, equal size, equal weight. Never reorder, never enlarge one. */
const SYMBOLS = [HumanSymbol, OrganizationalSymbol, SyntheticSymbol];

/* Section 03 · Our philosophy. The idea is told in drawings first: three
   custom symbols of equal size, one for each form of intelligence (organic,
   layered, geometric), each with its short explanation beneath. Thin lines
   leave the three and run into one, which resolves into a single mark that
   holds all three, and then the statement. Below lg the symbols stack and one
   line runs down the left edge instead. Reduced motion and no-JS show every
   drawing finished. */
export default function PhilosophySection() {
  return (
    <section
      id="approach"
      aria-labelledby="philosophy-title"
      data-theme="light"
      className={`mindra mindra-on-sage bg-sage text-carbon ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <Reveal group className="lg:col-span-8">
            <Eyebrow tone="on-sage" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
            <h2
              id="philosophy-title"
              className="rv m-0 max-w-[16ch] font-display text-[clamp(2.25rem,1.1rem+4.4vw,5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
              style={I(1)}
            >
              {c.headline}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:pb-3" index={2}>
            <p className="m-0 max-w-[26rem] font-text text-[1.0625rem] leading-[1.6] md:text-[1.1875rem]">
              {c.intro}
            </p>
          </Reveal>
        </div>

        {/* The three forms */}
        <Reveal group threshold={0.3} className="mt-20 md:mt-28">
          <div className="relative pl-8 lg:pl-0">
            {/* Narrow screens: the line runs down the left edge */}
            <span aria-hidden className="ph-line-y absolute inset-y-0 left-0 w-px bg-carbon lg:hidden" />

            <ol className="m-0 grid list-none grid-cols-1 gap-y-16 p-0 lg:grid-cols-3 lg:gap-y-0">
              {c.fields.map((f, i) => {
                const Symbol = SYMBOLS[i];
                return (
                  <li key={f.label} className="sym group relative flex flex-col lg:items-center lg:px-8 lg:text-center">
                    <Symbol className="mb-8 block h-auto w-[min(72%,15rem)] text-carbon lg:mb-10 lg:w-[min(100%,19rem)]" />
                    <h3 className="rv m-0 mb-4 font-display text-[clamp(1.875rem,1.4rem+1.6vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em]" style={I(i + 1)}>
                      {f.label}
                    </h3>
                    <p className="rv m-0 mb-5 max-w-[22rem] font-text text-[1.0625rem] leading-[1.55] md:text-[1.125rem]" style={I(i + 2)}>
                      {f.text}
                    </p>
                    <p className="rv m-0 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]" style={I(i + 3)}>
                      {f.adds}
                    </p>
                    {/* Narrow screens: node where this form meets the line */}
                    <span
                      aria-hidden
                      className="ph-node absolute -left-8 top-10 block h-2 w-2 -translate-x-[3.5px] bg-carbon lg:hidden"
                      style={I(i)}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* They connect, converge, and become one */}
        <Reveal group threshold={0.45} className="mt-10 lg:mt-6">
          <div aria-hidden className="hidden lg:block">
            <Convergence className="block h-auto w-full text-carbon" />
          </div>
          <div className="flex flex-col items-center text-center">
            <UnifiedMark delay={1500} className="-mt-px mb-8 block h-auto w-48 text-carbon lg:w-60" />
            <p
              className="ph-statement rv m-0 max-w-[22ch] font-display text-[clamp(1.875rem,1.2rem+2.6vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.015em] text-balance"
              style={I(0)}
            >
              {c.statement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
