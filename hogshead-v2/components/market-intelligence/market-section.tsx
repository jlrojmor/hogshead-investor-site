'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Compass, Globe2, MapPinned } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const nodes = [
  { id: 'mx', label: 'Mexico', short: 'MX', x: 39, y: 59, region: 'Origin & custody' },
  { id: 'us', label: 'United States', short: 'US', x: 43, y: 44, region: 'Primary demand' },
  { id: 'na', label: 'North America', short: 'NA', x: 36, y: 32, region: 'Regional scale' },
  { id: 'premium', label: 'Premium Segment', short: 'PR', x: 68, y: 42, region: 'Premiumization' },
];

const briefing: Record<string, string> = {
  us: 'Restaurants, retail, private clients, and premium tequila demand concentrate in the U.S. market.',
  mx: 'Protected origin, distillery relationships, custody discipline, and aging infrastructure anchor the supply side.',
  na: 'Regional scale supports the cross-border commercial logic between production, aging, and U.S. demand.',
  premium: 'Premiumization is the upside layer where age, scarcity, story, and bottle presence translate into value.',
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
      <div className="mt-8 overflow-hidden rounded-[24px] bg-deep/5 p-5">
        <svg viewBox="0 0 540 180" className="h-44 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`g-${accent}`} x1="0" x2="1">
              <stop offset="0" stopColor={color} stopOpacity="0.20" />
              <stop offset="1" stopColor={color} stopOpacity="0.90" />
            </linearGradient>
          </defs>
          <path d="M12 150 H528" stroke="rgba(2,62,72,.12)" />
          <path d="M12 110 H528" stroke="rgba(2,62,72,.08)" />
          <path d="M12 70 H528" stroke="rgba(2,62,72,.08)" />
          <path d="M12 150 C80 134 125 140 185 98 C250 52 310 68 372 45 C435 20 488 22 528 12" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
          <path d="M12 150 C80 134 125 140 185 98 C250 52 310 68 372 45 C435 20 488 22 528 12 V170 H12Z" fill={`url(#g-${accent})`} opacity="0.35" />
        </svg>
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
  const activeNode = useMemo(() => nodes.find((node) => node.id === activeId) ?? nodes[1], [activeId]);

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#eaf5f3] py-28 scroll-mt-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="Mexico anchors origin and aging. North America concentrates demand. Premiumization is the upside layer that makes aged inventory commercially interesting."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.22fr_0.78fr]">
          <Reveal className="overflow-hidden rounded-[40px] bg-[#071923] text-white shadow-premium">
            <div className="relative min-h-[760px] overflow-hidden p-0">
              <img src="/images/market-command-board.svg" alt="Global tequila market command board" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,24,.12),rgba(4,16,24,.38))]" />

              <div className="relative z-10 flex min-h-[760px] flex-col justify-between p-7 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="max-w-2xl rounded-[28px] bg-black/20 p-5 backdrop-blur-md ring-1 ring-white/10">
                    <Eyebrow light>Global tequila intelligence</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[44px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 text-[15px] leading-8 text-white/76">{active.description}</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5 text-right shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)] backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[34px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                  {nodes.map((node) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveId(node.id)}
                      className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      aria-label={node.label}
                    >
                      <span className={`grid h-12 w-12 place-items-center rounded-full text-[10px] font-black transition ${activeId === node.id ? 'bg-gold text-[#211104] shadow-[0_0_0_14px_rgba(216,139,66,.20),0_0_45px_rgba(216,139,66,.85)]' : 'bg-white/12 text-white ring-1 ring-white/18 backdrop-blur-xl hover:bg-white/20'}`}>{node.short}</span>
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 rounded-[28px] bg-[#041b20]/82 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)] backdrop-blur-xl md:grid-cols-[1fr_220px]">
                  <div>
                    <div className="flex items-center gap-2 text-[12px] font-bold text-white/82"><MapPinned className="h-4 w-4 text-gold" /> {activeNode.region}</div>
                    <h4 className="premium-serif mt-2 text-[34px] leading-none text-white">{activeNode.label}</h4>
                    <p className="mt-3 max-w-2xl text-[14px] font-semibold leading-7 text-white/68">{briefing[activeId]}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {active.bullets.map((bullet) => (
                        <span key={bullet} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[11px] font-extrabold text-white/76 ring-1 ring-white/10">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="#simulator" className="inline-flex items-center justify-between self-end rounded-2xl bg-white px-4 py-4 text-[13px] font-extrabold text-deep">
                    Connect to economics <ArrowUpRight className="h-4 w-4" />
                  </a>
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
