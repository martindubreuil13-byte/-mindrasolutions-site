import SectionLabel from "@/components/SectionLabel";
import PillarCard   from "@/components/PillarCard";
import { copy }     from "@/content/copy";
import { pillars }  from "@/content/pillars";

export default function EcosystemSection() {
  const h = copy.ecosystem.headline;

  return (
    <section
      id="ecosystem"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{copy.ecosystem.label}</SectionLabel>

      <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.028em] max-w-[1100px] mb-4">
        {h.plain}{" "}
        <span className="text-brand-gradient">{h.grad}</span>
        <br />
        <span className="font-light text-[rgba(232,241,255,0.65)]">{h.light}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.name} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
