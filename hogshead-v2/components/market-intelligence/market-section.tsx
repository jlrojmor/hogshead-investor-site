'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, Compass, Globe2, LineChart, MapPinned, PieChart } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const globeNodes = [
  { id: 'mx', label: 'Mexico', short: 'MX', x: 39, y: 57, region: 'Origin & custody' },
  { id: 'us', label: 'United States', short: 'US', x: 42, y: 43, region: 'Primary demand' },
  { id: 'na', label: 'North America', short: 'NA', x: 36, y: 31, region: 'Regional scale' },
  { id: 'premium', label: 'Premium Segment', short: 'PR', x: 68, y: 42, region: 'Premiumization' },
];

const briefing: Record<string, string> = {
  us: 'Restaurants, retail, private clients, and premium tequila demand concentrate in the U.S. market.',
  mx: 'Protected origin, distillery relationships, custody discipline, and aging infrastructure anchor the supply side.',
  na: 'Regional scale supports the cross-border commercial logic between production, aging, and U.S. demand.',
  premium: 'Premiumization is the upside layer where age, scarcity, story, and bottle presence translate into value.',
};

function MiniChart({ variant = 'bar' }: { variant?: 'bar' | 'line' | 'donut' }) {
  if (variant === 'donut') {
    return (
      <div className="relative mx-auto h-20 w-20 rounded-full bg-[conic-gradient(#D88B42_0_34%,#7BC6C7_34%_74%,rgba(255,255,255,.16)_74%_100%)]">
        <div className="absolute inset-5 rounded-full bg-[#071923]" />
      </div>
    );
  }
  if (variant === 'line') {
    return (
      <svg viewBox="0 0 160 70" className="h-20 w-full">
        <path d="M8 58 C35 48 46 54 68 34 C88 18 108 27 126 16 C140 8 150 12 156 6" fill="none" stroke="#D88B42" strokeWidth="3" />
        <path d="M8 64 H156" stroke="rgba(255,255,255,.12)" />
        <path d="M8 42 H156" stroke="rgba(255,255,255,.08)" />
        <path d="M8 20 H156" stroke="rgba(255,255,255,.08)" />
      </svg>
    );
  }
  return (
    <div className="flex h-20 items-end gap-2">
      {[0.35, 0.52, 0.42, 0.68, 0.88, 1].map((h, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-aqua/25">
          <div className="rounded-t-md bg-gold" style={{ height: `${h * 80}px` }} />
        </div>
      ))}
    </div>
  );
}

function BoardPanel({ title, value, icon: Icon, variant }: { title: string; value: string; icon: any; variant: 'bar' | 'line' | 'donut' }) {
  return (
    <div className="rounded-[18px] bg-white/[0.075] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)] backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/50">{title}</span>
        <Icon className="h-4 w-4 text-aqua" />
      </div>
      <strong className="block text-[22px] leading-none text-white">{value}</strong>
      <div className="mt-3"><MiniChart variant={variant} /></div>
    </div>
  );
}

function DesignedGrowthCard({ title, eyebrow, start, end, accent = 'teal' }: { title: string; eyebrow: string; start: number; end: number; accent?: 'teal' | 'gold' }) {
  const color = accent === 'gold' ? '#D88B42' : '#0B6F72';
  const delta = Math.round(((end / start) - 1) * 100);
  return (
    <Reveal className="rounded-[30px] border border-deep/10 bg-white p-7 shadow-soft">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-4 flex items-start justify-between gap-5">
        <h3 className="premium-serif text-[34px] leading-none text-deep">{title}</h3>
        <span className="rounded-full px-3 py-2 text-[12px] font-extrabold text-white" style={{ background: color }}>+{delta}%</span>
      </div>
      <div className="mt-8 grid grid-cols-6 items-end gap-2 rounded-[24px] bg-deep/5 p-5">
        {[0.24, 0.32, 0.42, 0.52, 0.72, 1].map((height, i) => (
          <div key={i} className="flex h-40 items-end rounded-xl bg-white/60 p-1">
            <div className="w-full rounded-lg" style={{ height: `${height * 100}%`, background: color, opacity: i < 3 ? 0.55 : 0.9 }} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between text-deep">
        <div><span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#60787d]">2024</span><strong className="block text-[28px]">${start}B</strong></div>
        <div className="text-right"><span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#60787d]">2030E</span><strong className="block text-[28px]">${end}B</strong></div>
      </div>
    </Reveal>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const activeNode = useMemo(() => globeNodes.find((node) => node.id === activeId) ?? globeNodes[1], [activeId]);

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#eaf5f3] py-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="Mexico anchors origin and aging. North America concentrates demand. Premiumization is the upside layer that makes aged inventory commercially interesting."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
          <Reveal className="overflow-hidden rounded-[40px] bg-[#071923] text-white shadow-premium">
            <div className="relative p-7 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_48%,rgba(0,204,220,.16),transparent_38%),radial-gradient(circle_at_72%_50%,rgba(216,139,66,.14),transparent_28%),linear-gradient(180deg,#071923,#041418)]" />
              <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <Eyebrow light>Global tequila intelligence</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[44px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/72">{active.description}</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5 text-right shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)] backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[34px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="mt-8 rounded-[34px] bg-[#061f29] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
                  <div className="grid gap-4 lg:grid-cols-[190px_1fr_190px]">
                    <div className="grid gap-4">
                      <BoardPanel title="Revenue pool" value="$20.43B" icon={BarChart3} variant="bar" />
                      <BoardPanel title="Growth path" value="$11.5B → $19.8B" icon={LineChart} variant="line" />
                    </div>

                    <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#071923] shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,198,199,.18),transparent_36%),radial-gradient(circle_at_30%_62%,rgba(216,139,66,.18),transparent_24%)]" />
                      <svg viewBox="0 0 760 560" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <radialGradient id="globeFill2" cx="50%" cy="45%" r="55%">
                            <stop offset="0" stopColor="rgba(180,235,238,.30)" />
                            <stop offset="0.55" stopColor="rgba(12,94,105,.22)" />
                            <stop offset="1" stopColor="rgba(255,255,255,.035)" />
                          </radialGradient>
                          <linearGradient id="marketLine2" x1="0" x2="1">
                            <stop offset="0" stopColor="rgba(216,139,66,0)" />
                            <stop offset=".5" stopColor="rgba(216,139,66,1)" />
                            <stop offset="1" stopColor="rgba(216,139,66,0)" />
                          </linearGradient>
                          <filter id="glow2"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                        </defs>
                        <circle cx="380" cy="282" r="214" fill="url(#globeFill2)" stroke="rgba(255,255,255,.16)" strokeWidth="1.3" />
                        <g stroke="rgba(255,255,255,.16)" fill="none">
                          <ellipse cx="380" cy="282" rx="214" ry="74" />
                          <ellipse cx="380" cy="282" rx="214" ry="138" />
                          <ellipse cx="380" cy="282" rx="76" ry="214" />
                          <ellipse cx="380" cy="282" rx="146" ry="214" />
                          <path d="M166 282 H594" />
                          <path d="M380 68 V496" />
                        </g>
                        <g fill="rgba(185,238,241,.25)" stroke="rgba(185,238,241,.18)" strokeWidth="1">
                          <path d="M226 184 C260 138 322 136 362 170 C384 188 380 222 354 238 C312 263 256 250 226 184Z" />
                          <path d="M304 282 C350 270 398 300 410 352 C424 408 376 442 334 418 C298 398 276 315 304 282Z" />
                          <path d="M422 184 C480 142 560 154 592 206 C620 250 574 288 508 278 C464 270 416 234 422 184Z" />
                          <path d="M528 318 C575 292 638 318 650 370 C662 423 610 454 566 418 C534 392 506 350 528 318Z" />
                        </g>
                        <path d="M272 348 C330 260, 402 228, 498 202" stroke="url(#marketLine2)" strokeWidth="3" fill="none" filter="url(#glow2)" />
                        <path d="M272 348 C382 356, 516 354, 636 312" stroke="url(#marketLine2)" strokeWidth="3" fill="none" filter="url(#glow2)" />
                        <path d="M272 348 C242 386, 220 420, 202 466" stroke="rgba(216,139,66,.72)" strokeWidth="2.4" fill="none" />
                      </svg>

                      {globeNodes.map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setActiveId(node.id)}
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${node.x}%`, top: `${node.y}%` }}
                          aria-label={node.label}
                        >
                          <span className={`grid h-12 w-12 place-items-center rounded-full text-[10px] font-black transition ${activeId === node.id ? 'bg-gold text-[#211104] shadow-[0_0_0_14px_rgba(216,139,66,.20),0_0_45px_rgba(216,139,66,.85)]' : 'bg-white/12 text-white ring-1 ring-white/18 backdrop-blur-xl hover:bg-white/20'}`}>{node.short}</span>
                        </button>
                      ))}

                      <div className="absolute left-5 top-5 rounded-2xl bg-black/22 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/62 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl">
                        Mexico → demand markets
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <BoardPanel title="Premium layer" value="$3.12B → $5.18B" icon={PieChart} variant="donut" />
                      <div className="rounded-[18px] bg-white/[0.075] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)] backdrop-blur-xl">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-aqua">Active market</span>
                        <h4 className="premium-serif mt-2 text-[28px] leading-none text-white">{activeNode.label}</h4>
                        <p className="mt-3 text-[12px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 rounded-[24px] bg-white/[0.06] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] md:grid-cols-[1fr_220px]">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] font-bold text-white/82"><MapPinned className="h-4 w-4 text-gold" /> {activeNode.region}</div>
                      <h4 className="premium-serif mt-2 text-[28px] leading-none text-white">{activeNode.label}</h4>
                      <p className="mt-3 max-w-2xl text-[13px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                    </div>
                    <a href="#simulator" className="inline-flex items-center justify-between self-end rounded-2xl bg-white px-4 py-4 text-[13px] font-extrabold text-deep">
                      Connect to economics <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {marketStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.04} className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <Eyebrow>{stat.label}</Eyebrow>
                  <Globe2 className="h-5 w-5 text-gold" />
                </div>
                <strong className="mt-2 block text-[34px] font-extrabold leading-none text-deep">{stat.value}</strong>
                <p className="mt-4 text-[14px] font-semibold leading-7 text-[#60787d]">{stat.text}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold text-[#7c9195]">
                  <span className="rounded-full bg-deep/5 px-3 py-1">{stat.basis}</span>
                  <span className="rounded-full bg-deep/5 px-3 py-1">Source: {stat.source}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <DesignedGrowthCard eyebrow="Market size trajectory" title="Global value growth" start={marketGrowth[0].value} end={marketGrowth[1].value} accent="teal" />
          <DesignedGrowthCard eyebrow="Premium tequila segment" title="Premium segment growth" start={premiumGrowth[0].value} end={premiumGrowth[1].value} accent="gold" />
        </div>

        <Reveal className="mt-6 rounded-[22px] border border-deep/10 bg-white/65 p-5 text-[13px] font-semibold leading-7 text-[#60787d] shadow-soft">
          <div className="flex gap-3">
            <Compass className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <p>{sourceNote}</p>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
