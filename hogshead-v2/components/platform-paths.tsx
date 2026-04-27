import { ArrowUpRight, Boxes, Building2, ShieldCheck, Wine } from 'lucide-react';
import { Reveal, SectionHeader, Shell } from './shell';

const paths = [
  {
    label: 'Business Model 1',
    title: 'Investment & Brand Platform',
    text: 'For investors, family offices, brands, and strategic buyers seeking structured tequila inventory access, aging oversight, reporting, and commercial exit optionality.',
    href: '#ownership',
    icon: Boxes,
    bg: '/images/Agave Fields.png',
    bullets: ['Structured tequila access', 'Aging + custody oversight', 'Bulk sale or brand path'],
    audience: 'Investors · Brands · Family offices',
  },
  {
    label: 'Business Model 2',
    title: 'Single Barrel Program',
    text: 'For restaurants, bars, retailers, corporate buyers, collectors, and private clients that want scarce aged tequila releases without operational complexity.',
    href: '#single-barrel',
    icon: Wine,
    bg: '/images/Barrel-aging-copy-5.jpeg',
    bullets: ['Aged barrel selection', '750ml premium format', 'Custom back-label options'],
    audience: 'Restaurants · Retailers · Private clients',
  },
];

export function PlatformPaths() {
  return (
    <section id="models" className="py-24 scroll-mt-28">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Two business models"
            title="One tequila platform. Two commercial paths."
            text="Hogshead Tequila routes two different buyers: capital and brand partners seeking structured aged tequila access, and product-led buyers seeking scarce single-barrel releases."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={index * 0.06}>
                <a href={path.href} className="group relative block min-h-[540px] overflow-hidden rounded-[38px] border border-deep/10 p-0 shadow-premium transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(2,62,72,.20)]">
                  <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,62,72,.03), rgba(2,62,72,.90)), url('${path.bg}')` }} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(216,139,66,.28),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,.22))]" />
                  <div className="relative z-10 flex min-h-[540px] flex-col justify-between p-8 text-white">
                    <div className="flex items-start justify-between gap-6">
                      <span className="rounded-full border border-white/22 bg-white/14 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-xl">{path.label}</span>
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/14 text-gold backdrop-blur-xl ring-1 ring-white/20">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70 backdrop-blur-md">
                        {index === 0 ? <ShieldCheck className="h-4 w-4 text-gold" /> : <Building2 className="h-4 w-4 text-gold" />}
                        {path.audience}
                      </span>
                      <h3 className="premium-serif max-w-md text-[42px] leading-none text-white drop-shadow-[0_8px_22px_rgba(0,0,0,.30)]">{path.title}</h3>
                      <p className="mt-5 max-w-xl text-[16px] font-semibold leading-8 text-white/80">{path.text}</p>
                      <div className="mt-6 grid gap-2 md:grid-cols-3">
                        {path.bullets.map((bullet) => (
                          <span key={bullet} className="rounded-2xl bg-white/12 px-4 py-3 text-[12px] font-extrabold leading-5 text-white/86 shadow-[inset_0_0_0_1px_rgba(255,255,255,.13)] backdrop-blur-xl">
                            {bullet}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7 flex items-center gap-2 text-[14px] font-extrabold text-white">Explore <ArrowUpRight className="h-4 w-4" /></div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
