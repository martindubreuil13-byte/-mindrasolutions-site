"use client";

import { FormEvent, useId, useState } from "react";
import Nav    from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import TagPill from "@/components/TagPill";

/* ── Agent card ────────────────────────────────────────────────────── */
type AgentStatus = "live" | "dev";

interface AxiaAgentCardProps {
  name:        string;
  tagline:     string;
  description: string;
  status:      AgentStatus;
  liveLinks?:  { href: string; label: string; primary?: boolean }[];
}

function AxiaAgentCard({ name, tagline, description, status, liveLinks = [] }: AxiaAgentCardProps) {
  const emailId       = useId();
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/aura-beta", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     `${name} Early Access`,
          email,
          role:     `AXIA / ${name}`,
          interest: `Early access request for ${name}.`,
        }),
      });
      if (res.ok) { setSuccess(true); setEmail(""); }
    } finally {
      setLoading(false);
    }
  }

  return (
    <article className="relative overflow-hidden rounded-[20px] p-8 md:p-10 border border-line bg-gradient-to-b from-bg-card to-bg-card-2 transition-all duration-300 hover:border-[rgba(0,212,255,0.3)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-40" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-ink-dim mb-2">
            AXIA Agent
          </p>
          <h3 className="text-[2rem] font-extrabold tracking-[-0.01em] text-ink leading-none">
            {name}
          </h3>
        </div>
        {status === "live" ? (
          <span className="shrink-0 inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase px-[0.85rem] py-[0.45rem] rounded-full border border-[rgba(0,229,160,0.4)] bg-[rgba(0,229,160,0.06)] text-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" style={{ boxShadow: "0 0 8px #00E5A0" }} />
            Live Now
          </span>
        ) : (
          <span className="shrink-0 inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase px-[0.85rem] py-[0.45rem] rounded-full border border-line text-ink-dim">
            Coming Soon
          </span>
        )}
      </div>

      <p className="text-cyan text-[0.95rem] font-medium mb-4">{tagline}</p>
      <p className="text-ink-mute text-[0.92rem] leading-[1.65] mb-6">{description}</p>

      {/* Live links */}
      {liveLinks.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {liveLinks.map((link) =>
            link.primary ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-gradient inline-flex items-center gap-2 px-[1.8rem] py-[0.85rem] rounded-full font-semibold text-[0.88rem] text-white shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 transition-transform duration-300"
              >
                {link.label} →
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-[1.8rem] py-[0.85rem] rounded-full text-[0.88rem] text-ink border border-line bg-[rgba(15,27,45,0.5)] hover:border-cyan hover:bg-[rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}

      {/* Early access form (dev agents) */}
      {status === "dev" && (
        <div className="mt-6 rounded-[16px] border border-line bg-[rgba(11,20,36,0.6)] p-5">
          <p className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-ink-dim mb-3">
            Early Access
          </p>
          {success ? (
            <p className="text-teal text-sm">Request received — we'll reach out when access opens.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor={emailId} className="sr-only">Work email</label>
              <input
                id={emailId}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full rounded-xl border border-line bg-[rgba(6,16,31,0.6)] px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:outline-none focus:border-cyan transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gradient rounded-full px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {loading ? "Submitting…" : "Request Early Access"}
              </button>
            </form>
          )}
        </div>
      )}
    </article>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function AxiaPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 pt-40 pb-24">
          <div className="mb-10">
            <TagPill>Layer 02</TagPill>
          </div>
          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-extrabold leading-[1] tracking-[-0.04em] mb-6">
            <span className="text-brand-gradient">AXIA</span>
          </h1>
          <p className="text-[1.4rem] md:text-[1.7rem] font-light text-[rgba(232,241,255,0.85)] mb-8 leading-[1.2]">
            The workforce that doesn&apos;t sleep.
          </p>
          <p className="text-ink-mute text-[1.05rem] max-w-[640px] leading-[1.65] mb-12">
            Autonomous AI agents built to execute — not assist. AXIA agents run at scale, without adding headcount. The first agent, ALPA, is live today.
          </p>
          <Button href="https://alpa.mindrasolutions.com/" external variant="primary">
            Try ALPA Free
          </Button>
        </section>

        {/* ── The problem ───────────────────────────────────────── */}
        <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 pb-24">
          <SectionLabel>01 / The Problem</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Not a talent problem.",
                body:  "Your team is capable — but stretched. The real gap isn't skill. It's capacity for the repetitive, high-volume work that still has to get done.",
              },
              {
                title: "Not a software problem.",
                body:  "More tools means more tabs, more context-switching, more maintenance. What you need isn't another dashboard. It's execution.",
              },
              {
                title: "A workforce problem.",
                body:  "Hiring costs too much. Outsourcing creates friction. Doing it yourself creates exhaustion. AXIA exists for this gap.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[20px] border border-line bg-gradient-to-b from-bg-card to-bg-card-2 p-8 transition-all duration-300 hover:border-[rgba(0,212,255,0.25)]"
              >
                <h3 className="text-[1.1rem] font-semibold text-ink mb-3">{card.title}</h3>
                <p className="text-ink-mute text-[0.92rem] leading-[1.65]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The agents ────────────────────────────────────────── */}
        <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 pb-32">
          <SectionLabel>02 / The Agents</SectionLabel>

          <p className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-bold tracking-[-0.02em] mb-16">
            The first agent.{" "}
            <span className="text-brand-gradient">Live today.</span>
          </p>

          <div className="max-w-[640px]">
            <AxiaAgentCard
              name="ALPA"
              status="live"
              tagline="Autonomous Lead Engine"
              description="Finds enriched business leads in seconds — website, email, phone number, and business information. Built to remove prospecting friction and accelerate outreach for agencies, freelancers, and sales teams."
              liveLinks={[
                { href: "https://alpa.mindrasolutions.com/", label: "Try ALPA Free", primary: true },
              ]}
            />
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────── */}
        <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 pb-32">
          <div className="rounded-[24px] border border-line bg-gradient-to-br from-[rgba(79,125,247,0.05)] via-[rgba(0,212,255,0.03)] to-[rgba(167,139,250,0.04)] p-[2.5rem] md:p-[3.5rem] text-center">
            <p className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-cyan mb-5">
              ✦ Live Now · Part of the MINDRA Ecosystem
            </p>
            <h2 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.02em] mb-4">
              More output.{" "}
              <span className="text-brand-gradient">Less drag on your team.</span>
            </h2>
            <p className="text-ink-mute max-w-[500px] mx-auto mb-10 leading-[1.65]">
              Built for founder-led businesses, lean agencies, and growth-stage teams that need execution without adding payroll.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="https://alpa.mindrasolutions.com/" external variant="primary">
                Try ALPA Free
              </Button>
              <Button href="/join" variant="ghost">
                Join the Movement
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
