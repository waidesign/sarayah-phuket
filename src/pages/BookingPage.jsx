import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import VillaShowcaseGrid from '../components/VillaShowcaseGrid';
import LocationsSection from '../components/LocationsSection';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { breadcrumbSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Booking', path: '/booking' },
];

export default function BookingPage() {
  return (
    <>
      <Seo
        title="Check Availability & Book Direct | Sarayah Phuket Villas"
        description="Check your dates for Sarayah's 2-bedroom or 4-bedroom villa in Thalang District, Phuket, and confirm directly with our concierge team — no platform fees."
        path="/booking"
        schema={breadcrumbSchema(CRUMBS)}
      />
      <PageHeader
        eyebrow="Availability"
        title="Choose your"
        italicTitle="sanctuary."
        subtitle="Pick a villa below to check real-time availability and book directly with our concierge — no platform fees, no middleman."
        background="brand"
        breadcrumbs={CRUMBS}
      />

      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <Reveal className="text-center mb-14 max-w-[720px] mx-auto">
          <p className="text-on-surface-variant leading-relaxed">
            Real-time availability is confirmed directly with our concierge team — no third-party booking engine, no platform markup. Choose your villa below to check its calendar.
          </p>
        </Reveal>

        <VillaShowcaseGrid />

        <Reveal delay={150} className="text-center mt-14">
          <Button variant="primary" href="https://wa.me/66825651186" external icon="chat" iconPosition="left">
            Confirm via WhatsApp
          </Button>
        </Reveal>
      </section>

      <LocationsSection />
    </>
  );
}
