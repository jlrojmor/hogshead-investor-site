'use client';

import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowUpRight, CheckCircle2, MapPinned } from 'lucide-react';
import { marketGrowth, marketRegions, marketStats, premiumGrowth, sourceNote } from '@/data/market-data';
import { Eyebrow, Reveal, SectionHeader, Shell } from '../shell';

export function MarketSection() {
  const [activeId, setActiveId] = useState('us');
  const active = marketRegions.find((region) => region.id === activeId) ?? marketRegions[0];

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#eaf5f3] py-24">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="A cleaner investor dashboard: market size, geography, premiumization, and why aged tequila has a different commercial profile."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="overflow-hidden rounded-[34px] bg-deep text-white shadow-premium">
            <div className="relative min-h-[650px] p-7">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.82),rgba(2,62,72,.96)),url('/images/Agave fields 2.png')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_48%,rgba(216,139,66,.22),transparent_22%),radial-gradient(circle_at_70%_45%,rgba(123,198,199,.18),transparent_30%)]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <Eyebrow light>Market command center</Eyebrow>
                    <h3 className="premium-serif mt-3 text-[40px] leading-none text-white">{active.headline}</h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/74">{active.description}</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-right backdrop-blur-xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected insight</span>
                    <strong className="mt-1 block text-[32px] text-white">{active.metric}</strong>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_260px]">
                  <div className="relative min-h-[390px] overflow-hidden rounded-[28px] border border-white/15 bg-[#042f37]/80 backdrop-blur-xl">
                    <div className="absolute inset-8 rounded-[28px] border border-white/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(216,139,66,.16),transparent_20%),radial-gradient(circle_at_62%_42%,rgba(123,198,199,.16),transparent_24%)]" />
                    <svg viewBox="0 0 680 390" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="route" x1="0" x2="1">
                          <stop offset="0" stopColor="rgba(216,139,66,0)" />
                          <stop offset="0.5" stopColor="rgba(216,139,66,.95)" />
                          <stop offset="1" stopColor="rgba(216,139,66,0)" />
                        </linearGradient>
                      </defs>
                      <path d="M135 235 C235 170, 340 155, 470 118" stroke="url(#route)" strokeWidth="2" fill="none" />
                      <path d="M135 235 C280 250, 410 278, 560 252" stroke="url(#route)" strokeWidth="2" fill="none" />
                      <path d="M135 235 C110 250, 92 270, 70 298" stroke="rgba(216,139,66,.7)" strokeWidth="2" fill="none" />
                      <path d="M135 235 C170 95, 230 70, 300 58" stroke="rgba(123,198,199,.35)" strokeWidth="1.5" fill="none" />
                    </svg>
                    {marketRegions.map((region) => (
                      <button key={region.id} onClick={() => setActiveId(region.id)} className="absolute flex items-center gap-3 text-left" style={{ left: region.x, top: region.y }}>
                        <span className={`grid h-9 w-9 place-items-center rounded-full border border-white/20 text-[10px] font-black ${active.id === region.id ? 'bg-gold text-[#211104] shadow-[0_0_0_10px_rgba(216,139,66,.24),0_0_32px_rgba(216,139,66,.85)]' : 'bg-white/10 text-white backdrop-blur-xl'}`}>
                          {region.short.slice(0, 2)}
                        </span>
                        <span className="hidden text-[11px] font-extrabold uppercase tracking-[0.1em] text-white md:inline">{region.label}</span>
                      </button>
                    ))}
                    <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/15 p-4 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-[12px] font-bold text-white/78"><MapPinned className="h-4 w-4 text-gold" /> Mexico origin routes into priority demand pools</div>
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
              <Reveal key={stat.label} delay={index * 0.04} className="rounded-[26px] border border-deep/10 bg-white p-6 shadow-soft">
                <Eyebrow>{stat.label}</Eyebrow>
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

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
            <Eyebrow>Market size trajectory</Eyebrow>
            <h3 className="premium-serif mt-2 text-[32px] text-deep">Global value growth</h3>
            <div className="mt-5 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketGrowth}>
                  <CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={(value) => `$${value}B`} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => [`$${value}B`, 'Market value']} />
                  <Bar dataKey="value" fill="#0B6F72" radius={[10, 10, 0, 0]} barSize={54} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>
          <Reveal className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
            <Eyebrow>Premium tequila segment</Eyebrow>
            <h3 className="premium-serif mt-2 text-[32px] text-deep">Premium segment growth</h3>
            <div className="mt-5 h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={premiumGrowth}>
                  <CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={(value) => `$${value}B`} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => [`$${value}B`, 'Premium segment']} />
                  <Bar dataKey="value" fill="#D88B42" radius={[10, 10, 0, 0]} barSize={54} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5 rounded-[22px] border border-deep/10 bg-white/65 p-5 text-[13px] font-semibold leading-7 text-[#60787d] shadow-soft">
          {sourceNote}
        </Reveal>
      </Shell>
    </section>
  );
}
