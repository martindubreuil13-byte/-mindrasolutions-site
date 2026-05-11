import Link        from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { copy }     from "@/content/copy";

export default function FutureSection() {
  const c = copy.futureSection;

  return (
    <section
      id="roadmap"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{c.label}</SectionLabel>

      {/* Headline */}
      <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.028em] max-w-[800px] mb-5">
        {c.headline.plain}{" "}
        <span className="text-brand-gradient">{c.headline.grad}</span>
      </p>

      <p className="text-ink-mute text-[1.02rem] leading-[1.72] max-w-[580px] mb-16">
        {c.sub}
      </p>

      {/* Layer cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {c.layers.map((layer) => (
          <div
            key={layer.name}
            className="relative rounded-[20px] border border-line bg-gradient-to-b from-bg-card to-bg-card-2 p-10 overflow-hidden"
          >
            {/* Subtle top-border on hover — CSS only */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue via-cyan to-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Status badge */}
            <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase px-[0.85rem] py-[0.45rem] rounded-full border border-line text-ink-dim mb-8">
              {layer.status}
              {layer.eta && (
                <span className="text-ink-dim opacity-60">· {layer.eta}</span>
              )}
            </span>

            {/* Name + role */}
            <h3 className="text-[2rem] font-extrabold tracking-[-0.02em] text-ink leading-none mb-2">
              {layer.name}
            </h3>
            <p className="text-cyan text-[0.88rem] font-medium mb-5">{layer.role}</p>

            {/* Description */}
            <p className="text-ink-mute text-[0.92rem] leading-[1.68]">
              {layer.description}
            </p>
          </div>
        ))}
      </div>

      {/* Continuity line */}
      <p className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-ink-dim mt-12 text-center">
        More layers in development · The backbone keeps growing
      </p>
    </section>
  );
}
