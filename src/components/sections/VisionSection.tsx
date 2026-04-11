import SectionLabel from "@/components/SectionLabel";
import { copy } from "@/content/copy";

export default function VisionSection() {
  const d = copy.vision.declaration;

  return (
    <section
      id="vision"
      className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32"
    >
      <SectionLabel>{copy.vision.label}</SectionLabel>

      <p className="text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-[-0.025em] max-w-[1100px]">
        <span className="font-light text-[rgba(232,241,255,0.7)]">{d.light1}</span>
        <br />
        {d.preGrad}{" "}
        <span className="text-brand-gradient">{d.grad}</span>{" "}
        {d.postGrad}
        <br />
        <span className="font-light text-[rgba(232,241,255,0.7)]">{d.light2}</span>
      </p>
    </section>
  );
}
