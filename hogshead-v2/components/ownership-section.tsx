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
    <section id="ownership" className="relative overflow-hidden py-20 scroll-mt-28 lg:min-h-screen lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,139,66,.10),transparent_28%),radial-gradient(circle_at_82%_42%,rgba(123,198,199,.15),transparent_32%)]" />
      <Shell className="relative z-10">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>Business Model 1 · Ownership engine</Eyebrow>
            <h2 className="premium-serif mt-3 max-w-3xl text-[48px] leading-[0.9] tracking-[-0.04em] text-deep md:text-[68px]">
              Own the liquid before time changes the asset.
            </h2>
          </div>
          <p className="max-w-2xl text-[16px] font-semibold leading-8 text-[#60787d]">
            Hogshead Tequila gives buyers a way to enter at the beginning of the aging curve: fresh tequila is acquired, professionally aged, actively managed, and eventually monetized through structured commercial exits.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <Reveal className="relative overflow-hidden rounded-[42px] bg-deep p-6 text-white shadow-premium md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.90),rgba(2,25,30,.98)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,139,66,.22),transparent_28%),radial-gradient(circle_at_86%_72%,rgba(123,198,199,.13),transparent_32%)]" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <Eyebrow light>Asset lifecycle</Eyebrow>
                  <h3 className="premium-serif mt-2 text-[36px] leading-[0.98] text-white md:text-[48px]">From new fill to exit path.</h3>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-aqua backdrop-blur-xl">
                  Joven → aged inventory
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {engineSteps.map((step) => (
                  <div key={step.title} className="group relative overflow-hidden rounded-[26px] bg-white/[0.075] p-[1px] shadow-[0_18px_42px_rgba(0,0,0,.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.14]">
                    <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,.14),rgba(255,255,255,.03),rgba(216,139,66,.18))] opacity-70 transition group-hover:opacity-100" />
                    <div className="relative grid gap-4 rounded-[25px] bg-[#0b333a]/78 p-4 md:grid-cols-[76px_0.7fr_1.3fr] md:items-center md:p-5">
                      <div className="grid h-16 w-16 place-items-center rounded-[22px] bg-gradient-to-br from-white/18 to-white/6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] group-hover:from-gold group-hover:to-[#c57930] group-hover:text-[#1f1006]">
                        <span className="text-[23px] font-black leading-none tracking-[-0.04em]">{step.number}</span>
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{step.kicker}</p>
                        <h4 className="premium-serif mt-1 text-[29px] leading-[0.96] text-white">{step.title}</h4>
                      </div>

                      <p className="text-[13px] font-semibold leading-6 text-white/76">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal className="rounded-[36px] border border-deep/10 bg-white/86 p-7 shadow-premium backdrop-blur-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <Eyebrow>What changes vs. paper certificates</Eyebrow>
                  <h3 className="premium-serif mt-2 max-w-lg text-[36px] leading-[0.95] text-deep">The asset is the tequila, not the PDF.</h3>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-deep text-gold shadow-[0_18px_38px_rgba(2,62,72,.20)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-[15px] font-semibold leading-7 text-[#60787d]">
                The model is designed around underlying inventory, custody discipline, and commercial optionality — not a generic document issued without an asset operation behind it.
              </p>
              <div className="mt-5 divide-y divide-deep/10">
                {emphasisItems.map((item) => (
                  <div key={item} className="flex justify-between gap-5 py-3 text-[13px] font-extrabold text-deep">
                    <span>{item}</span>
                    <Check className="h-5 w-5 shrink-0 text-teal" />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative overflow-hidden rounded-[36px] bg-[#f8f4ec] p-6 shadow-soft">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/16 blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-deep text-gold">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-teal">Commercial exits</p>
                    <h4 className="premium-serif text-[28px] leading-none text-deep">Multiple ways to monetize.</h4>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {exitOptions.map((option) => (
                    <div key={option} className="rounded-2xl bg-white px-4 py-3 text-[13px] font-black text-deep shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] transition hover:-translate-y-0.5 hover:shadow-soft">
                      {option}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-gold hover:text-[#211104]">
                  Discuss ownership path <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-5 grid gap-3 rounded-[28px] border border-deep/10 bg-white/72 p-4 shadow-soft backdrop-blur-xl md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <Timer className="h-5 w-5 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Entry occurs before aging value is fully created.</span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <FileText className="h-5 w-5 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Reporting tracks the asset as the tequila matures.</span>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-deep/[0.05] p-4">
            <TrendingUp className="h-5 w-5 text-gold" />
            <span className="text-[13px] font-extrabold text-deep">Exit strategy is built around commercial demand.</span>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
