interface LandingAgentCardProps {
  avatar:      string;
  name:        string;
  tagline:     string;
  description: string;
}

export default function LandingAgentCard({
  avatar,
  name,
  tagline,
  description,
}: LandingAgentCardProps) {
  return (
    <article className="p-8 border border-line rounded-[16px] bg-[rgba(11,20,36,0.7)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.04)] hover:-translate-y-0.5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue to-teal flex items-center justify-center font-extrabold text-[1rem] text-bg">
          {avatar}
        </div>
        <h4 className="text-[1.4rem] font-extrabold tracking-[-0.01em] text-ink">
          {name}
        </h4>
      </div>
      <p className="text-cyan text-[0.88rem] font-medium mb-3">{tagline}</p>
      <p className="text-ink-mute text-[0.88rem] leading-[1.6] m-0">{description}</p>
    </article>
  );
}
