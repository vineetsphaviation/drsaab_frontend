import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  Bot,
  Check,
  ChevronRight,
  CircleDollarSign,
  CircleDot,
  ClipboardCheck,
  CloudCog,
  Cpu,
  CreditCard,
  Drone,
  Droplets,
  Factory,
  FileCheck2,
  Gauge,
  GraduationCap,
  IndianRupee,
  Leaf,
  MapPin,
  Navigation,
  PackageCheck,
  Phone,
  Route,
  Satellite,
  ShieldCheck,
  Smartphone,
  SolarPanel,
  Store,
  Sun,
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
import panchayatHeroBg from "../assets/images/panchayat_hero_bg.png";
import PanchayatModalForm from "../components/forms/PanchayatModalForm";

const TECHNOLOGIES = [
  {
    title: "EV",
    subtitle: "Mobility Support",
    icon: <Zap size={18} />,
  },
  {
    title: "Battery",
    subtitle: "Diagnostics & Backup",
    icon: <BatteryCharging size={18} />,
  },
  {
    title: "Drone",
    subtitle: "Agri-Tech Support",
    icon: <Bot size={18} />,
  },
  {
    title: "Solar",
    subtitle: "Energy Solutions",
    icon: <SolarPanel size={18} />,
  },
];

const WORKSHOP_ITEMS = [
  {
    title: "Electric Cargo Vehicle",
    description:
      "Branded electric cargo vehicle configured as a mobile technical workshop.",
    icon: <Truck size={21} />,
  },
  {
    title: "EV Diagnostics",
    description:
      "Diagnostic equipment for inspection, troubleshooting and field support.",
    icon: <Gauge size={21} />,
  },
  {
    title: "Battery Testing",
    description:
      "Battery tester, emergency battery and portable charging capability.",
    icon: <BatteryCharging size={21} />,
  },
  {
    title: "Drone Equipment",
    description:
      "Field-ready tools and equipment supporting agricultural drone entrepreneurs.",
    icon: <Bot size={21} />,
  },
  {
    title: "Solar & Inverter Tools",
    description:
      "Tools for basic solar, inverter and distributed energy support.",
    icon: <SolarPanel size={21} />,
  },
  {
    title: "Battery Swapping",
    description:
      "Inventory designed to support eligible battery-swapping requirements.",
    icon: <PackageCheck size={21} />,
  },
  {
    title: "Safety Equipment",
    description: "Safety equipment for responsible technical service delivery.",
    icon: <ShieldCheck size={21} />,
  },
  {
    title: "Digital Technology",
    description:
      "GPS, CRM, digital booking and digital billing built into the enterprise.",
    icon: <Smartphone size={21} />,
  },
];

const SERVICE_USERS = [
  {
    title: "Farmers",
    description:
      "Access agricultural drone, solar, battery and mobility support closer to home.",
    icon: <Leaf size={22} />,
  },
  {
    title: "EV Owners",
    description:
      "Technical assistance for electric mobility without depending entirely on distant workshops.",
    icon: <Bike size={22} />,
  },
  {
    title: "E-Rickshaw Operators",
    description:
      "Field support for commercial electric mobility and battery-related requirements.",
    icon: <Truck size={22} />,
  },
  {
    title: "Drone Entrepreneurs",
    description:
      "Technical ecosystem support for emerging rural drone businesses.",
    icon: <Bot size={22} />,
  },
  {
    title: "Shops & Institutions",
    description:
      "Local technical support for businesses, institutions and community assets.",
    icon: <Store size={22} />,
  },
  {
    title: "Rural Fleets",
    description:
      "Mobile support for distributed electric and technology-enabled fleets.",
    icon: <Users size={22} />,
  },
];

const COST_ITEMS = [
  {
    component: "Electric Cargo Rickshaw & Mobile Workshop",
    amount: "₹2.10 L",
  },
  {
    component: "Emergency Battery & Charging",
    amount: "₹2.90 L",
  },
  {
    component: "EV Diagnostic Equipment",
    amount: "₹1.00 L",
  },
  {
    component: "Drone Equipment",
    amount: "₹0.65 L",
  },
  {
    component: "Solar Equipment",
    amount: "₹0.40 L",
  },
  {
    component: "Battery-Swapping Inventory",
    amount: "₹1.45 L",
  },
  {
    component: "Safety & Digital Technology",
    amount: "₹0.50 L",
  },
  {
    component: "Training & Establishment",
    amount: "₹0.85 L",
  },
  {
    component: "Working Capital",
    amount: "₹1.15 L",
  },
];

const LAUNCH_STEPS = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your interest to become a Panchayat-level Dr. Saab entrepreneur.",
    icon: <FileCheck2 size={20} />,
  },
  {
    number: "02",
    title: "Eligibility",
    description: "Candidate profile and basic eligibility are assessed.",
    icon: <ClipboardCheck size={20} />,
  },
  {
    number: "03",
    title: "Orientation",
    description:
      "Understand the model, responsibilities, services and enterprise opportunity.",
    icon: <GraduationCap size={20} />,
  },
  {
    number: "04",
    title: "Territory Assessment",
    description:
      "The Panchayat and surrounding service territory are evaluated.",
    icon: <MapPin size={20} />,
  },
  {
    number: "05",
    title: "Documentation",
    description:
      "Complete the required enterprise and programme documentation.",
    icon: <FileCheck2 size={20} />,
  },
  {
    number: "06",
    title: "Finance Process",
    description:
      "Eligible candidates may proceed through the applicable finance facilitation process.",
    icon: <CircleDollarSign size={20} />,
  },
  {
    number: "07",
    title: "Training",
    description:
      "Receive technical, operational and enterprise-oriented training.",
    icon: <GraduationCap size={20} />,
  },
  {
    number: "08",
    title: "Enterprise Setup",
    description:
      "Vehicle, equipment, technology and service infrastructure are prepared.",
    icon: <Wrench size={20} />,
  },
  {
    number: "09",
    title: "Launch",
    description:
      "Your Panchayat-level Dr. Saab enterprise begins serving its territory.",
    icon: <Zap size={20} />,
  },
];

const NETWORK_NODES = [
  { label: "Panchayat Hub", type: "hub" },
  { label: "Village 1", type: "village" },
  { label: "Village 2", type: "village" },
  { label: "Village 3", type: "village" },
  { label: "Village 4", type: "village" },
];

function TechnologyPill({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 backdrop-blur-sm">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-lime text-brand-95">
        {icon}
      </span>

      <div>
        <div className="text-[11px] font-black uppercase tracking-[0.8px] text-white">
          {title}
        </div>
        <div className="mt-0.5 text-[10px] text-white/55">{subtitle}</div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
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
            light ? "text-white/65" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function NetworkNode({ label, type }) {
  const isHub = type === "hub";

  return (
    <div className="relative flex min-w-[145px] flex-col items-center">
      <div
        className={`grid h-16 w-16 place-items-center rounded-full border-4 ${
          isHub
            ? "border-brand-lime bg-brand-90 text-brand-lime shadow-[0_0_0_8px_rgba(183,217,107,0.08)]"
            : "border-brand-10 bg-white text-brand-80"
        }`}
      >
        {isHub ? <Satellite size={23} /> : <MapPin size={21} />}
      </div>

      <div
        className={`mt-3 text-center text-[11px] font-black uppercase tracking-[0.8px] ${
          isHub ? "text-white" : "text-white/75"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

/* =========================================================
   PANCHAYAT HERO
========================================================= */

const PANCHAYAT_SERVICES = [
  {
    label: "EV",
    icon: Zap,
  },
  {
    label: "Battery",
    icon: BatteryCharging,
  },
  {
    label: "Drone",
    icon: Drone,
  },
  {
    label: "Solar",
    icon: Sun,
  },
];

const VILLAGES = [
  {
    className: "left-[8%] top-[26%]",
    label: "Village A",
  },
  {
    className: "left-[22%] top-[68%]",
    label: "Village B",
  },
  {
    className: "right-[13%] top-[22%]",
    label: "Village C",
  },
  {
    className: "right-[7%] top-[68%]",
    label: "Village D",
  },
  {
    className: "left-[43%] top-[8%]",
    label: "Village E",
  },
];

function VillageNode({ className, label }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="group flex items-center gap-1.5">
        <div className="relative grid h-7 w-7 place-items-center rounded-full border border-brand-10 bg-white text-brand-70 shadow-[0_5px_15px_rgba(7,95,69,0.10)]">
          <CircleDot size={12} />

          <span className="absolute inset-0 animate-ping rounded-full border border-brand-60/20" />
        </div>

        <span className="hidden rounded-md bg-white/90 px-2 py-1 text-[7px] font-black uppercase tracking-[0.5px] text-brand-90 shadow-sm backdrop-blur-sm sm:block">
          {label}
        </span>
      </div>
    </div>
  );
}

function ServiceMarker({ icon: Icon, label, className }) {
  return (
    <div
      className={`absolute ${className} flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-2 py-1.5 shadow-[0_6px_18px_rgba(7,95,69,0.10)] backdrop-blur-md`}
    >
      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
        <Icon size={10} />
      </span>

      <span className="text-[7px] font-black uppercase tracking-[0.5px] text-brand-90">
        {label}
      </span>
    </div>
  );
}

function PanchayatHero({ onApply }) {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-10/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:grid-cols-[0.86fr_1.14fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-[500px]">
            <Eyebrow>PANCHAYAT SERVICE-ON-WHEELS</Eyebrow>

            <h1 className="mt-4 text-[39px] font-black leading-[0.98] tracking-[-1.8px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              One Panchayat.
              <span className="block text-brand-70">One Dr. Saab.</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-brand-ink/65 sm:text-[14px] sm:leading-7">
              A mobile technical service enterprise bringing EV, battery,
              agricultural drone, solar and energy support closer to rural
              customers — one Panchayat and its surrounding villages at a time.
            </p>

            {/* Technology pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {PANCHAYAT_SERVICES.map(({ label, icon: Icon }) => (
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
                Apply for Your Panchayat
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="/contact-us" variant="outline">
                Check Territory
              </Button>
            </div>

            {/* Trust / model indicators */}
            <div className="mt-7 grid max-w-[470px] grid-cols-3 border-t border-brand-10 pt-5">
              <div className="border-r border-brand-10 pr-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  01
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Panchayat
                </div>
              </div>

              <div className="border-r border-brand-10 px-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  4+
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Tech Verticals
                </div>
              </div>

              <div className="pl-3">
                <div className="text-[19px] font-black tracking-[-0.5px] text-brand-95">
                  01
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase leading-3 tracking-[0.5px] text-brand-ink/50">
                  Mobile Unit
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — TERRITORY VISUAL
          ================================================== */}

          <div
            id="territory"
            className="relative min-h-[470px] sm:min-h-[520px]"
          >
            {/* Main visual container */}
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-brand-10 bg-[#e8f2ed] shadow-[0_25px_70px_rgba(7,95,69,0.10)]">
              {/* =================================================
                  DUMMY RURAL IMAGE
              ================================================== */}

              <img
                src={panchayatHeroBg}
                alt="Rural landscape"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Green map overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-5/65 via-brand-5/45 to-brand-10/60" />

              {/* =================================================
                  TOP CARD
              ================================================== */}

              <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between rounded-xl border border-white/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md sm:left-5 sm:right-5 sm:top-5">
                <div>
                  <div className="text-[7px] font-black uppercase tracking-[1px] text-brand-60">
                    PANCHAYAT SERVICE NETWORK
                  </div>

                  <div className="mt-1 text-[12px] font-black text-brand-95 sm:text-[14px]">
                    One Local Hub. Multiple Villages.
                  </div>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-brand-5 px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-60" />

                  <span className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-70">
                    Network Active
                  </span>
                </div>
              </div>

              {/* =================================================
                  NETWORK ROUTES
              ================================================== */}

              <svg
                className="absolute inset-0 z-[2] h-full w-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="none"
              >
                {/* Main routes */}
                <path
                  d="M400 310 L110 170"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 310 L170 430"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 310 L650 150"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 310 L690 430"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                <path
                  d="M400 310 L420 100"
                  stroke="#17905f"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.65"
                />

                {/* Secondary routes */}
                <path
                  d="M110 170 Q250 100 420 100"
                  stroke="#17905f"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  fill="none"
                  opacity="0.3"
                />

                <path
                  d="M170 430 Q420 520 690 430"
                  stroke="#17905f"
                  strokeWidth="1"
                  strokeDasharray="5 8"
                  fill="none"
                  opacity="0.3"
                />
              </svg>

              {/* =================================================
                  VILLAGE NODES
              ================================================== */}

              <div className="absolute inset-0 z-10">
                {VILLAGES.map((village) => (
                  <VillageNode
                    key={village.label}
                    className={village.className}
                    label={village.label}
                  />
                ))}
              </div>

              {/* =================================================
                  CENTRAL DR SAAB HUB
              ================================================== */}

              <div className="absolute left-1/2 top-[52%] z-20 -translate-x-1/2 -translate-y-1/2">
                {/* pulse rings */}
                <div className="absolute -inset-8 animate-pulse rounded-full border border-brand-60/15" />

                <div className="absolute -inset-4 rounded-full border border-brand-60/20" />

                <div className="relative grid h-[86px] w-[86px] place-items-center rounded-full border-[6px] border-white bg-brand-90 text-white shadow-[0_15px_35px_rgba(3,78,55,0.25)]">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-70">
                    <Truck size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-95 px-3 py-2 text-center shadow-lg">
                  <div className="text-[7px] font-bold uppercase tracking-[1px] text-brand-lime">
                    SERVICE HUB
                  </div>

                  <div className="mt-0.5 text-[10px] font-black text-white">
                    Dr. Saab Mobile Unit
                  </div>
                </div>
              </div>

              {/* =================================================
                  SERVICE MARKERS
              ================================================== */}

              <ServiceMarker
                icon={Zap}
                label="EV"
                className="left-[9%] top-[45%]"
              />

              <ServiceMarker
                icon={BatteryCharging}
                label="Battery"
                className="right-[7%] top-[42%]"
              />

              <ServiceMarker
                icon={Drone}
                label="Drone"
                className="left-[28%] top-[17%]"
              />

              <ServiceMarker
                icon={Sun}
                label="Solar"
                className="right-[24%] bottom-[18%]"
              />

              {/* =================================================
                  COVERAGE CARD
              ================================================== */}

              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/70 bg-white/90 p-3.5 shadow-[0_12px_30px_rgba(7,95,69,0.10)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-5 text-brand-70">
                      <Navigation size={15} />
                    </div>

                    <div>
                      <div className="text-[7px] font-black uppercase tracking-[0.8px] text-brand-60">
                        SERVICE TERRITORY
                      </div>

                      <div className="mt-0.5 text-[11px] font-black text-brand-95">
                        Panchayat + Surrounding Villages
                      </div>
                    </div>
                  </div>

                  <div className="hidden items-center gap-1.5 sm:flex">
                    <Route size={13} className="text-brand-60" />

                    <span className="text-[8px] font-black uppercase tracking-[0.5px] text-brand-70">
                      Connected Coverage
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CARD — TRAINED SUPPORT
            ================================================== */}

            <div className="absolute -left-4 top-[145px] z-30 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Wrench size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    SUPPORT
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Trained Technician
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CARD — DIGITAL
            ================================================== */}

            <div className="absolute -right-4 bottom-[130px] z-30 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <Smartphone size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    DIGITAL
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Service Records
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

const PanchayatModal = () => {
  const [activeLaunchStep, setActiveLaunchStep] = useState(0);
  const [isPanchayatFormOpen, setIsPanchayatFormOpen] = useState(false);
  const panchayatFormRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLaunchStep((current) => (current + 1) % LAUNCH_STEPS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPanchayatFormOpen) {
      panchayatFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isPanchayatFormOpen]);

  const totalCost = useMemo(() => "₹11.00 L", []);

  const openPanchayatForm = () => {
    if (isPanchayatFormOpen) {
      panchayatFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setIsPanchayatFormOpen(true);
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <PanchayatHero onApply={openPanchayatForm} />

      {/* =========================================================
          WHAT IS THE MODEL
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="WHAT IS THE PANCHAYAT MODEL?"
                title="A technical workshop that comes to the village."
                description="A trained local entrepreneur operates a branded electric cargo vehicle configured as a mobile technical workshop. The model brings multiple technology services closer to rural customers."
              />

              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-10 bg-white p-5 shadow-sm">
                <CircleIcon className="bg-brand-5 text-brand-70">
                  <MapPin size={18} />
                </CircleIcon>

                <div>
                  <div className="text-sm font-black text-brand-95">
                    One Panchayat + Surrounding Villages
                  </div>
                  <p className="mt-1.5 text-xs leading-6 text-slate-500">
                    The enterprise is designed around a Panchayat hub and its
                    surrounding service territory.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICE_USERS.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-brand-10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-90/5"
                >
                  <CircleIcon className="transition-colors group-hover:bg-brand-10">
                    {item.icon}
                  </CircleIcon>

                  <h3 className="mt-5 text-sm font-black text-brand-95">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          ONE PANCHAYAT → ONE DR SAAB
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <SectionHeading
            eyebrow="THE CORE PROPOSITION"
            title="One Panchayat → One Dr. Saab"
            description="A local service enterprise connects multiple technologies, multiple villages and one digital operating network."
          />

          <div className="mt-12 rounded-[30px] bg-brand-95 p-5 sm:p-8 lg:p-12">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
              {[
                {
                  label: "ONE PANCHAYAT",
                  icon: <MapPin size={22} />,
                },
                {
                  label: "ONE DR. SAAB",
                  icon: <Truck size={22} />,
                },
                {
                  label: "MULTIPLE TECHNOLOGIES",
                  icon: <Cpu size={22} />,
                },
                {
                  label: "MULTIPLE VILLAGES",
                  icon: <Users size={22} />,
                },
                {
                  label: "ONE DIGITAL NETWORK",
                  icon: <CloudCog size={22} />,
                },
              ].map((item, index, arr) => (
                <div key={item.label} className="contents">
                  <div className="flex flex-col items-center text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-brand-lime/20 bg-brand-90 text-brand-lime">
                      {item.icon}
                    </div>

                    <div className="mt-3 max-w-[120px] text-[9px] font-black uppercase tracking-[1px] text-white/75">
                      {item.label}
                    </div>
                  </div>

                  {index < arr.length - 1 && (
                    <div className="mx-auto hidden text-brand-lime/60 lg:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs leading-6 text-white/50">
              EV + Battery + Drone + Solar
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          MOBILE WORKSHOP
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="MOBILE WORKSHOP"
                title="One vehicle. Multiple technical capabilities."
                description="The Dr. Saab vehicle is configured as a mobile technical workshop, bringing equipment, inventory and digital service infrastructure into the Panchayat territory."
              />

              <div className="mt-8 rounded-2xl bg-brand-95 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lime text-brand-95">
                    <Truck size={21} />
                  </div>

                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[1.1px] text-brand-lime">
                      Equipped With
                    </div>
                    <div className="mt-1 text-sm font-black">
                      Field-ready infrastructure
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {["EV", "Battery", "Drone", "Solar"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-center text-[10px] font-bold text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {WORKSHOP_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-90/5"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-brand-5 transition-colors group-hover:bg-brand-10" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <CircleIcon>{item.icon}</CircleIcon>

                      <span className="text-[10px] font-black text-brand-60/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-sm font-black text-brand-95">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          TERRITORY
      ========================================================== */}
      <section id="territory" className="bg-brand-95 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              light
              eyebrow="SERVICE AREA"
              title="One Vehicle | Multi Services | Many Villages"
              description="The Panchayat becomes the operating hub. The Dr. Saab vehicle travels through surrounding villages to deliver eligible technical support."
            />

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 sm:p-10">
              <div className="relative">
                {/* connection line */}
                <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-brand-lime/70 via-white/20 to-white/10 sm:block" />

                <div className="relative grid gap-8 sm:grid-cols-5 sm:gap-2">
                  {NETWORK_NODES.map((node) => (
                    <NetworkNode
                      key={node.label}
                      label={node.label}
                      type={node.type}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {["EV", "Battery", "Drone", "Solar"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.8px] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          ₹11 LAKH MODEL
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>₹11 LAKH PANCHAYAT MODEL</Eyebrow>

              <h2 className="mt-3 text-4xl font-black tracking-[-1.8px] text-brand-95 sm:text-5xl">
                Built as an
                <span className="block text-brand-70">enterprise.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                The following project-cost structure is indicative and covers
                the mobile workshop, equipment, inventory, training and working
                capital required to establish the model.
              </p>

              <div className="mt-8 rounded-[26px] bg-brand-95 p-6 text-white shadow-xl shadow-brand-95/10">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lime text-brand-95">
                    <IndianRupee size={21} />
                  </div>

                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[1px] text-white/45">
                      Indicative Enterprise Cost
                    </div>
                    <div className="mt-1 text-3xl font-black">{totalCost}</div>
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-brand-lime" />
                </div>

                <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.7px] text-white/40">
                  <span>Project Cost</span>
                  <span>₹11.00 Lakh</span>
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[24px] border border-brand-10">
                <div className="grid grid-cols-[1fr_auto] bg-brand-95 px-5 py-4 text-[10px] font-black uppercase tracking-[0.8px] text-white sm:px-6">
                  <span>Component</span>
                  <span>Indicative Amount</span>
                </div>

                <div className="divide-y divide-brand-10">
                  {COST_ITEMS.map((item, index) => (
                    <div
                      key={item.component}
                      className="grid grid-cols-[1fr_auto] items-center gap-5 px-5 py-4 transition-colors hover:bg-brand-5 sm:px-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-[9px] font-black text-brand-60/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xs font-bold text-brand-ink sm:text-sm">
                          {item.component}
                        </span>
                      </div>

                      <span className="whitespace-nowrap text-xs font-black text-brand-80 sm:text-sm">
                        {item.amount}
                      </span>
                    </div>
                  ))}

                  <div className="grid grid-cols-[1fr_auto] items-center bg-brand-5 px-5 py-5 sm:px-6">
                    <span className="text-sm font-black text-brand-95">
                      Total
                    </span>

                    <span className="text-lg font-black text-brand-70">
                      ₹11.00 L
                    </span>
                  </div>
                </div>
              </div>

              {/* Financial summary */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-brand-10 bg-brand-5 p-5">
                  <div className="text-[9px] font-black uppercase tracking-[0.9px] text-slate-400">
                    Enterprise Cost
                  </div>
                  <div className="mt-2 text-xl font-black text-brand-95">
                    ₹11 Lakh
                  </div>
                </div>

                <div className="rounded-2xl border border-brand-10 bg-white p-5">
                  <div className="text-[9px] font-black uppercase tracking-[0.9px] text-slate-400">
                    Candidate Contribution
                  </div>
                  <div className="mt-2 text-xl font-black text-brand-95">
                    ₹1 Lakh
                  </div>
                </div>

                <div className="rounded-2xl bg-brand-90 p-5 text-white">
                  <div className="text-[9px] font-black uppercase tracking-[0.9px] text-white/45">
                    Proposed Finance Facilitation
                  </div>
                  <div className="mt-2 text-xl font-black text-brand-lime">
                    Up to ₹10 Lakh*
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    className="mt-0.5 shrink-0 text-amber-700"
                    size={18}
                  />

                  <p className="text-xs leading-6 text-amber-900">
                    Finance is not guaranteed. Loan sanction, subsidy, interest
                    support, moratorium and repayment terms remain subject to
                    applicant eligibility, lender appraisal and applicable
                    programme guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          LAUNCH JOURNEY
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <SectionHeading
            eyebrow="PANCHAYAT LAUNCH JOURNEY"
            title="From application to your first service call."
            description="A structured journey helps the entrepreneur move from initial application through territory assessment, training, enterprise setup and launch."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Steps */}
            <div className="space-y-2">
              {LAUNCH_STEPS.map((step, index) => {
                const active = index === activeLaunchStep;

                return (
                  <button
                    type="button"
                    key={step.number}
                    onClick={() => setActiveLaunchStep(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-brand-60/30 bg-brand-95 text-white shadow-lg shadow-brand-95/10"
                        : "border-brand-10 bg-white text-brand-95 hover:border-brand-60/20"
                    }`}
                  >
                    <div
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                        active
                          ? "bg-brand-lime text-brand-95"
                          : "bg-brand-5 text-brand-70"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-[9px] font-black uppercase tracking-[0.8px] ${
                          active ? "text-brand-lime" : "text-brand-60"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div className="mt-0.5 text-sm font-black">
                        {step.title}
                      </div>
                    </div>

                    <ChevronRight
                      size={16}
                      className={active ? "text-brand-lime" : "text-slate-300"}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active detail */}
            <div className="relative overflow-hidden rounded-[30px] bg-brand-95 p-7 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-brand-lime/10" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/5" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                    {LAUNCH_STEPS[activeLaunchStep].icon}
                  </div>

                  <span className="text-5xl font-black text-white/10">
                    {LAUNCH_STEPS[activeLaunchStep].number}
                  </span>
                </div>

                <div className="mt-12 max-w-lg">
                  <div className="text-[10px] font-black uppercase tracking-[1.3px] text-brand-lime">
                    Step {LAUNCH_STEPS[activeLaunchStep].number}
                  </div>

                  <h3 className="mt-3 text-3xl font-black tracking-[-1px]">
                    {LAUNCH_STEPS[activeLaunchStep].title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {LAUNCH_STEPS[activeLaunchStep].description}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.8px] text-white/35">
                    <span>Panchayat launch progress</span>
                    <span>
                      {activeLaunchStep + 1}/{LAUNCH_STEPS.length}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand-lime transition-all duration-500"
                      style={{
                        width: `${
                          ((activeLaunchStep + 1) / LAUNCH_STEPS.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          APPLICATION CTA
      ========================================================== */}
      <section id="apply" className="bg-brand-90 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <Eyebrow light>BECOME A PANCHAYAT ENTREPRENEUR</Eyebrow>

              <h2 className="mt-4 text-3xl font-black tracking-[-1.5px] text-white sm:text-5xl">
                Become Your Panchayat's
                <span className="block text-brand-lime">Dr. Saab.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-[15px]">
                Bring EV, battery, drone and solar support closer to your
                community through a branded mobile technical enterprise.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  type="button"
                  onClick={openPanchayatForm}
                  className="px-7 py-3"
                >
                  Apply for Your Panchayat
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="/contact-us"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Check Territory
                  <MapPin className="ml-2" size={15} />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.8px] text-white/35">
                <span className="inline-flex items-center gap-2">
                  <Check size={13} className="text-brand-lime" />
                  Local Enterprise
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={13} className="text-brand-lime" />
                  Multi-Technology
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={13} className="text-brand-lime" />
                  Digital Network
                </span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {isPanchayatFormOpen && (
        <div ref={panchayatFormRef} className="mt-8 scroll-mt-24">
          <PanchayatModalForm
            onClose={() => setIsPanchayatFormOpen(false)}
            onSubmit=""
          />
        </div>
      )}
    </div>
  );
};

export default PanchayatModal;
