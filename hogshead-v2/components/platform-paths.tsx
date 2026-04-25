import { ArrowUpRight, LockKeyhole, Wine } from 'lucide-react';
import { Reveal, SectionHeader, Shell } from './shell';

const paths = [
  {
    label: 'Business Model 1',
    title: 'Investment & Brand Platform',
    text: 'For investors, family offices, brands, and groups that want structured access to tequila inventory, aging strategy, and exit optionality.',
    href: '#ownership',
    icon: LockKeyhole,
    bg: '/images/Barrel-aging-copy-5.jpeg',
    bullets: ['Structured inventory access', 'Custody and reporting', 'Bulk or brand exit paths'],
  },
  {
    label: 'Business Model 2',
    title: 'Single Barrel Program',
    text: 'For restaurants, retailers, collectors, corporate buyers, and private clients that want scarce aged tequila releases without operational complexity.',
    href: '#single-barrel',
    icon: Wine,
    bg: '/images/Agave Fields.png',
    bullets: ['Aged barrel selection', 'Premium 750ml format', 'Custom label options'],
  },
];

export function PlatformPaths() {
  return (
    <section id="models" className="py-24">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Two business models"
            title="One tequila platform. Two commercial paths."
            text="The site should immediately route the visitor: institutional-style barrel access and brand creation, or product-led single-barrel releases."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {paths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.title} delay={index * 0.06}>
                <a href={path.href} className="group relative block min-h-[520px] overflow-hidden rounded-[34px] border border-deep/10 p-0 shadow-premium transition hover:-translate-y-1">
                  <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,62,72,.10), rgba(2,62,72,.88)), url('${path.bg}')` }} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(216,139,66,.28),transparent_30%)] opacity-80" />
                  <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8 text-white">
                    <div className="flex items-start justify-between gap-6">
                      <span className="rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-xl">{path.label}</span>
                      <div className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-white/15 backdrop-blur-xl">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="premium-serif max-w-md text-[42px] leading-none text-white">{path.title}</h3>
                      <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/78">{path.text}</p>
                      <div className="mt-6 grid gap-2 md:grid-cols-3">
                        {path.bullets.map((bullet) => (
                          <span key={bullet} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-[12px] font-bold leading-5 text-white/82 backdrop-blur-xl">
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
