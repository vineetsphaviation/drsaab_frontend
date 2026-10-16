import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CalendarDays, Handshake, Menu, X, ChevronRight } from "lucide-react";

import { SectionContainer, Button } from "../components/ui/UI";
import logo from "/dr.saab-logo.png";
import { navItems } from "../utils/constant";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  /**
   * Close mobile navigation whenever route changes.
   */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /**
   * Prevent background page scrolling while
   * mobile navigation is open.
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Close mobile navigation with Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-10/80 bg-white/95 shadow-[0_2px_14px_rgba(21,38,39,0.06)] backdrop-blur-xl">
        <SectionContainer className="flex h-[68px] items-center">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Dr. Saab Home"
            className="group flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Dr. Saab"
              className="h-auto w-[132px] transition-transform duration-200 group-hover:scale-[1.02] sm:w-[140px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="mx-auto hidden min-w-0 items-center xl:flex"
          >
            {navItems.map(({ label, href }) => (
              <NavLink
                key={href}
                to={href}
                end={href === "/"}
                className={({ isActive }) =>
                  `
                  relative
                  whitespace-nowrap
                  px-[7px]
                  py-2
                  text-[14px]
                  font-bold
                  tracking-[-0.1px]
                  transition-all
                  duration-200
                  2xl:px-[9px]
                  2xl:text-[10.5px]
                  ${
                    isActive
                      ? "text-brand-90"
                      : "text-brand-ink/80 hover:text-brand-70"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {label}

                    {/* Active underline */}
                    <span
                      className={`
                        absolute
                        bottom-0.5
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-brand-70
                        transition-all
                        duration-200
                        ${
                          isActive
                            ? "w-[calc(100%-14px)] opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="ml-4 hidden shrink-0 items-center justify-center gap-2 xl:flex">
            <Button
              to="/our-services"
              state={{ openBookingForm: true }}
              variant="primary"
              className="min-h-[38px] whitespace-nowrap px-3.5 text-[12px] 2xl:px-4"
            >
              <CalendarDays size={14} strokeWidth={2.2} />
              Book a Service
            </Button>

            <Button
              href="/franchise"
              variant="outline"
              className="min-h-[38px] whitespace-nowrap px-3.5 text-[12px] 2xl:px-4"
            >
              <Handshake size={14} strokeWidth={2.2} />
              Become a Partner
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="
              ml-auto
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-brand-10
              bg-white
              text-brand-90
              transition-all
              hover:border-brand-60
              hover:bg-brand-5
              focus:outline-none
              focus:ring-2
              focus:ring-brand-60/30
              xl:hidden
            "
          >
            {open ? (
              <X size={21} strokeWidth={2} />
            ) : (
              <Menu size={21} strokeWidth={2} />
            )}
          </button>
        </SectionContainer>

        {/* MOBILE BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={`
            fixed
            inset-0
            top-[68px]
            z-[-1]
            bg-brand-95/25
            backdrop-blur-[2px]
            transition-opacity
            duration-200
            xl:hidden
            ${
              open
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
        />

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`
            absolute
            left-0
            right-0
            top-full
            overflow-hidden
            border-t
            border-brand-10
            bg-white
            shadow-[0_18px_35px_rgba(21,38,39,0.12)]
            transition-all
            duration-300
            xl:hidden
            ${
              open
                ? "visible max-h-[calc(100vh-68px)] opacity-100"
                : "invisible max-h-0 opacity-0"
            }
          `}
        >
          <div className="max-h-[calc(100vh-68px)] overflow-y-auto">
            <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-4">
              {/* Mobile navigation links */}
              <nav aria-label="Mobile navigation" className="grid gap-1">
                {navItems.map(({ label, href }) => (
                  <NavLink
                    key={href}
                    to={href}
                    end={href === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                      group
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-bold
                      transition-all
                      ${
                        isActive
                          ? "bg-brand-5 text-brand-90"
                          : "text-brand-ink hover:bg-brand-5 hover:text-brand-90"
                      }
                    `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{label}</span>

                        <ChevronRight
                          size={16}
                          className={`
                            transition-transform
                            duration-200
                            ${
                              isActive
                                ? "translate-x-0 text-brand-70"
                                : "-translate-x-1 text-gray-300 group-hover:translate-x-0 group-hover:text-brand-70"
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile actions */}
              <div className="mt-4 grid gap-2 border-t border-brand-10 pt-4 sm:grid-cols-2">
                <Button
                  to="/our-services"
                  state={{ openBookingForm: true }}
                  variant="primary"
                  className="min-h-[44px] w-full"
                  onClick={() => setOpen(false)}
                >
                  <CalendarDays size={16} />
                  Book a Service
                </Button>

                <Button
                  href="#franchise"
                  variant="outline"
                  className="min-h-[44px] w-full"
                  onClick={() => setOpen(false)}
                >
                  <Handshake size={16} />
                  Become a Partner
                </Button>
              </div>

              {/* Mobile trust message */}
              <div className="mt-4 rounded-xl bg-brand-5 px-4 py-3">
                <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-brand-70">
                  Dr. Saab
                </p>

                <p className="mt-1 text-[14px] leading-5 text-gray-500">
                  Post-sales support for EVs, batteries, drones and energy
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
