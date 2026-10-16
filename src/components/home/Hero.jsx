import { SectionContainer, Button, Eyebrow } from "../ui/UI";

import heroVisual from "../../assets/hero_visual.webp";
import iconEv from "../../assets/icon_ev.png";
import iconDrone from "../../assets/icon_drone.png";
import iconSolar from "../../assets/icon_solar.png";
import iconBattery from "../../assets/icon_battery.png";
import iconRepair from "../../assets/icon_repair.png";

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

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-brand-5
      "
    >
      {/* HERO IMAGE */}
      <div className="pointer-events-none absolute inset-0 lg:hidden">
        <img
          src={heroVisual}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-5/95 via-brand-5/85 to-brand-5/60" />
      </div>

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

        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/15 to-white/30" />

        {/* Soft fade so the image blends into the content area */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[35%]
            bg-gradient-to-r
            from-brand-5
            via-brand-5/75
            to-transparent
          "
        />
      </div>

      {/* HERO CONTENT */}
      <SectionContainer
        className="
          relative
          z-10
          min-h-[470px]
          lg:min-h-[386px]
        "
      >
        <div
          className="
            flex
            min-h-[470px]
            flex-col
            items-center
            justify-center
            py-8
            text-center

            lg:min-h-[386px]
            lg:w-[58%]
            lg:items-start
            lg:justify-center
            lg:py-5
            lg:text-left
          "
        >
          {/* Eyebrow */}

          <Eyebrow
            className="
              text-[13px]
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
              text-brand-95

            text-[clamp(2.75rem,14vw,3.625rem)]

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
                sm:text-[13px]
              "
            >
              ®
            </sup>
            <span
              className="
                mt-2
                block
                sm:whitespace-nowrap
                text-[clamp(1.05rem,5.8vw,1.75rem)]
                tracking-[-1px]
              "
            >
              PANCHAYAT SERVICE-ON-WHEELS
            </span>
          </h1>

          {/* Description */}

          <h2
            className="
              mt-3
              text-[14px]
              font-bold
              leading-tight
              text-brand-80

              sm:text-[15px]
            "
          >
            Mobile EV, Drone, Battery &amp; Inverter Support Enterprise
          </h2>

          {/* SERVICE ICONS */}
          <div
            className="
              mt-4
              flex
              items-start
              justify-center
              gap-1

              lg:justify-start
              lg:gap-2.5
            "
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="
                  w-[clamp(42px,14vw,58px)]
                  shrink-0
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    h-[clamp(42px,14vw,57px)]
                    w-[clamp(42px,14vw,57px)]
                    overflow-hidden
                    rounded-full
                    bg-brand-5
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
                    text-[12px]
                    font-extrabold
                    leading-[1.15]
                    text-brand-ink
                  "
                >
                  {service.title}
                  <br />
                  {service.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* TAGLINE */}
          <p
            className="
              my-3
              text-[12px]
              font-extrabold
              tracking-[-0.2px]
              text-brand-ink

              sm:text-[13px]
            "
          >
            One Vehicle
            <span className="px-1.5 text-brand-70">|</span>
            Multi Services
            <span className="px-1.5 text-brand-70">|</span>
            Many Villages
          </p>

          {/* CTA BUTTONS */}
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
              to="/our-services"
              state={{ openBookingForm: true }}
              className="
                min-w-[143px]
                rounded-[6px]
                px-4
                py-[13px]
                text-[12px]
                shadow-sm
              "
            >
              <span className="mr-1.5 text-[13px]">▣</span>
              Book a Service
            </Button>

            <Button
              to="/panchayat-modal"
              variant="outline"
              className="
                min-w-[171px]
                rounded-[6px]
                border-brand-70
                px-4
                py-[13px]
                text-[12px]
                text-brand-90
              "
            >
              View Panchayat Model
              <span className="ml-2 text-[14px]">→</span>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Hero;
