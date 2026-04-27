import { ArrowUpRight, BadgeCheck, Building2, Gift, Store, Users } from 'lucide-react';
import { Eyebrow, Reveal, SectionHeader, Shell } from './shell';

const cards = [
  ['Aging range', '1–21Y', 'Añejo, Extra Añejo, Ultra Añejo, and long-aged expressions.'],
  ['ABV profiles', '43–55%', 'Mid proof, high proof, and cask-strength style options.'],
  ['Bottle format', '750ml', 'Premium glass, Hogshead Tequila label system, and client logo placement options.'],
];

const steps = [
  ['Select', 'Choose age, ABV, barrel profile, and release objective.'],
  ['Approve', 'Review sample or tasting profile before release planning.'],
  ['Customize', 'Use Hogshead Tequila label architecture with client mark placement.'],
  ['Release', 'Execute through channel-compliant commercial pathways.'],
];

const buyers = [
  { label: 'Restaurants & bars', text: 'A differentiated tequila story for premium menus.', icon: Building2 },
  { label: 'Liquor stores', text: 'Scarce release inventory with shelf presence.', icon: Store },
  { label: 'Corporate buyers', text: 'Limited releases for gifting and events.', icon: Gift },
  { label: 'Private clients', text: 'Personalized barrels for collectors and groups.', icon: Users },
];

export function SingleBarrelSection() {
  return (
    <section id="single-barrel" className="relative overflow-hidden bg-gradient-to-b from-[#edf6f4] to-sand py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(123,198,199,.22),transparent_24%),radial-gradient(circle_at_78%_52%,rgba(216,139,66,.12),transparent_28%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Single Barrel Program"
            title="For buyers who want a release, not complexity."
            text="A curated aged tequila program for restaurants, bars, liquor stores, corporate buyers, collectors, and private clients."
          />
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {cards.map(([label, value, text], index) => (
            <Reveal key={label} delay={index * 0.04} className="rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
              <Eyebrow>{label}</Eyebrow>
              <strong className="mt-4 block text-[48px] font-extrabold leading-none text-deep">{value}</strong>
              <p className="mt-4 text-[16px] leading-8 text-[#60787d]">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-7 overflow-hidden rounded-[40px] bg-deep text-white shadow-premium">
          <div className="grid min-h-[700px] lg:grid-cols-[1fr_460px]">
            <div className="relative p-8 lg:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,62,72,.97),rgba(2,62,72,.82)),url('/images/Agave_Mountain.png')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(216,139,66,.18),transparent_28%),radial-gradient(circle_at_72%_54%,rgba(123,198,199,.12),transparent_30%)]" />
              <div className="relative z-10">
                <Eyebrow light>The release system</Eyebrow>
                <h2 className="premium-serif mt-3 max-w-4xl text-[48px] leading-[0.94] text-white md:text-[66px]">
                  Designed to communicate weight, scarcity, and presence.
                </h2>
                <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/74">
                  The product is not only liquid. It is aged inventory, release discipline, bottle presentation, and a story a buyer can actually use.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-4">
                  {steps.map(([title, text], index) => (
                    <div key={title} className="group rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14">
                      <span className="block text-[42px] font-black leading-none text-white/16 transition group-hover:text-gold/80">0{index + 1}</span>
                      <b className="mt-4 block text-[17px] text-gold">{title}</b>
                      <p className="mt-3 text-[14px] leading-6 text-white/72">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {buyers.map((buyer) => {
                    const Icon = buyer.icon;
                    return (
                      <div key={buyer.label} className="flex gap-4 rounded-[22px] border border-white/12 bg-black/10 p-5 backdrop-blur-xl transition hover:bg-black/18">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-gold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-extrabold text-white">{buyer.label}</h4>
                          <p className="mt-2 text-[13px] font-semibold leading-6 text-white/65">{buyer.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative grid place-items-center overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_50%_34%,rgba(216,139,66,.32),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,.045))] p-8 lg:border-l lg:border-t-0">
              <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-gold/12 blur-3xl" />
              <div className="absolute inset-8 rounded-[36px] bg-white/[0.045] shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]" />
              <div className="relative z-10 text-center">
                <div className="relative mx-auto h-[450px] w-[230px]">
                  <div className="absolute bottom-1 left-1/2 h-12 w-48 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
                  <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle,rgba(255,255,255,.16),transparent_64%)]" />
                  <img
                    src="/images/Hogshead Bottle.png"
                    alt="Hogshead Tequila bottle"
                    className="relative z-10 mx-auto h-full w-full object-contain drop-shadow-[0_38px_52px_rgba(0,0,0,.50)]"
                  />
                </div>
                <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-center gap-2 text-gold">
                    <BadgeCheck className="h-5 w-5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em]">Premium glass</span>
                  </div>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-white/72">
                    Approximately 1.2kg empty bottle weight; around 1.9kg filled for a 750ml release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[26px] border border-deep/10 bg-white/72 p-5 shadow-soft backdrop-blur-xl">
          <p className="max-w-2xl text-[14px] font-semibold leading-7 text-[#60787d]">
            Hogshead Tequila starts with Texas and California focus, then expands by channel and compliance readiness.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-gold hover:text-[#211104]">
            Request release list <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Shell>
    </section>
  );
}
