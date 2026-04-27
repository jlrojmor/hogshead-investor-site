'use client';

import { useState } from 'react';
import { ArrowUpRight, Droplets, Flame, PackageCheck, Sparkles, TimerReset } from 'lucide-react';
import { motion } from 'framer-motion';
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
    value: 18,
    scarcity: 8,
  },
  {
    name: 'Reposado',
    months: '2+ months',
    color: '#D59A38',
    text: 'Early oak, spice, vanilla, and softer edges.',
    image: '/images/reposado.png',
    commercial: 'First aging threshold',
    proof: 'Oak begins to matter',
    value: 38,
    scarcity: 22,
  },
  {
    name: 'Añejo',
    months: '12+ months',
    color: '#A96022',
    text: 'Deeper wood, caramel, dried fruit, and complexity.',
    image: '/images/anejo.png',
    commercial: 'Premium category shift',
    proof: 'Longer time in barrel',
    value: 64,
    scarcity: 52,
  },
  {
    name: 'Extra Añejo',
    months: '36+ months',
    color: '#6A3017',
    text: 'Scarcity, depth, and premium shelf positioning.',
    image: '/images/extra-anejo.png',
    commercial: 'Scarce commercial asset',
    proof: 'Limited inventory pool',
    value: 92,
    scarcity: 84,
  },
];

const drivers = [
  { label: 'Time threshold', text: 'Category changes are tied to aging milestones.', icon: Sparkles },
  { label: 'Angel share', text: 'Liters decline while scarcity increases.', icon: Droplets },
  { label: 'Barrel profile', text: 'Oak, proof, and warehouse conditions shape value.', icon: Flame },
  { label: 'Exit format', text: 'Bulk sale, brand launch, or release program.', icon: PackageCheck },
];

export function AgingJourney() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = stages[activeIndex];

  return (
    <section id="aging" className="relative overflow-hidden bg-[#f7f2e8] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(216,139,66,.14),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(123,198,199,.20),transparent_30%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Aging journey</Eyebrow>
              <h2 className="premium-serif mt-3 max-w-4xl text-[54px] leading-[0.9] text-deep md:text-[76px]">
                Watch the asset change with time.
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-8 text-[#60787d]">
              Aging moves tequila from fresh liquid into scarce commercial inventory — category by category, month by month, barrel by barrel.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-[40px] border border-white/80 bg-white/65 p-5 shadow-premium backdrop-blur-2xl">
          <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
            <Reveal className="relative overflow-hidden rounded-[34px] bg-deep p-7 text-white">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.62),rgba(2,62,72,.96)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-70" />
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl" style={{ background: `${active.color}66` }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-aqua">{active.months}</p>
                    <h3 className="premium-serif mt-2 text-[52px] leading-none text-white">{active.name}</h3>
                  </div>
                  <div className="grid h-13 w-13 place-items-center rounded-full border border-white/20 bg-white/10 p-4 text-gold">
                    <TimerReset className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-8 grid place-items-center rounded-[30px] border border-white/15 bg-white/8 py-8 backdrop-blur-xl">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.name}
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="h-[260px] w-auto object-contain drop-shadow-[0_28px_58px_rgba(0,0,0,.34)]"
                  />
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/48">Commercial role</span>
                    <strong className="mt-2 block text-[22px] leading-tight text-white">{active.commercial}</strong>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/48">Why it matters</span>
                    <strong className="mt-2 block text-[22px] leading-tight text-white">{active.proof}</strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal className="rounded-[34px] bg-white p-6 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <Eyebrow>Stage timeline</Eyebrow>
                    <h3 className="premium-serif mt-2 text-[34px] leading-none text-deep">Category thresholds create the story</h3>
                  </div>
                  <a href="#simulator" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white">
                    Open simulator <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative mt-8 grid gap-3 md:grid-cols-4">
                  <div className="absolute left-0 right-0 top-[42px] hidden h-[2px] bg-deep/10 md:block" />
                  <motion.div className="absolute left-0 top-[42px] hidden h-[2px] bg-gold md:block" animate={{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }} transition={{ duration: 0.45 }} />
                  {stages.map((stage, index) => (
                    <button
                      key={stage.name}
                      onClick={() => setActiveIndex(index)}
                      className={`relative rounded-[24px] border p-5 text-left transition hover:-translate-y-0.5 ${active.name === stage.name ? 'border-gold bg-[#fff8ed]' : 'border-deep/10 bg-white'}`}
                    >
                      <span className={`relative z-10 mb-5 grid h-10 w-10 place-items-center rounded-full border ${active.name === stage.name ? 'border-gold bg-gold text-[#211104]' : 'border-deep/10 bg-paper text-deep'}`}>{index + 1}</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#60787d]">{stage.months}</span>
                      <strong className="mt-2 block premium-serif text-[28px] leading-none text-deep">{stage.name}</strong>
                      <p className="mt-3 text-[13px] font-semibold leading-6 text-[#60787d]">{stage.text}</p>
                    </button>
                  ))}
                </div>
              </Reveal>

              <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                <Reveal className="rounded-[30px] bg-deep p-6 text-white shadow-soft">
                  <Eyebrow light>Asset pressure</Eyebrow>
                  <h4 className="premium-serif mt-3 text-[34px] leading-none text-white">Scarcity rises while liters decline.</h4>
                  <div className="mt-7 space-y-5">
                    {[
                      ['Value signal', active.value],
                      ['Scarcity signal', active.scarcity],
                    ].map(([label, value]) => (
                      <div key={label as string}>
                        <div className="mb-2 flex justify-between text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/50"><span>{label}</span><span>{value}%</span></div>
                        <div className="h-3 rounded-full bg-white/10"><motion.div className="h-3 rounded-full bg-gold" animate={{ width: `${value}%` }} transition={{ duration: 0.5 }} /></div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <div className="grid gap-3 sm:grid-cols-2">
                  {drivers.map((driver, index) => {
                    const Icon = driver.icon;
                    return (
                      <Reveal key={driver.label} delay={index * 0.04} className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-deep text-gold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-[15px] font-extrabold text-deep">{driver.label}</h4>
                        <p className="mt-2 text-[13px] font-semibold leading-6 text-[#60787d]">{driver.text}</p>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
