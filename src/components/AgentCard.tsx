"use client";

import { FormEvent, useId, useState } from "react";

type AgentCardProps = {
  name: string;
  status: "Live" | "In Development";
  description: string;
  whyItMatters: string;
  expandedCopy?: string;
  accent: "emerald" | "cyan" | "teal";
  expanded?: boolean;
  onToggle?: () => void;
  liveLinks?: Array<{
    href: string;
    label: string;
  }>;
};

const accents = {
  emerald: {
    border: "border-emerald-400/20 hover:border-emerald-300/45",
    glow: "shadow-[0_0_70px_rgba(52,211,153,0.10)]",
    badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
    dot: "bg-emerald-300",
    overlay: "from-emerald-400/18 via-emerald-400/6 to-transparent",
    button: "from-emerald-400 to-cyan-400",
    focus: "focus:border-emerald-400",
  },
  cyan: {
    border: "border-cyan-400/20 hover:border-cyan-300/45",
    glow: "shadow-[0_0_70px_rgba(34,211,238,0.10)]",
    badge: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
    dot: "bg-cyan-300",
    overlay: "from-cyan-400/18 via-cyan-400/6 to-transparent",
    button: "from-cyan-400 to-emerald-400",
    focus: "focus:border-cyan-400",
  },
  teal: {
    border: "border-teal-400/20 hover:border-teal-300/45",
    glow: "shadow-[0_0_70px_rgba(45,212,191,0.10)]",
    badge: "border-teal-400/25 bg-teal-400/10 text-teal-300",
    dot: "bg-teal-300",
    overlay: "from-teal-400/18 via-teal-400/6 to-transparent",
    button: "from-teal-400 to-emerald-400",
    focus: "focus:border-teal-400",
  },
};

export default function AgentCard({
  name,
  status,
  description,
  whyItMatters,
  expandedCopy,
  accent,
  expanded = false,
  onToggle,
  liveLinks = [],
}: AgentCardProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const emailId = useId();
  const color = accents[accent];
  const isExpandable = status !== "Live";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/aura-beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name} Early Access`,
          email,
          role: `AXIA / ${name}`,
          interest: `Request early access for ${name}. Submitted from the AXIA workforce section.`,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white/[0.04] p-6 sm:p-7 md:p-8",
        "backdrop-blur-xl transition-all duration-300",
        color.border,
        color.glow,
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 bg-gradient-to-b opacity-100",
          color.overlay,
        ].join(" ")}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.32em] text-white/35">AXIA</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[0.18em] text-white">
              {name}
            </h3>
          </div>

          <span
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] tracking-[0.18em]",
              color.badge,
            ].join(" ")}
          >
            <span className={["h-2 w-2 rounded-full", color.dot].join(" ")} />
            {status}
          </span>
        </div>

        <p className="mt-6 text-base text-white/85">{description}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/60">{whyItMatters}</p>

        {expandedCopy ? (
          <p className="mt-5 text-sm leading-relaxed text-white/72">{expandedCopy}</p>
        ) : null}

        {liveLinks.length > 0 ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {liveLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={
                  link.label === "Try Scout"
                    ? `rounded-full bg-gradient-to-r ${color.button} px-5 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02]`
                    : "rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-center text-sm text-white/85 transition hover:bg-white/[0.10]"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        {isExpandable ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={onToggle}
              className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
            >
              <span>{expanded ? "Hide rollout" : "See limited rollout"}</span>
              <span className={expanded ? "rotate-45 transition" : "transition"}>+</span>
            </button>
          </div>
        ) : null}

        {isExpandable && expanded ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
            <p className="text-xs tracking-[0.24em] text-white/35">EARLY ACCESS</p>
            <h4 className="mt-3 text-lg font-medium text-white">
              Early Access — Limited Rollout
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              We’re onboarding a small number of operators first.
            </p>

            {success ? (
              <p className="mt-5 text-sm text-emerald-300">
                Request received. We’ll reach out when access opens.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                <label htmlFor={emailId} className="sr-only">
                  Work email
                </label>
                <input
                  id={emailId}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Work email (recommended)"
                  className={[
                    "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white",
                    "placeholder:text-white/35 focus:outline-none",
                    color.focus,
                  ].join(" ")}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full rounded-full bg-gradient-to-r ${color.button} px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-55`}
                >
                  {loading ? "Submitting..." : "Request Early Access"}
                </button>
              </form>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
