import { SectionContainer, Eyebrow, Button } from "../ui/UI";

import evService from "../../assets/ev_service.png";
import droneService from "../../assets/drone_service.png";
import solarService from "../../assets/solar_service.png";
import batteryService from "../../assets/battery_service.png";

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
              href="#about"
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
                    border
                    border-[#dce4e1]
                    bg-white
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

                <a
                  href="#"
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
                </a>
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
            rounded-[5px]
            border
            border-[#d4e8df]
            bg-[#e8f5f0]
            p-5

            lg:mt-[7px]
          "
        >
          <Eyebrow>NEED IMMEDIATE HELP?</Eyebrow>

          <h3
            className="
              mt-1
              text-[23px]
              font-black
              leading-[1.02]
              tracking-[-0.3px]
              text-[#034e37]
            "
          >
            Book a Service
            <br />
            Now
          </h3>

          <p
            className="
              mt-2
              text-[12px]
              leading-[1.4]
              text-[#687675]
            "
          >
            Our mobile service team
            <br />
            will reach you.
          </p>

          {/* Panchayat Select */}

          <select
            className="
              my-2
              h-[32px]
              w-full
              appearance-none
              rounded-[4px]
              border
              border-[#d4dedb]
              bg-white
              px-2
              text-[12px]
              text-[#687675]
              outline-none
              focus:border-[#0b6f4f]
              focus:ring-1
              focus:ring-[#0b6f4f]/20
            "
            defaultValue=""
          >
            <option value="" disabled>
              Select Your Panchayat / District
            </option>

            <option value="district">District Service Area</option>

            <option value="panchayat">Panchayat Service Unit</option>
          </select>

          {/* Book Now */}

          <Button
            className="
              w-full
              rounded-[4px]
              px-2
              py-[9px]
              text-[11px]
            "
          >
            Book Now
            <span className="ml-1.5 text-[12px]">→</span>
          </Button>

          {/* Divider */}

          <div
            className="
              my-2
              flex
              items-center
              gap-2
              text-[8px]
              text-[#687675]
            "
          >
            <span className="h-px flex-1 bg-[#cbded6]" />
            <span>or</span>
            <span className="h-px flex-1 bg-[#cbded6]" />
          </div>

          {/* Call / WhatsApp */}

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="
                min-w-0
                rounded-[4px]
                border-[#0b6f4f]
                px-1.5
                py-[8px]
                text-[11px]
                text-[#034e37]
              "
            >
              <span className="mr-1 text-[11px]">☎</span>
              Call Now
            </Button>

            <Button
              variant="outline"
              className="
                min-w-0
                rounded-[4px]
                border-[#0b6f4f]
                px-1.5
                py-[8px]
                text-[8.5px]
                text-[#034e37]
              "
            >
              <span className="mr-1 text-[11px]">◉</span>
              WhatsApp
            </Button>
          </div>
        </aside>
      </SectionContainer>
    </section>
  );
}
