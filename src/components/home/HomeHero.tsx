import type { CSSProperties } from "react";
import { hero } from "@/content/home";
import HeroFold from "@/components/home/HeroFold";

import { BTN_ON_CARBON_PRIMARY, BTN_ON_CARBON_SECONDARY } from "@/components/home/primitives";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/* Section 01 · Hero. Carbon ground; the production dimensional Fold stands on
   the section's lower edge and its base crosses the seam by a few percent, so
   the object belongs to both grounds. The sequence runs about 4.6 s, but the
   headline, copy and both CTAs are in place and usable within 1.8 s; the Fold's
   rise and its one pass of light are scenery behind them. The hero stops 44 px
   short of the viewport so the next ground is already visible and the Fold
   stands across the seam. Copy and Fold have separate columns from lg up and
   cannot overlap. */
export default function HomeHero() {
  return (
    <section
      id="top"
      data-theme="dark"
      className="mindra relative z-[3] flex min-h-[calc(100svh-2.75rem)] flex-col bg-carbon text-mineral"
    >
      <div className="relative flex flex-1 flex-col pt-[var(--nav-top-h)] [overflow-x:clip]">
        {/* Ambient light behind the object: sage, low, no gradient colour */}
        <div
          aria-hidden
          className="fold-glow pointer-events-none absolute bottom-0 right-0 h-[85%] w-full lg:w-[72%] [background:radial-gradient(60%_58%_at_58%_70%,rgba(145,167,154,0.14),transparent_72%)]"
        />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 md:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-[max(48px,6vw)] xl:grid-cols-[5fr_7fr]">

          {/* Copy. Its own width is the container for the headline size. */}
          <div className="flex flex-col justify-center pb-7 pt-4 [container-type:inline-size] md:pb-12 md:pt-10 lg:self-center lg:py-[clamp(2rem,6vh,5rem)]">
            <p
              className="mindra-rise mb-6 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage"
              style={delay(0)}
            >
              {hero.eyebrow}
            </p>

            <h1 className="m-0 mb-6 font-display md:mb-8 text-[clamp(2.5rem,min(1.6rem_+_3.6vw,8.5vh,15cqw),4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-mineral">
              {hero.headline.map((line, i) => (
                <span key={line} className="h-line">
                  <span style={delay(140 + i * 150)}>{line}{" "}</span>
                </span>
              ))}
            </h1>

            <p
              className="mindra-rise m-0 mb-8 max-w-[31rem] md:mb-10 font-text text-[1.0625rem] font-normal leading-[1.55] text-mineral/85 md:text-[1.1875rem]"
              style={delay(750)}
            >
              {hero.sub}
            </p>

            <div className="mindra-rise flex flex-wrap gap-3" style={delay(950)}>
              <a href={hero.ctaPrimary.href} className={BTN_ON_CARBON_PRIMARY}>
                {hero.ctaPrimary.label}
              </a>
              <a href={hero.ctaSecondary.href} className={BTN_ON_CARBON_SECONDARY}>
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* The Fold: fills its column and stands on the seam. Below lg it sits
              under the copy, capped on tablets. */}
          <div className="relative mt-auto ml-auto -mb-[5%] w-full md:max-w-[680px] lg:-mb-[4%] lg:max-w-none lg:self-end">
            <HeroFold delay={400} />
          </div>
        </div>
      </div>

      {/* The hero is an elevated plane: a soft shadow falls on what follows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-full h-10 bg-gradient-to-b from-carbon/20 to-transparent"
      />
    </section>
  );
}
