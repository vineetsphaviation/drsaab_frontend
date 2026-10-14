import { SectionContainer, CircleIcon } from "../ui/UI";
import {
  Leaf,
  MapPinned,
  PanelsTopLeft,
  UsersRound,
  Wrench,
} from "lucide-react";

const stats = [
  [<Wrench size={18} />, "1", "Mobile Workshop"],
  [<PanelsTopLeft size={18} />, "4+", "Service Categories"],
  [<MapPinned size={18} />, "100+", "Villages (Target per District)"],
  [<UsersRound size={18} />, "Trained", "Local Technicians"],
  [<Leaf size={18} />, "Cleaner", "Environment"],
];

const StatsStrip = () => {
  return (
    <section className="bg-white">
      <SectionContainer
        className="
          grid
          grid-cols-2
          gap-2
          md:grid-cols-3
          lg:grid-cols-5
        "
      >
        {stats.map(([icon, value, label]) => (
          <div
            key={label}
            className={`
              flex
              min-h-[84px]
              items-center
              justify-center
              gap-2
              px-3
              py-2
              rounded-xl
              bg-[#f8fbfa]
              shadow-[0_3px_12px_rgba(3,78,55,0.035)]

              md:px-4
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
                text-brand-90
              "
            >
              {icon}
            </CircleIcon>

            {/* Statistic */}

            <div className="min-w-0">
              <strong
                className="
                  block
                  text-[19px]
                  font-black
                  leading-none
                  text-brand-90
                "
              >
                {value}
              </strong>

              <span
                className="
                  mt-1
                  block
                  text-[11px]
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
};

export default StatsStrip;