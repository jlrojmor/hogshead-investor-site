'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Compass, Globe2, MapPinned, TrendingUp } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

const mapNodes = [
  { id: 'mx', label: 'Mexico', x: 31, y: 58 },
  { id: 'us', label: 'United States', x: 34, y: 46 },
  { id: 'na', label: 'North America', x: 31, y: 36 },
  { id: 'premium', label: 'Premium Segment', x: 71, y: 45 },
];

const zoneCopy: Record<string, string> = {
  us: 'Demand, retail volume, restaurants, private releases, and premiumization concentrate here.',
  mx: 'Protected origin, production relationships, and aging infrastructure anchor the platform.',
  na: 'The regional revenue pool explains why North America drives commercial logic.',
  premium: 'Premiumization turns age, scarcity, and presentation into the upside layer.',
};

function GrowthCard({ title, eyebrow, start, end, accent = 'teal' }: { title: string; eyebrow: string; start: number; end: number; accent?: 'teal' | 'gold' }) {
  const pct = Math.min(100, Math.round((start / end) * 100));
  const color = accent === 'gold' ? '#D88B42' : '#0B6F72';
  const delta = Math.round(((end / start) - 1) * 100);
  return (
    <Reveal className="rounded-[30px] border border-deep/10 bg-white p-7 shadow-soft">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-4 flex items-end justify-between gap-5">
        <h3 className="premium-serif text-[34px] leading-none text-deep">{title}</h3>
        <div className="rounded-full px-3 py-2 text-[12px] font-extrabold text-white" style={{ background: color }}>+{delta}%</div>
      </div>
      <div className="mt-8 grid grid-cols-[90px_1fr_90px] items-end gap-4">
        <div>
          <div className="mb-3 text-center text-[13px] font-extrabold text-[#60787d]">2024</div>
          <div className="mx-auto rounded-t-2xl shadow-[inset_0_0_16px_rgba(255,255,255,.22)]" style={{ height: `${Math.max(58, pct * 1.9)}px`, width: '54px', background: color, opacity: 0.72 }} />
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
          <div className="mx-auto rounded-t-2xl shadow-[inset_0_0_16px_rgba(255,255,255,.22)]" style={{ height: '190px', width: '54px', background: color }} />
          <strong className="mt-3 block text-center text-[22px] text-deep">${end}B</strong>
        </div>
      </div>
    </Reveal>
  );
}

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];
  const activeNode = useMemo(() => mapNodes.find((node) => node.id === activeId) ?? mapNodes[1], [activeId]);

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

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
          <Reveal className="overflow-hidden rounded-[40px] bg-deep text-white shadow-premium">
            <div className="relative min-h-[790px] p-7 lg:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.76),rgba(2,62,72,.98)),url('/images/Agave fields 2.png')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_48%,rgba(216,139,66,.24),transparent_22%),radial-gradient(circle_at_70%_42%,rgba(123,198,199,.20),transparent_32%)]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <Eyebrow light>Global market intelligence</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[44px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/74">{active.description}</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-right backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[34px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_290px]">
                  <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-white/15 bg-[#031f25]/86 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_52%,rgba(216,139,66,.18),transparent_20%),radial-gradient(circle_at_66%_44%,rgba(123,198,199,.14),transparent_30%)]" />
                    <svg viewBox="0 0 900 560" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="goldFlow" x1="0" x2="1">
                          <stop offset="0" stopColor="rgba(216,139,66,0)" />
                          <stop offset="0.45" stopColor="rgba(216,139,66,.95)" />
                          <stop offset="1" stopColor="rgba(216,139,66,0)" />
                        </linearGradient>
                        <filter id="marketGlow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <g opacity="0.32" fill="rgba(255,255,255,.09)" stroke="rgba(255,255,255,.08)" strokeWidth="1">
                        <path d="M100 170 C140 120 220 112 270 150 C300 173 280 220 230 225 C180 232 130 216 100 170Z" />
                        <path d="M210 250 C265 240 340 255 360 315 C380 375 325 430 270 410 C220 390 190 310 210 250Z" />
                        <path d="M460 142 C535 95 640 116 685 172 C725 220 690 275 610 268 C540 262 475 222 460 142Z" />
                        <path d="M675 250 C720 228 785 245 812 292 C840 340 800 390 742 382 C695 376 657 308 675 250Z" />
                        <path d="M720 392 C765 382 820 405 830 450 C840 490 792 512 748 492 C710 474 692 415 720 392Z" />
                      </g>

                      <g opacity="0.18" stroke="rgba(255,255,255,.28)" strokeWidth="1" fill="none">
                        <path d="M50 280 H850" />
                        <path d="M450 60 V500" />
                        <ellipse cx="450" cy="280" rx="330" ry="178" />
                        <ellipse cx="450" cy="280" rx="230" ry="210" />
                        <ellipse cx="450" cy="280" rx="118" ry="226" />
                      </g>

                      <path d="M280 315 C340 245, 440 218, 555 180" stroke="url(#goldFlow)" strokeWidth="3" fill="none" filter="url(#marketGlow)" />
                      <path d="M280 315 C430 320, 570 336, 710 310" stroke="url(#goldFlow)" strokeWidth="3" fill="none" filter="url(#marketGlow)" />
                      <path d="M280 315 C240 342, 218 372, 190 415" stroke="rgba(216,139,66,.72)" strokeWidth="2.5" fill="none" />
                      <path d="M280 315 C272 230, 260 180, 245 125" stroke="rgba(123,198,199,.42)" strokeWidth="2" fill="none" />

                      <circle cx={activeNode.x * 9} cy={activeNode.y * 5.6} r="54" fill="rgba(216,139,66,.12)" />
                    </svg>

                    {mapNodes.map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveId(node.id)}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      >
                        <span className={`grid h-12 w-12 place-items-center rounded-full border text-[10px] font-black transition ${activeId === node.id ? 'border-gold bg-gold text-[#211104] shadow-[0_0_0_14px_rgba(216,139,66,.20),0_0_42px_rgba(216,139,66,.75)]' : 'border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20'}`}>
                          {node.id === 'premium' ? 'PR' : node.id.toUpperCase()}
                        </span>
                        <span className={`mt-2 hidden rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] md:block ${activeId === node.id ? 'bg-white text-deep' : 'bg-black/20 text-white/70'}`}>{node.label}</span>
                      </button>
                    ))}

                    <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-black/25 p-5 backdrop-blur-xl">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-[12px] font-bold text-white/78"><MapPinned className="h-4 w-4 text-gold" /> Origin routes into premium demand pools</div>
                          <p className="mt-3 max-w-xl text-[13px] font-semibold leading-6 text-white/60">{zoneCopy[activeId]}</p>
                        </div>
                        <div className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Click a market</div>
                      </div>
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
