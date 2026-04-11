"use client";

import { useState } from "react";
import Link from "next/link";
import AmbientBackground from "@/components/AmbientBackground";

export default function NexaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    challenge: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/nexa-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        business: "",
        challenge: "",
      });
    }

    setLoading(false);
  };

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

        <Link
          href="/"
          className="text-xs sm:text-sm text-white/60 hover:text-white/90 transition"
        >
          ← Back
        </Link>
      </div>

      {/* CONTENT */}
      <section className="relative z-10 px-6 md:px-12 pt-20 md:pt-28 pb-28">
        <div className="mx-auto max-w-5xl">

          {/* HERO */}
          <div className="text-center">
            <style>{`
              @keyframes nexaGlow {
                0% {
                  text-shadow:
                    0 0 25px rgba(255,255,255,0.2),
                    0 0 60px rgba(34,211,238,0.08);
                }
                50% {
                  text-shadow:
                    0 0 45px rgba(255,255,255,0.3),
                    0 0 90px rgba(52,211,153,0.12);
                }
                100% {
                  text-shadow:
                    0 0 25px rgba(255,255,255,0.2),
                    0 0 60px rgba(34,211,238,0.08);
                }
              }
            `}</style>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[0.22em]"
              style={{ animation: "nexaGlow 10s ease-in-out infinite" }}
            >
              NEXA
            </h1>

            <p className="mt-5 text-lg sm:text-xl md:text-2xl text-white/85 font-light">
              Human Expertise. Precisely Matched.
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-white/60 leading-relaxed">
              NEXA connects businesses with carefully vetted experts —
              matched to real business problems using structured AI-based
              capability mapping.
            </p>

            <p className="mt-6 text-xs text-red-400 tracking-wide">
              Early Prototype — Controlled Release
            </p>
          </div>

          {/* SECTION 1 */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 transition duration-500 hover:border-white/20">
            <h2 className="text-xl md:text-2xl font-light text-white/90">
              The Problem With Marketplaces
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              Most expert platforms optimize for volume. More profiles. More bids.
              More noise. You scroll endlessly, comparing keywords instead of
              competence.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              That isn’t intelligent matching. It’s filtering chaos.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 transition duration-500 hover:border-white/20">
            <h2 className="text-xl md:text-2xl font-light text-white/90">
              What Makes NEXA Different
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              NEXA uses structured AI evaluation logic to map real capability —
              not keywords. Experts are matched based on demonstrated accomplishments,
              domain depth, and contextual alignment.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              You don’t browse thousands of options. You see the few that actually fit.
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 transition duration-500 hover:border-white/20">
            <h2 className="text-xl md:text-2xl font-light text-white/90">
              Carefully Vetted Experts
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              Freelancers, consultants, coaches, and specialists inside NEXA are
              validated, categorized, and mapped to defined business outcomes.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
              Not vague advisory. Not endless proposals. Clear scope. Clear engagement.
            </p>
          </div>

          {/* FORM */}
          <div className="mt-16 rounded-3xl border border-emerald-400/40 bg-white/[0.05] backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_80px_rgba(52,211,153,0.12)]">
            <h2 className="text-xl md:text-2xl font-light text-white/90">
              Request Early Access
            </h2>

            {success ? (
              <p className="mt-6 text-emerald-400">
                Thank you. We'll contact you when matching opens.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition"
                />

                <input
                  type="text"
                  name="business"
                  placeholder="Business Type (optional)"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition"
                />

                <textarea
                  name="challenge"
                  placeholder="What challenge are you facing?"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Join Early Access"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}