import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import HomeNav      from "@/components/home/HomeNav";
import HomeFooter   from "@/components/home/HomeFooter";
import Reveal       from "@/components/home/Reveal";
import { BTN, CONTAINER, Eyebrow } from "@/components/home/primitives";
import { manifesto, type Block, type Chapter } from "@/content/manifesto";

export const metadata: Metadata = {
  title: "The MINDRA Manifesto",
  description: "Size used to decide what was possible. Not anymore. The MINDRA manifesto: a declaration for independent businesses.",
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "The MINDRA Manifesto",
    description: "Size used to decide what was possible. Not anymore.",
    url: "https://mindrasolutions.com/manifesto",
    type: "article",
  },
};

const GROUND = {
  carbon:  { cls: "bg-carbon text-mineral",                   theme: "dark",  eyebrow: "on-carbon"  },
  mineral: { cls: "bg-mineral text-carbon",                   theme: "light", eyebrow: "on-mineral" },
  sage:    { cls: "mindra-on-sage bg-sage text-carbon",       theme: "light", eyebrow: "on-sage"    },
} as const;

/* The reading column is offset to the right of the headings, so the large
   statements and the headings share one left edge and the prose steps in. */
const PROSE = "lg:col-span-7 lg:col-start-5";
const WIDE  = "lg:col-span-11";

const BODY = "font-text text-[1.1875rem] font-normal leading-[1.65] md:text-[1.3125rem]";
const STATEMENT = "font-display font-medium leading-[1.1] tracking-[-0.02em] text-balance";

/* Consecutive lines of prose are revealed in small groups, so the text arrives
   as you read it, never all at once and never line by line. */
function chunk(blocks: Block[]) {
  const out: (Block | Block[])[] = [];
  const run: Block[] = [];
  const flush = () => { while (run.length) out.push(run.splice(0, 3)); };
  for (const b of blocks) {
    if (b.k === "p") run.push(b);
    else { flush(); out.push(b); }
  }
  flush();
  return out;
}

function Blocks({ blocks, quiet }: { blocks: Block[]; quiet?: string }) {
  const items = chunk(blocks);
  return (
    <>
      {items.map((it, i) => {
        if (Array.isArray(it)) {
          return (
            <Reveal key={i} className={`${PROSE} grid gap-5 ${BODY}`}>
              {it.map((b, j) => <p key={j} className="m-0 max-w-[38rem]">{b.t}</p>)}
            </Reveal>
          );
        }
        const prev = items[i - 1];
        const next = items[i + 1];
        const afterStatement = prev && !Array.isArray(prev) && prev.k === "s";
        const beforeStatement = next && !Array.isArray(next) && next.k === "s";
        if (it.k === "em") {
          return (
            <Reveal key={i} className={`${WIDE} mt-8 font-display text-[1.125rem] italic leading-[1.4] md:mt-10 md:text-[1.375rem] ${quiet ?? ""}`}>
              <p className="m-0">{it.t}</p>
            </Reveal>
          );
        }
        const big = it.t === "MINDRA." || it.t === "Making small powerful.";
        return (
          <Reveal key={i} className={`${WIDE} ${afterStatement ? "" : "mt-6 md:mt-10"} ${beforeStatement ? "" : "mb-3 md:mb-6"}`}>
            <p className={`m-0 max-w-[26ch] ${STATEMENT} ${big ? "text-[clamp(2.5rem,1.2rem+5vw,6rem)]" : "text-[clamp(1.75rem,1.1rem+2.8vw,3.25rem)]"}`}>
              {it.t}
            </p>
          </Reveal>
        );
      })}
    </>
  );
}

function ChapterSection({ c, children, first }: { c: Chapter; children?: ReactNode; first?: boolean }) {
  const g = GROUND[c.ground];
  return (
    <section
      id={c.id}
      aria-labelledby={c.heading ? `${c.id}-title` : first ? "manifesto-title" : undefined}
      data-theme={g.theme}
      className={`mindra ${g.cls} ${first ? "pt-[calc(var(--nav-top-h)+4rem)] md:pt-[calc(var(--nav-top-h)+6rem)]" : "pt-24 md:pt-32 lg:pt-40"} pb-24 md:pb-32 lg:pb-40`}
    >
      <div className={CONTAINER}>
        {first && (
          <header className="mb-20 md:mb-28">
            <Eyebrow tone={g.eyebrow} className="rv mb-10 md:mb-14"><span>{manifesto.label}</span></Eyebrow>
            <h1
              id="manifesto-title"
              className="m-0 max-w-[16ch] font-display text-[clamp(2.5rem,0.9rem+6.2vw,7rem)] font-normal leading-[1.02] tracking-[-0.03em] text-balance"
            >
              {manifesto.title}
            </h1>
          </header>
        )}
        {c.heading && (
          <Reveal className="mb-12 md:mb-16">
            <h2
              id={`${c.id}-title`}
              className="m-0 max-w-[16ch] font-display text-[clamp(2.25rem,1rem+4.4vw,5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-balance"
            >
              {c.heading}
            </h2>
          </Reveal>
        )}
        <div className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-8">
          <Blocks blocks={c.blocks} quiet={c.ground === "carbon" ? "text-sage" : "text-sage-deep"} />
        </div>
        {children}
      </div>
    </section>
  );
}

/* A signature, not an endorsement: small, quiet, after the last word. */
function Signature() {
  const s = manifesto.signature;
  return (
    <Reveal className={`mt-24 md:mt-32 grid lg:grid-cols-12 lg:gap-x-8`}>
      <div className="lg:col-span-7 lg:col-start-5">
        <span aria-hidden className="mb-8 block h-px w-12 bg-sage" />
        <p className="m-0 mb-3 font-display text-[1.0625rem] italic leading-[1.4] text-mineral/85 md:text-[1.1875rem]">{s.lead}</p>
        <p className="m-0 font-display text-[1.5rem] font-medium leading-[1.2] tracking-[-0.01em] md:text-[1.875rem]">{s.name}</p>
        <p className="m-0 mt-2 font-text text-[0.875rem] font-medium leading-[1.4] tracking-[0.04em] text-sage">{s.title}</p>
      </div>
    </Reveal>
  );
}

export default function ManifestoPage() {
  const closing = manifesto.chapters[manifesto.chapters.length - 1];
  const cta = manifesto.cta;
  /* The one prominent action: the homepage button, a size larger. */
  const BIG = `${BTN.replace("min-h-[3.25rem]", "min-h-[3.75rem]").replace("px-7", "px-10").replace("text-[0.9375rem]", "text-[1.0625rem]")} bg-carbon text-mineral hover:bg-[#3B443F]`;

  return (
    <>
      <div className="mindra-home">
        <noscript>
          <style>{`.mindra-nav{position:absolute!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="mindra fixed left-4 top-4 z-[200] -translate-y-24 rounded-[2px] bg-mineral px-5 py-3 font-text text-[0.9375rem] font-semibold text-carbon focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          Skip to content
        </a>
        <HomeNav base="/" current="manifesto" />

        <main id="main">
          {manifesto.chapters.map((c, i) =>
            c === closing ? (
              <ChapterSection key={c.id} c={c}>
                <Signature />
              </ChapterSection>
            ) : (
              <ChapterSection key={c.id} c={c} first={i === 0} />
            ),
          )}

          {/* Discover MINDRA */}
          <section
            id="discover"
            aria-labelledby="discover-title"
            data-theme="light"
            className="mindra mindra-on-sage bg-sage py-24 text-carbon md:py-32 lg:py-40"
          >
            <div className={CONTAINER}>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
                <Reveal className="lg:col-span-7">
                  <h2
                    id="discover-title"
                    className="m-0 max-w-[14ch] font-display text-[clamp(2.25rem,1rem+4.4vw,5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-balance"
                  >
                    {cta.headline}
                  </h2>
                </Reveal>
                <Reveal className="lg:col-span-5 lg:pb-2" index={1}>
                  <p className="m-0 mb-4 max-w-[28rem] font-text text-[1.125rem] leading-[1.6] md:text-[1.25rem]">{cta.text}</p>
                  <p className="m-0 mb-10 max-w-[28rem] font-text text-[1.0625rem] leading-[1.6] md:text-[1.125rem]">{cta.text2}</p>
                  <Link href={cta.href} className={BIG}>
                    {cta.label}
                    <svg aria-hidden viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
                    </svg>
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <HomeFooter base="/" />
      </div>
    </>
  );
}
