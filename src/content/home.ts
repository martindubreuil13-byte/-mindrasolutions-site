/* Public homepage content: one source of truth for all seven sections.
   Positioning: Brand Identity & Experience Playbook V1.0.
   Product statuses follow the playbook’s accuracy checklist:
   PING and ALPA live · AURA in development · NEXA future concept ·
   Business Architecture an existing human-led service · ALGA and AXIA not promoted. */

export const site = {
  name:        "MINDRA",
  title:       "MINDRA — Intelligence changes the equation",
  description: "We bring human experience, organizational knowledge, and artificial intelligence together to expand what independent businesses can accomplish.",
  url:         "https://mindrasolutions.com",
  email:       "info@mindrasolutions.com",
} as const;

/* Destinations. Every entry resolves today. */
export const links = {
  ping:    "https://ping.mindrasolutions.com/",
  alpa:    "https://alpa.mindrasolutions.com/",
  contact: `mailto:${site.email}?subject=${encodeURIComponent("Talking about my business")}`,
  contactArchitecture: `mailto:${site.email}?subject=${encodeURIComponent("Business Architecture")}`,
  modernBusinessArchitect: "https://modernbusinessarchitect.com",
} as const;

/* ── Navigation ─────────────────────────────────────────────────── */
export interface NavItem {
  label: string;
  href:  string;   // in-page anchor
  id:    string;   // section id, used for the active state
  cta?:  boolean;
}

export const navItems: NavItem[] = [
  { label: "Our Approach",          href: "#approach",              id: "approach" },
  { label: "Capabilities",          href: "#capabilities",          id: "capabilities" },
  { label: "Products",              href: "#products",              id: "products" },
  { label: "Business Architecture", href: "#business-architecture", id: "business-architecture" },
  { label: "Contact",               href: "#contact",               id: "contact", cta: true },
];

/* ── 01 Hero ────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "MINDRA Solutions",
  headline: ["Intelligence", "changes the", "equation."],
  sub: site.description,
  ctaPrimary:   { label: "Explore what we do",    href: "#capabilities" },
  ctaSecondary: { label: "Discover our products", href: "#products" },
} as const;

/* ── 02 The problem ─────────────────────────────────────────────── */
export const problem = {
  label:    "The problem",
  headline: "Your business shouldn’t be limited by its size.",
  lead:     "For decades, capability followed size. The specialists, systems and analysis that sharpen a business were built for organizations large enough to afford them. Independent businesses rarely could.",
  ledgerLabel: "What size has historically bought",
  legend: { org: "Large organizations", ind: "Independent businesses" },
  ledger: [
    "Specialist knowledge",
    "Sophisticated systems",
    "Dedicated analysts",
    "Operational resources",
  ],
  turn:  "That equation is changing.",
  close: "The opportunity isn’t to buy more AI tools. It is to combine intelligence differently.",
} as const;

/* ── 03 Our philosophy (the expanded Three-Part Field) ──────────── */
export const philosophy = {
  label:    "Our philosophy",
  headline: "Three forms of intelligence. One stronger business.",
  intro:    "We don’t treat intelligence as software. We treat it as three forms, each essential, architected around what your business actually needs.",
  /* Fixed order, equal weight, one colour. Never reorder, never enlarge one. */
  fields: [
    { label: "Human",          text: "Wisdom, experience, judgment, creativity, relationships.",        adds: "Gives intelligence its direction." },
    { label: "Organizational", text: "Institutional memory, context, history, collective knowledge.",  adds: "Gives it context." },
    { label: "Synthetic",      text: "AI reasoning, analysis, automation, discovery.",                  adds: "Gives it reach." },
  ],
  statement: "Architected together to expand business capability.",
} as const;

/* ── 04 Capabilities ────────────────────────────────────────────── */
export type Availability = "live" | "development";

export const capabilities = {
  label:    "Capabilities",
  headline: "Capabilities that once required scale.",
  intro:    "Four things a smaller business can now do. Each one says plainly where it stands today, and whether it is software or human-led service.",
  legend: [
    { marker: "live" as Availability,        label: "Available today" },
    { marker: "development" as Availability, label: "In development" },
  ],
  items: [
    {
      title: "Find the businesses worth talking to",
      text:  "Identify markets, prospects and opportunities, and know who you are approaching before you reach out.",
      availability: "live" as Availability,
      status: "Available today",
      via:    "ALPA",
      kind:   "Software",
    },
    {
      title: "Make what you know easier to use",
      text:  "Connect information, context and organizational knowledge so the people who need it can find it.",
      availability: "development" as Availability,
      status: "In development",
      via:    "AURA",
      kind:   "Software",
    },
    {
      title: "Decide with evidence and judgment together",
      text:  "Bring evidence, analysis and human judgment to the same table before a decision is made.",
      availability: "live" as Availability,
      status: "Available today",
      via:    "Business Architecture · PING",
      kind:   "Service and software",
    },
    {
      title: "Redesign how your business works",
      text:  "Rethink capabilities, processes and decisions around the intelligence available today, led by people who listen first.",
      availability: "live" as Availability,
      status: "Available today",
      via:    "Business Architecture",
      kind:   "Human-led service",
    },
  ],
} as const;

/* ── 05 Products ────────────────────────────────────────────────── */
export const products = {
  label:    "Products",
  headline: "Two products you can open today.",
  intro:    "PING and ALPA are live. Open them and see for yourself. Everything still being built is labeled that way, below.",
  live: [
    {
      id:     "ping",
      name:   "PING",
      status: "Live",
      line:   "AI-powered commercial diagnostic for online businesses.",
      text:   "PING reads a product page the way an AI shopping assistant does, then shows what to fix first.",
      cta:    { label: "Open PING", href: links.ping },
      caption: "PING, captured from the live site.",
      alt:    "The PING landing page: “Your product is online. But can AI find it?” with a field to paste a product URL.",
    },
    {
      id:     "alpa",
      name:   "ALPA",
      status: "Live",
      line:   "Business discovery, research, and prospect intelligence.",
      text:   "Describe the businesses you want to reach. ALPA finds them, researches them, and shows how to contact them.",
      cta:    { label: "Open ALPA", href: links.alpa },
      caption: "ALPA’s own demonstration view, sample data.",
      alt:    "The ALPA landing page with a demonstration panel listing sample architecture firms in Toronto.",
    },
  ],
  earlier: {
    label: "Earlier in the journey",
    items: [
      {
        name:   "AURA",
        status: "In development",
        line:   "Institutional intelligence platform.",
        text:   "Designed to make an organization’s collective knowledge understandable and usable.",
        marker: "development" as const,
      },
      {
        name:   "NEXA",
        status: "Future concept",
        line:   "Human expertise and problem-solving network.",
        text:   "An early concept for connecting people with the expertise a problem needs. Not yet available.",
        marker: "concept" as const,
      },
    ],
  },
  bridge: { label: "Alongside our software, Business Architecture is human-led work", href: "#business-architecture" },
} as const;

/* ── 06 Business Architecture ───────────────────────────────────── */
export const architecture = {
  label:    "Business Architecture",
  headline: "Don’t replace what works. Architect what comes next.",
  paragraphs: [
    "Most businesses already hold real strengths: people who know the work, knowledge built over years, capabilities that took time to earn. Business Architecture starts there.",
    "It is the human work of redesigning how an organization operates, so it can use what intelligence now makes possible without losing what already makes it good.",
  ],
  human:     "It is human-led. Experienced practitioners listen first, then design around what your business already does well.",
  statement: ["We don’t add AI to yesterday’s business.", "We help architect better ways to operate."],
  cta:       { label: "Talk about business architecture", href: links.contactArchitecture },
  /* The Modern Business Architect: the specialist practice. Described as a
     practice and a service, never as a MINDRA software product. */
  practice: {
    label: "The Modern Business Architect",
    text:  "The specialist practice for Business Architecture. Learn the discipline and explore advisory support. It is advisory work, not software.",
    cta:   { label: "Explore Business Architecture", href: links.modernBusinessArchitect, a11y: "Explore Business Architecture at The Modern Business Architect" },
  },
  /* The drawing: three equal sources join on one bus and resolve into four
     decisions an organization makes. Levels come from the approved copy:
     how it operates, decides, allocates, builds. */
  plan: {
    sources: [
      { label: "Human",          text: "Judgment, experience, creativity, relationships." },
      { label: "Organizational", text: "Knowledge, memory, history, established capability." },
      { label: "Synthetic",      text: "AI, analysis, automation, emerging technology." },
    ],
    levels: ["How it operates", "How it decides", "How it allocates", "How it builds"],
    frame:  "One operating architecture",
    alt:    "An architectural drawing. Three equal sources, human, organizational and synthetic intelligence, descend and join on one line that runs through four levels: how a business operates, decides, allocates and builds. The levels sit inside one frame labelled one operating architecture.",
  },
} as const;

/* ── 07 The invitation ──────────────────────────────────────────── */
export const invitation = {
  headline: "Making small powerful.",
  text:     "The next generation of business capability shouldn’t belong only to the largest organizations.",
  primary:   { label: "Explore our products",    href: "#products" },
  secondary: { label: "Talk about your business", href: links.contact },
} as const;

/* ── Footer ─────────────────────────────────────────────────────── */
export const footer = {
  navLabel: "Explore",
  nav: [
    { label: "Our Approach",          href: "#approach" },
    { label: "Capabilities",          href: "#capabilities" },
    { label: "Products",              href: "#products" },
    { label: "Business Architecture", href: "#business-architecture" },
  ],
  productsLabel: "Live products",
  products: [
    { label: "PING", href: links.ping },
    { label: "ALPA", href: links.alpa },
  ],
  contactLabel: "Contact",
  contact: { label: site.email, href: `mailto:${site.email}` },
  legal: "MINDRA Solutions",
} as const;
