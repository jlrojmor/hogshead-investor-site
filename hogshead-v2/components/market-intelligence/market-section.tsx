'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, Compass, Globe2, LineChart, MapPinned, Radar, Sparkles } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const nodes = [
  { id: 'mx', label: 'Mexico', short: 'MX', x: 30, y: 67, region: 'Origin + custody', size: 74 },
  { id: 'us', label: 'United States', short: 'US', x: 42, y: 46, region: 'Primary demand', size: 94 },
  { id: 'na', label: 'North America', short: 'NA', x: 34, y: 30, region: 'Regional scale', size: 72 },
  { id: 'premium', label: 'Premium Segment', short: 'PR', x: 67, y: 42, region: 'Premiumization', size: 82 },
];

const insightByRegion: Record<string, { role: string; copy: string; signal: string; statIndex: number }> = {
  us: {
    role: 'Primary demand',
    copy: 'Restaurants, retail, private clients, and premium tequila demand concentrate in the U.S. market.',
    signal: 'Strongest near-term exit relevance for aged inventory.',
    statIndex: 0,
  },
  mx: {
    role: 'Origin base',
    copy: 'Protected origin, distillery relationships, custody discipline, and aging infrastructure anchor the supply side.',
    signal: 'Where production legitimacy and barrel aging infrastructure begin.',
    statIndex: 2,
  },
  na: {
    role: 'Regional scale',
    copy: 'North America connects tequila origin, U.S. demand, retail volume, hospitality, and investor exits.',
    signal: 'The cross-border commercial logic of the model.',
    statIndex: 1,
  },
  premium: {
    role: 'Premium layer',
    copy: 'Premiumization is where age, scarcity, story, and bottle presence translate into higher commercial value.',
    signal: 'Upside layer for aged inventory and single-barrel releases.',
    statIndex: 3,
  },
};

function GrowthCurve({ start, end, accent = 'teal' }: { start: number; end: number; accent?: 'teal' | 'gold' }) {
  const color = accent === 'gold' ? '#D88B42' : '#57c5c6';
  return (
    <svg viewBox="0 0 440 150" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`area-${accent}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.45" />
          <stop offset="1" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[28, 62, 96, 130].map((y) => <path key={y} d={`M0 ${y}H440`} stroke="rgba(255,255,255,.10)" />)}
      <path d="M20 126 C74 118 106 104 145 92 C186 79 212 82 248 60 C292 33 334 37 420 18" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d="M20 126 C74 118 106 104 145 92 C186 79 212 82 248 60 C292 33 334 37 420 18 V150H20Z" fill={`url(#area-${accent})`} />
      <circle cx="20" cy="126" r="6" fill={color} />
      <circle cx="420" cy="18" r="7" fill={color} stroke="white" strokeWidth="3" />
      <text x="22" y="145" fill="rgba(255,255,255,.72)" fontSize="13" fontWeight="800">${start}B</text>
      <text x="350" y="28" fill="white" fontSize="18" fontWeight="900">${end}B</text>
    </svg>
  );
}

function MetricCard({ label, value, text, source, basis, compact = false }: { label: string; value: string; text: string; source: string; basis: string; compact?: boolean }) {
  return (
    <div className={`rounded-[24px] bg-white/[0.085] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-xl ${compact ? '' : 'min-h-[170px]'}`}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-aqua">{label}</p>
        <Globe2 className="h-4 w-4 text-gold" />
      </div>
      <strong className="mt-2 block text-[34px] font-black leading-none text-white">{value}</strong>
      <p className="mt-3 text-[12px] font-semibold leading-6 text-white/64">{text}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold text-white/48">
        <span className="rounded-full bg-white/8 px-2.5 py-1">{basis}</span>
        <span className="rounded-full bg-white/8 px-2.5 py-1">{source}</span>
      </div>
    </div>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const activeNode = useMemo(() => nodes.find((node) => node.id === activeId) ?? nodes[1], [activeId]);
  const activeInsight = insightByRegion[activeId];
  const selectedStat = marketStats[activeInsight.statIndex];

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

        <Reveal className="mt-12 overflow-hidden rounded-[46px] bg-[#051923] text-white shadow-[0_42px_140px_rgba(2,62,72,.28)]">
          <div className="relative min-h-[1040px] p-6 md:p-8 xl:min-h-[920px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_48%,rgba(87,197,198,.20),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(216,139,66,.14),transparent_24%),linear-gradient(145deg,#04151d,#062c34_52%,#04161e)]" />
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />

            <div className="relative z-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[36px] bg-black/18 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl">
                <Eyebrow light>Global tequila command center</Eyebrow>
                <h3 className="premium-serif mt-3 text-[52px] leading-[0.9] text-white md:text-[68px]">{active.headline}</h3>
                <p className="mt-5 max-w-3xl text-[17px] font-semibold leading-8 text-white/76">{active.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {active.bullets.map((bullet) => (
                    <span key={bullet} className="inline-flex items-center gap-2 rounded-full bg-white/9 px-4 py-2 text-[12px] font-extrabold text-white/72 ring-1 ring-white/10">
                      <CheckCircle2 className="h-4 w-4 text-gold" /> {bullet}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard compact {...selectedStat} />
                <div className="rounded-[24px] bg-white/[0.085] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-aqua">Selected market role</p>
                    <Radar className="h-4 w-4 text-gold" />
                  </div>
                  <strong className="premium-serif mt-3 block text-[34px] leading-none text-white">{activeInsight.role}</strong>
                  <p className="mt-3 text-[12px] font-semibold leading-6 text-white/64">{activeInsight.signal}</p>
                </div>
                {marketStats.filter((_, i) => i !== activeInsight.statIndex).slice(0, 2).map((stat) => <MetricCard key={stat.label} compact {...stat} />)}
              </div>
            </div>

            <div className="relative z-10 mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[560px] overflow-hidden rounded-[38px] bg-[#061f25] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_48%,rgba(87,197,198,.22),transparent_33%),radial-gradient(circle_at_35%_60%,rgba(216,139,66,.18),transparent_18%)]" />
                <div className="absolute inset-0 opacity-[0.36] [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 600" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#7bc6c7" stopOpacity="0.28" />
                      <stop offset="78%" stopColor="#7bc6c7" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#7bc6c7" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="goldArc" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#D88B42" stopOpacity="0" />
                      <stop offset="0.45" stopColor="#D88B42" stopOpacity="0.95" />
                      <stop offset="1" stopColor="#D88B42" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="420" cy="305" rx="300" ry="245" fill="url(#globeGlow)" />
                  <ellipse cx="420" cy="305" rx="278" ry="220" fill="none" stroke="rgba(255,255,255,.12)" />
                  <ellipse cx="420" cy="305" rx="190" ry="220" fill="none" stroke="rgba(255,255,255,.10)" />
                  <ellipse cx="420" cy="305" rx="95" ry="220" fill="none" stroke="rgba(255,255,255,.08)" />
                  <path d="M142 305H698" stroke="rgba(255,255,255,.10)" />
                  <path d="M165 235H675" stroke="rgba(255,255,255,.08)" />
                  <path d="M180 375H660" stroke="rgba(255,255,255,.08)" />
                  <path d="M292 380C350 310 410 250 518 230" stroke="url(#goldArc)" strokeWidth="5" fill="none" />
                  <path d="M300 370C405 432 536 426 662 380" stroke="url(#goldArc)" strokeWidth="3" fill="none" opacity=".8" />
                  <path d="M260 324C280 270 308 232 352 188" stroke="#57c5c6" strokeWidth="2" fill="none" opacity=".55" />
                </svg>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="rounded-full bg-white/8 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white ring-1 ring-white/14">Mexico → demand markets</div>
                  <div className="hidden rounded-full bg-white/8 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-aqua ring-1 ring-white/14 md:block">Interactive atlas</div>
                </div>

                {nodes.map((node) => (
                  <button
                    key={node.id}
                    onClick={() => setActiveId(node.id)}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    aria-label={node.label}
                  >
                    <span
                      className={`grid place-items-center rounded-full text-[11px] font-black transition duration-300 ${activeId === node.id ? 'bg-gold text-[#211104] shadow-[0_0_0_16px_rgba(216,139,66,.20),0_0_55px_rgba(216,139,66,.88)]' : 'bg-white/13 text-white shadow-[0_0_0_10px_rgba(255,255,255,.05)] ring-1 ring-white/22 backdrop-blur-xl group-hover:bg-white/25'}`}
                      style={{ width: node.size, height: node.size }}
                    >
                      {node.short}
                    </span>
                    <span className="absolute left-1/2 top-[calc(100%+10px)] hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white ring-1 ring-white/10 backdrop-blur-xl md:block">{node.label}</span>
                  </button>
                ))}

                <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[30px] bg-[#061b20]/78 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10),0_24px_70px_rgba(0,0,0,.22)] backdrop-blur-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-2 text-[12px] font-black text-white/78"><MapPinned className="h-4 w-4 text-gold" /> {activeNode.region}</div>
                      <h4 className="premium-serif mt-2 text-[42px] leading-none text-white">{activeNode.label}</h4>
                      <p className="mt-3 text-[14px] font-semibold leading-7 text-white/68">{activeInsight.copy}</p>
                    </div>
                    <a href="#simulator" className="inline-flex items-center justify-between self-end rounded-2xl bg-white px-5 py-4 text-[13px] font-extrabold text-deep transition hover:bg-gold">
                      Connect to economics <ArrowUpRight className="ml-4 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[32px] bg-white/[0.085] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <Eyebrow light>Market size trajectory</Eyebrow>
                      <h4 className="premium-serif mt-2 text-[34px] leading-none text-white">Global value growth</h4>
                    </div>
                    <BarChart3 className="h-6 w-6 text-gold" />
                  </div>
                  <div className="mt-5 h-48"><GrowthCurve start={marketGrowth[0].value} end={marketGrowth[1].value} /></div>
                </div>
                <div className="rounded-[32px] bg-white/[0.085] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <Eyebrow light>Premium tequila segment</Eyebrow>
                      <h4 className="premium-serif mt-2 text-[34px] leading-none text-white">Premium segment growth</h4>
                    </div>
                    <LineChart className="h-6 w-6 text-gold" />
                  </div>
                  <div className="mt-5 h-48"><GrowthCurve start={premiumGrowth[0].value} end={premiumGrowth[1].value} accent="gold" /></div>
                </div>
                <div className="rounded-[32px] bg-white/[0.085] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-xl">
                  <div className="flex gap-3">
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <p className="text-[13px] font-semibold leading-7 text-white/62">The point is not a generic world map. The point is a commercial flow: Mexico as origin, North America as demand, premiumization as value creation, and aged inventory as the monetizable asset.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 rounded-[26px] bg-white/[0.075] p-5 text-[13px] font-semibold leading-7 text-white/58 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl">
              <div className="flex gap-3">
                <Compass className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p>{sourceNote}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
