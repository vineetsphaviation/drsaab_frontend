import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Check,
  ClipboardCheck,
  FileText,
  Globe,
  Headphones,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Truck,
  UserCheck,
  Wrench,
  CalendarCheck,
  CheckCircle2,
  FileCheck2,
  SearchCheck,
  Zap,
  X,
} from "lucide-react";

import {
  Button,
  Eyebrow,
  SectionContainer,
  CircleIcon,
} from "../components/ui/UI";
import howItWorksBg from "../assets/images/how_it_works_bg.png";

/* ============================================================
   JOURNEY DATA
============================================================ */

/* ============================================================
   CUSTOMER BENEFITS
============================================================ */

const CUSTOMER_BENEFITS = [
  {
    icon: UserCheck,
    title: "Trained Technician",
    description:
      "Connect with technicians trained to provide first-level technical support.",
  },
  {
    icon: MapPin,
    title: "Doorstep Support",
    description:
      "Get eligible diagnostics and service closer to where your vehicle or equipment is.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Billing",
    description:
      "Clear service details and billing information for greater transparency.",
  },
  {
    icon: FileText,
    title: "Digital Service Record",
    description: "Your service activity and invoice are digitally recorded.",
  },
  {
    icon: Navigation,
    title: "Technical Escalation",
    description:
      "Major or specialised work can be coordinated with authorised facilities.",
  },
  {
    icon: Headphones,
    title: "Follow-up Support",
    description:
      "Feedback and recommended future maintenance help you stay prepared.",
  },
];

/* ============================================================
   BOOKING CHANNELS
============================================================ */

const BOOKING_CHANNELS = [
  {
    icon: Globe,
    title: "Website",
    description: "Submit your requirement online.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Connect through your preferred messaging channel.",
  },
  {
    icon: Smartphone,
    title: "Application",
    description: "Request service through the Dr. Saab application.",
  },
  {
    icon: Phone,
    title: "Support Number",
    description: "Speak with customer support directly.",
  },
];

/* ============================================================
   STEP CARD
============================================================ */


const JOURNEY_STEPS = [
  {
    number: "01",
    title: "BOOK",
    label: "Request Service",
    icon: CalendarCheck,
    channels: BOOKING_CHANNELS,
  },
  {
    number: "02",
    title: "ASSIGN",
    label: "Technician Matched",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "DIAGNOSE",
    label: "Problem Identified",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "SERVICE",
    label: "Repair & Support",
    icon: Wrench,
  },
  {
    number: "05",
    title: "ESCALATE",
    label: "Expert Support",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "RECORD",
    label: "Digital History",
    icon: FileCheck2,
  },
  {
    number: "07",
    title: "FEEDBACK",
    label: "Close the Loop",
    icon: MessageCircle,
  },
];

function JourneyStep({ step, active }) {
  const Icon = step.icon;

  return (
    <div className="relative z-10 flex min-w-[82px] flex-1 flex-col items-center text-center">
      <div
        className={`relative grid h-11 w-11 place-items-center rounded-full border-2 transition-all duration-300 ${
          active
            ? "border-brand-60 bg-brand-90 text-white shadow-[0_8px_20px_rgba(7,95,69,0.2)]"
            : "border-brand-10 bg-white text-brand-70"
        }`}
      >
        <Icon size={16} strokeWidth={2.2} />

        {active && (
          <span className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-lime text-brand-95">
            <CheckCircle2 size={9} />
          </span>
        )}
      </div>

      <div className="mt-2">
        <div className="text-[8px] font-black tracking-[1px] text-brand-60">
          {step.number}
        </div>

        <div className="mt-0.5 text-[9px] font-black tracking-[0.4px] text-brand-95">
          {step.title}
        </div>

        <div className="mt-0.5 hidden text-[8px] leading-3 text-brand-ink/50 sm:block">
          {step.label}
        </div>
      </div>
    </div>
  );
}

function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-10/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:grid-cols-[0.85fr_1.15fr]">
          
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="max-w-[500px]">
            <Eyebrow>HOW DR. SAAB WORKS</Eyebrow>

            <h1 className="mt-4 max-w-[500px] text-[40px] font-black leading-[0.98] tracking-[-1.8px] text-brand-95 sm:text-[48px] lg:text-[52px] xl:text-[56px]">
              From Service Request
              <span className="block text-brand-70">
                to Support.
              </span>
            </h1>

            <p className="mt-5 max-w-[440px] text-[13px] leading-6 text-brand-ink/65 sm:text-[14px] sm:leading-7">
              Dr. Saab brings structure, transparency and technical expertise
              to every service request — from the moment you book to the
              moment your service is completed.
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex max-w-[470px] flex-wrap gap-2">
              {[
                "Simple Booking",
                "Verified Technicians",
                "Digital Records",
                "Transparent Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-10 bg-white px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.5px] text-brand-80 shadow-sm sm:text-[9px]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Button href="/contact-us">
                Book a Service
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="#journey" variant="outline">
                See How It Works
              </Button>
            </div>

            {/* Mini trust row */}
            <div className="mt-7 flex max-w-[450px] items-center gap-3 border-t border-brand-10 pt-5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-90 text-white">
                <Zap size={15} />
              </div>

              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.8px] text-brand-95">
                  One Connected Journey
                </div>

                <p className="mt-0.5 text-[9px] leading-4 text-brand-ink/50">
                  Every request moves through a structured service process.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SERVICE JOURNEY CARD
          ====================================================== */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] border border-brand-10 bg-white p-4 shadow-[0_20px_60px_rgba(7,95,69,0.10)] sm:p-5 lg:p-6">

              {/* Card heading */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[1.2px] text-brand-60">
                    LIVE SERVICE JOURNEY
                  </div>

                  <h2 className="mt-1 text-[14px] font-black text-brand-95 sm:text-[16px]">
                    Your request, step by step
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-brand-5 px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-60" />

                  <span className="text-[7px] font-black uppercase tracking-[0.8px] text-brand-70">
                    Connected
                  </span>
                </div>
              </div>

              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative mt-4 h-[190px] overflow-hidden rounded-[16px] sm:h-[220px] lg:h-[235px]">
                <img
                  src={howItWorksBg}
                  alt="Technician servicing a vehicle"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-95/80 via-brand-95/5 to-transparent" />

                {/* Image status */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-brand-95/80 px-3.5 py-2.5 backdrop-blur-md sm:px-4 sm:py-3">
                  <div>
                    <div className="text-[7px] font-bold uppercase tracking-[1px] text-brand-lime">
                      CURRENT STATUS
                    </div>

                    <div className="mt-0.5 text-[11px] font-black text-white sm:text-[12px]">
                      Technician Assigned
                    </div>
                  </div>

                  <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-lime text-brand-95">
                    <UserCheck size={14} />
                  </div>
                </div>
              </div>

              {/* =================================================
                  JOURNEY
              ================================================== */}
              <div
                id="journey"
                className="relative mt-6 overflow-x-auto pb-1"
              >
                <div className="relative flex min-w-[620px] justify-between px-1">
                  
                  {/* Base connector */}
                  <div className="absolute left-[25px] right-[25px] top-[22px] h-px bg-brand-10" />

                  {/* Active progress */}
                  <div className="absolute left-[25px] top-[22px] h-px w-[28%] bg-brand-60" />

                  {JOURNEY_STEPS.map((step, index) => (
                    <JourneyStep
                      key={step.number}
                      step={step}
                      active={index === 1}
                    />
                  ))}
                </div>
              </div>

              {/* =================================================
                  BOTTOM INFORMATION
              ================================================== */}
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-5 px-3.5 py-3">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-brand-70">
                  <ClipboardCheck size={13} />
                </div>

                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.8px] text-brand-90">
                    Nothing gets lost
                  </div>

                  <p className="mt-0.5 text-[8px] leading-3.5 text-brand-ink/50 sm:text-[9px]">
                    Service details, diagnosis, actions and follow-ups can be
                    maintained as part of your digital service record.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING REQUEST CARD
            ================================================== */}
            <div className="absolute -left-4 top-[105px] hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <CalendarCheck size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    Request
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Received
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING FEEDBACK CARD
            ================================================== */}
            <div className="absolute -right-4 bottom-[105px] hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <CheckCircle2 size={13} />
                </div>

                <div>
                  <div className="text-[7px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    Final Step
                  </div>

                  <div className="text-[9px] font-black text-brand-95">
                    Feedback
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


/* ============================================================
   PAGE
============================================================ */

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const journeyRef = useRef(null);

  /* ------------------------------------------------------------
     Auto-play journey
  ------------------------------------------------------------ */

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((current) =>
        current === JOURNEY_STEPS.length - 1 ? 0 : current + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const selectedStep = JOURNEY_STEPS[activeStep];

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const scrollToJourney = () => {
    journeyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      {/* ========================================================
          HERO
      ========================================================= */}

      <HowItWorksHero />

      {/* ========================================================
          INTRO STRIP
      ========================================================= */}

      <section className="border-b border-brand-10 bg-brand-5">
        <SectionContainer className="grid gap-5 py-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <CircleIcon className="bg-white text-brand-70 shadow-sm">
              <ShieldCheck size={19} />
            </CircleIcon>

            <div>
              <p className="text-xs font-black text-brand-95">Simple</p>

              <p className="text-[10px] text-gray-500">Easy service request</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CircleIcon className="bg-white text-brand-70 shadow-sm">
              <FileText size={19} />
            </CircleIcon>

            <div>
              <p className="text-xs font-black text-brand-95">Digital</p>

              <p className="text-[10px] text-gray-500">
                Service records & invoices
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CircleIcon className="bg-white text-brand-70 shadow-sm">
              <Headphones size={19} />
            </CircleIcon>

            <div>
              <p className="text-xs font-black text-brand-95">Transparent</p>

              <p className="text-[10px] text-gray-500">
                Clear support & escalation
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ========================================================
          7 STEP JOURNEY
      ========================================================= */}

      <section
        id="journey"
        ref={journeyRef}
        className="scroll-mt-20 bg-white py-16 lg:py-24"
      >
        <SectionContainer>
          <div className="text-center">
            <Eyebrow>7-Step Journey</Eyebrow>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight text-brand-95 sm:text-4xl lg:text-5xl">
              One clear journey from request to follow-up.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
              Every service request moves through a structured process so
              customers know what happens next.
            </p>
          </div>

          {/* ======================================================
              DESKTOP JOURNEY
          ======================================================= */}

          <div className="mt-14 hidden lg:block">
            <div className="grid grid-cols-7 gap-2">
              {JOURNEY_STEPS.map((step, index) => (
                <JourneyStep
                  key={step.number}
                  step={step}
                  index={index}
                  active={activeStep === index}
                  onClick={handleStepClick}
                />
              ))}
            </div>
          </div>

          {/* ======================================================
              MOBILE JOURNEY
          ======================================================= */}

          <div className="mt-10 overflow-x-auto pb-3 lg:hidden">
            <div className="flex min-w-max gap-3">
              {JOURNEY_STEPS.map((step, index) => (
                <JourneyStep
                  key={step.number}
                  step={step}
                  index={index}
                  active={activeStep === index}
                  onClick={handleStepClick}
                />
              ))}
            </div>
          </div>

          {/* ======================================================
              ACTIVE STEP DETAIL
          ======================================================= */}

          <div className="mt-12 overflow-hidden rounded-3xl bg-brand-95">
            <div className="grid lg:grid-cols-[.8fr_1.2fr]">
              {/* Left */}
              <div className="relative overflow-hidden bg-brand-90 p-7 sm:p-9 lg:p-12">
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-lime text-brand-95">
                      <selectedStep.icon size={29} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[1.5px] text-brand-lime">
                        Step {selectedStep.number}
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-white">
                        {selectedStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-7 max-w-md text-sm leading-7 text-white/65">
                    {selectedStep.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wide text-white/40">
                      <span>Journey Progress</span>

                      <span>
                        {activeStep + 1} / {JOURNEY_STEPS.length}
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-brand-lime transition-all duration-500"
                        style={{
                          width: `${
                            ((activeStep + 1) / JOURNEY_STEPS.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="bg-brand-5 p-7 sm:p-9 lg:p-12">
                {selectedStep.number === "01" ? (
                  <>
                    <Eyebrow>Choose Your Channel</Eyebrow>

                    <h4 className="mt-2 text-2xl font-black text-brand-95">
                      Start wherever it is easiest for you.
                    </h4>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {selectedStep.channels.map(
                        ({ icon: Icon, title, description }) => (
                          <div
                            key={title}
                            className="flex items-center gap-3 rounded-xl border border-brand-10 bg-white p-4"
                          >
                            <CircleIcon>
                              <Icon size={19} />
                            </CircleIcon>

                            <div>
                              <p className="text-xs font-black text-brand-95">
                                {title}
                              </p>

                              <p className="mt-0.5 text-[9px] text-gray-500">
                                {description}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Eyebrow>What Happens Next</Eyebrow>

                    <h4 className="mt-2 text-2xl font-black text-brand-95">
                      {selectedStep.title}
                    </h4>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
                      {selectedStep.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "Clear next step",
                        "Local coordination",
                        "Digital process",
                        "Customer visibility",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[10px] font-bold text-brand-ink"
                        >
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-5 text-brand-70">
                            <Check size={10} strokeWidth={3} />
                          </span>

                          {item}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between border-t border-brand-10 pt-5">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => {
                      setActiveStep((current) => Math.max(0, current - 1));
                      setIsAutoPlaying(false);
                    }}
                    className="text-[10px] font-black text-brand-70 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveStep(
                        activeStep === JOURNEY_STEPS.length - 1
                          ? 0
                          : activeStep + 1,
                      );
                      setIsAutoPlaying(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-90 px-4 py-2.5 text-[10px] font-black text-white transition hover:bg-brand-80"
                  >
                    {activeStep === JOURNEY_STEPS.length - 1
                      ? "Start Again"
                      : "Next Step"}

                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Auto-play toggle */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((current) => !current)}
              className="text-[9px] font-bold text-gray-400 transition hover:text-brand-70"
            >
              {isAutoPlaying
                ? "Pause journey animation"
                : "Play journey animation"}
            </button>
          </div>
        </SectionContainer>
      </section>

      {/* ========================================================
          VISUAL JOURNEY PATH
      ========================================================= */}

      <section className="overflow-hidden bg-brand-5 py-16 lg:py-24">
        <SectionContainer>
          <div className="text-center">
            <Eyebrow>The Dr. Saab Journey</Eyebrow>

            <h2 className="mt-3 text-3xl font-black text-brand-95 sm:text-4xl">
              BOOK → ASSIGN → DIAGNOSE → SERVICE
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              ESCALATE → DIGITAL RECORD → FEEDBACK
            </p>
          </div>

          {/* Journey visualization */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            {/* Path */}
            <div className="absolute left-[7%] right-[7%] top-1/2 hidden h-1 -translate-y-1/2 rounded-full bg-brand-10 md:block" />

            <div
              className="absolute left-[7%] top-1/2 hidden h-1 -translate-y-1/2 rounded-full bg-brand-70 transition-all duration-700 md:block"
              style={{
                width: `${(activeStep / 6) * 86}%`,
              }}
            />

            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-7 md:gap-3">
              {JOURNEY_STEPS.map(
                ({ number, shortTitle, icon: Icon }, index) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => handleStepClick(index)}
                    className="group relative z-10 flex flex-col items-center"
                  >
                    <div
                      className={`
                        grid
                        h-14
                        w-14
                        place-items-center
                        rounded-full
                        border-4
                        border-brand-5
                        transition-all
                        duration-300
                        ${
                          activeStep === index
                            ? "scale-110 bg-brand-70 text-white shadow-lg"
                            : "bg-white text-brand-70 shadow-sm group-hover:bg-brand-70 group-hover:text-white"
                        }
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      className={`
                        mt-3
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[.7px]
                        ${
                          activeStep === index
                            ? "text-brand-90"
                            : "text-gray-500"
                        }
                      `}
                    >
                      {number} — {shortTitle}
                    </span>
                  </button>
                ),
              )}
            </div>

            {/* Moving vehicle */}
            <div
              className="
                pointer-events-none
                absolute
                left-[7%]
                top-1/2
                hidden
                -translate-y-[38px]
                transition-all
                duration-700
                md:block
              "
              style={{
                transform: `translateX(${
                  (activeStep / 6) * 86
                }%) translateY(-38px)`,
              }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-95 text-brand-lime shadow-xl">
                <Truck size={21} />
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ========================================================
          WHAT CUSTOMER GETS
      ========================================================= */}

      <section className="bg-white py-16 lg:py-24">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            {/* Heading */}
            <div>
              <Eyebrow>What Customer Gets</Eyebrow>

              <h2 className="mt-3 max-w-md text-3xl font-black leading-tight text-brand-95 sm:text-4xl">
                Support designed around your experience.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                From the first service request to post-service follow-up, every
                stage is designed to keep the customer informed.
              </p>

              <div className="mt-7 rounded-2xl bg-brand-95 p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-lime text-brand-95">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-white">
                      Simple. Digital. Transparent.
                    </p>

                    <p className="mt-1 text-[10px] text-white/50">
                      That's the Dr. Saab service experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              {CUSTOMER_BENEFITS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="
                      group
                      rounded-2xl
                      border
                      border-brand-10
                      bg-white
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-60/40
                      hover:shadow-lg
                    "
                >
                  <CircleIcon className="transition group-hover:bg-brand-70 group-hover:text-white">
                    <Icon size={19} />
                  </CircleIcon>

                  <h3 className="mt-4 text-sm font-black text-brand-95">
                    {title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ========================================================
          BOOKING CHANNELS
      ========================================================= */}

      <section className="bg-brand-5 py-16 lg:py-20">
        <SectionContainer>
          <div className="text-center">
            <Eyebrow>Start Your Service Request</Eyebrow>

            <h2 className="mt-3 text-3xl font-black text-brand-95 sm:text-4xl">
              Choose the way that works for you.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
              Reach Dr. Saab through the channel that is most convenient.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_CHANNELS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="
                    group
                    rounded-2xl
                    border
                    border-brand-10
                    bg-white
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-5 text-brand-70 transition group-hover:bg-brand-70 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 text-sm font-black text-brand-95">
                  {title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ========================================================
          FINAL CTA
      ========================================================= */}

      <section
        id="book-service"
        className="relative overflow-hidden bg-brand-70 py-20"
      >
        <div className="pointer-events-none absolute -right-28 -top-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-40 -left-28 h-96 w-96 rounded-full border border-white/10" />

        <SectionContainer className="relative max-w-[900px] text-center">
          <Truck
            className="mx-auto mb-5 text-brand-lime"
            size={30}
            strokeWidth={1.6}
          />

          <Eyebrow light>Ready When You Are</Eyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Book Your Service
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Start your service request and connect with the nearest available
            Dr. Saab technician.
          </p>

          <div className="mt-8">
            <Button href="#" variant="lime" className="px-7 py-3.5">
              Book Your Service
              <ArrowRight size={15} />
            </Button>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

export default HowItWorks;
