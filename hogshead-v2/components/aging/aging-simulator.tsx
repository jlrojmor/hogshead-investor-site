'use client';

import { useEffect, useMemo, useState } from 'react';
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { money, stageForMonth } from '@/lib/formatters';
import { Reveal, SectionHeader, Shell } from '../shell';

type AgingRow = {
  month: number;
  liters_remaining: number;
  cost_per_l?: number;
  resale_price_per_l: {
    low: number;
    base: number;
    high: number;
  };
};

const fallback: AgingRow[] = Array.from({ length: 121 }, (_, month) => {
  const liters_remaining = 200 * Math.pow(0.996, month);
  const premiumJump = month >= 36 ? 1.32 : month >= 12 ? 1.13 : month >= 2 ? 1.04 : 1;
  const base = (5.5 + month * 0.22 + Math.max(0, month - 36) * 0.08) * premiumJump;
  return {
    month,
    liters_remaining,
    cost_per_l: 3.8 + month * 0.03,
    resale_price_per_l: { low: base * 0.86, base, high: base * 1.18 },
  };
});

export function AgingSimulator() {
  const [data, setData] = useState<AgingRow[]>(fallback);
  const [month, setMonth] = useState(36);

  useEffect(() => {
    fetch('/data/aging.json')
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json.series)) setData(json.series);
      })
      .catch(() => setData(fallback));
  }, []);

  const row = useMemo(() => data.reduce((a, b) => (Math.abs(b.month - month) < Math.abs(a.month - month) ? b : a), data[0]), [data, month]);
  const maxMonth = Math.max(...data.map((d) => d.month));
  const chartData = data.map((d) => ({
    month: d.month,
    low: d.liters_remaining * d.resale_price_per_l.low,
    base: d.liters_remaining * d.resale_price_per_l.base,
    high: d.liters_remaining * d.resale_price_per_l.high,
  }));

  return (
    <section id="simulator" className="py-24">
      <Shell>
        <Reveal>
          <SectionHeader
            eyebrow="Aging value simulator"
            title="Make the economics tangible."
            text="Move the slider to update stage, liters remaining, and the low/base/high value range."
          />
        </Reveal>
        <Reveal className="mt-10 rounded-[34px] border border-white/80 bg-white/80 p-5 shadow-premium backdrop-blur-xl">
          <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
            <div className="rounded-[26px] bg-deep p-7 text-white">
              <h3 className="premium-serif text-[34px] text-white">Aging month</h3>
              <p className="mt-4 text-[15px] text-white/72">Update the model live.</p>
              <input className="mt-8 w-full accent-gold" type="range" min={0} max={maxMonth} value={month} onChange={(e) => setMonth(Number(e.target.value))} />
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ['Month', row.month],
                  ['Stage', stageForMonth(row.month)],
                  ['Liters', `${row.liters_remaining.toFixed(1)} L`],
                  ['Base', money(row.liters_remaining * row.resale_price_per_l.base)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.12em] text-white/60">{label}</span>
                    <strong className="block text-[21px] text-white">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[390px] rounded-[26px] bg-white p-5">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData}>
                  <CartesianGrid vertical={false} stroke="rgba(2,62,72,.08)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis tickFormatter={(value) => `$${Math.round(Number(value) / 1000)}k`} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => money(Number(value))} />
                  <Area dataKey="base" fill="rgba(11,111,114,.08)" stroke="none" />
                  <Line dataKey="low" dot={false} stroke="#9db0b4" strokeWidth={2} />
                  <Line dataKey="base" dot={false} stroke="#0B6F72" strokeWidth={4} />
                  <Line dataKey="high" dot={false} stroke="#D88B42" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
