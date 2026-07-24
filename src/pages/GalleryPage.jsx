import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import LocationsSection from '../components/LocationsSection';
import { breadcrumbSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
];

const GALLERY = [
  { image: '/assets/media/villas/4-bedroom/IMG_8416.jpg', alt: '4-Bedroom Villa estate at twilight', className: 'col-span-2 row-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8401.jpg', alt: '4-Bedroom Villa grand living area', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/2-bedroom/IMG_8219.jpg', alt: '2-Bedroom Villa interior detail', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8391.jpg', alt: 'Master suite at Sarayah', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8417.jpg', alt: 'Grand entrance', className: 'col-span-2 lg:col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8422.jpg', alt: 'Second bedroom suite', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8384.jpg', alt: 'Poolside patio doors', className: 'col-span-2 row-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/4-bedroom/IMG_8394.jpg', alt: 'Open-plan living and dining area', className: 'col-span-2 lg:col-span-3' },
  { image: '/assets/media/villas/2-bedroom/IMG_8218.jpg', alt: 'Sarayah villa architectural detail', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8400.jpg', alt: 'Dining table for eight', className: 'col-span-1' },
  { image: '/assets/media/villas/4-bedroom/IMG_8424.jpg', alt: 'Bedroom detail', className: 'col-span-2 lg:col-span-2' },
];

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Photo Gallery | Sarayah Phuket Villas, Thalang District"
        description="A full look inside Sarayah's 2-bedroom pool villa and 4-bedroom grand villa in Thalang District, Phuket — real photos, no stock imagery."
        path="/gallery"
        image="/assets/media/villas/4-bedroom/IMG_8416.jpg"
        schema={breadcrumbSchema(CRUMBS)}
      />
      <section className="bg-primary text-white min-h-[70vh] flex items-center px-6 sm:px-10 lg:px-20 text-center">
        <Reveal className="max-w-4xl mx-auto">
          <Breadcrumbs items={CRUMBS} dark className="mb-6 justify-center" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">The Collection</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">Visual <em className="font-light">Inspiration.</em></h1>
          <p className="text-white/80 text-lg leading-relaxed">A curated look inside our signature villas in Thalang District — from sun-drenched pool decks to intimate master suites.</p>
        </Reveal>
      </section>

      <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white">
        <div>
          <Reveal className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[240px] gap-4 lg:gap-5">
            {GALLERY.map((item) => (
              <div key={item.image + item.alt} className={`relative rounded-xl overflow-hidden group ${item.className}`}>
                <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <LocationsSection />

      <section className="py-24 sm:py-32 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-3xl sm:text-5xl mb-10">Experience it for yourself.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="tertiary" to="/villas" className="w-full sm:w-auto">Explore Villas</Button>
            <Button variant="secondary" dark to="/booking" className="w-full sm:w-auto">Book Your Stay</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
