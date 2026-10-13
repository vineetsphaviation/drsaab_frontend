import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Bot,
  Check,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
  Cpu,
  Gauge,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  SolarPanel,
  Sparkles,
  Truck,
  Wrench,
  X,
  Drone,
  FileCheck2,
  Sun,
  Users,
  Zap,
} from "lucide-react";

import {
  Button,
  Eyebrow,
  SectionContainer,
  CircleIcon,
} from "../components/ui/UI";

import heroImageServices from "../assets/images/our_services_image.png";
import ServiceRequestForm from "../components/forms/ServiceRequestForm";
import { useCreateServiceRequestMutation } from "../features/serviceRequests/serviceRequestApi";

const SERVICES = [
  {
    id: "ev",
    number: "01",
    category: "Electric Vehicle Services",
    requestCategory: "EV",
    title: "Keep Your EV Moving",
    description:
      "Support for electric scooters, motorcycles, e-rickshaws, cargo vehicles and selected fleet vehicles.",
    icon: Bike,
    services: [
      "Basic fault diagnosis",
      "Battery voltage testing",
      "Battery health assessment",
      "Charging-port inspection",
      "Connector and wiring repair",
      "Fuse and relay replacement",
      "Brake and minor mechanical service",
      "Tyre inflation",
      "Puncture assistance",
      "Preventive maintenance",
      "Emergency charging support",
      "Battery pickup and delivery",
      "Spare-parts facilitation",
      "Major repair referral",
    ],
    cta: "Request EV Service",
  },

  {
    id: "rickshaw",
    number: "02",
    category: "E-Rickshaw & Electric Cargo Vehicles",
    requestCategory: "EV",
    title: "Gaadi Band Toh Roz Ki Kamai Band.",
    description:
      "Roadside and preventive support for commercial electric vehicles that keep local businesses moving.",
    icon: Truck,
    services: [
      "Roadside inspection",
      "Battery testing",
      "Charging-system inspection",
      "Electrical diagnosis",
      "Connector repair",
      "Wiring support",
      "Minor mechanical servicing",
      "Brake inspection",
      "Emergency top-up",
      "Preventive maintenance",
      "Fleet coordination",
      "Spare-parts support",
    ],
    cta: "Request E-Rickshaw Service",
  },

  {
    id: "battery",
    number: "03",
    category: "Battery & Charging Support",
    requestCategory: "BATTERY",
    title: "Battery Ki Health. Vehicle Ki Reliability.",
    description:
      "Battery and charging support designed to improve reliability and reduce unexpected downtime.",
    icon: BatteryCharging,
    services: [
      "Battery health testing",
      "Voltage assessment",
      "Charging-port inspection",
      "Connector support",
      "Emergency energy top-up",
      "Battery pickup",
      "Battery delivery",
      "Battery replacement coordination",
      "Compatible battery-swapping support",
    ],
    cta: "Request Battery Support",
  },

  {
    id: "drone",
    number: "04",
    category: "Agricultural Drone Services",
    requestCategory: "DRONE",
    title: "Support When Your Farm Can't Wait.",
    description:
      "Field-level support for agricultural drone operators, including battery, connector and minor repair assistance.",
    icon: Bot,
    services: [
      "Drone battery charging",
      "Battery testing",
      "Propeller replacement",
      "Connector support",
      "Minor field-level repairs",
      "Drone battery support",
      "Authorised repair coordination",
    ],
    note: "Major or specialised drone repairs may require referral to an authorised facility.",
    cta: "Request Drone Service",
  },

  {
    id: "solar",
    number: "05",
    category: "Solar & Inverter Services",
    requestCategory: "SOLAR_INVERTER",
    title: "Reliable Energy Starts With Reliable Support.",
    description:
      "Support for solar, inverter and small energy-storage systems serving homes, businesses and rural communities.",
    icon: SolarPanel,
    services: [
      "Solar-system inspection",
      "Inverter support",
      "Battery support",
      "Charge-controller inspection",
      "Connector support",
      "Small energy-storage systems",
      "Preventive maintenance",
    ],
    cta: "Request Energy Service",
  },

  {
    id: "roadside",
    number: "06",
    category: "Roadside Assistance",
    requestCategory: "ROADSIDE_ASSISTANCE",
    title: "When Your Vehicle Stops, Dr. Saab Comes Closer.",
    description:
      "First-level assistance for breakdowns, battery issues and minor roadside problems.",
    icon: MapPin,
    services: [
      "Breakdown registration",
      "On-site diagnosis",
      "Emergency top-up",
      "Minor roadside repair",
      "Battery assistance",
      "Pickup/referral coordination",
    ],
    cta: "Get Roadside Assistance",
  },

  {
    id: "fleet",
    number: "07",
    category: "Fleet Maintenance",
    requestCategory: "FLEET",
    title: "Keep Your Fleet Ready.",
    description:
      "Structured maintenance and technical support for businesses operating multiple electric vehicles.",
    icon: ClipboardCheck,
    suitableFor: [
      "Delivery fleets",
      "Commercial EVs",
      "E-rickshaw operators",
      "Cargo vehicles",
      "Fleet businesses",
    ],
    services: [
      "Scheduled diagnostics",
      "Preventive maintenance",
      "Breakdown support",
      "Battery health checks",
      "Service coordination",
      "Digital service records",
    ],
    cta: "Discuss Fleet Support",
  },

  {
    id: "spares",
    number: "08",
    category: "Genuine & Compatible Spare Parts",
    requestCategory: "SPARE_PARTS",
    title: "The Right Parts. The Right Support.",
    description:
      "Common service components and spare-parts coordination to help technicians complete repairs efficiently.",
    icon: PackageCheck,
    services: [
      "Common consumables",
      "Compatible components",
      "Battery-related components",
      "Service parts",
      "Spare-parts coordination",
    ],
    cta: "Request Spare Parts",
  },
];

const QUICK_SERVICES = [
  {
    icon: Bike,
    title: "EV Services",
    text: "Diagnostics, maintenance & roadside support",
  },
  {
    icon: Bot,
    title: "Drone Services",
    text: "Battery, repair & field assistance",
  },
  {
    icon: SolarPanel,
    title: "Solar & Inverter",
    text: "Inspection, repair & maintenance",
  },
  {
    icon: BatteryCharging,
    title: "Battery Support",
    text: "Testing, swapping & logistics",
  },
];

const STATS = [
  {
    icon: Truck,
    value: "1",
    label: "Mobile Workshop",
  },
  {
    icon: Wrench,
    value: "4+",
    label: "Service Categories",
  },
  {
    icon: MapPin,
    value: "100+",
    label: "Villages Targeted",
  },
  {
    icon: ShieldCheck,
    value: "Trained",
    label: "Local Technicians",
  },
  {
    icon: Leaf,
    value: "Cleaner",
    label: "Environment",
  },
];

const SERVICE_JOURNEY = [
  {
    number: "01",
    icon: Phone,
    title: "Call / Book",
    description: "Raise a service request.",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Reach You",
    description: "Our technician comes closer.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Diagnose",
    description: "The problem is assessed.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Service",
    description: "Minor repair or technical support.",
  },
  {
    number: "05",
    icon: Cpu,
    title: "Digital Record",
    description: "Service details are recorded.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Follow-up",
    description: "Support after service.",
  },
];

function ServicePromise({ text }) {
  return (
    <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.7px] text-brand-ink/45">
      <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-10 text-brand-70">
        <Check size={9} strokeWidth={3} />
      </span>

      {text}
    </div>
  );
}

function ImageTech({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.06] px-3 py-2">
      <span className="text-brand-lime">{icon}</span>

      <span className="text-[8px] font-black uppercase tracking-[0.5px] text-white/60">
        {label}
      </span>
    </div>
  );
}

const OurServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeService, setActiveService] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceCategory, setBookingServiceCategory] = useState("");
  const bookingFormRef = useRef(null);

  const [
    createServiceRequest,
    { isLoading, isSuccess, error, reset: resetServiceRequest },
  ] = useCreateServiceRequestMutation();

  useEffect(() => {
    if (isBookingOpen) {
      bookingFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isBookingOpen]);

  useEffect(() => {
    if (!location.state?.openBookingForm) return;

    if (isBookingOpen) {
      bookingFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setIsBookingOpen(true);
    }

    navigate(`${location.pathname}${location.search}${location.hash}`, {
      replace: true,
      state: null,
    });
  }, [
    isBookingOpen,
    location.hash,
    location.pathname,
    location.search,
    location.state,
    navigate,
  ]);

  const categories = useMemo(
    () => ["All", ...SERVICES.map((service) => service.category)],
    [],
  );

  const visibleServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  const openBookingForm = (serviceCategory = "") => {
    resetServiceRequest();
    setBookingServiceCategory(serviceCategory);

    if (isBookingOpen) {
      bookingFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setIsBookingOpen(true);
  };

  const handleServiceRequestSubmit = async (payload) => {
    try {
      await createServiceRequest(payload).unwrap();
    } catch (err) {
      console.error("Service request submission failed:", err);

      // Preserve the rejected request so the form can display
      // the error from RTK Query.
      throw err;
    }
  };

  return (
    <>
      {/* =========================================================
    HERO — OUR SERVICES
========================================================= */}
      <section className="relative overflow-hidden bg-brand-5">
        <SectionContainer>
          <div className="grid min-h-[600px] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
            {/* =====================================================
          LEFT CONTENT
      ====================================================== */}
            <div className="relative z-10 py-8 lg:py-12">
              <Eyebrow>OUR SERVICES</Eyebrow>

              <h1 className="mt-5 max-w-[620px] text-4xl font-black leading-[1.02] tracking-[-1.8px] text-brand-95 sm:text-5xl lg:text-[60px]">
                Technical Support.
                <span className="block text-brand-70">Where You Need It.</span>
              </h1>

              <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-brand-ink/65 sm:text-[17px]">
                Access organised technical support for electric vehicles,
                batteries, agricultural drones, solar systems and related
                technologies through the Dr. Saab service network.
              </p>

              {/* Technology tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Electric Vehicles",
                  "Batteries",
                  "Agricultural Drones",
                  "Solar Systems",
                ].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.7px] ${
                      index === 0
                        ? "border-brand-70 bg-brand-70 text-white"
                        : "border-brand-90/10 bg-white text-brand-95"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Button type="button" onClick={openBookingForm}>
                  Book a Service
                  <ArrowRight size={14} className="ml-2" />
                </Button>

                <Button href="#service-categories" variant="outline">
                  Explore Services
                </Button>
              </div>

              {/* Service promises */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                <ServicePromise text="Technical Support" />
                <ServicePromise text="Doorstep Service" />
                <ServicePromise text="Digital Records" />
              </div>
            </div>

            {/* =====================================================
          RIGHT IMAGE
      ====================================================== */}
            <div className="relative">
              {/* Main image frame */}
              <div className="relative overflow-hidden rounded-[26px] bg-brand-90 shadow-[0_25px_70px_rgba(3,78,55,0.16)]">
                {/* Dummy image */}
                <img
                  src={heroImageServices}
                  alt="Technician working on an electric vehicle"
                  className="h-[390px] w-full object-cover sm:h-[470px] lg:h-[530px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-95/70 via-transparent to-transparent" />

                {/* Top status */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-brand-95/70 px-3 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-lime" />

                  <span className="text-[9px] font-black uppercase tracking-[1px] text-white">
                    Service Network
                  </span>
                </div>

                {/* Bottom image information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-[16px] border border-white/15 bg-brand-95/80 p-5 backdrop-blur-md">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-lime">
                          DR. SAAB
                        </div>

                        <div className="mt-1 text-[18px] font-black text-white">
                          Technical Service
                        </div>

                        <p className="mt-1.5 max-w-[390px] text-[10px] leading-5 text-white/55">
                          Diagnostics, maintenance and technical support for
                          emerging mobility and energy technologies.
                        </p>
                      </div>

                      <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-lime text-brand-95 sm:grid">
                        <Wrench size={19} />
                      </div>
                    </div>

                    {/* Technology indicators */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <ImageTech label="EV" icon={<Zap size={13} />} />
                      <ImageTech
                        label="Battery"
                        icon={<BatteryCharging size={13} />}
                      />
                      <ImageTech label="Drone" icon={<Drone size={13} />} />
                      <ImageTech label="Solar" icon={<Sun size={13} />} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating service card */}
              <div className="absolute -bottom-5 -left-3 hidden w-[205px] rounded-[14px] border border-brand-900/10 bg-white p-4 shadow-[0_15px_40px_rgba(3,78,55,.12)] sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-70">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[.7px] text-brand-95">
                      Trained Support
                    </div>

                    <div className="mt-1 text-[9px] leading-4 text-brand-ink/45">
                      Service routed through the Dr. Saab network.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating location card */}
              <div className="absolute -right-3 top-8 hidden rounded-[12px] border border-brand-900/10 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(3,78,55,.10)] sm:block lg:-right-6">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand-70" />

                  <span className="text-[9px] font-black uppercase tracking-[.7px] text-brand-95">
                    Rural + Urban
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          QUICK SERVICES
      ========================================================== */}
      <section className="border-b border-brand-10 bg-white">
        <SectionContainer className="grid grid-cols-2 divide-x divide-y divide-brand-10 md:grid-cols-4 md:divide-y-0">
          {QUICK_SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex items-center gap-3 px-3 py-5 transition hover:bg-brand-5 sm:px-5"
            >
              <CircleIcon className="transition group-hover:bg-brand-70 group-hover:text-white">
                <Icon size={20} />
              </CircleIcon>

              <div>
                <h3 className="text-[12px] font-black text-brand-ink">
                  {title}
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </SectionContainer>
      </section>

      {/* =========================================================
          INTRO / WHY DR SAAB
      ========================================================== */}
      <section className="bg-brand-5/50 py-16 lg:py-20">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <Eyebrow>Why Dr. Saab</Eyebrow>

              <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-tight text-brand-95 sm:text-4xl">
                Technical support that comes closer to your community.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600">
                Dr. Saab brings practical post-sales support closer to the
                people, vehicles and energy systems that depend on them every
                day.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <CircleIcon className="h-12 w-12 bg-brand-70 text-white">
                  <MapPin size={21} />
                </CircleIcon>

                <div>
                  <p className="text-sm font-black text-brand-ink">
                    Local-first service network
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Doorstep support through trained technicians
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Gauge,
                  title: "Diagnostics",
                  description:
                    "Identify problems early and reduce unnecessary downtime.",
                },
                {
                  icon: Wrench,
                  title: "Minor Repairs",
                  description:
                    "Practical first-level repairs and technical support.",
                },
                {
                  icon: BatteryCharging,
                  title: "Energy Support",
                  description:
                    "Battery, charging, solar and inverter assistance.",
                },
                {
                  icon: ShieldCheck,
                  title: "Technical Coordination",
                  description:
                    "Referral and coordination when specialist support is required.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-brand-10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CircleIcon>
                    <Icon size={20} />
                  </CircleIcon>

                  <h3 className="mt-4 text-sm font-black text-brand-95">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          SERVICE CATEGORIES
      ========================================================== */}
      <section
        id="service-categories"
        className="scroll-mt-24 bg-white py-16 lg:py-24"
      >
        <SectionContainer>
          {/* Section heading */}
          <div className="max-w-3xl">
            <Eyebrow>Service Categories</Eyebrow>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-brand-95 sm:text-4xl lg:text-5xl">
              Support for the mobility and energy systems your community depends
              on.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
              Choose a service category to explore the support available through
              the Dr. Saab network.
            </p>
          </div>

          {/* Filter */}
          <div className="mt-9">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    flex h-11 w-[calc((100%-0.5rem)/2)] items-center justify-center rounded-full border px-3 text-center
                    sm:w-[calc((100%-1rem)/3)] lg:w-[calc((100%-2rem)/5)]
                    text-[10px] font-bold leading-tight
                    transition-all duration-200
                    ${
                      selectedCategory === category
                        ? "border-brand-70 bg-brand-70 text-white"
                        : "border-brand-90/10 bg-brand-5/40 text-brand-ink/70 hover:border-brand-60/30 hover:bg-brand-5 hover:text-brand-70"
                    }
                  `}
                >
                  {category === "All"
                    ? "All Services"
                    : category.replace(" Services", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Service cards */}
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/40 hover:shadow-xl"
                >
                  {/* Number */}
                  <span className="absolute right-5 top-4 text-4xl font-black text-brand-5 transition group-hover:text-brand-10">
                    {service.number}
                  </span>

                  <div className="p-6">
                    <CircleIcon className="h-14 w-14 rounded-2xl bg-brand-5 text-brand-70 transition-all duration-300 group-hover:bg-brand-70 group-hover:text-white">
                      <Icon size={26} strokeWidth={1.7} />
                    </CircleIcon>

                    <Eyebrow className="mt-6">{service.category}</Eyebrow>

                    <h3 className="mt-2 max-w-[85%] text-xl font-black leading-tight text-brand-95">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-gray-500">
                      {service.description}
                    </p>

                    {/* Preview services */}
                    <div className="mt-5 space-y-2">
                      {service.services.slice(0, 5).map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-[11px] text-gray-600"
                        >
                          <span className="mt-[2px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-70">
                            <Check size={9} strokeWidth={3} />
                          </span>

                          {item}
                        </div>
                      ))}
                    </div>

                    {service.services.length > 5 && (
                      <button
                        type="button"
                        onClick={() => setActiveService(service)}
                        className="mt-3 text-[11px] font-black text-brand-70 hover:text-brand-90"
                      >
                        + {service.services.length - 5} more services
                      </button>
                    )}

                    {service.note && (
                      <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-3">
                        <div className="flex gap-2">
                          <CircleAlert
                            size={15}
                            className="mt-0.5 shrink-0 text-amber-600"
                          />

                          <p className="text-[10px] leading-5 text-amber-800">
                            {service.note}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto border-t border-brand-10 bg-brand-5/40 p-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full justify-between border-brand-10 bg-white"
                      onClick={() => setActiveService(service)}
                    >
                      {service.cta}

                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="border-y border-brand-10 bg-brand-5">
        <SectionContainer className="grid grid-cols-2 divide-x divide-y divide-brand-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-3 py-5 sm:px-5"
            >
              <CircleIcon className="bg-white shadow-sm">
                <Icon size={19} />
              </CircleIcon>

              <div>
                <p className="text-lg font-black leading-none text-brand-95">
                  {value}
                </p>

                <p className="mt-1 text-[9px] font-semibold text-gray-500">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </SectionContainer>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="bg-white py-16 lg:py-24">
        <SectionContainer>
          <div className="text-center">
            <Eyebrow>How It Works</Eyebrow>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-95 sm:text-4xl">
              From service request to support.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
              A simple process designed to get the right support closer to you.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {/* Connecting line */}
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-brand-10 lg:block" />

            {SERVICE_JOURNEY.map(
              ({ number, icon: Icon, title, description }) => (
                <div
                  key={number}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <CircleIcon className="h-14 w-14 border-4 border-white bg-brand-5 shadow-md">
                    <Icon size={21} />
                  </CircleIcon>

                  <span className="mt-3 text-[9px] font-black tracking-[1px] text-brand-60">
                    {number}
                  </span>

                  <h3 className="mt-1 text-xs font-black text-brand-95">
                    {title}
                  </h3>

                  <p className="mt-1 max-w-[130px] text-[10px] leading-4 text-gray-500">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          SERVICE AVAILABILITY
      ========================================================== */}
      <section className="pb-16 lg:pb-20">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-3xl bg-brand-95 px-6 py-9 sm:px-9 lg:px-12">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-80/30 to-transparent" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <CircleIcon className="bg-brand-lime text-brand-95">
                    <CircleAlert size={18} />
                  </CircleIcon>

                  <Eyebrow light>Service Availability</Eyebrow>
                </div>

                <p className="mt-5 text-sm font-bold leading-6 text-white sm:text-base sm:leading-7">
                  Service availability may vary depending on location,
                  technician certification, equipment capability, product
                  compatibility and partner/OEM authorisation.
                </p>
              </div>

              <Button
                type="button"
                variant="lime"
                className="shrink-0 px-5 py-3"
                href="/contact-us"
              >
                Check Availability
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section
        id="book-service"
        className="relative overflow-hidden bg-brand-70 py-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <SectionContainer className="relative max-w-[900px] text-center">
          <Sparkles className="mx-auto mb-5 text-brand-lime" size={27} />

          <Eyebrow light>Need Technical Support?</Eyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Book a Dr. Saab service.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Connect with the nearest available technician and get practical
            support for your EV, battery, drone, solar or energy system.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              type="button"
              onClick={openBookingForm}
              variant="lime"
              className="px-7 py-3.5"
            >
              Book a Service
              <ArrowRight size={15} />
            </Button>

            <Button
              href="tel:+919728395138"
              variant="light"
              className="px-7 py-3.5"
            >
              <Phone size={15} />
              Call Now
            </Button>
          </div>
        </SectionContainer>
      </section>

      {isBookingOpen && (
        <div ref={bookingFormRef} className="scroll-mt-28">
          <ServiceRequestForm
            defaultServiceCategory={bookingServiceCategory}
            onSubmit={handleServiceRequestSubmit}
            onClose={() => {
              setIsBookingOpen(false);
              resetServiceRequest();
            }}
            isLoading={isLoading}
            isSuccess={isSuccess}
            apiError={error}
          />
        </div>
      )}

      {/* =========================================================
          SERVICE DETAIL MODAL
      ========================================================== */}
      {activeService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-95/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveService(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between bg-brand-95 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <CircleIcon className="h-14 w-14 rounded-2xl bg-brand-lime text-brand-95">
                  <activeService.icon size={26} />
                </CircleIcon>

                <div>
                  <Eyebrow light>
                    {activeService.number} — {activeService.category}
                  </Eyebrow>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal content */}
            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
              <p className="text-sm leading-6 text-gray-500">
                {activeService.description}
              </p>

              <h4 className="mt-7 text-sm font-black text-brand-95">
                Services included
              </h4>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {activeService.services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-brand-5 px-4 py-3 text-[11px] font-semibold text-brand-ink"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-70 text-white">
                      <Check size={10} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              {activeService.suitableFor && (
                <div className="mt-7">
                  <h4 className="text-sm font-black text-brand-95">
                    Suitable for
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeService.suitableFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-brand-5 px-3 py-2 text-[10px] font-bold text-brand-70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeService.note && (
                <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-[11px] leading-5 text-amber-800">
                  <div className="flex gap-2">
                    <CircleAlert size={15} className="shrink-0" />
                    {activeService.note}
                  </div>
                </div>
              )}
            </div>

            {/* Modal CTA */}
            <div className="border-t border-brand-10 bg-gray-50 p-5">
              <Button
                type="button"
                variant="primary"
                className="w-full py-3"
                onClick={() => {
                  setActiveService(null);
                  openBookingForm(activeService.requestCategory);
                }}
              >
                {activeService.cta}
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurServices;
