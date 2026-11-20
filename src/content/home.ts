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
  { label: "Our Manifesto",         href: "/manifesto",             id: "manifesto" },
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
  headline: "Intelligence, already at work.",
  intro:    "PING and ALPA are available today. Open them, try them, and judge for yourself. Everything still being built is labeled that way, below.",
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
  headline: "Tomorrow’s business won’t be yesterday’s business with more technology.",
  narrative: [
    "The businesses that thrive will rethink how they operate, make decisions, and create value—not simply add new tools to existing processes.",
    "They will combine what people know, what organizations have learned, and what artificial intelligence makes possible.",
  ],
  statement: ["Three forms of intelligence.", "Architected into one more capable business."],
  explanation: [
    "Business Architecture is the discipline of making that transformation possible. It redesigns how a business operates, decides, allocates resources, and evolves—preserving what already works while introducing capabilities that were previously out of reach.",
    "Architecting Intelligence is the approach of deliberately weaving human, organizational, and synthetic intelligence into that operating architecture.",
  ],
  /* The Modern Business Architect: the specialist advisory practice. Described
     as a practice and a service, never as a MINDRA software product. One CTA. */
  practice: {
    label: "The Modern Business Architect",
    text:  "The specialist advisory practice, providing human-led Business Architecture expertise.",
    cta:   { label: "Explore Business Architecture", href: links.modernBusinessArchitect },
  },
  /* The drawing: the three icons of Section 03 send their paths together;
     the paths weave into one beam that carries four pillars, standing on what
     already works. */
  plan: {
    sources:    ["Human", "Organizational", "Synthetic"],
    outcomes:   ["How it operates", "How it decides", "How it allocates", "How it evolves"],
    foundation: "Built on what already works",
    alt:        "A drawing in three stages. At the top, the three icons from the previous section: a brain for human intelligence, a skyline for organizational intelligence and a processor for synthetic intelligence. Their three lines weave together into one, which spreads into a beam. The beam carries four pillars, how a business operates, decides, allocates and evolves, standing on a foundation labelled built on what already works.",
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
    { label: "Our Manifesto",         href: "/manifesto" },
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
