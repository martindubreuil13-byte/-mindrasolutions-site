"use client";

import { motion } from "framer-motion";
import TagPill from "@/components/TagPill";
import Button from "@/components/Button";
import { copy } from "@/content/copy";

const fadeUp = {
  initial:  { opacity: 0, y: 30 },
  animate:  { opacity: 1, y: 0  },
};

export default function Hero() {
  return (
    <section className="relative z-[3] max-w-[1320px] mx-auto px-6 md:px-12 min-h-svh flex flex-col justify-center pt-[11rem] pb-24">

      {/* Tag pill */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
        className="mb-10"
      >
        <TagPill pulse>{copy.hero.tag}</TagPill>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[1] tracking-[-0.04em] mb-8"
      >
        {copy.hero.headline.line1}
        <br />
        <span className="text-brand-gradient">{copy.hero.headline.grad}</span>
        <br />
        <span className="font-light text-[rgba(232,241,255,0.85)]">
          {copy.hero.headline.light}
        </span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="text-[1.2rem] max-w-[660px] text-ink-mute mb-12 leading-[1.65]"
      >
        {copy.hero.sub}
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
        className="flex gap-4 flex-wrap"
      >
        <Button href="/join"  variant="primary">
          {copy.hero.ctaPrimary}
        </Button>
        <Button href="/axia"  variant="ghost">
          {copy.hero.ctaSecondary}
        </Button>
      </motion.div>

    </section>
  );
}
