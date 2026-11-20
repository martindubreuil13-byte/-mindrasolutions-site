"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* Approved production files, MINDRA Logo Asset Package V1.0, unmodified:
   02_Flat_Vector/SVG/MINDRA_Logo_TwoColor_MineralWordmark.svg  (lockup, for Carbon)
   02_Flat_Vector/SVG/MINDRA_Fold_Symbol_TwoColor.svg           (symbol, from 48 px tall) */
import lockup from "@/assets/brand/mindra-lockup-flat-mineral.svg";
import symbol from "@/assets/brand/fold-flat-twocolor.svg";
import { navItems } from "@/content/home";

const BASE =
  "inline-flex min-h-[2.75rem] items-center font-text text-[0.9375rem] font-medium leading-none tracking-[0.01em] no-underline transition-colors duration-[240ms]";

/* Primary navigation. Two states, because the only approved lockup is the
   stacked one (120 px wide minimum, about 100 px tall):
   · at the top of the page the bar is transparent and carries the full lockup
     with its wordmark, over the Carbon hero;
   · once the visitor scrolls it compacts to 72 px on solid Carbon and the
     approved two-colour Fold symbol takes over (48 px tall, its minimum).
   Below lg the five items collapse into a menu panel (Escape closes it and
   returns focus to the button). A 1 px progress line runs along the bar. */
export default function HomeNav({ base = "", current }: { base?: string; current?: string }) {
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  /* Active section: the one crossing the middle of the viewport. */
  useEffect(() => {
    const els = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Scrolled state and reading progress, one rAF-throttled passive listener. */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 120) setActive("");
      const max = document.documentElement.scrollHeight - window.innerHeight;
      header.current?.style.setProperty("--p", String(max > 0 ? Math.min(1, y / max) : 0));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const compact = scrolled || open;

  /* On other pages (the manifesto) section anchors must lead back to the home page. */
  const href = (h: string) => (h.startsWith("#") ? `${base}${h}` : h);
  const isCurrent = (id: string) => current === id;
  const itemClass = (id: string, cta?: boolean) =>
    cta
      ? `${BASE} rounded-[2px] border px-5 ${active === id ? "border-mineral bg-mineral/10" : "border-mineral/60"} text-mineral hover:border-mineral hover:bg-mineral/10`
      : `${BASE} px-3 ${active === id || isCurrent(id) ? "text-white" : "text-mineral/85"} hover:text-white`;

  /* The two logo links share one box; only the current one is reachable. */
  const LOGO_BASE =
    "absolute left-0 top-1/2 -translate-y-1/2 transition-[opacity,visibility] duration-[480ms] [transition-timing-function:var(--ease-fold)]";

  return (
    <header
      ref={header}
      data-theme="dark"
      data-compact={compact}
      className={`mindra mindra-nav fixed inset-x-0 top-0 z-[100] transition-[background-color,height] duration-[480ms] [transition-timing-function:var(--ease-fold)] ${
        compact ? "h-[72px] bg-carbon" : "h-[var(--nav-top-h)] bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-[max(48px,6vw)]"
      >
        <div className="relative h-full w-[100px] md:w-[106px]">
          <Link
            href="/"
            aria-label="MINDRA — home"
            tabIndex={compact ? -1 : 0}
            aria-hidden={compact}
            className={`${LOGO_BASE} ${compact ? "invisible opacity-0" : "visible opacity-100"}`}
          >
            <Image
              src={lockup}
              alt="MINDRA"
              priority
              className="block h-auto w-[100px] md:w-[106px]"
            />
          </Link>
          <Link
            href="/"
            aria-label="MINDRA — home"
            tabIndex={compact ? 0 : -1}
            aria-hidden={!compact}
            className={`${LOGO_BASE} -ml-1 p-1 ${compact ? "visible opacity-100" : "invisible opacity-0"}`}
          >
            <Image src={symbol} alt="MINDRA" className="block h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop */}
        <ul className="m-0 hidden list-none items-center gap-1 p-0 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={href(item.href)}
                aria-current={isCurrent(item.id) ? "page" : active === item.id ? "location" : undefined}
                className={itemClass(item.id, item.cta)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Below lg */}
        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls="mindra-menu"
          onClick={() => setOpen((v) => !v)}
          className={`${BASE} -mr-2 gap-3 px-2 text-mineral lg:hidden`}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-[5px]">
            <span className={`block h-px w-full bg-current transition-transform duration-[240ms] ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-current transition-transform duration-[240ms] ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {/* Reading progress along the bar's lower edge */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-mineral/15 transition-opacity duration-[480ms] ${compact ? "opacity-100" : "opacity-0"}`}
      >
        <span className="block h-full origin-left bg-sage" style={{ transform: "scaleX(var(--p, 0))" }} />
      </span>

      {open && (
        <div id="mindra-menu" className="absolute inset-x-0 top-full border-t border-mineral/15 bg-carbon lg:hidden">
          <ul className="m-0 mx-auto max-w-[1440px] list-none px-5 pb-6 pt-2 md:px-8">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-mineral/10 last:border-b-0">
                <a
                  href={href(item.href)}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.id) ? "page" : active === item.id ? "location" : undefined}
                  className="flex min-h-[3.5rem] items-center justify-between font-display text-[1.375rem] font-normal tracking-[-0.01em] text-mineral no-underline"
                >
                  {item.label}
                  <span aria-hidden className="font-text text-[0.9375rem] text-sage">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
