import type { CSSProperties } from "react";
import { capabilities as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow } from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;

function Marker({ filled }: { filled: boolean }) {
  /* Filled or open: the shape says it, never colour alone. */
  return (
    <span
      aria-hidden
      className={`block h-[14px] w-[14px] rounded-full border border-carbon ${filled ? "bg-carbon" : "bg-mineral"}`}
    />
  );
}

/* Section 04 · Capabilities. An editorial index rather than a card grid. The
   headline holds the left of the page; four outcomes run down the right,
   joined by one spine with a node at each entry, filled where the capability
   is available today and open where MINDRA is still developing it. Each entry
   states plainly whether it is software or human-led service, and nothing
   here claims the products are integrated. */
export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      data-theme="light"
      className={`mindra bg-mineral text-carbon ${SECTION_Y}`}
    >
      <div className={`${CONTAINER} grid gap-14 lg:grid-cols-12 lg:gap-x-8`}>
        <Reveal group className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Eyebrow tone="on-mineral" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
          <h2
            id="capabilities-title"
            className="rv m-0 mb-8 max-w-[13ch] font-display text-[clamp(2.25rem,1.1rem+4.4vw,4.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
            style={I(1)}
          >
            {c.headline}
          </h2>
          <p
            className="rv m-0 mb-10 max-w-[26rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90 md:text-[1.1875rem]"
            style={I(2)}
          >
            {c.intro}
          </p>
          {/* Key to the nodes */}
          <ul
            className="rv m-0 flex list-none flex-wrap gap-x-8 gap-y-2 p-0 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]"
            style={I(3)}
          >
            {c.legend.map((l) => (
              <li key={l.label} className="flex items-center gap-3">
                <Marker filled={l.marker === "live"} />
                {l.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal group threshold={0.06} className="relative lg:col-span-6 lg:col-start-7">
          {/* The spine */}
          <span aria-hidden className="cap-line absolute bottom-0 left-[6.5px] top-0 w-px bg-carbon" />

          <ol className="m-0 list-none border-b border-carbon/25 p-0">
            {c.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                className="m-rule relative border-t border-carbon/25 py-9 pl-12 md:py-11"
                threshold={0.3}
              >
                {/* Node on the spine, where the entry meets it */}
                <span aria-hidden className="cap-node absolute left-0 top-0 -translate-y-1/2">
                  <Marker filled={item.availability === "live"} />
                </span>

                <p className="m-0 mb-3 font-text text-[0.75rem] font-semibold leading-none tracking-[0.12em] text-sage-deep" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="m-0 mb-3 font-display text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="m-0 mb-6 max-w-[30rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90">
                  {item.text}
                </p>
                <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]">
                  <span>{item.status}</span>
                  <span aria-hidden className="text-carbon/40">·</span>
                  <span className="text-sage-deep">{item.kind}</span>
                  <span aria-hidden className="text-carbon/40">·</span>
                  <span className="text-sage-deep">{item.via}</span>
                </p>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
