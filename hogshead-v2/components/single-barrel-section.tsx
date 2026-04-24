import { Eyebrow, Reveal, SectionHeader, Shell } from './shell';

const cards = [
  ['Aging range', '1–21Y', 'Añejo, Extra Añejo, Ultra Añejo, and long-aged expressions.'],
  ['ABV profiles', '43–55%', 'Mid proof, high proof, and cask-strength style options.'],
  ['Customization', '750ml', 'Premium glass, Hogshead label system, and client logo placement options.'],
];

const steps = [
  ['Select', 'Age, ABV, and barrel profile.'],
  ['Approve', 'Sample or tasting review.'],
  ['Customize', 'Label system and client mark.'],
  ['Release', 'Channel-compliant sale.'],
];

export function SingleBarrelSection() {
  return (
    <section id="single-barrel" className="bg-gradient-to-b from-[#edf6f4] to-sand py-24">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Single Barrel Program"
            title="For buyers who want a release, not complexity."
            text="A curated aged tequila program for restaurants, bars, liquor stores, corporate buyers, collectors, and private clients."
          />
        </Reveal>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {cards.map(([label, value, text], index) => (
            <Reveal key={label} delay={index * 0.04} className="rounded-[26px] border border-deep/10 bg-white p-7 shadow-soft">
              <Eyebrow>{label}</Eyebrow>
              <strong className="mt-4 block text-[40px] font-extrabold text-deep">{value}</strong>
              <p className="mt-4 text-[16px] leading-8 text-[#60787d]">{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 overflow-hidden rounded-[32px] bg-[linear-gradient(90deg,rgba(2,62,72,.95),rgba(2,62,72,.72)),url('/images/Agave_Mountain.png')] bg-cover bg-center p-8 text-white shadow-premium">
          <div className="grid gap-8 lg:grid-cols-[1fr_330px] lg:items-center">
            <div>
              <Eyebrow light>The bottle</Eyebrow>
              <h2 className="premium-serif mt-3 max-w-4xl text-[48px] leading-[0.94] text-white md:text-[66px]">
                Designed to communicate weight, scarcity, and presence.
              </h2>
              <p className="mt-5 text-[16px] text-white/72">Premium glass, custom back-label options, and a limited-release story for each barrel.</p>
              <div className="mt-7 grid gap-4 md:grid-cols-4">
                {steps.map(([title, text]) => (
                  <div key={title} className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <b className="text-gold">{title}</b>
                    <p className="mt-3 text-[14px] text-white/72">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-[26px] border border-white/20 bg-white/10 p-8 lg:grid place-items-center">
              <div className="relative grid h-[310px] w-[120px] place-items-center rounded-b-[30px] rounded-t-[46px] border-[7px] border-white/55 bg-[linear-gradient(90deg,rgba(255,255,255,.64),rgba(255,255,255,.05)_20%,rgba(187,101,31,.86)_48%,rgba(243,184,94,.72),rgba(255,255,255,.58))] shadow-[0_32px_86px_rgba(0,0,0,.3),inset_0_0_34px_rgba(255,255,255,.58)]">
                <div className="premium-serif bg-[#111] px-4 py-8 text-center text-white">HOGSHEAD<br />TEQUILA</div>
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
