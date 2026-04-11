interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-6 mb-10">
      <span className="font-mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-mute font-medium whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-gradient-to-r from-line to-transparent" />
    </div>
  );
}
