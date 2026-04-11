import TagPill from "@/components/TagPill";
import Button  from "@/components/Button";
import { copy } from "@/content/copy";

export default function ManifestoSection() {
  const m = copy.manifesto;

  return (
    <section
      id="join"
      className="relative z-[3] text-center max-w-[1320px] mx-auto px-6 md:px-12 py-36"
    >
      <div className="mb-10">
        <TagPill pulse>{m.tag}</TagPill>
      </div>

      <blockquote className="text-[clamp(1.7rem,3.4vw,2.8rem)] font-bold leading-[1.3] max-w-[920px] mx-auto mb-12 tracking-[-0.02em] m-0">
        <span className="font-light text-[rgba(232,241,255,0.7)]">{m.light}</span>{" "}
        <span className="text-brand-gradient font-extrabold">{m.grad}</span>
      </blockquote>

      <Button href="/join" variant="primary">
        {m.cta}
      </Button>

      <p className="font-mono text-[0.68rem] tracking-[0.25em] uppercase text-ink-dim mt-14">
        {m.signoff}
      </p>
    </section>
  );
}
