'use client';

import { useState } from 'react';
import { ArrowUpRight, Droplets, Flame, PackageCheck, Sparkles } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from '../shell';

const stages = [
  {
    name: 'Blanco',
    months: '0–2 months',
    color: '#E7F4EF',
    text: 'Clean agave base before meaningful barrel influence.',
    image: '/images/blanco.png',
    commercial: 'Liquid foundation',
    proof: 'Bright agave profile',
  },
  {
    name: 'Reposado',
    months: '2+ months',
    color: '#D59A38',
    text: 'Early oak, spice, vanilla, and softer edges.',
    image: '/images/reposado.png',
    commercial: 'First aging threshold',
    proof: 'Oak begins to matter',
  },
  {
    name: 'Añejo',
    months: '12+ months',
    color: '#A96022',
    text: 'Deeper wood, caramel, dried fruit, and complexity.',
    image: '/images/anejo.png',
    commercial: 'Premium category shift',
    proof: 'Longer time in barrel',
  },
  {
    name: 'Extra Añejo',
    months: '36+ months',
    color: '#6A3017',
    text: 'Scarcity, depth, and premium shelf positioning.',
    image: '/images/extra-anejo.png',
    commercial: 'Scarce commercial asset',
    proof: 'Limited inventory pool',
  },
];

const drivers = [
  { label: 'Time threshold', text: 'Category changes are tied to aging milestones.', icon: Sparkles },
  { label: 'Angel share', text: 'Liters decline while scarcity increases.', icon: Droplets },
  { label: 'Barrel profile', text: 'Oak, proof, and warehouse conditions shape value.', icon: Flame },
  { label: 'Exit format', text: 'Bulk sale, brand launch, or release program.', icon: PackageCheck },
];

export function AgingJourney() {
  const [active, setActive] = useState(stages[1]);

  return (
    <section id="aging" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(216,139,66,.12),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(123,198,199,.18),transparent_28%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Aging journey</Eyebrow>
              <h2 className="premium-serif mt-3 max-w-4xl text-[50px] leading-[0.94] text-deep md:text-[68px]">
                Time turns tequila into a scarce commercial asset.
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-8 text-[#60787d]">
              The value story is not only flavor. It is category thresholds, shrinking available liters, aging discipline, and the commercial optionality created by time.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[430px_1fr]">
          <Reveal className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/78 p-7 shadow-premium backdrop-blur-xl">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl" style={{ background: `${active.color}66` }} />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <Eyebrow>{active.months}</Eyebrow>
                  <h3 className="premium-serif mt-2 text-[48px] leading-none text-deep">{active.name}</h3>
                </div>
                <span className="rounded-full border border-deep/10 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#60787d]">
                  Active stage
                </span>
              </div>

              <div className="mt-8 grid place-items-center rounded-[30px] border border-deep/10 bg-paper/80 py-8">
                <img src={active.image} alt={active.name} className="h-[250px] w-auto object-contain drop-shadow-[0_28px_48px_rgba(2,62,72,.16)]" />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-deep/10 bg-white p-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-teal">Commercial role</span>
                  <strong className="mt-2 block text-[20px] leading-tight text-deep">{active.commercial}</strong>
                </div>
                <div className="rounded-2xl border border-deep/10 bg-white p-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-teal">Why it matters</span>
                  <strong className="mt-2 block text-[20px] leading-tight text-deep">{active.proof}</strong>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal className="rounded-[34px] bg-deep p-6 text-white shadow-premium">
              <div className="grid gap-3 md:grid-cols-4">
                {stages.map((stage, index) => (
                  <button
                    key={stage.name}
                    onClick={() => setActive(stage)}
                    className={`rounded-[22px] border p-4 text-left transition hover:-translate-y-0.5 ${active.name === stage.name ? 'border-gold bg-white text-deep' : 'border-white/15 bg-white/10 text-white'}`}
                  >
                    <div className="mb-5 h-1.5 rounded-full" style={{ background: stage.color }} />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] opacity-60">Stage {index + 1}</span>
                    <strong className="mt-2 block premium-serif text-[26px] leading-none">{stage.name}</strong>
                    <span className="mt-3 block text-[12px] font-bold opacity-70">{stage.months}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {drivers.map((driver, index) => {
                const Icon = driver.icon;
                return (
                  <Reveal key={driver.label} delay={index * 0.04} className="rounded-[26px] border border-deep/10 bg-white p-6 shadow-soft">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-deep text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-[17px] font-extrabold text-deep">{driver.label}</h4>
                    <p className="mt-3 text-[14px] font-semibold leading-7 text-[#60787d]">{driver.text}</p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-deep/10 bg-white/70 p-5 shadow-soft backdrop-blur-xl">
              <p className="max-w-2xl text-[14px] font-semibold leading-7 text-[#60787d]">
                The simulator below translates this same journey into an estimated value range using liters remaining and resale-price scenarios.
              </p>
              <a href="#simulator" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white">
                Open simulator <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
