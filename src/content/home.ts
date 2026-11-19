/* Public homepage content: hero, navigation, Three-Part Field, footer.
   Source: MINDRA Brand Identity & Experience Playbook V1.0, pp. 20–21. */

export const site = {
  name:        "MINDRA",
  title:       "MINDRA — Intelligence changes the equation",
  description: "We bring human experience, organizational knowledge, and artificial intelligence together to expand what independent businesses can accomplish.",
  email:       "info@mindrasolutions.com",
} as const;

/* Destinations that exist today. Add a page here only when it works. */
const links = {
  products: "/axia",                               // ALPA live, other agents in development
  contact:  `mailto:${site.email}`,
} as const;

export const hero = {
  eyebrow: "MINDRA Solutions",
  headline: ["Intelligence", "changes the", "equation."],
  sub: site.description,
  ctaPrimary:   { label: "Explore MINDRA",         href: "#intelligence" },  // the Three-Part Field on this page
  ctaSecondary: { label: "Discover our products", href: links.products },
} as const;

export interface NavItem {
  label: string;
  href:  string;
  cta?:  boolean;
}

export const navItems: NavItem[] = [
  { label: "Products", href: links.products },
  { label: "Contact",  href: links.contact, cta: true },
];

/* The Three-Part Field. Fixed order, equal weight, one colour. */
export const threePartField = {
  heading: "Three forms of intelligence",
  fields: [
    { label: "Human",          text: "Wisdom, experience, judgment" },
    { label: "Organizational", text: "Memory, context, collective knowledge" },
    { label: "Synthetic",      text: "Reasoning, analysis, discovery" },
  ],
  statement: "Architected together to expand business capability.",
} as const;

export const footer = {
  productsLabel: "Products",
  products: [
    { label: "ALPA", href: "https://alpa.mindrasolutions.com/", external: true  },
    { label: "AXIA", href: "/axia", external: false },
    { label: "AURA", href: "/aura", external: false },
    { label: "NEXA", href: "/nexa", external: false },
  ],
  contactLabel: "Contact",
  contact: { label: site.email, href: links.contact },
  legal: "MINDRA Solutions",
} as const;
