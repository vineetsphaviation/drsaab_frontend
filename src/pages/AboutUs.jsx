import {
  ArrowRight,
  BatteryCharging,
  BrainCircuit,
  Building2,
  Check,
  CircleDot,
  Cpu,
  GraduationCap,
  Handshake,
  Leaf,
  Network,
  ScanSearch,
  ShieldCheck,
  SolarPanel,
  Tractor,
  Users,
  Wrench,
  Zap,
  CheckCircle2,
  Ear,
  Eye,
  FileCheck2,
  MessageCircle,
  SearchCheck,
  Stethoscope,
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

import aboutHero from "../assets/images/about_hero.png";

const missionPoints = [
  {
    icon: <Wrench size={19} />,
    title: "Upgrade Existing Mechanics",
    text: "Build the technical capability of mechanics through structured training and technology exposure.",
  },
  {
    icon: <Users size={19} />,
    title: "Create Technical Entrepreneurs",
    text: "Enable capable individuals to build organised local technical-service enterprises.",
  },
  {
    icon: <Zap size={19} />,
    title: "Improve EV Confidence",
    text: "Make electric mobility easier to maintain, understand and access for customers.",
  },
  {
    icon: <CircleDot size={19} />,
    title: "Reduce Downtime",
    text: "Bring faster diagnosis and technical support closer to customers and businesses.",
  },
  {
    icon: <ShieldCheck size={19} />,
    title: "Promote Safe Battery Handling",
    text: "Encourage trained, responsible and safety-focused battery service practices.",
  },
  {
    icon: <Building2 size={19} />,
    title: "Enable Doorstep Service",
    text: "Develop service models that can reach customers beyond conventional workshops.",
  },
  {
    icon: <Handshake size={19} />,
    title: "Build OEM Linkages",
    text: "Create stronger connections between technicians, service centres, OEMs and customers.",
  },
  {
    icon: <GraduationCap size={19} />,
    title: "Create Apprenticeships",
    text: "Open pathways for practical technical learning and future employment.",
  },
  {
    icon: <Network size={19} />,
    title: "Build a Digital Ecosystem",
    text: "Connect service, technicians, customers, training and enterprise activity through technology.",
  },
];

const technologyAreas = [
  {
    icon: <Zap size={23} />,
    title: "Electric Vehicles",
    text: "EV diagnostics, maintenance, roadside support and technical service.",
  },
  {
    icon: <BatteryCharging size={23} />,
    title: "Batteries",
    text: "Battery diagnostics, safe handling, charging and related support.",
  },
  {
    icon: <Tractor size={23} />,
    title: "Agricultural Drones",
    text: "Technical support for emerging drone-enabled agricultural applications.",
  },
  {
    icon: <SolarPanel size={23} />,
    title: "Solar Systems",
    text: "Support for solar, inverter and distributed energy technologies.",
  },
];

const ecosystemNodes = [
  {
    title: "Customers",
    icon: <Users size={19} />,
    description: "Reliable help when it matters.",
  },
  {
    title: "Mechanics",
    icon: <Wrench size={19} />,
    description: "Skills, tools and new opportunity.",
  },
  {
    title: "Dr. Saab Network",
    icon: <Network size={23} />,
    central: true,
    description: "The network that makes support work.",
  },
  {
    title: "Entrepreneurs",
    icon: <Building2 size={19} />,
    description: "Local enterprises built for growth.",
  },
  {
    title: "OEMs",
    icon: <Cpu size={19} />,
    description: "Stronger service and product linkages.",
  },
  {
    title: "Fleets",
    icon: <Zap size={19} />,
    description: "More uptime for essential mobility.",
  },
  {
    title: "Training",
    icon: <GraduationCap size={19} />,
    description: "Practical learning for real work.",
  },
  {
    title: "Technology",
    icon: <BrainCircuit size={19} />,
    description: "Data-led tools and better diagnosis.",
  },
  {
    title: "Financial Partners",
    icon: <Handshake size={19} />,
    description: "Capital that helps local services scale.",
  },
];

const diagnosticSteps = [
  {
    number: "01",
    title: "Listen",
    text: "Understand the customer's concern.",
  },
  {
    number: "02",
    title: "Inspect",
    text: "Examine the vehicle, battery or system.",
  },
  {
    number: "03",
    title: "Diagnose",
    text: "Identify the likely cause of the problem.",
  },
  {
    number: "04",
    title: "Explain",
    text: "Clearly communicate the issue and options.",
  },
  {
    number: "05",
    title: "Service",
    text: "Perform eligible technical work safely.",
  },
  {
    number: "06",
    title: "Escalate",
    text: "Refer specialised or authorised work when required.",
  },
  {
    number: "07",
    title: "Record",
    text: "Create a digital record of the service interaction.",
  },
];

// STEPS APPROACH
const APPROACH_STEPS = [
  {
    number: "01",
    label: "LISTEN",
    icon: Ear,
  },
  {
    number: "02",
    label: "INSPECT",
    icon: Eye,
  },
  {
    number: "03",
    label: "DIAGNOSE",
    icon: SearchCheck,
  },
  {
    number: "04",
    label: "EXPLAIN",
    icon: MessageCircle,
  },
  {
    number: "05",
    label: "SERVICE",
    icon: Wrench,
  },
  {
    number: "06",
    label: "RECORD",
    icon: FileCheck2,
  },
];

const ApproachStep = ({ step, active }) => {
  const Icon = step.icon;

  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-300 ${
        active
          ? "bg-white shadow-[0_8px_25px_rgba(7,95,69,0.10)]"
          : "bg-white/40"
      }`}
    >
      <div
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${
          active ? "bg-brand-90 text-white" : "bg-brand-5 text-brand-70"
        }`}
      >
        <Icon size={13} />
      </div>

      <div className="flex-1">
        <div className="text-[10px] font-bold tracking-[0.7px] text-brand-60">
          {step.number}
        </div>

        <div className="text-[11px] font-black tracking-[0.6px] text-brand-95">
          {step.label}
        </div>
      </div>

      {active && <CheckCircle2 size={12} className="text-brand-60" />}
    </div>
  );
};

// HERO SECTION
const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-5">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-10/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[480px] w-[480px] rounded-full bg-brand-lime/10 blur-3xl" />

      <SectionContainer className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            <Eyebrow>ABOUT DR. SAAB</Eyebrow>

            <h1 className="mt-4 text-[40px] font-black leading-[0.98] tracking-[-1.9px] text-brand-95 sm:text-[48px] lg:text-[54px] xl:text-[58px]">
              Mechanic Ka Upgrade.
              <span className="block text-brand-70">
                Customer Ki Guarantee.
              </span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[14px] leading-6 text-brand-ink/65 sm:text-[17px] sm:leading-7">
              Dr. Saab is building an organised after-sales service and
              technical entrepreneurship ecosystem for India's evolving EV,
              battery, drone and energy landscape.
            </p>

            <p className="mt-3 max-w-[440px] text-[14px] leading-5 text-brand-ink/50">
              We believe technical service should be easier to access, easier to
              understand and easier to trust.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Button href="#our-approach">
                Our Approach
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>

              <Button href="/contact-us" variant="outline">
                Talk to Dr. Saab
              </Button>
            </div>

            {/* Trust line */}
            <div className="mt-7 flex items-center gap-3 border-t border-brand-10 pt-5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-90 text-white">
                <Stethoscope size={15} />
              </div>

              <div>
                <div className="text-[12px] font-black uppercase tracking-[0.8px] text-brand-95">
                  A Different Approach to Technical Service
                </div>

                <p className="mt-0.5 text-[12px] leading-4 text-brand-ink/50">
                  Diagnose first. Explain clearly. Service responsibly.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[28px] border border-brand-10 bg-brand-10 shadow-[0_25px_70px_rgba(7,95,69,0.12)]">
              <div className="relative h-[430px] sm:h-[500px] lg:h-[530px]">
                <img
                  src={aboutHero}
                  alt="Technical professional working on equipment"
                  className="h-full w-full object-cover"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-95/75 via-transparent to-brand-95/5" />

                {/* Image caption */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-brand-95/75 p-4 backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-lime text-brand-95">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[1px] text-brand-lime">
                        THE DR. SAAB PRINCIPLE
                      </div>

                      <div className="mt-1 text-[14px] font-black text-white">
                        Technical work should inspire confidence.
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-white/55">
                        Every interaction should leave the customer knowing what
                        happened, why it happened and what comes next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-5 top-12 hidden w-[205px] rounded-2xl border border-brand-10 bg-white p-3 shadow-[0_18px_45px_rgba(7,95,69,0.14)] sm:block">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[1px] text-brand-60">
                    OUR APPROACH
                  </div>

                  <div className="mt-1 text-[14px] font-black text-brand-95">
                    Like a Good Doctor
                  </div>
                </div>

                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-5 text-brand-70">
                  <Stethoscope size={13} />
                </div>
              </div>

              <div className="space-y-1">
                {APPROACH_STEPS.slice(0, 4).map((step, index) => (
                  <ApproachStep
                    key={step.number}
                    step={step}
                    active={index === 2}
                  />
                ))}
              </div>
            </div>

            {/* FLOATING TRUST CARD */}
            <div className="absolute -right-4 top-[145px] hidden rounded-xl border border-brand-10 bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(7,95,69,0.12)] sm:block">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-lime/50 text-brand-95">
                  <CheckCircle2 size={13} />
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-ink/40">
                    PRINCIPLE
                  </div>

                  <div className="text-[11px] font-black text-brand-95">
                    Service You Can Trust
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM FLOATING LABEL */}
            <div className="absolute -bottom-4 left-8 hidden items-center gap-2 rounded-full border border-brand-10 bg-white px-3.5 py-2.5 shadow-[0_12px_25px_rgba(7,95,69,0.10)] sm:flex">
              <div className="h-2 w-2 rounded-full bg-brand-60" />

              <span className="text-[10px] font-black uppercase tracking-[0.7px] text-brand-90">
                Built Around Trust
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

const About = () => {
  return (
    <div className="bg-white text-brand-ink">
      {/* HERO */}
      <AboutHero />

      {/* WHO WE ARE */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[28px] bg-brand-95 p-7 text-white sm:p-9 lg:min-h-[512px] lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand-60/25 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <Eyebrow light>WHO WE ARE</Eyebrow>

                <h2 className="mt-4 max-w-[430px] text-3xl font-black leading-tight tracking-[-1px] sm:text-4xl">
                  Building the people and systems behind the next generation of
                  service.
                </h2>

                <p className="mt-5 max-w-[412px] text-base leading-7 text-white/70">
                  We bring capable local technicians, trusted processes and
                  emerging technology into one practical service model.
                </p>

                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-lime text-brand-95">
                      <Network size={21} />
                    </div>

                    <div>
                      <p className="text-[12px] font-black uppercase tracking-[.14em] text-brand-lime">
                        One connected model
                      </p>
                      <p className="mt-1 text-base leading-5 text-white/65">
                        Rural reach. Urban capability. Local trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 lg:py-5">
              <p className="max-w-[680px] text-[16px] leading-8 text-brand-ink/80">
                Dr. Saab is positioned as a rural and urban after-sales service,
                mechanic-upgradation and technical-entrepreneurship initiative.
              </p>

              <p className="mt-3 text-[16px] leading-8 text-brand-ink/80">
                The initiative aims to create a network of trained local
                technicians capable of supporting emerging technologies while
                making technical service more accessible, organised and
                trustworthy.
              </p>

              <div className="mt-7 rounded-2xl border border-brand-90/10 bg-brand-5/70 p-4 sm:flex sm:items-center sm:gap-4 sm:p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-70 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <p className="mt-3 text-base leading-6 text-brand-ink/70 sm:mt-0">
                  Our role is to make technical support feel clear, capable and
                  dependable—from first diagnosis to the next best action.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {technologyAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-brand-90/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-60/35 hover:shadow-[0_14px_30px_rgba(3,78,55,.09)]"
                  >
                    <span className="absolute right-4 top-3 text-4xl font-black leading-none text-brand-5 transition-colors group-hover:text-brand-10">
                      0{index + 1}
                    </span>

                    <CircleIcon className="relative bg-brand-5 text-brand-70 transition-colors group-hover:bg-brand-70 group-hover:text-white">
                      {item.icon}
                    </CircleIcon>

                    <h3 className="mt-4 text-[15px] font-black text-brand-95">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[250px] text-[14px] leading-6 text-brand-ink/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-brand-5 py-8 sm:py-12">
        <div className="absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-brand-lime/15 blur-3xl" />

        <SectionContainer className="relative">
          <div className="mx-auto max-w-[900px] text-center">
            <Eyebrow>OUR VISION</Eyebrow>

            <div className="mt-8 text-4xl font-black leading-[1.08] tracking-[-1.5px] text-brand-95 sm:text-5xl lg:text-6xl">
              Har Panchayat,
              <span className="text-brand-70"> Har Shehar</span>
              <br />
              <span className="text-brand-70">— Trained Mechanic,</span>
              <br />
              Trusted Service.
            </div>

            <p className="mx-auto mt-7 max-w-[680px] text-[17px] leading-7 text-brand-ink/75">
              A future where technical service is not limited by geography,
              where mechanics have access to better skills and tools, and
              customers know where to turn when technology needs support.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* MISSION */}
      <section className="bg-white py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="max-w-[650px]">
            <Eyebrow>OUR MISSION</Eyebrow>

            <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95 sm:text-4xl">
              Turning technical capability into trusted local service.
            </h2>

            <p className="mt-3 text-[17px] leading-7 text-brand-ink/75">
              Dr. Saab's mission is to strengthen the complete service ecosystem
              — from the mechanic and technician to the customer, OEM, training
              institution and enterprise partner.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-[14px] border border-brand-90/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-60/25 hover:shadow-[0_15px_45px_rgba(3,78,55,.08)]"
              >
                <div className="absolute right-5 top-5 text-[12px] font-black text-brand-90/15">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <CircleIcon>{item.icon}</CircleIcon>

                <h3 className="mt-5 text-[15px] font-black text-brand-95">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-brand-ink/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* WHAT DOES DR SAAB REPRESENT */}
      <section
        id="our-approach"
        className="scroll-mt-20 overflow-hidden bg-brand-95 py-8 text-white sm:py-12 lg:py-14"
      >
        <SectionContainer>
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <Eyebrow light>THE IDEA BEHIND THE NAME</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-1px] sm:text-4xl">
                What does
                <span className="text-brand-lime"> “Dr. Saab”</span>
                represent?
              </h2>

              <p className="mt-5 text-[17px] leading-7 text-white/75">
                A doctor does not begin by prescribing a solution. A doctor
                first listens, examines and diagnoses the problem.
              </p>

              <p className="mt-3 text-[17px] leading-7 text-white/75">
                Dr. Saab applies the same philosophy to technical service.
                Diagnose first. Explain clearly. Service responsibly. Escalate
                when necessary. Record the outcome.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[10%] right-[10%] top-1/2 hidden h-px bg-white/10 lg:block" />

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
                {diagnosticSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative rounded-[13px] border border-white/10 bg-white/[0.045] p-4 transition-all hover:-translate-y-1 hover:border-brand-lime/30 hover:bg-white/[0.07]"
                  >
                    <div className="text-[14px] font-black tracking-[1px] text-brand-lime">
                      {step.number}
                    </div>

                    <div className="mt-3 grid h-9 w-9 place-items-center rounded-full bg-white/10">
                      {index === 0 && <Users size={16} />}
                      {index === 1 && <ScanSearch size={16} />}
                      {index === 2 && <BrainCircuit size={16} />}
                      {index === 3 && <CircleDot size={16} />}
                      {index === 4 && <Wrench size={16} />}
                      {index === 5 && <ArrowRight size={16} />}
                      {index === 6 && <Check size={16} />}
                    </div>

                    <h3 className="mt-4 text-[16px] font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-white/70">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ECOSYSTEM */}
      <section className="overflow-hidden bg-brand-5/50 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="mx-auto max-w-[720px] text-center">
            <Eyebrow>OUR ECOSYSTEM</Eyebrow>

            <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95 sm:text-4xl">
              One network connecting service, people and technology.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-brand-ink/75">
              Dr. Saab is designed as an ecosystem rather than a standalone
              workshop model — connecting customers, technicians, entrepreneurs,
              OEMs, fleets, training institutions, technology and financial
              partners.
            </p>
          </div>

          {/* Compact ecosystem map */}
          <div className="relative mt-12 overflow-hidden rounded-[28px] bg-brand-95 p-5 shadow-[0_24px_70px_rgba(3,78,55,.16)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-brand-lime/15" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[65%] -translate-x-1/2 rounded-full bg-brand-60/15 blur-3xl" />

            {/* Mobile and tablet ecosystem */}
            <div className="relative grid gap-3 sm:grid-cols-2 lg:hidden">
              {ecosystemNodes.map((node) => (
                <EcosystemNode
                  key={node.title}
                  title={node.title}
                  icon={node.icon}
                  description={node.description}
                  central={node.central}
                />
              ))}
            </div>

            {/* Desktop ecosystem */}
            <div className="relative hidden grid-cols-[minmax(0,1fr)_minmax(260px,1.15fr)_minmax(0,1fr)] items-center gap-8 lg:grid">
              <div className="space-y-4">
                {ecosystemNodes.slice(0, 2).map((node) => (
                  <EcosystemNode key={node.title} {...node} />
                ))}
                <EcosystemNode {...ecosystemNodes[4]} />
              </div>

              <div className="relative flex min-h-[352px] items-center justify-center px-8">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-lime/25" />

                <div className="relative w-full">
                  <EcosystemNode {...ecosystemNodes[2]} central />
                  <p className="mx-auto mt-5 max-w-[230px] text-center text-xs leading-5 text-white/65">
                    Coordinating trusted service, capability and opportunity in
                    every local market.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {ecosystemNodes.slice(3, 4).map((node) => (
                  <EcosystemNode key={node.title} {...node} />
                ))}
                <EcosystemNode {...ecosystemNodes[5]} />
                <EcosystemNode {...ecosystemNodes[6]} />
              </div>
            </div>

            <div className="relative mt-5 hidden grid-cols-2 gap-4 lg:grid lg:px-[16.5%]">
              <EcosystemNode {...ecosystemNodes[7]} />
              <EcosystemNode {...ecosystemNodes[8]} />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* INITIATIVE */}
      <section className="border-y border-brand-90/10 bg-brand-5/50 py-8 sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>ABOUT THE INITIATIVE</Eyebrow>

              <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95">
                An initiative built around the future of technical service.
              </h2>

              <p className="mt-5 max-w-[750px] text-[16px] leading-7 text-brand-ink/75">
                Dr. Saab is an initiative by{" "}
                <strong className="font-black text-brand-95">
                  Techsmart Ventures Pvt Limited
                </strong>
                .
              </p>

              <p className="mt-3 max-w-[750px] text-[16px] leading-6 text-brand-ink/70">
                The initiative is focused on creating an organised ecosystem for
                after-sales service, mechanic upgradation and technical
                entrepreneurship across emerging technology categories.
              </p>
            </div>

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[20px] border border-brand-90/10 bg-white shadow-sm">
              <Leaf size={34} className="text-brand-70" />
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-90 py-8 text-white sm:py-12 lg:py-14">
        <SectionContainer>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[720px]">
              <Eyebrow light>EXPLORE DR. SAAB</Eyebrow>

              <h2 className="mt-3 text-3xl font-black tracking-[-1px] sm:text-4xl">
                See how the Dr. Saab ecosystem works.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-white/75">
                Explore our service model, technical network and pathways for
                customers and partners.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/our-services" variant="light">
                Our Services
              </Button>

              <Button
                href="/how-it-works"
                variant="outline"
                className="border-white/30 bg-transparent text-brand-90 "
              >
                How It Works
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
};

// REUSEABLE COMPONENTS
const EcosystemNode = ({
  icon,
  title,
  description,
  className = "",
  central = false,
}) => {
  return (
    <div
      className={`group relative flex min-h-[94px] items-center gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
        central
          ? "border-brand-lime/50 bg-brand-70 text-white shadow-[0_18px_45px_rgba(0,0,0,.2)]"
          : "border-white/15 bg-white/[0.07] text-white hover:-translate-y-1 hover:border-brand-lime/45 hover:bg-white/[0.11]"
      } ${className}`}
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
          central
            ? "bg-brand-lime text-brand-95"
            : "bg-white/10 text-brand-lime group-hover:bg-brand-lime group-hover:text-brand-95"
        }`}
      >
        {icon}
      </span>

      <span>
        <span className="block text-[12px] font-black uppercase tracking-[.8px]">
          {title}
        </span>
        {description && (
          <span className="mt-1 block text-[13px] leading-4 text-white/60">
            {description}
          </span>
        )}
      </span>
    </div>
  );
};

export default About;
