import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Newspaper,
  Phone,
  ShieldCheck,
  Truck,
  UserRound,
  Users,
  Wrench,
  X,
  Landmark,
  WalletCards,
  MessageCircle,
} from "lucide-react";

import {
  Button,
  CircleIcon,
  Eyebrow,
  SectionContainer,
} from "../components/ui/UI";

import supprtImage from "../assets/images/contact_us_hero.png";

const enquiryOptions = [
  {
    id: "service",
    title: "Book a Service",
    description: "Need technical support?",
    icon: <UserRound size={22} />,
    category: "Book a Service",
  },
  {
    id: "mechanic",
    title: "Mechanic Registration",
    description: "Want to upgrade your skills?",
    icon: <Wrench size={22} />,
    category: "Mechanic Registration",
  },
  {
    id: "franchise",
    title: "Franchise Enquiry",
    description: "Want to become a Dr. Saab?",
    icon: <Truck size={22} />,
    category: "Franchise",
  },
  {
    id: "oem",
    title: "OEM Partnership",
    description: "Explore after-sales collaboration.",
    icon: <Building2 size={22} />,
    category: "OEM Partnership",
  },
  {
    id: "fleet",
    title: "Fleet Partnership",
    description: "Build fleet-service support.",
    icon: <Truck size={22} />,
    category: "Fleet Partnership",
  },
  {
    id: "training",
    title: "Training Enquiry",
    description: "Explore technical training.",
    icon: <GraduationCap size={22} />,
    category: "Training",
  },
  {
    id: "government",
    title: "Government Partnership",
    description: "Discuss institutional opportunities.",
    icon: <Landmark size={22} />,
    category: "Government Partnership",
  },
  {
    id: "finance",
    title: "Finance Partnership",
    description: "Explore ecosystem collaboration.",
    icon: <WalletCards size={22} />,
    category: "Finance Partnership",
  },
  {
    id: "media",
    title: "Media Enquiry",
    description: "Press and media communication.",
    icon: <Newspaper size={22} />,
    category: "Media",
  },
];

const enquiryTypes = [
  "Book a Service",
  "Franchise",
  "Mechanic Registration",
  "Training",
  "OEM Partnership",
  "Fleet Partnership",
  "Government Partnership",
  "College Partnership",
  "Finance Partnership",
  "Media",
];

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  organisation: "",
  designation: "",
  state: "",
  district: "",
  enquiry: "",
  message: "",
  consent: false,
};

/* =========================================================
   CONTACT HERO
========================================================= */

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
              partnership, or simply have a question, our team is here to
              help you find the right way forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#contact-form"
                variant="lime"
                className="h-11 px-5"
              >
                Send an Enquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                href="mailto:info@drsaab.in"
                variant="light"
                className="h-11 px-5"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>

            {/* Trust Line */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[11px] font-bold uppercase tracking-[1px] text-white/65">
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
                  <p className="text-[10px] font-black uppercase tracking-[1.5px] text-brand-70">
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
                {/* Email */}
                <a
                  href="mailto:info@drsaab.in"
                  className="group flex items-center gap-4 rounded-xl border border-brand-90/10 bg-brand-5/60 p-4 transition hover:border-brand-60/50 hover:bg-brand-5"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand-90 shadow-sm">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[1px] text-brand-70">
                      Email
                    </p>
                    <p className="mt-1 truncate text-sm font-bold text-brand-95">
                      info@drsaab.in
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+911800000000"
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
                      +91 1800 000 000
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
              <div className="mt-5 flex items-center gap-2 border-t border-brand-90/10 pt-5 text-[11px] font-semibold text-brand-ink/60">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-60" />
                Our team is ready to assist you.
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/15 bg-brand-95 px-4 py-3 shadow-xl sm:block">
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
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const selectedEnquiry = useMemo(
    () => enquiryOptions.find((item) => item.category === form.enquiry),
    [form.enquiry],
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const selectEnquiry = (category) => {
    setForm((current) => ({
      ...current,
      enquiry: category,
    }));

    setErrors((current) => ({
      ...current,
      enquiry: "",
    }));

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.mobile.trim()) {
      nextErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s+/g, ""))) {
      nextErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.state.trim()) {
      nextErrors.state = "Please enter your state.";
    }

    if (!form.district.trim()) {
      nextErrors.district = "Please enter your district.";
    }

    if (!form.enquiry) {
      nextErrors.enquiry = "Please select an enquiry type.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please tell us how we can help.";
    }

    if (!form.consent) {
      nextErrors.consent =
        "Please agree to be contacted regarding your enquiry.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      /*
       * Replace this demo block with your API call.
       *
       * Example:
       *
       * await fetch(`${import.meta.env.VITE_API_URL}/api/v1/contact`, {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(form),
       * });
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSubmitted(true);
      setForm(initialForm);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-brand-ink">
      {/* =========================================================
          HERO
      ========================================================== */}
      <ContactUsHero />

      {/* =========================================================
          SUCCESS STATE
      ========================================================== */}
      {submitted && (
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
                onClick={() => setSubmitted(false)}
                className="text-brand-ink/35 transition hover:text-brand-95"
                aria-label="Close success message"
              >
                <X size={18} />
              </button>
            </div>
          </SectionContainer>
        </section>
      )}

      {/* =========================================================
          WHAT DO YOU NEED?
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enquiryOptions.map((item) => {
              const selected = form.enquiry === item.category;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => selectEnquiry(item.category)}
                  className={`group relative text-left rounded-[14px] border p-5 transition-all duration-200 hover:-translate-y-1 ${
                    selected
                      ? "border-brand-60 bg-brand-5 shadow-[0_12px_35px_rgba(23,144,95,.10)]"
                      : "border-brand-90/10 bg-white shadow-[0_2px_10px_rgba(3,78,55,.025)] hover:border-brand-60/25 hover:shadow-[0_12px_35px_rgba(3,78,55,.07)]"
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

      {/* =========================================================
          CONTACT FORM
      ========================================================== */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-brand-5/55 py-20 lg:py-24"
      >
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            {/* Form intro */}
            <div className="lg:sticky lg:top-28">
              <Eyebrow>CONTACT FORM</Eyebrow>

              <h2 className="mt-3 text-3xl font-black tracking-[-1px] text-brand-95 sm:text-4xl">
                Tell us a little about yourself.
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-brand-ink/60">
                A few details will help us understand your requirement and
                connect you with the appropriate Dr. Saab team.
              </p>

              {selectedEnquiry && (
                <div className="mt-8 rounded-[14px] border border-brand-60/20 bg-white p-5 shadow-sm">
                  <div className="text-[9px] font-black uppercase tracking-[1px] text-brand-70">
                    CURRENT ENQUIRY
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <CircleIcon>{selectedEnquiry.icon}</CircleIcon>

                    <div>
                      <div className="text-[13px] font-black text-brand-95">
                        {selectedEnquiry.title}
                      </div>

                      <div className="mt-1 text-[10px] text-brand-ink/45">
                        {selectedEnquiry.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 space-y-3">
                <ContactMiniCard
                  icon={<Phone size={17} />}
                  title="Customer Support"
                  value="For service & technical assistance"
                />

                <ContactMiniCard
                  icon={<MessageSquare size={17} />}
                  title="Partnerships"
                  value="For enterprise & ecosystem enquiries"
                />

                <ContactMiniCard
                  icon={<Mail size={17} />}
                  title="Email"
                  value="For formal communication"
                />
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[18px] border border-brand-90/10 bg-white p-6 shadow-[0_20px_60px_rgba(3,78,55,.06)] sm:p-8"
            >
              {/* Personal */}
              <FormSection
                number="01"
                title="Personal"
                description="How can we reach you?"
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <InputField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  error={errors.name}
                />

                <InputField
                  label="Mobile Number"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  type="tel"
                  required
                  error={errors.mobile}
                />

                <InputField
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  error={errors.email}
                  className="sm:col-span-2"
                />
              </div>

              <FormDivider />

              {/* Organisation */}
              <FormSection
                number="02"
                title="Organisation"
                description="Tell us about your organisation, if applicable."
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <InputField
                  label="Organisation"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleChange}
                  placeholder="Organisation / company name"
                />

                <InputField
                  label="Designation"
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Your designation"
                />
              </div>

              <FormDivider />

              {/* Location */}
              <FormSection
                number="03"
                title="Location"
                description="Where are you based?"
              />

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <InputField
                  label="State"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  required
                  error={errors.state}
                />

                <InputField
                  label="District"
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                  placeholder="District"
                  required
                  error={errors.district}
                />
              </div>

              <FormDivider />

              {/* Enquiry */}
              <FormSection
                number="04"
                title="Enquiry"
                description="What would you like to discuss?"
              />

              <div className="mt-6">
                <SelectField
                  label="Enquiry Type"
                  name="enquiry"
                  value={form.enquiry}
                  onChange={handleChange}
                  options={enquiryTypes}
                  placeholder="Select enquiry type"
                  required
                  error={errors.enquiry}
                />
              </div>

              <div className="mt-5">
                <label className="block">
                  <span className="mb-2 block text-[10px] font-black uppercase tracking-[.8px] text-brand-95">
                    Message
                    <span className="ml-1 text-brand-70">*</span>
                  </span>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your requirement..."
                    className={`w-full resize-none rounded-[9px] border bg-white px-4 py-3 text-[12px] text-brand-ink outline-none transition placeholder:text-brand-ink/25 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10 ${
                      errors.message ? "border-red-400" : "border-brand-90/10"
                    }`}
                  />

                  {errors.message && <FieldError>{errors.message}</FieldError>}
                </label>
              </div>

              <FormDivider />

              {/* Consent */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#075f45]"
                  />

                  <span className="text-[11px] leading-5 text-brand-ink/55">
                    I agree to be contacted by the Dr. Saab team regarding my
                    enquiry.
                  </span>
                </label>

                {errors.consent && <FieldError>{errors.consent}</FieldError>}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[380px] text-[10px] leading-5 text-brand-ink/35">
                  Your information will be used to understand and respond to
                  your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-[7px] border border-brand-90 bg-brand-90 px-6 py-3 text-[11px] font-black text-white transition hover:-translate-y-0.5 hover:bg-brand-80 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="mr-2 h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ArrowRight size={14} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}
      <section className="bg-white py-12">
        <SectionContainer>
          <div className="grid gap-5 sm:grid-cols-3">
            <TrustItem
              icon={<ShieldCheck size={19} />}
              title="Structured Enquiries"
              text="Your request is captured with a defined enquiry category."
            />

            <TrustItem
              icon={<Users size={19} />}
              title="Right Team"
              text="Information helps route your enquiry to the appropriate function."
            />

            <TrustItem
              icon={<MessageSquare size={19} />}
              title="Clear Communication"
              text="A structured form makes the next conversation easier."
            />
          </div>
        </SectionContainer>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-brand-90 py-16 text-white lg:py-20">
        <SectionContainer>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[700px]">
              <Eyebrow light>DR. SAAB</Eyebrow>

              <h2 className="mt-3 text-3xl font-black tracking-[-1px] sm:text-4xl">
                Not sure which option is right for you?
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-white/60">
                That's okay. Submit a general enquiry and describe what you
                need. Our team can determine the appropriate route.
              </p>
            </div>

            <Button href="#contact-form" variant="light" className="shrink-0">
              Send a General Enquiry
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </SectionContainer>
      </section>
    </div>
  );
};

/* =========================================================
   FORM COMPONENTS
========================================================= */

function FormSection({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-95 text-[9px] font-black text-brand-lime">
        {number}
      </div>

      <div>
        <h3 className="text-[15px] font-black text-brand-95">{title}</h3>

        <p className="mt-1 text-[11px] text-brand-ink/45">{description}</p>
      </div>
    </div>
  );
}

function FormDivider() {
  return <div className="my-8 h-px bg-brand-90/8" />;
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error,
  className = "",
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-[10px] font-black uppercase tracking-[.8px] text-brand-95">
        {label}
        {required && <span className="ml-1 text-brand-70">*</span>}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-[44px] w-full rounded-[9px] border bg-white px-4 text-[12px] text-brand-ink outline-none transition placeholder:text-brand-ink/25 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10 ${
          error ? "border-red-400" : "border-brand-90/10"
        }`}
      />

      {error && <FieldError>{error}</FieldError>}
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  error,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-black uppercase tracking-[.8px] text-brand-95">
        {label}
        {required && <span className="ml-1 text-brand-70">*</span>}
      </span>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`h-[44px] w-full appearance-none rounded-[9px] border bg-white px-4 pr-10 text-[12px] outline-none transition focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10 ${
            value ? "text-brand-ink" : "text-brand-ink/30"
          } ${error ? "border-red-400" : "border-brand-90/10"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-ink/35"
        />
      </div>

      {error && <FieldError>{error}</FieldError>}
    </label>
  );
}

function FieldError({ children }) {
  return (
    <span className="mt-1.5 block text-[10px] font-semibold text-red-500">
      {children}
    </span>
  );
}

function ContactMiniCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-3 rounded-[12px] border border-brand-90/10 bg-white p-4 shadow-[0_2px_10px_rgba(3,78,55,.025)]">
      <CircleIcon className="h-9 w-9 bg-brand-5 text-brand-70">
        {icon}
      </CircleIcon>

      <div>
        <div className="text-[11px] font-black text-brand-95">{title}</div>

        <div className="mt-0.5 text-[10px] text-brand-ink/45">{value}</div>
      </div>
    </div>
  );
}

function TrustItem({ icon, title, text }) {
  return (
    <div className="rounded-[13px] border border-brand-90/10 bg-brand-5/40 p-5">
      <div className="text-brand-70">{icon}</div>

      <h3 className="mt-4 text-[12px] font-black text-brand-95">{title}</h3>

      <p className="mt-2 text-[11px] leading-5 text-brand-ink/50">{text}</p>
    </div>
  );
}

export default ContactUs;
