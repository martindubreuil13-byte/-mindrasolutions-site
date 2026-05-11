import Link   from "next/link";
import Logo    from "@/components/Logo";
import { copy } from "@/content/copy";

export default function Footer() {
  const { links, copy: copyright } = copy.footer;

  return (
    <footer className="relative z-[3] border-t border-line-soft">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <span className="font-sans font-extrabold text-[0.9rem] tracking-[0.18em] text-ink">
              MINDRA
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 list-none m-0 p-0">
              {links.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-ink-mute hover:text-cyan transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-ink-mute hover:text-cyan transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-ink-dim whitespace-nowrap">
            {copyright}
          </p>

        </div>
      </div>
    </footer>
  );
}
