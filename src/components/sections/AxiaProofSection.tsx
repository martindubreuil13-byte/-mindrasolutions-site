import LandingAgentCard from "@/components/LandingAgentCard";
import Button           from "@/components/Button";
import { copy }        from "@/content/copy";

export default function AxiaProofSection() {
  const c = copy.axiaProof;

  return (
    <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 pb-32">
      {/* Gradient-bordered proof card */}
      <div
        id="axia"
        className="relative overflow-hidden rounded-[24px] p-[2.5rem] md:p-[3.5rem] border border-line bg-gradient-to-br from-[rgba(79,125,247,0.05)] via-[rgba(0,212,255,0.03)] to-[rgba(167,139,250,0.04)]"
      >
        {/* Background radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.1), transparent 70%)" }}
        />

        {/* Tag */}
        <p className="relative font-mono text-[0.7rem] tracking-[0.22em] uppercase text-cyan mb-5">
          {c.tag}
        </p>

        {/* Headline */}
        <h2 className="relative text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.02em] mb-4">
          {c.headline}{" "}
          <span className="text-brand-gradient">{c.headlineGrad}</span>
        </h2>

        {/* Body */}
        <p className="relative text-ink-mute max-w-[620px] mb-10 text-[1.02rem] leading-[1.65]">
          {c.body}
        </p>

        {/* Agent cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.agents.map((agent) => (
            <LandingAgentCard key={agent.name} {...agent} />
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-10">
          <Button href="/axia" variant="primary">
            {c.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
