'use client';

import { motion } from 'framer-motion';
import { Eyebrow, Reveal, Shell } from './shell';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,.96),rgba(251,248,240,.76),rgba(251,248,240,.34)),url('/images/Agave_Mountain.png')] bg-cover bg-center opacity-90" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,rgba(123,198,199,.42),transparent_28%),radial-gradient(circle_at_18%_20%,rgba(216,139,66,.20),transparent_28%)]"
        animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.02, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Shell className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_420px]">
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
        <Reveal delay={0.1} className="rounded-[34px] border border-white/80 bg-white/58 p-5 shadow-premium backdrop-blur-2xl">
          <div className="rounded-[26px] border border-deep/10 bg-paper/90 p-6">
            <div className="relative h-48 overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.9)_0_10%,rgba(123,198,199,.18)_11%_36%,rgba(2,62,72,.06)_37%_100%)]">
              <div className="absolute inset-10 rounded-full border border-deep/15 shadow-[0_0_0_42px_rgba(2,62,72,.045),0_0_0_82px_rgba(2,62,72,.03)]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(216,139,66,.36),transparent_25%,transparent)]" />
            </div>
            <Eyebrow>Platform snapshot</Eyebrow>
            <h3 className="premium-serif mt-3 text-[32px] leading-none text-deep">Two commercial engines. One aging asset.</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {['1–21Y|Aged inventory', '43–55%|ABV range', '750ml|Premium format', 'TX / CA|Initial focus'].map((item) => {
                const [value, label] = item.split('|');
                return (
                  <div key={label} className="rounded-2xl border border-deep/10 bg-white p-4">
                    <strong className="block text-[22px] font-extrabold text-deep">{value}</strong>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#60787d]">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
