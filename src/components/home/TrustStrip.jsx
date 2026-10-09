import { SectionContainer, CircleIcon } from "../ui/UI";
import { BadgeCheck, CircleDollarSign, Headphones, Leaf, ShieldCheck, UsersRound } from "lucide-react";

const items = [
  {
    icon: <BadgeCheck size={18} />,
    text: (
      <>
        Doorstep Service
        <br />
        in Your Village
      </>
    ),
  },
  {
    icon: <Headphones size={18} />,
    text: (
      <>
        Emergency Support
        <br />
        On Road
      </>
    ),
  },
  {
    icon: <UsersRound size={18} />,
    text: <>Trained Technicians</>,
  },
  {
    icon: <CircleDollarSign size={18} />,
    text: <>Affordable Service</>,
  },
  {
    icon: <Leaf size={18} />,
    text: (
      <>
        Cleaner &amp; Greener
        <br />
        Tomorrow
      </>
    ),
  },
  {
    icon: <ShieldCheck size={18} />,
    text: <>Trusted &amp; Transparent</>,
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white">
      <SectionContainer
        className="
          grid
          grid-cols-2
          gap-2
          md:grid-cols-3
          lg:grid-cols-6
        "
      >
        {items.map((item, index) => (
          <div
            key={`${item.icon}-${index}`}
            className={`
              flex
              min-h-[88px]
              items-center
              justify-center
              gap-2
              px-3
              py-3
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
                bg-[#e5f4ed]
                text-[18px]
                font-black
                text-brand-90
              "
            >
              {item.icon}
            </CircleIcon>

            {/* Text */}
            <span
              className="
                text-[11px]
                font-bold
                leading-[1.3]
                text-[#152627]

                sm:text-[12px]
              "
            >
              {item.text}
            </span>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
}
