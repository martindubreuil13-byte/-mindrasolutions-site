import { d } from "@/components/home/art/motion";

/* The three forms of intelligence as one family of recognizable icons, drawn
   for MINDRA (no icon set, no stock): a brain, a business skyline and a
   processor. Same 240-unit frame, same footprint, same line weight, Mineral
   on the key surfaces and one small Copper node each, so none is favoured.
   Each is a <Glyph> (a fragment in the 240 frame) so Section 03 and the
   Business Architecture drawing reuse exactly the same artwork.
   They draw in once when scrolled into view (.dr / .dn, see globals.css) and
   are fully drawn without motion or JavaScript. `t` scales the timing. */

type P = { className?: string };
type G = { t?: number };

const BASE = {
  viewBox: "0 0 240 240",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/* ── Human: a brain, two hemispheres ───────────────────────────────── */
const HALF_OUTLINE =
  "M120 48 C104 38 80 38 66 52 C46 52 32 70 36 90 C24 100 22 124 38 134 C34 152 48 172 68 170 C76 188 104 192 114 176 L120 172 Z";
const HALF_FOLDS = [
  "M120 84 C104 84 94 94 98 108 C102 120 114 120 120 118",
  "M36 90 C52 88 62 96 62 110",
  "M62 110 C74 112 82 120 82 130 C82 140 92 142 98 150",
  "M38 134 C56 132 68 140 66 154",
  "M66 52 C76 64 72 76 84 84",
  "M68 170 C78 160 92 160 100 150",
];
const HALF_NODES: [number, number][] = [[62, 110], [66, 154], [84, 84]];

function Hemisphere({ t, mirror }: { t: number; mirror?: boolean }) {
  const o = mirror ? 120 : 0;
  return (
    <g transform={mirror ? "translate(240 0) scale(-1 1)" : undefined}>
      <path d={HALF_OUTLINE} pathLength={1} className="dr" style={d(o, 1500 * t)} />
      {HALF_FOLDS.map((f, i) => (
        <path key={i} d={f} pathLength={1} className="dr" style={d((500 + i * 110 + o) * t, 1000 * t)} />
      ))}
      {HALF_NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3.6} className="dn fill-mineral" style={d((1100 + i * 100 + o) * t)} />
      ))}
    </g>
  );
}

export function HumanGlyph({ t = 1 }: G) {
  return (
    <>
      <Hemisphere t={t} />
      <Hemisphere t={t} mirror />
      <circle cx={120} cy={118} r={6.5} className="dn acc fill-copper" style={d(1500 * t)} />
    </>
  );
}

/* ── Organizational: a business skyline ────────────────────────────── */
const WINDOWS = (xs: number[], ys: number[]) =>
  ys.flatMap((y) => xs.map((x) => [x, y] as [number, number]));
const W_LEFT = WINDOWS([54, 74], [128, 148, 168]);
const W_MID = WINDOWS([109, 125, 141], [74, 94, 114, 134, 154]);
const W_RIGHT = WINDOWS([166, 184], [112, 132, 152]);

export function OrganizationalGlyph({ t = 1 }: G) {
  return (
    <>
      <path d="M32 196 H208" pathLength={1} className="dr" style={d(0, 900 * t)} />
      {/* Three buildings, the tallest in the middle */}
      <rect x={44} y={116} width={52} height={80} className="dy fill-mineral/55" style={d(150 * t)} />
      <rect x={156} y={100} width={44} height={96} className="dy fill-mineral/55" style={d(300 * t)} />
      <rect x={100} y={62} width={52} height={134} className="dy fill-mineral" style={d(450 * t)} />
      {[...W_LEFT, ...W_MID, ...W_RIGHT].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width={8} height={9} className="df" style={d((900 + i * 35) * t, 700 * t)} />
      ))}
      <rect x={118} y={174} width={16} height={22} className="df" style={d(1300 * t, 700 * t)} />
      {/* The mast: where the organization reaches out */}
      <path d="M126 62 V44" pathLength={1} className="dr" style={d(1300 * t, 500 * t)} />
      <circle cx={126} cy={40} r={6} className="dn acc fill-copper" style={d(1550 * t)} />
    </>
  );
}

/* ── Synthetic: a processor ─────────────────────────────────────────── */
const PIN = [86, 106, 134, 154];

export function SyntheticGlyph({ t = 1 }: G) {
  return (
    <>
      {/* Pins first, so the body sits over them */}
      {PIN.map((p, i) => (
        <g key={p} className="df" style={d((900 + i * 80) * t, 700 * t)}>
          <path d={`M${p} 70 V50 M${p} 170 V190 M70 ${p} H50 M170 ${p} H190`} />
          <circle cx={p} cy={46} r={2.6} className="fill-mineral" />
          <circle cx={p} cy={194} r={2.6} className="fill-mineral" />
          <circle cx={46} cy={p} r={2.6} className="fill-mineral" />
          <circle cx={194} cy={p} r={2.6} className="fill-mineral" />
        </g>
      ))}
      <rect x={70} y={70} width={100} height={100} rx={9} pathLength={1} className="dr" style={d(0, 1500 * t)} />
      <rect x={92} y={92} width={56} height={56} rx={4} pathLength={1} className="dr fill-mineral" style={d(450 * t, 1200 * t)} />
      {/* Traces inside the die */}
      <path d="M120 120 H104 V106 M120 120 V138 H136 M120 120 H138 V108" pathLength={1} className="dr" strokeWidth={1.4} style={d(1100 * t, 900 * t)} />
      <circle cx={120} cy={120} r={5.5} className="dn acc fill-copper" style={d(1500 * t)} />
    </>
  );
}

/* ── Stand-alone icons ──────────────────────────────────────────────── */
export function HumanSymbol({ className }: P) {
  return <svg {...BASE} className={className}><HumanGlyph /></svg>;
}
export function OrganizationalSymbol({ className }: P) {
  return <svg {...BASE} className={className}><OrganizationalGlyph /></svg>;
}
export function SyntheticSymbol({ className }: P) {
  return <svg {...BASE} className={className}><SyntheticGlyph /></svg>;
}

/* ── Convergence and the unified mark ─────────────────────────────── */
/* Three lines leave the three columns and run into one. Columns are three
   equal cells, so their centres sit at 1/6, 1/2 and 5/6 of the width. */
export function Convergence({ className }: P) {
  return (
    <svg
      viewBox="0 0 1200 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
      focusable={false}
      className={className}
    >
      <path d="M200 0 V28 C200 90 600 66 600 128" pathLength={1} className="dr" style={d(500, 1700)} />
      <path d="M1000 0 V28 C1000 90 600 66 600 128" pathLength={1} className="dr" style={d(500, 1700)} />
      <path d="M600 0 V128" pathLength={1} className="dr" style={d(500, 1100)} />
      <circle cx={600} cy={128} r={5} className="dn acc fill-copper" style={d(2000)} />
    </svg>
  );
}

/* The same three icons, together in one system: a ring, the three at equal
   distance from a shared centre, each joined to it. */
export function UnifiedMark({ className, delay = 0 }: P & { delay?: number }) {
  const S = 0.42;
  const R = 66;
  const at = (deg: number) => {
    const a = (deg * Math.PI) / 180;
    return [120 + R * Math.cos(a), 120 + R * Math.sin(a)] as [number, number];
  };
  const spots = [at(-90), at(30), at(150)];
  const Glyphs = [HumanGlyph, OrganizationalGlyph, SyntheticGlyph];
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className={className}
    >
      <circle cx={120} cy={120} r={114} pathLength={1} className="dr" strokeOpacity={0.55} style={d(delay, 1600)} />
      {spots.map(([x, y], i) => (
        <path key={i} d={`M120 120 L${x.toFixed(1)} ${y.toFixed(1)}`} pathLength={1} className="dr" style={d(delay + 500 + i * 120, 800)} />
      ))}
      {spots.map(([x, y], i) => {
        const Glyph = Glyphs[i];
        return (
          <g key={i} transform={`translate(${(x - 120 * S).toFixed(1)} ${(y - 120 * S).toFixed(1)}) scale(${S})`} strokeWidth={1.7 / S * 0.7}>
            <circle cx={120} cy={120} r={104} className="fill-sage dy" style={d(delay + 300 + i * 150)} stroke="none" />
            <Glyph t={0.55} />
          </g>
        );
      })}
      <circle cx={120} cy={120} r={6} className="dn acc fill-copper" style={d(delay + 1400)} />
    </svg>
  );
}
