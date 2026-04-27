import { ArrowUpRight, BadgeCheck, Boxes, Check, FileText, RefreshCw, ShieldCheck, Timer, TrendingUp } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const engineSteps = [
  {
    number: '01',
    title: 'Acquire joven tequila',
    text: 'The asset starts as fresh tequila just out of production — before time, oak, scarcity, and category thresholds begin compounding value.',
    icon: BadgeCheck,
  },
  {
    number: '02',
    title: 'Place into barrels',
    text: 'Hogshead Tequila coordinates professional aging under controlled custody, inventory tracking, and asset administration.',
    icon: Boxes,
  },
  {
    number: '03',
    title: 'Manage and report',
    text: 'The owner is not left with a static certificate. The asset is monitored, reported, and positioned as it ages.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Exit or convert',
    text: 'When the owner wants liquidity or a commercial path, the asset can move through title transfer, bulk resale, brand launch, or release strategy.',
    icon: TrendingUp,
  },
];

const emphasisItems = [
  'Fresh tequila inventory becomes the investable base',
  'Aging converts liquid into scarce commercial inventory',
  'Reporting keeps the owner close to the asset',
  'Exit paths are designed before the asset is monetized',
  'Ownership story is tied to the underlying tequila, not generic paper',
];

const exitOptions = ['Title transfer', 'Bulk sale', 'Brand path', 'Single-barrel release'];

export function OwnershipSection() {
  return (
    <section id="ownership" className="relative overflow-hidden py-28 scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,139,66,.10),transparent_28%),radial-gradient(circle_at_82%_42%,rgba(123,198,199,.15),transparent_32%)]" />
      <Shell className="relative z-10">
        <Reveal className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <Eyebrow>Business Model 1 · Ownership engine</Eyebrow>
            <h2 className="premium-serif mt-4 max-w-3xl text-[56px] leading-[0.88] tracking-[-0.04em] text-deep md:text-[82px]">
              Own the liquid before time changes the asset.
            </h2>
          </div>
          <p className="max-w-2xl text-[17px] font-semibold leading-8 text-[#60787d]">
            Hogshead Tequila gives buyers a way to enter at the beginning of the aging curve: fresh tequila is acquired, professionally aged, actively managed, and eventually monetized through structured commercial exits.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative overflow-hidden rounded-[44px] bg-deep p-8 text-white shadow-premium md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.92),rgba(2,31,37,.98)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(216,139,66,.20),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(123,198,199,.12),transparent_34%)]" />
            <div className="absolute left-12 right-12 top-1/2 hidden h-px bg-gradient-to-r from-gold/0 via-gold/45 to-gold/0 lg:block" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <Eyebrow light>Asset lifecycle</Eyebrow>
                  <h3 className="premium-serif mt-3 text-[42px] leading-none text-white md:text-[56px]">From new fill to exit path.</h3>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-aqua backdrop-blur-xl">
                  Joven → aged inventory
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {engineSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="group relative overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.095] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/18" />
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-deep shadow-[0_14px_34px_rgba(0,0,0,.24)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-[12px] font-black uppercase tracking-[0.18em] text-gold">{step.number}</span>
                          <h4 className="premium-serif mt-2 text-[28px] leading-none text-white">{step.title}</h4>
                          <p className="mt-4 text-[14px] font-semibold leading-7 text-white/72">{step.text}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal className="rounded-[38px] border border-deep/10 bg-white/82 p-8 shadow-premium backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <Eyebrow>What changes vs. paper certificates</Eyebrow>
                  <h3 className="premium-serif mt-3 max-w-lg text-[42px] leading-[0.95] text-deep">The asset is the tequila, not the PDF.</h3>
                </div>
                <div className="grid h-13 w-13 place-items-center rounded-full bg-deep text-gold shadow-[0_18px_38px_rgba(2,62,72,.20)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-5 text-[16px] font-semibold leading-8 text-[#60787d]">
                The model is designed around underlying inventory, custody discipline, and commercial optionality — not a generic document issued without an asset operation behind it.
              </p>
              <div className="mt-6 divide-y divide-deep/10">
                {emphasisItems.map((item) => (
                  <div key={item} className="flex justify-between gap-5 py-4 text-[14px] font-extrabold text-deep">
                    <span>{item}</span>
                    <Check className="h-5 w-5 shrink-0 text-teal" />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-[38px] bg-[#f8f4ec] p-7 shadow-soft">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/16 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-deep text-gold">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal">Commercial exits</p>
                    <h4 className="premium-serif text-[30px] leading-none text-deep">Multiple ways to monetize.</h4>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {exitOptions.map((option) => (
                    <div key={option} className="rounded-2xl bg-white px-4 py-4 text-[14px] font-black text-deep shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)]">
                      {option}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-gold hover:text-[#211104]">
                  Discuss ownership path <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-7 grid gap-4 rounded-[30px] border border-deep/10 bg-white/72 p-5 shadow-soft backdrop-blur-xl md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <Timer className="h-6 w-6 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Entry occurs before aging value is fully created.</span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <Boxes className="h-6 w-6 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Barrel aging creates category and scarcity pressure.</span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <TrendingUp className="h-6 w-6 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Exit strategy is built around commercial demand.</span>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
