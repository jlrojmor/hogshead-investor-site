'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Gem, Layers3, Wine } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const platformProof = [
  { label: 'Own', text: 'Structured access to tequila inventory', icon: Boxes },
  { label: 'Age', text: 'Time, custody, scarcity, and reporting', icon: Layers3 },
  { label: 'Release', text: 'Bulk exit, brand launch, or single barrel', icon: Wine },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-28">
      <video className="absolute inset-0 h-full w-full object-cover opacity-58" src="/images/Animated Background.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,.97),rgba(251,248,240,.84)_40%,rgba(251,248,240,.30)),radial-gradient(circle_at_76%_36%,rgba(123,198,199,.35),transparent_30%),radial-gradient(circle_at_20%_22%,rgba(216,139,66,.18),transparent_28%)]" />
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
            Hogshead is the operating platform for premium tequila ownership, aging strategy, brand creation, and scarce single-barrel releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-gold px-6 py-3 text-[14px] font-extrabold text-[#211104] shadow-soft">Explore Platform</a>
            <a href="#simulator" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Run Aging Model</a>
            <a href="#single-barrel" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Single Barrel</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-[36px] border border-white/80 bg-white/52 p-5 shadow-premium backdrop-blur-2xl">
          <div className="relative overflow-hidden rounded-[28px] border border-deep/10 bg-paper/92 p-6">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-aqua/20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <Eyebrow>Hogshead print</Eyebrow>
                  <h3 className="premium-serif mt-3 max-w-sm text-[38px] leading-[0.94] text-deep">
                    A tequila asset platform, not another bottle story.
                  </h3>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-deep text-white shadow-soft">
                  <Gem className="h-6 w-6 text-gold" />
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {platformProof.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + index * 0.12 }}
                      className="group flex items-center gap-4 rounded-2xl border border-deep/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-deep text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <strong className="block text-[16px] font-extrabold text-deep">{item.label}</strong>
                        <span className="text-[12px] font-semibold text-[#60787d]">{item.text}</span>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-gold opacity-70" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-deep p-5 text-white">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-aqua">Platform thesis</p>
                <p className="mt-3 text-[15px] font-semibold leading-7 text-white/78">
                  The same aging asset can support investor exposure, brand creation, restaurant releases, and private barrel programs.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
