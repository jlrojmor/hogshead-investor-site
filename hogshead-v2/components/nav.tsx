import { Shell } from './shell';

const navItems = [
  ['Platform', '#models'],
  ['Market Intelligence', '#market'],
  ['Ownership', '#ownership'],
  ['Aging Journey', '#aging'],
  ['Value Simulator', '#simulator'],
  ['Single Barrel', '#single-barrel'],
];

export function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-4 z-50 pointer-events-none">
      <Shell>
        <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/18 bg-[#031f25]/78 px-3 py-2 shadow-[0_22px_80px_rgba(0,0,0,.28)] backdrop-blur-2xl ring-1 ring-white/10">
          <a href="#top" className="group flex items-center gap-3 rounded-full py-1 pr-3 text-[12px] font-black uppercase tracking-[0.12em] text-white">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/92 shadow-[0_8px_22px_rgba(0,0,0,.22)] ring-1 ring-white/70">
              <img src="/images/Logo_for_Website.png" alt="Hogshead Tequila" className="h-9 w-9 object-contain" />
            </span>
            <span className="leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,.6)]">
              Hogshead <span className="text-gold">Tequila</span>
            </span>
          </a>

          <div className="hidden items-center rounded-full bg-white/92 p-1 shadow-[inset_0_0_0_1px_rgba(2,62,72,.08),0_10px_35px_rgba(0,0,0,.12)] lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.035em] text-deep/68 transition hover:bg-deep hover:text-white"
              >
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </div>

          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-[13px] font-black text-deep shadow-[0_16px_38px_rgba(0,0,0,.22)] transition hover:-translate-y-0.5 hover:bg-gold hover:text-[#211104]">
            Request Info
          </a>
        </div>
      </Shell>
    </nav>
  );
}
