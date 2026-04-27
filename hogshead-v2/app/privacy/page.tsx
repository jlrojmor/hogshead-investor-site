import Link from 'next/link';

const sections = [
  {
    title: '1. Information we collect',
    body: 'If you submit a form or contact Hogshead Tequila, we may collect your name, email address, company or group, area of interest, and any message or information you choose to provide.',
  },
  {
    title: '2. How we use information',
    body: 'We use submitted information to respond to inquiries, route conversations to the appropriate commercial pathway, evaluate potential fit, and communicate about Hogshead Tequila programs, releases, or business opportunities.',
  },
  {
    title: '3. Business communications',
    body: 'By contacting us, you authorize Hogshead Tequila to respond using the contact information you provide. You may request that we stop contacting you at any time.',
  },
  {
    title: '4. Information sharing',
    body: 'We do not sell personal information. We may share information with professional advisers, service providers, or business partners when reasonably necessary to evaluate or respond to your inquiry, subject to appropriate confidentiality or business safeguards.',
  },
  {
    title: '5. Website analytics and technical data',
    body: 'The website may collect basic technical information such as browser type, device information, pages viewed, and general usage patterns through standard hosting or analytics tools. This helps us improve site performance and user experience.',
  },
  {
    title: '6. Data security',
    body: 'We use reasonable administrative and technical measures to protect information submitted through the website. No website or electronic communication method is completely secure, so sensitive legal, financial, or transaction documents should be shared only through appropriate channels.',
  },
  {
    title: '7. Updates to this policy',
    body: 'Hogshead Tequila may update this Privacy Policy from time to time. Updates will be reflected on this page with a revised date.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f2ede3] text-ink">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(216,139,66,.12),transparent_26%),radial-gradient(circle_at_78%_10%,rgba(123,198,199,.18),transparent_30%)]" />
        <div className="relative z-10 mx-auto w-[min(980px,calc(100%-40px))]">
          <Link href="/studio#contact" className="inline-flex rounded-full bg-deep px-5 py-3 text-[13px] font-black text-white transition hover:bg-gold hover:text-[#211104]">
            ← Back to Hogshead Tequila
          </Link>
          <div className="mt-10 rounded-[38px] bg-white/82 p-8 shadow-[0_30px_100px_rgba(2,62,72,.12)] backdrop-blur-xl md:p-12">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-teal">Hogshead Tequila</p>
            <h1 className="premium-serif mt-3 text-[56px] leading-[0.9] tracking-[-0.035em] text-deep md:text-[82px]">Privacy Policy</h1>
            <p className="mt-6 max-w-3xl text-[16px] font-semibold leading-8 text-[#60787d]">
              This Privacy Policy explains how Hogshead Tequila handles information submitted through the website and related business inquiries.
            </p>
            <p className="mt-3 text-[13px] font-bold text-[#7c9195]">Last updated: April 27, 2026</p>

            <div className="mt-10 grid gap-5">
              {sections.map((section) => (
                <div key={section.title} className="rounded-[26px] border border-deep/10 bg-[#fbf8f0] p-6">
                  <h2 className="premium-serif text-[30px] leading-none text-deep">{section.title}</h2>
                  <p className="mt-4 text-[15px] font-semibold leading-8 text-[#60787d]">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] bg-deep p-6 text-white">
              <h2 className="premium-serif text-[30px] leading-none">Contact</h2>
              <p className="mt-4 text-[15px] font-semibold leading-8 text-white/72">
                Privacy questions can be directed to contact@hogshead-tequila.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
