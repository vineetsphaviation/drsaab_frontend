import { SectionContainer, CircleIcon } from "../ui/UI";

const stats = [
  ["▣", "1", "Mobile Workshop"],
  ["◷", "4+", "Service Categories"],
  ["⌖", "100+", "Villages (Target per District)"],
  ["♟", "Trained", "Local Technicians"],
  ["⌁", "Cleaner", "Environment"],
];

export default function StatsStrip() {
  return (
    <section
      className="
        border-y
        border-[#dce4e1]
        bg-white
      "
    >
      <SectionContainer
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
        "
      >
        {stats.map(([icon, value, label], index) => (
          <div
            key={label}
            className={`
              flex
              min-h-[74px]
              items-center
              justify-center
              gap-2
              px-3
              py-2

              border-b
              border-[#dce4e1]

              md:px-4

              lg:border-b-0
              ${index !== stats.length - 1 ? "lg:border-r" : ""}
            `}
          >
            {/* Icon */}

            <CircleIcon
              className="
                h-[38px]
                w-[38px]
                shrink-0
                bg-[#e8f5ef]
                text-[17px]
                font-black
                text-brand-900
              "
            >
              {icon}
            </CircleIcon>

            {/* Statistic */}

            <div className="min-w-0">
              <strong
                className="
                  block
                  text-[16px]
                  font-black
                  leading-none
                  text-brand-900
                "
              >
                {value}
              </strong>

              <span
                className="
                  mt-1
                  block
                  text-[8px]
                  leading-[1.25]
                  text-[#687675]
                "
              >
                {label}
              </span>
            </div>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
}
