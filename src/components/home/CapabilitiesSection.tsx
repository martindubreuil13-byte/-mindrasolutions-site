import type { CSSProperties } from "react";
import { capabilities as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow } from "@/components/home/primitives";

const I = (n: number) => ({ "--i": n }) as CSSProperties;

function Marker({ filled, size = 14 }: { filled: boolean; size?: number }) {
  /* Filled or open: the shape says it, never colour alone. */
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={`block shrink-0 rounded-full border border-carbon ${filled ? "bg-carbon" : "bg-mineral"}`}
    />
  );
}

/* Section 04 · Capabilities. An editorial index, set in type alone. The
   headline holds the left of the page. Four entries run down the right on one
   spine, each with a large numeral, a title, a description and a small table
   that says plainly where it stands: Status, Type (software or human-led
   service) and what it is available through. A node on the spine is filled
   where the capability is available today and open where MINDRA is still
   developing it. Nothing here claims the products are integrated. */
export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      data-theme="light"
      className={`mindra bg-mineral text-carbon ${SECTION_Y}`}
    >
      <div className={`${CONTAINER} grid gap-14 lg:grid-cols-12 lg:gap-x-8`}>
        <Reveal group className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <Eyebrow tone="on-mineral" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
          <h2
            id="capabilities-title"
            className="rv m-0 mb-8 max-w-[13ch] font-display text-[clamp(2.25rem,1rem+3.3vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
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

        <Reveal group threshold={0.06} className="relative lg:col-span-8 lg:col-start-5">
          {/* The spine */}
          <span aria-hidden className="cap-line absolute bottom-0 left-[6.5px] top-0 w-px bg-carbon" />

          <ol className="m-0 list-none border-b border-carbon/25 p-0">
            {c.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                className="m-rule relative border-t border-carbon/25 py-10 pl-10 md:py-14 md:pl-12"
                threshold={0.25}
              >
                {/* Node on the spine, where the entry meets it */}
                <span aria-hidden className="cap-node absolute left-0 top-0 -translate-y-1/2">
                  <Marker filled={item.availability === "live"} />
                </span>

                <div className="grid gap-x-8 gap-y-5 md:grid-cols-[5.5rem_minmax(0,1fr)]">
                  <p
                    aria-hidden
                    className="m-0 font-display text-[clamp(2.5rem,1.8rem+2.4vw,4rem)] font-normal leading-none tracking-[-0.03em] text-sage-deep"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <h3 className="m-0 mb-3 font-display text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="m-0 max-w-[34rem] font-text text-[1.0625rem] leading-[1.6] text-carbon/90 md:text-[1.125rem]">
                      {item.text}
                    </p>

                    <dl className="m-0 mt-8 grid gap-y-3 border-t border-carbon/15 pt-5 sm:grid-cols-[auto_auto_1fr] sm:gap-x-10">
                      {[
                        { k: "Status", v: item.status, marker: true },
                        { k: "Type", v: item.kind },
                        { k: "Available through", v: item.via },
                      ].map((m) => (
                        <div key={m.k} className="flex items-baseline gap-4 sm:block">
                          <dt className="m-0 w-[7.5rem] shrink-0 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage-deep sm:mb-1.5 sm:w-auto">
                            {m.k}
                          </dt>
                          <dd className="m-0 flex items-center gap-2.5 font-text text-[0.9375rem] font-semibold leading-[1.35]">
                            {"marker" in m && m.marker && <Marker filled={item.availability === "live"} size={10} />}
                            {m.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
