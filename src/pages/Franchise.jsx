import { useEffect, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Bolt,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  Cpu,
  Crosshair,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Landmark,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
  SolarPanel,
  Store,
  Truck,
  Users,
  Wrench,
  Zap,
  CheckCircle2,
  CircleDollarSign,
  CloudCog,
  Drone,
  MapPinned,
  Network,
  Sun,
} from "lucide-react";

import { Button, Eyebrow, SectionContainer } from "../components/ui/UI";

// SETTING ICON
const SettingsIcon = () => {
  return <Wrench size={21} />;
};

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

// REUSABLE HEADING  COMPONENT
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
          className={`mt-5 max-w-4xl text-sm leading-7 sm:text-[17px] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

// FRANCHISE MODEL CARD
const FranchiseModelCard = ({ model }) => {
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
};

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

// FRANCHISE HERO COMPONENT
const FranchiseHero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full bg-brand-10/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[520px] w-[520px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 xl:grid-cols-[0.86fr_1.14fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-[512px]">
            <Eyebrow>DR. SAAB FRANCHISE</Eyebrow>

            <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-1.9px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              Become the Dr. Saab
              <span className="block text-brand-70">of Your Area.</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[14px] leading-6 text-brand-ink/65 sm:text-[17px] sm:leading-7">
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
                  <Icon size={12} className="text-brand-70" />

                  <span className="text-[11px] font-black uppercase tracking-[0.5px] text-brand-90">
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

              <Button href="/contact-us" variant="outline">
                Check Your Territory
              </Button>
            </div>

            {/* Trust points */}
            <div className="mt-7 grid max-w-[470px] grid-cols-3 border-t border-brand-10 pt-5">
              <div className="border-r border-brand-10 pr-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[12px] font-black text-brand-95">
                    Training
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-3 text-brand-ink/45">
                  Technical capability
                </p>
              </div>

              <div className="border-r border-brand-10 px-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[12px] font-black text-brand-95">
                    Network
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-3 text-brand-ink/45">
                  Connected support
                </p>
              </div>

              <div className="pl-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-brand-60" />

                  <span className="text-[12px] font-black text-brand-95">
                    Territory
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-3 text-brand-ink/45">
                  Local opportunity
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — FRANCHISE OPPORTUNITY DASHBOARD */}
          <div id="territory-checker" className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-brand-10 bg-white p-4 shadow-[0_25px_70px_rgba(7,95,69,0.11)] sm:p-5 lg:p-6">
              {/* =================================================
                  DASHBOARD HEADER
              ================================================== */}

              <div className="flex items-center justify-between border-b border-brand-5 pb-5">
                <div>
                  <div className="text-[12px] font-black uppercase tracking-[1.2px] text-brand-60">
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

              {/* FRANCHISE TYPES */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-brand-10 bg-brand-5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-70">
                      <Truck size={16} />
                    </div>

                    <span className="rounded-full bg-brand-lime/50 px-2 py-1 text-[10px] font-black uppercase tracking-[0.5px] text-brand-95">
                      Rural
                    </span>
                  </div>

                  <div className="mt-4 text-[14px] font-black text-brand-95">
                    Panchayat Franchise
                  </div>

                  <p className="mt-1 text-[11px] leading-4 text-brand-ink/50">
                    Mobile service enterprise for a Panchayat and surrounding
                    villages.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-10 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-5 text-brand-70">
                      <Wrench size={16} />
                    </div>

                    <span className="rounded-full bg-brand-5 px-2 py-1 text-[10px] font-black uppercase tracking-[0.5px] text-brand-70">
                      Urban
                    </span>
                  </div>

                  <div className="mt-4 text-[14px] font-black text-brand-95">
                    City Franchise
                  </div>

                  <p className="mt-1 text-[11px] leading-4 text-brand-ink/50">
                    Connected EV, battery, fleet and roadside service network.
                  </p>
                </div>
              </div>

              {/* TECHNOLOGY COVERAGE */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <div className="text-1px] font-black uppercase tracking-[0.9px] text-brand-ink/45">
                    BUSINESS VERTICALS
                  </div>

                  <div className="text-[10px] font-bold text-brand-60">
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

                      <span className="mt-1.5 text-[10px] font-black uppercase tracking-[0.4px] text-brand-90">
                        {label}
                      </span>

                      <Check size={10} className="mt-1 text-brand-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* SUPPORT ECOSYSTEM */}
              <div className="mt-5 rounded-2xl bg-brand-95 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[1px] text-brand-lime">
                      DR. SAAB ECOSYSTEM
                    </div>

                    <div className="mt-1 text-[14px] font-black text-white">
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
                          <div className="text-[10px] font-bold text-white/40">
                            {item.number}
                          </div>

                          <div className="text-[11px] font-black uppercase tracking-[0.4px] text-white">
                            {item.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM CTA STATUS */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-brand-10 bg-brand-5 px-3.5 py-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand-70">
                  <MapPinned size={14} />
                </div>

                <div className="flex-1">
                  <div className="text-[12px] font-black uppercase tracking-[0.7px] text-brand-90">
                    Find Your Opportunity
                  </div>

                  <p className="mt-0.5 text-[12px] leading-3.5 text-brand-ink/50">
                    Check whether your preferred territory is available.
                  </p>
                </div>

                <ArrowRight size={14} className="shrink-0 text-brand-70" />
              </div>
            </div>

            {/* FLOATING CARD — BUSINESS */}
            <div className="absolute -left-4 top-[125px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Users size={13} />
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    PARTNER
                  </div>

                  <div className="text-[12px] font-black text-brand-95">
                    Local Entrepreneur
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD — DIGITAL */}
            <div className="absolute -right-4 bottom-[150px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <CloudCog size={13} />
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    SUPPORT
                  </div>

                  <div className="text-[12px] font-black text-brand-95">
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
};

const Franchise = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % APPLICATION_STEPS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <FranchiseHero />

      {/* CHOOSE YOUR MODEL */}
      <section className="bg-brand-5 py-8 sm:py-12 lg:py-14">
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

      {/* WHO CAN APPLY */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="WHO CAN APPLY?"
                title="Built for technical people. Open to new entrepreneurs."
                description="The franchise ecosystem is designed to bring existing technical capability and new entrepreneurship into the future-ready EV and energy service market."
              />
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
                    <div className="text-base font-black leading-5 text-brand-95">
                      {applicant.title}
                    </div>
                  </div>

                  <span className="text-[10px] font-black text-brand-60/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* WHAT DR SAAB MAY PROVIDE */}
      <section className="bg-brand-95 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <SectionHeading
            light
            eyebrow="WHAT DR. SAAB MAY PROVIDE"
            title="An ecosystem around your enterprise."
            description="The support ecosystem can combine brand, technical, operational, technology and business enablement."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

                    <span className="text-[11px] font-black text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand-lime/10 bg-brand-lime/[0.04] p-5">
            <ShieldCheck className="shrink-0 text-brand-lime" size={19} />

            <p className="text-sm leading-6 text-white/50">
              Support, equipment, training and finance facilitation are subject
              to the applicable model, eligibility, programme conditions and
              operational requirements.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* APPLICATION JOURNEY */}
      <section className="bg-brand-5 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
            <div>
              <Eyebrow>APPLICATION JOURNEY</Eyebrow>
              <h2 className="mt-3 text-3xl font-black tracking-[-1.5px] text-brand-95 sm:text-4xl lg:text-[48px]">
                From application to launch.
              </h2>
            </div>

            <p className="max-w-4xl text-base leading-7 text-slate-600 sm:text-[17px] lg:mb-1">
              A structured nine-step process takes the applicant from initial
              interest through screening, territory assessment, training and
              enterprise launch.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-b border-brand-90/10 pb-3">
            <span className="text-[12px] font-black uppercase tracking-[1px] text-brand-ink/45">
              Explore the journey
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[12px] font-bold text-brand-70 shadow-sm">
              9 steps
            </span>
          </div>

          <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start xl:gap-6">
            {/* Application steps */}
            <div className="grid content-start grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {APPLICATION_STEPS.map((step, index) => {
                const active = index === activeStep;
                const completed = index < activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-pressed={active}
                    className={`group relative flex min-h-[68px] w-full items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-60 focus-visible:ring-offset-2 ${
                      active
                        ? "border-brand-95 bg-brand-95 text-white shadow-md shadow-brand-95/15"
                        : "border-brand-90/10 bg-white text-brand-95 hover:-translate-y-0.5 hover:border-brand-60/30 hover:shadow-sm"
                    }`}
                  >
                    <div
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                        active
                          ? "bg-brand-lime text-brand-95"
                          : completed
                            ? "bg-brand-60 text-white"
                            : "bg-brand-5 text-brand-70"
                      }`}
                    >
                      {completed ? <Check size={16} /> : step.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-[12px] font-black uppercase tracking-[0.8px] ${
                          active ? "text-brand-lime" : "text-brand-60"
                        }`}
                      >
                        {step.number}
                      </div>

                      <div
                        className="mt-0.5 text-[15px] font-black leading-snug xl:text-xs"
                      >
                        {step.title}
                      </div>
                    </div>

                    <ChevronRight
                      size={14}
                      className={`shrink-0 transition-transform ${
                        active
                          ? "translate-x-0.5 text-brand-lime"
                          : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-brand-60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="relative overflow-hidden rounded-[24px] bg-brand-95 p-5 text-white sm:p-6">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-brand-lime/10" />
              <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full border border-white/5" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-lime text-brand-95">
                      {APPLICATION_STEPS[activeStep].icon}
                    </div>
                    <span className="text-[14px] font-black uppercase tracking-[1px] text-brand-lime">
                      Current step
                    </span>
                  </div>

                  <span className="text-5xl font-black leading-none text-white/10">
                    {APPLICATION_STEPS[activeStep].number}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-black tracking-[-1px] sm:text-2xl">
                    {APPLICATION_STEPS[activeStep].title}
                  </h3>

                  <p className="mt-3 min-h-[3rem] text-sm leading-6 text-white/65">
                    {APPLICATION_STEPS[activeStep].description}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.8px] text-white/35">
                    <span>Application progress</span>
                    <span>
                      {activeStep + 1}/{APPLICATION_STEPS.length}
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
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
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* FINAL CTA */}
      <section id="apply" className="bg-brand-90 py-8 sm:py-12">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                <Handshake size={24} />
              </div>

              <Eyebrow light className="mt-3">
                START YOUR JOURNEY
              </Eyebrow>

              <h2 className="mt-4 text-3xl font-black tracking-[-1.5px] text-white sm:text-5xl">
                Ready to become the
                <span className="block text-brand-lime">
                  Dr. Saab of your area?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-[15px]">
                Choose your model, check your territory and take the first step
                toward building a future-ready technical service enterprise.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact-us" className="px-7 py-3">
                  Apply Now
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                {/* <Button
                  href="#territory-checker"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Check Your Territory
                  <MapPin className="ml-2" size={15} />
                </Button> */}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[12px] font-black uppercase tracking-[0.8px] text-white/30">
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
