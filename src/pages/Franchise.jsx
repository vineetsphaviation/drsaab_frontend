import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Bike,
  Bolt,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Crosshair,
  FileCheck2,
  FileText,
  Gauge,
  GraduationCap,
  Handshake,
  Landmark,
  MapPin,
  Navigation,
  Package,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  SolarPanel,
  Store,
  Target,
  Truck,
  Users,
  Wrench,
  X,
  Zap,
  CheckCircle2,
  CircleDollarSign,
  CloudCog,
  Drone,
  MapPinned,
  Network,
  Sun,
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

const FRANCHISE_MODELS = [
  {
    type: "PANCHAYAT FRANCHISE",
    title: "Service-on-Wheels",
    description:
      "One Panchayat + surrounding villages with a mobile technical workshop serving multiple technologies.",
    icon: <Truck size={26} />,
    accent: "lime",
    href: "/panchayat-modal",
    features: [
      "Mobile Workshop",
      "Multiple Villages",
      "EV + Battery + Drone + Solar",
    ],
  },
  {
    type: "CITY FRANCHISE",
    title: "City Service Partner",
    description:
      "A defined urban territory for doorstep service, workshops, diagnostics and fleet support.",
    icon: <Building2 size={26} />,
    accent: "green",
    href: "/urban-partner",
    features: ["Defined Territory", "Doorstep Service", "Fleet & EV Support"],
  },
];

const APPLICANT_TYPES = [
  { title: "Existing Mechanics", icon: <Wrench size={19} /> },
  { title: "EV Technicians", icon: <Zap size={19} /> },
  { title: "Electricians", icon: <Bolt size={19} /> },
  { title: "Workshop Owners", icon: <Store size={19} /> },
  { title: "Battery Dealers", icon: <BatteryCharging size={19} /> },
  { title: "Solar Technicians", icon: <SolarPanel size={19} /> },
  { title: "Drone Pilots", icon: <Crosshair size={19} /> },
  { title: "ITI Graduates", icon: <GraduationCap size={19} /> },
  { title: "Polytechnic Graduates", icon: <Landmark size={19} /> },
  { title: "Automobile Diploma Holders", icon: <Truck size={19} /> },
  {
    title: "Fleet-Service Professionals",
    icon: <BriefcaseBusiness size={19} />,
  },
  { title: "CSC VLEs", icon: <Smartphone size={19} /> },
  { title: "Rural Entrepreneurs", icon: <MapPin size={19} /> },
  { title: "Urban Entrepreneurs", icon: <Building2 size={19} /> },
  { title: "New Technical Entrepreneurs", icon: <Cpu size={19} /> },
];


const APPLICATION_STEPS = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your interest and basic applicant details.",
    icon: <FileText size={21} />,
  },
  {
    number: "02",
    title: "Screening",
    description: "Applicant profile and basic eligibility are reviewed.",
    icon: <Search size={21} />,
  },
  {
    number: "03",
    title: "Orientation",
    description:
      "Understand the Dr. Saab model, responsibilities and opportunity.",
    icon: <Users size={21} />,
  },
  {
    number: "04",
    title: "Territory Assessment",
    description: "The proposed service territory is evaluated.",
    icon: <MapPin size={21} />,
  },
  {
    number: "05",
    title: "Documentation",
    description:
      "Complete the required enterprise and programme documentation.",
    icon: <FileCheck2 size={21} />,
  },
  {
    number: "06",
    title: "Finance",
    description:
      "Eligible candidates proceed through the applicable finance process.",
    icon: <Landmark size={21} />,
  },
  {
    number: "07",
    title: "Training",
    description: "Complete technical, operational and enterprise training.",
    icon: <GraduationCap size={21} />,
  },
  {
    number: "08",
    title: "Setup",
    description:
      "Prepare equipment, technology, identity and operating infrastructure.",
    icon: <SettingsIcon />,
  },
  {
    number: "09",
    title: "Launch",
    description: "Begin operating your Dr. Saab service enterprise.",
    icon: <Zap size={21} />,
  },
];

function SettingsIcon() {
  return <Wrench size={21} />;
}

const TERRITORY_DATA = {
  available: {
    label: "Territory Available",
    description:
      "This territory appears available for further evaluation. You can proceed with an application.",
    icon: <Check size={20} />,
    className: "border-brand-60/30 bg-brand-5 text-brand-90",
    dot: "bg-brand-60",
  },
  evaluation: {
    label: "Under Evaluation",
    description:
      "This territory is currently being evaluated. Submit your details to express interest.",
    icon: <Navigation size={20} />,
    className: "border-orange-200 bg-orange-50 text-orange-900",
    dot: "bg-orange-500",
  },
  appointed: {
    label: "Partner Already Appointed",
    description:
      "A Dr. Saab partner may already be operating in this territory. Availability can be confirmed by the team.",
    icon: <ShieldCheck size={20} />,
    className: "border-red-200 bg-red-50 text-red-900",
    dot: "bg-red-500",
  },
};

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

function FranchiseModelCard({ model }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-brand-10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-2xl hover:shadow-brand-95/5 sm:p-8">
      <div
        className={`absolute right-0 top-0 h-40 w-40 rounded-bl-full transition-colors ${
          model.accent === "lime" ? "bg-brand-5" : "bg-brand-10/60"
        }`}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`grid h-14 w-14 place-items-center rounded-2xl ${
              model.accent === "lime"
                ? "bg-brand-lime text-brand-95"
                : "bg-brand-90 text-brand-lime"
            }`}
          >
            {model.icon}
          </div>

          <span className="rounded-full border border-brand-10 bg-white px-3 py-1.5 text-[8px] font-black uppercase tracking-[1px] text-brand-60">
            {model.type}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-black tracking-[-0.8px] text-brand-95">
          {model.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
          {model.description}
        </p>

        <div className="mt-7 grid gap-2">
          {model.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 text-xs font-bold text-brand-ink"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                <Check size={12} />
              </span>
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button
            href={model.href}
            variant={model.accent === "lime" ? "primary" : "outline"}
            className="w-full sm:w-auto"
          >
            Explore {model.title}
            <ArrowRight className="ml-2" size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FRANCHISE HERO
========================================================= */

const BUSINESS_VERTICALS = [
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

const SUPPORT_ITEMS = [
  {
    number: "01",
    title: "Territory",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Training",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Service Network",
    icon: Network,
  },
  {
    number: "04",
    title: "Digital Support",
    icon: Smartphone,
  },
];

/* =========================================================
   FRANCHISE HERO
========================================================= */

function FranchiseHero() {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full bg-brand-10/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[520px] w-[520px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 xl:grid-cols-[0.86fr_1.14fr]">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="max-w-[510px]">
            <Eyebrow>DR. SAAB FRANCHISE</Eyebrow>

            <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-1.9px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              Become the Dr. Saab
              <span className="block text-brand-70">of Your Area.</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-brand-ink/65 sm:text-[14px] sm:leading-7">
              Start a future-ready technical service enterprise combining EV,
              battery, agricultural drone and solar support — backed by an
              organised service ecosystem.
            </p>

            {/* Business verticals */}
            <div className="mt-6 flex flex-wrap gap-2">
              {BUSINESS_VERTICALS.map(({ label, icon: Icon }) => (
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
              <Button href="/contact-us">
                Apply Now
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="#territory-checker" variant="outline">
                Check Your Territory
              </Button>
            </div>

            {/* Trust points */}
            <div className="mt-7 grid max-w-[470px] grid-cols-3 border-t border-brand-10 pt-5">
              <div className="border-r border-brand-10 pr-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[9px] font-black text-brand-95">
                    Training
                  </span>
                </div>

                <p className="mt-1 text-[8px] leading-3 text-brand-ink/45">
                  Technical capability
                </p>
              </div>

              <div className="border-r border-brand-10 px-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[9px] font-black text-brand-95">
                    Network
                  </span>
                </div>

                <p className="mt-1 text-[8px] leading-3 text-brand-ink/45">
                  Connected support
                </p>
              </div>

              <div className="pl-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[9px] font-black text-brand-95">
                    Territory
                  </span>
                </div>

                <p className="mt-1 text-[8px] leading-3 text-brand-ink/45">
                  Local opportunity
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FRANCHISE OPPORTUNITY DASHBOARD
          ================================================== */}

          <div id="territory-checker" className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-brand-10 bg-white p-4 shadow-[0_25px_70px_rgba(7,95,69,0.11)] sm:p-5 lg:p-6">
              {/* =================================================
                  DASHBOARD HEADER
              ================================================== */}

              <div className="flex items-center justify-between border-b border-brand-5 pb-5">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[1.2px] text-brand-60">
                    FRANCHISE OPPORTUNITY
                  </div>

                  <div className="mt-1 text-[15px] font-black text-brand-95 sm:text-[17px]">
                    Build Your Local Service Business
                  </div>
                </div>

                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <CircleDollarSign size={17} />
                </div>
              </div>

              {/* =================================================
                  FRANCHISE TYPES
              ================================================== */}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-brand-10 bg-brand-5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-70">
                      <Truck size={16} />
                    </div>

                    <span className="rounded-full bg-brand-lime/50 px-2 py-1 text-[7px] font-black uppercase tracking-[0.5px] text-brand-95">
                      Rural
                    </span>
                  </div>

                  <div className="mt-4 text-[12px] font-black text-brand-95">
                    Panchayat Franchise
                  </div>

                  <p className="mt-1 text-[9px] leading-4 text-brand-ink/50">
                    Mobile service enterprise for a Panchayat and surrounding
                    villages.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-10 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-5 text-brand-70">
                      <Wrench size={16} />
                    </div>

                    <span className="rounded-full bg-brand-5 px-2 py-1 text-[7px] font-black uppercase tracking-[0.5px] text-brand-70">
                      Urban
                    </span>
                  </div>

                  <div className="mt-4 text-[12px] font-black text-brand-95">
                    City Franchise
                  </div>

                  <p className="mt-1 text-[9px] leading-4 text-brand-ink/50">
                    Connected EV, battery, fleet and roadside service network.
                  </p>
                </div>
              </div>

              {/* =================================================
                  TECHNOLOGY COVERAGE
              ================================================== */}

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <div className="text-[8px] font-black uppercase tracking-[0.9px] text-brand-ink/45">
                    BUSINESS VERTICALS
                  </div>

                  <div className="text-[8px] font-bold text-brand-60">
                    04 ACTIVE
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-4 gap-2">
                  {BUSINESS_VERTICALS.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center rounded-xl border border-brand-10 bg-white py-3"
                    >
                      <Icon size={15} className="text-brand-70" />

                      <span className="mt-1.5 text-[7px] font-black uppercase tracking-[0.4px] text-brand-90">
                        {label}
                      </span>

                      <Check size={10} className="mt-1 text-brand-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  SUPPORT ECOSYSTEM
              ================================================== */}

              <div className="mt-5 rounded-2xl bg-brand-95 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[7px] font-black uppercase tracking-[1px] text-brand-lime">
                      DR. SAAB ECOSYSTEM
                    </div>

                    <div className="mt-1 text-[12px] font-black text-white">
                      What supports your journey
                    </div>
                  </div>

                  <ShieldCheck size={18} className="text-brand-lime" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {SUPPORT_ITEMS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.number}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5"
                      >
                        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-lime">
                          <Icon size={13} />
                        </div>

                        <div>
                          <div className="text-[7px] font-bold text-white/40">
                            {item.number}
                          </div>

                          <div className="text-[8px] font-black uppercase tracking-[0.4px] text-white">
                            {item.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  BOTTOM CTA STATUS
              ================================================== */}

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-brand-10 bg-brand-5 px-3.5 py-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand-70">
                  <MapPinned size={14} />
                </div>

                <div className="flex-1">
                  <div className="text-[8px] font-black uppercase tracking-[0.7px] text-brand-90">
                    Find Your Opportunity
                  </div>

                  <p className="mt-0.5 text-[8px] leading-3.5 text-brand-ink/50">
                    Check whether your preferred territory is available.
                  </p>
                </div>

                <ArrowRight size={14} className="shrink-0 text-brand-70" />
              </div>
            </div>

            {/* =================================================
                FLOATING CARD — BUSINESS
            ================================================== */}

            <div className="absolute -left-4 top-[125px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Users size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    PARTNER
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Local Entrepreneur
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING CARD — DIGITAL
            ================================================== */}

            <div className="absolute -right-4 bottom-[150px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <CloudCog size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    SUPPORT
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Digital Ecosystem
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

const Franchise = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [territoryForm, setTerritoryForm] = useState({
    state: "",
    district: "",
    area: "",
    pin: "",
  });

  const [territoryResult, setTerritoryResult] = useState(null);
  const [checkingTerritory, setCheckingTerritory] = useState(false);

  const territoryStatus = useMemo(() => {
    const pin = territoryForm.pin.trim();

    if (!pin) return null;

    const numericPin = Number(pin);

    // Demo state only.
    // Replace this with your territory availability API.
    if (numericPin % 3 === 0) return "appointed";
    if (numericPin % 2 === 0) return "evaluation";

    return "available";
  }, [territoryForm.pin]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % APPLICATION_STEPS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const handleTerritoryCheck = (event) => {
    event.preventDefault();

    if (
      !territoryForm.state ||
      !territoryForm.district ||
      !territoryForm.area ||
      territoryForm.pin.length !== 6
    ) {
      setTerritoryResult("invalid");
      return;
    }

    setCheckingTerritory(true);

    window.setTimeout(() => {
      setTerritoryResult(territoryStatus || "available");
      setCheckingTerritory(false);
    }, 700);
  };

  const resultConfig =
    territoryResult && territoryResult !== "invalid"
      ? TERRITORY_DATA[territoryResult]
      : null;

  return (
    <div className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <FranchiseHero />

      {/* =========================================================
          CHOOSE YOUR MODEL
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <SectionHeading
            eyebrow="CHOOSE YOUR MODEL"
            title="Two ways to become Dr. Saab."
            description="Choose the operating model that best fits your territory, technical capability and enterprise goals."
            centered
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
            {FRANCHISE_MODELS.map((model) => (
              <FranchiseModelCard key={model.type} model={model} />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          WHO CAN APPLY
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="WHO CAN APPLY?"
                title="Built for technical people. Open to new entrepreneurs."
                description="The franchise ecosystem is designed to bring existing technical capability and new entrepreneurship into the future-ready EV and energy service market."
              />

              <div className="mt-8 rounded-[26px] bg-brand-95 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lime text-brand-95">
                    <Users size={21} />
                  </div>

                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-lime">
                      Applicant Ecosystem
                    </div>

                    <div className="mt-1 text-sm font-black">
                      Skills + Enterprise
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-6 text-white/45">
                  Whether you already operate a workshop or are entering the
                  technical services ecosystem, your profile can be evaluated
                  against the applicable model requirements.
                </p>
              </div>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {APPLICANT_TYPES.map((applicant, index) => (
                <div
                  key={applicant.title}
                  className="group flex items-center gap-3 rounded-xl border border-brand-10 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-60/30 hover:bg-brand-5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-5 text-brand-70 transition-colors group-hover:bg-brand-lime group-hover:text-brand-95">
                    {applicant.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-black leading-5 text-brand-95">
                      {applicant.title}
                    </div>
                  </div>

                  <span className="text-[8px] font-black text-brand-60/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          WHAT DR SAAB MAY PROVIDE
      ========================================================== */}
      <section className="bg-brand-95 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <SectionHeading
            light
            eyebrow="WHAT DR. SAAB MAY PROVIDE"
            title="An ecosystem around your enterprise."
            description="The support ecosystem can combine brand, technical, operational, technology and business enablement."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-lime/20 hover:bg-white/[0.055]"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-lime text-brand-95">
                      <Icon size={21} />
                    </div>

                    <span className="text-[9px] font-black text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-sm font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand-lime/10 bg-brand-lime/[0.04] p-5">
            <ShieldCheck className="shrink-0 text-brand-lime" size={19} />

            <p className="text-xs leading-6 text-white/50">
              Support, equipment, training and finance facilitation are subject
              to the applicable model, eligibility, programme conditions and
              operational requirements.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          APPLICATION JOURNEY
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <SectionHeading
            eyebrow="APPLICATION JOURNEY"
            title="From application to launch."
            description="A structured nine-step process takes the applicant from initial interest through screening, territory assessment, training and enterprise launch."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Vertical progress */}
            <div className="relative">
              <div className="absolute bottom-5 left-[22px] top-5 w-px bg-brand-10" />

              <div
                className="absolute left-[22px] top-5 w-px bg-brand-60 transition-all duration-500"
                style={{
                  height: `${(activeStep / (APPLICATION_STEPS.length - 1)) * 100}%`,
                }}
              />

              <div className="relative space-y-2">
                {APPLICATION_STEPS.map((step, index) => {
                  const active = index === activeStep;
                  const completed = index < activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`relative flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-all ${
                        active
                          ? "bg-brand-95 text-white shadow-lg shadow-brand-95/10"
                          : "hover:bg-white"
                      }`}
                    >
                      <div
                        className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border-4 ${
                          active
                            ? "border-brand-lime bg-brand-lime text-brand-95"
                            : completed
                              ? "border-brand-5 bg-brand-60 text-white"
                              : "border-white bg-white text-brand-60"
                        }`}
                      >
                        {completed ? <Check size={16} /> : step.icon}
                      </div>

                      <div className="flex-1">
                        <div
                          className={`text-[9px] font-black uppercase tracking-[0.8px] ${
                            active ? "text-brand-lime" : "text-brand-60"
                          }`}
                        >
                          {step.number}
                        </div>

                        <div
                          className={`mt-0.5 text-sm font-black ${
                            active ? "text-white" : "text-brand-95"
                          }`}
                        >
                          {step.title}
                        </div>
                      </div>

                      <ChevronRight
                        size={15}
                        className={
                          active ? "text-brand-lime" : "text-slate-300"
                        }
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <div className="relative overflow-hidden rounded-[30px] bg-brand-95 p-7 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-brand-lime/10" />

              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/5" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                    {APPLICATION_STEPS[activeStep].icon}
                  </div>

                  <div className="text-right">
                    <div className="text-5xl font-black text-white/10">
                      {APPLICATION_STEPS[activeStep].number}
                    </div>
                    <div className="text-[8px] font-black uppercase tracking-[1px] text-white/25">
                      of {APPLICATION_STEPS.length}
                    </div>
                  </div>
                </div>

                <div className="mt-12 max-w-xl">
                  <div className="text-[9px] font-black uppercase tracking-[1.2px] text-brand-lime">
                    APPLICATION STEP
                  </div>

                  <h3 className="mt-3 text-3xl font-black tracking-[-1px]">
                    {APPLICATION_STEPS[activeStep].title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {APPLICATION_STEPS[activeStep].description}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.8px] text-white/30">
                    <span>Application progress</span>
                    <span>
                      {activeStep + 1}/{APPLICATION_STEPS.length}
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand-lime transition-all duration-500"
                      style={{
                        width: `${
                          ((activeStep + 1) / APPLICATION_STEPS.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-xs font-black text-brand-lime">01</div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.6px] text-white/30">
                      Apply
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-xs font-black text-brand-lime">05</div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.6px] text-white/30">
                      Document
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <div className="text-xs font-black text-brand-lime">09</div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.6px] text-white/30">
                      Launch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          TERRITORY CHECKER
      ========================================================== */}
      <section
        id="territory-checker"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <SectionContainer>
          <div className="overflow-hidden rounded-[32px] border border-brand-10 bg-brand-5">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left */}
              <div className="relative overflow-hidden bg-brand-95 p-7 text-white sm:p-10 lg:p-12">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-brand-lime/10" />

                <div className="relative">
                  <Eyebrow light>TERRITORY CHECKER</Eyebrow>

                  <h2 className="mt-4 text-3xl font-black tracking-[-1.2px] sm:text-4xl">
                    Is Dr. Saab
                    <span className="block text-brand-lime">
                      Available in Your Area?
                    </span>
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    Check your preferred territory before starting your
                    application.
                  </p>

                  <div className="mt-10 space-y-3">
                    {[
                      "State",
                      "District",
                      "City / Block / Panchayat",
                      "PIN Code",
                    ].map((label, index) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 text-xs text-white/50"
                      >
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 text-[8px] font-black text-brand-lime">
                          {index + 1}
                        </span>

                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-7 sm:p-10 lg:p-12">
                <form onSubmit={handleTerritoryCheck}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[9px] font-black uppercase tracking-[0.9px] text-brand-70">
                        State
                      </span>

                      <select
                        value={territoryForm.state}
                        onChange={(e) =>
                          setTerritoryForm((current) => ({
                            ...current,
                            state: e.target.value,
                          }))
                        }
                        className="mt-2 w-full rounded-xl border border-brand-10 bg-white px-4 py-3 text-sm font-medium text-brand-ink outline-none transition focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                      >
                        <option value="">Select State</option>
                        <option>Uttar Pradesh</option>
                        <option>Delhi</option>
                        <option>Haryana</option>
                        <option>Rajasthan</option>
                        <option>Maharashtra</option>
                        <option>Madhya Pradesh</option>
                        <option>Bihar</option>
                        <option>Gujarat</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[9px] font-black uppercase tracking-[0.9px] text-brand-70">
                        District
                      </span>

                      <input
                        type="text"
                        value={territoryForm.district}
                        onChange={(e) =>
                          setTerritoryForm((current) => ({
                            ...current,
                            district: e.target.value,
                          }))
                        }
                        placeholder="Enter district"
                        className="mt-2 w-full rounded-xl border border-brand-10 bg-white px-4 py-3 text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-300 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[9px] font-black uppercase tracking-[0.9px] text-brand-70">
                        City / Block / Panchayat
                      </span>

                      <input
                        type="text"
                        value={territoryForm.area}
                        onChange={(e) =>
                          setTerritoryForm((current) => ({
                            ...current,
                            area: e.target.value,
                          }))
                        }
                        placeholder="Enter your area"
                        className="mt-2 w-full rounded-xl border border-brand-10 bg-white px-4 py-3 text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-300 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[9px] font-black uppercase tracking-[0.9px] text-brand-70">
                        PIN Code
                      </span>

                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={territoryForm.pin}
                        onChange={(e) =>
                          setTerritoryForm((current) => ({
                            ...current,
                            pin: e.target.value.replace(/\D/g, ""),
                          }))
                        }
                        placeholder="6-digit PIN"
                        className="mt-2 w-full rounded-xl border border-brand-10 bg-white px-4 py-3 text-sm font-medium tracking-[2px] text-brand-ink outline-none transition placeholder:tracking-normal placeholder:text-slate-300 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={checkingTerritory}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand-90 px-5 py-3.5 text-xs font-black text-white transition-all hover:-translate-y-0.5 hover:bg-brand-80 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {checkingTerritory ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Checking Territory...
                      </>
                    ) : (
                      <>
                        Check Territory
                        <Search className="ml-2" size={15} />
                      </>
                    )}
                  </button>

                  {territoryResult === "invalid" && (
                    <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                      <X className="mt-0.5 shrink-0" size={17} />

                      <div>
                        <div className="text-xs font-black">
                          Complete the required fields
                        </div>

                        <p className="mt-1 text-[11px] leading-5">
                          Enter your state, district, area and a valid six-digit
                          PIN code.
                        </p>
                      </div>
                    </div>
                  )}

                  {resultConfig && (
                    <div
                      className={`mt-5 rounded-2xl border p-5 ${resultConfig.className}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">{resultConfig.icon}</div>

                        <div>
                          <div className="flex items-center gap-2 text-sm font-black">
                            <span
                              className={`h-2 w-2 rounded-full ${resultConfig.dot}`}
                            />
                            {resultConfig.label}
                          </div>

                          <p className="mt-2 text-xs leading-6 opacity-75">
                            {resultConfig.description}
                          </p>

                          <div className="mt-4">
                            <Button href="#apply" className="px-4 py-2">
                              Continue Application
                              <ArrowRight className="ml-2" size={13} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="mt-5 text-center text-[9px] leading-5 text-slate-400">
                    Territory status is indicative and subject to verification
                    during the application and territory assessment process.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section id="apply" className="bg-brand-90 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                <Handshake size={24} />
              </div>

              <Eyebrow light className="mt-6">
                START YOUR JOURNEY
              </Eyebrow>

              <h2 className="mt-4 text-3xl font-black tracking-[-1.5px] text-white sm:text-5xl">
                Ready to become the
                <span className="block text-brand-lime">
                  Dr. Saab of your area?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-[15px]">
                Choose your model, check your territory and take the first step
                toward building a future-ready technical service enterprise.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/apply" className="px-7 py-3">
                  Apply Now
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="#territory-checker"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Check Your Territory
                  <MapPin className="ml-2" size={15} />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[9px] font-black uppercase tracking-[0.8px] text-white/30">
                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  Panchayat Model
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  City Model
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check size={12} className="text-brand-lime" />
                  Technical Ecosystem
                </span>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
};

export default Franchise;
