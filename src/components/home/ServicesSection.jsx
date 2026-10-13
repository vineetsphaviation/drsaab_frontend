import { SectionContainer, Eyebrow, Button } from "../ui/UI";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Wrench } from "lucide-react";

import evService from "../../assets/ev_service.webp";
import droneService from "../../assets/drone_service.webp";
import solarService from "../../assets/solar_service.webp";
import batteryService from "../../assets/battery_service.webp";

const services = [
  [evService, "EV Services", "Scooters, E-Rickshaw, Electric Cargo & More"],
  [
    droneService,
    "Drone Services",
    "Battery Support, Repair & Field Assistance",
  ],
  [
    solarService,
    "Solar & Inverter Services",
    "Installation Support, Repair & Maintenance",
  ],
  [
    batteryService,
    "Battery Services",
    "Testing, Swapping, Support & Logistics",
  ],
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-1 sm:py-2">
      <SectionContainer
        className="
          grid
          grid-cols-1
          gap-4
          lg:grid-cols-[232px_minmax(0,1fr)_208px]
          lg:gap-5
        "
      >
        {/* =====================================================
            OUR PURPOSE
        ====================================================== */}

        <aside
          className="
            relative
            overflow-hidden
            rounded-[4px]
            bg-gradient-to-br
            from-[#075f45]
            via-[#034e37]
            to-[#062f26]
            px-6
            py-7
            text-white

            sm:px-8
            sm:py-8
            lg:min-h-[310px]
          "
        >
          {/* Subtle background effect */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-12
              -right-12
              h-36
              w-36
              rounded-full
              bg-[#0b6f4f]/20
              blur-2xl
            "
          />

          <div className="relative z-10">
            <Eyebrow light>OUR PURPOSE</Eyebrow>

            <h2
              className="
                mt-4
                text-[30px]
                font-black
                leading-[1.02]
                tracking-[-0.7px]
                text-white
              "
            >
              Keeping
              <br />
              Your Mobility
              <br />
              <span className="text-[#b7d96b]">&amp; Energy</span>
              <br />
              Running
            </h2>

            <p
              className="
                mt-4
                max-w-[185px]
                text-[13px]
                leading-[1.5]
                text-white/80
              "
            >
              Reliable post-sales support for EVs, Drones, Batteries &amp;
              Inverters — closer to you, always.
            </p>

            <Button
              to="/about-us"
              className="
                mt-4
                border-[#17905f]
                bg-[#17905f]
                px-3.5
                py-[9px]
                text-[11px]
                text-white
                hover:bg-[#0b6f4f]
              "
            >
              Know More About Us
              <span className="ml-1.5 text-[12px]">→</span>
            </Button>
          </div>
        </aside>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div
          className="
            min-w-0
            py-2
            lg:py-3
          "
        >
          {/* Section Heading */}

          <div className="mb-3">
            <Eyebrow>OUR SERVICES</Eyebrow>

            <h2
              className="
                mt-1
                text-[24px]
                font-black
                leading-[1.08]
                tracking-[-0.4px]
                text-[#152627]

                sm:text-[26px]
              "
            >
              Complete Post-Sales Support
              <br />
              for a Cleaner, Smarter Tomorrow
            </h2>
          </div>

          {/* Service Cards */}

          <div
            className="
              grid
              grid-cols-2
              gap-2

              sm:grid-cols-4
            "
          >
            {services.map(([image, title, description]) => (
              <article
                key={title}
                className="
                    min-w-0
                    rounded-[5px]
                    border border-brand-10 bg-white
                    p-2
                    shadow-[0_1px_4px_rgba(21,38,39,0.04)]
                    transition-shadow
                    duration-200
                    hover:shadow-[0_4px_12px_rgba(21,38,39,0.08)]
                  "
              >
                {/* Image */}

                <div
                  className="
                      flex
                      h-[112px]

                      sm:h-[100px]
                      lg:h-[112px]
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[3px]
                      bg-[#f4f8f6]
                    "
                >
                  <img
                    src={image}
                    alt={title}
                    className="
                        h-full
                        w-full
                        object-cover
                      "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                      mt-2
                      min-h-[28px]
                      text-[13px]
                      font-black
                      leading-[1.2]
                      text-[#152627]

                      sm:text-[14px]
                    "
                >
                  {title}
                </h3>

                {/* Description */}

                <p
                  className="
                      mt-1
                      min-h-[38px]
                      text-[11px]
                      leading-[1.4]
                      text-[#687675]

                      sm:text-[11px]
                    "
                >
                  {description}
                </p>

                {/* Link */}

                <Link
                  to="/our-services"
                  className="
                      mt-2
                      inline-flex
                      items-center
                      text-[11px]
                      font-black
                      text-[#0b6f4f]
                      transition-colors
                      hover:text-[#034e37]

                      sm:text-[11px]
                    "
                >
                  Know More
                  <span className="ml-1 text-[11px]">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOOK A SERVICE
        ====================================================== */}

        <aside
          id="book"
          className="
            relative
            isolate
            flex
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-brand-90/10
            bg-gradient-to-br
            from-brand-5
            via-white
            to-brand-10/60
            p-5
            shadow-[0_10px_30px_rgba(3,78,55,0.07)]
            lg:mt-[7px]
          "
        >
          <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-32 w-32 rounded-full border border-brand-70/10" />

          <div className="flex items-center justify-between gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-90 text-brand-lime shadow-sm">
              <Wrench size={20} />
            </div>
            <span className="rounded-full border border-brand-90/10 bg-white/80 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.7px] text-brand-80">
              Service support
            </span>
          </div>

          <Eyebrow className="mt-5">NEED A HAND?</Eyebrow>

          <h3 className="mt-2 text-[21px] font-black leading-[1.08] tracking-[-0.4px] text-brand-95">
            Expert help,
            <span className="block text-brand-70">closer to home.</span>
          </h3>

          <p className="mt-3 text-[12px] leading-5 text-brand-ink/65">
            Tell us what you need and we’ll help connect you with service
            support.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-brand-90/10 bg-white/75 px-3 py-2.5">
            <MapPin size={15} className="shrink-0 text-brand-70" />
            <span className="text-[10px] font-semibold leading-4 text-brand-ink/70">
              Rural and urban service areas
            </span>
          </div>

          <div className="mt-5 grid gap-2">
            <Button
              to="/our-services"
              state={{ openBookingForm: true }}
              className="w-full justify-between rounded-lg px-3 py-3 text-[11px]"
            >
              Book a Service
              <ArrowRight size={15} />
            </Button>

            <Button
              href="tel:+919728395138"
              variant="outline"
              className="w-full rounded-lg border-brand-90/15 bg-white/80 px-3 py-2.5 text-[11px] text-brand-90"
            >
              <Phone size={14} />
              Call Now
            </Button>
          </div>
        </aside>
      </SectionContainer>
    </section>
  );
}
