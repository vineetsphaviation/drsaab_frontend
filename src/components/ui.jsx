export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-[7px] border px-4 py-2.5 text-[11px] font-extrabold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-600/30";
  const variants = {
    primary:
      "border-brand-900 bg-brand-900 text-white hover:-translate-y-0.5 hover:bg-brand-800",
    outline:
      "border-brand-900 bg-white text-brand-900 hover:-translate-y-0.5 hover:bg-brand-50",
    light: "border-white bg-white text-brand-900 hover:-translate-y-0.5",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href)
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <div
      className={`text-[10px] font-black uppercase tracking-[1.4px] ${light ? "text-lime" : "text-brand-700"} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionContainer({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[min(1180px,calc(100%-28px))] lg:w-[min(1180px,calc(100%-48px))] ${className}`}
    >
      {children}
    </div>
  );
}

export function CircleIcon({ children, className = "" }) {
  return (
    <div
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-900 ${className}`}
    >
      {children}
    </div>
  );
}
