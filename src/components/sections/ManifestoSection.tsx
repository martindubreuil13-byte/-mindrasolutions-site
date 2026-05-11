import TagPill from "@/components/TagPill";
import Button  from "@/components/Button";
import { copy } from "@/content/copy";

export default function FinalCTASection() {
  const c = copy.finalCta;

  return (
    <section
      id="join"
      className="relative z-[3] text-center max-w-[1320px] mx-auto px-6 md:px-12 py-36"
    >
      {/* Soft radial glow behind this section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,125,247,0.07), transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="mb-8">
          <TagPill pulse>{c.tag}</TagPill>
        </div>

        <h2 className="text-[clamp(2.2rem,5vw,4.4rem)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-5">
          {c.headline}
        </h2>

        <p className="text-ink-mute text-[1.1rem] leading-[1.7] mb-12 max-w-[440px] mx-auto">
          {c.sub}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#ecosystem" variant="primary">
            {c.ctaPrimary}
          </Button>
          <Button href={c.ctaSecondaryHref} external variant="ghost">
            {c.ctaSecondaryLabel}
          </Button>
        </div>

        <p className="font-mono text-[0.62rem] tracking-[0.26em] uppercase text-ink-dim mt-14">
          {c.signoff}
        </p>
      </div>
    </section>
  );
}
