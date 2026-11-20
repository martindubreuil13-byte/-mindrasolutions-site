import type { CSSProperties } from "react";
import { architecture as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import WeaveDrawing from "@/components/home/art/WeaveDrawing";
import { CONTAINER, SECTION_Y, Eyebrow, Arrow, BTN_ON_LIGHT_PRIMARY } from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;

/* Section 06 · Business Architecture. Three beats on one grid:
   1. the argument: headline left, the short narrative right;
   2. the picture: the three icons of Section 03 send their lines together; the
      lines weave into one, spread into a beam, and the beam carries four
      pillars (operates, decides, allocates, evolves) that stand on what
      already works. Read top to bottom, it says what the section says;
   3. the conclusion: the transformation statement, large, on the headline's
      left edge under the page's Copper rule; beside it what Business
      Architecture is and the one way to go further. */
export default function ArchitectureSection() {
  return (
    <section
      id="business-architecture"
      aria-labelledby="architecture-title"
      data-theme="light"
      className={`mindra bg-mineral text-carbon ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        {/* 1 · The argument */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <Reveal group className="lg:col-span-7">
            <Eyebrow tone="on-mineral" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
            <h2
              id="architecture-title"
              className="rv m-0 max-w-[17ch] font-display text-[clamp(2.125rem,1rem+3.7vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
              style={I(1)}
            >
              {c.headline}
            </h2>
          </Reveal>
          <Reveal group className="lg:col-span-5 lg:pb-2">
            {c.narrative.map((p, i) => (
              <p
                key={i}
                className="rv m-0 mb-5 max-w-[34rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90 last:mb-0 md:text-[1.1875rem]"
                style={I(i + 2)}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        {/* 2 · The picture */}
        <Reveal group threshold={0.3} className="mt-20 md:mt-28">
          <WeaveDrawing
            sources={c.plan.sources}
            outcomes={c.plan.outcomes}
            foundation={c.plan.foundation}
            alt={c.plan.alt}
          />
        </Reveal>

        {/* 3 · The conclusion, and the one next step */}
        <div className="mt-28 grid gap-14 md:mt-36 lg:grid-cols-12 lg:gap-x-8">
          <Reveal group threshold={0.35} className="lg:col-span-7">
            <span aria-hidden className="rv-line mb-8 block h-[3px] w-20 bg-copper md:mb-10" />
            <p className="m-0 font-display text-[clamp(2rem,1rem+3.5vw,4rem)] font-normal leading-[1.08] tracking-[-0.02em] text-balance">
              <span className="rv block text-carbon/75" style={I(1)}>{c.statement[0]}</span>
              <span className="rv mt-2 block md:mt-3" style={I(3)}>{c.statement[1]}</span>
            </p>
          </Reveal>

          <Reveal group className="lg:col-span-5 lg:pt-16">
            {c.explanation.map((p, i) => (
              <p
                key={i}
                className="rv m-0 mb-5 max-w-[34rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90 md:text-[1.125rem]"
                style={I(i + 1)}
              >
                {p}
              </p>
            ))}

            {/* The specialist practice. A service and a site, not a MINDRA product. */}
            <div className="rv mt-10 max-w-[34rem] border-t border-carbon pt-7" style={I(3)}>
              <p className="m-0 mb-3 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage-deep">
                {c.practice.label}
              </p>
              <p className="m-0 mb-7 font-text text-[1.0625rem] leading-[1.6] text-carbon/90">
                {c.practice.text}
              </p>
              <a
                href={c.practice.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_ON_LIGHT_PRIMARY}
              >
                {c.practice.cta.label}
                <Arrow />
                <span className="sr-only"> at The Modern Business Architect (opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
