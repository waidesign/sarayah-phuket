import Reveal from './Reveal';
import Button from './Button';
import { LOCATIONS } from '../data/locations';

const LOCATIONS_LIST = Object.values(LOCATIONS);

const CONTACT_METHODS = [
  { icon: 'call', label: 'Phone', value: '+66 82 565 1186', href: 'tel:+66825651186' },
  { icon: 'mail', label: 'Email', value: 'info@sarayahphuketvillas.com', href: 'mailto:info@sarayahphuketvillas.com' },
  { icon: 'chat', label: 'WhatsApp', value: 'Chat with our concierge', href: 'https://wa.me/66825651186', external: true },
];

export default function LocationsSection({ bg = 'bg-surface-container-low' }) {
  return (
    <section className={`py-20 sm:py-28 px-6 sm:px-8 ${bg}`}>
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="text-center mb-14 lg:mb-16">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">Find Us</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-on-surface leading-[1.1]">
            Get In Touch <em className="text-primary not-italic font-light">With Us.</em>
          </h2>
          <p className="mt-6 text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Two villas, one concierge team — call, message, or find your way to either gate below.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* ===== Contact panel ===== */}
          <Reveal className="lg:col-span-2 bg-primary text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-2xl mb-8">Contact Details</h3>
              <div className="space-y-6">
                {CONTACT_METHODS.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.external ? '_blank' : undefined}
                    rel={m.external ? 'noopener' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <span className="material-symbols-outlined text-lg">{m.icon}</span>
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 block">{m.label}</span>
                      <span className="text-sm font-medium truncate block group-hover:underline">{m.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <Button variant="tertiary" size="sm" to="/booking" className="whitespace-nowrap">
                Book a Reservation
              </Button>
              <Button variant="secondary" dark size="sm" to="/deals" icon="arrow_right_alt" className="whitespace-nowrap">
                See Our Rates
              </Button>
            </div>
          </Reveal>

          {/* ===== Maps ===== */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {LOCATIONS_LIST.map((loc) => (
              <Reveal key={loc.name} className="flex-1 bg-white rounded-2xl overflow-hidden shadow-luxe-sm border border-outline-variant/10 flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-video sm:aspect-auto sm:h-auto min-h-[180px] bg-surface-container-high shrink-0">
                  <iframe
                    title={`Map to ${loc.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-2 block">{loc.name}</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{loc.address}</p>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 hover:border-primary transition-all self-start"
                  >
                    Get Directions <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
