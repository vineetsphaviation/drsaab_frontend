import { SectionContainer, Button, Eyebrow } from "./ui";

import heroVisual from "../assets/hero_visual.png";
import iconEv from "../assets/icon_ev.png";
import iconDrone from "../assets/icon_drone.png";
import iconSolar from "../assets/icon_solar.png";
import iconBattery from "../assets/icon_battery.png";
import iconRepair from "../assets/icon_repair.png";

const services = [
  {
    image: iconEv,
    title: "EV",
    subtitle: "SERVICES",
  },
  {
    image: iconDrone,
    title: "DRONE",
    subtitle: "SERVICES",
  },
  {
    image: iconSolar,
    title: "SOLAR &",
    subtitle: "INVERTER SERVICES",
  },
  {
    image: iconBattery,
    title: "BATTERY",
    subtitle: "SERVICES",
  },
  {
    image: iconRepair,
    title: "REPAIR &",
    subtitle: "MAINTENANCE",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#eaf5f7]
      "
    >
      {/* =========================
          HERO IMAGE
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          hidden
          w-[63%]
          lg:block
        "
      >
        <img
          src={heroVisual}
          alt="Dr. Saab Panchayat service-on-wheels"
          className="
            h-full
            w-full
            object-cover
            object-left
          "
        />

        {/* Soft fade so the image blends into the content area */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[35%]
            bg-gradient-to-r
            from-[#eaf5f7]
            via-[#eaf5f7]/75
            to-transparent
          "
        />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}

      <SectionContainer
        className="
          relative
          z-10
          min-h-[455px]
          lg:min-h-[386px]
        "
      >
        <div
          className="
            flex
            min-h-[455px]
            flex-col
            justify-center
            py-8

            lg:min-h-[386px]
            lg:w-[58%]
            lg:justify-center
            lg:py-5
          "
        >
          {/* Eyebrow */}

          <Eyebrow
            className="
              text-[11px]
              tracking-[1.5px]

              sm:text-[12px]
            "
          >
            POST-SALES SERVICE ON WHEELS
          </Eyebrow>

          {/* Main Heading */}

          <h1
            className="
              mt-2
              font-black
              leading-[0.88]
              tracking-[-3px]
              text-brand-900

              text-[50px]

              sm:text-[58px]

              lg:text-[61px]
            "
          >
            DR. SAAB
            <sup
              className="
                ml-0.5
                align-top
                text-[9px]
                tracking-normal
                sm:text-[11px]
              "
            >
              ®
            </sup>
            <span
              className="
                mt-2
                block
                whitespace-nowrap
                text-[23px]
                tracking-[-1px]

                sm:text-[27px]

                lg:text-[28px]
              "
            >
              PANCHAYAT SERVICE-ON-WHEELS
            </span>
          </h1>

          {/* Description */}

          <h2
            className="
              mt-3
              text-[13px]
              font-bold
              leading-tight
              text-brand-800

              sm:text-[14px]
            "
          >
            Mobile EV, Drone, Battery &amp; Inverter Support Enterprise
          </h2>

          {/* =========================
              SERVICE ICONS
          ========================== */}

          <div
            className="
              mt-4
              flex
              items-start
              justify-center
              gap-2

              lg:justify-start
              lg:gap-2.5
            "
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="
                  w-[58px]
                  shrink-0
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    h-[57px]
                    w-[57px]
                    overflow-hidden
                    rounded-full
                    bg-[#edf7f2]
                  "
                >
                  <img
                    src={service.image}
                    alt=""
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                <span
                  className="
                    mt-1
                    block
                    text-[7px]
                    font-extrabold
                    leading-[1.15]
                    text-[#152627]
                  "
                >
                  {service.title}
                  <br />
                  {service.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* =========================
              TAGLINE
          ========================== */}

          <p
            className="
              my-3
              text-[12px]
              font-extrabold
              tracking-[-0.2px]
              text-[#152627]

              sm:text-[13px]
            "
          >
            One Vehicle
            <span className="px-1.5 text-brand-700">|</span>
            Multi Services
            <span className="px-1.5 text-brand-700">|</span>
            Many Villages
          </p>

          {/* =========================
              CTA BUTTONS
          ========================== */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2

              lg:justify-start
            "
          >
            <Button
              href="#book"
              className="
                min-w-[143px]
                rounded-[6px]
                px-4
                py-[11px]
                text-[10px]
                shadow-sm
              "
            >
              <span className="mr-1.5 text-[13px]">▣</span>
              Book a Service
            </Button>

            <Button
              href="#panchayat"
              variant="outline"
              className="
                min-w-[171px]
                rounded-[6px]
                border-brand-700
                px-4
                py-[11px]
                text-[10px]
                text-brand-900
              "
            >
              View Panchayat Model
              <span className="ml-2 text-[14px]">→</span>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* =========================
          MOBILE HERO IMAGE
      ========================== */}

      <div
        className="
          relative
          block
          h-[235px]
          overflow-hidden

          lg:hidden
        "
      >
        <img
          src={heroVisual}
          alt="Dr. Saab Panchayat service-on-wheels"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>
    </section>
  );
}
