import { HOSTEX_WIDGET_HOST_ID, HOSTEX_LISTING_IDS } from '../data/hostex';

/** Embeds the real Hostex availability calendar + checkout for one villa. */
export default function HostexBookingWidget({ slug, className = '' }) {
  const listingId = HOSTEX_LISTING_IDS[slug];
  if (!listingId) return null;

  return (
    <div className={`w-full bg-white p-6 rounded-2xl shadow-luxe ${className}`}>
      <hostex-booking-widget listing-id={listingId} id={HOSTEX_WIDGET_HOST_ID}></hostex-booking-widget>
    </div>
  );
}
