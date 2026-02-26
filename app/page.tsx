"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-[#020617] text-white overflow-x-hidden">

      {/* ---------- ANIMATION KEYFRAMES ---------- */}
      <style>{`
        @keyframes auroraMove {
          0% { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
          50% { transform: translate(10%, 8%) rotate(12deg); opacity: .85; }
          100% { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
        }

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

      {/* ---------- PARALLAX BACKGROUND ---------- */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      >
        <div
          className="absolute -top-56 left-1/2 h-[720px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(52,211,153,0.20), transparent 60%), radial-gradient(circle at 70% 40%, rgba(34,211,238,0.18), transparent 60%)",
            animation: "auroraMove 16s ease-in-out infinite",
          }}
        />
      </div>

      {/* ---------- MOUSE GLOW ---------- */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(52,211,153,0.08), transparent 40%)`,
        }}
      />

      {/* ---------- VIGNETTE ---------- */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.7)_100%)]" />

      {/* ---------- GRAIN ---------- */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ---------- NAV ---------- */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-6">
        <div className="flex items-center gap-3">
          <img src="/mindra-logo.png" alt="MINDRA" className="h-8 w-auto opacity-90" />
          <span className="hidden sm:block text-xs tracking-widest text-white/60">
            AI Infrastructure
          </span>
        </div>
      </div>

      {/* ---------- HERO + PILLARS IN 16:9 ---------- */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 text-center">

        <div className="max-w-6xl mx-auto">

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.22em] text-white"
            style={{ animation: "premiumGlow 8s ease-in-out infinite" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.95) 55%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "lightSweep 7s linear infinite"
              }}
            >
              MINDRA
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-white/85 font-light">
            AI-Driven. Human-Refined.
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/60 leading-relaxed">
            A living backbone for SMEs — where contextual intelligence,
            autonomous AI agents, and human expertise converge.
          </p>

          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/85">
              One ecosystem. Three forces.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/60">
              Speed. Clarity. Leverage.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
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
                    <span className="text-xs text-white/50 group-hover:text-white/80 transition">
                      →
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

        </div>
      </section>

    </main>
  );
}