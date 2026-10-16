import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import {
  AlertTriangle,
  ArrowRight,
  BatteryCharging,
  Bike,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Headphones,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  ShieldCheck,
  Smartphone,
  SolarPanel,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";
import MechanicForm from "../components/forms/MechanicForm";
import { getFormErrorMessages } from "../components/forms/fields/formErrorUtils";
import { useCreateMechanicApplicationMutation } from "../features/mechanicApplications/mechanicApplicationApi";

const SUPPORT_OPTIONS = [
  {
    title: "Call Support",
    description: "Talk to the Dr. Saab support team.",
    action: "Call Now",
    href: "tel:+919728395138",
    icon: <Phone size={23} />,
    badge: "DIRECT SUPPORT",
  },
  {
    title: "WhatsApp Support",
    description: "Send your service requirement directly to the support team.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/919728395138",
    icon: <MessageCircle size={23} />,
    badge: "FAST RESPONSE",
  },
  {
    title: "Book a Service",
    description: "Request a technician for your service requirement.",
    action: "Book Service",
    href: "/contact-us",
    icon: <Wrench size={23} />,
    badge: "SERVICE REQUEST",
  },
  {
    title: "Find Service Area",
    description: "Check Dr. Saab availability in your area.",
    action: "Check Availability",
    href: "/contact-us",
    icon: <MapPin size={23} />,
    badge: "AVAILABILITY",
  },
];

const QUICK_HELP = [
  {
    title: "EV Support",
    description:
      "Diagnostics, mobility issues, charging support and technical assistance.",
    icon: <Zap size={22} />,
  },
  {
    title: "Battery Support",
    description:
      "Battery health, testing, emergency battery and related support.",
    icon: <BatteryCharging size={22} />,
  },
  {
    title: "Drone Support",
    description:
      "Agricultural drone technical support and service coordination.",
    icon: <Bot size={22} />,
  },
  {
    title: "Solar & Inverter",
    description:
      "Technical support for eligible solar and inverter requirements.",
    icon: <SolarPanel size={22} />,
  },
  {
    title: "Roadside Assistance",
    description: "Support for eligible breakdown and mobility emergencies.",
    icon: <Truck size={22} />,
  },
  {
    title: "Fleet Support",
    description:
      "Structured service support for commercial EV and distributed fleets.",
    icon: <Bike size={22} />,
  },
  {
    title: "Spare Parts",
    description: "Help with genuine and compatible spare-parts coordination.",
    icon: <Wrench size={22} />,
  },
];

const FAQS = [
  {
    question: "What is Dr. Saab?",
    answer:
      "Dr. Saab is an organised network for technical service, mechanic upgradation and entrepreneurship across EV, battery, drone and solar technologies.",
  },
  {
    question: "Is Dr. Saab only for rural areas?",
    answer:
      "No. Dr. Saab can operate through separate Panchayat, town and urban operating models depending on territory, demand and business feasibility.",
  },
  {
    question: "Can an existing mechanic apply?",
    answer:
      "Yes. Existing mechanics can apply, subject to the applicable assessment, technical requirements, training and territory availability.",
  },
  {
    question: "Can a new entrepreneur apply?",
    answer:
      "Yes. New entrepreneurs can apply subject to assessment, training, investment readiness and territory availability.",
  },
  {
    question: "Is finance guaranteed?",
    answer:
      "No. Finance is not guaranteed. Loan sanction, subsidy, interest support, moratorium and repayment terms remain subject to applicant eligibility, lender appraisal and applicable programme guidelines.",
  },
  {
    question: "Does Dr. Saab provide major vehicle repairs?",
    answer:
      "Major or warranty-related repairs may be referred to authorised service centres depending on the vehicle, product, issue, technician capability and applicable authorisation.",
  },
  {
    question: "How can customers book a service?",
    answer:
      "Customers can book through the website, WhatsApp, mobile application or customer-support number.",
  },
  {
    question: "How is a territory selected?",
    answer:
      "Territories may be assessed based on factors such as demand, population, EV usage, existing network coverage, technical capability and overall business feasibility.",
  },
];

const CONTACT_DETAILS = [
  {
    label: "Support Phone",
    value: "+91 97283 95138",
    icon: <Phone size={18} />,
  },
  {
    label: "WhatsApp",
    value: "+91 97283 95138",
    icon: <MessageCircle size={18} />,
  },
];

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
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-[17px] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

const SupportOptionCard = ({ option }) => {
  const isExternal =
    option.href.startsWith("tel:") || option.href.startsWith("https://");

  return (
    <div className="group rounded-[22px] border border-brand-10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5 sm:p-6">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-5 text-brand-70 transition-colors group-hover:bg-brand-lime group-hover:text-brand-95">
          {option.icon}
        </div>

        <span className="rounded-full bg-brand-5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.9px] text-brand-70">
          {option.badge}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-black text-brand-95">
        {option.title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
        {option.description}
      </p>

      <div className="mt-5">
        {isExternal ? (
          <a
            href={option.href}
            target={option.href.startsWith("https://") ? "_blank" : undefined}
            rel={
              option.href.startsWith("https://")
                ? "noopener noreferrer"
                : undefined
            }
            className="inline-flex items-center text-[13px] font-black uppercase tracking-[0.8px] text-brand-70 transition-colors hover:text-brand-60"
          >
            {option.action}
            <ArrowRight
              size={13}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </a>
        ) : (
          <a
            href={option.href}
            className="inline-flex items-center text-[12px] font-black uppercase tracking-[0.8px] text-brand-70 transition-colors hover:text-brand-60"
          >
            {option.action}
            <ArrowRight
              size={13}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </a>
        )}
      </div>
    </div>
  );
};

// SUPPORT HERO CONSTANT
const SUPPORT_ACTIONS = [
  {
    title: "Book a Service",
    description: "Need technical assistance?",
    icon: CalendarCheck,
  },
  {
    title: "Technical Help",
    description: "Have a technical issue?",
    icon: Wrench,
  },
  {
    title: "Roadside Support",
    description: "Need urgent assistance?",
    icon: ShieldCheck,
  },
  {
    title: "Follow-up",
    description: "Check an existing request",
    icon: Search,
  },
];

const SupportAction = ({ action, active, onClick }) => {
  const Icon = action.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-2xl border p-3.5 text-left transition-all duration-200 sm:p-4 ${
        active
          ? "border-brand-60 bg-brand-90 text-white shadow-[0_12px_30px_rgba(7,95,69,0.18)]"
          : "border-brand-10 bg-white text-brand-95 hover:-translate-y-0.5 hover:border-brand-60 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
            active ? "bg-white/10 text-brand-lime" : "bg-brand-5 text-brand-70"
          }`}
        >
          <Icon size={16} />
        </div>

        <div className="min-w-0 flex-1">
          <div
            className={`text-[14px] font-black uppercase tracking-[0.4px] ${
              active ? "text-white" : "text-brand-95"
            }`}
          >
            {action.title}
          </div>

          <div
            className={`mt-1 text-[10px] leading-3.5 ${
              active ? "text-white/55" : "text-brand-ink/45"
            }`}
          >
            {action.description}
          </div>
        </div>

        <ChevronRight
          size={14}
          className={`shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
            active ? "text-brand-lime" : "text-brand-ink/25"
          }`}
        />
      </div>
    </button>
  );
};

const SupportConsole = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[28px] border border-brand-10 bg-white p-4 shadow-[0_25px_70px_rgba(7,95,69,0.11)] sm:p-5 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-5 pb-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-90 text-white">
              <Headphones size={18} />
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-[1.1px] text-brand-60">
                SUPPORT DESK
              </div>

              <div className="mt-1 text-[15px] font-black text-brand-95 sm:text-[17px]">
                What do you need help with?
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-brand-5 px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-60" />

            <span className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-70">
              Online
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {SUPPORT_ACTIONS.map((action, index) => (
            <SupportAction
              key={action.title}
              action={action}
              active={active === index}
              onClick={() => setActive(index)}
            />
          ))}
        </div>

        {/* Active request panel */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-brand-95 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[1px] text-brand-lime">
                SELECTED SUPPORT
              </div>

              <div className="mt-1 text-[16px] font-black text-white">
                {SUPPORT_ACTIONS[active].title}
              </div>

              <p className="mt-1 max-w-[320px] text-[11px] leading-4 text-white/50">
                {SUPPORT_ACTIONS[active].description} We'll guide you to the
                appropriate next step.
              </p>
            </div>

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand-lime">
              {(() => {
                const Icon = SUPPORT_ACTIONS[active].icon;
                return <Icon size={16} />;
              })()}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/contact-us"
              className="inline-flex items-center rounded-lg bg-brand-lime px-3 py-2 text-[8px] font-black uppercase tracking-[0.5px] text-brand-95 transition hover:-translate-y-0.5"
            >
              Continue
              <ArrowRight size={11} className="ml-1.5" />
            </a>

            <a
              href="https://wa.me/911800000000"
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[8px] font-black uppercase tracking-[0.5px] text-white transition hover:bg-white/10"
            >
              <MessageCircle size={11} className="mr-1.5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Response information */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-xl bg-brand-5 px-3 py-2.5">
            <Clock3 size={13} className="text-brand-70" />

            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.5px] text-brand-ink/40">
                SUPPORT
              </div>

              <div className="text-[11px] font-black text-brand-90">
                Guided Assistance
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-brand-5 px-3 py-2.5">
            <Smartphone size={13} className="text-brand-70" />

            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.5px] text-brand-ink/40">
                CHANNELS
              </div>

              <div className="text-[11px] font-black text-brand-90">
                Digital + Phone
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating support card */}
      <div className="absolute -left-4 top-[130px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
            <MessageCircle size={13} />
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
              SUPPORT
            </div>

            <div className="text-[11px] font-black text-brand-95">
              Talk to Us
            </div>
          </div>
        </div>
      </div>

      {/* Floating status */}
      <div className="absolute -right-4 bottom-[115px] z-20 hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
            <CheckCircle2 size={13} />
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
              STATUS
            </div>

            <div className="text-[11px] font-black text-brand-95">
              Help Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportHero = ({ onApply }) => {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-10/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[480px] w-[480px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-8 sm:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:grid-cols-[0.86fr_1.14fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-[500px]">
            <Eyebrow>DR. SAAB SUPPORT</Eyebrow>

            <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-1.8px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              How Can We
              <span className="block text-brand-70">Help You?</span>
            </h1>

            <p className="mt-5 max-w-[450px] text-[14px] leading-6 text-brand-ink/65 sm:text-[17px] sm:leading-7">
              Get the right support path without searching through multiple
              channels. Tell us what you need and we'll help you take the next
              step.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Button type="button" onClick={onApply}>
                Mechanic Registration
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="tel:+919728395138" variant="outline">
                <PhoneCall className="mr-2 h-3.5 w-3.5" />
                Talk to Support
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-10 pt-5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-60" />

                <span className="text-[10px] font-black uppercase tracking-[0.5px] text-brand-90">
                  Clear Assistance
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-60" />

                <span className="text-[10px] font-black uppercase tracking-[0.5px] text-brand-90">
                  Guided Support
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-brand-60" />

                <span className="text-[10px] font-black uppercase tracking-[0.5px] text-brand-90">
                  One Place
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — SUPPORT CONSOLE */}
          <SupportConsole />
        </div>
      </SectionContainer>
    </section>
  );
};

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [isMechanicFormOpen, setIsMechanicFormOpen] = useState(false);
  const isMechanicFormRef = useRef(null);
  const [
    createMechanicApplication,
    { isLoading, isSuccess, error, reset: resetMechanicApplication },
  ] = useCreateMechanicApplicationMutation();

  useEffect(() => {
    if (isMechanicFormOpen) {
      isMechanicFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isMechanicFormOpen]);

  const openMechanicForm = () => {
    resetMechanicApplication();

    if (isMechanicFormOpen) {
      isMechanicFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setIsMechanicFormOpen(true);
  };

  const handleMechanicApplicationSubmit = async (payload) => {
    try {
      await createMechanicApplication(payload).unwrap();
      toast.success("Application submitted", {
        description:
          "Thank you for applying. Our team will review your details and contact you.",
      });
    } catch (err) {
      console.error("Mechanic application submission failed:", err);
      toast.error("Application could not be submitted", {
        description: getFormErrorMessages(
          err,
          "We couldn't submit your application. Please try again.",
        ).join(" "),
      });
      throw err;
    }
  };

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return FAQS;

    return FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query),
    );
  }, [searchQuery]);
  const faqColumnSplit = Math.ceil(filteredFaqs.length / 2);
  const faqColumns = [
    filteredFaqs.slice(0, faqColumnSplit),
    filteredFaqs.slice(faqColumnSplit),
  ];

  const renderFaqItem = (faq) => {
    const isOpen = openFaq === faq.question;

    return (
      <div
        key={faq.question}
        className={`overflow-hidden rounded-2xl border transition-all ${
          isOpen
            ? "border-brand-60/30 bg-white shadow-sm"
            : "border-brand-10 bg-white"
        }`}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setOpenFaq(isOpen ? null : faq.question)}
          className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
        >
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
              isOpen
                ? "bg-brand-lime text-brand-95"
                : "bg-brand-5 text-brand-70"
            }`}
          >
            <HelpCircle size={17} />
          </span>

          <span className="flex-1 text-sm font-black text-brand-95">
            {faq.question}
          </span>

          <ChevronDown
            size={17}
            className={`shrink-0 text-brand-60 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-brand-10 px-5 pb-6 pt-4 pl-[68px] sm:px-6 sm:pl-[76px]">
              <p className="text-xs leading-6 text-slate-500 sm:text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO */}
      <SupportHero onApply={openMechanicForm} />

      {/* SUPPORT OPTIONS */}
      <section
        id="support-options"
        className="bg-brand-5 py-8 sm:py-12 lg:py-14"
      >
        <SectionContainer>
          <SectionHeading
            eyebrow="SUPPORT OPTIONS"
            title="Choose the fastest way to get help."
            description="Whether you need technical guidance, a service visit or help finding your nearest support option, start here."
            centered
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORT_OPTIONS.map((option) => (
              <SupportOptionCard key={option.title} option={option} />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* QUICK HELP */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <SectionHeading
            eyebrow="QUICK HELP"
            title="What do you need help with?"
            description="Select the technology or service area closest to your requirement."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_HELP.map((item, index) => (
              <a
                href="/our-services"
                key={item.title}
                className="group rounded-2xl border border-brand-10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:bg-brand-5 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <CircleIcon>{item.icon}</CircleIcon>

                  <span className="text-[11px] font-black text-brand-60/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-black text-brand-95">
                  {item.title}
                </h3>

                <p className="mt-2 text-base leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center text-[11px] font-black uppercase tracking-[0.8px] text-brand-70">
                  Get Help
                  <ArrowRight
                    size={12}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* FAQ */}
      <section id="faqs" className="bg-brand-5 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                eyebrow="FREQUENTLY ASKED QUESTIONS"
                title="Quick answers before you call."
                description="Find answers to common questions about Dr. Saab, service availability, operating models and applications."
              />

              {/* Search */}
              <div className="mt-8">
                <label className="relative block">
                  <Search
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search FAQs..."
                    className="w-full rounded-xl border border-brand-10 bg-white py-3.5 pl-11 pr-4 text-sm text-brand-ink outline-none transition focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-95"
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </label>
              </div>
            </div>

            <div>
              {filteredFaqs.length === 0 ? (
                <div className="rounded-2xl border border-brand-10 bg-white p-8 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-5 text-brand-70">
                    <Search size={19} />
                  </div>

                  <h3 className="mt-4 text-sm font-black text-brand-95">
                    No matching FAQ found
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    Try a different search term or contact our support team.
                  </p>
                </div>
              ) : (
                <>
                  <div className="hidden items-start gap-3 sm:grid sm:grid-cols-2">
                    {faqColumns.map((column, columnIndex) => (
                      <div
                        key={columnIndex}
                        className="grid content-start gap-3"
                      >
                        {column.map(renderFaqItem)}
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:hidden">
                    {filteredFaqs.map(renderFaqItem)}
                  </div>
                </>
              )}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* SERVICE DISCLAIMER */}
      <section className="bg-white py-8 sm:py-12">
        <SectionContainer>
          <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <AlertTriangle size={21} />
              </div>

              <div>
                <Eyebrow className="text-amber-700">SERVICE DISCLAIMER</Eyebrow>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-amber-900 sm:text-base">
                  Service availability depends on technician certification,
                  equipment capability, product compatibility, location and
                  partner/OEM authorisation.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CONTACT SUPPORT & FINAL CTA */}
      <section className="bg-brand-5 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex flex-col justify-center overflow-hidden rounded-[28px] bg-brand-95 p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-brand-lime/10" />

              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-lime text-brand-95">
                  <Wrench size={21} />
                </div>

                <Eyebrow light className="mt-5">
                  STILL NEED HELP?
                </Eyebrow>

                <h2 className="mt-3 text-3xl font-black tracking-[-1.2px] sm:text-4xl">
                  Need service?
                  <span className="block text-brand-lime">
                    We're here to help.
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-6 text-white/65">
                  Reach our support team for guidance, service availability or
                  help with your mechanic upgrade application.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button
                    type="button"
                    onClick={openMechanicForm}
                    className="px-5 py-3"
                  >
                    Mechanic Upgrade Registration
                    <ArrowRight className="ml-2 shrink-0" size={15} />
                  </Button>

                  <Button
                    href="#support-options"
                    variant="light"
                    className="border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white hover:text-brand-95"
                  >
                    Contact Support
                    <Phone className="ml-2" size={15} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-brand-10 bg-white p-6 sm:p-8">
              <SectionHeading
                eyebrow="CONTACT DR. SAAB"
                title="Talk to our support team."
                description="If you haven't found the answer you need, reach out directly. Our team can guide you to the right service channel."
              />

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {CONTACT_DETAILS.map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-2xl border border-brand-10 bg-brand-5/40 p-4 sm:p-5"
                  >
                    <CircleIcon>{contact.icon}</CircleIcon>

                    <div className="mt-4 text-[11px] font-black uppercase tracking-[0.8px] text-brand-60">
                      {contact.label}
                    </div>

                    <div className="mt-2 break-words text-sm font-black leading-5 text-brand-95">
                      {contact.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {isMechanicFormOpen && (
        <div ref={isMechanicFormRef} className="mt-8 scroll-mt-24">
          <MechanicForm
            onClose={() => {
              setIsMechanicFormOpen(false);
              resetMechanicApplication();
            }}
            onSubmit={handleMechanicApplicationSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            apiError={error}
          />
        </div>
      )}
    </div>
  );
};

export default Support;
