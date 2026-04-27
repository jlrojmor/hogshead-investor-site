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
    <section id="models" className="relative overflow-hidden py-28 scroll-mt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(216,139,66,.10),transparent_30%),radial-gradient(circle_at_80%_62%,rgba(123,198,199,.14),transparent_32%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Two business models"
            title="One tequila platform. Two commercial paths."
            text="Hogshead Tequila routes two different buyers: capital and brand partners seeking structured aged tequila access, and product-led buyers seeking scarce single-barrel releases."
          />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={index * 0.06}>
                <a
                  href={path.href}
                  className="group relative block min-h-[570px] overflow-hidden rounded-[42px] border-0 bg-deep no-underline outline-none shadow-premium transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_46px_130px_rgba(2,62,72,.24)] focus:outline-none focus-visible:outline-none"
                >
                  <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.045]" style={{ backgroundImage: `url('${path.bg}')` }} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,20,24,.08),rgba(2,62,72,.88)),radial-gradient(circle_at_78%_20%,rgba(216,139,66,.30),transparent_30%),linear-gradient(90deg,rgba(2,62,72,.64),rgba(2,62,72,.18))]" />
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 top-6 rounded-[34px] opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex min-h-[570px] flex-col justify-between p-8 text-white md:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <span className="rounded-full border border-white/28 bg-black/18 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-xl">{path.label}</span>
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-gold text-[#211104] shadow-[0_18px_44px_rgba(216,139,66,.24)] transition group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="max-w-[620px]">
                      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/24 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/78 backdrop-blur-md">
                        {index === 0 ? <ShieldCheck className="h-4 w-4 text-gold" /> : <Building2 className="h-4 w-4 text-gold" />}
                        {path.audience}
                      </span>
                      <h3 className="premium-serif max-w-md text-[44px] leading-[0.94] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,.34)] md:text-[52px]">{path.title}</h3>
                      <p className="mt-5 max-w-xl text-[16px] font-semibold leading-8 text-white/82">{path.text}</p>

                      <div className="mt-7 grid gap-3 md:grid-cols-3">
                        {path.bullets.map((bullet) => (
                          <span key={bullet} className="rounded-[18px] border border-white/35 bg-white/12 px-4 py-3 text-[12px] font-extrabold leading-5 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.14)] backdrop-blur-xl transition group-hover:bg-white/16">
                            {bullet}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[13px] font-black text-[#211104] shadow-[0_16px_36px_rgba(0,0,0,.20)] transition group-hover:bg-white group-hover:text-deep">
                        Explore <ArrowUpRight className="h-4 w-4" />
                      </div>
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
