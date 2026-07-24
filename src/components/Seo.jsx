export const SITE_URL = 'https://sarayahphuketvillas.com';
export const SITE_NAME = 'Sarayah Phuket Villas';
const DEFAULT_OG_IMAGE = '/assets/media/villas/4-bedroom/IMG_8416.jpg';

/**
 * Per-route <title>/meta/canonical/OG tags and JSON-LD structured data.
 * React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into
 * <head> automatically, so this needs no extra dependency (e.g. react-helmet).
 * JSON-LD <script> tags don't need hoisting — Google reads them anywhere in the DOM.
 */
export default function Seo({ title, description, path, image, schema }) {
  const url = `${SITE_URL}${path}`;
  const resolvedImage = image || DEFAULT_OG_IMAGE;
  const ogImage = resolvedImage.startsWith('http') ? resolvedImage : `${SITE_URL}${resolvedImage}`;
  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : null;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemaList && schemaList.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
