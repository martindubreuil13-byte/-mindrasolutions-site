import SectionLabel from "@/components/SectionLabel";
import { copy }     from "@/content/copy";

export default function SmeRealitySection() {
  const c = copy.smeReality;

  return (
    <section
      id="vision"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{c.label}</SectionLabel>

      {/* Headline */}
      <p className="text-[clamp(2rem,4.5vw,3.8rem)] font-bold leading-[1.12] tracking-[-0.028em] max-w-[1000px] mb-10">
        <span className="font-light text-[rgba(232,241,255,0.65)]">{c.headline.light}</span>
        <br />
        <span className="text-brand-gradient">{c.headline.grad}</span>
      </p>

      {/* Body */}
      <p className="text-ink-mute text-[1.05rem] leading-[1.75] max-w-[640px] mb-20">
        {c.body}
      </p>

      {/* Truth cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {c.truths.map((truth) => (
          <div
            key={truth.stat}
            className="rounded-[20px] border border-line bg-gradient-to-b from-bg-card to-bg-card-2 p-8 md:p-10"
          >
            <p className="text-[2.4rem] md:text-[2.8rem] font-extrabold tracking-[-0.03em] text-brand-gradient mb-4 leading-none">
              {truth.stat}
            </p>
            <p className="text-ink-mute text-[0.92rem] leading-[1.68]">
              {truth.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
