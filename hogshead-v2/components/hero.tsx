'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Layers3, Sparkles, Wine } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const platformProof = [
  { label: 'Own', text: 'Structured access to tequila inventory', icon: Boxes },
  { label: 'Age', text: 'Professional custody, time, scarcity, and reporting', icon: Layers3 },
  { label: 'Release', text: 'Bulk exit, brand launch, or single-barrel program', icon: Wine },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#061f25] pt-28 text-white">
      <video className="absolute inset-0 h-full w-full object-cover opacity-62" src="/images/Animated Background.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,34,40,.94),rgba(2,34,40,.74)_42%,rgba(251,248,240,.08)),radial-gradient(circle_at_74%_40%,rgba(216,139,66,.28),transparent_26%),radial-gradient(circle_at_24%_26%,rgba(123,198,199,.25),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#061f25] to-transparent" />
      <motion.div
        className="absolute right-[8%] top-[20%] hidden h-[520px] w-[520px] rounded-full border border-white/10 lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-12 rounded-full border border-gold/20" />
        <div className="absolute inset-28 rounded-full border border-aqua/20" />
      </motion.div>

      <Shell className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_480px]">
        <Reveal>
          <Eyebrow light>Premium tequila platform · Mexico + U.S.</Eyebrow>
          <h1 className="premium-serif mt-5 max-w-5xl text-[64px] leading-[0.86] tracking-[-0.055em] text-white md:text-[104px]">
            Own the barrel. Build the brand. Control the story.
          </h1>
          <p className="mt-7 max-w-2xl text-[18px] leading-8 text-white/72">
            Hogshead is the operating layer for premium tequila ownership, aging strategy, brand creation, and scarce single-barrel releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-gold px-6 py-3 text-[14px] font-extrabold text-[#211104] shadow-soft">Explore Platform</a>
            <a href="#simulator" className="rounded-full bg-white/92 px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Run Aging Model</a>
            <a href="#market" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[14px] font-extrabold text-white backdrop-blur-xl">Market Logic</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_50%_50%,rgba(216,139,66,.18),transparent_62%)] blur-xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-white/18 bg-white/10 p-5 shadow-[0_42px_130px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#082f36]/86 p-6">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.30),rgba(2,62,72,.96)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(216,139,66,.24),transparent_28%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-aqua">Hogshead print</p>
                    <h3 className="premium-serif mt-3 max-w-sm text-[40px] leading-[0.93] text-white">
                      One aging asset. Multiple commercial outcomes.
                    </h3>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/10 text-gold">
                    <Sparkles className="h-6 w-6" />
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
                        className="group flex items-center gap-4 rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15"
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-deep">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <strong className="block text-[16px] font-extrabold text-white">{item.label}</strong>
                          <span className="text-[12px] font-semibold text-white/62">{item.text}</span>
                        </div>
                        <ArrowUpRight className="ml-auto h-4 w-4 text-gold opacity-80" />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['1–21Y', '43–55%', 'TX / CA'].map((value, index) => (
                    <div key={value} className="rounded-2xl border border-white/12 bg-black/12 p-4 text-center backdrop-blur-xl">
                      <strong className="block text-[20px] font-extrabold text-white">{value}</strong>
                      <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/45">{index === 0 ? 'Inventory' : index === 1 ? 'ABV range' : 'Initial focus'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
