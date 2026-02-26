"use client";

import { useEffect, useState } from "react";

export default function AuraPage() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouse);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      interest: formData.get("interest"),
    };

    const res = await fetch("/api/aura-beta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  }

  return (
    <main className="relative bg-[#020617] text-white overflow-x-hidden">

      {/* KEYFRAMES */}
      <style>{`
        @keyframes auroraMove {
          0% { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
          50% { transform: translate(10%, 8%) rotate(10deg); opacity: .8; }
          100% { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
        }

        @keyframes lightSweep {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* PARALLAX AURORA */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div
          className="absolute -top-56 left-1/2 h-[720px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(20,184,166,0.20), transparent 60%), radial-gradient(circle at 70% 40%, rgba(45,212,191,0.18), transparent 60%)",
            animation: "auroraMove 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* MOUSE GLOW (desktop only) */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            window.innerWidth > 768
              ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(20,184,166,0.08), transparent 40%)`
              : "none",
        }}
      />

      {/* VIGNETTE */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.7)_100%)]" />

      {/* GRAIN */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 pt-24 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[0.22em]">
              <span
                style={{
                  background:
                    "linear-gradient(-78deg, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.95) 55%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "lightSweep 14s linear infinite",
                }}
              >
                AURA
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-white/85 font-light">
              Contextual Intelligence
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-white/60">
              Your business second brain.
            </p>
          </div>

          {/* GLASS CONTENT BLOCKS */}
          <div className="mt-16 space-y-8">

            {/* Problem Block */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10">
              <h2 className="text-2xl font-light text-white/90">
                Information Is Everywhere. Context Is Nowhere.
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                Dashboards show metrics. CRMs show pipelines.
                Slack shows conversations. Zoom shows meetings.
              </p>
              <p className="mt-4 text-white/65 leading-relaxed">
                But none of it answers the real question:
              </p>
              <p className="mt-2 text-white text-lg">
                What does this actually mean?
              </p>
            </div>

            {/* Thinking Layer Block */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10">
              <h2 className="text-2xl font-light text-white/90">
                A Thinking Layer.
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                AURA connects signals across your organization and transforms
                operational noise into strategic clarity.
              </p>
              <p className="mt-4 text-white/65 leading-relaxed">
                Not another dashboard. An interpretation engine.
              </p>
            </div>

            {/* Development + Beta */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10">
              <h2 className="text-2xl font-light text-white/90">
                In Development — 2026 Release
              </h2>

              <p className="mt-4 text-white/65 text-sm leading-relaxed">
                AURA is currently in development. Closed beta access
                will open prior to public release.
              </p>

              {success ? (
                <p className="mt-6 text-teal-400">
                  Application received. We’ll contact selected participants.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                  <input
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400"
                  />

                  <input
                    name="role"
                    placeholder="Your Role"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400"
                  />

                  <textarea
                    name="interest"
                    rows={4}
                    placeholder="Why are you interested in AURA?"
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-teal-400"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-7 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition"
                  >
                    {loading ? "Submitting..." : "Apply for Beta Access"}
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}