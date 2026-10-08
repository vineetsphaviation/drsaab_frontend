import { Eyebrow, SectionContainer } from "../ui/UI";

import diagnostic from "../../assets/equip_diagnostic.png";
import battery from "../../assets/equip_battery.png";
import evCharger from "../../assets/equip_evcharger.png";
import drone from "../../assets/equip_drone.png";
import solar from "../../assets/equip_solar.png";
import toolkit from "../../assets/equip_toolkit.png";
import safety from "../../assets/equip_safety.png";

const steps = [
  [
    "◔",
    "1",
    <>
      Call / Book
      <br />
      Service
    </>,
  ],
  [
    "▣",
    "2",
    <>
      We Reach
      <br />
      You
    </>,
  ],
  [
    "🛠",
    "3",
    <>
      Diagnose &
      <br />
      Service
    </>,
  ],
  [
    "▤",
    "4",
    <>
      Digital Invoice
      <br />
      &amp; Record
    </>,
  ],
  [
    "⌂",
    "5",
    <>
      Follow-up &
      <br />
      Support
    </>,
  ],
];

const equipment = [
  [
    diagnostic,
    <>
      Diagnostic
      <br />
      Tools
    </>,
  ],
  [
    battery,
    <>
      Battery
      <br />
      Tester
    </>,
  ],
  [
    evCharger,
    <>
      EV Charger
      <br />
      &amp; Tools
    </>,
  ],
  [
    drone,
    <>
      Drone Charger
      <br />
      &amp; Tools
    </>,
  ],
  [
    solar,
    <>
      Solar Testing
      <br />
      Kit
    </>,
  ],
  [toolkit, <>Tool Kit</>],
  [
    safety,
    <>
      Safety
      <br />
      Equipment
    </>,
  ],
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="
        bg-white
        py-2
        sm:py-4
      "
    >
      <SectionContainer
        className="
          grid
          items-center
          gap-5

          lg:grid-cols-[1.05fr_1fr]
          lg:gap-6
        "
      >
        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <div className="min-w-0">
          <Eyebrow>HOW IT WORKS</Eyebrow>

          <div
            className="
              relative
              mt-3
              flex
              items-start
              justify-between
            "
          >
            {/* Connecting line */}

            <div
              className="
                pointer-events-none
                absolute
                left-[9%]
                right-[9%]
                top-[23px]
                border-t
                border-dashed
                border-[#75b99a]
              "
            />

            {steps.map(([icon, number, label], index) => (
              <div
                key={number}
                className="
                    relative
                    z-10
                    flex
                    w-[19%]
                    flex-col
                    items-center
                    text-center
                  "
              >
                {/* Step icon */}

                <div
                  className="
                      grid
                      h-[46px]
                      w-[46px]
                      place-items-center
                      rounded-full
                      border
                      border-[#d9ebf5]
                      bg-[#edf6fb]
                      text-[19px]
                      font-bold
                      text-[#0875a8]

                      sm:h-[52px]
                      sm:w-[52px]
                    "
                >
                  {icon}
                </div>

                {/* Number */}

                <strong
                  className="
                      mt-1
                      block
                      text-[11px]
                      font-black
                      leading-none
                      text-[#152627]
                    "
                >
                  {number}
                </strong>

                {/* Label */}

                <span
                  className="
                      mt-1
                      block
                      text-[10px]
                      font-medium
                      leading-[1.2]
                      text-[#152627]

                      sm:text-[11px]
                    "
                >
                  {label}
                </span>

                {/* Arrow */}

                {index < steps.length - 1 && (
                  <span
                    className="
                        pointer-events-none
                        absolute
                        right-[-11%]
                        top-[16px]
                        z-20
                        text-[16px]
                        font-bold
                        text-[#149260]
                      "
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            EQUIPPED WITH
        ====================================================== */}

        <div
          className="
            min-w-0
            rounded-[5px]
            border
            border-[#dce5e2]
            bg-white
            px-3
            py-3

            sm:px-4
          "
        >
          <Eyebrow>EQUIPPED WITH</Eyebrow>

          <div
            className="
              mt-2
              grid
              grid-cols-3
              gap-x-2
              gap-y-3

              sm:grid-cols-4

              lg:grid-cols-7
              lg:gap-2
            "
          >
            {equipment.map(([image, label], index) => (
              <div
                key={index}
                className="
                  min-w-0
                  text-center
                "
              >
                {/* Equipment Image */}

                <div
                  className="
                    flex
                    h-[64px]

                    sm:h-[70px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[3px]
                    bg-[#f5f8f7]
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      h-[58px]

                      sm:h-[64px]
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* Equipment Label */}

                <span
                  className="
                    mt-1
                    block
                    text-[10px]
                    font-medium
                    leading-[1.15]
                    text-[#152627]

                    sm:text-[11px]
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
