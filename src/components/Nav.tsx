"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "Vision",    anchor: "vision"    },
  { label: "Ecosystem", anchor: "ecosystem" },
  { label: "ALPA",      anchor: "alpa"      },
  { label: "Join",      anchor: "join"      },
] as const;

export default function Nav() {
  const pathname   = usePathname();
  const [open, setOpen] = useState(false);
  const isHome     = pathname === "/";

  function href(anchor: string) {
    if (anchor === "join") return isHome ? "#join" : "/join";
    if (anchor === "alpa") return isHome ? "#alpa" : "/axia";
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-[rgba(6,16,31,0.75)] border-b border-line-soft">
      {/* Main bar */}
      <div className="flex items-center justify-between px-6 md:px-12 h-[72px] max-w-[1320px] mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <Logo size={34} />
          <span className="font-sans font-extrabold text-[1.05rem] tracking-[0.18em] text-ink">
            MINDRA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.anchor}>
              <Link
                href={href(link.anchor)}
                className="text-ink text-[0.82rem] font-medium opacity-65 hover:opacity-100 hover:text-cyan transition-all duration-300 no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-0.5 bg-ink origin-center transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink origin-center transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-line-soft bg-[rgba(6,16,31,0.97)] backdrop-blur-xl"
          >
            <ul className="list-none m-0 p-0 flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.anchor}>
                  <Link
                    href={href(link.anchor)}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-ink text-sm font-medium opacity-65 hover:opacity-100 hover:text-cyan transition-all no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
