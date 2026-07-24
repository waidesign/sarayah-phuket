import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from './Button';
import { VILLAS } from '../data/homepage';

// Availability form. Rendered with different `variant` styling:
//  - "floating": an in-flow white card at the bottom of HeroSlider's content
//    column, visible immediately on load (no scrolling needed to see it).
//  - "sticky": a fixed, full-width bar pinned below the Header, faded in
//    once the Hero (and its floating card) has scrolled out of view.
// On submit, sends the user straight to the chosen villa's #availability
// section, carrying check_in/check_out/adults as query params — the same
// param names Hostex's own <hostex-booking-widget> reads from
// window.location.search to pre-fill its calendar (confirmed from the
// widget's source — see src/data/hostex.js).
export default function BookingBar({ variant = 'floating', className = '' }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [villaHref, setVillaHref] = useState(searchParams.get('villa') || VILLAS[0].href);
  const [checkIn, setCheckIn] = useState(searchParams.get('check_in') || '');
  const [checkOut, setCheckOut] = useState(searchParams.get('check_out') || '');
  const [guests, setGuests] = useState(parseInt(searchParams.get('adults'), 10) || 2);

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  useEffect(() => {
    setVillaHref(searchParams.get('villa') || VILLAS[0].href);
    setCheckIn(searchParams.get('check_in') || '');
    setCheckOut(searchParams.get('check_out') || '');
    setGuests(parseInt(searchParams.get('adults'), 10) || 2);
  }, [searchParams]);

  const handleOpenPicker = (ref) => {
    if (ref.current) {
      try {
        if (typeof ref.current.showPicker === 'function') {
          ref.current.showPicker();
        } else {
          ref.current.focus();
        }
      } catch (e) {
        ref.current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('check_in', checkIn);
    if (checkOut) params.set('check_out', checkOut);
    params.set('adults', String(guests));
    const query = params.toString();
    navigate(`${villaHref}${query ? `?${query}` : ''}#availability`);
  };

  const isFloating = variant === 'floating';

  return (
    <form
      onSubmit={handleSubmit}
      className={`backdrop-blur-xl backdrop-saturate-150 text-left rounded-2xl shadow-luxe border ${
        isFloating
          ? 'bg-white/35 border-white/25'
          : 'bg-white/95 border-outline-variant/20'
      } ${className}`}
    >
      <div
        className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-row sm:items-center sm:gap-6 lg:gap-8 px-5 sm:px-8 py-4 sm:py-6"
      >
        <label
          className={`col-span-2 flex flex-col sm:flex-1 sm:min-w-[112px] sm:border-r sm:pr-6 lg:pr-8 cursor-pointer ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}
        >
          <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 select-none ${isFloating ? 'text-white' : 'text-secondary'}`}>Villa Type</span>
          <select
            value={villaHref}
            onChange={(e) => setVillaHref(e.target.value)}
            className={`text-sm bg-transparent focus:outline-none w-full cursor-pointer ${isFloating ? 'text-white [color-scheme:dark]' : 'text-on-surface'}`}
          >
            {VILLAS.map((v) => (
              <option key={v.href} value={v.href} className="text-on-surface">
                {v.name.match(/^\d+-Bedroom/)?.[0] || v.name}
              </option>
            ))}
          </select>
        </label>

        <label
          onClick={() => handleOpenPicker(checkInRef)}
          className={`flex flex-col sm:flex-1 sm:border-r sm:pr-6 lg:pr-8 cursor-pointer ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}
        >
          <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 select-none ${isFloating ? 'text-white' : 'text-secondary'}`}>Check In</span>
          <input
            ref={checkInRef}
            type="date"
            required
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={`text-sm bg-transparent focus:outline-none w-full cursor-pointer ${isFloating ? 'text-white [color-scheme:dark]' : 'text-on-surface'}`}
          />
        </label>

        <label
          onClick={() => handleOpenPicker(checkOutRef)}
          className={`flex flex-col sm:flex-1 sm:border-r sm:pr-6 lg:pr-8 cursor-pointer ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}
        >
          <span className={`text-[10px] uppercase tracking-widest font-bold mb-1 select-none ${isFloating ? 'text-white' : 'text-secondary'}`}>Check Out</span>
          <input
            ref={checkOutRef}
            type="date"
            required
            value={checkOut}
            min={checkIn || undefined}
            onChange={(e) => setCheckOut(e.target.value)}
            className={`text-sm bg-transparent focus:outline-none w-full cursor-pointer ${isFloating ? 'text-white [color-scheme:dark]' : 'text-on-surface'}`}
          />
        </label>

        <div className={`col-span-2 flex items-center justify-between sm:flex-1 sm:flex-col sm:items-start sm:justify-center sm:border-r sm:pr-6 lg:pr-8 ${isFloating ? 'sm:border-white/20' : 'sm:border-outline-variant/15'}`}>
          <span className={`text-[10px] uppercase tracking-widest font-bold sm:mb-1 ${isFloating ? 'text-white' : 'text-secondary'}`}>Guests</span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              aria-label="Decrease guests"
              className={`text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors shrink-0 ${isFloating ? 'text-white hover:bg-white/20' : 'text-primary hover:bg-surface-container-high'}`}
            >
              −
            </button>
            <span className={`text-sm w-20 text-center ${isFloating ? 'text-white' : 'text-on-surface'}`}>
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(16, g + 1))}
              aria-label="Increase guests"
              className={`text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors shrink-0 ${isFloating ? 'text-white hover:bg-white/20' : 'text-primary hover:bg-surface-container-high'}`}
            >
              +
            </button>
          </div>
        </div>

        <Button type="submit" variant="primary" className="col-span-2 sm:col-span-1 shrink-0 sm:w-auto">
          Check Availability
        </Button>
      </div>
    </form>
  );
}
