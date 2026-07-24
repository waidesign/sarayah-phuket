import Reveal from './Reveal';
import Button from './Button';
import { VILLAS } from '../data/homepage';

/** The villa card grid (image + capacity badge + specs + Book Now/Explore buttons) — shared between the homepage and /villas. */
export default function VillaShowcaseGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      {VILLAS.map((villa, i) => (
        <Reveal
          key={villa.name}
          delay={i * 100}
          className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col group"
        >
          {/* Image Container with Subtle Zoom */}
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
            <img
              alt={villa.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              src={villa.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

            {/* Floating Badges */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-sm">group</span>
                {villa.capacity}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-1.5 block">
                {villa.eyebrow}
              </span>
              <h3 className="text-2xl font-headline text-on-surface mb-2.5 group-hover:text-primary transition-colors duration-300">
                {villa.name}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                {villa.body}
              </p>

              {/* Key Specs */}
              {villa.specs && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {villa.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-medium text-secondary bg-surface-container-low px-2.5 py-1 rounded border border-outline-variant/15 flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="primary" size="sm" to={`${villa.href}#availability`} className="whitespace-nowrap text-[11px]">
                Book Now
              </Button>
              <Button variant="secondary" size="sm" to={villa.href} icon="arrow_right_alt" className="whitespace-nowrap text-[11px]">
                Explore
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
