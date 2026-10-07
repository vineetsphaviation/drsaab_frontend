import { useState } from "react";
import { SectionContainer } from "./ui";
import logo from "../assets/logo_footer.png";

const quickLinks = [
  "Home",
  "Our Services",
  "Panchayat Model",
  "Urban Partner",
  "Franchise",
  "How It Works",
];

const supportLinks = [
  "FAQs",
  "Service Areas",
  "Partner With Us",
  "Blog / Updates",
  "Careers",
  "Contact Us",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function subscribe(e) {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  return (
    <footer id="about" className="bg-white pt-6">
      <SectionContainer
        className="
          grid
          gap-7
          border-b
          border-line
          pb-6
          md:grid-cols-2
          lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]
        "
      >
        {/* =========================
            BRAND
        ========================== */}

        <div>
          <img src={logo} alt="Dr. Saab" className="w-[210px]" />

          <p
            className="
              mt-3
              max-w-[260px]
              text-[9px]
              leading-[1.55]
              text-muted
            "
          >
            Post-sales service for EV, Drone, Battery and Inverter across
            Panchayats and Rural India.
          </p>

          {/* Social Icons */}

          <div className="mt-4 flex gap-2">
            <span
              className="
                grid
                h-6
                w-6
                place-items-center
                rounded
                bg-brand-50
                text-[9px]
                font-bold
                text-brand-900
              "
            >
              in
            </span>

            <span
              className="
                grid
                h-6
                w-6
                place-items-center
                rounded
                bg-brand-50
                text-[9px]
                font-bold
                text-brand-900
              "
            >
              ▶
            </span>

            <span
              className="
                grid
                h-6
                w-6
                place-items-center
                rounded
                bg-brand-50
                text-[9px]
                font-bold
                text-brand-900
              "
            >
              ◎
            </span>

            <span
              className="
                grid
                h-6
                w-6
                place-items-center
                rounded
                bg-brand-50
                text-[9px]
                font-bold
                text-brand-900
              "
            >
              f
            </span>
          </div>
        </div>

        {/* =========================
            QUICK LINKS
        ========================== */}

        <FooterLinks title="Quick Links" links={quickLinks} />

        {/* =========================
            SUPPORT
        ========================== */}

        <FooterLinks title="Support" links={supportLinks} />

        {/* =========================
            NEWSLETTER
        ========================== */}

        <div>
          <h4 className="text-[11px] font-black text-ink">Newsletter</h4>

          <p
            className="
              mt-2
              text-[9px]
              text-muted
            "
          >
            Get service tips, updates and opportunities.
          </p>

          <form
            onSubmit={subscribe}
            className="
              mt-2
              flex
              overflow-hidden
              rounded
              border
              border-line
            "
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                min-w-0
                flex-1
                px-2
                py-2
                text-[9px]
                outline-none
              "
            />

            <button
              type="submit"
              className="
                bg-brand-100
                px-3
                text-[9px]
                font-extrabold
                text-brand-900
              "
            >
              Subscribe
            </button>
          </form>

          {message && (
            <p
              className="
                mt-2
                text-[9px]
                font-bold
                text-brand-700
              "
            >
              {message}
            </p>
          )}

          <p
            className="
              mt-5
              text-[11px]
              font-black
              leading-tight
              text-brand-900
            "
          >
            🌿 Service Today
            <br />
            &nbsp;&nbsp;&nbsp;A Cleaner Tomorrow
          </p>
        </div>
      </SectionContainer>

      {/* =========================
          COPYRIGHT
      ========================== */}

      <div className="border-t border-line">
        <SectionContainer
          className="
            flex
            flex-col
            gap-2
            py-3
            text-[8px]
            text-[#77827f]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>
            © 2024 Dr. Saab. All rights reserved. An initiative by Techsmart
            Ventures Pvt Limited.
          </span>

          <span>
            Privacy Policy&nbsp; | &nbsp;Terms &amp; Conditions&nbsp; |
            &nbsp;Disclaimer
          </span>
        </SectionContainer>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-[11px] font-black text-ink">{title}</h4>

      <div className="mt-2 space-y-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="
              block
              text-[9px]
              text-muted
              transition-colors
              hover:text-brand-700
            "
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
