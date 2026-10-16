import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  X,
  Landmark,
  MessageCircle,
  Handshake,
  Wallet,
  Megaphone,
} from "lucide-react";
import { toast } from "sonner";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

import supprtImage from "../assets/images/contact_us_hero.png";
import ContactUsForm from "../components/forms/ContactUsForm";
import { getFormErrorMessages } from "../components/forms/fields/formErrorUtils";
import { useCreateContactEnquiryMutation } from "../features/contactEnquiries/contactEnquiryApi";

const enquiryOptions = [
  {
    id: "service",
    category: "BOOK_SERVICE",
    title: "Book a Service",
    description: "Get help with a service requirement.",
    icon: <Wrench />,
  },
  {
    id: "franchise",
    category: "FRANCHISE",
    title: "Franchise",
    description: "Explore franchise opportunities.",
    icon: <Handshake />,
  },
  {
    id: "mechanic",
    category: "MECHANIC_REGISTRATION",
    title: "Mechanic Registration",
    description: "Join the Dr. Saab service network.",
    icon: <Users />,
  },
  {
    id: "training",
    category: "TRAINING",
    title: "Training",
    description: "Enquire about technical training.",
    icon: <GraduationCap />,
  },
  {
    id: "oem",
    category: "OEM_PARTNERSHIP",
    title: "OEM Partnership",
    description: "Discuss an OEM collaboration.",
    icon: <Building2 />,
  },
  {
    id: "fleet",
    category: "FLEET_PARTNERSHIP",
    title: "Fleet Partnership",
    description: "Discuss fleet service requirements.",
    icon: <Truck />,
  },
  {
    id: "government",
    category: "GOVERNMENT_PARTNERSHIP",
    title: "Government Partnership",
    description: "Explore government initiatives.",
    icon: <Landmark />,
  },
  {
    id: "college",
    category: "COLLEGE_PARTNERSHIP",
    title: "College Partnership",
    description: "Explore institutional collaboration.",
    icon: <GraduationCap />,
  },
  {
    id: "finance",
    category: "FINANCE_PARTNERSHIP",
    title: "Finance Partnership",
    description: "Discuss financing collaborations.",
    icon: <Wallet />,
  },
  {
    id: "media",
    category: "MEDIA",
    title: "Media",
    description: "Media and communication enquiries.",
    icon: <Megaphone />,
  },
  {
    id: "general",
    category: "GENERAL",
    title: "General Enquiry",
    description: "For anything else you would like to discuss.",
    icon: <MessageSquare />,
  },
];

// CONTACT US HERO COMPONENT
const ContactUsHero = () => {
  return (
    <section className="relative isolate min-h-[540px] overflow-hidden bg-brand-95">
      {/* Background Image */}
      <img
        src={supprtImage}
        alt="People having a professional conversation"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-95 via-brand-95/85 to-brand-95/35" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-95/70 to-transparent" />

      <SectionContainer className="relative z-10 flex min-h-[540px] items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_420px]">
          {/* Left Content */}
          <div className="max-w-[680px]">
            <Eyebrow light>GET IN TOUCH</Eyebrow>

            <h1 className="mt-4 max-w-[650px] text-4xl font-black leading-[1.02] tracking-[-1.5px] text-white sm:text-5xl lg:text-[64px]">
              Let’s Start
              <br />
              <span className="text-brand-lime">a Conversation.</span>
            </h1>

            <p className="mt-6 max-w-[590px] text-base leading-7 text-white/80 sm:text-lg">
              Whether you need technical assistance, want to explore a
              partnership, or simply have a question, our team is here to help
              you find the right way forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact-form" variant="lime" className="h-11 px-5">
                Send an Enquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                href="tel:+919728395138"
                variant="light"
                className="h-11 px-5"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call +91 97283 95138
              </Button>
            </div>

            {/* Trust Line */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-bold uppercase tracking-[1px] text-white/65">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                Clear Communication
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                Guided Assistance
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
                Human Support
              </span>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative">
            <div className="rounded-2xl border border-white/15 bg-white/[0.94] p-6 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[1.5px] text-brand-70">
                    CONTACT DESK
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-95">
                    How can we help?
                  </h2>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-5 text-brand-90">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {/* Phone */}
                <a
                  href="tel:+919728395138"
                  className="group flex items-center gap-4 rounded-xl border border-brand-90/10 bg-brand-5/60 p-4 transition hover:border-brand-60/50 hover:bg-brand-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-90 shadow-sm">
                    <Phone className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[1px] text-brand-70">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-bold text-brand-95">
                      +91 97283 95138
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-xl border border-brand-90/10 bg-brand-5/60 p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-90 shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[1px] text-brand-70">
                      Service Network
                    </p>
                    <p className="mt-1 text-sm font-bold text-brand-95">
                      Rural + Urban Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Response note */}
              <div className="mt-5 flex items-center gap-2 border-t border-brand-90/10 pt-5 text-[13px] font-semibold text-brand-ink/60">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-60" />
                Our team is ready to assist you.
              </div>
            </div>

            {/* Floating Badge */}
            {/* <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/15 bg-brand-95 px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-lime text-brand-95">
                  <MessageCircle className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[1px] text-brand-lime">
                    Support
                  </p>
                  <p className="mt-0.5 text-xs font-bold text-white">
                    We’re here to help
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

const ContactUs = () => {
  const [selectedEnquiryCategory, setSelectedEnquiryCategory] = useState("");

  const [
    createContactEnquiry,
    { isLoading, isSuccess, reset: resetContactEnquiry },
  ] = useCreateContactEnquiryMutation();

  const selectedEnquiry = useMemo(
    () =>
      enquiryOptions.find((item) => item.category === selectedEnquiryCategory),
    [selectedEnquiryCategory],
  );

  const selectEnquiry = (category) => {
    setSelectedEnquiryCategory(category);

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleContactSubmit = async (data) => {
    const payload = {
      fullName: data.fullName?.trim() || data.name?.trim() || "",
      organisation: data.organisation?.trim() || "",
      designation: data.designation?.trim() || "",
      mobile: data.mobile?.trim() || "",
      email: data.email?.trim() || "",
      state: data.state?.trim() || "",
      district: data.district?.trim() || "",
      enquiryCategory:
        selectedEnquiryCategory || data.enquiryCategory || data.enquiry || "",
      message: data.message?.trim() || "",
      consent: Boolean(data.consent),
    };

    try {
      await createContactEnquiry(payload).unwrap();

      toast.success("Enquiry sent", {
        description:
          "Thank you for contacting Dr. Saab. Our team will follow up with you.",
      });

      setSelectedEnquiryCategory("");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Contact enquiry submission failed:", err);
      const message = getFormErrorMessages(
        err,
        "Unable to submit your enquiry. Please try again.",
      ).join(" ");
      toast.error("Enquiry could not be sent", { description: message });
      throw err;
    }
  };

  return (
    <div className="bg-white text-brand-ink">
      {/* HERO SECTION */}
      <ContactUsHero />

      {/* SUCCESS STATE */}
      {isSuccess && (
        <section className="bg-brand-5 py-8">
          <SectionContainer>
            <div className="flex items-start gap-4 rounded-[14px] border border-brand-60/20 bg-white p-5 shadow-sm sm:items-center">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-60 text-white">
                <Check size={20} />
              </div>

              <div className="flex-1">
                <div className="text-[14px] font-black text-brand-95">
                  Your enquiry has been captured.
                </div>

                <p className="mt-1 text-[12px] leading-5 text-brand-ink/55">
                  Thank you for contacting Dr. Saab. Our team can now review
                  your enquiry and route it to the appropriate function.
                </p>
              </div>

              <button
                type="button"
                onClick={resetContactEnquiry}
                className="text-brand-ink/35 transition hover:text-brand-95"
                aria-label="Close success message"
              >
                <X size={18} />
              </button>
            </div>
          </SectionContainer>
        </section>
      )}

      {/* WHAT DO YOU NEED? */}
      <section className="bg-white py-8 lg:py-12">
        <SectionContainer>
          <div className="max-w-[680px]">
            <Eyebrow>WHAT DO YOU NEED?</Eyebrow>

            <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95 sm:text-4xl">
              Start with the reason you're contacting us.
            </h2>

            <p className="mt-4 text-[14px] leading-7 text-brand-ink/60">
              Select an enquiry category below. We'll use it to understand which
              Dr. Saab team should handle your request.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {enquiryOptions.map((item) => {
              const selected = selectedEnquiryCategory === item.category;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => selectEnquiry(item.category)}
                  className={`group relative text-left rounded-[14px] border p-5 transition-all duration-200 hover:-translate-y-1 ${
                    selected
                      ? "border-brand-60 bg-brand-5 shadow-[0_12px_35px_rgba(23,144,95,.10)]"
                      : "border-brand-90/10 bg-white shadow-[0_2px_12px_rgba(3,78,55,.025)] hover:border-brand-60/25 hover:shadow-[0_12px_35px_rgba(3,78,55,.07)]"
                  }`}
                >
                  {selected && (
                    <div className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full bg-brand-60 text-white">
                      <Check size={13} />
                    </div>
                  )}

                  <CircleIcon
                    className={selected ? "bg-brand-90 text-brand-lime" : ""}
                  >
                    {item.icon}
                  </CircleIcon>

                  <h3 className="mt-5 text-[14px] font-black text-brand-95">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-5 text-brand-ink/55">
                    {item.description}
                  </p>

                  <div
                    className={`mt-5 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[.8px] ${
                      selected
                        ? "text-brand-70"
                        : "text-brand-ink/30 group-hover:text-brand-70"
                    }`}
                  >
                    {selected ? "Selected" : "Select Enquiry"}
                    <ArrowRight size={12} />
                  </div>
                </button>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-brand-5/55 py-14 lg:py-16"
      >
        <SectionContainer>
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            {/* Form intro */}
            <div className="lg:sticky lg:top-28">
              <Eyebrow>CONTACT FORM</Eyebrow>

              <h2 className="mt-2 text-2xl font-black tracking-[-1px] text-brand-95 sm:text-3xl">
                Tell us a little about yourself.
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-brand-ink/60">
                A few details will help us understand your requirement and
                connect you with the appropriate Dr. Saab team.
              </p>

              {selectedEnquiry && (
                <div className="mt-5 rounded-[14px] border border-brand-60/20 bg-white p-4 shadow-sm">
                  <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-70">
                    CURRENT ENQUIRY
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <CircleIcon>{selectedEnquiry.icon}</CircleIcon>

                    <div>
                      <div className="text-[13px] font-black text-brand-95">
                        {selectedEnquiry.title}
                      </div>

                      <div className="mt-0.5 text-[12px] text-brand-ink/45">
                        {selectedEnquiry.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-5">
                <ContactMiniCard
                  icon={<Phone size={17} />}
                  title="Call Dr. Saab"
                  value="+91 97283 95138"
                />
              </div>

              <div className="mt-4 space-y-2">
                <TrustItem
                  icon={<ShieldCheck size={18} />}
                  title="Structured Enquiries"
                  text="Your request is captured with a defined enquiry category."
                />

                <TrustItem
                  icon={<Users size={18} />}
                  title="Right Team"
                  text="Information helps route your enquiry to the appropriate function."
                />

                <TrustItem
                  icon={<MessageSquare size={18} />}
                  title="Clear Communication"
                  text="A structured form makes the next conversation easier."
                />
              </div>

              <div className="mt-4 rounded-2xl bg-brand-90 p-4 text-white">
                <Eyebrow light>DR. SAAB</Eyebrow>

                <h3 className="mt-2 text-lg font-black leading-tight">
                  Not sure which option is right for you?
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/70">
                  Send a general enquiry and describe what you need. Our team
                  will help find the right route.
                </p>

                <Button
                  href="#contact-form"
                  variant="light"
                  className="mt-4 w-full justify-between border-white/20 bg-white/10 px-4 py-2.5 text-white hover:bg-white hover:text-brand-95"
                >
                  Send a General Enquiry
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            <ContactUsForm
              defaultEnquiry={selectedEnquiryCategory}
              onSubmit={handleContactSubmit}
              isSubmitting={isLoading}
            />
          </div>
        </SectionContainer>
      </section>

    </div>
  );
};

// REUSABLE COMPONENTS
const ContactMiniCard = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-3 rounded-[12px] border border-brand-90/10 bg-white p-3 shadow-[0_2px_12px_rgba(3,78,55,.025)]">
      <CircleIcon className="h-8 w-8 bg-brand-5 text-brand-70">
        {icon}
      </CircleIcon>

      <div>
        <div className="text-[13px] font-black text-brand-95">{title}</div>

        <div className="mt-0.5 text-[12px] text-brand-ink/45">{value}</div>
      </div>
    </div>
  );
};

const TrustItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3 rounded-[13px] border border-brand-90/10 bg-white p-3 shadow-[0_2px_12px_rgba(3,78,55,.025)]">
      <CircleIcon className="h-8 w-8 shrink-0 bg-brand-5 text-brand-70">
        {icon}
      </CircleIcon>

      <div>
        <h3 className="text-[13px] font-black text-brand-95">{title}</h3>

        <p className="mt-0.5 text-[12px] leading-4 text-brand-ink/55">{text}</p>
      </div>
    </div>
  );
};

export default ContactUs;
