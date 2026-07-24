import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import VillaShowcaseGrid from '../components/VillaShowcaseGrid';
import Button from '../components/Button';
import FaqAccordion from '../components/FaqAccordion';
import LocationsSection from '../components/LocationsSection';
import { COMPARISON, FACILITIES, JOURNEY } from '../data/villasPage';
import { breadcrumbSchema, faqPageSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Our Villas', path: '/villas' },
];

const FAQS = [
  {
    q: 'Which villa should I choose?',
    a: 'The 2-Bedroom Pool Villa suits couples, small families, or two couples traveling together who want an intimate, quiet stay. The 4-Bedroom Grand Villa is built for larger groups — family reunions or multi-generational trips — with a professional-grade kitchen and shared common areas. See the comparison table above for a feature-by-feature breakdown.',
  },
  {
    q: 'Do I need to pay a deposit to secure my dates?',
    a: 'Yes — a deposit confirms your booking, with the balance due before arrival. Because you\'re booking directly with the owner, terms are flexible and we\'ll walk you through exactly what\'s required before you commit to anything.',
  },
  {
    q: 'Is there a minimum night stay?',
    a: 'Most bookings run 3 nights or more, though this can flex depending on season and availability. Message our concierge with your dates and we\'ll confirm what\'s possible.',
  },
  {
    q: 'Can I book directly without going through a third-party platform?',
    a: 'Yes — that\'s the whole point. Booking direct with Sarayah means no aggregator markup, direct communication with the people who actually run the villas, and pricing that reflects that.',
  },
  {
    q: 'What happens after I submit a booking request?',
    a: 'Our concierge team confirms availability and pricing within a few hours, sends a secure payment link for your deposit, and stays in direct contact with you all the way through to check-in.',
  },
];

const PAYMENT_METHODS = [
  { label: 'Visa', icon: 'credit_card' },
  { label: 'Mastercard', icon: 'credit_card' },
  { label: 'Amex', icon: 'credit_card' },
  { label: 'PayPal', icon: 'account_balance_wallet' },
  { label: 'PromptPay', icon: 'qr_code_2' },
  { label: 'Bank Transfer', icon: 'account_balance' },
];

export default function VillasPage() {
  return (
    <>
      <Seo
        title="Our Villas | 2 & 4-Bedroom Private Pool Villas in Thalang, Phuket"
        description="Compare Sarayah's luxury villas in Thalang District, Phuket — a 2-bedroom pool villa for couples and a 4-bedroom grand estate for groups of up to 12. Book direct, no platform fees."
        path="/villas"
        image="/assets/media/villas/4-bedroom/IMG_8416.jpg"
        schema={[breadcrumbSchema(CRUMBS), faqPageSchema(FAQS)]}
      />
      <PageHeader
        eyebrow="The Collection · Thalang District"
        title="Our"
        italicTitle="Villas."
        subtitle="Eliminate the uncertainty of mass-market rentals. Sarayah is a curated collection of two flagship properties for those who demand total autonomy and direct-to-owner integrity."
        background="brand"
        breadcrumbs={CRUMBS}
      />

      {/* ===== OWNER'S CREED ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Reveal className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">The Owner's Creed</span>
            <h2 className="font-headline text-4xl sm:text-5xl leading-[1.1] italic text-on-surface">
              Understand the <br /><span className="font-light not-italic">selection.</span>
            </h2>
            <p className="text-on-surface-variant leading-loose text-lg">
              While massive booking engines show thousands of unverified properties, Sarayah operates on a single-ownership model. We didn't just "manage" these villas — we conceived, built, and maintain them to a standard third-party management simply can't replicate.
            </p>
            <p className="text-on-surface-variant leading-loose text-lg">
              You're dealing with the team that knows every plumbing line and every sunset angle of these properties — absolute directness, removing the aggregator tax and reinvesting it into your experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8 border-t border-outline-variant/15">
              <div className="space-y-3">
                <h3 className="font-headline text-xl text-primary">The Thalang Advantage</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Minutes from Bang Tao and Surin's elite dining, yet home to a gated sanctuary with zero shared walls.</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-headline text-xl text-primary">Verified Integrity</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Weekly maintenance audits — if a router underperforms or a pump is audible, it's fixed before you'd ever notice.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative max-w-[560px] ml-auto">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-luxe">
              <img src="/assets/media/villas/2-bedroom/pool-with-family.webp" className="w-full h-full object-cover" alt="Architectural detail of Sarayah Phuket pool villas" />
            </div>
            <div className="absolute -bottom-20 -left-6 sm:-left-10 bg-white p-8 shadow-luxe-sm rounded-xl max-w-xs hidden md:block">
              <h4 className="font-headline text-xl text-primary mb-3 italic">Direct-to-Owner Benefit</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Priority early check-ins, late check-outs, and a dedicated WhatsApp concierge. No middlemen.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== VILLA COLLECTION ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="text-center max-w-4xl mx-auto mb-20 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">The Spaces</span>
          <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Choose your sanctuary.</h2>
        </Reveal>
        <VillaShowcaseGrid />
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div>
          <Reveal className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Selection Support</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">The definitive <br /><span className="font-light not-italic">comparison logic.</span></h2>
          </Reveal>
          <Reveal delay={100} className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-luxe-sm border border-outline-variant/10 min-w-[560px]">
              <thead>
                <tr className="bg-primary text-on-primary text-[10px] uppercase tracking-[0.3em]">
                  <th className="text-left p-6 sm:p-8 font-bold">Feature</th>
                  <th className="text-left p-6 sm:p-8 font-bold border-l border-white/10">2BR Pool Villa</th>
                  <th className="text-left p-6 sm:p-8 font-bold border-l border-white/10">4BR Grand Villa</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i < COMPARISON.length - 1 ? 'border-b border-outline-variant/10' : 'bg-surface-container-lowest'}>
                    <td className="p-6 sm:p-8 font-bold text-primary">{row.feature}</td>
                    <td className="p-6 sm:p-8 text-left text-on-surface-variant">{row.two}</td>
                    <td className="p-6 sm:p-8 text-left text-on-surface-variant">{row.four}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-outline-variant/10">
                  <td className="p-6 sm:p-8"></td>
                  <td className="p-6 sm:p-8 text-left">
                    <Button variant="primary" size="sm" to="/villas/2-bedroom-private-pool-villa#availability">
                      Book 2BR Pool Villa
                    </Button>
                  </td>
                  <td className="p-6 sm:p-8 text-left">
                    <Button variant="primary" size="sm" to="/villas/4-bedroom-villa#availability">
                      Book 4BR Grand Villa
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ===== SIGNATURE FACILITIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div>
          <Reveal className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Standard of Excellence</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Signature facilities in every villa.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-10">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-xl font-headline text-on-surface mb-2">{f.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING JOURNEY ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">Frictionless Future</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Transparency from <br /><span className="font-light not-italic">inquiry to arrival.</span></h2>
            <p className="text-on-surface-variant leading-loose text-lg">We've removed the middleman — your booking is a direct pact between you and the owner. No hidden fees, no surprise deposits, no faceless support queues.</p>
            <div className="space-y-8 pt-6">
              {JOURNEY.map((step, i) => (
                <div key={step.title} className="flex gap-8">
                  <span className="text-3xl font-headline italic text-primary/30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="text-xl font-headline italic mb-2">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-16">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/2-bedroom/pool-villa-1.webp" className="w-full h-full object-cover" alt="Villa detail" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/4-bedroom/IMG_8404.jpg" className="w-full h-full object-cover" alt="Villa social areas" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/2-bedroom/pool-villa-bedroom-1.webp" className="w-full h-full object-cover" alt="Villa bedroom" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxe-sm">
                <img src="/assets/media/villas/4-bedroom/IMG_8417.jpg" className="w-full h-full object-cover" alt="Villa architecture" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== EASY PAYMENT OPTIONS ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="grid grid-cols-3 gap-4 sm:gap-5">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.label}
                className="flex flex-col items-center justify-center gap-3 py-8 px-4 rounded-2xl bg-surface-container-low border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-primary text-3xl">{method.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant text-center">{method.label}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100} className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">Secure & Simple</span>
            <h2 className="text-4xl sm:text-5xl font-headline text-on-surface italic">Easy <span className="font-light not-italic">payment options.</span></h2>
            <p className="text-on-surface-variant leading-loose text-lg">
              Booking your Phuket villa is fast and secure — pay by card, PayPal, or PromptPay, with clear terms and no hidden fees. Have a question about booking?{' '}
              <Link to="/contact" className="text-primary font-medium hover:underline underline-offset-4">Contact us</Link> any time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Questions & Answers</span>
            <h2 className="font-headline text-4xl">Villa <em className="text-primary font-light">FAQs</em></h2>
          </Reveal>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <LocationsSection bg="bg-white" />

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 sm:py-40 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-5xl sm:text-7xl mb-10 leading-[1.05]">Find your<br /><em>perfect sanctuary.</em></h2>
          <p className="text-white/70 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">Join the circle of discerning travelers who choose Sarayah for the privacy they deserve.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="tertiary" size="lg" to="/villas/2-bedroom-private-pool-villa" className="w-full sm:w-auto">Book the 2-Bedroom Villa</Button>
            <Button variant="secondary" dark size="lg" to="/villas/4-bedroom-villa" className="w-full sm:w-auto">Book the 4-Bedroom Villa</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
