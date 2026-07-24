import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import Button from '../components/Button';
import LocationsSection from '../components/LocationsSection';
import { PHUKET_LIST, PHUKET_MICRO_NODES, PHUKET_STATS } from '../data/phuket';
import { breadcrumbSchema } from '../data/schema';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Phuket Guide', path: '/phuket' },
];

export default function PhuketPage() {
  return (
    <>
      <Seo
        title="Phuket Destination Guide | Sarayah Phuket Villas, Thalang District"
        description="Everything worth knowing about Thalang District and Northern Phuket — beaches, dining, and location guides from the team at Sarayah Phuket Villas."
        path="/phuket"
        image="/assets/img/cape_panwa_vs_thalang_view_1776802429321.png"
        schema={breadcrumbSchema(CRUMBS)}
      />
      <PageHeader
        eyebrow="Destination Guide"
        title="Phuket"
        italicTitle="Insights."
        subtitle="Sarayah Phuket Villas is perfectly situated in the prestigious Thalang District, minutes from the island's most beautiful beaches and cultural landmarks."
        background="brand"
        breadcrumbs={CRUMBS}
      />

      {/* ===== THALANG SPIRIT ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">I. The Thalang Spirit</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-on-surface leading-tight italic">Privacy, <span className="font-light not-italic">by design.</span></h2>
            <p className="text-on-surface-variant leading-loose">Phuket splits into two halves: the south's mass-tourism corridors of Patong, Kata, and Rawai, and Thalang — the elite node to the north. Flat alluvial plains, not Kamala's cliffs, mean poolside within 25 minutes of landing.</p>
            <p className="text-on-surface-variant leading-loose">Thalang holds the lowest density of short-term rentals on the island — a genuine tactical advantage for anyone who values quiet over convenience.</p>
          </Reveal>
          <Reveal delay={100} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-luxe">
              <img src="/assets/media/villas/4-bedroom/IMG_8394.jpg" className="w-full h-full object-cover" alt="Thalang District villa interior" />
            </div>
            <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white p-8 shadow-luxe-sm rounded-xl max-w-xs hidden md:block">
              <h4 className="font-headline text-lg text-primary mb-2 italic">Low-Density Luxury</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Thalang's short-term rental density is the lowest of any district in Phuket.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BANG TAO & BOAT AVENUE ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal delay={100} className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden aspect-video shadow-luxe">
              <img src="/assets/img/yacht_charter_phuket_1776802394443.png" className="w-full h-full object-cover" alt="Bang Tao coastline near Boat Avenue" />
            </div>
            <div className="absolute -bottom-8 -right-6 sm:-right-10 bg-white p-8 shadow-luxe-sm rounded-xl max-w-xs hidden md:block">
              <h4 className="font-headline text-lg text-primary mb-2 italic">The Friday Market</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Boat Avenue's night market, 5 minutes from your villa.</p>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary block">II. Bang Tao & Boat Avenue</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-on-surface leading-tight italic">The island's <span className="font-light not-italic">lifestyle pulse.</span></h2>
            <p className="text-on-surface-variant leading-loose">Bang Tao's 8km beach anchors Boat Avenue and Porto de Phuket, home to beach clubs Catch and Carpe Diem, a Banyan Tree spa, and PRU — Phuket's first Michelin-starred restaurant.</p>
            <p className="text-on-surface-variant leading-loose">It's the Laguna lifestyle, without the Laguna density.</p>
          </Reveal>
        </div>
      </section>

      {/* ===== MICRO-NODES ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div>
          <Reveal className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Beyond Thalang</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-on-surface italic">Three directions worth knowing.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {PHUKET_MICRO_NODES.map((node, i) => (
              <Reveal key={node.title} delay={i * 90} className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                <h3 className="font-headline text-xl text-primary mb-3">{node.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{node.body}</p>
                {node.href && (
                  <Link to={node.href} className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
                    {node.cta} <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUIDES GRID ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-surface-container-low">
        <div>
          <Reveal className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Local Guides</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-on-surface italic">Go deeper.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHUKET_LIST.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 80}>
                <Link to={`/phuket/${guide.slug}`}>
                  {guide.image ? (
                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-luxe-sm mb-4">
                      <img src={guide.image} className="w-full h-full object-cover" alt={guide.title} />
                    </div>
                  ) : (
                    <div className="aspect-[4/5] rounded-xl bg-primary flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-white text-4xl">villa</span>
                    </div>
                  )}
                </Link>
                <span className="text-xs uppercase tracking-widest font-bold text-primary mb-1 block">{guide.category}</span>
                <h3 className="font-headline text-lg text-on-surface mb-2">
                  <Link to={`/phuket/${guide.slug}`} className="hover:text-primary transition-colors">{guide.title}</Link>
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{guide.teaser}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTION INTELLIGENCE ===== */}
      <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Selection Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-headline text-on-surface italic">Why Thalang is your strategic choice.</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {PHUKET_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{stat.icon}</span>
                <h3 className="font-headline text-lg text-on-surface mb-1">{stat.label}</h3>
                <p className="text-sm text-on-surface-variant">{stat.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LocationsSection />

      {/* ===== FINAL CTA ===== */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-primary text-white text-center">
        <Reveal>
          <h2 className="font-headline text-4xl sm:text-6xl mb-8">Ready to explore?</h2>
          <Button variant="tertiary" size="lg" to="/villas">
            Explore Our Villas
          </Button>
        </Reveal>
      </section>
    </>
  );
}
