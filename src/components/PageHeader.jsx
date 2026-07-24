import Reveal from './Reveal';
import Breadcrumbs from './Breadcrumbs';

export default function PageHeader({ eyebrow, title, italicTitle, subtitle, image, background = 'image', stats, height = 'min-h-[70vh]', breadcrumbs }) {
  return (
    <section className={`relative ${height} flex items-end overflow-hidden bg-primary`}>
      {background === 'brand' ? (
        <img
          alt=""
          aria-hidden="true"
          src="/saraya-logo-secondary.svg"
          className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-16 lg:right-24 w-[240px] sm:w-[340px] lg:w-[440px] opacity-90 pointer-events-none select-none hidden sm:block"
        />
      ) : (
        <>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={image} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        </>
      )}
      <Reveal className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pt-40 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} dark className="mb-6" />}
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/60 mb-6 block">{eyebrow}</span>
          <h1 className="font-headline text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
            {title}
            {italicTitle && <>{' '}<em className="font-light">{italicTitle}</em></>}
          </h1>
          {subtitle && <p className="text-white/80 text-lg max-w-4xl leading-relaxed">{subtitle}</p>}
          {stats && stats.length > 0 && (
            <div className="flex gap-10 border-t border-white/20 pt-8 mt-10 flex-wrap">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">{s.label}</span>
                  <span className="text-lg font-light text-white">{s.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
