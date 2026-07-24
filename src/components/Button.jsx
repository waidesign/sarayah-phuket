import { Link } from 'react-router-dom';

/**
 * The site's 3 canonical CTA button styles. Reference implementations this
 * was normalized from: Primary = BookingBar's "Check Availability", Secondary
 * = HomePage's "Explore All Experiences", Tertiary = the Tours card's
 * "Book Now". Does NOT cover underline/arrow link-style CTAs ("Read Article",
 * "Learn More") — those stay as plain styled <Link>s, by design.
 */
const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-container',
  secondary: 'border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary',
  'secondary-dark': 'border border-white/30 text-white hover:border-white hover:bg-white/10',
  tertiary: 'bg-white text-primary hover:bg-primary-fixed-dim',
};

const SIZES = {
  xs: 'px-6 py-2.5 text-[10px]',
  sm: 'px-6 py-3 text-xs',
  md: 'px-10 py-4 text-xs',
  lg: 'px-12 py-5 text-xs',
};

const BASE = 'inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-widest uppercase transition-all group/btn';

export default function Button({
  variant = 'primary',
  dark = false,
  size = 'md',
  to,
  href,
  external = false,
  type = 'button',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const resolvedVariant = variant === 'secondary' && dark ? 'secondary-dark' : variant;
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[resolvedVariant]} ${className}`;

  const iconEl = icon && (
    <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover/btn:translate-x-1">
      {icon}
    </span>
  );
  const content = (
    <>
      {icon && iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {icon && iconPosition === 'right' && iconEl}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
