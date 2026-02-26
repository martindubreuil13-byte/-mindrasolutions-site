import Link from "next/link";

const cards = [
  {
    key: "aura",
    title: "AURA",
    subtitle: "Contextual Intelligence",
    desc: "Your business second brain.",
    href: "/aura",
    accent: "from-teal-400/45 via-teal-400/10 to-transparent",
    border: "border-teal-400/25 hover:border-teal-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(45,212,191,0.38)]",
    badge: "Coming 2026",
  },
  {
    key: "axia",
    title: "AXIA",
    subtitle: "AI Agents",
    desc: "Your virtual workforce.",
    href: "/axia",
    accent: "from-emerald-400/45 via-emerald-400/10 to-transparent",
    border: "border-emerald-400/25 hover:border-emerald-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(52,211,153,0.38)]",
    badge: "Available Now",
  },
  {
    key: "nexa",
    title: "NEXA",
    subtitle: "Expert Marketplace",
    desc: "Your human problem-solvers.",
    href: "/nexa",
    accent: "from-cyan-400/45 via-cyan-400/10 to-transparent",
    border: "border-cyan-400/25 hover:border-cyan-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(34,211,238,0.38)]",
    badge: "In Development",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
      {/* Local CSS for animations (kept in-file so you don't hunt for configs) */}
      <style>{`
        @keyframes aurora {
          0%   { transform: translate(-10%, -10%) rotate(0deg);   opacity: .55; }
          50%  { transform: translate(10%,  8%)  rotate(12deg);  opacity: .75; }
          100% { transform: translate(-10%, -10%) rotate(0deg);  opacity: .55; }
        }
        @keyframes drift {
          0%   { transform: translateX(-8%); opacity: .45; }
          50%  { transform: translateX(8%);  opacity: .70; }
          100% { transform: translateX(-8%); opacity: .45; }
        }
        @keyframes shine {
          0%   { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          20%  { opacity: .30; }
          60%  { opacity: .20; }
          100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
      `}</style>

      {/* Animated aurora background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute -top-56 left-1/2 h-[680px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(52,211,153,0.22), transparent 55%), radial-gradient(circle at 70% 40%, rgba(34,211,238,0.18), transparent 55%), radial-gradient(circle at 50% 70%, rgba(45,212,191,0.14), transparent 55%)",
            animation: "aurora 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-28 left-0 h-[420px] w-[760px] blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(34,211,238,0.12), transparent 60%)",
            animation: "drift 12s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#041028] to-[#020b1c]" />
      </div>

      {/* Top Nav */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-6">
        <div className="flex items-center gap-3">
          <img
            src="/mindra-logo.png"
            alt="MINDRA Logo"
            className="h-8 w-auto opacity-90"
          />
          <span className="hidden sm:block text-sm tracking-widest text-white/70">
            MINDRA
          </span>
        </div>

        <a
          href="#learn"
          className="text-xs sm:text-sm text-white/60 hover:text-white/85 transition"
        >
          Learn more →
        </a>
      </div>

      {/* Scroll snap container */}
      <div className="relative z-10 snap-y snap-mandatory">
        {/* HERO */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-[0.35em]">
            MINDRA
          </h1>

          <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-white/85 font-light">
            AI-Driven. Human-Refined.
          </p>

          <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            A living business backbone for SMEs — where contextual intelligence,
            autonomous AI agents, and human expertise converge.
          </p>

          <p className="mt-4 text-white/60 text-sm sm:text-base">
            AURA sees. AXIA acts. NEXA connects.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#pillars"
              className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm text-white/85 backdrop-blur-xl hover:bg-white/[0.10] transition"
            >
              Explore the pillars
            </a>

            <a
              href="#learn"
              className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:scale-[1.03] transition"
            >
              Learn more
            </a>
          </div>

          <div className="mt-14 text-white/45 text-sm animate-bounce">↓</div>
        </section>

        {/* PILLARS */}
        <section
          id="pillars"
          className="snap-start min-h-screen flex items-center justify-center px-6 md:px-12 py-16"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-light text-white/85">
                One ecosystem. Three forces.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/60">
                Built for builders who want speed, clarity, and leverage — without the corporate nonsense.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              {cards.map((c) => (
                <Link
                  key={c.key}
                  href={c.href}
                  className={[
                    "group relative overflow-hidden rounded-3xl border bg-white/[0.04] p-6 md:p-8",
                    "backdrop-blur-xl transition-all duration-300",
                    "hover:-translate-y-2 hover:bg-white/[0.06]",
                    c.border,
                    c.glow,
                  ].join(" ")}
                >
                  {/* shine sweep */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 50%, transparent 100%)",
                      width: "60%",
                      height: "100%",
                      filter: "blur(0.5px)",
                      animation: "shine 5.5s ease-in-out infinite",
                      opacity: 0,
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-b" />

                  {/* Gradient hover layer */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
                      "bg-gradient-to-b",
                      c.accent,
                    ].join(" ")}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                        {c.badge}
                      </span>
                      <span className="text-xs text-white/50 transition group-hover:text-white/80">
                        Explore →
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-widest">
                      {c.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-white/80">
                      {c.subtitle}
                    </p>

                    <p className="mt-4 text-xs md:text-sm leading-relaxed text-white/65">
                      {c.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-white/50">
              Firepower for the Bold.
            </p>
          </div>
        </section>

        {/* LEARN MORE / CTA */}
        <section
          id="learn"
          className="snap-start min-h-[70vh] flex items-center justify-center px-6 md:px-12 py-20"
        >
          <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-12 text-center">
            <h4 className="text-2xl md:text-3xl font-light text-white/90">
              MINDRA becomes the backbone you can’t live without.
            </h4>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              Start with one pillar. Add the next. Let the system evolve with your business.
              We’ll keep it simple, fast, and human where it counts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/axia"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-black hover:scale-[1.03] transition"
              >
                Start with AXIA
              </a>
              <a
                href="/aura"
                className="rounded-full border border-white/10 bg-white/[0.06] px-7 py-3 text-sm text-white/85 hover:bg-white/[0.10] transition"
              >
                See AURA roadmap
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile safety: bottom padding so nothing feels cramped */}
      <div className="h-10" />
    </main>
  );
}