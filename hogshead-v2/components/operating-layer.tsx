import { ArrowRight, ClipboardCheck, Factory, PackageCheck, TimerReset } from 'lucide-react';
import { Reveal, SectionHeader, Shell } from './shell';

const steps = [
  { title: 'Source', text: 'Access premium tequila through Mexican distillery partners.', icon: Factory },
  { title: 'Custody', text: 'Professional storage, oversight, documentation, and inventory tracking.', icon: ClipboardCheck },
  { title: 'Age', text: 'Time, scarcity, and category thresholds create commercial optionality.', icon: TimerReset },
  { title: 'Monetize', text: 'Bulk sale, brand launch, special release, or single-barrel program.', icon: PackageCheck },
];

export function OperatingLayer() {
  return (
    <section className="relative overflow-hidden bg-deep py-28 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,62,72,.95),rgba(2,62,72,.98)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(216,139,66,.18),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(123,198,199,.12),transparent_28%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <SectionHeader
            light
            eyebrow="Operating spine"
            title="From source to custody to outcome."
            text="Hogshead sits between production, custody, aging economics, brand creation, and commercial demand. The platform value is the connective tissue."
          />
        </Reveal>

        <Reveal className="mt-12 rounded-[34px] border border-white/15 bg-white/10 p-5 shadow-[0_34px_110px_rgba(0,0,0,.24)] backdrop-blur-2xl">
          <div className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-[26px] border border-white/15 bg-black/10 p-6 backdrop-blur-xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/40">0{index + 1}</span>
                  </div>
                  <h3 className="premium-serif text-[30px] leading-none text-white">{step.title}</h3>
                  <p className="mt-4 text-[14px] font-semibold leading-7 text-white/68">{step.text}</p>
                  {index < steps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 hidden h-5 w-5 text-gold lg:block" />}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
