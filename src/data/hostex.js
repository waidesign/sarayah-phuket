/**
 * Hostex Direct Booking Widget config — from the live embed snippet in the
 * Hostex WorkPlace dashboard (Direct Booking Site > Embed on my website),
 * confirmed 2026-07-23. The `id` attribute is a base64 blob encoding the
 * account's host_id + widget_host; it's the same for every listing on this
 * account, unlike `listing-id` which is per-villa.
 */
export const HOSTEX_WIDGET_SCRIPT_SRC = 'https://hostex.io/app/assets/js/hostex-widget.js?version=20260722142854';
export const HOSTEX_WIDGET_HOST_ID = 'eyJob3N0X2lkIjoiMTAzNTc2Iiwid2lkZ2V0X2hvc3QiOiJodHRwczovL3cuaG9zdGV4Ym9va2luZy5zaXRlIn0=';

export const HOSTEX_LISTING_IDS = {
  '2-bedroom-private-pool-villa': '114465',
  '4-bedroom-villa': '114466',
};
