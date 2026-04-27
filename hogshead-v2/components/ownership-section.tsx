import { ArrowUpRight, Check, FileText, RefreshCw, ShieldCheck, Timer, TrendingUp } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const engineSteps = [
  {
    number: '01',
    kicker: 'Entry',
    title: 'Fresh tequila',
    text: 'Acquire joven tequila at the beginning of the curve — before oak, scarcity, and aging thresholds reshape its commercial profile.',
  },
  {
    number: '02',
    kicker: 'Aging',
    title: 'Barrel custody',
    text: 'Move the liquid into professional barrel aging with controlled custody, inventory tracking, and asset administration.',
  },
  {
    number: '03',
    kicker: 'Control',
    title: 'Managed asset',
    text: 'Hogshead Tequila monitors, reports, and positions the inventory as it moves through aging categories and market windows.',
  },
  {
    number: '04',
    kicker: 'Exit',
    title: 'Commercial path',
    text: 'The owner can monetize through title transfer, bulk resale, brand launch, or a single-barrel release strategy.',
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
        <Reveal className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <Eyebrow>Business Model 1 · Ownership engine</Eyebrow>
            <h2 className="premium-serif mt-4 max-w-3xl text-[54px] leading-[0.9] tracking-[-0.04em] text-deep md:text-[78px]">
              Own the liquid before time changes the asset.
            </h2>
          </div>
          <p className="max-w-2xl text-[17px] font-semibold leading-8 text-[#60787d]">
            Hogshead Tequila gives buyers a way to enter at the beginning of the aging curve: fresh tequila is acquired, professionally aged, actively managed, and eventually monetized through structured commercial exits.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative overflow-hidden rounded-[46px] bg-deep p-7 text-white shadow-premium md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.90),rgba(2,25,30,.98)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,139,66,.22),transparent_28%),radial-gradient(circle_at_86%_72%,rgba(123,198,199,.13),transparent_32%)]" />
            <div className="absolute left-16 top-[195px] hidden h-[calc(100%-285px)] w-px bg-gradient-to-b from-gold/0 via-gold/55 to-gold/0 md:block" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <Eyebrow light>Asset lifecycle</Eyebrow>
                  <h3 className="premium-serif mt-3 text-[42px] leading-[0.96] text-white md:text-[58px]">From new fill to exit path.</h3>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-aqua backdrop-blur-xl">
                  Joven → aged inventory
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {engineSteps.map((step, index) => (
                  <div key={step.title} className="group relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.085] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13] md:p-6">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-aqua to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/18" />
                    <div className="relative z-10 grid gap-5 md:grid-cols-[96px_1fr] md:items-start">
                      <div className="relative">
                        <div className="grid h-20 w-20 place-items-center rounded-[26px] bg-white/[0.12] ring-1 ring-white/16 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_18px_36px_rgba(0,0,0,.16)] transition group-hover:bg-gold group-hover:text-[#211104]">
                          <span className="text-[26px] font-black leading-none">{step.number}</span>
                        </div>
                        {index < engineSteps.length - 1 && <div className="absolute left-10 top-20 hidden h-8 w-px bg-gold/35 md:block" />}
                      </div>

                      <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr] md:items-start">
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gold">{step.kicker}</p>
                          <h4 className="premium-serif mt-2 text-[34px] leading-[0.96] text-white">{step.title}</h4>
                        </div>
                        <p className="text-[14px] font-semibold leading-7 text-white/74 md:pt-6">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-7">
            <Reveal className="rounded-[40px] border border-deep/10 bg-white/86 p-8 shadow-premium backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <Eyebrow>What changes vs. paper certificates</Eyebrow>
                  <h3 className="premium-serif mt-3 max-w-lg text-[42px] leading-[0.95] text-deep">The asset is the tequila, not the PDF.</h3>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-deep text-gold shadow-[0_18px_38px_rgba(2,62,72,.20)]">
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

            <Reveal className="relative overflow-hidden rounded-[40px] bg-[#f8f4ec] p-7 shadow-soft">
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
                    <div key={option} className="rounded-2xl bg-white px-4 py-4 text-[14px] font-black text-deep shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] transition hover:-translate-y-0.5 hover:shadow-soft">
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
            <FileText className="h-6 w-6 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Reporting tracks the asset as the tequila matures.</span>
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
