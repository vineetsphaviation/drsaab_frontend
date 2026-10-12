import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { ArrowRight, Check, Leaf, Mail, MapPin, Phone } from "lucide-react";

import { SectionContainer } from "../components/ui/UI";
import logo from "/dr.saab-logo.png";
import { quickLinks, supportLinks } from "../utils/constant";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
];
const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-xs font-black tracking-wide text-brand-ink">
        {title}
      </h3>

      <ul className="mt-4 space-y-2.5">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              to={href}
              className="
                group
                inline-flex
                items-center
                gap-1
                text-[11px]
                leading-5
                text-gray-500
                transition-colors
                duration-200
                hover:text-brand-70
              "
            >
              <span>{label}</span>

              <ArrowRight
                size={11}
                className="
                  -ml-1
                  -translate-x-1
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:ml-0
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subscribe = async (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage("Please enter your email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    // Replace this with your newsletter API call.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setEmail("");
    setMessage("Thank you for subscribing!");
  };

  return (
    <footer className="bg-white">
      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <SectionContainer className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_.8fr_.8fr_1.25fr] lg:gap-12">
          {/* =====================================================
              BRAND
          ====================================================== */}
          <div>
            <Link to="/" aria-label="Dr. Saab Home" className="inline-block">
              <img
                src={logo}
                alt="Dr. Saab"
                className="w-[200px] sm:w-[250px]"
              />
            </Link>

            <p className="mt-4 max-w-[320px] text-[11px] leading-6 text-gray-500">
              Post-sales service for EV, Drone, Battery and Inverter support
              across Panchayats and Rural India.
            </p>

            {/* Service statement */}
            <div className="mt-5 flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-70">
                <Leaf size={17} />
              </div>

              <div>
                <p className="text-[11px] font-black text-brand-90">
                  Service Today
                </p>

                <p className="text-[10px] text-gray-500">A Cleaner Tomorrow</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[1.2px] text-brand-70">
                Follow Dr. Saab
              </p>

              <div className="flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-lg
                        bg-brand-5
                        text-brand-90
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-brand-70
                        hover:text-white
                      "
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <FooterLinks title="Quick Links" links={quickLinks} />

          {/* =====================================================
              SUPPORT
          ====================================================== */}
          <FooterLinks title="Support" links={supportLinks} />

          {/* =====================================================
              NEWSLETTER
          ====================================================== */}
          <div>
            <h3 className="text-xs font-black tracking-wide text-brand-ink">
              Newsletter
            </h3>

            <p className="mt-3 max-w-[300px] text-[11px] leading-5 text-gray-500">
              Get service tips, updates and opportunities from the Dr. Saab
              network.
            </p>

            {/* Newsletter form */}
            <form
              onSubmit={subscribe}
              className="
                mt-5
                flex
                overflow-hidden
                rounded-lg
                border
                border-brand-10
                bg-white
                p-1
                shadow-sm
                transition
                focus-within:border-brand-60
                focus-within:ring-2
                focus-within:ring-brand-60/10
              "
            >
              <div className="flex min-w-0 flex-1 items-center gap-2 px-2">
                <Mail size={14} className="shrink-0 text-gray-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (message) setMessage("");
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    py-2.5
                    text-[10px]
                    text-brand-ink
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-1.5
                  rounded-md
                  bg-brand-70
                  px-3
                  py-2
                  text-[10px]
                  font-black
                  text-white
                  transition-all
                  hover:bg-brand-80
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting ? "..." : "Subscribe"}

                {!isSubmitting && <ArrowRight size={12} />}
              </button>
            </form>

            {/* Newsletter feedback */}
            {message && (
              <div
                className={`
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  ${
                    message.includes("Thank") ? "text-brand-70" : "text-red-600"
                  }
                `}
              >
                {message.includes("Thank") && (
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-5">
                    <Check size={10} strokeWidth={3} />
                  </span>
                )}

                {message}
              </div>
            )}

            {/* Contact mini cards */}
            <div className="mt-6 space-y-2.5">
              <a
                href="tel:+919999999999"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-brand-10
                  p-3
                  transition
                  hover:border-brand-60
                  hover:bg-brand-5
                "
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Phone size={14} />
                </span>

                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-wide text-gray-400">
                    Need Help?
                  </span>

                  <span className="block text-[11px] font-black text-brand-90">
                    Call Dr. Saab
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-brand-10 p-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <MapPin size={14} />
                </span>

                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-wide text-gray-400">
                    Service Network
                  </span>

                  <span className="block text-[11px] font-black text-brand-90">
                    Panchayats & Rural India
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* =========================================================
          BRAND STRIP
      ========================================================== */}
      <div className="bg-brand-95">
        <SectionContainer className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-lime text-brand-95">
              <Leaf size={16} />
            </span>

            <p className="text-[11px] font-bold text-white">
              A Cleaner, Brighter & More Connected Rural India
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold text-white/60">
            <span>Local Employment</span>
            <span>Reduced Downtime</span>
            <span>Supports EV Adoption</span>
            <span>Builds Rural Ecosystem</span>
          </div>
        </SectionContainer>
      </div>

      {/* =========================================================
          COPYRIGHT
      ========================================================== */}
      <div className="border-t border-brand-10 bg-white">
        <SectionContainer className="flex flex-col gap-3 py-4 text-[9px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Dr. Saab. All rights reserved. An initiative by Techsmart
            Ventures Pvt Limited.
          </p>

        </SectionContainer>
      </div>
    </footer>
  );
};

export default Footer;
