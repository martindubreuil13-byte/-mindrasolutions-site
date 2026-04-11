import Link from "next/link";
import type { Pillar } from "@/content/pillars";

/* ── Pillar icons ─────────────────────────────────────────────────── */
const AuraIcon = () => (
  <svg className="w-7 h-7 text-cyan" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="11" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
    <path d="M16 3v4M16 25v4M3 16h4M25 16h4" strokeLinecap="round" />
  </svg>
);

const AxiaIcon = () => (
  <svg className="w-7 h-7 text-cyan" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 3l11 6.5v13L16 29 5 22.5v-13z" />
    <path d="M16 3v26M5 9.5L16 16l11-6.5M5 22.5L16 16l11 6.5" opacity=".5" />
  </svg>
);

const NexaIcon = () => (
  <svg className="w-7 h-7 text-cyan" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9"  cy="10" r="3" />
    <circle cx="23" cy="10" r="3" />
    <circle cx="16" cy="23" r="3" />
    <path d="M12 10h8M11 13l4 7M21 13l-4 7" strokeLinecap="round" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  AURA: <AuraIcon />,
  AXIA: <AxiaIcon />,
  NEXA: <NexaIcon />,
};

/* ── Component ────────────────────────────────────────────────────── */
interface PillarCardProps {
  pillar: Pillar;
}

export default function PillarCard({ pillar }: PillarCardProps) {
  const { layer, name, role, description, status, statusType, href } = pillar;

  return (
    <Link
      href={href}
      className={[
        "group relative block overflow-hidden rounded-[20px] p-10 no-underline",
        "border border-line bg-gradient-to-b from-bg-card to-bg-card-2",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-[rgba(0,212,255,0.35)]",
        "hover:shadow-[0_24px_60px_rgba(0,212,255,0.12),0_0_0_1px_rgba(0,212,255,0.1)]",
      ].join(" ")}
    >
      {/* Top-border gradient reveal on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon container */}
      <div className="w-[60px] h-[60px] rounded-[14px] bg-[rgba(79,125,247,0.08)] border border-line flex items-center justify-center mb-7">
        {icons[name]}
      </div>

      {/* Layer label */}
      <span className="block font-mono text-[0.62rem] tracking-[0.22em] uppercase text-ink-dim mb-4">
        {layer}
      </span>

      {/* Name */}
      <h3 className="text-[1.9rem] font-extrabold tracking-[-0.01em] text-ink mb-1 leading-none">
        {name}
      </h3>

      {/* Role */}
      <p className="text-[0.9rem] text-cyan font-medium mb-5">{role}</p>

      {/* Description */}
      <p className="text-ink-mute text-[0.92rem] leading-[1.65] mb-7">{description}</p>

      {/* Status badge */}
      {statusType === "live" ? (
        <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase px-[0.85rem] py-[0.45rem] rounded-full border border-[rgba(0,229,160,0.4)] bg-[rgba(0,229,160,0.06)] text-teal">
          <span
            className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"
            style={{ boxShadow: "0 0 8px #00E5A0" }}
          />
          {status}
        </span>
      ) : (
        <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase px-[0.85rem] py-[0.45rem] rounded-full border border-line text-ink-dim">
          {status}
        </span>
      )}
    </Link>
  );
}
