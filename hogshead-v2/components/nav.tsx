'use client';

import { useEffect, useState } from 'react';
import { Shell } from './shell';

const navItems = [
  ['Platform', '#models'],
  ['Market', '#market'],
  ['Ownership', '#ownership'],
  ['Aging', '#aging'],
  ['Simulator', '#simulator'],
  ['Single Barrel', '#single-barrel'],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 pointer-events-none">
      <Shell>
        <div
          className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2 backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.23] shadow-[0_22px_78px_rgba(2,18,22,.28),inset_0_1px_0_rgba(255,255,255,.34),inset_0_-1px_0_rgba(255,255,255,.08)] ring-1 ring-white/22'
              : 'bg-white/[0.18] shadow-[0_22px_90px_rgba(2,18,22,.30),inset_0_1px_0_rgba(255,255,255,.30),inset_0_-1px_0_rgba(255,255,255,.07)] ring-1 ring-white/18'
          }`}
        >
          <a href="#top" className="group flex min-w-[236px] items-center gap-3 rounded-full py-1 pr-3 text-[12px] font-black uppercase tracking-[0.12em] text-white no-underline">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_10px_28px_rgba(0,0,0,.24)]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f8f2e7]">
                <img src="/images/Logo_for_Website.png" alt="Hogshead Tequila" className="h-8 w-8 object-contain" />
              </span>
            </span>
            <span className="leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.85)]">
              Hogshead <span className="text-gold">Tequila</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white/[0.18] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,.22),0_10px_28px_rgba(0,0,0,.12)] ring-1 ring-white/16 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative overflow-hidden rounded-full px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.09em] text-white no-underline transition hover:text-[#211104]"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 drop-shadow-[0_1px_8px_rgba(0,0,0,.65)] group-hover:drop-shadow-none">{label}</span>
              </a>
            ))}
          </div>

          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-[13px] font-black text-deep no-underline shadow-[0_16px_38px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 hover:bg-gold hover:text-[#211104]">
            Request Info
          </a>
        </div>
      </Shell>
    </nav>
  );
}
