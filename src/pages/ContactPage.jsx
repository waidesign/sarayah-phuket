import { useState } from 'react';
import Reveal from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';
import Seo from '../components/Seo';
import LocationsSection from '../components/LocationsSection';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import { faqPageSchema, breadcrumbSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

const FAQS = [
  {
    q: 'What is the standard check-in and check-out time?',
    a: 'Standard check-in is at 15:00 and check-out is at 12:00. Early check-in or late check-out can be requested and is subject to availability and possible additional charges.',
  },
  {
    q: 'Do you provide airport transfers?',
    a: 'Yes — we arrange private luxury transfers from Phuket International Airport (HKT), about 25 minutes away, with a driver meeting you at arrivals with a personalized sign. Ask your concierge for current rates when you book.',
  },
  {
    q: 'Are the villas family-friendly?',
    a: 'Absolutely. We provide high chairs, cribs, and specialized children\'s amenities upon request, along with certified babysitting services.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made 30 days prior to arrival are fully refundable. Peak season policies may vary — your concierge will confirm the exact terms at booking.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sarayah, my name is ${form.name} (${form.email}).\n\n${form.message}`;
    window.open(`https://wa.me/66825651186?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  return (
    <>
      <Seo
        title="Contact & Book Direct | Sarayah Phuket Villas"
        description="Reach the Sarayah Phuket Villas concierge team directly via WhatsApp or the form below — booking inquiries, airport transfers, and special requests."
        path="/contact"
        schema={[breadcrumbSchema(CRUMBS), faqPageSchema(FAQS)]}
      />
      {/* ===== HERO ===== */}
      <section className="relative bg-primary text-white min-h-[70vh] flex items-end overflow-hidden px-6 sm:px-10 lg:px-20">
        <img
          alt=""
          aria-hidden="true"
          src="/saraya-logo-secondary.svg"
          className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-16 lg:right-24 w-[240px] sm:w-[340px] lg:w-[440px] opacity-90 pointer-events-none select-none hidden sm:block"
        />
        <Reveal className="relative z-10 max-w-4xl mx-auto lg:mx-0 text-center lg:text-left pt-40 pb-16 sm:pb-20">
          <Breadcrumbs items={CRUMBS} dark className="mb-6 justify-center lg:justify-start" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">Inquiries & Assistance</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">Connect with your <em className="font-light">sanctuary.</em></h1>
          <p className="text-white/80 text-lg leading-relaxed">Our concierge is at your disposal — for a booking inquiry or any special request for your upcoming stay in Phuket.</p>
        </Reveal>
      </section>

      {/* ===== WHATSAPP + FORM ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal className="bg-surface-container-low rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">chat</span>
              <h2 className="font-headline text-2xl mb-3">Instant Assistance</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">Message our concierge directly for real-time support and villa availability.</p>
            </div>
            <Button variant="primary" href="https://wa.me/66825651186" external>
              WhatsApp Concierge
            </Button>
          </Reveal>

          <Reveal delay={100} className="bg-white rounded-2xl p-10 border border-outline-variant/15">
            <h2 className="font-headline text-2xl mb-6">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Johnathan Doe"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-2 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel dates and any specific requirements..."
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant/30 bg-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send via WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <LocationsSection />

      {/* ===== FAQ ===== */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Questions & Answers</span>
          </Reveal>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
