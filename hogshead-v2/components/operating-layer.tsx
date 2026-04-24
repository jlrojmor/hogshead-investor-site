import { Reveal, SectionHeader, Shell } from './shell';

const steps = [
  ['01 · Source', 'Access premium tequila through Mexican distillery partners.'],
  ['02 · Custody', 'Professional storage, oversight, and inventory tracking.'],
  ['03 · Age', 'Time, scarcity, and category thresholds create value.'],
  ['04 · Monetize', 'Bulk sale, brand launch, special release, or barrel program.'],
];

export function OperatingLayer() {
  return (
    <section className="bg-deep py-24 text-white">
      <Shell>
        <Reveal>
          <SectionHeader
            light
            eyebrow="Operating layer"
            title="From source to custody to outcome."
            text="Hogshead is the operating layer between Mexican production, aging economics, brand creation, and U.S. commercial demand."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05} className="rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <b className="text-gold">{title}</b>
              <p className="mt-4 text-[15px] leading-7 text-white/72">{text}</p>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
