import { copy } from "@/content/copy";

export default function Footer() {
  return (
    <footer className="relative z-[3] border-t border-line-soft py-12 text-center">
      <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink-dim">
        {copy.footer.copy}
      </p>
    </footer>
  );
}
