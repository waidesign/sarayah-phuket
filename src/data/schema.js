import { SITE_URL, SITE_NAME } from '../components/Seo';

export const TELEPHONE = '+66825651186';

/** LodgingBusiness schema — used for the homepage (overall business) and each villa page (that listing). */
export function lodgingBusinessSchema({ name, description, image, path, address, priceRange }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}${path}`,
    telephone: TELEPHONE,
    ...(address ? { address: { '@type': 'PostalAddress', streetAddress: address, addressRegion: 'Phuket', addressCountry: 'TH' } } : {}),
    ...(priceRange ? { priceRange } : {}),
  };
}

/** FAQPage schema from the same {q, a} shape already used by FaqAccordion across the site. */
export function faqPageSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** BreadcrumbList schema matching the visual breadcrumb trails already on blog/phuket article pages. */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export { SITE_URL, SITE_NAME };
