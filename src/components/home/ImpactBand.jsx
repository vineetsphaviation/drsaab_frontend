import { SectionContainer } from "../ui/UI";

const points = [
  ["⌁", "Local Employment"],
  ["✓", "Reduced Downtime"],
  ["🛠", "Supports EV Adoption"],
  ["✓", "Builds Rural Ecosystem"],
];

export default function ImpactBand() {
  return (
    <section className="bg-white">
      <SectionContainer
        className="
          grid
          grid-cols-1
          overflow-hidden
          lg:grid-cols-[1.35fr_2fr]
        "
      >
        {/* Green heading block */}

        <div
          className="
            flex
            min-h-[51px]
            items-center
            bg-brand-900
            px-5
            text-white
          "
        >
          <h2
            className="
              text-[15px]
              font-black
              leading-tight
              sm:text-[16px]
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
            border
            border-[#e2e8e5]
            bg-white
            md:grid-cols-4
          "
        >
          {points.map(([icon, label]) => (
            <div
              key={label}
              className="
                flex
                min-h-[51px]
                items-center
                justify-center
                gap-2
                border-r
                border-[#e2e8e5]
                px-2
                text-center
                text-[8px]
                text-ink
                last:border-r-0
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
                  text-[14px]
                  text-brand-700
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
