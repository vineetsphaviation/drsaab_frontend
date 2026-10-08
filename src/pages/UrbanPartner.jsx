import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Bolt,
  BriefcaseBusiness,
  Building2,
  CarFront,
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
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

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

const URBAN_SERVICES = [
  {
    title: "EV Diagnostics",
    description:
      "Identify common EV faults and coordinate the right technical response.",
    icon: <Gauge size={22} />,
    metric: "DIAGNOSE",
  },
  {
    title: "Roadside Assistance",
    description:
      "Fast field response for eligible breakdown and mobility-support requirements.",
    icon: <Navigation size={22} />,
    metric: "RESPOND",
  },
  {
    title: "Battery Health",
    description: "Battery testing and health-oriented technical assessment.",
    icon: <BatteryCharging size={22} />,
    metric: "ASSESS",
  },
  {
    title: "Charging Support",
    description:
      "Support for charging-related issues and technical coordination.",
    icon: <Bolt size={22} />,
    metric: "POWER",
  },
  {
    title: "Fleet Maintenance",
    description:
      "Structured support for commercial EV operators and distributed fleets.",
    icon: <Truck size={22} />,
    metric: "FLEETS",
  },
  {
    title: "Spare Parts",
    description: "Coordination for genuine and compatible service parts.",
    icon: <Package size={22} />,
    metric: "SUPPLY",
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

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}) {
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
          className={`mt-5 max-w-2xl text-sm leading-7 sm:text-[15px] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ServiceFormatCard({ item }) {
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
}

const UrbanPartner = () => {
  const [activeJourney, setActiveJourney] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveJourney((current) => (current + 1) % CUSTOMER_JOURNEY.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-brand-95 text-white">
        {/* City grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #b7d96b 1px, transparent 1px),
                linear-gradient(to bottom, #b7d96b 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-brand-lime/10" />

        <SectionContainer className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-lime/20 bg-brand-lime/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-lime" />
                <span className="text-[9px] font-black uppercase tracking-[1.2px] text-brand-lime">
                  CITY SERVICE NETWORK
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-2.5px] sm:text-5xl lg:text-[68px]">
                Fast.
                <span className="text-brand-lime"> Organised.</span>
                <span className="block">Accessible.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/70 sm:text-xl">
                Your City's EV & Energy Service Partner
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#apply" className="px-6 py-3">
                  Apply for Your City
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="#urban-services"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Explore Services
                  <ChevronRight className="ml-2" size={15} />
                </Button>
              </div>

              {/* Response strip */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["EV Diagnostics", "Roadside", "Battery", "Fleet"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.7px] text-white/55"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Urban hero visual */}
            <div className="relative min-h-[440px]">
              <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.025]" />

              {/* city blocks */}
              <div className="absolute bottom-0 left-0 right-0 flex h-[150px] items-end gap-1 px-5 opacity-40">
                {[45, 75, 55, 110, 82, 135, 65, 100, 52, 125, 80, 145].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-sm bg-brand-80/60"
                      style={{ height }}
                    >
                      <div className="grid grid-cols-2 gap-1 p-2 opacity-30">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <span
                            key={i}
                            className="h-1 rounded-full bg-brand-lime"
                          />
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* Radius */}
              <div className="absolute left-1/2 top-[45%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-lime/20" />

              <div className="absolute left-1/2 top-[45%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-lime/10" />

              {/* central partner */}
              <div className="absolute left-1/2 top-[45%] z-10 w-[190px] -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-[25px] border border-brand-lime/20 bg-brand-90 p-5 shadow-2xl shadow-black/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[1.2px] text-brand-lime">
                      CITY PARTNER
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] font-bold text-white/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                      ONLINE
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl bg-brand-95 p-4">
                    <div className="relative mx-auto h-20 w-32">
                      <div className="absolute bottom-2 left-1 right-1 h-9 rounded-xl border border-brand-lime/30 bg-brand-80" />

                      <div className="absolute bottom-0 left-5 h-5 w-5 rounded-full border-2 border-brand-95 bg-brand-lime" />

                      <div className="absolute bottom-0 right-5 h-5 w-5 rounded-full border-2 border-brand-95 bg-brand-lime" />

                      <div className="absolute bottom-7 left-12 h-6 w-14 rounded-t-lg border border-white/10 bg-brand-70" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[8px] text-white/45">
                    <span>Territory Active</span>
                    <span className="text-brand-lime">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Floating status cards */}
              <div className="absolute left-4 top-10 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:left-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-lime text-brand-95">
                    <Clock3 size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/35">
                      Response
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      Fast Dispatch
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-4 top-20 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:right-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-brand-lime">
                    <Navigation size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/35">
                      Territory
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      Defined Area
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-4 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:left-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-brand-lime">
                    <Truck size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/35">
                      Support
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      Fleet Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          WHAT IS URBAN PARTNER
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
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

      {/* =========================================================
          URBAN SERVICES
      ========================================================== */}
      <section
        id="urban-services"
        className="bg-brand-5 py-16 sm:py-20 lg:py-24"
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

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {URBAN_SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5"
              >
                <div className="flex items-center justify-between">
                  <CircleIcon>{service.icon}</CircleIcon>

                  <span className="text-[8px] font-black uppercase tracking-[1px] text-brand-60/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <h3 className="text-base font-black text-brand-95">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-brand-10 pt-4">
                  <span className="text-[8px] font-black uppercase tracking-[1px] text-brand-60">
                    {service.metric}
                  </span>

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

      {/* =========================================================
          CUSTOMER JOURNEY
      ========================================================== */}
      <section className="bg-brand-95 py-16 sm:py-20 lg:py-24">
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

      {/* =========================================================
          WHO IS IT FOR
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
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

            <div className="grid gap-3 sm:grid-cols-2">
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

      {/* =========================================================
          BENEFITS
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
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

      {/* =========================================================
          CTA
      ========================================================== */}
      <section id="apply" className="bg-brand-90 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-12 text-center sm:px-10 sm:py-16">
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
                <Button href="/apply-urban-partner" className="px-7 py-3">
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
    </div>
  );
};

export default UrbanPartner;
