'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from 'recharts';
import { ArrowUpRight, Check, ChevronRight, Globe2, Layers3, LockKeyhole, ShieldCheck, Sparkles, Wine } from 'lucide-react';

const marketStats = [
  ['U.S. tequila market', '$20.43B', 'Estimated 2025 revenue across at-home and out-of-home channels.', 'Statista Market Forecast'],
  ['Global market growth', '$11.5B → $19.8B', 'Estimated 2024 market size and projected 2030 value.', 'Grand View Research'],
  ['U.S. volume scale', '32.2M cases', 'Reported U.S. tequila sales volume in 9L cases.', 'Statista'],
  ['Category resilience', '+2.9%', 'Reported 2024 Tequila/Mezcal sales growth despite broader spirits softness.', 'DISCUS'],
];

const paths = [
  {
    label: 'Business Model 1',
    title: 'Investment & Brand Platform',
    text: 'Structured tequila inventory access, custody discipline, aging oversight, investor reporting, brand creation, and exit optionality.',
    icon: LockKeyhole,
  },
  {
    label: 'Business Model 2',
    title: 'Single Barrel Program',
    text: 'Scarce aged tequila releases for restaurants, bars, retailers, collectors, corporate buyers, and private clients.',
    icon: Wine,
  },
];

const agingData = Array.from({ length: 121 }, (_, month) => {
  const liters = 200 * Math.pow(0.996, month);
  const premiumJump = month >= 36 ? 1.32 : month >= 12 ? 1.13 : month >= 2 ? 1.04 : 1;
  const basePerLiter = (5.5 + month * 0.22 + Math.max(0, month - 36) * 0.08) * premiumJump;
  return {
    month,
    liters,
    low: liters * basePerLiter * 0.86,
    base: liters * basePerLiter,
    high: liters * basePerLiter * 1.18,
  };
});

const marketGrowth = [
  { year: '2024', value: 11.5 },
  { year: '2030E', value: 19.8 },
];

const premiumTiers = [
  { tier: 'Value', score: 30 },
  { tier: 'Premium', score: 62 },
  { tier: 'High-End', score: 78 },
  { tier: 'Luxury', score: 92 },
];

function money(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

function stage(month: number) {
  if (month < 2) return 'Blanco';
  if (month < 12) return 'Reposado';
  if (month < 36) return 'Añejo';
  if (month < 60) return 'Extra Añejo';
  return 'Ultra Añejo';
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.75, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-extrabold uppercase tracking-[0.28em] ${light ? 'text-[#8dd7d8]' : 'text-teal'}`}>{children}</p>;
}

function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <h2 className={`premium-serif mt-4 max-w-4xl text-[44px] leading-[0.95] tracking-[-0.035em] md:text-[66px] ${light ? 'text-white' : 'text-deep'}`}>{title}</h2>
      </div>
      {text && <p className={`max-w-xl text-[16px] leading-8 ${light ? 'text-white/70' : 'text-[#60787d]'}`}>{text}</p>}
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 rounded-full border border-white/70 bg-[#fbf8f0]/80 px-3 py-2 shadow-[0_16px_60px_rgba(2,62,72,.12)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.09em] text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-deep/15 bg-white premium-serif text-[15px] text-deep">HT</span>
          Hogshead
        </a>
        <div className="hidden rounded-full border border-deep/10 bg-white/55 p-1 lg:flex">
          {['Models', 'Market', 'Ownership', 'Aging', 'Simulator', 'Single Barrel'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="rounded-full px-4 py-2 text-[12px] font-extrabold text-ink/65 hover:bg-white hover:text-deep">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white shadow-soft">Request Info</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#fbf8f0] pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(123,198,199,.42),transparent_26%),radial-gradient(circle_at_14%_18%,rgba(216,139,66,.18),transparent_24%)]" />
      <motion.div
        className="absolute right-0 top-0 h-full w-[58%] bg-[linear-gradient(90deg,rgba(251,248,240,.96),rgba(251,248,240,.25)),radial-gradient(circle_at_70%_55%,rgba(2,62,72,.15),transparent_36%)]"
        animate={{ opacity: [0.65, 0.95, 0.65], scale: [1, 1.025, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Shell className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_430px]">
        <Reveal>
          <Eyebrow>Premium tequila platform · Mexico + U.S.</Eyebrow>
          <h1 className="premium-serif mt-5 max-w-5xl text-[58px] leading-[0.9] tracking-[-0.045em] text-ink md:text-[94px]">
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
          <div className="rounded-[26px] border border-deep/10 bg-[#fbf8f0]/90 p-6">
            <div className="relative h-48 overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.9)_0_10%,rgba(123,198,199,.18)_11%_36%,rgba(2,62,72,.06)_37%_100%)]">
              <div className="absolute inset-10 rounded-full border border-deep/15 shadow-[0_0_0_42px_rgba(2,62,72,.045),0_0_0_82px_rgba(2,62,72,.03)]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(216,139,66,.36),transparent_25%,transparent)]" />
            </div>
            <Eyebrow>Platform snapshot</Eyebrow>
            <h3 className="premium-serif mt-3 text-[32px] leading-none text-deep">Two commercial engines. One aging asset.</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {['1–21Y|Aged inventory', '43–55%|ABV range', '750ml|Premium format', 'TX / CA|Initial focus'].map((item) => {
                const [value, label] = item.split('|');
                return <div key={label} className="rounded-2xl border border-deep/10 bg-white p-4"><strong className="block text-[22px] font-extrabold text-deep">{value}</strong><span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#60787d]">{label}</span></div>;
              })}
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

function Models() {
  return (
    <section id="models" className="py-24">
      <Shell>
        <Reveal><SectionHeader eyebrow="Two business models" title="One tequila platform. Two commercial paths." text="The site should immediately route the visitor: institutional-style barrel access and brand creation, or product-led single-barrel releases." /></Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={i * 0.06}>
                <a href={i === 0 ? '#ownership' : '#single-barrel'} className="group block rounded-[30px] border border-deep/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
                  <div className="flex items-start justify-between gap-6">
                    <span className="rounded-full bg-deep/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal">{path.label}</span>
                    <Icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="premium-serif mt-24 text-[38px] leading-none text-deep">{path.title}</h3>
                  <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#60787d]">{path.text}</p>
                  <div className="mt-7 flex items-center gap-2 text-[14px] font-extrabold text-deep">Explore <ArrowUpRight className="h-4 w-4" /></div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

function Market() {
  const [active, setActive] = useState('us');
  const activeCopy = {
    us: ['U.S. demand center', 'The U.S. is the primary commercial market: demand, premiumization, restaurant programs, retail volume, and private releases concentrate here.'],
    mx: ['Mexico origin base', 'Mexico anchors production, protected origin, distillery relationships, barrel aging, custody, and authenticity.'],
    eu: ['Europe premium expansion', 'Europe is a longer-term premium spirits market for limited releases, education, gifting, and collectors.'],
    asia: ['Luxury optionality', 'Asia and the Middle East represent future optionality around scarce gifting, hospitality, and luxury consumption.'],
  }[active as 'us' | 'mx' | 'eu' | 'asia'];

  return (
    <section id="market" className="bg-gradient-to-b from-sand to-[#eaf5f3] py-24">
      <Shell>
        <Reveal><SectionHeader eyebrow="Market intelligence" title="Tequila is global. The economics are concentrated." text="This should feel like an investor dashboard: market size, geography, premiumization, and aging economics in one clean system." /></Reveal>
        <div className="mt-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="rounded-[32px] bg-deep p-7 text-white shadow-premium">
            <Eyebrow light>Digital market map</Eyebrow>
            <h3 className="premium-serif mt-3 text-[36px] leading-none text-white">{activeCopy[0]}</h3>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/72">{activeCopy[1]}</p>
            <div className="relative mt-7 h-[360px] overflow-hidden rounded-[26px] border border-white/15 bg-[radial-gradient(circle_at_50%_50%,rgba(123,198,199,.22),transparent_58%)]">
              <div className="absolute inset-8 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.06)_25%,transparent_26%,transparent_49%,rgba(255,255,255,.06)_50%,transparent_51%,transparent_74%,rgba(255,255,255,.06)_75%,transparent_76%)]" />
              {[['us','23%','43%','U.S.'],['mx','20%','58%','MX'],['eu','53%','38%','EU'],['asia','73%','52%','ASIA / ME']].map(([id,x,y,label]) => (
                <button key={id} onClick={() => setActive(id)} className="absolute flex items-center gap-3" style={{ left: x, top: y }}>
                  <span className={`h-4 w-4 rounded-full ${active === id ? 'bg-gold shadow-[0_0_0_10px_rgba(216,139,66,.24),0_0_32px_rgba(216,139,66,.85)]' : 'bg-gold/80 shadow-[0_0_0_7px_rgba(216,139,66,.14)]'}`} />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-white">{label}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-4">
            {marketStats.map(([label, value, text, source], i) => (
              <Reveal key={label} delay={i * 0.04} className="rounded-[26px] border border-deep/10 bg-white p-6 shadow-soft">
                <Eyebrow>{label}</Eyebrow>
                <strong className="mt-2 block text-[36px] font-extrabold leading-none text-deep">{value}</strong>
                <p className="mt-4 text-[14px] font-semibold leading-7 text-[#60787d]">{text}</p>
                <p className="mt-3 text-[11px] font-semibold text-[#7c9195]">Source: {source}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
            <Eyebrow>Market size trajectory</Eyebrow>
            <h3 className="premium-serif mt-2 text-[34px] text-deep">Global value growth</h3>
            <div className="mt-5 h-[260px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={marketGrowth}><CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)"/><XAxis dataKey="year" axisLine={false} tickLine={false}/><YAxis tickFormatter={(v) => `$${v}B`} axisLine={false} tickLine={false}/><Tooltip formatter={(v) => [`$${v}B`, 'Value']}/><Bar dataKey="value" fill="#0B6F72" radius={[10,10,0,0]} barSize={54}/></BarChart></ResponsiveContainer></div>
          </Reveal>
          <Reveal className="rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft">
            <Eyebrow>Premiumization logic</Eyebrow>
            <h3 className="premium-serif mt-2 text-[34px] text-deep">Value shifts upward</h3>
            <div className="mt-5 h-[260px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={premiumTiers} layout="vertical"><CartesianGrid horizontal={false} stroke="rgba(2,62,72,.08)"/><XAxis type="number" hide/><YAxis type="category" dataKey="tier" axisLine={false} tickLine={false}/><Tooltip/><Bar dataKey="score" fill="#D88B42" radius={[0,10,10,0]} barSize={24}/></BarChart></ResponsiveContainer></div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}

function Operating() {
  return (
    <section className="bg-deep py-24 text-white">
      <Shell>
        <Reveal><SectionHeader light eyebrow="Operating layer" title="From source to custody to outcome." text="Hogshead is the operating layer between Mexican production, aging economics, brand creation, and U.S. commercial demand." /></Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {['Source|Access premium tequila through Mexican distillery partners.','Custody|Professional storage, oversight, and inventory tracking.','Age|Time, scarcity, and category thresholds create value.','Monetize|Bulk sale, brand launch, special release, or barrel program.'].map((x,i)=>{const [t,b]=x.split('|'); return <Reveal key={t} delay={i*.05} className="rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><b className="text-gold">0{i+1} · {t}</b><p className="mt-4 text-[15px] leading-7 text-white/72">{b}</p></Reveal>})}
        </div>
      </Shell>
    </section>
  );
}

function Ownership() {
  return <section id="ownership" className="py-24"><Shell className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"><Reveal className="rounded-[30px] border border-white/80 bg-white/75 p-8 shadow-premium"><Eyebrow>Real ownership framework</Eyebrow><h2 className="premium-serif mt-3 text-[54px] leading-[.9] text-deep">Not just a certificate.</h2><p className="mt-5 text-[16px] leading-8 text-[#60787d]">The public page should not reveal every legal mechanic. It should explain the strategic difference: documented tequila inventory, custody discipline, and actual commercial pathways.</p><a href="#contact" className="mt-7 inline-flex rounded-full bg-deep px-5 py-3 text-[14px] font-extrabold text-white">Discuss Structure</a></Reveal><Reveal className="rounded-[30px] bg-deep p-8 text-white shadow-premium"><h3 className="premium-serif text-[36px] text-white">What the model emphasizes</h3><div className="mt-6 divide-y divide-white/15">{['Underlying tequila inventory','Professional custody and aging oversight','Inventory tracking and reporting','Exit or bottling optionality','Premium product execution'].map(i=><div key={i} className="flex justify-between py-5 text-[15px] font-extrabold">{i}<Check className="h-5 w-5"/></div>)}</div></Reveal></Shell></section>;
}

function Aging() {
  const stages = [['Blanco','0–2 months','#E7F4EF'],['Reposado','2+ months','#D59A38'],['Añejo','12+ months','#A96022'],['Extra Añejo','36+ months','#6A3017']];
  const [active,setActive]=useState(stages[1]);
  return <section id="aging" className="py-24"><Shell className="grid gap-8 lg:grid-cols-[300px_1fr]"><Reveal className="hidden rounded-[30px] border border-deep/10 bg-white p-8 shadow-premium lg:block"><div className="mx-auto h-[320px] w-[104px] rounded-b-[24px] rounded-t-[38px] border-[7px] border-deep/10" style={{background:`linear-gradient(180deg, rgba(255,255,255,.16) 0 26%, ${active[2]} 26% 100%)`}}/><div className="premium-serif mt-6 text-center text-[34px] text-deep">{active[0]}</div></Reveal><div><Reveal><Eyebrow>Aging journey</Eyebrow><h2 className="premium-serif mt-3 max-w-4xl text-[54px] leading-[.92] text-deep md:text-[70px]">Time turns tequila into a scarce commercial asset.</h2><p className="mt-5 text-[16px] text-[#60787d]">Click each stage to see how category thresholds and oak influence change the commercial profile.</p></Reveal><div className="mt-7 grid gap-4">{stages.map((s,i)=><Reveal key={s[0]} delay={i*.04}><button onClick={()=>setActive(s)} className={`w-full rounded-[22px] border p-6 text-left shadow-soft ${active[0]===s[0]?'border-deep/20 bg-white':'border-deep/10 bg-white/75'}`}><h3 className="premium-serif text-[30px] text-deep">{s[0]} · {s[1]}</h3><p className="mt-2 text-[15px] text-[#60787d]">{s[0]==='Blanco'?'Clean agave base before meaningful barrel influence.':s[0]==='Reposado'?'Early oak, spice, vanilla, and softer edges.':s[0]==='Añejo'?'Deeper wood, caramel, dried fruit, and complexity.':'Scarcity, depth, and premium shelf positioning.'}</p></button></Reveal>)}</div></div></Shell></section>
}

function Simulator(){const [month,setMonth]=useState(36);const row=useMemo(()=>agingData.reduce((a,b)=>Math.abs(b.month-month)<Math.abs(a.month-month)?b:a),[month]);return <section id="simulator" className="py-24"><Shell><Reveal><SectionHeader eyebrow="Aging value simulator" title="Make the economics tangible." text="Move the slider to update stage, liters remaining, and the low/base/high value range."/></Reveal><Reveal className="mt-10 rounded-[34px] border border-white/80 bg-white/80 p-5 shadow-premium"><div className="grid gap-5 lg:grid-cols-[320px_1fr]"><div className="rounded-[26px] bg-deep p-7 text-white"><h3 className="premium-serif text-[34px] text-white">Aging month</h3><p className="mt-4 text-[15px] text-white/72">Update the model live.</p><input className="mt-8 w-full accent-gold" type="range" min={0} max={120} value={month} onChange={e=>setMonth(Number(e.target.value))}/><div className="mt-7 grid grid-cols-2 gap-3">{[['Month',row.month],['Stage',stage(row.month)],['Liters',`${row.liters.toFixed(1)} L`],['Base',money(row.base)]].map(([l,v])=><div key={l} className="rounded-2xl border border-white/15 bg-white/10 p-4"><span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-white/60">{l}</span><strong className="block text-[22px] text-white">{v}</strong></div>)}</div></div><div className="h-[390px] rounded-[26px] bg-white p-5"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={agingData}><CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)"/><XAxis dataKey="month" axisLine={false} tickLine={false}/><YAxis tickFormatter={v=>`$${Math.round(Number(v)/1000)}k`} axisLine={false} tickLine={false}/><Tooltip formatter={v=>money(Number(v))}/><Area dataKey="base" fill="rgba(11,111,114,.08)" stroke="none"/><Line dataKey="low" dot={false} stroke="#9db0b4" strokeWidth={2}/><Line dataKey="base" dot={false} stroke="#0B6F72" strokeWidth={4}/><Line dataKey="high" dot={false} stroke="#D88B42" strokeWidth={2}/></ComposedChart></ResponsiveContainer></div></div></Reveal></Shell></section>}

function SingleBarrel(){return <section id="single-barrel" className="bg-gradient-to-b from-[#edf6f4] to-sand py-24"><Shell><Reveal><SectionHeader eyebrow="Single Barrel Program" title="For buyers who want a release, not complexity." text="A curated aged tequila program for restaurants, bars, liquor stores, corporate buyers, collectors, and private clients."/></Reveal><div className="mt-9 grid gap-5 lg:grid-cols-3">{[['Aging range','1–21Y','Añejo, Extra Añejo, Ultra Añejo, and long-aged expressions.'],['ABV profiles','43–55%','Mid proof, high proof, and cask-strength style options.'],['Customization','750ml','Premium glass, Hogshead label system, and client logo placement options.']].map((c,i)=><Reveal key={c[0]} delay={i*.04} className="rounded-[26px] border border-deep/10 bg-white p-7 shadow-soft"><Eyebrow>{c[0]}</Eyebrow><strong className="mt-4 block text-[40px] font-extrabold text-deep">{c[1]}</strong><p className="mt-4 text-[16px] leading-8 text-[#60787d]">{c[2]}</p></Reveal>)}</div><Reveal className="mt-6 rounded-[32px] bg-deep p-8 text-white shadow-premium"><div className="grid gap-8 lg:grid-cols-[1fr_320px]"><div><Eyebrow light>The bottle</Eyebrow><h2 className="premium-serif mt-3 max-w-4xl text-[50px] leading-[.92] text-white md:text-[68px]">Designed to communicate weight, scarcity, and presence.</h2><p className="mt-5 text-[16px] text-white/72">Premium glass, custom back-label options, and a limited-release story for each barrel.</p><div className="mt-7 grid gap-4 md:grid-cols-4">{['Select','Approve','Customize','Release'].map(x=><div key={x} className="rounded-[20px] border border-white/15 bg-white/10 p-5"><b className="text-gold">{x}</b><p className="mt-3 text-[14px] text-white/72">{x==='Select'?'Age, ABV, profile.':x==='Approve'?'Sample or tasting.':x==='Customize'?'Label and logo.':'Channel compliant sale.'}</p></div>)}</div></div><div className="hidden rounded-[26px] border border-white/20 bg-white/10 p-8 lg:grid place-items-center"><div className="grid h-[300px] w-[112px] place-items-center rounded-b-[28px] rounded-t-[44px] border-[7px] border-white/55 bg-[linear-gradient(90deg,rgba(255,255,255,.64),rgba(255,255,255,.05)_20%,rgba(187,101,31,.86)_48%,rgba(243,184,94,.72),rgba(255,255,255,.58))]"><div className="premium-serif bg-[#111] px-4 py-8 text-center text-white">HOGSHEAD<br/>TEQUILA</div></div></div></div></Reveal></Shell></section>}

function Contact(){return <section id="contact" className="bg-deep py-24 text-white"><Shell className="grid gap-8 lg:grid-cols-[.85fr_1fr]"><Reveal><Eyebrow light>Request information</Eyebrow><h2 className="premium-serif mt-3 text-[54px] leading-[.92] text-white md:text-[76px]">Start with the right conversation.</h2><p className="mt-5 max-w-xl text-[16px] leading-8 text-white/72">Tell us if you are exploring tequila investment exposure, brand creation, single-barrel sales, or restaurant / retail opportunities.</p><p className="mt-6 font-bold">contact@hogshead-tequila.com</p></Reveal><Reveal className="rounded-[28px] border border-white/15 bg-white/10 p-7"><form action="mailto:contact@hogshead-tequila.com" method="post" encType="text/plain" className="grid gap-3">{['Name','Email','Company / group'].map((p,i)=><input key={p} name={p.toLowerCase()} type={i===1?'email':'text'} placeholder={p} className="rounded-2xl bg-white p-4 text-ink"/>)}<select className="rounded-2xl bg-white p-4 text-ink"><option>I am interested in...</option><option>Investment / aging platform</option><option>Build or add a tequila brand</option><option>Single Barrel Program</option></select><textarea placeholder="Tell us what you are looking for" className="min-h-[120px] rounded-2xl bg-white p-4 text-ink"/><button className="rounded-full bg-gold px-6 py-4 text-[14px] font-extrabold text-[#211104]">Send Request</button></form></Reveal></Shell></section>}

export default function StudioPage(){return <main className="overflow-x-hidden bg-sand text-ink"><Nav/><Hero/><Models/><Market/><Operating/><Ownership/><Aging/><Simulator/><SingleBarrel/><Contact/></main>}
