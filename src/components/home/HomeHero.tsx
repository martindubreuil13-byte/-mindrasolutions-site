import type { CSSProperties } from "react";
import Link from "next/link";
import { hero } from "@/content/home";
import FoldMark from "@/components/brand/FoldMark";
import ThreePartField from "@/components/home/ThreePartField";

const BTN =
  "inline-flex min-h-[3.25rem] items-center justify-center rounded-[2px] px-7 font-text text-[0.9375rem] font-semibold leading-none tracking-[0.01em] no-underline transition-colors duration-[240ms]";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/* Phase 1 hero. Carbon ground; the dimensional Fold stands on the same
   baseline as the Sage Three-Part Field, so the object and the band read as
   one constructed scene. */
export default function HomeHero() {
  return (
    <section
      id="top"
      data-theme="dark"
      className="mindra relative z-[3] flex min-h-svh flex-col bg-carbon text-mineral"
    >
      <div className="relative flex flex-1 flex-col overflow-hidden pt-[72px]">
        {/* 1440px grid box. From lg up, copy and Fold get their own columns, so
            they cannot overlap at any width. The Fold's base meets the band. */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 md:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-[max(48px,6vw)] xl:grid-cols-[5fr_7fr]">

          {/* Copy. Its own width is the container for the headline size. */}
          <div className="flex flex-col justify-center pb-12 pt-12 [container-type:inline-size] md:pt-16 lg:self-center lg:py-[clamp(2rem,6vh,5rem)]">
            <p
              className="mindra-rise mb-6 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage"
              style={delay(0)}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="mindra-rise m-0 mb-8 font-display text-[clamp(2.5rem,min(1.6rem_+_3.6vw,8.5vh,15cqw),4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-mineral"
              style={delay(80)}
            >
              {hero.headline.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>

            <p
              className="mindra-rise m-0 mb-10 max-w-[31rem] font-text text-[1.0625rem] font-normal leading-[1.55] text-mineral/85 md:text-[1.1875rem]"
              style={delay(180)}
            >
              {hero.sub}
            </p>

            <div className="mindra-rise flex flex-wrap gap-3" style={delay(280)}>
              <a
                href={hero.ctaPrimary.href}
                className={`${BTN} bg-mineral text-carbon hover:bg-sage`}
              >
                {hero.ctaPrimary.label}
              </a>
              <Link
                href={hero.ctaSecondary.href}
                className={`${BTN} border border-mineral/60 text-mineral hover:border-mineral hover:bg-mineral/10`}
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* The Fold: fills its column and stands on the band's baseline.
              Below lg it sits under the copy, capped on tablets. */}
          <div
            aria-hidden
            className="mindra-emerge pointer-events-none mt-auto ml-auto w-full md:max-w-[680px] lg:max-w-none lg:self-end"
            style={delay(200)}
          >
            <FoldMark
              priority
              sizes="(min-width: 1440px) 740px, (min-width: 1024px) 50vw, (min-width: 768px) 680px, 92vw"
              className="block h-auto w-full select-none"
            />
          </div>
        </div>
      </div>

      <ThreePartField />
    </section>
  );
}
