import type { CSSProperties } from "react";
import { invitation as c } from "@/content/home";
import Reveal from "@/components/home/Reveal";
import { CONTAINER, BTN_ON_LIGHT_PRIMARY, BTN_ON_LIGHT_SECONDARY, Arrow } from "@/components/home/primitives";

/* Section 07 · The invitation. Sage Metal ground, Carbon type. One line, set
   large, with a pause before its second half. Beneath it three separate
   strokes, the Three-Part Field's three forms, close into one line, then two
   ways forward. A quiet echo of the philosophy, not a repeat of the hero. */
export default function InvitationSection() {
  return (
    <section
      id="contact"
      aria-labelledby="invitation-title"
      data-theme="light"
      className="mindra mindra-on-sage bg-sage py-28 text-carbon md:py-40 lg:py-48"
    >
      <div className={CONTAINER}>
        <Reveal group threshold={0.35}>
          <div className="[container-type:inline-size]">
            <h2
              id="invitation-title"
              className="m-0 font-display text-[min(11rem,15.2cqw)] font-normal leading-[1] tracking-[-0.03em]"
            >
              <span className="iv-line"><span style={{ "--d": "0ms" } as CSSProperties}>Making small{" "}</span></span>
              <span className="iv-line"><span style={{ "--d": "750ms" } as CSSProperties}>powerful.</span></span>
            </h2>
          </div>

          {/* Three strokes close into one */}
          <div aria-hidden className="mt-14 flex md:mt-20">
            {[-48, 0, 48].map((x) => (
              <span key={x} className="iv-seg block h-[2px] flex-1 bg-carbon" style={{ "--sx": `${x}px` } as CSSProperties} />
            ))}
          </div>

          <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-x-8">
            <p
              className="rv m-0 max-w-[26rem] font-text text-[1.125rem] leading-[1.6] md:text-[1.25rem] lg:col-span-5 lg:col-start-7"
              style={{ "--i": 4 } as CSSProperties}
            >
              {c.text}
            </p>
            <div
              className="rv flex flex-wrap gap-3 lg:col-span-5 lg:col-start-7"
              style={{ "--i": 6 } as CSSProperties}
            >
              <a href={c.primary.href} className={BTN_ON_LIGHT_PRIMARY}>
                {c.primary.label}
                <Arrow className="rotate-90" />
              </a>
              <a href={c.secondary.href} className={BTN_ON_LIGHT_SECONDARY}>
                {c.secondary.label}
                <Arrow />
                <span className="sr-only"> (opens your email app)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
