import { SectionContainer } from "../ui/UI";
import { BriefcaseBusiness, Gauge, Leaf, Zap } from "lucide-react";

const points = [
  [<BriefcaseBusiness size={15} />, "Local Employment"],
  [<Gauge size={15} />, "Reduced Downtime"],
  [<Zap size={15} />, "Supports EV Adoption"],
  [<Leaf size={15} />, "Builds Rural Ecosystem"],
];

export default function ImpactBand() {
  return (
    <section className="bg-white mb-2">
      <SectionContainer
        className="
          grid
          grid-cols-1
          gap-2
          lg:grid-cols-[1.35fr_2fr]
        "
      >
        {/* Green heading block */}

        <div
          className="
            flex
            min-h-[51px]
            items-center
            bg-brand-90
            px-5
            text-white
          "
        >
          <h2
            className="
            text-[18px]
              font-black
              leading-tight
            sm:text-[20px]
            "
          >
            A Cleaner, Brighter &amp; More Connected Rural India
          </h2>
        </div>

        {/* Impact points */}

        <div
          className="
            grid
            grid-cols-2
            gap-2
            bg-transparent
            md:grid-cols-4
          "
        >
          {points.map(([icon, label]) => (
            <div
              key={label}
              className="
                flex
                min-h-[64px]
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#f8fbfa]
                shadow-[0_3px_12px_rgba(3,78,55,0.035)]
                px-2
                text-center
                text-[13px]
                text-ink
              "
            >
              <span
                className="
                  grid
                  h-7
                  w-7
                  shrink-0
                  place-items-center
                  rounded-full
                  bg-[#edf7f2]
                  text-[15px]
                  text-brand-70
                "
              >
                {icon}
              </span>

              <span>{label}</span>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
