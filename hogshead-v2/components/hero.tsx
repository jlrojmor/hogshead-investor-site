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
      <video className="absolute inset-0 h-full w-full object-cover opacity-70" src="/images/Animated Background.mp4" autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,24,29,.95),rgba(2,34,40,.84)_43%,rgba(2,34,40,.38)),radial-gradient(circle_at_72%_36%,rgba(216,139,66,.16),transparent_28%),radial-gradient(circle_at_22%_30%,rgba(123,198,199,.18),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#061f25] to-transparent" />
      <motion.div
        className="pointer-events-none absolute right-[9%] top-[18%] hidden h-[540px] w-[540px] rounded-full opacity-55 lg:block"
        animate={{ rotate: 360, scale: [1, 1.035, 1] }}
        transition={{ rotate: { duration: 46, repeat: Infinity, ease: 'linear' }, scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <div className="absolute inset-0 rounded-full border border-white/7" />
        <div className="absolute inset-16 rounded-full border border-aqua/10" />
        <div className="absolute inset-32 rounded-full border border-gold/10" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      </motion.div>

      <Shell className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_480px]">
        <Reveal>
          <Eyebrow light>Premium tequila platform · Mexico + U.S.</Eyebrow>
          <h1 className="premium-serif mt-5 max-w-5xl text-[64px] leading-[0.86] tracking-[-0.055em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,.34)] md:text-[104px]">
            Own the barrel. Build the brand. Control the story.
          </h1>
          <p className="mt-7 max-w-2xl text-[18px] font-semibold leading-8 text-white/88 drop-shadow-[0_4px_18px_rgba(0,0,0,.30)]">
            Hogshead is the operating layer for premium tequila ownership, aging strategy, brand creation, and scarce single-barrel releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-gold px-6 py-3 text-[14px] font-extrabold text-[#211104] shadow-soft">Explore Platform</a>
            <a href="#simulator" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-[0_15px_38px_rgba(0,0,0,.18)]">Run Aging Model</a>
            <a href="#market" className="rounded-full border border-white/28 bg-white/14 px-6 py-3 text-[14px] font-extrabold text-white shadow-soft backdrop-blur-xl">Market Logic</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="absolute -inset-8 rounded-[48px] bg-[radial-gradient(circle_at_50%_50%,rgba(216,139,66,.14),transparent_62%)] blur-xl" />
          <div className="relative overflow-hidden rounded-[38px] bg-[#062b32]/80 p-5 shadow-[0_42px_130px_rgba(0,0,0,.44)] backdrop-blur-2xl ring-1 ring-white/14">
            <div className="relative overflow-hidden rounded-[30px] bg-[#082f36]/94 p-6 ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,34,40,.72),rgba(2,34,40,.96)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(216,139,66,.16),transparent_30%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-aqua">Hogshead print</p>
                    <h3 className="premium-serif mt-3 max-w-sm text-[40px] leading-[0.93] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,.35)]">
                      One aging asset. Multiple commercial outcomes.
                    </h3>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-white/12 text-gold ring-1 ring-white/16">
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
                        className="group flex items-center gap-4 rounded-2xl bg-[#06252b]/78 p-4 shadow-[0_12px_34px_rgba(0,0,0,.18)] ring-1 ring-white/12 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#06343d]/86"
                      >
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-deep">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <strong className="block text-[16px] font-extrabold text-white">{item.label}</strong>
                          <span className="text-[12px] font-bold text-white/78">{item.text}</span>
                        </div>
                        <ArrowUpRight className="ml-auto h-4 w-4 text-gold opacity-90" />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['1–21Y', '43–55%', 'TX / CA'].map((value, index) => (
                    <div key={value} className="rounded-2xl bg-[#061f25]/78 p-4 text-center ring-1 ring-white/12 backdrop-blur-xl">
                      <strong className="block text-[20px] font-extrabold text-white">{value}</strong>
                      <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/60">{index === 0 ? 'Inventory' : index === 1 ? 'ABV range' : 'Initial focus'}</span>
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
