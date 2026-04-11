interface TagPillProps {
  children: React.ReactNode;
  pulse?: boolean;
}

export default function TagPill({ children, pulse = false }: TagPillProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-[rgba(15,27,45,0.6)] backdrop-blur-sm font-mono text-[0.68rem] tracking-[0.18em] uppercase text-ink-mute">
      {pulse && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"
          style={{ boxShadow: "0 0 10px #00E5A0" }}
        />
      )}
      {children}
    </div>
  );
}
