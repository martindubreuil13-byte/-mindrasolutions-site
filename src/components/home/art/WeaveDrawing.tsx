import type { CSSProperties, ReactNode } from "react";
import { d } from "@/components/home/art/motion";
import { HumanGlyph, OrganizationalGlyph, SyntheticGlyph } from "@/components/home/art/IntelligenceSymbols";

/* Business Architecture, as one picture that explains itself.
   At the top, the same three icons as Section 03: a brain, a skyline, a
   processor. Three lines come down from them and braid, crossing over and under
   in turn while the lanes close in, and join into one. That one line spreads
   into a beam, and the beam carries four pillars, how the business operates,
   decides, allocates and evolves, standing on what already works.
   One composition, two proportions (wide from lg up, narrow below). Labels are
   real HTML over the drawing so they stay legible at every width. Copper
   appears once, where the three become one. The drawing runs once when
   scrolled into view and is complete without motion or JavaScript. */

interface Layout {
  W: number; H: number;
  cx: number; dx: number; bundle: number;
  icon: number; iconY: number;
  startY: number; weave: number; stem: number;
  beamGap: number; beamX0: number; beamX1: number;
  pillarX: number[]; pillarW: number; pillarH: number;
  labelY: number; footY: number;
  stroke: number;
}

const WIDE: Layout = {
  W: 1200, H: 706, cx: 600, dx: 400, bundle: 15,
  icon: 150, iconY: 112,
  startY: 204, weave: 226, stem: 40, beamGap: 13, beamX0: 60, beamX1: 1140,
  pillarX: [150, 450, 750, 1050], pillarW: 18, pillarH: 86,
  labelY: 608, footY: 672, stroke: 1.7,
};
const NARROW: Layout = {
  W: 360, H: 684, cx: 180, dx: 120, bundle: 11,
  icon: 100, iconY: 86,
  startY: 150, weave: 266, stem: 34, beamGap: 11, beamX0: 14, beamX1: 346,
  pillarX: [45, 135, 225, 315], pillarW: 14, pillarH: 76,
  labelY: 588, footY: 652, stroke: 1.5,
};

/* The braid. Boundaries down the weave (fraction of its height) and how far
   apart the three lanes are at each. Between boundaries two strands swap lanes
   (an S-curve each, so they cross once, cleanly), while the lanes narrow. */
const BOUNDS = [0, 0.08, 0.3, 0.52, 0.74, 1];
const spacing = (L: Layout) => [L.dx, L.dx, 0.75 * L.dx, 0.525 * L.dx, 0.3 * L.dx, L.bundle];
/* Lane (0 left, 1 middle, 2 right) of each strand at each boundary. Human
   starts left, Organizational in the middle, Synthetic on the right; after
   three swaps they leave in the order Synthetic, Organizational, Human. */
const LANES = [
  [0, 0, 1, 2, 2, 2], // Human
  [1, 1, 0, 0, 1, 1], // Organizational
  [2, 2, 2, 1, 0, 0], // Synthetic
];

function braid(L: Layout, lanes: number[], beamY: number) {
  const S = spacing(L);
  const X = (k: number) => +(L.cx + (lanes[k] - 1) * S[k]).toFixed(1);
  const Y = (k: number) => +(L.startY + BOUNDS[k] * L.weave).toFixed(1);
  let p = `M${X(0)} ${L.startY}`;
  for (let k = 0; k < BOUNDS.length - 1; k++) {
    if (X(k) === X(k + 1)) p += ` L${X(k + 1)} ${Y(k + 1)}`;
    else {
      const mid = +((Y(k) + Y(k + 1)) / 2).toFixed(1);
      p += ` C${X(k)} ${mid} ${X(k + 1)} ${mid} ${X(k + 1)} ${Y(k + 1)}`;
    }
  }
  return `${p} L${X(BOUNDS.length - 1)} ${beamY}`;
}

const fade = (ms: number): CSSProperties => ({ "--dl": `${ms}ms`, "--dur": "800ms" }) as CSSProperties;

function Label({
  L, x, y, tx, ty, delay, className = "", children,
}: { L: Layout; x: number; y: number; tx: string; ty: string; delay: number; className?: string; children: ReactNode }) {
  return (
    <div
      className={`df absolute font-display text-carbon ${className}`}
      style={{
        left: `${((x / L.W) * 100).toFixed(2)}%`,
        top: `${((y / L.H) * 100).toFixed(2)}%`,
        transform: `translate(${tx}, ${ty})`,
        ...fade(delay),
      }}
    >
      {children}
    </div>
  );
}

function Picture({ L }: { L: Layout }) {
  const mergeY = L.startY + L.weave;
  const beamY = mergeY + L.stem;
  const pillarTop = beamY + 2 * L.beamGap;
  const ground = pillarTop + L.pillarH;
  const scale = L.icon / 240;
  const iconStroke = +((L.stroke * 1.05) / scale).toFixed(2);
  const Glyphs = [HumanGlyph, OrganizationalGlyph, SyntheticGlyph];
  const w = L.pillarW;

  return (
    <svg
      viewBox={`0 0 ${L.W} ${L.H}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={L.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className="absolute inset-0 block h-full w-full text-carbon"
    >
      {/* 1 · The three icons, the same artwork as Section 03 */}
      {Glyphs.map((Glyph, i) => (
        <g
          key={i}
          transform={`translate(${L.cx + (i - 1) * L.dx - L.icon / 2} ${L.iconY - L.icon / 2}) scale(${scale.toFixed(4)})`}
          strokeWidth={iconStroke}
        >
          <Glyph t={0.55} />
        </g>
      ))}

      {/* 2 · Their lines braid and become one. Each is laid over the last with a
          Mineral edge, so every crossing reads as over and under. */}
      {LANES.map((lanes, i) => {
        const dPath = braid(L, lanes, beamY);
        return (
          <g key={i}>
            <path d={dPath} pathLength={1} className="dr stroke-mineral" strokeWidth={L.stroke * 5.4} style={d(900 + i * 200, 2400)} />
            <path d={dPath} pathLength={1} className="dr" style={d(900 + i * 200, 2400)} />
          </g>
        );
      })}
      <circle cx={L.cx} cy={mergeY} r={L.stroke * 4} className="dn acc fill-copper" style={d(3000)} />

      {/* 3 · The one line spreads into a beam */}
      {[0, 1, 2].map((k) => {
        const y = beamY + k * L.beamGap;
        return (
          <g key={k}>
            <path d={`M${L.cx} ${y} H${L.beamX0}`} pathLength={1} className="dr" style={d(3500 + k * 110, 1100)} />
            <path d={`M${L.cx} ${y} H${L.beamX1}`} pathLength={1} className="dr" style={d(3500 + k * 110, 1100)} />
          </g>
        );
      })}

      {/* 4 · The beam carries four pillars */}
      {L.pillarX.map((px, i) => (
        <g key={px} className="dg" style={d(4250 + i * 220)}>
          <rect x={px - w / 2} y={pillarTop} width={w} height={L.pillarH} className="fill-mineral" />
          <rect x={px - w / 2 - 6} y={pillarTop} width={w + 12} height={6} className="fill-mineral" />
          <rect x={px - w / 2 - 6} y={ground - 6} width={w + 12} height={6} className="fill-mineral" />
        </g>
      ))}

      {/* 5 · They stand on what already works */}
      <path d={`M${L.beamX0 - 18} ${ground} H${L.beamX1 + 18}`} pathLength={1} className="dr" strokeWidth={L.stroke * 1.4} style={d(5150, 900)} />
      <path d={`M${L.beamX0 - 6} ${ground + 9} H${L.beamX1 + 6}`} pathLength={1} className="dr" strokeOpacity={0.6} style={d(5270, 900)} />
    </svg>
  );
}

export default function WeaveDrawing({
  sources, outcomes, foundation, alt,
}: { sources: readonly string[]; outcomes: readonly string[]; foundation: string; alt: string }) {
  const num = (i: number) => (
    <span className="mb-1 block font-text text-[0.75rem] font-semibold leading-none tracking-[0.12em] text-sage-deep">
      {String(i + 1).padStart(2, "0")}
    </span>
  );

  const render = (L: Layout, narrow: boolean) => (
    <>
      <Picture L={L} />
      {sources.map((s, i) => (
        <Label
          key={s}
          L={L}
          x={L.cx + (i - 1) * L.dx}
          y={narrow ? 26 : 30}
          tx="-50%"
          ty="-100%"
          delay={i * 140}
          className={narrow ? "text-center text-[0.875rem] leading-none" : "text-center text-[1.0625rem] leading-none xl:text-[1.1875rem]"}
        >
          {s}
        </Label>
      ))}
      {outcomes.map((o, i) => (
        <Label
          key={o}
          L={L}
          x={L.pillarX[i]}
          y={L.labelY}
          tx="-50%"
          ty="0"
          delay={4650 + i * 220}
          className={narrow ? "w-[5.2rem] text-center text-[0.875rem] leading-[1.2]" : "whitespace-nowrap text-center text-[1rem] leading-[1.2] xl:text-[1.25rem]"}
        >
          {num(i)}
          {o}
        </Label>
      ))}
      <Label
        L={L}
        x={L.W / 2}
        y={L.footY}
        tx="-50%"
        ty="0"
        delay={5550}
        className="whitespace-nowrap font-text text-[0.75rem] font-semibold uppercase leading-none tracking-[0.12em] text-sage-deep"
      >
        {foundation}
      </Label>
    </>
  );

  return (
    <figure className="m-0" role="img" aria-label={alt}>
      <div aria-hidden className="relative mt-8 hidden w-full lg:block" style={{ aspectRatio: `${WIDE.W} / ${WIDE.H}` }}>
        {render(WIDE, false)}
      </div>
      <div aria-hidden className="relative mx-auto mt-10 w-full max-w-[30rem] lg:hidden" style={{ aspectRatio: `${NARROW.W} / ${NARROW.H}` }}>
        {render(NARROW, true)}
      </div>
    </figure>
  );
}
