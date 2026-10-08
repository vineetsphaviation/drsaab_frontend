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
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

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
    className: "lg:col-start-3",
  },
  {
    title: "Mechanics",
    icon: <Wrench size={19} />,
    className: "lg:col-start-1",
  },
  {
    title: "Dr. Saab Network",
    icon: <Network size={23} />,
    central: true,
    className: "lg:col-start-3",
  },
  {
    title: "Entrepreneurs",
    icon: <Building2 size={19} />,
    className: "lg:col-start-5",
  },
  {
    title: "OEMs",
    icon: <Cpu size={19} />,
    className: "lg:col-start-1",
  },
  {
    title: "Fleets",
    icon: <Zap size={19} />,
    className: "lg:col-start-3",
  },
  {
    title: "Training",
    icon: <GraduationCap size={19} />,
    className: "lg:col-start-5",
  },
  {
    title: "Technology",
    icon: <BrainCircuit size={19} />,
    className: "lg:col-start-3",
  },
  {
    title: "Financial Partners",
    icon: <Handshake size={19} />,
    className: "lg:col-start-3",
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

const About = () => {
  return (
    <div className="bg-white text-brand-ink">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-brand-95 text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-70/20 blur-3xl" />
          <div className="absolute -right-32 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-brand-lime/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
            }}
          />
        </div>

        <SectionContainer className="relative">
          <div className="grid items-center gap-10 py-14 sm:min-h-[570px] sm:gap-14 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="max-w-[690px]">
              <Eyebrow light>ABOUT DR. SAAB</Eyebrow>

              <h1 className="mt-5 max-w-[680px] text-4xl font-black leading-[1.03] tracking-[-1.8px] sm:text-5xl lg:text-[64px]">
                Mechanic Ka Upgrade.
                <span className="block text-brand-lime">
                  Customer Ki Guarantee.
                </span>
              </h1>

              <p className="mt-7 max-w-[620px] text-[16px] leading-7 text-white/80 sm:text-[18px]">
                Building an organised after-sales service and technical
                entrepreneurship ecosystem across rural and urban India.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/our-services" variant="light">
                  Explore Our Services
                </Button>

                <Button
                  href="/how-it-works"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                >
                  How Dr. Saab Works
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[1px] text-white/70 sm:mt-12 sm:gap-x-7 sm:gap-y-3">
                <span>EV</span>
                <span>•</span>
                <span>BATTERIES</span>
                <span>•</span>
                <span>DRONES</span>
                <span>•</span>
                <span>SOLAR</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="relative aspect-[5/4] rounded-[24px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-sm sm:aspect-square sm:rounded-[28px] sm:p-5">
                <div className="absolute inset-8 rounded-[22px] border border-brand-lime/15" />
                <div className="absolute inset-16 rounded-[18px] border border-white/10" />

                <div className="absolute left-1/2 top-1/2 grid h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand-lime/40 bg-brand-80 shadow-[0_0_80px_rgba(183,217,107,.12)]">
                  <div className="text-center">
                    <div className="mx-auto mb-2 grid h-11 w-11 place-items-center rounded-full bg-brand-lime text-brand-95">
                      <StethoscopeIcon />
                    </div>

                    <div className="text-[11px] font-black uppercase tracking-[1.5px]">
                      DR. SAAB
                    </div>

                    <div className="mt-1 text-[10px] font-semibold text-white/70">
                      TECHNICAL NETWORK
                    </div>
                  </div>
                </div>

                <HeroNode
                  icon={<Zap size={18} />}
                  label="EV"
                  className="left-6 top-16"
                />

                <HeroNode
                  icon={<BatteryCharging size={18} />}
                  label="BATTERY"
                  className="right-6 top-24"
                />

                <HeroNode
                  icon={<Tractor size={18} />}
                  label="DRONES"
                  className="bottom-24 left-5"
                />

                <HeroNode
                  icon={<SolarPanel size={18} />}
                  label="SOLAR"
                  className="bottom-12 right-8"
                />

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[1px] text-white/75 sm:bottom-5 sm:px-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                  Rural + Urban India
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>WHO WE ARE</Eyebrow>

              <h2 className="mt-3 max-w-[500px] text-3xl font-black leading-tight tracking-[-1px] text-brand-95 sm:text-4xl">
                Building the people and systems behind the next generation of
                service.
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-8 text-brand-ink/80">
                Dr. Saab is positioned as a rural and urban after-sales service,
                mechanic-upgradation and technical-entrepreneurship initiative.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-brand-ink/80">
                The initiative aims to create a network of trained local
                technicians capable of supporting emerging technologies while
                making technical service more accessible, organised and
                trustworthy.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {technologyAreas.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-[12px] border border-brand-90/10 bg-brand-5/45 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-60/30 hover:bg-brand-5"
                  >
                    <CircleIcon className="bg-white text-brand-70 shadow-sm">
                      {item.icon}
                    </CircleIcon>

                    <h3 className="mt-4 text-[14px] font-black text-brand-95">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-brand-ink/75">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          VISION
      ========================================================== */}
      <section className="relative overflow-hidden bg-brand-5 py-14 sm:py-20 lg:py-24">
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

            <p className="mx-auto mt-7 max-w-[680px] text-[16px] leading-7 text-brand-ink/75">
              A future where technical service is not limited by geography,
              where mechanics have access to better skills and tools, and
              customers know where to turn when technology needs support.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          MISSION
      ========================================================== */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="max-w-[650px]">
            <Eyebrow>OUR MISSION</Eyebrow>

            <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95 sm:text-4xl">
              Turning technical capability into trusted local service.
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-brand-ink/75">
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
                <div className="absolute right-5 top-5 text-[10px] font-black text-brand-90/15">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <CircleIcon>{item.icon}</CircleIcon>

                <h3 className="mt-5 text-[14px] font-black text-brand-95">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-brand-ink/75">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          WHAT DOES DR SAAB REPRESENT
      ========================================================== */}
      <section className="overflow-hidden bg-brand-95 py-14 text-white sm:py-20 lg:py-24">
        <SectionContainer>
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <Eyebrow light>THE IDEA BEHIND THE NAME</Eyebrow>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-1px] sm:text-4xl">
                What does
                <span className="text-brand-lime"> “Dr. Saab”</span>
                represent?
              </h2>

              <p className="mt-6 text-[16px] leading-7 text-white/75">
                A doctor does not begin by prescribing a solution. A doctor
                first listens, examines and diagnoses the problem.
              </p>

              <p className="mt-4 text-[16px] leading-7 text-white/75">
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
                    <div className="text-[11px] font-black tracking-[1px] text-brand-lime">
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

                    <h3 className="mt-4 text-[15px] font-black">
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

      {/* =========================================================
          ECOSYSTEM
      ========================================================== */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
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

          {/* Desktop ecosystem */}
          <div className="relative mx-auto mt-14 hidden max-w-[850px] lg:block">
            <div className="grid grid-cols-5 grid-rows-[auto_18px_auto_18px_auto_18px_auto] items-center gap-x-5 gap-y-0">
              {/* Customers */}
              <EcosystemNode
                title="Customers"
                icon={<Users size={18} />}
                className="col-start-3 row-start-1"
              />

              <div className="col-start-3 row-start-2 h-full w-px justify-self-center bg-brand-90/15" />

              {/* Mechanics / central / entrepreneurs */}
              <EcosystemNode
                title="Mechanics"
                icon={<Wrench size={18} />}
                className="col-start-1 row-start-3"
              />

              <div className="relative col-start-3 row-start-3">
                <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-brand-90/15 lg:block" />

                <div className="relative">
                  <EcosystemNode
                    title="Dr. Saab Network"
                    icon={<Network size={20} />}
                    central
                  />
                </div>
              </div>

              <EcosystemNode
                title="Entrepreneurs"
                icon={<Building2 size={18} />}
                className="col-start-5 row-start-3"
              />

              <div className="col-start-3 row-start-4 h-full w-px justify-self-center bg-brand-90/15" />

              {/* OEM / fleets / training */}
              <EcosystemNode
                title="OEMs"
                icon={<Cpu size={18} />}
                className="col-start-1 row-start-5"
              />

              <EcosystemNode
                title="Fleets"
                icon={<Zap size={18} />}
                className="col-start-3 row-start-5"
              />

              <EcosystemNode
                title="Training"
                icon={<GraduationCap size={18} />}
                className="col-start-5 row-start-5"
              />

              <div className="col-start-3 row-start-6 h-full w-px justify-self-center bg-brand-90/15" />

              <EcosystemNode
                title="Technology"
                icon={<BrainCircuit size={18} />}
                className="col-start-3 row-start-7"
              />
            </div>

            <div className="mx-auto mt-6 h-px w-1/3 bg-brand-90/15" />

            <div className="mx-auto mt-4 max-w-[250px]">
              <EcosystemNode
                title="Financial Partners"
                icon={<Handshake size={18} />}
              />
            </div>
          </div>

          {/* Mobile ecosystem */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
            {ecosystemNodes.map((node) => (
              <EcosystemNode
                key={node.title}
                title={node.title}
                icon={node.icon}
                central={node.central}
              />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          INITIATIVE
      ========================================================== */}
      <section className="border-y border-brand-90/10 bg-brand-5/50 py-14 sm:py-16 lg:py-20">
        <SectionContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Eyebrow>ABOUT THE INITIATIVE</Eyebrow>

              <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95">
                An initiative built around the future of technical service.
              </h2>

              <p className="mt-5 max-w-[750px] text-[15px] leading-7 text-brand-ink/75">
                Dr. Saab is an initiative by{" "}
                <strong className="font-black text-brand-95">
                  Techsmart Ventures Pvt Limited
                </strong>
                .
              </p>

              <p className="mt-3 max-w-[750px] text-[14px] leading-6 text-brand-ink/70">
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

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-brand-90 py-14 text-white sm:py-16 lg:py-20">
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
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
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

/* =========================================================
   SMALL REUSABLE LOCAL COMPONENTS
========================================================= */

function HeroNode({ icon, label, className = "" }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[10px] font-black tracking-[.8px] text-white/80 backdrop-blur ${className}`}
    >
      <span className="text-brand-lime">{icon}</span>
      {label}
    </div>
  );
}

function EcosystemNode({ icon, title, className = "", central = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 rounded-[13px] border px-5 py-4 text-center transition-all ${
        central
          ? "border-brand-70/30 bg-brand-95 text-white shadow-[0_15px_45px_rgba(3,78,55,.15)]"
          : "border-brand-90/10 bg-brand-5/60 text-brand-95 hover:-translate-y-1 hover:border-brand-60/25 hover:bg-brand-5"
      } ${className}`}
    >
      <span className={central ? "text-brand-lime" : "text-brand-70"}>
        {icon}
      </span>

      <span className="text-[12px] font-black uppercase tracking-[.8px]">
        {title}
      </span>
    </div>
  );
}

function StethoscopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="M6 3v5a4 4 0 0 0 8 0V3" />
      <path d="M3 3h6" />
      <path d="M15 3h3" />
      <path d="M14 16a4 4 0 1 0 8 0v-1" />
      <circle cx="22" cy="13" r="1" />
    </svg>
  );
}

export default About;
