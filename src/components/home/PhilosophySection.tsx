import type { CSSProperties } from "react";
import { philosophy as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow } from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;
/* Where each field appears from before the line joins them. Mirrored, so no
   field is favoured; all three land in exactly the same place. */
const FROM = ["-28px", "0px", "28px"];

/* Section 03 · Our philosophy. The Three-Part Field (Playbook p. 21) as the
   page's signature moment. Three equal fields in a fixed order, one colour.
   The sequence: the fields appear apart, one continuous 1 px line draws across
   and meets each at a node, the fields draw together onto it, and the
   statement resolves. Equal width, weight and treatment throughout: Synthetic
   is never enlarged. Below lg the fields stack and the line runs down the left
   edge instead. Reduced motion and no-JS show the finished composition. */
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

        {/* The field */}
        <Reveal group threshold={0.4} className="mt-20 md:mt-28">
          <div className="relative pl-8 lg:pl-0">
            {/* Narrow screens: the line runs down the left edge */}
            <span aria-hidden className="ph-line-y absolute inset-y-0 left-0 w-px bg-carbon lg:hidden" />

            <div className="relative">
              <ol className="m-0 grid list-none grid-cols-1 gap-y-12 p-0 lg:grid-cols-3 lg:gap-x-8">
                {c.fields.map((f, i) => (
                  <li
                    key={f.label}
                    className="ph-field group relative [--fx:24px] [container-type:inline-size] lg:min-h-[15rem] lg:pb-10 lg:[--fx:var(--from)]"
                    style={{ "--i": i, "--from": FROM[i] } as CSSProperties}
                  >
                    <h3 className="m-0 mb-5 font-display text-[clamp(1.875rem,10.5cqw,3rem)] font-normal leading-[1.05] tracking-[-0.02em]">
                      {f.label}
                    </h3>
                    <p className="m-0 mb-6 max-w-[22rem] font-text text-[1.0625rem] leading-[1.55] md:text-[1.125rem]">
                      {f.text}
                    </p>
                    <p className="m-0 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]">
                      {f.adds}
                    </p>

                    {/* Desktop: node where this field meets the line, and an equal tick that lengthens on hover */}
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 hidden h-5 w-px origin-bottom bg-carbon transition-[height] duration-[480ms] [transition-timing-function:var(--ease-fold)] group-hover:h-9 lg:block"
                    />
                    <span
                      aria-hidden
                      className="ph-node absolute bottom-0 left-0 hidden h-2 w-2 -translate-x-[3.5px] translate-y-[3.5px] bg-carbon lg:block"
                      style={I(i)}
                    />
                    {/* Narrow screens: node on the left line */}
                    <span
                      aria-hidden
                      className="ph-node absolute -left-8 top-[0.9rem] block h-2 w-2 -translate-x-[3.5px] bg-carbon lg:hidden"
                      style={I(i)}
                    />
                  </li>
                ))}
              </ol>

              {/* Desktop: one continuous 1 px line across all three fields */}
              <div aria-hidden className="ph-line pointer-events-none absolute inset-x-0 bottom-0 hidden h-px bg-carbon lg:block" />
            </div>

            <p
              className="ph-statement rv m-0 mt-10 max-w-[20ch] font-display text-[clamp(1.875rem,1.2rem+2.6vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.015em] text-balance lg:mt-14"
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
