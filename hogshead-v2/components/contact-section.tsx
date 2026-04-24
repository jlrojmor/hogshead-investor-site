import { Eyebrow, Reveal, Shell } from './shell';

export function ContactSection() {
  return (
    <section id="contact" className="bg-deep py-24 text-white">
      <Shell className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <Reveal>
          <Eyebrow light>Request information</Eyebrow>
          <h2 className="premium-serif mt-3 text-[50px] leading-[0.94] text-white md:text-[72px]">
            Start with the right conversation.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/72">
            Tell us if you are exploring tequila investment exposure, brand creation, single-barrel sales, or restaurant / retail opportunities.
          </p>
          <p className="mt-6 font-bold">contact@hogshead-tequila.com</p>
        </Reveal>
        <Reveal className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
          <form action="mailto:contact@hogshead-tequila.com" method="post" encType="text/plain" className="grid gap-3">
            <input name="name" type="text" placeholder="Name" className="rounded-2xl bg-white p-4 text-ink outline-none ring-gold/30 transition focus:ring-4" required />
            <input name="email" type="email" placeholder="Email" className="rounded-2xl bg-white p-4 text-ink outline-none ring-gold/30 transition focus:ring-4" required />
            <input name="company" type="text" placeholder="Company / group" className="rounded-2xl bg-white p-4 text-ink outline-none ring-gold/30 transition focus:ring-4" />
            <select name="interest" className="rounded-2xl bg-white p-4 text-ink outline-none ring-gold/30 transition focus:ring-4" required>
              <option value="">I am interested in...</option>
              <option>Investment / aging platform</option>
              <option>Build or add a tequila brand</option>
              <option>Single Barrel Program</option>
              <option>Restaurant / bar / retail</option>
              <option>Private buyer / collector</option>
            </select>
            <textarea name="message" placeholder="Tell us what you are looking for" className="min-h-[120px] rounded-2xl bg-white p-4 text-ink outline-none ring-gold/30 transition focus:ring-4" />
            <button className="rounded-full bg-gold px-6 py-4 text-[14px] font-extrabold text-[#211104] transition hover:-translate-y-0.5" type="submit">
              Send Request
            </button>
          </form>
        </Reveal>
      </Shell>
    </section>
  );
}
