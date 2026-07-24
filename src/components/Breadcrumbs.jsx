import { Link } from 'react-router-dom';

/**
 * Visual breadcrumb trail. Pass the same `items` ({ name, path }[], including
 * Home and the current page) to `breadcrumbSchema()` (src/data/schema.js) for
 * the matching BreadcrumbList JSON-LD — keeps the visible trail and the
 * structured data from drifting apart.
 */
export default function Breadcrumbs({ items, className = 'mb-10 sm:mb-12', dark = false }) {
  const base = dark ? 'text-white/60' : 'text-on-surface-variant/70';
  const linkHover = dark ? 'hover:text-white' : 'hover:text-primary';
  const current = dark ? 'text-white' : 'text-primary';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center flex-wrap gap-2 text-xs uppercase tracking-[0.2em] ${base} ${className}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-2">
            {i > 0 && <span className="material-symbols-outlined text-[14px]">chevron_right</span>}
            {isLast ? (
              <span className={`font-bold truncate max-w-[160px] sm:max-w-xs ${current}`}>{item.name}</span>
            ) : (
              <Link to={item.path} className={`transition-colors ${linkHover}`}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
