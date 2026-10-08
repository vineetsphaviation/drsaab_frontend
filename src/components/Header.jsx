import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SectionContainer, Button } from "../components/ui/UI";
import logo from "../assets/logo_header.png";
import { navItems } from "../utils/constant";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-[0_2px_12px_rgba(21,38,39,0.06)] backdrop-blur">
      <SectionContainer className="relative flex h-[62px] items-center gap-5">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Dr. Saab" className="h-auto w-[143px]" />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded px-2 py-2 text-[10px] font-bold transition-colors hover:text-brand-700 ${
                  isActive ? "bg-brand-50 text-brand-900" : "text-ink"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Button href="#book">◉&nbsp; Book a Service</Button>
          <Button href="#franchise" variant="outline">
            ◉&nbsp; Become a Partner
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded text-2xl text-brand-900 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-600/30 xl:hidden"
        >
          ☰
        </button>

        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-brand-100 bg-white p-4 shadow-lg xl:hidden"
          >
            <nav className="grid gap-1">
              {navItems.map(({ label, href }) => (
                <NavLink
                  key={href}
                  to={href}
                  end={href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-3 text-sm font-bold hover:bg-brand-50 hover:text-brand-900 ${
                      isActive ? "bg-brand-50 text-brand-900" : "text-ink"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </SectionContainer>
    </header>
  );
};

export default Header;
