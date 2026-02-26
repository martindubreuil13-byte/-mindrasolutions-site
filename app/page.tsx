"use client";

import Link from "next/link";
import AmbientBackground from "@/components/AmbientBackground";

const cards = [
  {
    key: "aura",
    title: "AURA",
    subtitle: "Contextual Intelligence",
    desc: "Your business second brain.",
    href: "/aura",
    accent: "from-teal-400/40 via-teal-400/10 to-transparent",
    border: "border-teal-400/30 hover:border-teal-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(45,212,191,0.35)]",
    badge: "Coming 2026",
  },
  {
    key: "axia",
    title: "AXIA",
    subtitle: "AI Agents",
    desc: "Your virtual workforce.",
    href: "/axia",
    accent: "from-emerald-400/40 via-emerald-400/10 to-transparent",
    border: "border-emerald-400/30 hover:border-emerald-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(52,211,153,0.35)]",
    badge: "Available Now",
  },
  {
    key: "nexa",
    title: "NEXA",
    subtitle: "Expert Marketplace",
    desc: "Your human problem-solvers.",
    href: "/nexa",
    accent: "from-cyan-400/40 via-cyan-400/10 to-transparent",
    border: "border-cyan-400/30 hover:border-cyan-300/70",
    glow: "hover:shadow-[0_0_90px_rgba(34,211,238,0.35)]",
    badge: "In Development",
  },
];

export default function Home() {
  return (
    <main className="relative bg-[#020617] text-white overflow-x-hidden">
      <AmbientBackground />

      {/* NAV */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8 md:pt-10">
        <div className="flex items-center gap-3">
          <img
            src="/mindra-logo.png"
            alt="MINDRA"
            className="h-8 w-auto opacity-90"
          />
          <span className="hidden sm:block text-xs tracking-widest text-white/60">
            AI Infrastructure
          </span>
        </div>
      </div>

      {/* HERO + PILLARS */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-7 md:px-12 pt-24 md:pt-32 pb-24">
        <div className="mx-auto max-w-6xl text-center">

          {/* HERO ANIMATIONS */}
          <style>{`
            @keyframes lightSweep {
              0%   { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            @keyframes premiumGlow {
              0% {
                text-shadow:
                  0 0 40px rgba(255,255,255,0.25),
                  0 0 80px rgba(255,255,255,0.15),
                  0 0 140px rgba(52,211,153,0.08);
              }
              50% {
                text-shadow:
                  0 0 60px rgba(255,255,255,0.4),
                  0 0 110px rgba(255,255,255,0.2),
                  0 0 180px rgba(34,211,238,0.12);
              }
              100% {
                text-shadow:
                  0 0 40px rgba(255,255,255,0.25),
                  0 0 80px rgba(255,255,255,0.15),
                  0 0 140px rgba(52,211,153,0.08);
              }
            }
          `}</style>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.22em]"
            style={{ animation: "premiumGlow 10s ease-in-out infinite" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(-78deg, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.95) 55%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "lightSweep 16s linear infinite",
              }}
            >
              MINDRA
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/85 font-light">
            AI-Driven. Human-Refined.
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-white/60 leading-relaxed">
            A living backbone for SMEs — where contextual intelligence,
            autonomous AI agents, and human expertise converge.
          </p>

          {/* CARDS */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className={[
                  "group relative overflow-hidden rounded-3xl border bg-white/[0.04] p-8",
                  "backdrop-blur-xl transition-all duration-300",
                  "hover:-translate-y-2 hover:bg-white/[0.06]",
                  c.border,
                  c.glow,
                ].join(" ")}
              >
                <div
                  className={[
                    "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
                    "bg-gradient-to-b",
                    c.accent,
                  ].join(" ")}
                />

                <div className="relative text-left">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                      {c.badge}
                    </span>
                    <span className="text-xs text-white/50 group-hover:text-white/80 transition">
                      →
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl md:text-3xl font-semibold tracking-widest">
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

        </div>
      </section>
    </main>
  );
}