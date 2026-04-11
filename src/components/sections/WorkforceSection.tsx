import SectionLabel from "@/components/SectionLabel";
import PillarCard   from "@/components/PillarCard";
import { copy }    from "@/content/copy";
import { pillars } from "@/content/pillars";

export default function WorkforceSection() {
  const d = copy.workforce.declaration;

  return (
    <section
      id="workforce"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{copy.workforce.label}</SectionLabel>

      {/* Declaration */}
      <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-[-0.025em] max-w-[1100px] mb-4">
        {d.plain}{" "}
        <span className="text-brand-gradient">{d.grad}</span>
        <br />
        <span className="font-light text-[rgba(232,241,255,0.7)]">{d.light}</span>
      </p>

      {/* Pillar grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        {pillars.map((pillar) => (
          <PillarCard key={pillar.name} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
