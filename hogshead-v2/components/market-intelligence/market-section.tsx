'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, BarChart3, ChevronRight, Compass, Globe2, LineChart, MapPinned, Sparkles, TrendingUp, X } from 'lucide-react';
import { marketGrowth, marketRegions, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const nodeLayout: Record<string, { x: number; y: number; halo: number; route?: string }> = {
  mx: { x: 36, y: 61, halo: 82 },
  us: { x: 43, y: 47, halo: 104 },
  na: { x: 39, y: 34, halo: 80 },
  premium: { x: 62, y: 47, halo: 88 },
  global: { x: 69, y: 28, halo: 78 },
};

const statByRegion: Record<string, { label: string; value: string; source: string; support: string; chart: 'market' | 'premium' | 'volume' | 'origin' | 'global' }> = {
  us: {
    label: 'Modeled revenue pool',
    value: '$20.43B',
    source: 'Statista Market Forecast',
    support: 'Primary commercial demand signal: retail, restaurants, private clients, and premium velocity.',
    chart: 'market',
  },
  mx: {
    label: 'Origin market signal',
    value: '$10.29B',
    source: 'Statista Market Forecast',
    support: 'Origin, regulated production, custody infrastructure, and barrel-aging base.',
    chart: 'origin',
  },
  na: {
    label: 'Regional scale',
    value: '$31.00B',
    source: 'Statista Market Forecast',
    support: 'North America concentrates the commercial logic between origin and demand.',
    chart: 'volume',
  },
  premium: {
    label: 'Premium segment',
    value: '$3.12B → $5.18B',
    source: 'Grand View Research',
    support: 'Premiumization is the value layer that makes aging and scarcity commercially relevant.',
    chart: 'premium',
  },
  global: {
    label: 'Global growth path',
    value: '$11.5B → $19.8B',
    source: 'Grand View Research',
    support: 'Global category expansion creates optionality, but exit economics remain concentrated.',
    chart: 'global',
  },
};

function MiniCurve({ accent = '#74d7d2', start = '$11.5B', end = '$19.8B' }: { accent?: string; start?: string; end?: string }) {
  return (
    <svg viewBox="0 0 360 150" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`miniFill-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.38" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[32, 64, 96, 128].map((y) => <path key={y} d={`M16 ${y}H344`} stroke="rgba(255,255,255,.13)" />)}
      <path d="M22 124 C62 115 92 105 122 88 C156 68 190 77 222 51 C260 21 300 26 338 14" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      <path d="M22 124 C62 115 92 105 122 88 C156 68 190 77 222 51 C260 21 300 26 338 14 V150H22Z" fill={`url(#miniFill-${accent.replace('#', '')})`} />
      <circle cx="22" cy="124" r="5" fill={accent} />
      <circle cx="338" cy="14" r="7" fill={accent} stroke="white" strokeWidth="3" />
      <text x="24" y="143" fill="rgba(255,255,255,.72)" fontSize="12" fontWeight="900">{start}</text>
      <text x="284" y="23" fill="white" fontSize="15" fontWeight="900">{end}</text>
    </svg>
  );
}

function RevenueBars() {
  const bars = [38, 54, 46, 72, 88, 96];
  return (
    <div className="flex h-36 items-end gap-3 rounded-[26px] bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
      {bars.map((bar, index) => (
        <div key={index} className="flex flex-1 flex-col items-center gap-2">
          <div className="w-full rounded-t-xl bg-gradient-to-t from-gold to-[#ffd39c] shadow-[0_0_24px_rgba(216,139,66,.18)]" style={{ height: `${bar}%` }} />
          <span className="text-[9px] font-black text-white/42">{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

function SignalRings({ activeId }: { activeId: string }) {
  const stat = statByRegion[activeId];
  if (stat.chart === 'market') return <RevenueBars />;
  if (stat.chart === 'premium') return <MiniCurve accent="#d88b42" start="$3.1B" end="$5.2B" />;
  if (stat.chart === 'global') return <MiniCurve accent="#74d7d2" start={`$${marketGrowth[0].value}B`} end={`$${marketGrowth[1].value}B`} />;
  if (stat.chart === 'origin') {
    return (
      <div className="grid h-36 place-items-center rounded-[26px] bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
        <div className="relative h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(216,139,66,.45),rgba(123,198,199,.12)_42%,transparent_72%)]">
          <div className="absolute inset-3 rounded-full border border-white/18" />
          <div className="absolute inset-8 rounded-full bg-gold/80 shadow-[0_0_36px_rgba(216,139,66,.45)]" />
          <span className="absolute inset-0 grid place-items-center text-[11px] font-black uppercase tracking-[0.15em] text-white">Origin</span>
        </div>
      </div>
    );
  }
  return <MiniCurve accent="#74d7d2" start="$31B" end="Scale" />;
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const activeLayout = useMemo(() => nodeLayout[activeId] ?? nodeLayout.us, [activeId]);
  const stat = statByRegion[activeId];

  return (
    <section id="market" className="bg-gradient-to-b from-sand via-[#edf6f3] to-sand py-28 scroll-mt-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="Select a market layer to see how origin, demand, premiumization, and global growth connect to the aging-asset thesis."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[52px] bg-[#04161d] text-white shadow-[0_50px_150px_rgba(2,62,72,.34)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(91,210,210,.22),transparent_32%),radial-gradient(circle_at_72%_20%,rgba(216,139,66,.14),transparent_24%),linear-gradient(135deg,#020d12,#062c35_58%,#031117)]" />
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:70px_70px]" />
            <motionless-placeholder />
            <div className="relative z-10 grid min-h-[780px] gap-0 lg:grid-cols-[1fr_420px]">
              <div className="relative min-h-[740px] p-6 md:p-10">
                <div className="relative z-20 max-w-3xl rounded-[34px] bg-black/18 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10),0_24px_80px_rgba(0,0,0,.20)] backdrop-blur-xl">
                  <Eyebrow light>Interactive global atlas</Eyebrow>
                  <h3 className="premium-serif mt-3 text-[54px] leading-[0.88] text-white md:text-[76px]">{active.headline}</h3>
                  <p className="mt-5 max-w-2xl text-[17px] font-semibold leading-8 text-white/72">{active.description}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 top-10">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 780" preserveAspectRatio="none">
                    <defs>
                      <radialGradient id="atlasGlobe" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7bc6c7" stopOpacity="0.28" />
                        <stop offset="62%" stopColor="#0f7779" stopOpacity="0.11" />
                        <stop offset="100%" stopColor="#7bc6c7" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="atlasRoute" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#d88b42" stopOpacity="0" />
                        <stop offset="0.48" stopColor="#d88b42" stopOpacity="1" />
                        <stop offset="1" stopColor="#d88b42" stopOpacity="0" />
                      </linearGradient>
                      <filter id="routeGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>
                    <ellipse cx="470" cy="440" rx="355" ry="285" fill="url(#atlasGlobe)" />
                    <ellipse cx="470" cy="440" rx="330" ry="260" fill="none" stroke="rgba(255,255,255,.16)" />
                    <ellipse cx="470" cy="440" rx="230" ry="260" fill="none" stroke="rgba(255,255,255,.10)" />
                    <ellipse cx="470" cy="440" rx="112" ry="260" fill="none" stroke="rgba(255,255,255,.08)" />
                    <path d="M158 440H785" stroke="rgba(255,255,255,.09)" />
                    <path d="M190 350H760" stroke="rgba(255,255,255,.07)" />
                    <path d="M190 532H760" stroke="rgba(255,255,255,.07)" />
                    <path d="M350 560C410 454 485 350 630 308" stroke="url(#atlasRoute)" strokeWidth="5" fill="none" filter="url(#routeGlow)" />
                    <path d="M345 560C450 626 610 612 760 548" stroke="url(#atlasRoute)" strokeWidth="3" fill="none" opacity=".9" filter="url(#routeGlow)" />
                    <path d="M350 560C378 482 398 412 430 338" stroke="#74d7d2" strokeWidth="2" fill="none" opacity=".5" />
                  </svg>

                  {marketRegions.map((region) => {
                    const layout = nodeLayout[region.id] ?? nodeLayout.us;
                    const isActive = region.id === activeId;
                    return (
                      <button
                        key={region.id}
                        onClick={() => setActiveId(region.id)}
                        className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none transition duration-300 focus:outline-none"
                        style={{ left: `${layout.x}%`, top: `${layout.y}%` }}
                        aria-label={region.label}
                      >
                        <span
                          className={`grid place-items-center rounded-full text-[12px] font-black uppercase tracking-[0.08em] transition duration-300 ${
                            isActive
                              ? 'bg-gold text-[#1b0f04] shadow-[0_0_0_18px_rgba(216,139,66,.18),0_0_70px_rgba(216,139,66,.95)]'
                              : 'bg-white/12 text-white shadow-[0_0_0_10px_rgba(255,255,255,.05)] ring-1 ring-white/24 backdrop-blur-xl hover:bg-white/22'
                          }`}
                          style={{ width: layout.halo, height: layout.halo }}
                        >
                          {region.short}
                        </span>
                        <span className="absolute left-1/2 top-[calc(100%+12px)] hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white shadow-lg ring-1 ring-white/10 backdrop-blur-xl md:block">
                          {region.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="absolute bottom-8 left-6 right-6 z-40 rounded-[34px] bg-[#03171c]/82 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10),0_28px_80px_rgba(0,0,0,.28)] backdrop-blur-2xl md:left-10 md:right-auto md:w-[620px]">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-[12px] font-black text-white/78"><MapPinned className="h-4 w-4 text-gold" /> Active market layer</div>
                      <h4 className="premium-serif mt-2 text-[44px] leading-none text-white">{active.label}</h4>
                      <p className="mt-3 max-w-xl text-[14px] font-semibold leading-7 text-white/68">{stat.support}</p>
                    </div>
                    <button className="hidden rounded-full bg-white/10 p-2 text-white/70 md:block" onClick={() => setActiveId('us')} aria-label="Reset active market">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full bg-white/8 px-3 py-2 text-[11px] font-extrabold text-white/70 ring-1 ring-white/10">{bullet}</span>
                    ))}
                  </div>
                  <a href="#simulator" className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-[12px] font-black text-deep transition hover:bg-gold">
                    Connect to economics <ArrowUpRight className="ml-3 h-4 w-4" />
                  </a>
                </div>
              </div>

              <aside className="relative z-20 border-t border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl lg:border-l lg:border-t-0 lg:p-8">
                <div className="sticky top-28 space-y-5">
                  <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)]">
                    <Eyebrow light>{stat.label}</Eyebrow>
                    <strong className="mt-3 block text-[48px] font-black leading-none text-white">{stat.value}</strong>
                    <p className="mt-4 text-[14px] font-semibold leading-7 text-white/66">{active.description}</p>
                    <div className="mt-5 rounded-full bg-white/8 px-4 py-2 text-[11px] font-black text-white/54 ring-1 ring-white/10">Source: {stat.source}</div>
                  </div>

                  <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)]">
                    <div className="flex items-center justify-between gap-4">
                      <Eyebrow light>Selected signal</Eyebrow>
                      {stat.chart === 'premium' ? <TrendingUp className="h-5 w-5 text-gold" /> : <BarChart3 className="h-5 w-5 text-gold" />}
                    </div>
                    <div className="mt-5 h-44"><SignalRings activeId={activeId} /></div>
                  </div>

                  <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)]">
                    <Eyebrow light>Select another layer</Eyebrow>
                    <div className="mt-4 grid gap-2">
                      {marketRegions.map((region) => (
                        <button
                          key={region.id}
                          onClick={() => setActiveId(region.id)}
                          className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-[13px] font-black transition ${activeId === region.id ? 'bg-gold text-[#211104]' : 'bg-white/7 text-white/72 hover:bg-white/13'}`}
                        >
                          {region.label}<ChevronRight className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="relative z-10 border-t border-white/10 px-8 py-5 text-[12px] font-semibold leading-6 text-white/46">
              <div className="flex gap-3"><Compass className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <span>{sourceNote}</span></div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
