import { SectionContainer, Eyebrow, Button } from "../ui/UI";

import impact from "../../assets/impact.png";
import franchise from "../../assets/franchise.png";

const useCases = [
  [
    "♟",
    <>
      Farmers
      <br />
      <span className="font-normal">(Drone & Solar)</span>
    </>,
  ],
  [
    "🛺",
    <>
      E-Rickshaw
      <br />
      Drivers
    </>,
  ],
  ["⚡", <>EV Owners</>],
  [
    "♟",
    <>
      Rural
      <br />
      Entrepreneurs
    </>,
  ],
  [
    "▥",
    <>
      Schools &
      <br />
      Institutions
    </>,
  ],
  ["⌂", <>Households</>],
];

export default function ImpactSection() {
  return (
    <section id="panchayat" className="bg-white pb-6">
      <SectionContainer
        className="
          grid
          grid-cols-1
          gap-4
          lg:grid-cols-[1.02fr_1.15fr_1.02fr]
        "
      >
        {/* OUR IMPACT */}

        <article
          className="
            relative
            min-h-[230px]
            overflow-hidden
            rounded
          "
        >
          <img
            src={impact}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#edf9fb]/95
              via-[#edf9fb]/70
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              p-6
            "
          >
            <Eyebrow>Our Impact</Eyebrow>

            <h2
              className="
                mt-1
                max-w-[220px]
                text-[24px]
                font-black
                leading-tight
                text-ink
              "
            >
              Empowering Villages
              <br />
              with Trusted Service
            </h2>

            <p
              className="
                mt-2
                max-w-[220px]
                text-[12px]
                leading-[1.45]
                text-ink
              "
            >
              Supporting Farmers, Commuters, Entrepreneurs and Households.
            </p>

            <Button
              to="/panchayat-modal"
              variant="outline"
              className="
                mt-2
                px-3
                py-2
                text-[11px]
              "
            >
              Our Impact&nbsp; →
            </Button>
          </div>
        </article>

        {/* USE CASES */}

        <article
          className="
            rounded
            border border-brand-10 bg-white
            p-5
          "
        >
          <Eyebrow>Use Cases</Eyebrow>

          <div
            className="
              mt-3
              grid
              grid-cols-3
              gap-4
            "
          >
            {useCases.map(([icon, text], index) => (
              <div
                key={index}
                className="
                  text-center
                  text-[11px]
                  font-bold
                  leading-[1.25]
                  text-ink
                "
              >
                <div
                  className="
                    mx-auto
                    mb-1
                    grid
                    h-12
                    w-12
                    place-items-center
                    rounded-full
                    bg-brand-50
                    text-[17px]
                    text-brand-700
                  "
                >
                  {icon}
                </div>

                {text}
              </div>
            ))}
          </div>
        </article>

        {/* FRANCHISE OPPORTUNITY */}

        <article
          id="franchise"
          className="
            relative
            min-h-[230px]
            overflow-hidden
            rounded
            bg-brand-950
            text-white
          "
        >
          <img
            src={franchise}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-brand-950/95
              via-brand-950/65
              to-brand-950/10
            "
          />

          <div
            className="
              relative
              z-10
              p-6
            "
          >
            <Eyebrow light>Franchise Opportunity</Eyebrow>

            <h2
              className="
                mt-2
                w-[62%]
                text-[24px]
                font-black
                leading-[1.05]
              "
            >
              Bring Dr. Saab to
              <br />
              Your Panchayat
            </h2>

            <p
              className="
                mt-2
                w-[62%]
                text-[12px]
                leading-[1.4]
              "
            >
              Start your own service-on-wheels business with training, equipment
              and support.
            </p>

            <Button
              to="/franchise"
              variant="light"
              className="
                mt-2
                px-3
                py-2
                text-[11px]
              "
            >
              Apply for Franchise&nbsp; →
            </Button>
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
