'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, CircleDollarSign, PackageCheck, ShieldCheck, TimerReset } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const pathSteps = [
  { label: 'Commit', detail: 'Capital allocated to tequila inventory', icon: CircleDollarSign },
  { label: 'Custody', detail: 'Tracked inventory under professional oversight', icon: ShieldCheck },
  { label: 'Age', detail: 'Time, scarcity, and category thresholds', icon: TimerReset },
  { label: 'Exit', detail: 'Bulk sale, brand launch, or release program', icon: PackageCheck },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-28">
      <video className="absolute inset-0 h-full w-full object-cover opacity-55" src="/images/Animated Background.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,.96),rgba(251,248,240,.82)_42%,rgba(251,248,240,.44)),radial-gradient(circle_at_78%_34%,rgba(123,198,199,.35),transparent_28%),radial-gradient(circle_at_20%_22%,rgba(216,139,66,.18),transparent_28%)]" />
      <motion.div
        className="absolute -right-32 top-12 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(123,198,199,.22),transparent_64%)] blur-2xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Shell className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_470px]">
        <Reveal>
          <Eyebrow>Premium tequila platform · Mexico + U.S.</Eyebrow>
          <h1 className="premium-serif mt-5 max-w-5xl text-[58px] leading-[0.9] tracking-[-0.045em] text-ink md:text-[92px]">
            Own the barrel. Build the brand. Control the story.
          </h1>
          <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#587074]">
            Hogshead is a tequila platform for structured barrel access, professional custody, aging economics, brand creation, and scarce single-barrel releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-gold px-6 py-3 text-[14px] font-extrabold text-[#211104] shadow-soft">Explore Platform</a>
            <a href="#market" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Market Intelligence</a>
            <a href="#single-barrel" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Single Barrel</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[34px] border border-white/80 bg-white/55 p-5 shadow-premium backdrop-blur-2xl">
          <div className="overflow-hidden rounded-[26px] border border-deep/10 bg-paper/92">
            <div className="relative h-52 bg-[linear-gradient(180deg,rgba(2,62,72,.08),rgba(2,62,72,.48)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_44%,rgba(216,139,66,.28),transparent_32%)]" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                Ownership pathway
              </div>
            </div>
            <div className="p-6">
              <Eyebrow>Platform snapshot</Eyebrow>
              <h3 className="premium-serif mt-3 text-[32px] leading-none text-deep">Two commercial engines. One aging asset.</h3>
              <div className="mt-5 grid gap-3">
                {pathSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.12 }}
                      className="flex items-center gap-4 rounded-2xl border border-deep/10 bg-white p-4"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-deep text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-[15px] font-extrabold text-deep">{step.label}</strong>
                        <span className="text-[12px] font-semibold text-[#60787d]">{step.detail}</span>
                      </div>
                      <Check className="ml-auto h-4 w-4 text-gold" />
                    </motion.div>
                  );
                })}
              </div>
              <a href="#ownership" className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-deep">
                See ownership logic <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
