export type StatusType = "live" | "soon" | "dev";

export interface Pillar {
  layer:       string;
  name:        string;
  role:        string;
  description: string;
  status:      string;
  statusType:  StatusType;
  href:        string;
}

export const pillars: Pillar[] = [
  {
    layer:       "/ Layer 01",
    name:        "AURA",
    role:        "The brain that remembers.",
    description: "Contextual intelligence that hears every meeting, reads every email, remembers every decision. A second brain for founders who can't afford a first one.",
    status:      "Coming 2026",
    statusType:  "soon",
    href:        "/aura",
  },
  {
    layer:       "/ Layer 02",
    name:        "AXIA",
    role:        "The workforce that doesn't sleep.",
    description: "Tools are dead. Agents are born. AI workers that don't assist — they execute. Hunting leads, finding businesses, working at a scale no human team could match.",
    status:      "Live Now",
    statusType:  "live",
    href:        "/axia",
  },
  {
    layer:       "/ Layer 03",
    name:        "NEXA",
    role:        "The expert on speed dial.",
    description: "When something needs a human, the right specialist is one click away. A curated network of problem-solvers, ready when it matters most.",
    status:      "In Development",
    statusType:  "dev",
    href:        "/nexa",
  },
];
