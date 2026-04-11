# MINDRA — Landing Platform

Production Next.js codebase for mindrasolutions.com.  
Stack: **Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion**

---

## Project structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   ├── globals.css           # Brand tokens, utilities, body effects
│   ├── page.tsx              # Landing page
│   ├── axia/page.tsx         # AXIA dedicated page (ALGA + ALPA)
│   ├── aura/page.tsx         # AURA page
│   ├── nexa/page.tsx         # NEXA page
│   ├── join/page.tsx         # Movement application form
│   └── api/
│       ├── join/route.ts     # Join form → nodemailer
│       ├── aura-beta/        # AURA beta applications
│       └── nexa-access/      # NEXA access requests
├── components/
│   ├── Logo.tsx
│   ├── Button.tsx
│   ├── TagPill.tsx
│   ├── Nav.tsx
│   ├── SectionLabel.tsx
│   ├── PillarCard.tsx
│   ├── LandingAgentCard.tsx  # Simple card (landing only)
│   ├── AgentCard.tsx         # Rich card (email capture, live links)
│   └── sections/
│       ├── Hero.tsx
│       ├── VisionSection.tsx
│       ├── WorkforceSection.tsx
│       ├── AxiaProofSection.tsx
│       ├── ManifestoSection.tsx
│       └── Footer.tsx
└── content/
    ├── copy.ts               # All editable copy (single source of truth)
    └── pillars.ts            # AURA / AXIA / NEXA data
```

---

## Brand tokens

Defined once in `src/app/globals.css` via Tailwind v4's `@theme {}` block.  
Each token generates the corresponding Tailwind utility classes automatically.

### Colors

| Token | Value | Tailwind class examples |
|---|---|---|
| `--color-bg` | `#06101F` | `bg-bg`, `text-bg` |
| `--color-bg-card` | `#0F1B2D` | `bg-bg-card` |
| `--color-bg-card-2` | `#0B1424` | `bg-bg-card-2` |
| `--color-ink` | `#E8F1FF` | `text-ink` |
| `--color-ink-mute` | `#8A9BB8` | `text-ink-mute` |
| `--color-ink-dim` | `#5A6E8C` | `text-ink-dim` |
| `--color-blue` | `#4F7DF7` | `bg-blue`, `text-blue` |
| `--color-cyan` | `#00D4FF` | `bg-cyan`, `text-cyan`, `border-cyan` |
| `--color-purple` | `#A78BFA` | `bg-purple`, `text-purple` |
| `--color-teal` | `#00E5A0` | `bg-teal`, `text-teal` |
| `--color-line` | `rgba(79,125,247,0.18)` | `border-line` |
| `--color-line-soft` | `rgba(79,125,247,0.08)` | `border-line-soft` |

> `blue`, `cyan`, `purple`, `teal` add a base (flat) variant alongside Tailwind's built-in
> scale. `text-cyan-400` still resolves to the original Tailwind value — the scale is intact.

### Typography

| Token | Source | Tailwind class |
|---|---|---|
| `--font-sans` | Inter (via `next/font/google`) | `font-sans` |
| `--font-mono` | JetBrains Mono (via `next/font/google`) | `font-mono` |

### Brand gradient

The gradient runs `#4F7DF7 → #00D4FF → #A78BFA` at 90°. Two ready-made utilities:

```html
<!-- Background fill -->
<div class="bg-brand-gradient" />

<!-- Text clip -->
<span class="text-brand-gradient">MINDRA</span>
```

For the animated button (gradient position shifts on hover), use the `.btn-gradient` CSS
class defined in `@layer components`:

```html
<button class="btn-gradient rounded-full px-8 py-3 text-white font-semibold">
  Label
</button>
```

### Atmospheric body effects

`body::before` (radial glows) and `body::after` (grid overlay) are in `globals.css` and
render on every page at `z-index: 1–2`. All page content must sit at `z-[3]` or higher.

---

## Component API

### `<Logo size? />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `34` | Width and height in px |

```tsx
<Logo size={40} />
```

---

### `<Button href variant? arrow? external? className? />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link target |
| `variant` | `"primary" \| "ghost"` | `"primary"` | Visual style |
| `arrow` | `boolean` | `true` | Appends `→` that translates on hover |
| `external` | `boolean` | `false` | Renders `<a target="_blank">` instead of `<Link>` |
| `className` | `string` | `""` | Extra Tailwind classes |

```tsx
// Internal primary
<Button href="/join">Join the Movement</Button>

// External ghost, no arrow
<Button href="https://..." external variant="ghost" arrow={false}>
  Try Scout Free
</Button>
```

---

### `<TagPill pulse? />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `pulse` | `boolean` | `false` | Shows an animated teal dot before the text |

```tsx
<TagPill pulse>A Manifesto in Motion</TagPill>
<TagPill>Layer 02</TagPill>
```

---

### `<SectionLabel />`

Renders the numbered label + trailing gradient line. Pass the label as `children`.

```tsx
<SectionLabel>03 / New Section</SectionLabel>
```

---

### `<PillarCard pillar />`

| Prop | Type | Description |
|---|---|---|
| `pillar` | `Pillar` | Object from `src/content/pillars.ts` |

Reads `layer`, `name`, `role`, `description`, `status`, `statusType`, and `href` from the
pillar object. Icons are keyed on `name` — add a new icon entry in `PillarCard.tsx` when
adding a new pillar (see below).

---

### `<LandingAgentCard avatar name tagline description />`

| Prop | Type | Description |
|---|---|---|
| `avatar` | `string` | Single character in the gradient badge |
| `name` | `string` | Agent name |
| `tagline` | `string` | Short coloured descriptor |
| `description` | `string` | Body text |

Used only in `AxiaProofSection` (landing page). For richer agent cards with live links and
early access forms, see `AgentCard.tsx` or the inline `AxiaAgentCard` in `axia/page.tsx`.

---

### `<Nav />`

Client component. Reads `usePathname()` to decide link targets:

- On `/` → hash anchors: `#vision`, `#workforce`, `#axia`, `#join`
- On any other route → `/#vision`, `/#workforce`, `/#axia`; "Join" links to `/join`

Hamburger appears below `md` (768 px), slides in/out with Framer Motion.

---

## Editing copy

All visible text lives in `src/content/copy.ts` — the single source of truth.  
Edit a string, save the file, done. No component files need to change.

```ts
// src/content/copy.ts
export const copy = {
  hero: {
    tag: "A Manifesto in Motion",  // TagPill text above the headline
    headline: {
      line1: "The world gave SMEs",
      grad:  "a slingshot.",        // the gradient word
      light: "The giants brought missiles.",
    },
    sub:  "MINDRA is the rebellion...",
    ctaPrimary:   "Join the Movement",
    ctaSecondary: "Try Our Lead Gen Tools",
  },
  // vision, workforce, axiaProof, manifesto, footer, join ...
};
```

---

## How to add a new Pillar

A pillar is one of the three backbone layers (AURA / AXIA / NEXA).

**Step 1 — Add data** in `src/content/pillars.ts`:

```ts
{
  layer:       "/ Layer 04",
  name:        "FLUX",           // must be unique; also used as the icon key
  role:        "Short tagline.",
  description: "One-paragraph description.",
  status:      "In Development",
  statusType:  "dev",            // "live" | "soon" | "dev"
  href:        "/flux",
}
```

`statusType` controls the badge:
- `"live"` → teal pulsing dot
- `"soon"` → plain outline badge
- `"dev"`  → plain outline badge

**Step 2 — Add an icon** in `src/components/PillarCard.tsx`:

```tsx
const FluxIcon = () => (
  <svg className="w-7 h-7 text-cyan" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* paths */}
  </svg>
);

// Register it:
const icons: Record<string, React.ReactNode> = {
  AURA: <AuraIcon />,
  AXIA: <AxiaIcon />,
  NEXA: <NexaIcon />,
  FLUX: <FluxIcon />,   // ← add this line
};
```

**Step 3 — Create the route** at `src/app/flux/page.tsx` (a stub with Nav + Footer is fine).

The landing page pillar grid rebuilds itself from the array — no further changes needed.

---

## How to add a new Agent

Agents live inside AXIA. Adding one touches two files.

**Step 1 — Landing page preview** (`src/content/copy.ts`):

```ts
axiaProof: {
  agents: [
    { avatar: "A", name: "ALGA", tagline: "...", description: "..." },
    { avatar: "A", name: "ALPA", tagline: "...", description: "..." },
    { avatar: "M", name: "MARA", tagline: "...", description: "..." },  // ← new
  ],
},
```

`AxiaProofSection` maps over this array automatically. If you add a third agent, also update
the grid in `src/components/sections/AxiaProofSection.tsx` from `md:grid-cols-2` to
`md:grid-cols-3`.

**Step 2 — Full card on `/axia`** (`src/app/axia/page.tsx`):

```tsx
<AxiaAgentCard
  name="MARA"
  status="dev"                        // "live" renders CTA buttons; "dev" renders the early-access form
  tagline="She plans, creates, executes."
  description="Marketing agent. ..."
  // For live agents only:
  // liveLinks={[
  //   { href: "https://...", label: "Try MARA", primary: true },
  //   { href: "https://...", label: "Explore MARA" },
  // ]}
/>
```

Live agents get link buttons. Dev agents automatically show an early access email form that
submits to `/api/aura-beta`.

---

## Environment variables

Required in `.env.local` for form submissions:

```env
SMTP_HOST=
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=
MAIL_FROM=noreply@mindrasolutions.com
MAIL_TO=martin@mindrasolutions.com
```

---

## Development

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
npx tsc --noEmit   # type-check without building
```
