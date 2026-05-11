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
    role:        "The intelligence that remembers.",
    description: "Contextual intelligence that connects signals across your organisation — meetings, emails, decisions — and transforms operational noise into strategic clarity.",
    status:      "In Development",
    statusType:  "dev",
    href:        "/aura",
  },
  {
    layer:       "/ Layer 02",
    name:        "AXIA",
    role:        "The workforce that doesn't sleep.",
    description: "Autonomous AI agents built to execute, not assist. ALPA, the first AXIA agent, is live now — finding enriched business leads in seconds.",
    status:      "Live Now — ALPA",
    statusType:  "live",
    href:        "/axia",
  },
  {
    layer:       "/ Layer 03",
    name:        "NEXA",
    role:        "Human expertise, precisely matched.",
    description: "When a problem requires a human, the right specialist is one click away. A curated network matched by AI to real business outcomes — not keyword searches.",
    status:      "Future Platform",
    statusType:  "dev",
    href:        "/nexa",
  },
];
