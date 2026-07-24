import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Button from '../components/Button';
import LocationsSection from '../components/LocationsSection';
import { FACILITIES as AMENITIES } from '../data/homepage';
import { FACILITIES as CATEGORIES } from '../data/villasPage';
import { breadcrumbSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Facilities', path: '/facilities' },
];

export default function FacilitiesPage() {
  return (
    <>
      <Seo
        title="Villa Facilities & Amenities | Sarayah Phuket Villas"
        description="Every facility included at Sarayah's private-pool villas in Thalang District, Phuket — from infinity pools and fiber Wi-Fi to secure digital locks and daily comforts."
        path="/facilities"
        image="/assets/media/villas/4-bedroom/IMG_8416.jpg"
        schema={breadcrumbSchema(CRUMBS)}
      />
      <PageHeader
        eyebrow="Every Comfort, Considered"
        title="Villa"
        italicTitle="Facilities."
        subtitle="Not a checklist of add-ons — just what a private-pool estate should already have, built in from the start."
        background="brand"
        breadcrumbs={CRUMBS}
      />

      {/* ===== CATEGORIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div>
          <Reveal className="max-w-3xl mb-16 lg:mb-20">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Standard of Excellence</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline text-on-surface leading-[1.08]">Signature facilities in every villa.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-10">
            {CATEGORIES.map((f, i) => (
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

      {/* ===== FULL AMENITY GRID ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <Reveal className="max-w-4xl mx-auto mb-16 lg:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Everything Included</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Every amenity,<br /><em className="text-primary">accounted for.</em></h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-outline-variant/20 max-w-[1100px] mx-auto bg-white">
          {AMENITIES.map((facility, i) => (
            <Reveal key={facility.label} delay={i * 40} className="flex flex-col items-center justify-center text-center gap-2 px-6 sm:px-8 py-8 border-b border-r border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-2xl">{facility.icon}</span>
              <h3 className="text-base font-headline text-on-surface">{facility.label}</h3>
              {facility.note && (
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded-full mt-0.5">
                  {facility.note}
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <LocationsSection bg="bg-white" />

      {/* ===== CTA ===== */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-4xl sm:text-6xl mb-8">See it for yourself.</h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">Compare the 2-bedroom and 4-bedroom villas, or check dates directly with our concierge.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="tertiary" size="lg" to="/villas" className="w-full sm:w-auto">
              Compare Our Villas
            </Button>
            <Button variant="secondary" dark size="lg" to="/booking" className="w-full sm:w-auto">
              Check Availability
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
