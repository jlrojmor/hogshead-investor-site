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
    <section id="single-barrel" className="relative overflow-hidden bg-gradient-to-b from-[#edf6f4] to-sand py-28 scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(123,198,199,.22),transparent_24%),radial-gradient(circle_at_78%_52%,rgba(216,139,66,.12),transparent_28%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Single Barrel Program"
            title="For buyers who want a release, not complexity."
            text="A curated aged tequila program for restaurants, bars, liquor stores, corporate buyers, collectors, and private clients."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map(([label, value, text], index) => (
            <Reveal key={label} delay={index * 0.04} className="group rounded-[30px] border border-deep/10 bg-white/88 p-7 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:shadow-premium">
              <Eyebrow>{label}</Eyebrow>
              <strong className="mt-4 block text-[52px] font-extrabold leading-none text-deep">{value}</strong>
              <p className="mt-4 text-[16px] leading-8 text-[#60787d]">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 overflow-hidden rounded-[44px] bg-deep text-white shadow-premium">
          <div className="grid min-h-[740px] lg:grid-cols-[1fr_440px]">
            <div className="relative p-8 md:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,62,72,.98),rgba(2,62,72,.78)),url('/images/Agave_Mountain.png')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(216,139,66,.18),transparent_28%),radial-gradient(circle_at_76%_54%,rgba(123,198,199,.14),transparent_30%)]" />
              <div className="relative z-10">
                <Eyebrow light>The release system</Eyebrow>
                <h2 className="premium-serif mt-3 max-w-4xl text-[46px] leading-[0.94] text-white md:text-[68px]">
                  Designed to communicate weight, scarcity, and presence.
                </h2>
                <p className="mt-5 max-w-2xl text-[16px] font-medium leading-8 text-white/76">
                  The product is not only liquid. It is aged inventory, release discipline, bottle presentation, and a story a buyer can actually use.
                </p>

                <div className="mt-9 grid gap-4 md:grid-cols-4">
                  {steps.map(([title, text], index) => (
                    <div key={title} className="group/step rounded-[26px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
                      <span className="block text-[54px] font-black leading-none text-white/18 transition group-hover/step:text-gold">0{index + 1}</span>
                      <b className="mt-4 block text-[17px] text-gold">{title}</b>
                      <p className="mt-3 text-[14px] leading-6 text-white/74">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 grid gap-4 md:grid-cols-2">
                  {buyers.map((buyer) => {
                    const Icon = buyer.icon;
                    return (
                      <div key={buyer.label} className="flex gap-4 rounded-[24px] border border-white/14 bg-black/12 p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-black/20">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-gold ring-1 ring-white/12">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-extrabold text-white">{buyer.label}</h4>
                          <p className="mt-2 text-[13px] font-semibold leading-6 text-white/66">{buyer.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative grid place-items-center overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_50%_33%,rgba(216,139,66,.34),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.045))] p-8 lg:border-l lg:border-t-0">
              <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-gold/12 blur-3xl" />
              <div className="absolute inset-8 rounded-[38px] bg-white/[0.045] shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]" />
              <div className="relative z-10 text-center">
                <div className="relative mx-auto h-[470px] w-[245px]">
                  <div className="absolute bottom-1 left-1/2 h-12 w-52 -translate-x-1/2 rounded-full bg-black/32 blur-xl" />
                  <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(circle,rgba(255,255,255,.18),transparent_64%)]" />
                  <img
                    src="/images/Hogshead Bottle.png"
                    alt="Hogshead Tequila bottle"
                    className="relative z-10 mx-auto h-full w-full object-contain drop-shadow-[0_42px_58px_rgba(0,0,0,.52)] transition duration-500 hover:scale-[1.025]"
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

        <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-deep/10 bg-white/74 p-5 shadow-soft backdrop-blur-xl">
          <p className="max-w-2xl text-[14px] font-semibold leading-7 text-[#60787d]">
            Hogshead Tequila qualifies each release by buyer type, channel, compliance pathway, and available aged inventory.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-gold hover:text-[#211104]">
            Request release list <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </Shell>
    </section>
  );
}
