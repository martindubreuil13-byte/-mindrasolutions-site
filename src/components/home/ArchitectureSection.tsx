import type { CSSProperties } from "react";
import { architecture as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import {
  CONTAINER, SECTION_Y, Eyebrow, Arrow,
  BTN_ON_LIGHT_PRIMARY, BTN_ON_LIGHT_SECONDARY,
} from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;
/* Where each level sits before the architecture resolves: scattered, then
   they all land in one aligned column. */
const OFFSET = ["-7%", "6%", "-4%", "9%"];

/* Section 06 · Business Architecture. A drawing, built in HTML so every label
   stays real text. Sequence, once, as it scrolls into view:
   1. three equal sources appear apart (human, organizational, synthetic);
   2. they descend and join on one line;
   3. four levels, scattered at first, align along that line;
   4. a frame is drawn around them: one operating architecture.
   No claim is drawn that says which intelligence belongs where; the point is
   that all three are designed in. Reduced motion and no-JS show the finished
   drawing. */
export default function ArchitectureSection() {
  return (
    <section
      id="business-architecture"
      aria-labelledby="architecture-title"
      data-theme="light"
      className={`mindra bg-mineral text-carbon ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-8">
          <Reveal group className="lg:col-span-6">
            <Eyebrow tone="on-mineral" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
            <h2
              id="architecture-title"
              className="rv m-0 mb-10 max-w-[15ch] font-display text-[clamp(2.25rem,1.1rem+3.9vw,4.25rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
              style={I(1)}
            >
              {c.headline}
            </h2>
            {c.paragraphs.map((p, i) => (
              <p
                key={i}
                className="rv m-0 mb-6 max-w-[33rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90 md:text-[1.1875rem]"
                style={I(i + 2)}
              >
                {p}
              </p>
            ))}
            <p
              className="rv m-0 mb-12 mt-10 max-w-[33rem] border-l border-carbon pl-5 font-text text-[1.0625rem] font-medium leading-[1.6] md:text-[1.1875rem]"
              style={I(4)}
            >
              {c.human}
            </p>

            {/* The specialist practice. A service and a site, not a MINDRA product. */}
            <div className="rv max-w-[33rem] border-t border-carbon pt-8" style={I(5)}>
              <p className="m-0 mb-3 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage-deep">
                {c.practice.label}
              </p>
              <p className="m-0 mb-8 font-text text-[1.0625rem] leading-[1.6] text-carbon/90">
                {c.practice.text}
              </p>
              <div className="flex flex-wrap gap-3">
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
                <a href={c.cta.href} className={BTN_ON_LIGHT_SECONDARY}>
                  {c.cta.label}
                </a>
              </div>
            </div>
          </Reveal>

          {/* The drawing */}
          <Reveal group threshold={0.3} className="lg:col-span-6 lg:pt-12">
            <figure className="m-0 mt-6" role="img" aria-label={c.plan.alt}>
              <div aria-hidden className="relative p-5 pt-8 md:p-7 md:pt-10">
                {/* 4 · The frame that resolves it all: drawn last */}
                <span className="ar-frame pointer-events-none absolute inset-0 border border-carbon" />
                <span className="ar-label absolute left-6 top-0 -translate-y-1/2 bg-mineral px-3 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]">
                  {c.plan.frame}
                </span>

                <div className="relative">
                  {/* Mobile: one spine from the first source to the last level */}
                  <span className="ar-spine absolute bottom-0 left-0 top-4 w-px bg-carbon sm:hidden" />

                  {/* 1 · Three equal sources. Stacked on phones, a row from sm up. */}
                  <ol className="m-0 grid list-none gap-3 p-0 pl-7 sm:grid-cols-3">
                    {c.plan.sources.map((s, i) => (
                      <li key={s.label} className="ar-src relative border border-carbon p-3.5" style={I(i)}>
                        <p className="m-0 mb-2 font-display text-[1rem] font-normal leading-[1.15] tracking-[-0.01em]">{s.label}</p>
                        <p className="m-0 font-text text-[0.8125rem] leading-[1.45] text-carbon/85">{s.text}</p>
                        {/* Mobile: node and connector to the spine */}
                        <span className="ar-node absolute left-[-28px] top-6 h-2 w-2 -translate-x-1/2 bg-carbon sm:hidden" style={I(i)} />
                        <span className="ar-tag absolute left-[-28px] top-[27px] block h-px w-7 bg-carbon sm:hidden" style={I(i)} />
                      </li>
                    ))}
                  </ol>

                  {/* 2 · They descend and join on one line (sm and up) */}
                  <div className="relative hidden h-14 pl-7 sm:block">
                    <div className="grid h-full grid-cols-3 gap-3">
                      {c.plan.sources.map((s) => (
                        <div key={s.label} className="relative">
                          <span className="ar-drop absolute inset-y-0 left-1/2 w-px bg-carbon" />
                        </div>
                      ))}
                    </div>
                    <span className="ar-bus absolute bottom-0 left-0 block h-px bg-carbon [right:calc((100%-52px)/6)]" />
                  </div>

                  {/* 3 · Four levels, scattered then aligned, along the spine */}
                  <div className="relative mt-3 sm:mt-0">
                    <span className="ar-spine absolute inset-y-0 left-0 hidden w-px bg-carbon sm:block" />
                    <div className="grid gap-3 sm:pt-3">
                      {c.plan.levels.map((level, i) => (
                        <div key={level} className="relative pl-7">
                          <span className="ar-node absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-carbon" style={I(i)} />
                          <span className="ar-tag absolute left-0 top-1/2 block h-px w-7 bg-carbon" style={I(i)} />
                          <div
                            className="ar-level flex h-[clamp(4.5rem,9vw,6rem)] items-end justify-between border border-carbon bg-mineral p-4"
                            style={{ "--i": i, "--ox": OFFSET[i] } as CSSProperties}
                          >
                            <span className="font-text text-[0.75rem] font-semibold tracking-[0.12em]">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-right font-display text-[1.0625rem] font-normal leading-[1.2] tracking-[-0.005em] md:text-[1.1875rem]">{level}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* The central idea, with the page's single Copper mark */}
        <Reveal group threshold={0.3} className="mt-32 md:mt-44">
          <div className="relative pl-6 md:pl-10 lg:max-w-[1240px]">
            <span aria-hidden className="rv-line-y absolute inset-y-1 left-0 w-[3px] bg-copper" />
            <p className="m-0 font-display text-[clamp(1.875rem,1rem+3.2vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.02em] text-balance">
              <span className="rv block">{c.statement[0]}</span>
              <span className="rv mt-3 block md:mt-4 lg:pl-[8%]" style={I(2)}>{c.statement[1]}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
