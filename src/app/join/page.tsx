"use client";

import { FormEvent, useState } from "react";
import Nav    from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import TagPill from "@/components/TagPill";
import { copy } from "@/content/copy";

const INPUT =
  "w-full rounded-xl border border-line bg-[rgba(6,16,31,0.6)] px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:outline-none focus:border-cyan transition-colors";

export default function JoinPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/join", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    fd.get("name"),
          email:   fd.get("email"),
          company: fd.get("company"),
          role:    fd.get("role"),
          message: fd.get("message"),
        }),
      });
      if (res.ok) setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  const j = copy.join;

  return (
    <>
      <Nav />
      <main>
        <section className="relative z-[3] max-w-[680px] mx-auto px-6 md:px-8 pt-40 pb-32">

          {/* Tag */}
          <div className="mb-10">
            <TagPill pulse>{j.tag}</TagPill>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            {j.headline}
            <br />
            <span className="text-brand-gradient">{j.headlineGrad}</span>
          </h1>

          <p className="text-ink-mute text-[1.05rem] leading-[1.65] mb-12">
            {j.sub}
          </p>

          {/* Success */}
          {success ? (
            <div className="rounded-[20px] border border-[rgba(0,229,160,0.3)] bg-[rgba(0,229,160,0.06)] p-8 text-center">
              <span
                className="block text-teal text-[2.5rem] mb-4"
                aria-hidden
              >✓</span>
              <p className="text-ink text-[1.05rem] font-semibold mb-2">Application received.</p>
              <p className="text-ink-mute text-sm">{j.success}</p>
            </div>
          ) : (
            /* Form */
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Row: name + email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim mb-2">
                    Full Name <span className="text-cyan">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Martin Dubreuil"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim mb-2">
                    Email Address <span className="text-cyan">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={INPUT}
                  />
                </div>
              </div>

              {/* Row: company + role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim mb-2">
                    Company / Business
                  </label>
                  <input
                    name="company"
                    placeholder="Acme Inc."
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim mb-2">
                    Your Role
                  </label>
                  <input
                    name="role"
                    placeholder="Founder, Sales Lead…"
                    className={INPUT}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim mb-2">
                  Why are you joining?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What problem are you trying to solve?"
                  className={`${INPUT} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gradient mt-2 w-full rounded-full py-[1.05rem] text-[0.92rem] font-semibold text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {loading ? "Sending…" : j.cta}
              </button>

              <p className="text-center font-mono text-[0.6rem] tracking-[0.18em] uppercase text-ink-dim mt-2">
                No spam. No obligations. Just access.
              </p>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
