import { Link } from "react-router-dom";

export function Button({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[7px] border px-4 py-2.5 text-[11px] font-extrabold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-60/30";

  const variants = {
    primary:
      "border-brand-90 bg-brand-90 text-white hover:-translate-y-0.5 hover:bg-brand-80",

    outline:
      "border-brand-90 bg-white text-brand-90 hover:-translate-y-0.5 hover:bg-brand-5",

    light: "border-white bg-white text-brand-90 hover:-translate-y-0.5",

    lime: "border-brand-lime bg-brand-lime text-brand-95 hover:-translate-y-0.5",

    dark: "border-brand-95 bg-brand-95 text-white hover:-translate-y-0.5 hover:bg-brand-90",

    ghost: "border-transparent bg-transparent text-brand-70 hover:bg-brand-5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <div
      className={`
        text-[12px]
        font-black
        uppercase
        tracking-[1.4px]
        ${light ? "text-brand-lime" : "text-brand-70"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function SectionContainer({ children, className = "" }) {
  return (
    <div
      className={`
        mx-auto
        w-[min(1180px,calc(100%-32px))]
        sm:w-[min(1180px,calc(100%-48px))]
        lg:w-[min(1180px,calc(100%-64px))]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CircleIcon({ children, className = "" }) {
  return (
    <div
      className={`
        grid
        h-10
        w-10
        shrink-0
        place-items-center
        rounded-full
        bg-brand-5
        text-brand-90
        ${className}
      `}
    >
      {children}
    </div>
  );
}
