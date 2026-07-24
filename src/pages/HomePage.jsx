import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import Reveal from '../components/Reveal';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import LocationsSection from '../components/LocationsSection';
import VillaShowcaseGrid from '../components/VillaShowcaseGrid';
import Button from '../components/Button';
import {
  THALANG_NODES,
  FACILITIES,
  WHY_SARAYAH,
  TOURS,
  EXPERIENCES,
  GALLERY,
  GALLERY_2BR,
  SERVICES,
  FAQS,
} from '../data/homepage';
import { lodgingBusinessSchema, faqPageSchema } from '../data/schema';
import { LOCATIONS } from '../data/locations';

export default function HomePage() {
  return (
    <>
      <Seo
        title="Sarayah Phuket Villas | Luxury Villa Rentals in Thalang District, Phuket"
        description="Official direct-booking site for Sarayah Phuket Villas — luxury villa rentals in Thalang District, featuring an intimate 2-bedroom pool villa and a spacious 4-bedroom grand estate with 24/7 concierge support."
        path="/"
        image="/assets/media/villas/4-bedroom/IMG_8416.jpg"
        schema={[
          lodgingBusinessSchema({
            name: 'Sarayah Phuket Villas',
            description: 'Luxury villa residences in Thalang District, Phuket, available for direct booking.',
            image: '/assets/media/villas/4-bedroom/IMG_8416.jpg',
            path: '/',
            address: LOCATIONS['2-bedroom-private-pool-villa'].address,
          }),
          faqPageSchema(FAQS),
        ]}
      />
      <HeroSlider />

      {/* ===== THE SARAYAH MISSION STATEMENT ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background border-t border-outline-variant/10">
        <Reveal className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-8 block">The Sarayah Mission</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">
            Luxury isn't gold leaf. <br className="hidden sm:block" />
            It's <em className="text-primary">space, silence,</em> <br className="hidden sm:block" />
            and sensory purity.
          </h2>
          <p className="mt-10 text-on-surface-variant leading-loose text-lg max-w-3xl mx-auto">
            Two luxury residences in Thalang District — an intimate 2-bedroom sanctuary featuring a private pool, and a 4-bedroom grand estate designed for social gatherings. Engineered for the traveler who values absolute seclusion over a hotel lobby.
          </p>
        </Reveal>
      </section>

      {/* ===== VILLA SHOWCASE (Luxe Editorial Grid) ===== */}
      <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 bg-background">
        <Reveal className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">The Residences</span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">
            Two flagship villas.<br /><em className="text-primary">Zero compromise.</em>
          </h2>
          <p className="mt-6 text-on-surface-variant text-base sm:text-lg leading-relaxed">
            Designed for complete privacy, uncompromised space, and seamless indoor-outdoor tropical living in Thalang District.
          </p>
        </Reveal>

        <VillaShowcaseGrid />
      </section>

      {/* ===== WHY SARAYAH PHUKET ===== */}
      <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 bg-white border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">The Sarayah Promise</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Why <em className="text-primary">Sarayah</em> Phuket?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 lg:gap-16 max-w-[1100px] mx-auto">
          {WHY_SARAYAH.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-headline text-on-surface mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== FULL-BLEED IMAGE BREAK, QUOTE OVERLAY ===== */}
      <Reveal as="section" className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <img alt="Sarayah Phuket — luxury villa design detail" className="absolute inset-0 w-full h-full object-cover" src="/assets/media/villas/2-bedroom/cool-light-bulb.webp" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative z-10 h-full flex items-end px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20">
          <p className="text-white font-headline italic text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-3xl">
            "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
          </p>
        </div>
      </Reveal>

      {/* ===== SECTION 4: OUR FACILITIES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto mb-16 lg:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Villa Amenities</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Our Facilities.<br /><em className="text-primary">Every comfort, considered.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Not a checklist of add-ons — just what a luxury estate should already have, built in from the start.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-outline-variant/20 max-w-[1100px] mx-auto">
          {FACILITIES.map((facility, i) => (
            <Reveal key={facility.label} delay={i * 60} className="flex flex-col items-center justify-center text-center gap-2 px-6 sm:px-8 py-8 border-b border-r border-outline-variant/20">
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

        <Reveal delay={150} className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center text-center gap-8">
          <Button variant="primary" to="/booking" className="w-full sm:w-auto">
            Request a Booking
          </Button>
          <Link to="/villas" className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
            View All Facilities <span className="material-symbols-outlined text-base">arrow_right_alt</span>
          </Link>
        </Reveal>
      </section>

      {/* ===== SECTION 6: PHUKET TOURS (editorial overlay cards) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background border-t border-outline-variant/10">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Beyond the Villa</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Phuket Tours.<br /><em className="text-primary">Special discount.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Discover the Andaman's most spectacular destinations — Phang Nga Bay's limestone giants, the Phi Phi Islands' impossible blues — booked through your Sarayah concierge at a preferred rate.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {TOURS.map((tour, i) => (
            <Reveal key={tour.name} delay={i * 100} className="group">
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-luxe">
                <img alt={tour.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={tour.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-3 block">Special Discount</span>
                  <h3 className="text-2xl sm:text-3xl font-headline text-white mb-3">{tour.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-7 max-w-sm">{tour.body}</p>
                  <div className="flex items-center gap-6">
                    <Button variant="tertiary" size="sm" to="/booking">
                      Book Now
                    </Button>
                    <Link to="/experiences" className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase border-b-2 border-white/30 pb-1 hover:border-white transition-all">
                      Learn More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 7: PHUKET EXPERIENCES (featured + compact list) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Curated Experiences</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">Live it like a local.<br /><em className="text-primary">Curated by Sarayah.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">From private yacht charters to poolside tasting menus, our concierge arranges Phuket's finest experiences — vetted, booked, and billed with the same ease as your stay.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal as={Link} to={EXPERIENCES[0].href} className="group/feat relative rounded-2xl overflow-hidden shadow-luxe aspect-[4/5] sm:aspect-video lg:aspect-[4/3] block">
            <img alt={EXPERIENCES[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/feat:scale-105" src={EXPERIENCES[0].image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-3 block">{EXPERIENCES[0].category}</span>
              <h3 className="text-2xl sm:text-3xl font-headline text-white flex items-center gap-3">
                {EXPERIENCES[0].title}
                <span className="material-symbols-outlined text-2xl transition-transform group-hover/feat:translate-x-1">arrow_right_alt</span>
              </h3>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center">
            <p className="text-on-surface-variant leading-loose text-lg mb-10">{EXPERIENCES[0].body}</p>
            <div className="divide-y divide-outline-variant/20 border-t border-b border-outline-variant/20">
              {EXPERIENCES.slice(1).map((exp) => (
                <Link key={exp.title} to={exp.href} className="flex items-center gap-6 py-6 group/exp hover:bg-surface-container-low transition-colors -mx-5 px-5 rounded-lg">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img alt={exp.title} className="w-full h-full object-cover" src={exp.image} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1 block">{exp.category}</span>
                    <h4 className="font-headline text-lg text-on-surface truncate group-hover/exp:text-primary transition-colors">{exp.title}</h4>
                  </div>
                  <span className="material-symbols-outlined text-primary ml-auto shrink-0 transition-transform group-hover/exp:translate-x-1">arrow_right_alt</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Button variant="secondary" to="/experiences">
            Explore All Experiences
          </Button>
        </Reveal>
      </section>

      {/* ===== SECTION 8: THE THALANG ADVANTAGE ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-background border-t border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">The Strategic Choice</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08] italic">Why the North is the <br /><span className="font-light not-italic">New Standard.</span></h2>
            <p className="mt-10 text-on-surface-variant leading-loose text-lg">Phuket splits into two distinct halves. The south means high-density tourism and traffic bottlenecks; <strong>Thalang District</strong>, in the north, is where wide plots and quiet roads still define the island. It's the district for travelers who understand that real luxury means space, not proximity to a strip.</p>
            <p className="mt-6 text-on-surface-variant leading-loose">Sarayah is here for exactly that reason — minutes from <strong>Bang Tao's</strong> dining and <strong>Surin's</strong> beaches, yet home each evening to a gated, private sanctuary where the loudest sound is the wind in the palms.</p>
            <div className="mt-12">
              <Link to="/phuket" className="inline-flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
                Read the Thalang District Guide <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {THALANG_NODES.map((node) => (
                <Reveal key={node.title} className="space-y-6">
                  <h3 className="text-3xl font-headline text-primary italic">{node.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-loose">{node.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="grid grid-cols-2 gap-12">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxe">
                <img
                  alt="Sunset over a private pier on the Andaman coastline near Sarayah"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/img/layan-beach.webp"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-luxe">
                <img
                  alt="Sunrise over Cape Yamu coastline near Sarayah"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/img/yamu-sunrise.webp"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: THE SERVICE LAYER (dark, stat-led) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-[#003A32] text-white">
        <Reveal className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/50 mb-6 block">Personalized Care</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline leading-[1.08]">Direct-to-owner <br /><em>accountability.</em></h2>
          <p className="mt-8 text-white/60 leading-loose text-lg">No faceless management agency. A 24/7 WhatsApp concierge, run by the team that built, maintains, and loves these properties.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-10 lg:gap-16 max-w-[1100px] mx-auto">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
              </div>
              <h4 className="font-headline text-xl mb-2">{service.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 10: PHOTO & VIDEO GALLERY -- 4-BEDROOM (mosaic grid) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Inside the Grand Estate</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">The Gallery.<br /><em className="text-primary">4-Bedroom Villa.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">Every room, every corner — captured exactly as you'll find it. No stock photography, no surprises at check-in.</p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[280px] sm:auto-rows-[340px] lg:auto-rows-[320px] gap-4 lg:gap-5">
          {GALLERY.map((item) => (
            <div key={item.image} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
              <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Button variant="secondary" to="/villas/4-bedroom-villa">
            View the 4-Bedroom Villa
          </Button>
        </Reveal>
      </section>

      {/* ===== SECTION 10B: PHOTO & VIDEO GALLERY -- 2-BEDROOM (mosaic grid) ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <Reveal className="max-w-4xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6 block">Inside the Intimate Sanctuary</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-headline text-on-surface leading-[1.08]">The Gallery.<br /><em className="text-primary">2-Bedroom Villa.</em></h2>
          <p className="mt-8 text-on-surface-variant leading-loose text-lg">The same standard, at an intimate scale — every room, every corner, exactly as you'll find it.</p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[280px] sm:auto-rows-[340px] lg:auto-rows-[320px] gap-4 lg:gap-5">
          {GALLERY_2BR.map((item) => (
            <div key={item.image} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
              <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="mt-16 lg:mt-20 text-center">
          <Button variant="secondary" to="/villas/2-bedroom-private-pool-villa">
            View the 2-Bedroom Villa
          </Button>
        </Reveal>
      </section>

      {/* ===== SECTION 11: DISCREET ANSWERS (FAQ & AUTHORITY) ===== */}
      <FaqSection />

      <LocationsSection bg="bg-white" />

      {/* ===== SECTION 12: FINAL CTA ===== */}
      <section className="py-32 sm:py-40 lg:py-48 px-6 sm:px-8 bg-[#003A32] relative overflow-hidden text-white">
        <Reveal className="relative z-10 text-center">
          <h2 className="text-white font-headline text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-10">Stop searching.<br /><em>Start arriving.</em></h2>
          <p className="text-white/70 mb-14 max-w-4xl mx-auto text-lg leading-relaxed">Join the circle of discerning travelers who choose Sarayah for the privacy they actually deserve.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="tertiary" size="lg" to="/booking" className="w-full sm:w-auto">Book Direct & Secure Priority</Button>
            <Button variant="secondary" dark size="lg" to="/contact" className="w-full sm:w-auto">Chat with our Concierge</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
