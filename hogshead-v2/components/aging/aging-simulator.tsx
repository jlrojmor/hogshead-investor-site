'use client';

import { useEffect, useMemo, useState } from 'react';
import { Area, CartesianGrid, ComposedChart, Line, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowUpRight, CircleDollarSign, Droplets, Gauge, TimerReset } from 'lucide-react';
import { money, stageForMonth } from '@/lib/formatters';
import { Eyebrow, Reveal, Shell } from '../shell';

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

type Scenario = 'low' | 'base' | 'high';

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

function scenarioLabel(scenario: Scenario) {
  if (scenario === 'low') return 'Conservative';
  if (scenario === 'high') return 'Upside';
  return 'Base case';
}

export function AgingSimulator() {
  const [data, setData] = useState<AgingRow[]>(fallback);
  const [month, setMonth] = useState(36);
  const [scenario, setScenario] = useState<Scenario>('base');

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
  const selectedValue = row.liters_remaining * row.resale_price_per_l[scenario];
  const baseValue = row.liters_remaining * row.resale_price_per_l.base;
  const lowValue = row.liters_remaining * row.resale_price_per_l.low;
  const highValue = row.liters_remaining * row.resale_price_per_l.high;
  const startingValue = data[0].liters_remaining * data[0].resale_price_per_l.base;
  const valueMultiple = baseValue / startingValue;

  const chartData = data.map((d) => ({
    month: d.month,
    low: d.liters_remaining * d.resale_price_per_l.low,
    base: d.liters_remaining * d.resale_price_per_l.base,
    high: d.liters_remaining * d.resale_price_per_l.high,
  }));

  return (
    <section id="simulator" className="relative overflow-hidden bg-[#06252b] py-28 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,37,43,.94),rgba(6,37,43,.98)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(216,139,66,.22),transparent_24%),radial-gradient(circle_at_20%_40%,rgba(123,198,199,.12),transparent_30%)]" />
      <Shell className="relative z-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1fr] lg:items-end">
            <div>
              <Eyebrow light>Aging value simulator</Eyebrow>
              <h2 className="premium-serif mt-4 max-w-4xl text-[52px] leading-[0.92] tracking-[-0.035em] text-white md:text-[76px]">
                Time is the asset engine.
              </h2>
            </div>
            <p className="max-w-xl text-[16px] leading-8 text-white/70">
              Move the timeline and choose a scenario. The module translates aging time into liters remaining, category stage, and estimated exit value.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-[38px] border border-white/15 bg-white/10 p-5 shadow-[0_34px_110px_rgba(0,0,0,.28)] backdrop-blur-2xl">
          <div className="grid gap-5 xl:grid-cols-[380px_1fr]">
            <div className="rounded-[30px] border border-white/15 bg-[#073740]/92 p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-aqua">Current stage</p>
                  <h3 className="premium-serif mt-2 text-[42px] leading-none text-white">{stageForMonth(row.month)}</h3>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-gold">
                  <TimerReset className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between text-[12px] font-bold text-white/60">
                  <span>Month 0</span>
                  <span>{maxMonth} months</span>
                </div>
                <input className="w-full accent-gold" type="range" min={0} max={maxMonth} value={month} onChange={(e) => setMonth(Number(e.target.value))} />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                {(['low', 'base', 'high'] as Scenario[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => setScenario(item)}
                    className={`rounded-2xl border px-3 py-3 text-[12px] font-extrabold transition ${scenario === item ? 'border-gold bg-gold text-[#211104]' : 'border-white/15 bg-white/8 text-white/70 hover:bg-white/12'}`}
                  >
                    {scenarioLabel(item)}
                  </button>
                ))}
              </div>

              <div className="mt-7 rounded-[24px] border border-white/15 bg-white/10 p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50">Estimated exit value</p>
                <strong className="mt-2 block text-[44px] font-extrabold leading-none text-white">{money(selectedValue)}</strong>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-white/64">
                  Range today: {money(lowValue)} – {money(highValue)} based on low/base/high resale assumptions.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'Month', value: row.month, icon: Gauge },
                  { label: 'Liters left', value: `${row.liters_remaining.toFixed(1)} L`, icon: Droplets },
                  { label: 'Base $/L', value: money(row.resale_price_per_l.base, 1), icon: CircleDollarSign },
                  { label: 'Value multiple', value: `${valueMultiple.toFixed(1)}x`, icon: ArrowUpRight },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                      <Icon className="mb-3 h-4 w-4 text-gold" />
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/45">{item.label}</span>
                      <strong className="mt-1 block text-[20px] leading-tight text-white">{item.value}</strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/15 bg-white p-5 text-ink">
              <div className="flex flex-wrap items-start justify-between gap-4 px-2 pt-2">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-teal">Aging curve</p>
                  <h3 className="premium-serif mt-2 text-[34px] leading-none text-deep">Low / base / upside value range</h3>
                </div>
                <div className="rounded-full bg-deep px-4 py-2 text-[12px] font-extrabold text-white">Month {row.month}</div>
              </div>
              <div className="mt-6 h-[470px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData} margin={{ top: 20, right: 28, left: 8, bottom: 12 }}>
                    <defs>
                      <linearGradient id="valueBand" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0B6F72" stopOpacity={0.18} />
                        <stop offset="100%" stopColor="#0B6F72" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} stroke="rgba(2,62,72,.06)" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#60787d', fontSize: 11 }} interval={11} />
                    <YAxis tickFormatter={(value) => `$${Math.round(Number(value) / 1000)}k`} axisLine={false} tickLine={false} tick={{ fill: '#60787d', fontSize: 11 }} />
                    <Tooltip formatter={(value) => money(Number(value))} labelFormatter={(label) => `Month ${label}`} />
                    <Area dataKey="high" fill="url(#valueBand)" stroke="none" />
                    <Line dataKey="low" dot={false} stroke="#A9BDC0" strokeWidth={2} />
                    <Line dataKey="base" dot={false} stroke="#0B6F72" strokeWidth={4} />
                    <Line dataKey="high" dot={false} stroke="#D88B42" strokeWidth={3} />
                    <ReferenceDot x={row.month} y={selectedValue} r={7} fill="#D88B42" stroke="#fff" strokeWidth={3} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="grid gap-3 border-t border-deep/10 px-2 py-4 md:grid-cols-3">
                {['Angel share reduces available liters', 'Category thresholds change perception', 'Scarcity supports premium positioning'].map((text) => (
                  <div key={text} className="rounded-2xl bg-deep/5 p-4 text-[13px] font-bold leading-6 text-[#60787d]">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
