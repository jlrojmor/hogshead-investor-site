import { Shell } from './shell';

const navItems = [
  ['Models', '#models'],
  ['Market', '#market'],
  ['Ownership', '#ownership'],
  ['Aging', '#aging'],
  ['Simulator', '#simulator'],
  ['Single Barrel', '#single-barrel'],
];

export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-5 z-50 pointer-events-none">
      <Shell>
        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 bg-[#fbf8f0]/82 px-3 py-2 shadow-[0_16px_60px_rgba(2,62,72,.12)] backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.09em] text-ink">
            <img src="/images/Logo_for_Website.png" alt="Hogshead" className="h-9 w-9 rounded-full object-contain" />
            Hogshead
          </a>
          <div className="hidden rounded-full border border-deep/10 bg-white/55 p-1 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-[12px] font-extrabold text-ink/65 transition hover:bg-white hover:text-deep">
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-deep px-5 py-3 text-[13px] font-extrabold text-white shadow-soft transition hover:-translate-y-0.5">
            Request Info
          </a>
        </div>
      </Shell>
    </nav>
  );
}
