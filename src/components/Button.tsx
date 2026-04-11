import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href:      string;
  children:  ReactNode;
  variant?:  "primary" | "ghost";
  arrow?:    boolean;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant  = "primary",
  arrow    = true,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 px-[2.2rem] py-[1.05rem] rounded-full font-semibold text-[0.92rem] font-sans no-underline transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      `${base} btn-gradient text-white ` +
      `shadow-[0_0_30px_rgba(0,212,255,0.35),0_0_60px_rgba(79,125,247,0.2)] ` +
      `hover:shadow-[0_0_40px_rgba(0,212,255,0.5),0_0_80px_rgba(167,139,250,0.3)] ` +
      `hover:-translate-y-0.5 ${className}`,
    ghost:
      `${base} text-ink bg-[rgba(15,27,45,0.5)] border border-line backdrop-blur-sm ` +
      `hover:border-cyan hover:bg-[rgba(0,212,255,0.06)] hover:-translate-y-0.5 ${className}`,
  };

  const inner = (
    <>
      {children}
      {arrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={variants[variant]}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={variants[variant]}>
      {inner}
    </Link>
  );
}
