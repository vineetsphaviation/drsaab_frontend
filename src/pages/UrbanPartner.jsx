import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Cpu,
  FileText,
  Gauge,
  Headphones,
  MapPin,
  Navigation,
  Package,
  Route,
  Settings2,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  Users,
  Wrench,
  Zap,
  CircleDot,
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

import urbanCityLandscape from "../assets/images/urban_city_landscape.png";
import PanchayatModalForm from "../components/forms/PanchayatModalForm";
import { useCreatePartnerApplicationMutation } from "../features/partnerApplications/partnerApplicationApi";

const OPERATING_FORMATS = [
  {
    number: "01",
    title: "Mobile Service-on-Wheels",
    description:
      "Doorstep EV and energy service across a defined urban territory.",
    icon: <Truck size={21} />,
    tag: "DOORSTEP",
  },
  {
    number: "02",
    title: "Micro Service Centre",
    description:
      "A compact technical service location for customers in the surrounding area.",
    icon: <Building2 size={21} />,
    tag: "LOCAL HUB",
  },
  {
    number: "03",
    title: "Upgraded Existing Workshop",
    description:
      "Transform an existing mechanic or workshop into a future-ready EV service point.",
    icon: <Wrench size={21} />,
    tag: "UPGRADE",
  },
  {
    number: "04",
    title: "Battery Diagnostic Point",
    description:
      "Battery testing, health assessment and coordination for EV customers.",
    icon: <BatteryCharging size={21} />,
    tag: "DIAGNOSTICS",
  },
  {
    number: "05",
    title: "Fleet Support Point",
    description:
      "Dedicated technical support for commercial EV and mobility operators.",
    icon: <BriefcaseBusiness size={21} />,
    tag: "FLEETS",
  },
  {
    number: "06",
    title: "Roadside Assistance Unit",
    description:
      "Fast breakdown response for eligible EV and energy-related service needs.",
    icon: <Navigation size={21} />,
    tag: "RESPONSE",
  },
];

const PARTNER_PROFILES = [
  {
    title: "Existing Workshop Owners",
    description:
      "Upgrade your existing workshop with EV-focused technical capabilities.",
    icon: <Store size={21} />,
  },
  {
    title: "Urban Mechanics",
    description:
      "Build future-ready skills and become part of a structured service network.",
    icon: <Wrench size={21} />,
  },
  {
    title: "EV Technicians",
    description:
      "Convert technical expertise into an organised local service business.",
    icon: <Settings2 size={21} />,
  },
  {
    title: "Battery Dealers",
    description:
      "Extend your business with diagnostics, support and service coordination.",
    icon: <BatteryCharging size={21} />,
  },
  {
    title: "Fleet Operators",
    description:
      "Access a structured support network for commercial EV operations.",
    icon: <Truck size={21} />,
  },
  {
    title: "Automobile Diploma Holders",
    description:
      "Build an EV-focused service career with technical and business support.",
    icon: <GraduationCapIcon />,
  },
  {
    title: "Technical Entrepreneurs",
    description:
      "Launch a city-focused service enterprise with a defined operating territory.",
    icon: <Cpu size={21} />,
  },
];

const CUSTOMER_JOURNEY = [
  {
    number: "01",
    title: "Book",
    description:
      "Customer raises a service request through the digital network.",
    icon: <Smartphone size={21} />,
  },
  {
    number: "02",
    title: "Nearest Partner",
    description: "The request is routed toward the appropriate city partner.",
    icon: <MapPin size={21} />,
  },
  {
    number: "03",
    title: "Doorstep Diagnosis",
    description: "Partner reaches the customer and assesses the issue.",
    icon: <Gauge size={21} />,
  },
  {
    number: "04",
    title: "Service",
    description: "Eligible service is completed at the appropriate location.",
    icon: <Wrench size={21} />,
  },
  {
    number: "05",
    title: "Digital Record",
    description:
      "Service details and billing information are digitally recorded.",
    icon: <FileText size={21} />,
  },
  {
    number: "06",
    title: "Follow-up",
    description: "Customer receives follow-up and future maintenance support.",
    icon: <Headphones size={21} />,
  },
];

const BENEFITS = [
  {
    title: "Defined Territory",
    description: "Operate within a clearly defined urban service territory.",
    icon: <MapPin size={20} />,
  },
  {
    title: "Digital Bookings",
    description:
      "Receive service opportunities through the Dr. Saab digital network.",
    icon: <Smartphone size={20} />,
  },
  {
    title: "Technical Training",
    description: "Build capabilities through structured technical training.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    title: "Service Identity",
    description: "Operate with a recognisable Dr. Saab service identity.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Business Support",
    description:
      "Access operational guidance for building your service business.",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    title: "Technical Escalation",
    description:
      "Escalate specialised requirements through the wider technical network.",
    icon: <Route size={20} />,
  },
  {
    title: "Fleet Opportunities",
    description: "Build relationships with commercial EV and fleet customers.",
    icon: <Truck size={20} />,
  },
  {
    title: "Spare-Parts Coordination",
    description:
      "Coordinate genuine and compatible parts for eligible service work.",
    icon: <Package size={20} />,
  },
  {
    title: "Refresher Training",
    description:
      "Continue developing technical capabilities as technology evolves.",
    icon: <Zap size={20} />,
  },
];

function GraduationCapIcon() {
  return (
    <div className="grid h-5 w-5 place-items-center">
      <span className="text-[15px] font-black">▰</span>
    </div>
  );
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}) => {
  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`mt-3 text-3xl font-black tracking-[-1.5px] sm:text-4xl lg:text-[48px] ${
          light ? "text-white" : "text-brand-95"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-4xl text-sm leading-7 sm:text-[15px] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

const ServiceFormatCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-brand-5 transition-colors duration-300 group-hover:bg-brand-10" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <CircleIcon>{item.icon}</CircleIcon>

          <span className="rounded-full bg-brand-5 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.8px] text-brand-70">
            {item.tag}
          </span>
        </div>

        <div className="mt-6 text-[9px] font-black tracking-[1px] text-brand-60/60">
          {item.number}
        </div>

        <h3 className="mt-1 text-base font-black text-brand-95">
          {item.title}
        </h3>

        <p className="mt-2 text-xs leading-6 text-slate-500">
          {item.description}
        </p>

        <div className="mt-5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.8px] text-brand-70 opacity-0 transition-opacity group-hover:opacity-100">
          Explore format
          <ArrowRight size={12} />
        </div>
      </div>
    </div>
  );
};

// URBAN PARTNER HERO DATA
const URBAN_SERVICES = [
  {
    label: "EV",
    icon: Zap,
  },
  {
    label: "Battery",
    icon: BatteryCharging,
  },
  {
    label: "Fleet",
    icon: Truck,
  },
  {
    label: "Roadside",
    icon: Wrench,
  },
];

const SERVICE_POINTS = [
  {
    label: "Point A",
    className: "left-[13%] top-[29%]",
  },
  {
    label: "Point B",
    className: "left-[25%] top-[66%]",
  },
  {
    label: "Point C",
    className: "left-[48%] top-[18%]",
  },
  {
    label: "Point D",
    className: "right-[12%] top-[32%]",
  },
  {
    label: "Point E",
    className: "right-[21%] bottom-[23%]",
  },
  {
    label: "Point F",
    className: "left-[47%] bottom-[15%]",
  },
];

// SERVICE POINT
const ServicePoint = ({ label, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative flex items-center gap-1.5">
        <div className="relative grid h-7 w-7 place-items-center rounded-full border border-brand-10 bg-white text-brand-70 shadow-[0_5px_18px_rgba(7,95,69,0.12)]">
          <CircleDot size={12} />

          <span className="absolute inset-0 animate-ping rounded-full border border-brand-60/20" />
        </div>

        <span className="hidden rounded-md bg-white/90 px-2 py-1 text-[7px] font-black uppercase tracking-[0.5px] text-brand-90 shadow-sm backdrop-blur-md sm:block">
          {label}
        </span>
      </div>
    </div>
  );
};

// URBAN SERVICE HERO
const UrbanPartnerHero = ({ onApply }) => {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-10/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-8 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 xl:grid-cols-[0.86fr_1.14fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-[500px]">
            <Eyebrow>DR. SAAB CITY SERVICE PARTNER</Eyebrow>

            <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-1.8px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              Fast.
              <span className="block text-brand-70">Organised.</span>
              <span className="block">Accessible.</span>
            </h1>

            <p className="mt-5 max-w-[460px] text-[13px] leading-6 text-brand-ink/65 sm:text-[14px] sm:leading-7">
              Build a trusted technical service presence in your city with EV,
              battery, fleet, charging and roadside support delivered through a
              connected urban partner network.
            </p>

            {/* Service pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {URBAN_SERVICES.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 rounded-full border border-brand-10 bg-white px-3 py-1.5 shadow-sm"
                >
                  <Icon size={11} className="text-brand-70" />

                  <span className="text-[8px] font-black uppercase tracking-[0.5px] text-brand-90">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Button type="button" onClick={onApply}>
                Apply for Your City
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="#urban-services" variant="outline">
                Explore Services
              </Button>
            </div>

            {/* Urban partner indicators */}
            <div className="mt-7 grid max-w-[470px] grid-cols-3 border-t border-brand-10 pt-5">
              <div className="border-r border-brand-10 pr-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  CITY
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Focused
                </div>
              </div>

              <div className="border-r border-brand-10 px-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  24/7
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Requests
                </div>
              </div>

              <div className="pl-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  360°
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Service
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — URBAN NETWORK */}
          <div className="relative min-h-[470px] sm:min-h-[520px]">
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-brand-10 bg-[#e8f2ed] shadow-[0_25px_70px_rgba(7,95,69,0.10)]">
              <img
                src={urbanCityLandscape}
                alt="Urban city landscape"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Green overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-5/65 via-brand-5/45 to-brand-10/60" />

              {/* HEADER CARD */}
              <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between rounded-xl border border-white/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md sm:left-5 sm:right-5 sm:top-5">
                <div>
                  <div className="text-[7px] font-black uppercase tracking-[1px] text-brand-60">
                    CITY SERVICE NETWORK
                  </div>

                  <div className="mt-1 text-[12px] font-black text-brand-95 sm:text-[14px]">
                    Connected Urban Coverage
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-brand-5 px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-60" />

                  <span className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-70">
                    Network Live
                  </span>
                </div>
              </div>

              {/* NETWORK ROUTES */}
              <svg
                className="absolute inset-0 z-[2] h-full w-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="none"
              >
                {/* Main network routes */}
                <path
                  d="M400 315 L120 175"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 315 L190 430"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 315 L390 105"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 315 L665 185"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 315 L635 430"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 315 L390 500"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                {/* Secondary network */}
                <path
                  d="M120 175 Q280 75 390 105"
                  stroke="#17905f"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  fill="none"
                  opacity="0.3"
                />

                <path
                  d="M190 430 Q400 520 635 430"
                  stroke="#17905f"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  fill="none"
                  opacity="0.3"
                />
              </svg>

              {/* SERVICE POINTS */}
              <div className="absolute inset-0 z-10">
                {SERVICE_POINTS.map((point) => (
                  <ServicePoint
                    key={point.label}
                    label={point.label}
                    className={point.className}
                  />
                ))}
              </div>

              {/* CENTRAL PARTNER HUB */}
              <div className="absolute left-1/2 top-[53%] z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -inset-10 animate-pulse rounded-full border border-brand-60/10" />

                <div className="absolute -inset-5 rounded-full border border-brand-60/20" />

                <div className="relative grid h-[90px] w-[90px] place-items-center rounded-full border-[6px] border-white bg-brand-90 text-white shadow-[0_15px_40px_rgba(3,78,55,0.25)]">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-70">
                    <Truck size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-95 px-3 py-2 text-center shadow-lg">
                  <div className="text-[7px] font-bold uppercase tracking-[1px] text-brand-lime">
                    CITY PARTNER
                  </div>

                  <div className="mt-0.5 text-[10px] font-black text-white">
                    Dr. Saab Service Hub
                  </div>
                </div>
              </div>

              {/* SERVICE MARKERS */}
              <div className="absolute left-[10%] top-[47%] z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2 py-1.5 shadow-[0_6px_18px_rgba(7,95,69,0.10)] backdrop-blur-md">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Zap size={10} />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.5px] text-brand-90">
                  EV
                </span>
              </div>

              <div className="absolute right-[8%] top-[46%] z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2 py-1.5 shadow-[0_6px_18px_rgba(7,95,69,0.10)] backdrop-blur-md">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <BatteryCharging size={10} />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.5px] text-brand-90">
                  Battery
                </span>
              </div>

              <div className="absolute bottom-[22%] left-[27%] z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2 py-1.5 shadow-[0_6px_18px_rgba(7,95,69,0.10)] backdrop-blur-md">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Users size={10} />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.5px] text-brand-90">
                  Fleet
                </span>
              </div>

              <div className="absolute bottom-[21%] right-[20%] z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2 py-1.5 shadow-[0_6px_18px_rgba(7,95,69,0.10)] backdrop-blur-md">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Wrench size={10} />
                </span>

                <span className="text-[7px] font-black uppercase tracking-[0.5px] text-brand-90">
                  Roadside
                </span>
              </div>

              {/* BOTTOM NETWORK STATUS */}
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/70 bg-white/90 p-3.5 shadow-[0_12px_30px_rgba(7,95,69,0.10)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                <div className="grid grid-cols-3 divide-x divide-brand-10">
                  <div className="px-2 text-center first:pl-0">
                    <div className="text-[16px] font-black text-brand-95">
                      08
                    </div>

                    <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.5px] text-brand-ink/45">
                      Service Points
                    </div>
                  </div>

                  <div className="px-2 text-center">
                    <div className="text-[16px] font-black text-brand-95">
                      24/7
                    </div>

                    <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.5px] text-brand-ink/45">
                      Requests
                    </div>
                  </div>

                  <div className="px-2 text-center last:pr-0">
                    <div className="text-[16px] font-black text-brand-95">
                      360°
                    </div>

                    <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.5px] text-brand-ink/45">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD — RESPONSE */}
            <div className="absolute -left-4 top-[145px] z-30 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Clock3 size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    RESPONSE
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Nearby Partner
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD — VERIFIED */}
            <div className="absolute -right-4 bottom-[135px] z-30 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <ShieldCheck size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    SERVICE
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Verified Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

const UrbanPartner = () => {
  const [activeJourney, setActiveJourney] = useState(0);
  const [isUrbanPartnerFormOpen, setIsUrbanPartnerFormOpen] = useState(false);
  const urbanPartnerFormRef = useRef(null);
  const [
    createPartnerApplication,
    { isLoading, isSuccess, error, reset: resetPartnerApplication },
  ] = useCreatePartnerApplicationMutation();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveJourney((current) => (current + 1) % CUSTOMER_JOURNEY.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isUrbanPartnerFormOpen) {
      urbanPartnerFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isUrbanPartnerFormOpen]);

  const openUrbanPartnerForm = () => {
    resetPartnerApplication();

    if (isUrbanPartnerFormOpen) {
      urbanPartnerFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setIsUrbanPartnerFormOpen(true);
  };

  const handleUrbanPartnerApplicationSubmit = async (payload) => {
    try {
      await createPartnerApplication(payload).unwrap();
    } catch (err) {
      console.error("Urban partner application submission failed:", err);
      throw err;
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <UrbanPartnerHero onApply={openUrbanPartnerForm} />

      {/* WHAT IS URBAN PARTNER */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <SectionHeading
            eyebrow="WHAT IS AN URBAN PARTNER?"
            title="One city territory. Multiple ways to serve."
            description="A Dr. Saab City Service Partner operates within a defined urban territory and can adapt the operating format to the local market, technical capability and customer demand."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATING_FORMATS.map((item) => (
              <ServiceFormatCard key={item.number} item={item} />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* URBAN SERVICES */}
      <section
        id="urban-services"
        className="bg-brand-5 py-8 sm:py-12 lg:py-14"
      >
        <SectionContainer>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="URBAN SERVICES"
              title="Built for fast city response."
              description="A focused service portfolio for EV owners, commercial operators, battery users and urban mobility ecosystems."
            />

            <div className="hidden items-center gap-2 rounded-full border border-brand-10 bg-white px-4 py-2.5 lg:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-60" />
              <span className="text-[9px] font-black uppercase tracking-[0.9px] text-brand-70">
                Service Network Ready
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {URBAN_SERVICES.map((service, index) => (
              <div
                key={service.label}
                className="group rounded-2xl border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5"
              >
                <div className="flex items-center justify-between">
                  <CircleIcon>
                    <service.icon size={19} />
                  </CircleIcon>

                  <span className="text-[8px] font-black uppercase tracking-[1px] text-brand-60/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between gap-2">
                  <h3 className="text-base font-black text-brand-95">
                    {service.label}
                  </h3>

                  <ArrowRight
                    size={14}
                    className="text-brand-60 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="bg-brand-95 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <SectionHeading
            light
            eyebrow="URBAN CUSTOMER JOURNEY"
            title="Fast from booking to follow-up."
            description="The customer journey connects digital booking with the nearest suitable partner and a structured service record."
          />

          {/* Journey */}
          <div className="mt-12 overflow-x-auto pb-4">
            <div className="flex min-w-[850px] items-start">
              {CUSTOMER_JOURNEY.map((step, index) => {
                const active = index === activeJourney;

                return (
                  <div key={step.number} className="contents">
                    <button
                      type="button"
                      onClick={() => setActiveJourney(index)}
                      className="group flex w-[140px] shrink-0 flex-col items-center text-center"
                    >
                      <div
                        className={`grid h-16 w-16 place-items-center rounded-2xl border transition-all duration-300 ${
                          active
                            ? "border-brand-lime bg-brand-lime text-brand-95 shadow-lg shadow-brand-lime/20"
                            : "border-white/10 bg-white/[0.04] text-white/50 group-hover:border-brand-lime/30 group-hover:text-brand-lime"
                        }`}
                      >
                        {step.icon}
                      </div>

                      <div
                        className={`mt-4 text-[9px] font-black uppercase tracking-[0.9px] ${
                          active ? "text-brand-lime" : "text-white/35"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div
                        className={`mt-1 text-xs font-black ${
                          active ? "text-white" : "text-white/55"
                        }`}
                      >
                        {step.title}
                      </div>
                    </button>

                    {index < CUSTOMER_JOURNEY.length - 1 && (
                      <div className="mt-8 h-px w-[55px] shrink-0 bg-white/10">
                        <div
                          className={`h-full transition-all duration-500 ${
                            index < activeJourney
                              ? "w-full bg-brand-lime"
                              : "w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active step */}
          <div className="mt-8 grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-lime text-brand-95">
              {CUSTOMER_JOURNEY[activeJourney].icon}
            </div>

            <div>
              <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-lime">
                Step {CUSTOMER_JOURNEY[activeJourney].number}
              </div>

              <h3 className="mt-1 text-xl font-black text-white">
                {CUSTOMER_JOURNEY[activeJourney].title}
              </h3>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-white/50">
                {CUSTOMER_JOURNEY[activeJourney].description}
              </p>
            </div>

            <div className="hidden text-right lg:block">
              <div className="text-3xl font-black text-white/10">
                {String(activeJourney + 1).padStart(2, "0")}
              </div>
              <div className="text-[8px] font-black uppercase tracking-[1px] text-white/25">
                of {CUSTOMER_JOURNEY.length}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* WHO IS IT FOR */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading
                eyebrow="WHO IS IT FOR?"
                title="Built around people who already understand the road."
                description="The Urban Partner model can support existing technical businesses, EV specialists and entrepreneurs looking to participate in the growing electric mobility ecosystem."
              />

              <div className="mt-8 rounded-[25px] bg-brand-95 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lime text-brand-95">
                    <Users size={20} />
                  </div>

                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-lime">
                      Partner Network
                    </div>
                    <div className="mt-1 text-sm font-black">
                      City-ready talent
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[10px] text-white/45">
                  <span className="h-2 w-2 rounded-full bg-brand-lime" />
                  Workshop + Technician + Fleet + Battery
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {PARTNER_PROFILES.map((profile, index) => (
                <div
                  key={profile.title}
                  className="group rounded-2xl border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5"
                >
                  <div className="flex items-center justify-between">
                    <CircleIcon>{profile.icon}</CircleIcon>

                    <span className="text-[9px] font-black text-brand-60/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-sm font-black text-brand-95">
                    {profile.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {profile.description}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-dashed border-brand-60/30 bg-brand-5 p-6 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-lime text-brand-95">
                    <Check size={18} />
                  </div>

                  <div>
                    <div className="text-sm font-black text-brand-95">
                      Technical capability matters.
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      The model is designed for people who can build or develop
                      the technical capability required for responsible urban
                      service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* BENEFITS */}
      <section className="bg-brand-5 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <SectionHeading
            eyebrow="URBAN PARTNER BENEFITS"
            title="More than a service point."
            description="The Urban Partner becomes part of a structured ecosystem combining territory, digital demand, technical support and business opportunities."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-brand-10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <CircleIcon>{benefit.icon}</CircleIcon>

                  <span className="text-[9px] font-black text-brand-60/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-black text-brand-95">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* CTA */}
      <section id="apply" className="bg-brand-90 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-10 text-center sm:px-8 sm:py-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                <Truck size={24} />
              </div>

              <Eyebrow light className="mt-6">
                CITY SERVICE PARTNER
              </Eyebrow>

              <h2 className="mt-4 text-3xl font-black tracking-[-1.5px] text-white sm:text-5xl">
                Become a
                <span className="text-brand-lime"> City Service Partner.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-[15px]">
                Build a structured EV and energy service presence in your city
                with a defined territory, digital bookings and technical
                ecosystem support.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  type="button"
                  onClick={openUrbanPartnerForm}
                  className="px-7 py-3"
                >
                  Apply for Your City
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="/how-it-works"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  See How It Works
                  <ChevronRight className="ml-2" size={15} />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[9px] font-black uppercase tracking-[0.8px] text-white/30">
                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  Defined Territory
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  Digital Demand
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  Technical Network
                </span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {isUrbanPartnerFormOpen && (
        <div ref={urbanPartnerFormRef} className="mt-8 scroll-mt-24">
          <PanchayatModalForm
            onClose={() => {
              setIsUrbanPartnerFormOpen(false);
              resetPartnerApplication();
            }}
            franchiseType="URBAN_CITY"
            onSubmit={handleUrbanPartnerApplicationSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            apiError={error}
          />
        </div>
      )}
    </div>
  );
};

export default UrbanPartner;
