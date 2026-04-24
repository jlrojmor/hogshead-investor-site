import { ArrowUpRight, LockKeyhole, Wine } from 'lucide-react';
import { Reveal, SectionHeader, Shell } from './shell';

const paths = [
  {
    label: 'Business Model 1',
    title: 'Investment & Brand Platform',
    text: 'Structured tequila inventory access, custody discipline, aging oversight, investor reporting, brand creation, and exit optionality.',
    href: '#ownership',
    icon: LockKeyhole,
    bg: '/images/Barrel-aging-copy-5.jpeg',
  },
  {
    label: 'Business Model 2',
    title: 'Single Barrel Program',
    text: 'Scarce aged tequila releases for restaurants, bars, retailers, collectors, corporate buyers, and private clients.',
    href: '#single-barrel',
    icon: Wine,
    bg: '/images/Agave Fields.png',
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
                <a href={path.href} className="group relative block min-h-[360px] overflow-hidden rounded-[30px] border border-deep/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
                  <div className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,62,72,.18), rgba(2,62,72,.86)), url('${path.bg}')` }} />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-6">
                      <span className="rounded-full bg-deep/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal group-hover:bg-white/15 group-hover:text-white">{path.label}</span>
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <div className="mt-28">
                      <h3 className="premium-serif text-[38px] leading-none text-deep group-hover:text-white">{path.title}</h3>
                      <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#60787d] group-hover:text-white/78">{path.text}</p>
                      <div className="mt-7 flex items-center gap-2 text-[14px] font-extrabold text-deep group-hover:text-white">Explore <ArrowUpRight className="h-4 w-4" /></div>
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
