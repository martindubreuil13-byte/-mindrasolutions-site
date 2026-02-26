"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AxiaPage() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

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

        /* left -> right sweep */
        @keyframes lightSweep {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes premiumGlow {
          0% {
            text-shadow:
              0 0 30px rgba(255,255,255,0.18),
              0 0 60px rgba(255,255,255,0.10),
              0 0 100px rgba(52,211,153,0.05);
          }
          50% {
            text-shadow:
              0 0 45px rgba(255,255,255,0.28),
              0 0 75px rgba(255,255,255,0.15),
              0 0 130px rgba(34,211,238,0.08);
          }
          100% {
            text-shadow:
              0 0 30px rgba(255,255,255,0.18),
              0 0 60px rgba(255,255,255,0.10),
              0 0 100px rgba(52,211,153,0.05);
          }
        }
      `}</style>

      {/* ---------- PARALLAX AURORA ---------- */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div
          className="absolute -top-56 left-1/2 h-[720px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(52,211,153,0.18), transparent 60%), radial-gradient(circle at 70% 40%, rgba(34,211,238,0.16), transparent 60%), radial-gradient(circle at 55% 70%, rgba(45,212,191,0.10), transparent 62%)",
            animation: "auroraMove 16s ease-in-out infinite",
          }}
        />
      </div>

      {/* ---------- MOUSE REACTIVE GLOW ---------- */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(52,211,153,0.08), transparent 42%)`,
        }}
      />

      {/* ---------- VIGNETTE ---------- */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.7)_100%)]" />

      {/* ---------- GRAIN ---------- */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ---------- NAV ---------- */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8 md:pt-12">
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

        <Link
          href="/"
          className="text-xs sm:text-sm text-white/60 hover:text-white/90 transition"
        >
          ← Back
        </Link>
      </div>

      {/* ---------- CONTENT ---------- */}
      <section className="relative z-10 px-6 md:px-12 pt-14 md:pt-20 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          {/* HERO */}
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.20em] text-white"
              style={{ animation: "premiumGlow 14s ease-in-out infinite" }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0.40) 50%, rgba(255,255,255,0.95) 55%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "lightSweep 14s linear infinite",
                }}
              >
                AXIA
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/85 font-light">
              Your On-Demand AI Crew
            </p>

            <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed">
              Hire digital operators to execute real work inside your business.
              Scale up when needed. Pause when you don’t.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://free-trial.mindrasolutions.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-black hover:scale-[1.03] transition"
              >
                Try Scout Free
              </a>

              <a
                href="https://alga.mindrasolutions.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.06] px-7 py-3 text-sm text-white/85 hover:bg-white/[0.10] transition"
              >
                Discover ALGA
              </a>
            </div>
          </div>

          {/* SECTIONS */}
          <div className="mt-14 grid gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 md:p-10">
              <h2 className="text-xl md:text-2xl font-light text-white/90">
                Most Businesses Don’t Lack Talent. They Lack Capacity.
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                Your team is capable — but stretched. Leads need to be found.
                Prospects need to be researched. Messages need to be structured.
                Not because it’s strategic… but because someone has to do it.
              </p>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                Hiring increases cost. Outsourcing increases friction. Doing it
                yourself increases exhaustion. AXIA exists for this gap.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 md:p-10">
              <h2 className="text-xl md:text-2xl font-light text-white/90">
                Not Software. A Crew.
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                AXIA is a modular crew of specialized AI agents. Each agent is
                built for a specific mission — and you activate them when work
                stacks up.
              </p>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                Scale them when demand increases. Pause them when you don’t need
                them. Think of AXIA as a digital workforce — without contracts,
                onboarding, or HR overhead.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 md:p-10">
              <h2 className="text-xl md:text-2xl font-light text-white/90">
                The First Active Crew: ALGA
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                ALGA is the first operational crew inside AXIA — focused on one
                thing: generating qualified leads.
              </p>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                ALGA is in development, with Scout already released. Scout’s
                mission is simple: find structured, qualified leads — fast. On
                average: <span className="text-white/85 font-semibold">10 leads per minute.</span>
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://free-trial.mindrasolutions.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-black hover:scale-[1.03] transition text-center"
                >
                  Try Scout Free
                </a>
                <a
                  href="https://alga.mindrasolutions.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.06] px-7 py-3 text-sm text-white/85 hover:bg-white/[0.10] transition text-center"
                >
                  Explore ALGA
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 md:p-10">
              <h2 className="text-xl md:text-2xl font-light text-white/90">
                Built For Operators
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                AXIA is designed for founder-led businesses, lean SMEs,
                freelancers scaling beyond themselves, agencies handling multiple
                clients, and growth-stage teams avoiding premature hires.
              </p>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                If you need more output without adding payroll, AXIA becomes your
                extension.
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-10 text-center text-sm text-white/45">
            Built for builders. Quiet power. No noise.
          </div>

          <div className="h-10" />
        </div>
      </section>
    </main>
  );
}