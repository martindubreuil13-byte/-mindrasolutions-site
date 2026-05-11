"use client";

import { motion } from "framer-motion";
import TagPill from "@/components/TagPill";
import Button  from "@/components/Button";
import { copy } from "@/content/copy";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0  },
};

export default function Hero() {
  return (
    <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 min-h-svh flex flex-col justify-center pt-[8rem] pb-28 overflow-hidden">

      {/* Right-side atmospheric depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 55% 50%, rgba(79,125,247,0.09) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Tag */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mb-9"
      >
        <TagPill pulse>{copy.hero.tag}</TagPill>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
        className="text-[clamp(3.4rem,8.5vw,8rem)] font-extrabold leading-[0.98] tracking-[-0.04em] mb-9"
      >
        <span className="font-light text-[rgba(232,241,255,0.65)]">
          {copy.hero.headline.light}
        </span>
        <br />
        <span className="text-brand-gradient">{copy.hero.headline.grad}</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        className="text-[1.1rem] md:text-[1.2rem] max-w-[580px] text-ink-mute mb-12 leading-[1.72]"
      >
        {copy.hero.sub}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
        className="flex gap-4 flex-wrap"
      >
        <Button href="#ecosystem" variant="primary">
          {copy.hero.ctaPrimary}
        </Button>
        <Button href="#alpa" variant="ghost">
          {copy.hero.ctaSecondary}
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3"
        aria-hidden
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-ink-dim to-transparent" />
        <span className="font-mono text-[0.58rem] tracking-[0.28em] uppercase text-ink-dim">
          Scroll
        </span>
      </motion.div>

    </section>
  );
}
