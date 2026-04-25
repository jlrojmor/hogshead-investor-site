'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Compass, Globe2, MapPinned, TrendingUp } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

function GrowthCard({ title, eyebrow, start, end, accent = 'teal' }: { title: string; eyebrow: string; start: number; end: number; accent?: 'teal' | 'gold' }) {
  const pct = Math.min(100, Math.round((start / end) * 100));
  const color = accent === 'gold' ? '#D88B42' : '#0B6F72';
  return (
    <Reveal className="rounded-[30px] border border-deep/10 bg-white p-7 shadow-soft">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-4 flex items-end justify-between gap-5">
        <h3 className="premium-serif text-[34px] leading-none text-deep">{title}</h3>
        <TrendingUp className="h-7 w-7" style={{ color }} />
      </div>
      <div className="mt-8 grid grid-cols-[90px_1fr_90px] items-end gap-4">
        <div>
          <div className="mb-3 text-center text-[13px] font-extrabold text-[#60787d]">2024</div>
          <div className="mx-auto rounded-t-2xl" style={{ height: `${Math.max(58, pct * 1.9)}px`, width: '54px', background: color, opacity: 0.72 }} />
          <strong className="mt-3 block text-center text-[22px] text-deep">${start}B</strong>
        </div>
        <div className="pb-16">
          <div className="relative h-[2px] bg-deep/10">
            <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full" style={{ background: color }} />
            <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full" style={{ background: color }} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-deep px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
              projected
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-center text-[13px] font-extrabold text-[#60787d]">2030E</div>
          <div className="mx-auto rounded-t-2xl" style={{ height: '190px', width: '54px', background: color }} />
          <strong className="mt-3 block text-center text-[22px] text-deep">${end}B</strong>
        </div>
      </div>
    </Reveal>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#eaf5f3] py-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="The market logic is simple: Mexico anchors origin and aging; North America concentrates demand; premiumization creates the reason aged inventory matters."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="overflow-hidden rounded-[38px] bg-deep text-white shadow-premium">
            <div className="relative min-h-[740px] p-7 lg:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.76),rgba(2,62,72,.98)),url('/images/Agave fields 2.png')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_48%,rgba(216,139,66,.26),transparent_22%),radial-gradient(circle_at_70%_42%,rgba(123,198,199,.20),transparent_32%)]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <Eyebrow light>Global demand map</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[44px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/74">{active.description}</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-right backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[34px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_280px]">
                  <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-white/15 bg-[#042f37]/82 backdrop-blur-xl">
                    <div className="absolute inset-8 rounded-[32px] border border-white/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_52%,rgba(216,139,66,.20),transparent_20%),radial-gradient(circle_at_62%_42%,rgba(123,198,199,.16),transparent_24%)]" />
                    <svg viewBox="0 0 760 470" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="routeMarket" x1="0" x2="1">
                          <stop offset="0" stopColor="rgba(216,139,66,0)" />
                          <stop offset="0.45" stopColor="rgba(216,139,66,.95)" />
                          <stop offset="1" stopColor="rgba(216,139,66,0)" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path d="M155 292 C250 175, 320 144, 460 104" stroke="rgba(123,198,199,.35)" strokeWidth="1.5" fill="none" />
                      <path d="M155 292 C290 252, 430 235, 575 175" stroke="url(#routeMarket)" strokeWidth="2.5" fill="none" filter="url(#glow)" />
                      <path d="M155 292 C310 320, 465 342, 640 306" stroke="url(#routeMarket)" strokeWidth="2.5" fill="none" filter="url(#glow)" />
                      <path d="M155 292 C118 320, 92 350, 70 386" stroke="rgba(216,139,66,.65)" strokeWidth="2" fill="none" />
                      <ellipse cx="155" cy="292" rx="74" ry="50" fill="rgba(216,139,66,.10)" />
                      <ellipse cx="300" cy="190" rx="90" ry="54" fill="rgba(123,198,199,.07)" />
                      <ellipse cx="585" cy="250" rx="120" ry="64" fill="rgba(255,255,255,.035)" />
                    </svg>
                    {marketRegions.map((region) => (
                      <button key={region.id} onClick={() => setActiveId(region.id)} className="absolute flex items-center gap-3 text-left" style={{ left: region.x, top: region.y }}>
                        <span className={`grid h-11 w-11 place-items-center rounded-full border border-white/20 text-[10px] font-black transition ${active.id === region.id ? 'bg-gold text-[#211104] shadow-[0_0_0_12px_rgba(216,139,66,.24),0_0_40px_rgba(216,139,66,.85)]' : 'bg-white/10 text-white backdrop-blur-xl hover:bg-white/20'}`}>
                          {region.short.slice(0, 2)}
                        </span>
                        <span className="hidden text-[11px] font-extrabold uppercase tracking-[0.1em] text-white md:inline">{region.label}</span>
                      </button>
                    ))}
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-[12px] font-bold text-white/78"><MapPinned className="h-4 w-4 text-gold" /> Origin routes into premium demand pools</div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Click a market</div>
                    </div>
                  </div>

                  <div className="grid gap-3">
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
          <GrowthCard eyebrow="Market size trajectory" title="Global value growth" start={marketGrowth[0].value} end={marketGrowth[1].value} accent="teal" />
          <GrowthCard eyebrow="Premium tequila segment" title="Premium segment growth" start={premiumGrowth[0].value} end={premiumGrowth[1].value} accent="gold" />
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
