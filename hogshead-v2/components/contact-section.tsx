'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, FileText, Linkedin, ShieldCheck, Sparkles, ArrowUp } from 'lucide-react';
import { Eyebrow, Reveal, Shell } from './shell';

const conversationTypes = ['Tequila investment exposure', 'Brand creation', 'Single-barrel release', 'Restaurant / retail program'];
const linkedInUrl = 'https://www.linkedin.com/company/hogshead-tequila-investments/';
const contactEmail = 'contact@tequila-hogshead.com';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('submitting');
    setFeedback('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/request-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || 'The request could not be sent.');
      }

      setSubmitState('success');
      setFeedback('Request sent. We will follow up through the email you provided.');
      form.reset();
    } catch (error) {
      setSubmitState('error');
      setFeedback(
        error instanceof Error
          ? error.message
          : `The request could not be sent. Please email ${contactEmail} directly.`,
      );
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#041f25] py-28 text-white scroll-mt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,31,37,.97),rgba(4,31,37,.88)),url('/images/Barrel-aging-copy-5.jpeg')] bg-cover bg-center opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(216,139,66,.18),transparent_28%),radial-gradient(circle_at_76%_20%,rgba(123,198,199,.16),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <Shell className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow light>Request information</Eyebrow>
            <h2 className="premium-serif mt-4 max-w-3xl text-[54px] leading-[0.9] tracking-[-0.035em] text-white md:text-[82px]">
              Start with the right conversation.
            </h2>
            <p className="mt-7 max-w-xl text-[17px] font-semibold leading-8 text-white/74">
              Tell us where you are entering the tequila market: investment exposure, brand creation, single-barrel releases, or restaurant and retail opportunities.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {conversationTypes.map((item) => (
                <div key={item} className="rounded-2xl bg-white/8 px-4 py-3 text-[13px] font-extrabold text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative overflow-hidden rounded-[38px] bg-white/[0.11] p-4 shadow-[0_34px_120px_rgba(0,0,0,.32),inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-2xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/18 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />

            <div className="relative rounded-[30px] bg-[#f8f4ec] p-6 text-deep shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-teal">Private intake</p>
                  <h3 className="premium-serif mt-2 text-[36px] leading-none text-deep">Tell us what you want to build.</h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-deep text-gold shadow-[0_14px_30px_rgba(2,62,72,.24)]">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <input name="name" type="text" placeholder="Name" className="rounded-2xl bg-white px-4 py-4 text-ink outline-none shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] ring-gold/30 transition placeholder:text-[#819094] focus:ring-4" required />
                  <input name="email" type="email" placeholder="Email" className="rounded-2xl bg-white px-4 py-4 text-ink outline-none shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] ring-gold/30 transition placeholder:text-[#819094] focus:ring-4" required />
                </div>
                <input name="company" type="text" placeholder="Company / group" className="rounded-2xl bg-white px-4 py-4 text-ink outline-none shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] ring-gold/30 transition placeholder:text-[#819094] focus:ring-4" />
                <select name="interest" className="rounded-2xl bg-white px-4 py-4 text-ink outline-none shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] ring-gold/30 transition focus:ring-4" required defaultValue="">
                  <option value="" disabled>I am interested in...</option>
                  <option>Investment / aging platform</option>
                  <option>Build or add a tequila brand</option>
                  <option>Single Barrel Program</option>
                  <option>Restaurant / bar / retail</option>
                  <option>Private buyer / collector</option>
                </select>
                <textarea name="message" placeholder="Tell us what you are looking for" className="min-h-[140px] rounded-2xl bg-white px-4 py-4 text-ink outline-none shadow-[inset_0_0_0_1px_rgba(2,62,72,.08)] ring-gold/30 transition placeholder:text-[#819094] focus:ring-4" />
                <button
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-[14px] font-black text-[#211104] shadow-[0_18px_40px_rgba(216,139,66,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_56px_rgba(216,139,66,.30)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  type="submit"
                  disabled={submitState === 'submitting'}
                >
                  {submitState === 'submitting' ? 'Sending...' : 'Send Request'} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>

              {feedback && (
                <div className={`mt-4 rounded-2xl p-4 text-[13px] font-bold leading-6 ${submitState === 'success' ? 'bg-teal/10 text-deep' : 'bg-red-50 text-red-700'}`}>
                  {feedback}
                  {submitState === 'error' && (
                    <span>
                      {' '}You can also email <a className="underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                    </span>
                  )}
                </div>
              )}

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-deep/[0.06] p-4 text-[#60787d]">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <p className="text-[12px] font-bold leading-6">We use this intake only to route the conversation to the right Hogshead Tequila pathway.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <footer className="mt-18 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img src="/images/Logo_for_Website.png" alt="Hogshead Tequila" className="h-10 w-10 rounded-full bg-white object-contain p-1" />
                <div>
                  <strong className="block text-[13px] font-black uppercase tracking-[0.13em] text-white">Hogshead <span className="text-gold">Tequila</span></strong>
                  <span className="text-[12px] font-semibold text-white/52">Premium tequila platform · Mexico + U.S.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[12px] font-extrabold text-white/68">
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 transition hover:bg-white hover:text-deep">
                <Linkedin className="h-4 w-4 text-gold" /> Hogshead Tequila LinkedIn
              </a>
              <a href="/terms" className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 transition hover:bg-white hover:text-deep">
                <FileText className="h-4 w-4 text-gold" /> Terms of Use
              </a>
              <a href="/privacy" className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 transition hover:bg-white hover:text-deep">
                <ShieldCheck className="h-4 w-4 text-gold" /> Privacy Policy
              </a>
              <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[#211104] transition hover:-translate-y-0.5">
                <ArrowUp className="h-4 w-4" /> Back to top
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-[11px] font-semibold leading-6 text-white/42 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Hogshead Tequila. All rights reserved.</p>
            <p>Market figures are directional and do not constitute investment, legal, tax, or financial advice.</p>
          </div>
        </footer>
      </Shell>
    </section>
  );
}
