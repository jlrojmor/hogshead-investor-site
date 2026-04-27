import Link from 'next/link';

const sections = [
  {
    title: '1. Use of this website',
    body: 'This website is provided for general informational and business development purposes. By using the website, you agree to use it only for lawful purposes and in a way that does not interfere with the operation, security, or availability of the site.',
  },
  {
    title: '2. No investment, legal, tax, or financial advice',
    body: 'Information on this website, including market figures, commercial scenarios, aging economics, and ownership-related descriptions, is directional and educational. It is not investment advice, legal advice, tax advice, financial advice, or an offer to sell securities or investment products.',
  },
  {
    title: '3. Market and operating information',
    body: 'Market data, pricing assumptions, aging scenarios, resale values, and commercial examples may rely on third-party estimates, internal assumptions, or illustrative models. Actual outcomes can differ materially from any example shown on the website.',
  },
  {
    title: '4. Commercial discussions',
    body: 'Any tequila inventory, barrel aging, ownership, resale, import, bottling, labeling, or distribution opportunity is subject to separate diligence, documentation, legal review, regulatory requirements, and written agreements between the relevant parties.',
  },
  {
    title: '5. Intellectual property',
    body: 'The Hogshead Tequila name, website design, text, graphics, visual systems, and related materials are owned by or licensed to Hogshead Tequila and may not be copied, reproduced, distributed, or used commercially without written permission.',
  },
  {
    title: '6. Limitation of liability',
    body: 'The website is provided on an as-is and as-available basis. Hogshead Tequila does not guarantee that the website will be uninterrupted, error-free, or that all information will remain current at all times. To the maximum extent permitted by law, Hogshead Tequila disclaims liability for damages arising from use of the website.',
  },
  {
    title: '7. Changes to these terms',
    body: 'Hogshead Tequila may update these Terms of Use from time to time. Continued use of the website after updates means you accept the revised terms.',
  },
];

export default function TermsPage() {
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
            <h1 className="premium-serif mt-3 text-[56px] leading-[0.9] tracking-[-0.035em] text-deep md:text-[82px]">Terms of Use</h1>
            <p className="mt-6 max-w-3xl text-[16px] font-semibold leading-8 text-[#60787d]">
              These terms govern use of the Hogshead Tequila website. They are intended for website use only and do not replace transaction-specific agreements, legal review, or regulatory documentation.
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
                Questions about these terms can be directed to contact@hogshead-tequila.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
