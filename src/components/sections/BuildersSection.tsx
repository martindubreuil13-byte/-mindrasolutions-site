import SectionLabel from "@/components/SectionLabel";
import { copy }     from "@/content/copy";

export default function BuildersSection() {
  const c = copy.builders;

  return (
    <section
      id="builders"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{c.label}</SectionLabel>

      {/* Headline */}
      <p className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1.1] tracking-[-0.03em] max-w-[920px] mb-8">
        <span className="font-light text-[rgba(232,241,255,0.65)]">{c.headline.light}</span>
        <br />
        <span className="text-brand-gradient">{c.headline.grad}</span>
        <br />
        <span className="text-ink">{c.headline.post}</span>
      </p>

      {/* Body */}
      <p className="text-ink-mute text-[1.02rem] leading-[1.72] max-w-[540px] mb-14">
        {c.body}
      </p>

      {/* Builder identities */}
      <div className="flex flex-wrap gap-3">
        {c.who.map((type) => (
          <span
            key={type}
            className="px-5 py-2.5 rounded-full border border-line bg-[rgba(15,27,45,0.5)] text-ink text-[0.88rem] font-medium tracking-[0.01em]"
          >
            {type}
          </span>
        ))}
      </div>
    </section>
  );
}
