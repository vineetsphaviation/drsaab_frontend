import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BatteryCharging,
  Bike,
  Bot,
  ChevronDown,
  ChevronRight,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
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

const SUPPORT_OPTIONS = [
  {
    title: "Call Support",
    description: "Talk to the Dr. Saab support team.",
    action: "Call Now",
    href: "tel:+911800000000",
    icon: <Phone size={23} />,
    badge: "DIRECT SUPPORT",
  },
  {
    title: "WhatsApp Support",
    description: "Send your service requirement directly to the support team.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/911800000000",
    icon: <MessageCircle size={23} />,
    badge: "FAST RESPONSE",
  },
  {
    title: "Book a Service",
    description: "Request a technician for your service requirement.",
    action: "Book Service",
    href: "/book-service",
    icon: <Wrench size={23} />,
    badge: "SERVICE REQUEST",
  },
  {
    title: "Find Service Area",
    description: "Check Dr. Saab availability in your area.",
    action: "Check Availability",
    href: "/franchise#territory-checker",
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
    value: "+91 1800 000 000",
    icon: <Phone size={18} />,
  },
  {
    label: "WhatsApp",
    value: "+91 1800 000 000",
    icon: <MessageCircle size={18} />,
  },
  {
    label: "Support Email",
    value: "support@drsaab.in",
    icon: <Mail size={18} />,
  },
];

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

function SupportOptionCard({ option }) {
  const isExternal =
    option.href.startsWith("tel:") || option.href.startsWith("https://");

  return (
    <div className="group rounded-[22px] border border-brand-10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/30 hover:shadow-xl hover:shadow-brand-95/5 sm:p-6">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-5 text-brand-70 transition-colors group-hover:bg-brand-lime group-hover:text-brand-95">
          {option.icon}
        </div>

        <span className="rounded-full bg-brand-5 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.9px] text-brand-70">
          {option.badge}
        </span>
      </div>

      <h3 className="mt-6 text-base font-black text-brand-95">
        {option.title}
      </h3>

      <p className="mt-2 min-h-[48px] text-xs leading-6 text-slate-500">
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
            className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.8px] text-brand-70 transition-colors hover:text-brand-60"
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
            className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.8px] text-brand-70 transition-colors hover:text-brand-60"
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
}

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return FAQS;

    return FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-brand-95 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-brand-lime/10" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-60/10 blur-3xl" />

        <SectionContainer className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-lime/20 bg-brand-lime/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-lime" />

                <span className="text-[9px] font-black uppercase tracking-[1.2px] text-brand-lime">
                  DR. SAAB SUPPORT CENTRE
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-2.5px] sm:text-5xl lg:text-[66px]">
                How Can We
                <span className="block text-brand-lime">Help You?</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
                Technical support, service booking, FAQs and assistance — all in
                one place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#support-options" className="px-6 py-3">
                  Get Support
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="#faqs"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Browse FAQs
                  <HelpCircle className="ml-2" size={15} />
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[9px] font-black uppercase tracking-[0.9px] text-white/35">
                <span className="flex items-center gap-2">
                  <Clock3 size={12} className="text-brand-lime" />
                  Support
                </span>

                <span className="flex items-center gap-2">
                  <Wrench size={12} className="text-brand-lime" />
                  Service
                </span>

                <span className="flex items-center gap-2">
                  <HelpCircle size={12} className="text-brand-lime" />
                  FAQs
                </span>
              </div>
            </div>

            {/* Hero support console */}
            <div className="relative min-h-[380px]">
              <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-white/[0.025]" />

              <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-lime/15" />

              <div className="absolute left-1/2 top-1/2 h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              {/* Central */}
              <div className="absolute left-1/2 top-1/2 z-10 w-[200px] -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-[25px] border border-brand-lime/20 bg-brand-90 p-5 shadow-2xl shadow-black/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase tracking-[1.2px] text-brand-lime">
                      SUPPORT HUB
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] font-bold text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                      ACTIVE
                    </span>
                  </div>

                  <div className="mt-5 grid place-items-center rounded-2xl bg-brand-95 py-6">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-lime text-brand-95">
                      <HeadsetIcon />
                    </div>

                    <div className="mt-3 text-xs font-black text-white">
                      We're Here to Help
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    {[
                      ["CALL", <Phone size={12} />],
                      ["CHAT", <MessageCircle size={12} />],
                      ["SERVICE", <Wrench size={12} />],
                    ].map(([label, icon]) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1 rounded-lg bg-white/[0.05] py-2 text-[7px] font-black text-white/45"
                      >
                        {icon}
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-3 top-8 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:left-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-lime text-brand-95">
                    <Phone size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/30">
                      Support
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      Call
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-3 top-14 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:right-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-brand-lime">
                    <MessageCircle size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/30">
                      Support
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-4 rounded-xl border border-white/10 bg-brand-90/90 p-3 backdrop-blur-md sm:left-8">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-brand-lime">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.8px] text-white/30">
                      Availability
                    </div>
                    <div className="mt-0.5 text-xs font-black text-white">
                      Check Area
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          SUPPORT OPTIONS
      ========================================================== */}
      <section
        id="support-options"
        className="bg-brand-5 py-16 sm:py-20 lg:py-24"
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

      {/* =========================================================
          QUICK HELP
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
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

                  <span className="text-[9px] font-black text-brand-60/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-black text-brand-95">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center text-[9px] font-black uppercase tracking-[0.8px] text-brand-70">
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

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section id="faqs" className="bg-brand-5 py-16 sm:py-20 lg:py-24">
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

            <div className="space-y-2">
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
                filteredFaqs.map((faq, index) => {
                  const actualIndex = FAQS.findIndex(
                    (item) => item.question === faq.question,
                  );

                  const isOpen = openFaq === actualIndex;

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
                        onClick={() => setOpenFaq(isOpen ? -1 : actualIndex)}
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
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
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
                })
              )}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          SERVICE DISCLAIMER
      ========================================================== */}
      <section className="bg-white py-12 sm:py-16">
        <SectionContainer>
          <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <AlertTriangle size={21} />
              </div>

              <div>
                <Eyebrow className="text-amber-700">SERVICE DISCLAIMER</Eyebrow>

                <p className="mt-3 max-w-4xl text-xs leading-6 text-amber-900 sm:text-sm">
                  Service availability depends on technician certification,
                  equipment capability, product compatibility, location and
                  partner/OEM authorisation.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          CONTACT SUPPORT
      ========================================================== */}
      <section className="bg-brand-5 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <SectionHeading
              eyebrow="STILL NEED HELP?"
              title="Talk to the Dr. Saab support team."
              description="If you cannot find the answer you need, reach out directly and our support team can help guide you to the appropriate service channel."
            />

            <div className="grid gap-3 sm:grid-cols-3">
              {CONTACT_DETAILS.map((contact) => (
                <div
                  key={contact.label}
                  className="rounded-2xl border border-brand-10 bg-white p-5"
                >
                  <CircleIcon>{contact.icon}</CircleIcon>

                  <div className="mt-5 text-[9px] font-black uppercase tracking-[0.8px] text-brand-60">
                    {contact.label}
                  </div>

                  <div className="mt-2 break-words text-xs font-black text-brand-95">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-brand-90 py-16 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-brand-95 px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                <Wrench size={24} />
              </div>

              <Eyebrow light className="mt-6">
                READY TO GET STARTED?
              </Eyebrow>

              <h2 className="mt-4 text-3xl font-black tracking-[-1.5px] text-white sm:text-5xl">
                Need service?
                <span className="block text-brand-lime">
                  We're here to help.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
                Book a service, contact support or check availability in your
                area.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/book-service" className="px-7 py-3">
                  Book a Service
                  <ArrowRight className="ml-2" size={15} />
                </Button>

                <Button
                  href="#support-options"
                  variant="light"
                  className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-brand-95"
                >
                  Contact Support
                  <Phone className="ml-2" size={15} />
                </Button>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
}

function HeadsetIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-2v-6h4v4Z" />
      <path d="M3 19a2 2 0 0 0 2 2h2v-6H3v4Z" />
      <path d="M17 21h-2" />
    </svg>
  );
}

export default Support;
