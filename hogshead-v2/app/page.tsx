'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ArrowUpRight, Check, ChevronRight, CircleDollarSign, Gem, Globe2, Layers3, LockKeyhole, MapPin, PackageCheck, ScrollText, ShieldCheck, Sparkles, Wine } from 'lucide-react';

const marketStats = [
  {
    label: 'U.S. tequila market',
    value: '$20.43B',
    text: 'Estimated combined U.S. tequila revenue in 2025, including at-home and out-of-home channels.',
    source: 'Statista Market Forecast',
  },
  {
    label: 'Global tequila market',
    value: '$11.5B → $19.8B',
    text: 'Estimated global market size in 2024 and projected 2030 value.',
    source: 'Grand View Research',
  },
  {
    label: 'U.S. scale',
    value: '32.2M cases',
    text: 'Reported U.S. tequila sales volume in 9-liter cases.',
    source: 'Statista topic summary',
  },
  {
    label: '2024 resilience',
    value: '+2.9%',
    text: 'DISCUS reported Tequila/Mezcal sales growth in 2024 despite broader spirits softness.',
    source: 'Distilled Spirits Council',
  },
];

const marketLocations = [
  {
    id: 'us',
    label: 'United States',
    x: '23%',
    y: '43%',
    title: 'Primary demand center',
    body: 'Largest commercial tequila market and the natural first focus for barrel exits, restaurant programs, retail channels, and private releases.',
  },
  {
    id: 'mx',
    label: 'Mexico',
    x: '20%',
    y: '56%',
    title: 'Origin & production base',
    body: 'Protected origin, distillery relationships, regulated production, and the physical aging infrastructure that underpins the platform.',
  },
  {
    id: 'eu',
    label: 'Europe',
    x: '52%',
    y: '38%',
    title: 'Premium expansion market',
    body: 'Longer-term luxury spirits market for limited releases, trade education, collectors, and premium sipping tequila.',
  },
  {
    id: 'asia',
    label: 'Asia / ME',
    x: '72%',
    y: '52%',
    title: 'Luxury optionality',
    body: 'Future-facing opportunity around high-end hospitality, collector demand, luxury gifting, and scarce special editions.',
  },
];

const globalMarketData = [
  { year: '2024', value: 11.5 },
  { year: '2030E', value: 19.8 },
];

const premiumizationData = [
  { tier: 'Value', index: 30 },
  { tier: 'Premium', index: 62 },
  { tier: 'High End', index: 78 },
  { tier: 'Luxury', index: 92 },
];

const agingFallback = Array.from({ length: 121 }, (_, month) => {
  const stageJump = month >= 36 ? 1.26 : month >= 12 ? 1.1 : month >= 2 ? 1.04 : 1;
  const liters = 200 * Math.pow(0.996, month);
  const basePrice = (5.5 + month * 0.22 + Math.max(0, month - 36) * 0.08) * stageJump;
  return {
    month,
    liters_remaining: liters,
    cost_per_l: 3.8 + month * 0.03,
    resale_price_per_l: {
      low: basePrice * 0.86,
      base: basePrice,
      high: basePrice * 1.16,
    },
  };
});

type AgingRow = (typeof agingFallback)[number];

function money(value: number) {
  return `$${Math.round(value).toLocaleString()}`;
}

function stageForMonth(month: number) {
  if (month < 2) return 'Blanco';
  if (month < 12) return 'Reposado';
  if (month < 36) return 'Añejo';
  if (month < 60) return 'Extra Añejo';
  return 'Ultra Añejo';
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, delay, ease: [0.21, 0.74, 0.29, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
      <div>
        <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal">{eyebrow}</p>
        <h2 className="premium-serif max-w-4xl text-[48px] leading-[0.88] tracking-[-0.045em] text-deep md:text-[72px]">
          {title}
        </h2>
      </div>
      {text && <p className="max-w-xl text-[16px] leading-8 text-[#60787d]">{text}</p>}
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 flex w-[min(1220px,calc(100%-36px))] -translate-x-1/2 items-center justify-between rounded-full border border-white/70 bg-paper/75 px-3 py-2 shadow-[0_18px_70px_rgba(2,62,72,.12)] backdrop-blur-2xl">
      <a href="#top" className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.09em] text-ink">
        <img src="/images/Logo_for_Website.png" alt="Hogshead" className="h-10 w-10 object-contain" />
        Hogshead
      </a>
      <div className="hidden items-center rounded-full border border-deep/10 bg-white/45 p-1 lg:flex">
        {['Models', 'Market', 'Ownership', 'Aging', 'Simulator', 'Single Barrel'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="rounded-full px-4 py-2 text-[12px] font-extrabold text-ink/65 hover:bg-white hover:text-deep">
            {item}
          </a>
        ))}
      </div>
      <a href="#contact" className="rounded-full bg-deep px-5 py-3 text-[14px] font-extrabold text-white shadow-soft">
        Request Info
      </a>
    </nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 80]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-32">
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-105 bg-[linear-gradient(90deg,rgba(251,248,240,.98)_0%,rgba(251,248,240,.88)_36%,rgba(251,248,240,.18)_75%),url('/images/Agave_Mountain.png')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(123,198,199,.32),transparent_26%),radial-gradient(circle_at_18%_22%,rgba(216,139,66,.18),transparent_30%)]" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] w-[min(1220px,calc(100%-52px))] items-center gap-14 py-20 lg:grid-cols-[1fr_430px]">
        <FadeIn>
          <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal">Premium tequila platform · Mexico + U.S.</p>
          <h1 className="premium-serif max-w-5xl text-[66px] leading-[0.86] tracking-[-0.055em] text-ink md:text-[108px]">
            Own the barrel. Build the brand. Control the story.
          </h1>
          <p className="mt-8 max-w-3xl text-[18px] leading-9 text-[#587074]">
            Hogshead connects premium Mexican distillery partners with investors, brands, hospitality groups, and private buyers through structured barrel access, aging oversight, and single-barrel releases.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-gold px-6 py-3 text-[14px] font-extrabold text-[#211104] shadow-soft">Explore Platform</a>
            <a href="#market" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Market Intelligence</a>
            <a href="#single-barrel" className="rounded-full bg-white px-6 py-3 text-[14px] font-extrabold text-deep shadow-soft">Single Barrel</a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="hidden rounded-[36px] border border-white/75 bg-white/50 p-5 shadow-premium backdrop-blur-2xl lg:block">
          <div className="rounded-[28px] border border-deep/10 bg-paper/90 p-6">
            <div className="relative mb-6 h-60 overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.9)_0_10%,rgba(123,198,199,.15)_11%_36%,rgba(2,62,72,.055)_37%_100%)]">
              <div className="absolute inset-10 rounded-full border border-deep/15 shadow-[0_0_0_42px_rgba(2,62,72,.045),0_0_0_82px_rgba(2,62,72,.03)]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(216,139,66,.36),transparent_25%,transparent)]" />
            </div>
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-teal">Platform snapshot</p>
            <h3 className="premium-serif text-[34px] leading-[0.98] text-deep">Two commercial engines built on one aging asset.</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ['1–21Y', 'Aged inventory'],
                ['43–55%', 'ABV range'],
                ['750ml', 'Premium format'],
                ['TX / CA', 'Initial focus'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-deep/10 bg-white p-4">
                  <strong className="block text-[24px] font-extrabold text-deep">{value}</strong>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#60787d]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ['Structured tequila access', 'Professional custody', 'Aging strategy', 'Brand creation', 'Single barrel releases', 'Premium bottle presentation'];
  return (
    <div className="overflow-hidden border-y border-deep/10 bg-white/45 py-4">
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-3">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="rounded-full border border-deep/10 bg-white px-5 py-3 text-[13px] font-extrabold text-deep shadow-soft">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Models() {
  return (
    <section id="models" className="py-28">
      <div className="container">
        <FadeIn>
          <SectionHeader
            eyebrow="Two business models"
            title="One tequila platform. Two commercial paths."
            text="Separate the visitor journey immediately: barrel ownership and brand creation for strategic buyers, and single-barrel releases for restaurants, retailers, collectors, and private clients."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              label: 'Business Model 1',
              title: 'Investment & Brand Platform',
              text: 'Structured tequila inventory access, custody discipline, aging oversight, reporting, and commercial exit pathways.',
              bg: '/images/AGAVE.jpeg',
              href: '#ownership',
            },
            {
              label: 'Business Model 2',
              title: 'Single Barrel Program',
              text: 'Scarce aged tequila for restaurants, bars, retailers, private buyers, collectors, and limited releases.',
              bg: '/images/Agave_Mountain.png',
              href: '#single-barrel',
            },
          ].map((path, index) => (
            <FadeIn key={path.title} delay={index * 0.08}>
              <a href={path.href} className="group relative flex min-h-[500px] overflow-hidden rounded-[34px] p-8 shadow-premium">
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,62,72,.12), rgba(2,62,72,.84)), url(${path.bg})` }} />
                <div className="relative z-10 flex w-full flex-col justify-between text-white">
                  <span className="w-fit rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] backdrop-blur-xl">{path.label}</span>
                  <div>
                    <h3 className="premium-serif text-[38px] leading-[0.98] text-white">{path.title}</h3>
                    <p className="mt-5 max-w-lg text-[16px] leading-8 text-white/78">{path.text}</p>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Market() {
  const [active, setActive] = useState(marketLocations[0]);

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#EAF5F3] py-28">
      <div className="container">
        <FadeIn>
          <SectionHeader
            eyebrow="Market intelligence"
            title="Tequila is global. The economics are concentrated."
            text="This section behaves like an investor-grade dashboard: market size, geography, premiumization, and why aged tequila has a different economic profile."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="relative min-h-[650px] overflow-hidden rounded-[38px] bg-[linear-gradient(135deg,#06252b,#023e48)] p-8 text-white shadow-premium">
            <div className="relative z-10">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.26em] text-aqua">Digital market map</p>
              <h3 className="premium-serif text-[36px] leading-[0.95] text-white">{active.title}</h3>
              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/72">{active.body}</p>
            </div>
            <div className="absolute inset-x-9 bottom-10 top-40 overflow-hidden rounded-[30px] border border-white/15 bg-[radial-gradient(circle_at_50%_50%,rgba(123,198,199,.22),transparent_58%)]">
              <div className="absolute inset-8 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%)]" />
              <div className="absolute left-[23%] top-[44%] h-[2px] w-[280px] origin-left rotate-[-14deg] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
              <div className="absolute left-[24%] top-[50%] h-[2px] w-[430px] origin-left rotate-[9deg] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
              {marketLocations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActive(loc)}
                  className="absolute flex items-center gap-3 text-left"
                  style={{ left: loc.x, top: loc.y }}
                >
                  <span className={`h-4 w-4 rounded-full ${active.id === loc.id ? 'bg-gold shadow-[0_0_0_10px_rgba(216,139,66,.24),0_0_32px_rgba(216,139,66,.85)]' : 'bg-gold/80 shadow-[0_0_0_7px_rgba(216,139,66,.16)]'}`} />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">{loc.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {marketStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.05}>
                <div className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-teal">{stat.label}</p>
                  <strong className="mt-2 block text-[40px] font-extrabold leading-none text-deep">{stat.value}</strong>
                  <p className="mt-4 text-[14px] font-semibold leading-7 text-[#60787d]">{stat.text}</p>
                  <p className="mt-3 text-[11px] font-semibold text-[#7c9195]">Source: {stat.source}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <FadeIn className="rounded-[30px] border border-deep/10 bg-white p-6 shadow-soft">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-teal">Market size trajectory</p>
            <h3 className="premium-serif mt-2 text-[34px] text-deep">Global value growth</h3>
            <div className="mt-6 h-[290px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={globalMarketData} margin={{ left: 8, right: 8, top: 16, bottom: 8 }}>
                  <CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis dataKey="year" tick={{ fill: '#60787d', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={(v) => `$${v}B`} tick={{ fill: '#60787d', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v) => [`$${v}B`, 'Market value']} />
                  <Bar dataKey="value" fill="#0B6F72" radius={[10, 10, 0, 0]} barSize={52} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>
          <FadeIn className="rounded-[30px] border border-deep/10 bg-white p-6 shadow-soft">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-teal">Premiumization logic</p>
            <h3 className="premium-serif mt-2 text-[34px] text-deep">Value shifts upward</h3>
            <div className="mt-6 h-[290px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={premiumizationData} layout="vertical" margin={{ left: 20, right: 16, top: 8, bottom: 8 }}>
                  <CartesianGrid horizontal={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="tier" tick={{ fill: '#60787d', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v) => [v, 'Premium index']} />
                  <Bar dataKey="index" fill="#D88B42" radius={[0, 10, 10, 0]} barSize={22} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function OperatingLayer() {
  return (
    <section className="relative grid min-h-[92vh] items-center overflow-hidden bg-[#06252b] py-28 text-white">
      <div className="absolute inset-0 scale-105 bg-[linear-gradient(90deg,rgba(6,37,43,.96),rgba(6,37,43,.68),rgba(6,37,43,.22)),url('/images/AGAVE.jpeg')] bg-cover bg-center" />
      <div className="container relative z-10">
        <FadeIn>
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-aqua">Operating layer</p>
          <h2 className="premium-serif max-w-5xl text-[58px] leading-[0.9] tracking-[-0.045em] text-white md:text-[82px]">From source to custody to outcome.</h2>
          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/72">Hogshead is the operating layer between Mexican production, aging economics, brand creation, and U.S. commercial demand.</p>
        </FadeIn>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {[
            ['01 · Source', 'Access premium tequila through Mexican distillery partners.'],
            ['02 · Custody', 'Professional storage, oversight, and inventory tracking.'],
            ['03 · Age', 'Time, scarcity, and category thresholds create value.'],
            ['04 · Monetize', 'Bulk sale, brand launch, special release, or barrel program.'],
          ].map(([title, text], index) => (
            <FadeIn key={title} delay={index * 0.06}>
              <div className="min-h-[150px] rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <b className="text-gold">{title}</b>
                <p className="mt-4 text-[15px] leading-7 text-white/74">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ownership() {
  return (
    <section id="ownership" className="py-28">
      <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="rounded-[34px] border border-white/80 bg-white/75 p-8 shadow-premium backdrop-blur-xl">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal">Real ownership framework</p>
          <h2 className="premium-serif text-[58px] leading-[0.88] tracking-[-0.04em] text-deep">Not just a certificate.</h2>
          <p className="mt-6 text-[16px] leading-8 text-[#60787d]">The public page should not reveal every legal mechanic. It should explain the strategic difference: documented tequila inventory, custody discipline, and actual commercial pathways.</p>
          <a href="#contact" className="mt-7 inline-flex rounded-full bg-deep px-5 py-3 text-[14px] font-extrabold text-white">Discuss Structure</a>
        </FadeIn>
        <FadeIn className="rounded-[34px] bg-deep p-8 text-white shadow-premium">
          <h3 className="premium-serif text-[38px] leading-none text-white">What the model emphasizes</h3>
          <div className="mt-6 divide-y divide-white/15">
            {['Underlying tequila inventory', 'Professional custody and aging oversight', 'Inventory tracking and reporting', 'Exit or bottling optionality', 'Premium product execution'].map((item) => (
              <div key={item} className="flex items-center justify-between py-5 text-[16px] font-extrabold">
                {item}
                <Check className="h-5 w-5 text-white" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AgingJourney() {
  const stages = [
    ['Blanco', '0–2 months', 'Clean agave base before meaningful barrel influence.', '#E7F4EF'],
    ['Reposado', '2+ months', 'Early oak, spice, vanilla, and softer edges.', '#D59A38'],
    ['Añejo', '12+ months', 'Deeper wood, caramel, dried fruit, and complexity.', '#A96022'],
    ['Extra Añejo', '36+ months', 'Scarcity, depth, and premium shelf positioning.', '#6A3017'],
  ];
  const [active, setActive] = useState(stages[1]);
  return (
    <section id="aging" className="py-28">
      <div className="container grid gap-8 lg:grid-cols-[340px_1fr]">
        <FadeIn className="sticky top-28 hidden h-[520px] rounded-[34px] border border-deep/10 bg-white p-8 shadow-premium lg:grid lg:place-items-center">
          <div className="flex flex-col items-center">
            <div className="h-[350px] w-[116px] rounded-b-[25px] rounded-t-[42px] border-[8px] border-deep/10 shadow-[inset_0_0_32px_rgba(255,255,255,.6),0_24px_55px_rgba(2,62,72,.13)]" style={{ background: `linear-gradient(180deg, rgba(255,255,255,.12) 0 24%, ${active[3]} 24% 100%)` }} />
            <div className="premium-serif mt-6 text-[38px] text-deep">{active[0]}</div>
          </div>
        </FadeIn>
        <div>
          <FadeIn>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-teal">Aging journey</p>
            <h2 className="premium-serif max-w-4xl text-[58px] leading-[0.9] tracking-[-0.045em] text-deep md:text-[78px]">Time turns tequila into a scarce commercial asset.</h2>
            <p className="mt-6 text-[16px] leading-8 text-[#60787d]">Click each stage. The visual changes as tequila moves from clean agave base to deeper oak-driven scarcity.</p>
          </FadeIn>
          <div className="mt-8 grid gap-4">
            {stages.map((stage, index) => (
              <FadeIn key={stage[0]} delay={index * 0.05}>
                <button onClick={() => setActive(stage)} className={`w-full rounded-[24px] border p-6 text-left shadow-soft transition hover:translate-x-1 ${active[0] === stage[0] ? 'border-deep/15 bg-white' : 'border-deep/10 bg-white/75'}`}>
                  <h3 className="premium-serif text-[32px] text-deep">{stage[0]} · {stage[1]}</h3>
                  <p className="mt-3 text-[15px] text-[#60787d]">{stage[2]}</p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Simulator() {
  const [data, setData] = useState<AgingRow[]>(agingFallback);
  const [month, setMonth] = useState(36);

  useEffect(() => {
    fetch('/data/aging.json')
      .then((r) => r.json())
      .then((json) => {
        if (Array.isArray(json.series)) setData(json.series);
      })
      .catch(() => setData(agingFallback));
  }, []);

  const nearest = useMemo(() => {
    return data.reduce((a, b) => (Math.abs(b.month - month) < Math.abs(a.month - month) ? b : a), data[0]);
  }, [data, month]);

  const chartData = data.map((d) => ({
    month: d.month,
    low: d.liters_remaining * d.resale_price_per_l.low,
    base: d.liters_remaining * d.resale_price_per_l.base,
    high: d.liters_remaining * d.resale_price_per_l.high,
  }));

  return (
    <section id="simulator" className="py-28">
      <div className="container">
        <FadeIn>
          <SectionHeader eyebrow="Aging value simulator" title="Make the economics tangible." text="Uses the aging dataset: month, liters remaining, cost per liter, and low/base/high resale-price scenarios." />
        </FadeIn>
        <FadeIn className="mt-12 rounded-[38px] border border-white/80 bg-white/75 p-5 shadow-premium backdrop-blur-xl">
          <div className="grid gap-5 lg:grid-cols-[330px_1fr]">
            <div className="rounded-[28px] bg-deep p-7 text-white">
              <h3 className="premium-serif text-[36px] text-white">Aging month</h3>
              <p className="mt-4 text-[15px] leading-7 text-white/72">Move the slider to update value, volume, and stage.</p>
              <input className="mt-8 w-full accent-gold" type="range" min={0} max={Math.max(...data.map((d) => d.month))} value={month} onChange={(e) => setMonth(Number(e.target.value))} />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Month', nearest.month],
                  ['Stage', stageForMonth(nearest.month)],
                  ['Liters left', `${nearest.liters_remaining.toFixed(1)} L`],
                  ['Base value', money(nearest.liters_remaining * nearest.resale_price_per_l.base)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/60">{label}</span>
                    <strong className="mt-1 block text-[22px] font-extrabold leading-tight text-white">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[430px] rounded-[28px] bg-white p-5">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: 8, right: 18, top: 18, bottom: 8 }}>
                  <CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis dataKey="month" tick={{ fill: '#60787d', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={(v) => `$${Math.round(Number(v) / 1000)}k`} tick={{ fill: '#60787d', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v) => money(Number(v))} />
                  <Area type="monotone" dataKey="base" fill="rgba(11,111,114,.08)" stroke="none" />
                  <Line type="monotone" dataKey="low" stroke="#9db0b4" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="base" stroke="#0B6F72" strokeWidth={4} dot={false} />
                  <Line type="monotone" dataKey="high" stroke="#D88B42" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SingleBarrel() {
  return (
    <section id="single-barrel" className="bg-gradient-to-b from-[#EDF6F4] to-sand py-28">
      <div className="container">
        <FadeIn>
          <SectionHeader eyebrow="Single Barrel Program" title="For buyers who want a release, not complexity." text="A curated aged tequila program for restaurants, bars, liquor stores, corporate buyers, collectors, and private clients." />
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            ['Aging range', '1–21Y', 'Añejo, Extra Añejo, Ultra Añejo, and long-aged expressions.'],
            ['ABV profiles', '43–55%', 'Mid proof, high proof, and cask-strength style options.'],
            ['Customization', '750ml', 'Premium glass, Hogshead label system, and client logo placement options.'],
          ].map(([label, value, text], index) => (
            <FadeIn key={label} delay={index * 0.05} className="min-h-[220px] rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-teal">{label}</p>
              <strong className="mt-4 block text-[42px] font-extrabold text-deep">{value}</strong>
              <p className="mt-4 text-[16px] leading-8 text-[#60787d]">{text}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-7 grid overflow-hidden rounded-[36px] bg-[linear-gradient(90deg,rgba(2,62,72,.95),rgba(2,62,72,.72)),url('/images/Agave_Mountain.png')] bg-cover bg-center p-9 text-white shadow-premium lg:grid-cols-[1fr_410px] lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-aqua">The bottle</p>
            <h2 className="premium-serif max-w-4xl text-[54px] leading-[0.9] tracking-[-0.04em] text-white md:text-[76px]">Designed to communicate weight, scarcity, and presence.</h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/76">Premium glass, custom back-label options, and a limited-release story for each barrel.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {['Select', 'Approve', 'Customize', 'Release'].map((item) => (
                <div key={item} className="rounded-[22px] border border-white/18 bg-white/10 p-5 backdrop-blur-xl">
                  <b className="text-gold">{item}</b>
                  <p className="mt-3 text-[14px] text-white/72">{item === 'Select' ? 'Age, ABV, profile.' : item === 'Approve' ? 'Sample or tasting.' : item === 'Customize' ? 'Label and logo.' : 'Channel compliant sale.'}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 hidden h-[430px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 lg:block">
            <div className="absolute left-1/2 top-1/2 h-[342px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-b-[30px] rounded-t-[46px] border-[7px] border-white/55 bg-[linear-gradient(90deg,rgba(255,255,255,.64),rgba(255,255,255,.05)_20%,rgba(187,101,31,.86)_48%,rgba(243,184,94,.72),rgba(255,255,255,.58))] shadow-[0_32px_86px_rgba(0,0,0,.3),inset_0_0_34px_rgba(255,255,255,.58)]" />
            <div className="premium-serif absolute bottom-[117px] left-1/2 grid h-[142px] w-[119px] -translate-x-1/2 place-items-center border border-white/50 bg-[#111] text-center text-[17px] leading-tight text-white">HOGSHEAD<br />TEQUILA</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#06252b,#023e48)] py-28 text-white">
      <div className="container grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <FadeIn>
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.28em] text-aqua">Request information</p>
          <h2 className="premium-serif text-[58px] leading-[0.9] tracking-[-0.04em] text-white md:text-[82px]">Start with the right conversation.</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/72">Tell us if you are exploring tequila investment exposure, brand creation, single-barrel sales, or restaurant / retail opportunities.</p>
          <p className="mt-6 font-bold text-white">contact@hogshead-tequila.com</p>
        </FadeIn>
        <FadeIn className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
          <form action="mailto:contact@hogshead-tequila.com" method="post" encType="text/plain" className="grid gap-3">
            <input name="name" placeholder="Name" required className="rounded-2xl border border-white/20 bg-white/95 p-4 text-ink" />
            <input name="email" type="email" placeholder="Email" required className="rounded-2xl border border-white/20 bg-white/95 p-4 text-ink" />
            <input name="company" placeholder="Company / group" className="rounded-2xl border border-white/20 bg-white/95 p-4 text-ink" />
            <select name="interest" required className="rounded-2xl border border-white/20 bg-white/95 p-4 text-ink">
              <option value="">I am interested in...</option>
              <option>Investment / aging platform</option>
              <option>Build or add a tequila brand</option>
              <option>Single Barrel Program</option>
              <option>Restaurant / bar / retail</option>
              <option>Private buyer / collector</option>
            </select>
            <textarea name="message" placeholder="Tell us what you are looking for" className="min-h-[120px] rounded-2xl border border-white/20 bg-white/95 p-4 text-ink" />
            <button className="rounded-full bg-gold px-6 py-4 text-[14px] font-extrabold text-[#211104]" type="submit">Send Request</button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Models />
      <Market />
      <OperatingLayer />
      <Ownership />
      <AgingJourney />
      <Simulator />
      <SingleBarrel />
      <Contact />
    </>
  );
}
