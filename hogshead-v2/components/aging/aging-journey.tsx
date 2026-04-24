'use client';

import { useState } from 'react';
import { Eyebrow, Reveal, Shell } from '../shell';

const stages = [
  { name: 'Blanco', months: '0–2 months', color: '#E7F4EF', text: 'Clean agave base before meaningful barrel influence.', image: '/images/blanco.png' },
  { name: 'Reposado', months: '2+ months', color: '#D59A38', text: 'Early oak, spice, vanilla, and softer edges.', image: '/images/reposado.png' },
  { name: 'Añejo', months: '12+ months', color: '#A96022', text: 'Deeper wood, caramel, dried fruit, and complexity.', image: '/images/anejo.png' },
  { name: 'Extra Añejo', months: '36+ months', color: '#6A3017', text: 'Scarcity, depth, and premium shelf positioning.', image: '/images/extra-anejo.png' },
];

export function AgingJourney() {
  const [active, setActive] = useState(stages[1]);

  return (
    <section id="aging" className="py-24">
      <Shell className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <Reveal className="hidden rounded-[30px] border border-deep/10 bg-white p-8 shadow-premium lg:block">
          <div className="flex min-h-[360px] flex-col items-center justify-center">
            <img src={active.image} alt={active.name} className="h-[260px] w-auto object-contain drop-shadow-[0_24px_42px_rgba(2,62,72,.13)]" />
            <div className="premium-serif mt-6 text-center text-[34px] text-deep">{active.name}</div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Aging journey</Eyebrow>
            <h2 className="premium-serif mt-3 max-w-4xl text-[50px] leading-[0.94] text-deep md:text-[68px]">
              Time turns tequila into a scarce commercial asset.
            </h2>
            <p className="mt-5 text-[16px] text-[#60787d]">
              Click each stage to see how category thresholds and oak influence change the commercial profile.
            </p>
          </Reveal>
          <div className="mt-7 grid gap-4">
            {stages.map((stage, index) => (
              <Reveal key={stage.name} delay={index * 0.04}>
                <button
                  onClick={() => setActive(stage)}
                  className={`w-full rounded-[22px] border p-6 text-left shadow-soft transition hover:-translate-y-0.5 ${active.name === stage.name ? 'border-deep/20 bg-white' : 'border-deep/10 bg-white/75'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full" style={{ background: stage.color }} />
                    <h3 className="premium-serif text-[30px] text-deep">{stage.name} · {stage.months}</h3>
                  </div>
                  <p className="mt-2 text-[15px] text-[#60787d]">{stage.text}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
