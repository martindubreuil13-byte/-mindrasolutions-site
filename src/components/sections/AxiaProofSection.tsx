import SectionLabel from "@/components/SectionLabel";
import Button        from "@/components/Button";
import { copy }      from "@/content/copy";

function OutputPreview() {
  const ex = copy.alpaSection.example;

  return (
    <div className="rounded-[20px] border border-line bg-[rgba(6,16,31,0.85)] backdrop-blur-sm overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4),0_0_0_1px_rgba(79,125,247,0.1)]">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-line-soft">
        <span className="w-2.5 h-2.5 rounded-full bg-[rgba(239,68,68,0.45)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgba(234,179,8,0.45)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[rgba(34,197,94,0.45)]" />
        <span className="ml-3 font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim flex-1">
          ALPA · Lead Found
        </span>
        <span className="flex items-center gap-1.5 shrink-0">
          <span
            className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"
            style={{ boxShadow: "0 0 8px #00E5A0" }}
          />
          <span className="font-mono text-[0.58rem] tracking-[0.14em] uppercase text-teal">
            Live
          </span>
        </span>
      </div>

      {/* Body */}
      <div className="p-7">
        {/* Time badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] mb-6">
          <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-ink-dim">
            Result in
          </span>
          <span className="font-mono text-[0.75rem] font-semibold text-cyan">
            {ex.time}
          </span>
        </div>

        {/* Company */}
        <p className="text-[1.1rem] font-semibold text-ink mb-6 leading-snug">
          {ex.company}
        </p>

        {/* Data rows */}
        <div className="space-y-4">
          {[
            { key: "Website",  value: ex.website  },
            { key: "Email",    value: ex.email    },
            { key: "Phone",    value: ex.phone    },
            { key: "Location", value: ex.location },
          ].map(({ key, value }) => (
            <div key={key} className="flex items-start gap-4">
              <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-ink-dim w-[72px] pt-[2px] shrink-0">
                {key}
              </span>
              <span className="text-ink text-[0.88rem] leading-snug">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="px-7 py-3.5 border-t border-line-soft">
        <p className="font-mono text-[0.56rem] tracking-[0.14em] uppercase text-ink-dim">
          Illustrative example · Output format may vary
        </p>
      </div>
    </div>
  );
}

export default function AlpaSection() {
  const c = copy.alpaSection;

  return (
    <section id="alpa" className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 py-32">
      <SectionLabel>{c.label}</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: copy */}
        <div>
          {/* Eyebrow */}
          <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-cyan mb-5">
            {c.tag}
          </p>

          {/* Headline */}
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-6">
            {c.headline}
          </h2>

          {/* Emphasis line */}
          <p className="text-[1.1rem] md:text-[1.2rem] font-semibold text-ink leading-[1.4] mb-6 border-l-2 border-cyan pl-4">
            {c.sub}
          </p>

          {/* Body */}
          <p className="text-ink-mute text-[0.98rem] leading-[1.75] mb-9">
            {c.body}
          </p>

          {/* Delivers chips */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {c.delivers.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center font-mono text-[0.65rem] tracking-[0.16em] uppercase px-3.5 py-2 rounded-full border border-[rgba(0,212,255,0.22)] bg-[rgba(0,212,255,0.04)] text-cyan"
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button href={c.ctaHref} external variant="primary">
            {c.cta}
          </Button>
        </div>

        {/* Right: output preview */}
        <div className="relative">
          {/* Glow behind card */}
          <div
            aria-hidden
            className="absolute inset-0 -m-8 rounded-[40px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,212,255,0.06), transparent 70%)",
            }}
          />
          <OutputPreview />
        </div>

      </div>
    </section>
  );
}
