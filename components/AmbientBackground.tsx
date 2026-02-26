"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!isMobile) {
      const handleMouse = (e: MouseEvent) => {
        setMouse({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      };

      const handleScroll = () => setScrollY(window.scrollY);

      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("mousemove", handleMouse);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <>
      <style>{`
        @keyframes auroraMove {
          0%   { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
          50%  { transform: translate(10%, 8%) rotate(10deg); opacity: .85; }
          100% { transform: translate(-10%, -10%) rotate(0deg); opacity: .6; }
        }
      `}</style>

      {/* PARALLAX AURORA */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          transform: isMobile
            ? "translateY(0px)"
            : `translateY(${scrollY * 0.08}px)`,
        }}
      >
        <div
          className="absolute -top-56 left-1/2 h-[720px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(52,211,153,0.20), transparent 60%), radial-gradient(circle at 70% 40%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(circle at 55% 75%, rgba(45,212,191,0.12), transparent 62%)",
            animation: "auroraMove 20s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#041028] to-[#020b1c]" />
      </div>

      {/* DESKTOP MOUSE GLOW */}
      {!isMobile && (
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(52,211,153,0.08), transparent 45%)`,
          }}
        />
      )}

      {/* GRAIN */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </>
  );
}