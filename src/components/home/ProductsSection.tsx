import type { CSSProperties } from "react";
import Image from "next/image";
import { products as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, SECTION_Y, Eyebrow, Arrow, External } from "@/components/home/primitives";
import ping from "@/assets/products/ping-live.jpg";
import alpa from "@/assets/products/alpa-live.jpg";

const SHOTS = { ping, alpa } as const;

function Status({ children, marker }: { children: React.ReactNode; marker: "live" | "development" | "concept" }) {
  /* Shape and word carry the status, not colour: filled, open, dashed. */
  const shape =
    marker === "live"        ? "bg-sage border-sage" :
    marker === "development" ? "bg-transparent border-mineral" :
                               "bg-transparent border-dashed border-mineral";
  return (
    <span className="inline-flex items-center gap-2 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-mineral">
      <span aria-hidden className={`inline-block h-2 w-2 rounded-full border ${shape}`} />
      {children}
    </span>
  );
}

/* Section 05 · Products. Carbon ground. The two live products lead, each in
   a large framed plate showing the product's own, real interface (captured from
   the live sites, nothing mocked), alternating sides down the page. Products still in
   development or concept are listed plainly below, with no launch CTA. */
export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      data-theme="dark"
      className={`mindra bg-carbon text-mineral ${SECTION_Y}`}
    >
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <Reveal group className="lg:col-span-8">
            <Eyebrow tone="on-carbon" className="rv mb-10 md:mb-14"><span>{c.label}</span></Eyebrow>
            <h2
              id="products-title"
              className="rv m-0 max-w-[14ch] font-display text-[clamp(2.25rem,1.1rem+4.4vw,5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-balance"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              {c.headline}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:pb-3" index={2}>
            <p className="m-0 max-w-[26rem] font-text text-[1.0625rem] leading-[1.6] text-mineral/85 md:text-[1.1875rem]">
              {c.intro}
            </p>
          </Reveal>
        </div>

        {/* Live: PING and ALPA. Large, alternating showcases. The screenshots are
            the products' own live pages, framed, never animated to suggest
            behaviour; the frame is drawn open and the image settles into it. */}
        <div className="mt-20 flex flex-col gap-28 md:mt-28 md:gap-40">
          {c.live.map((p, i) => {
            const flip = i % 2 === 1;
            const host = new URL(p.cta.href).host;
            return (
              <Reveal
                as="article"
                group
                key={p.id}
                threshold={0.2}
                className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-8"
              >
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden
                  className={`pr-frame group/frame relative block overflow-hidden rounded-[2px] border border-mineral/25 bg-[#1B201E] no-underline transition-colors duration-[480ms] hover:border-mineral/60 lg:col-span-8 ${flip ? "lg:order-2 lg:col-start-5" : ""}`}
                  style={{ "--cut-r": flip ? "0%" : "100%", "--cut-l": flip ? "100%" : "0%" } as CSSProperties}
                >
                  <span className="flex h-9 items-center gap-2 border-b border-mineral/15 px-4">
                    <span className="h-2 w-2 rounded-full border border-mineral/40" />
                    <span className="h-2 w-2 rounded-full border border-mineral/40" />
                    <span className="h-2 w-2 rounded-full border border-mineral/40" />
                    <span className="ml-3 font-text text-[0.75rem] leading-none tracking-[0.02em] text-mineral/60">{host}</span>
                  </span>
                  <Image
                    src={SHOTS[p.id as keyof typeof SHOTS]}
                    alt={p.alt}
                    sizes="(min-width: 1440px) 880px, (min-width: 1024px) 62vw, 92vw"
                    quality={85}
                    className="block h-auto w-full"
                  />
                  <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-[2px] bg-mineral px-4 py-2 font-text text-[0.8125rem] font-semibold text-carbon opacity-0 transition-opacity duration-[480ms] group-hover/frame:opacity-100">
                    {p.cta.label}
                    <External />
                  </span>
                </a>

                <div className={`lg:col-span-4 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}>
                  <p className="rv m-0 mb-6 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage" style={{ "--i": 2 } as CSSProperties}>
                    {String(i + 1).padStart(2, "0")} / {String(c.live.length).padStart(2, "0")}
                  </p>
                  <div className="rv flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3" style={{ "--i": 3 } as CSSProperties}>
                    <h3 className="m-0 font-display text-[clamp(2.75rem,1.8rem+3vw,4.5rem)] font-normal leading-none tracking-[-0.02em]">
                      {p.name}
                    </h3>
                    <Status marker="live">{p.status}</Status>
                  </div>
                  <p className="rv m-0 mt-6 max-w-[28rem] font-display text-[1.25rem] font-normal leading-[1.3] tracking-[-0.01em] md:text-[1.375rem]" style={{ "--i": 4 } as CSSProperties}>
                    {p.line}
                  </p>
                  <p className="rv m-0 mt-4 max-w-[28rem] font-text text-[1.0625rem] leading-[1.6] text-mineral/85" style={{ "--i": 5 } as CSSProperties}>
                    {p.text}
                  </p>
                  <p className="rv m-0 mt-3 font-text text-[0.8125rem] leading-[1.4] text-mineral/70" style={{ "--i": 5 } as CSSProperties}>{p.caption}</p>
                  <a
                    href={p.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv mt-8 inline-flex min-h-[2.75rem] items-center gap-3 border-b border-mineral/60 pb-1 font-text text-[0.9375rem] font-semibold tracking-[0.01em] text-mineral no-underline transition-colors duration-[240ms] hover:border-mineral hover:text-white"
                    style={{ "--i": 6 } as CSSProperties}
                  >
                    {p.cta.label}
                    <External />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Earlier in the journey: AURA, NEXA. No launch CTA. */}
        <Reveal group threshold={0.2} className="mt-28 md:mt-36">
          <p className="rv m-0 mb-6 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage">
            {c.earlier.label}
          </p>
          <ul className="m-0 list-none border-t border-mineral/40 p-0">
            {c.earlier.items.map((p, i) => (
              <li
                key={p.name}
                className="rv grid gap-x-8 gap-y-3 border-b border-mineral/20 py-8 md:py-10 lg:grid-cols-12"
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                <h3 className="m-0 font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-normal leading-none tracking-[-0.015em] lg:col-span-3">
                  {p.name}
                </h3>
                <div className="lg:col-span-3 lg:pt-1">
                  <Status marker={p.marker}>{p.status}</Status>
                </div>
                <div className="lg:col-span-6">
                  <p className="m-0 mb-2 font-display text-[1.125rem] font-normal leading-[1.3] md:text-[1.25rem]">{p.line}</p>
                  <p className="m-0 max-w-[32rem] font-text text-[1rem] leading-[1.6] text-mineral/80">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="rv m-0 mt-10" style={{ "--i": 3 } as React.CSSProperties}>
            <a
              href={c.bridge.href}
              className="inline-flex min-h-[2.75rem] items-center gap-3 font-text text-[0.9375rem] font-medium text-mineral/85 no-underline transition-colors duration-[240ms] hover:text-white"
            >
              {c.bridge.label}
              <Arrow className="rotate-90" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
