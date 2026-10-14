import { SectionContainer, Eyebrow, Button } from "../ui/UI";

import impact from "../../assets/impact.png";
import franchise from "../../assets/franchise.png";
import farmerIcon from "../../assets/e_rickshaw.png";
import eRickshawIcon from "../../assets/rural_entrepreneures.png";
import evOwnerIcon from "../../assets/farmer.png";
import entrepreneurIcon from "../../assets/household.png";
import institutionIcon from "../../assets/school_and_institutions.png";
import householdIcon from "../../assets/ev_owners.png";

const useCases = [
  [
    farmerIcon,
    "Farmer using agricultural technology",
    <>
      Farmers
      <br />
      <span className="font-normal">(Drone & Solar)</span>
    </>,
  ],
  [
    eRickshawIcon,
    "Electric rickshaw",
    <>
      E-Rickshaw
      <br />
      Drivers
    </>,
  ],
  [evOwnerIcon, "Electric scooter", <>EV Owners</>],
  [
    entrepreneurIcon,
    "Local entrepreneur with a produce cart",
    <>
      Rural
      <br />
      Entrepreneurs
    </>,
  ],
  [
    institutionIcon,
    "School building",
    <>
      Schools &
      <br />
      Institutions
    </>,
  ],
  [householdIcon, "Household", <>Households</>],
];

const ImpactSection = () => {
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
            {useCases.map(([icon, alt, text]) => (
              <div
                key={alt}
                className="
                  text-center
                  text-[11px]
                  font-bold
                  leading-[1.25]
                  text-ink
                "
              >
                <img
                  src={icon}
                  alt={alt}
                  className="mx-auto mb-1 h-12 w-12 rounded-full object-contain"
                />

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
};

export default ImpactSection;
