import { SectionContainer, CircleIcon } from "./ui";

const items = [
  {
    icon: "✓",
    text: (
      <>
        Doorstep Service
        <br />
        in Your Village
      </>
    ),
  },
  {
    icon: "◷",
    text: (
      <>
        Emergency Support
        <br />
        On Road
      </>
    ),
  },
  {
    icon: "♟",
    text: <>Trained Technicians</>,
  },
  {
    icon: "₹",
    text: <>Affordable Service</>,
  },
  {
    icon: "⌁",
    text: (
      <>
        Cleaner &amp; Greener
        <br />
        Tomorrow
      </>
    ),
  },
  {
    icon: "✓",
    text: <>Trusted &amp; Transparent</>,
  },
];

export default function TrustStrip() {
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
          lg:grid-cols-6
        "
      >
        {items.map((item, index) => (
          <div
            key={`${item.icon}-${index}`}
            className={`
              flex
              min-h-[78px]
              items-center
              justify-center
              gap-2
              px-3
              py-3

              border-b
              border-[#dce4e1]

              md:px-4

              ${index !== items.length - 1 ? "lg:border-r" : ""}

              ${index >= 4 ? "md:border-b-0" : ""}

              lg:border-b-0
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
                text-brand-900
              "
            >
              {item.icon}
            </CircleIcon>

            {/* Text */}
            <span
              className="
                text-[9px]
                font-bold
                leading-[1.3]
                text-[#152627]

                sm:text-[9.5px]
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
