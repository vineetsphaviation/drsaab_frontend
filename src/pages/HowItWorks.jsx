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
  X,
} from "lucide-react";

import {
  Button,
  Eyebrow,
  SectionContainer,
  CircleIcon,
} from "../components/ui/UI";

/* ============================================================
   JOURNEY DATA
============================================================ */

const JOURNEY_STEPS = [
  {
    number: "01",
    shortTitle: "Book",
    title: "Book Your Service",
    description:
      "Submit your service requirement through the channel that is most convenient for you.",
    icon: ClipboardCheck,
    color: "lime",
    channels: [
      {
        icon: Globe,
        label: "Website",
      },
      {
        icon: MessageCircle,
        label: "WhatsApp",
      },
      {
        icon: Smartphone,
        label: "Application",
      },
      {
        icon: Phone,
        label: "Support Number",
      },
    ],
  },

  {
    number: "02",
    shortTitle: "Assign",
    title: "Technician Assigned",
    description:
      "An available Dr. Saab technician in your service area receives the request.",
    icon: UserCheck,
    color: "green",
  },

  {
    number: "03",
    shortTitle: "Diagnose",
    title: "Problem Diagnosed",
    description:
      "The technician visits you, checks the vehicle or equipment and identifies the problem.",
    icon: Search,
    color: "lime",
  },

  {
    number: "04",
    shortTitle: "Service",
    title: "Service At Site",
    description:
      "Eligible repairs, maintenance and technical support are provided at the site.",
    icon: Wrench,
    color: "green",
  },

  {
    number: "05",
    shortTitle: "Escalate",
    title: "Specialist Escalation",
    description:
      "Major or specialised work is referred to an appropriate authorised facility.",
    icon: Navigation,
    color: "lime",
  },

  {
    number: "06",
    shortTitle: "Record",
    title: "Digital Service Record",
    description:
      "Service details and invoice are digitally recorded for transparency and future reference.",
    icon: FileText,
    color: "green",
  },

  {
    number: "07",
    shortTitle: "Feedback",
    title: "Feedback & Follow-up",
    description:
      "Your feedback and recommended future maintenance are captured after the service.",
    icon: MessageCircle,
    color: "lime",
  },
];

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

const JourneyStep = ({ step, index, active, onClick }) => {
  const Icon = step.icon;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={`
        group
        relative
        flex
        w-full
        min-w-[155px]
        flex-col
        items-center
        text-center
        lg:min-w-0
        ${active ? "opacity-100" : "opacity-65 hover:opacity-100"}
      `}
    >
      {/* Connector */}
      {index < JOURNEY_STEPS.length - 1 && (
        <span
          className="
            absolute
            left-[calc(50%+34px)]
            top-[34px]
            hidden
            h-[2px]
            w-[calc(100%-68px)]
            bg-brand-10
            lg:block
          "
        >
          <span
            className={`
              absolute
              left-0
              top-0
              h-full
              bg-brand-lime
              transition-all
              duration-700
              ${active ? "w-full" : "w-0"}
            `}
          />
        </span>
      )}

      {/* Icon */}
      <div
        className={`
          relative
          z-10
          grid
          h-[68px]
          w-[68px]
          place-items-center
          rounded-full
          border-[5px]
          border-white
          shadow-lg
          transition-all
          duration-300
          ${
            active
              ? "scale-110 bg-brand-70 text-white ring-4 ring-brand-10"
              : "bg-brand-5 text-brand-70 group-hover:bg-brand-70 group-hover:text-white"
          }
        `}
      >
        <Icon size={25} strokeWidth={1.8} />

        <span
          className={`
            absolute
            -right-1
            -top-1
            grid
            h-6
            w-6
            place-items-center
            rounded-full
            text-[8px]
            font-black
            ${active ? "bg-brand-lime text-brand-95" : "bg-brand-95 text-white"}
          `}
        >
          {step.number}
        </span>
      </div>

      {/* Text */}
      <span
        className={`
          mt-4
          text-[11px]
          font-black
          uppercase
          tracking-[.5px]
          ${active ? "text-brand-90" : "text-brand-ink"}
        `}
      >
        {step.shortTitle}
      </span>

      <span className="mt-1 hidden text-[9px] text-gray-400 lg:block">
        Step {step.number}
      </span>
    </button>
  );
};

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

      <section className="relative overflow-hidden bg-brand-95">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-44 -top-44 h-[560px] w-[560px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-brand-70/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />

        <SectionContainer className="relative grid min-h-[520px] items-center gap-12 py-16 lg:grid-cols-[1fr_.9fr] lg:py-20">
          {/* Hero content */}
          <div>
            <Eyebrow light>How Dr. Saab Works</Eyebrow>

            <h1 className="mt-3 max-w-3xl text-[42px] font-black leading-[1.02] tracking-[-1.5px] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              From Service Request to Support —{" "}
              <span className="text-brand-lime">
                Simple, Digital & Transparent
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              A clear seven-step journey designed to connect customers with the
              right technician, the right support and the right next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#book-service"
                variant="lime"
                className="px-6 py-3.5"
              >
                Book Your Service
                <ArrowRight size={15} />
              </Button>

              <Button href="#journey" variant="light" className="px-6 py-3.5">
                Explore the Journey
                <ArrowDown size={15} />
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-[470px]">
              {/* Outer circle */}
              <div className="absolute inset-0 m-auto aspect-square rounded-full border border-white/10" />

              <div className="absolute inset-8 m-auto aspect-square rounded-full border border-white/10" />

              {/* Center */}
              <div className="relative flex aspect-square items-center justify-center">
                <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-2xl ring-8 ring-white/10">
                  <Truck
                    size={48}
                    strokeWidth={1.5}
                    className="text-brand-70"
                  />

                  <span className="mt-2 text-[9px] font-black uppercase tracking-[1.5px] text-brand-90">
                    Dr. Saab
                  </span>
                </div>

                {/* Orbit items */}
                {[
                  {
                    icon: ClipboardCheck,
                    label: "Book",
                    position: "left-0 top-[18%]",
                  },
                  {
                    icon: UserCheck,
                    label: "Assign",
                    position: "right-0 top-[18%]",
                  },
                  {
                    icon: Search,
                    label: "Diagnose",
                    position: "right-[-3%] bottom-[20%]",
                  },
                  {
                    icon: FileText,
                    label: "Record",
                    position: "left-[-3%] bottom-[20%]",
                  },
                ].map(({ icon: Icon, label, position }) => (
                  <div
                    key={label}
                    className={`absolute ${position} flex flex-col items-center`}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/10 text-brand-lime backdrop-blur">
                      <Icon size={21} />
                    </div>

                    <span className="mt-1 text-[8px] font-bold uppercase tracking-wide text-white/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

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
                      {selectedStep.channels.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 rounded-xl border border-brand-10 bg-white p-4"
                        >
                          <CircleIcon>
                            <Icon size={19} />
                          </CircleIcon>

                          <div>
                            <p className="text-xs font-black text-brand-95">
                              {label}
                            </p>

                            <p className="mt-0.5 text-[9px] text-gray-500">
                              Service request
                            </p>
                          </div>
                        </div>
                      ))}
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
