'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Compass, Globe2, MapPinned } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const atlasNodes = [
  { id: 'mx', label: 'Mexico', short: 'MX', x: 26, y: 64, region: 'Origin & production' },
  { id: 'us', label: 'United States', short: 'US', x: 31, y: 48, region: 'Primary demand' },
  { id: 'na', label: 'North America', short: 'NA', x: 30, y: 34, region: 'Regional scale' },
  { id: 'premium', label: 'Premium Segment', short: 'PR', x: 70, y: 43, region: 'Premiumization' },
];

const briefing: Record<string, string> = {
  us: 'The U.S. is the main commercial focus: restaurants, retail, private clients, and premium tequila demand concentrate here.',
  mx: 'Mexico is the origin and custody layer: protected source, distillery relationships, and aging infrastructure.',
  na: 'North America creates the scale logic: the regional revenue pool supports a focused cross-border strategy.',
  premium: 'Premiumization is the upside layer: age, scarcity, bottle presence, and storytelling support higher-value releases.',
};

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
      <div className="mt-9 rounded-[24px] bg-deep/5 p-5">
        <div className="relative h-24">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-deep/10" />
          <div className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full" style={{ background: color }} />
          <div className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full shadow-[0_0_0_12px_rgba(2,62,72,.06)]" style={{ background: color }} />
          <div className="absolute left-[45%] top-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-deep shadow-soft">trajectory</div>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#60787d]">2024</span>
            <strong className="block text-[30px] text-deep">${start}B</strong>
          </div>
          <div className="text-right">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#60787d]">2030E</span>
            <strong className="block text-[30px] text-deep">${end}B</strong>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const activeNode = useMemo(() => atlasNodes.find((node) => node.id === activeId) ?? atlasNodes[1], [activeId]);

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

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="overflow-hidden rounded-[40px] bg-deep text-white shadow-premium">
            <div className="relative p-7 lg:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.82),rgba(2,62,72,.98)),url('/images/Agave fields 2.png')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_42%,rgba(216,139,66,.20),transparent_22%),radial-gradient(circle_at_70%_40%,rgba(123,198,199,.18),transparent_32%)]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <Eyebrow light>Interactive global atlas</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[44px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/74">{active.description}</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-right backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[34px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_300px]">
                  <div className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/15 bg-[#031f25]/90 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_52%,rgba(216,139,66,.18),transparent_18%),radial-gradient(circle_at_66%_44%,rgba(123,198,199,.14),transparent_28%)]" />
                    <svg viewBox="0 0 1000 620" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="flow" x1="0" x2="1">
                          <stop offset="0" stopColor="rgba(216,139,66,0)" />
                          <stop offset="0.45" stopColor="rgba(216,139,66,.98)" />
                          <stop offset="1" stopColor="rgba(216,139,66,0)" />
                        </linearGradient>
                        <filter id="softGlow">
                          <feGaussianBlur stdDeviation="5" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <g opacity="0.17" stroke="rgba(255,255,255,.28)" strokeWidth="1" fill="none">
                        <path d="M70 310 H930" />
                        <path d="M500 70 V550" />
                        <ellipse cx="500" cy="310" rx="395" ry="206" />
                        <ellipse cx="500" cy="310" rx="272" ry="252" />
                        <ellipse cx="500" cy="310" rx="128" ry="270" />
                      </g>

                      <g fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.12)" strokeWidth="1.2">
                        <path d="M130 176 C170 122 250 112 314 148 C350 169 358 210 330 238 C300 270 230 260 185 238 C154 222 118 204 130 176Z" />
                        <path d="M220 285 C280 260 348 292 370 352 C392 414 340 475 280 452 C235 434 202 340 220 285Z" />
                        <path d="M508 152 C584 100 696 116 750 172 C805 230 764 300 660 292 C570 285 510 230 508 152Z" />
                        <path d="M720 278 C784 244 872 276 902 340 C930 402 872 454 800 424 C750 404 696 332 720 278Z" />
                        <path d="M765 448 C820 430 892 460 900 508 C908 552 842 574 790 542 C750 518 730 466 765 448Z" />
                      </g>

                      <path d="M260 360 C322 288 402 245 545 205" stroke="url(#flow)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
                      <path d="M260 360 C420 370 594 372 738 328" stroke="url(#flow)" strokeWidth="3" fill="none" filter="url(#softGlow)" />
                      <path d="M260 360 C220 392 196 430 166 478" stroke="rgba(216,139,66,.72)" strokeWidth="2.5" fill="none" />
                      <path d="M260 360 C250 258 244 210 225 145" stroke="rgba(123,198,199,.42)" strokeWidth="2" fill="none" />

                      <circle cx={activeNode.x * 10} cy={activeNode.y * 6.2} r="68" fill="rgba(216,139,66,.12)" />
                    </svg>

                    {atlasNodes.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveId(node.id)}
                        className="absolute -translate-x-1/2 -translate-y-1/2 text-left"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      >
                        <span className={`grid h-12 w-12 place-items-center rounded-full border text-[10px] font-black transition ${activeId === node.id ? 'border-gold bg-gold text-[#211104] shadow-[0_0_0_14px_rgba(216,139,66,.20),0_0_42px_rgba(216,139,66,.75)]' : 'border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20'}`}>
                          {node.short}
                        </span>
                      </button>
                    ))}

                    <div className="absolute left-5 top-5 rounded-2xl border border-white/12 bg-black/18 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/52 backdrop-blur-xl">
                      Mexico → Demand markets
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-[#041b20]/88 p-5 backdrop-blur-xl">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-[12px] font-bold text-white/82"><MapPinned className="h-4 w-4 text-gold" /> {activeNode.region}</div>
                          <h4 className="premium-serif mt-2 text-[28px] leading-none text-white">{activeNode.label}</h4>
                          <p className="mt-3 max-w-xl text-[13px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                        </div>
                        <div className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/52">Click a node</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-aqua">Active market</span>
                      <h4 className="premium-serif mt-2 text-[30px] leading-none text-white">{activeNode.label}</h4>
                      <p className="mt-3 text-[13px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                    </div>
                    {active.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl border border-white/12 bg-white/10 p-4 text-[13px] font-bold leading-6 text-white/78 backdrop-blur-xl">
                        <CheckCircle2 className="mb-3 h-4 w-4 text-gold" />
                        {bullet}
                      </div>
                    ))}
                    <a href="#simulator" className="inline-flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-[13px] font-extrabold text-deep">
                      Connect to aging economics <ArrowUpRight className="h-4 w-4" />
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
