'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, Compass, Globe2, LineChart, MapPinned } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const globeNodes = [
  { id: 'mx', label: 'Mexico', short: 'MX', x: 31, y: 59, region: 'Origin & custody' },
  { id: 'us', label: 'United States', short: 'US', x: 34, y: 45, region: 'Primary demand' },
  { id: 'na', label: 'North America', short: 'NA', x: 30, y: 33, region: 'Regional scale' },
  { id: 'premium', label: 'Premium Segment', short: 'PR', x: 71, y: 42, region: 'Premiumization' },
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(0,204,220,.18),transparent_36%),radial-gradient(circle_at_72%_48%,rgba(216,139,66,.16),transparent_28%),linear-gradient(180deg,#071923,#041418)]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:38px_38px]" />

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

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_300px]">
                  <div className="relative min-h-[590px] overflow-hidden rounded-[34px] bg-[#061f29] shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_48%,rgba(0,210,230,.16),transparent_38%),radial-gradient(circle_at_30%_60%,rgba(216,139,66,.18),transparent_24%)]" />
                    <svg viewBox="0 0 980 650" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="globeFill" cx="50%" cy="45%" r="55%">
                          <stop offset="0" stopColor="rgba(123,198,199,.20)" />
                          <stop offset="0.55" stopColor="rgba(12,94,105,.22)" />
                          <stop offset="1" stopColor="rgba(255,255,255,.03)" />
                        </radialGradient>
                        <linearGradient id="marketLine" x1="0" x2="1">
                          <stop offset="0" stopColor="rgba(216,139,66,0)" />
                          <stop offset=".5" stopColor="rgba(216,139,66,1)" />
                          <stop offset="1" stopColor="rgba(216,139,66,0)" />
                        </linearGradient>
                        <filter id="hotGlow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      </defs>

                      <circle cx="420" cy="330" r="235" fill="url(#globeFill)" stroke="rgba(255,255,255,.14)" strokeWidth="1.4" />
                      <g stroke="rgba(255,255,255,.14)" fill="none">
                        <ellipse cx="420" cy="330" rx="235" ry="82" />
                        <ellipse cx="420" cy="330" rx="235" ry="150" />
                        <ellipse cx="420" cy="330" rx="85" ry="235" />
                        <ellipse cx="420" cy="330" rx="160" ry="235" />
                        <path d="M185 330 H655" />
                        <path d="M420 95 V565" />
                      </g>
                      <g fill="rgba(180,235,238,.22)" stroke="rgba(180,235,238,.18)" strokeWidth="1">
                        <path d="M250 220 C286 170 354 166 398 202 C420 220 418 254 388 270 C342 294 282 282 250 220Z" />
                        <path d="M335 312 C386 296 436 330 448 386 C462 446 412 486 364 458 C324 436 304 350 335 312Z" />
                        <path d="M468 220 C532 170 620 186 650 238 C676 286 628 330 554 314 C502 302 462 270 468 220Z" />
                        <path d="M586 346 C638 318 704 344 718 404 C732 462 672 494 626 454 C590 424 560 380 586 346Z" />
                      </g>
                      <path d="M300 382 C364 286, 444 250, 548 220" stroke="url(#marketLine)" strokeWidth="3" fill="none" filter="url(#hotGlow)" />
                      <path d="M300 382 C420 390, 565 390, 695 340" stroke="url(#marketLine)" strokeWidth="3" fill="none" filter="url(#hotGlow)" />
                      <path d="M300 382 C270 416, 240 456, 220 508" stroke="rgba(216,139,66,.75)" strokeWidth="2.5" fill="none" />
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

                    <div className="absolute bottom-5 left-5 right-5 grid gap-4 rounded-[24px] bg-[#041b20]/88 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl md:grid-cols-[1fr_180px]">
                      <div>
                        <div className="flex items-center gap-2 text-[12px] font-bold text-white/82"><MapPinned className="h-4 w-4 text-gold" /> {activeNode.region}</div>
                        <h4 className="premium-serif mt-2 text-[28px] leading-none text-white">{activeNode.label}</h4>
                        <p className="mt-3 max-w-xl text-[13px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                      </div>
                      <div className="grid gap-2 rounded-2xl bg-white/8 p-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/45">Market role</span>
                        <strong className="text-[17px] leading-tight text-white">{activeNode.region}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-[24px] bg-white/10 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-aqua">Active market</span>
                      <h4 className="premium-serif mt-2 text-[30px] leading-none text-white">{activeNode.label}</h4>
                      <p className="mt-3 text-[13px] font-semibold leading-6 text-white/64">{briefing[activeId]}</p>
                    </div>
                    {active.bullets.map((bullet) => (
                      <div key={bullet} className="rounded-2xl bg-white/10 p-4 text-[13px] font-bold leading-6 text-white/78 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)] backdrop-blur-xl">
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
