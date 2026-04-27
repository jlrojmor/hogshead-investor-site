'use client';

import { useState } from 'react';
import { ArrowUpRight, BarChart3, ChevronRight, Compass, Globe2, MapPinned, TrendingUp } from 'lucide-react';
import { marketGrowth, marketRegions, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const mapNodes: Record<string, { x: number; y: number; size: number; label: string }> = {
  mx: { x: 25, y: 58, size: 64, label: 'Mexico / Origin' },
  us: { x: 28, y: 44, size: 76, label: 'United States / Demand' },
  na: { x: 24, y: 35, size: 58, label: 'North America' },
  premium: { x: 61, y: 45, size: 62, label: 'Premium Layer' },
  global: { x: 74, y: 33, size: 58, label: 'Global Growth' },
};

const statByRegion: Record<string, { label: string; value: string; source: string; support: string; chart: 'market' | 'premium' | 'origin' | 'global' | 'regional' }> = {
  us: {
    label: 'U.S. demand signal',
    value: '$20.43B',
    source: 'Statista Market Forecast',
    support: 'Commercial demand is concentrated where premium tequila has retail velocity, restaurant relevance, collectors, and private-release buyers.',
    chart: 'market',
  },
  mx: {
    label: 'Origin market signal',
    value: '$10.29B',
    source: 'Statista Market Forecast',
    support: 'Mexico is not just geography. It is protected origin, production legitimacy, custody infrastructure, and the physical aging base.',
    chart: 'origin',
  },
  na: {
    label: 'Regional scale',
    value: '$31.00B',
    source: 'Statista Market Forecast',
    support: 'North America connects origin and demand: Mexican production, U.S. category economics, and credible commercial exit paths.',
    chart: 'regional',
  },
  premium: {
    label: 'Premium segment',
    value: '$3.12B → $5.18B',
    source: 'Grand View Research',
    support: 'Premiumization is the upside layer. Age, scarcity, bottle presence, and story make the same liquid economically more interesting over time.',
    chart: 'premium',
  },
  global: {
    label: 'Global growth path',
    value: '$11.5B → $19.8B',
    source: 'Grand View Research',
    support: 'The category is globalizing, but the investment thesis is selective: origin matters, demand pools matter, and premium markets matter most.',
    chart: 'global',
  },
};

function TrendCurve({ accent = '#74d7d2', start, end }: { accent?: string; start: string; end: string }) {
  return (
    <svg viewBox="0 0 380 160" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`trendFill-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.42" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 62, 94, 126].map((y) => <path key={y} d={`M12 ${y}H368`} stroke="rgba(255,255,255,.13)" />)}
      <path d="M20 132 C58 120 94 112 128 88 C160 66 196 78 226 54 C260 28 304 30 360 16" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      <path d="M20 132 C58 120 94 112 128 88 C160 66 196 78 226 54 C260 28 304 30 360 16 V160H20Z" fill={`url(#trendFill-${accent.replace('#', '')})`} />
      <circle cx="20" cy="132" r="5" fill={accent} />
      <circle cx="360" cy="16" r="7" fill={accent} stroke="white" strokeWidth="3" />
      <text x="20" y="152" fill="rgba(255,255,255,.70)" fontSize="12" fontWeight="900">{start}</text>
      <text x="300" y="26" fill="white" fontSize="15" fontWeight="900">{end}</text>
    </svg>
  );
}

function SignalVisual({ activeId }: { activeId: string }) {
  const stat = statByRegion[activeId];
  if (stat.chart === 'premium') return <TrendCurve accent="#d88b42" start={`$${premiumGrowth[0].value}B`} end={`$${premiumGrowth[1].value}B`} />;
  if (stat.chart === 'global') return <TrendCurve accent="#74d7d2" start={`$${marketGrowth[0].value}B`} end={`$${marketGrowth[1].value}B`} />;
  if (stat.chart === 'market') {
    const bars = [40, 58, 52, 76, 90, 100];
    return (
      <div className="flex h-full items-end gap-3 rounded-[26px] bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
        {bars.map((bar, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-2">
            <div className="w-full rounded-t-xl bg-gradient-to-t from-gold to-[#ffd39c] shadow-[0_0_24px_rgba(216,139,66,.18)]" style={{ height: `${bar}%` }} />
            <span className="text-[9px] font-black text-white/42">{index + 1}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid h-full place-items-center rounded-[26px] bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
      <div className="relative h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(216,139,66,.50),rgba(116,215,210,.16)_44%,transparent_74%)]">
        <div className="absolute inset-2 rounded-full border border-white/18" />
        <div className="absolute inset-8 rounded-full bg-gold/80 shadow-[0_0_42px_rgba(216,139,66,.48)]" />
        <span className="absolute inset-0 grid place-items-center text-[11px] font-black uppercase tracking-[0.15em] text-white">{stat.chart === 'origin' ? 'Origin' : 'Scale'}</span>
      </div>
    </div>
  );
}

function WorldMap({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="relative h-[620px] overflow-hidden rounded-[40px] bg-[#031820] shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,rgba(116,215,210,.22),transparent_35%),radial-gradient(circle_at_30%_55%,rgba(216,139,66,.16),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.24] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:64px_64px]" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="continentGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="landFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7fc9ca" stopOpacity="0.34" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="goldRoute" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#d88b42" stopOpacity="0" />
            <stop offset="0.48" stopColor="#d88b42" stopOpacity="1" />
            <stop offset="1" stopColor="#d88b42" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#84d7d8" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#84d7d8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="500" cy="315" rx="420" ry="245" fill="url(#mapGlow)" />
        <ellipse cx="500" cy="315" rx="430" ry="255" fill="none" stroke="rgba(255,255,255,.12)" />
        <ellipse cx="500" cy="315" rx="300" ry="255" fill="none" stroke="rgba(255,255,255,.08)" />
        <ellipse cx="500" cy="315" rx="150" ry="255" fill="none" stroke="rgba(255,255,255,.07)" />
        <path d="M90 315H910M125 245H875M135 385H865" stroke="rgba(255,255,255,.08)" />

        {/* Stylized world land masses: intentionally abstract, but recognizable. */}
        <path d="M145 160 C200 120 300 112 360 156 C396 182 390 226 358 252 C321 282 334 330 290 350 C238 374 190 334 178 292 C166 250 104 232 145 160Z" fill="url(#landFill)" stroke="rgba(255,255,255,.16)" filter="url(#continentGlow)" />
        <path d="M275 344 C333 358 352 414 330 470 C310 526 258 540 226 500 C198 464 204 410 232 378 C244 364 256 352 275 344Z" fill="url(#landFill)" stroke="rgba(255,255,255,.14)" filter="url(#continentGlow)" />
        <path d="M478 172 C548 128 676 132 766 190 C846 244 836 338 756 360 C676 382 622 316 548 326 C486 334 410 280 428 222 C435 198 452 184 478 172Z" fill="url(#landFill)" stroke="rgba(255,255,255,.16)" filter="url(#continentGlow)" />
        <path d="M542 330 C594 316 654 360 664 428 C674 496 620 530 574 494 C532 460 506 380 542 330Z" fill="url(#landFill)" stroke="rgba(255,255,255,.14)" filter="url(#continentGlow)" />
        <path d="M742 372 C796 368 834 404 858 458 C878 504 846 536 806 510 C766 486 728 426 742 372Z" fill="url(#landFill)" stroke="rgba(255,255,255,.13)" filter="url(#continentGlow)" />
        <path d="M790 155 C830 146 872 170 884 205 C896 240 850 250 812 230 C780 212 762 166 790 155Z" fill="url(#landFill)" stroke="rgba(255,255,255,.12)" filter="url(#continentGlow)" />

        <path d="M286 362 C350 304 420 246 560 210" stroke="url(#goldRoute)" strokeWidth="5" fill="none" />
        <path d="M286 362 C430 444 614 428 788 360" stroke="url(#goldRoute)" strokeWidth="3" fill="none" opacity=".85" />
        <path d="M286 362 C306 294 324 244 356 190" stroke="#74d7d2" strokeWidth="2" fill="none" opacity=".55" />
      </svg>

      <div className="absolute left-6 top-6 z-20 rounded-full bg-white/8 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white ring-1 ring-white/12 backdrop-blur-xl">
        Mexico → demand markets
      </div>
      <div className="absolute right-6 top-6 z-20 rounded-full bg-white/8 px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-aqua ring-1 ring-white/12 backdrop-blur-xl">
        Click a region
      </div>

      {marketRegions.map((region) => {
        const point = mapNodes[region.id] ?? mapNodes.us;
        const isActive = activeId === region.id;
        return (
          <button
            key={region.id}
            onClick={() => onSelect(region.id)}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            aria-label={region.label}
          >
            <span
              className={`grid place-items-center rounded-full text-[12px] font-black uppercase tracking-[0.06em] transition duration-300 ${
                isActive
                  ? 'bg-gold text-[#1b0f04] shadow-[0_0_0_18px_rgba(216,139,66,.18),0_0_70px_rgba(216,139,66,.90)]'
                  : 'bg-[#0b2c34]/82 text-white ring-1 ring-white/24 shadow-[0_0_0_10px_rgba(255,255,255,.045)] backdrop-blur-xl hover:bg-white/20'
              }`}
              style={{ width: point.size, height: point.size }}
            >
              {region.short}
            </span>
            <span className="absolute left-1/2 top-[calc(100%+12px)] hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white ring-1 ring-white/12 backdrop-blur-xl md:block">
              {point.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const stat = statByRegion[activeId] ?? statByRegion.us;

  return (
    <section id="market" className="bg-gradient-to-b from-sand via-[#edf6f3] to-sand py-28 scroll-mt-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="Click the atlas to move between origin, demand, regional scale, premiumization, and global category growth."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[52px] bg-[#04161d] text-white shadow-[0_50px_150px_rgba(2,62,72,.34)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_48%,rgba(91,210,210,.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(216,139,66,.12),transparent_22%),linear-gradient(135deg,#020d12,#062c35_58%,#031117)]" />
            <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px]" />

            <div className="relative z-10 grid gap-8 p-6 md:p-8 xl:grid-cols-[1fr_390px]">
              <div className="space-y-6">
                <div className="rounded-[34px] bg-black/18 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10),0_24px_80px_rgba(0,0,0,.20)] backdrop-blur-xl md:p-8">
                  <Eyebrow light>Interactive global atlas</Eyebrow>
                  <h3 className="premium-serif mt-3 text-[48px] leading-[0.9] text-white md:text-[72px]">{active.headline}</h3>
                  <p className="mt-5 max-w-3xl text-[16px] font-semibold leading-8 text-white/72">{active.description}</p>
                </div>

                <WorldMap activeId={activeId} onSelect={setActiveId} />
              </div>

              <aside className="space-y-5 xl:pt-2">
                <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Eyebrow light>{stat.label}</Eyebrow>
                      <strong className="mt-3 block text-[46px] font-black leading-none text-white">{stat.value}</strong>
                    </div>
                    <Globe2 className="h-5 w-5 text-gold" />
                  </div>
                  <p className="mt-5 text-[14px] font-semibold leading-7 text-white/68">{stat.support}</p>
                  <div className="mt-5 rounded-full bg-white/8 px-4 py-2 text-[11px] font-black text-white/54 ring-1 ring-white/10">Source: {stat.source}</div>
                </div>

                <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <Eyebrow light>Selected signal</Eyebrow>
                    {stat.chart === 'premium' || stat.chart === 'global' ? <TrendingUp className="h-5 w-5 text-gold" /> : <BarChart3 className="h-5 w-5 text-gold" />}
                  </div>
                  <div className="mt-5 h-44"><SignalVisual activeId={activeId} /></div>
                </div>

                <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-2xl">
                  <div className="flex items-center gap-2 text-[12px] font-black text-white/74"><MapPinned className="h-4 w-4 text-gold" /> Active market layer</div>
                  <h4 className="premium-serif mt-3 text-[38px] leading-none text-white">{active.label}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full bg-white/8 px-3 py-2 text-[11px] font-extrabold text-white/70 ring-1 ring-white/10">{bullet}</span>
                    ))}
                  </div>
                  <a href="#simulator" className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-[12px] font-black text-deep transition hover:bg-gold">
                    Connect to economics <ArrowUpRight className="ml-3 h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-[34px] bg-white/[0.09] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,.11)] backdrop-blur-2xl">
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
