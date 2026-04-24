import { Check } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const items = [
  'Underlying tequila inventory',
  'Professional custody and aging oversight',
  'Inventory tracking and reporting',
  'Exit or bottling optionality',
  'Premium product execution',
];

export function OwnershipSection() {
  return (
    <section id="ownership" className="py-24">
      <Shell className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[30px] border border-white/80 bg-white/75 p-8 shadow-premium backdrop-blur-xl">
          <Eyebrow>Real ownership framework</Eyebrow>
          <h2 className="premium-serif mt-3 text-[50px] leading-[0.92] text-deep md:text-[58px]">Not just a certificate.</h2>
          <p className="mt-5 text-[16px] leading-8 text-[#60787d]">
            The public page should not reveal every legal mechanic. It should explain the strategic difference: documented tequila inventory, custody discipline, and actual commercial pathways.
          </p>
          <a href="#contact" className="mt-7 inline-flex rounded-full bg-deep px-5 py-3 text-[14px] font-extrabold text-white">
            Discuss Structure
          </a>
        </Reveal>
        <Reveal className="rounded-[30px] bg-deep p-8 text-white shadow-premium">
          <h3 className="premium-serif text-[36px] text-white">What the model emphasizes</h3>
          <div className="mt-6 divide-y divide-white/15">
            {items.map((item) => (
              <div key={item} className="flex justify-between gap-6 py-5 text-[15px] font-extrabold">
                <span>{item}</span>
                <Check className="h-5 w-5 shrink-0" />
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
