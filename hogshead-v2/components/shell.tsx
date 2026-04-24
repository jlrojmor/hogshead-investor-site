import { motion } from 'framer-motion';

export function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.75, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-extrabold uppercase tracking-[0.28em] ${light ? 'text-[#8dd7d8]' : 'text-teal'}`}>{children}</p>;
}

export function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <h2 className={`premium-serif mt-4 max-w-4xl text-[44px] leading-[0.95] tracking-[-0.035em] md:text-[64px] ${light ? 'text-white' : 'text-deep'}`}>{title}</h2>
      </div>
      {text && <p className={`max-w-xl text-[16px] leading-8 ${light ? 'text-white/70' : 'text-[#60787d]'}`}>{text}</p>}
    </div>
  );
}
