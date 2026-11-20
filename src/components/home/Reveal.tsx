"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children:   ReactNode;
  as?:        ElementType;
  className?: string;
  /** Stagger index (×90 ms) for the block itself */
  index?:     number;
  /** Group: the wrapper stays put and only its .rv / .rv-line children animate */
  group?:     boolean;
  /** Fraction of the block that must be visible before it reveals */
  threshold?: number;
  id?:        string;
  "aria-labelledby"?: string;
  "data-theme"?: string;
}

/* Minimal scroll reveal. Server output is "idle"; the client flips it to "in"
   once, when the block first scrolls into view. No animation library. */
export default function Reveal({
  children, as: Tag = "div", className = "", index, group = false, threshold = 0.2, ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setState("in"); io.disconnect(); }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const style = index === undefined ? undefined : ({ "--i": index } as CSSProperties);

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={`${group ? "" : "rv"} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
