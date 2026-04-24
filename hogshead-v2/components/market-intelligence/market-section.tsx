'use client';

import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
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

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="rounded-[32px] bg-deep p-7 text-white shadow-premium">
            <Eyebrow light>Interactive market map</Eyebrow>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="premium-serif text-[36px] leading-none text-white">{active.headline}</h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/72">{active.description}</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-right backdrop-blur-xl">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">Selected market</span>
                <strong className="mt-1 block text-[28px] text-white">{active.metric}</strong>
              </div>
            </div>

            <div className="relative mt-7 min-h-[360px] overflow-hidden rounded-[26px] border border-white/15 bg-[radial-gradient(circle_at_50%_50%,rgba(123,198,199,.24),transparent_58%)]">
              <div className="absolute inset-8 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%)]" />
              <div className="absolute left-[23%] top-[44%] h-[2px] w-[285px] origin-left rotate-[-14deg] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
              <div className="absolute left-[24%] top-[52%] h-[2px] w-[435px] origin-left rotate-[8deg] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
              {marketRegions.map((region) => (
                <button key={region.id} onClick={() => setActiveId(region.id)} className="absolute flex items-center gap-3 text-left" style={{ left: region.x, top: region.y }}>
                  <span className={`h-4 w-4 rounded-full ${active.id === region.id ? 'bg-gold shadow-[0_0_0_10px_rgba(216,139,66,.24),0_0_32px_rgba(216,139,66,.85)]' : 'bg-gold/80 shadow-[0_0_0_7px_rgba(216,139,66,.14)]'}`} />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">{region.short}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {active.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-white/12 bg-white/8 p-4 text-[13px] font-bold leading-6 text-white/78">
                  {bullet}
                </div>
              ))}
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
