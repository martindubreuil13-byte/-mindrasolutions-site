export const copy = {

  /* ── Hero ─────────────────────────────────────────────────────── */
  hero: {
    tag: "An Ecosystem in Motion",
    headline: {
      light: "Intelligence for",
      grad:  "the Builders.",
    },
    sub: "The world's economy was built by small businesses, startups, and bold entrepreneurs. MINDRA exists to give them the firepower once reserved for giants.",
    ctaPrimary:   "Explore the Ecosystem",
    ctaSecondary: "Meet ALPA",
  },

  /* ── Section 1: The Reality ───────────────────────────────────── */
  smeReality: {
    label: "01 / The Reality",
    headline: {
      light: "The builders were never the problem.",
      grad:  "The imbalance was.",
    },
    body: "Large organisations have armies of analysts, AI systems, and operational infrastructure built over decades. Small businesses have ambition — and whatever they can figure out alone. MINDRA was built to change that equation.",
    truths: [
      {
        stat: "70%",
        body: "of private-sector jobs worldwide are created and sustained by small businesses.",
      },
      {
        stat: "Hours",
        body: "spent every week on manual tasks that enterprise teams delegate to automated systems in seconds.",
      },
      {
        stat: "Zero",
        body: "of the enterprise-grade AI infrastructure was designed with small business operators in mind.",
      },
    ],
  },

  /* ── Section 2: Ecosystem ─────────────────────────────────────── */
  ecosystem: {
    label: "02 / The Ecosystem",
    headline: {
      plain: "Three layers.",
      grad:  "One backbone.",
      light: "Staged, deliberate, and already moving.",
    },
  },

  /* ── Section 3: ALPA Live ─────────────────────────────────────── */
  alpaSection: {
    label:    "03 / Live Now",
    tag:      "✦ Live Now · ALPA by MINDRA",
    eyebrow:  "Meet ALPA",
    headline: "The first live operational layer.",
    sub:      "Most small businesses don't have a lead problem. They have a time problem.",
    body:     "ALPA is an autonomous prospecting agent. It finds enriched business leads — verified website, email, and phone number — in seconds. What used to take hours of manual search across Google, LinkedIn, and directories now takes one request.",
    delivers: [
      { label: "Website"       },
      { label: "Email"         },
      { label: "Phone Number"  },
      { label: "Business Info" },
    ],
    example: {
      company:  "Acme Creative Agency",
      time:     "3.2s",
      website:  "acme-creative.com",
      email:    "hello@acme-creative.com",
      phone:    "+1 (555) 892-3421",
      location: "Austin, TX",
    },
    cta:     "Explore ALPA",
    ctaHref: "https://alpa.mindrasolutions.com/",
  },

  /* ── Section 4: Future Roadmap ────────────────────────────────── */
  futureSection: {
    label: "04 / The Roadmap",
    headline: {
      plain: "The ecosystem is",
      grad:  "unfolding.",
    },
    sub: "What you see today is only the beginning. Each layer is being built with the same precision — not rushed, not overpromised.",
    layers: [
      {
        name:        "AURA",
        role:        "Contextual Intelligence Layer",
        description: "The second brain for founders. AURA connects signals across your organisation — meetings, emails, decisions — and transforms operational noise into strategic clarity.",
        status:      "In Development",
        statusType:  "dev" as "live" | "soon" | "dev",
        eta:         "2026",
      },
      {
        name:        "NEXA",
        role:        "Human Expertise Network",
        description: "When a problem needs a human, the right specialist is one request away. AI-matched to real business outcomes — not keyword searches, not crowded marketplaces.",
        status:      "Future Platform",
        statusType:  "dev" as "live" | "soon" | "dev",
        eta:         "2027",
      },
    ],
  },

  /* ── Section 5: The Builders ──────────────────────────────────── */
  builders: {
    label: "05 / For the Builders",
    headline: {
      light: "Their dreams are bold.",
      grad:  "Their means are not.",
      post:  "No more.",
    },
    body: "MINDRA is built for the operators who carry the economy on their shoulders — and have been doing it without the infrastructure they deserve.",
    who: [
      "Freelancers",
      "Agencies",
      "Startups",
      "Consultants",
      "Coaches",
      "Recruiters",
      "Service Businesses",
      "Founders",
    ],
  },

  /* ── Section 6: Final CTA ─────────────────────────────────────── */
  finalCta: {
    tag:                "The Beginning",
    headline:           "Built for the Builders.",
    sub:                "MINDRA is just beginning.",
    ctaPrimary:         "Explore the Ecosystem",
    ctaSecondaryLabel:  "Explore ALPA",
    ctaSecondaryHref:   "https://alpa.mindrasolutions.com/",
    signoff:            "Martin Dubreuil · Founder · MINDRA",
  },

  /* ── Footer ───────────────────────────────────────────────────── */
  footer: {
    copy: "© 2026 MINDRA — Built for the Builders",
    links: [
      { label: "ALPA",      href: "https://alpa.mindrasolutions.com/", external: true  },
      { label: "Vision",    href: "/#vision",                          external: false },
      { label: "Ecosystem", href: "/#ecosystem",                       external: false },
      { label: "Join",      href: "/join",                             external: false },
    ],
  },

  /* ── Join page ────────────────────────────────────────────────── */
  join: {
    tag:          "Join the Movement",
    headline:     "You're not too late.",
    headlineGrad: "You're right on time.",
    sub:          "Be among the first operators inside the MINDRA ecosystem. We're onboarding founders and SME leaders who are ready to play offense.",
    cta:          "Send My Application",
    success:      "Application received. We'll reach out to selected founders.",
  },

} as const;
