import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

import FormInput from "./fields/FormInput";
import FormSelect from "./fields/FormSelect";
import FormTextarea from "./fields/FormTextarea";
import FormError from "./fields/FormError";
import { SectionContainer } from "../ui/UI";

const SERVICE_CATEGORIES = [
  { label: "EV Services", value: "EV" },
  { label: "Battery Services", value: "BATTERY" },
  { label: "Drone Services", value: "DRONE" },
  { label: "Solar & Inverter Services", value: "SOLAR_INVERTER" },
  { label: "Roadside Assistance", value: "ROADSIDE_ASSISTANCE" },
  { label: "Fleet Services", value: "FLEET" },
  { label: "Spare Parts", value: "SPARE_PARTS" },
  { label: "Other", value: "OTHER" },
];

const TIME_SLOTS = [
  { label: "Morning (9 AM – 12 PM)", value: "MORNING" },
  { label: "Afternoon (12 PM – 4 PM)", value: "AFTERNOON" },
  { label: "Evening (4 PM – 7 PM)", value: "EVENING" },
];

const STEPS = [
  {
    number: "01",
    title: "Your details",
    description: "Tell us how to reach you.",
    icon: ShieldCheck,
    fields: ["fullName", "mobile", "whatsappNumber", "email"],
  },
  {
    number: "02",
    title: "Your location",
    description: "Help us identify your service area.",
    icon: MapPin,
    fields: ["state", "district", "city", "block", "panchayat", "pinCode"],
  },
  {
    number: "03",
    title: "Service required",
    description: "Describe the support you need.",
    icon: Wrench,
    fields: [
      "serviceCategory",
      "vehicleType",
      "vehicleBrand",
      "vehicleModel",
      "issueDescription",
    ],
  },
  {
    number: "04",
    title: "Schedule & confirm",
    description: "Choose a preferred time and submit.",
    icon: Clock3,
    fields: ["preferredDate", "preferredTime", "isEmergency", "consent"],
  },
];

const DEFAULT_VALUES = {
  fullName: "",
  mobile: "",
  whatsappNumber: "",
  email: "",
  state: "",
  district: "",
  city: "",
  block: "",
  panchayat: "",
  pinCode: "",
  serviceCategory: "",
  vehicleType: "",
  vehicleBrand: "",
  vehicleModel: "",
  issueDescription: "",
  preferredDate: "",
  preferredTime: "",
  isEmergency: false,
  consent: false,
};

const inputRules = {
  fullName: {
    required: "Please enter your full name.",
    maxLength: {
      value: 100,
      message: "Name cannot exceed 100 characters.",
    },
  },
  mobile: {
    required: "Please enter your mobile number.",
  },
  state: {
    required: "Please enter your state.",
  },
  district: {
    required: "Please enter your district.",
  },
  pinCode: {
    required: "Please enter your PIN code.",
  },
  serviceCategory: {
    required: "Please select a service category.",
    validate: (value) =>
      SERVICE_CATEGORIES.some((item) => item.value === value) ||
      "Please select a valid service category.",
  },
  issueDescription: {
    required: "Please describe the issue.",
    maxLength: {
      value: 3000,
      message: "Description cannot exceed 3000 characters.",
    },
  },
  consent: {
    validate: (value) => value === true || "Please provide your consent.",
  },
};

function toPayload(values) {
  const payload = {
    fullName: values.fullName.trim(),
    mobile: values.mobile.trim(),
    state: values.state.trim(),
    district: values.district.trim(),
    pinCode: values.pinCode.trim(),
    serviceCategory: values.serviceCategory,
    issueDescription: values.issueDescription.trim(),
    isEmergency: Boolean(values.isEmergency),
    consent: values.consent === true,
  };

  const optionalTextFields = [
    "whatsappNumber",
    "email",
    "city",
    "block",
    "panchayat",
    "vehicleType",
    "vehicleBrand",
    "vehicleModel",
    "preferredTime",
  ];

  optionalTextFields.forEach((field) => {
    const value = values[field]?.trim();

    if (value) {
      payload[field] = field === "email" ? value.toLowerCase() : value;
    }
  });

  if (values.preferredDate) {
    payload.preferredDate = new Date(
      `${values.preferredDate}T00:00:00.000Z`,
    ).toISOString();
  }

  return payload;
}

export default function ServiceRequestForm({
  defaultServiceCategory = "",
  onSubmit,
  onClose,
  imageSrc,
}) {
  const formId = useId();

  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      ...DEFAULT_VALUES,
      serviceCategory: defaultServiceCategory,
    },
  });

  const isEmergency = watch("isEmergency");
  const currentStep = STEPS[activeStep];
  const progress = ((activeStep + 1) / STEPS.length) * 100;

  useEffect(() => {
    if (defaultServiceCategory) {
      setValue("serviceCategory", defaultServiceCategory, {
        shouldValidate: false,
      });
    }
  }, [defaultServiceCategory, setValue]);

  const goToNextStep = async () => {
    setSubmissionError("");

    const isStepValid = await trigger(currentStep.fields, {
      shouldFocus: true,
    });

    if (!isStepValid) return;

    setActiveStep((step) => Math.min(step + 1, STEPS.length - 1));
  };

  const goToPreviousStep = () => {
    setSubmissionError("");
    setActiveStep((step) => Math.max(step - 1, 0));
  };

  const submitForm = async (values) => {
    if (typeof onSubmit !== "function") {
      setSubmissionError("Service request submission is not configured yet.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      await onSubmit(toPayload(values));
      setIsSubmitted(true);
    } catch (error) {
      setSubmissionError(
        error?.data?.message ||
          error?.message ||
          "We couldn't submit your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full rounded-3xl border border-brand-90/10 bg-white px-5 py-14 text-center sm:px-10 sm:py-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-10 text-brand-90">
          <CheckCircle2 size={32} />
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-80">
          Request submitted
        </p>

        <h3 className="mt-3 text-2xl font-bold text-brand-ink sm:text-3xl">
          Thank you for reaching out.
        </h3>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-brand-ink/65">
          Your service request has been submitted successfully. Our team can
          review your details and follow up with you.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-brand-90/15 px-6 py-3 text-sm font-bold text-brand-90 transition hover:bg-brand-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
        >
          Close
        </button>
      </div>
    );
  }

  const StepIcon = currentStep.icon;

  return (
    <SectionContainer>
      <div
        id={formId}
        className="w-full overflow-hidden rounded-3xl border border-brand-90/10 bg-white my-2"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Visual panel */}
          <aside className="relative isolate overflow-hidden bg-brand-95 text-white">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Dr. Saab technical service support"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-70 via-brand-90 to-brand-95" />
            )}

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-95/90 via-brand-95/75 to-brand-90/90" />

            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-brand-60/15 blur-3xl" />

            <div className="relative flex flex-col gap-8 p-5 sm:p-7 lg:p-8">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-lime">
                  <BatteryCharging size={28} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-brand-lime">
                  Your service journey
                </p>

                <h3 className="mt-3 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                  Reliable support.
                  <span className="block text-white/65">Clear next steps.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                  Tell us what you need and provide the details our team needs
                  to understand your service request.
                </p>
              </div>

              <div className="space-y-3">
                <VisualTrustItem
                  icon={ShieldCheck}
                  title="Your details, handled responsibly"
                  description="Your information helps us respond to your request."
                />

                <VisualTrustItem
                  icon={MapPin}
                  title="Location-aware assistance"
                  description="Share your area to help us understand where service is needed."
                />

                <VisualTrustItem
                  icon={Zap}
                  title="A simple guided process"
                  description="Complete each step before submitting your request."
                />
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="min-w-0 bg-white p-4 sm:p-6 lg:p-7">
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-80">
                    Step {activeStep + 1} of {STEPS.length}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">
                    {currentStep.title}
                  </h3>

                  <p className="mt-2 text-sm text-brand-ink/65">
                    {currentStep.description}
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-5 text-brand-90">
                  <StepIcon size={22} />
                </div>
              </div>

              <div
                className="mt-6 h-2 overflow-hidden rounded-full bg-brand-5"
                role="progressbar"
                aria-label="Service request progress"
                aria-valuemin={1}
                aria-valuemax={STEPS.length}
                aria-valuenow={activeStep + 1}
              >
                <div
                  className="h-full rounded-full bg-brand-60 transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {STEPS.map((step, index) => (
                  <div
                    key={step.number}
                    className={`text-[10px] font-bold uppercase tracking-wide sm:text-xs ${
                      index <= activeStep
                        ? "text-brand-90"
                        : "text-brand-ink/35"
                    }`}
                  >
                    <span className="block">{step.number}</span>
                    <span className="mt-1 block truncate">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit(submitForm)} noValidate>
              <div className="overflow-hidden">
                <div className="w-full">
                  {/* Step 1: Contact details */}
                  <div
                    className={activeStep === 0 ? "w-full" : "hidden"}
                    aria-hidden={activeStep !== 0}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <FormInput
                          label="Full name"
                          placeholder="Enter your full name"
                          autoComplete="name"
                          required
                          maxLength={100}
                          error={errors.fullName}
                          {...register("fullName", inputRules.fullName)}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="Mobile number"
                          type="tel"
                          placeholder="Enter mobile number"
                          autoComplete="tel"
                          required
                          error={errors.mobile}
                          {...register("mobile", inputRules.mobile)}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="WhatsApp number"
                          type="tel"
                          placeholder="Optional"
                          autoComplete="tel"
                          error={errors.whatsappNumber}
                          {...register("whatsappNumber")}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <FormInput
                          label="Email address"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          error={errors.email}
                          {...register("email")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Location */}
                  <div
                    className={activeStep === 1 ? "w-full" : "hidden"}
                    aria-hidden={activeStep !== 1}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <FormInput
                          label="State"
                          placeholder="Enter state"
                          autoComplete="address-level1"
                          required
                          error={errors.state}
                          {...register("state", inputRules.state)}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="District"
                          placeholder="Enter district"
                          autoComplete="address-level2"
                          required
                          error={errors.district}
                          {...register("district", inputRules.district)}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="City / Town"
                          placeholder="Optional"
                          autoComplete="address-level2"
                          error={errors.city}
                          {...register("city")}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="Block"
                          placeholder="Optional"
                          error={errors.block}
                          {...register("block")}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="Panchayat / Village"
                          placeholder="Optional"
                          error={errors.panchayat}
                          {...register("panchayat")}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="PIN code"
                          placeholder="Enter PIN code"
                          autoComplete="postal-code"
                          required
                          error={errors.pinCode}
                          {...register("pinCode", inputRules.pinCode)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Service details */}
                  <div
                    className={activeStep === 2 ? "w-full" : "hidden"}
                    aria-hidden={activeStep !== 2}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <FormSelect
                          label="Service category"
                          options={SERVICE_CATEGORIES}
                          placeholder="Select a service"
                          required
                          error={errors.serviceCategory}
                          {...register(
                            "serviceCategory",
                            inputRules.serviceCategory,
                          )}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="Vehicle / Equipment type"
                          placeholder="e.g. Electric scooter"
                          error={errors.vehicleType}
                          {...register("vehicleType")}
                        />
                      </div>

                      <div>
                        <FormInput
                          label="Brand"
                          placeholder="e.g. Tata, Hero, DJI"
                          error={errors.vehicleBrand}
                          {...register("vehicleBrand")}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <FormInput
                          label="Model"
                          placeholder="Enter model, if applicable"
                          error={errors.vehicleModel}
                          {...register("vehicleModel")}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <FormTextarea
                          label="Describe the issue"
                          placeholder="Explain what happened and what assistance you need..."
                          rows={5}
                          required
                          maxLength={3000}
                          error={errors.issueDescription}
                          {...register(
                            "issueDescription",
                            inputRules.issueDescription,
                          )}
                        />

                        <p className="mt-2 text-right text-xs text-brand-ink/45">
                          Maximum 3000 characters
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Schedule and consent */}
                  <div
                    className={activeStep === 3 ? "w-full" : "hidden"}
                    aria-hidden={activeStep !== 3}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <FormInput
                          label="Preferred date"
                          type="date"
                          min={new Date().toISOString().slice(0, 10)}
                          error={errors.preferredDate}
                          {...register("preferredDate")}
                        />

                        <p className="mt-2 text-xs text-brand-ink/50">
                          Optional. This is not a confirmed appointment.
                        </p>
                      </div>

                      <div>
                        <FormSelect
                          label="Preferred time"
                          options={TIME_SLOTS}
                          placeholder="Select a time"
                          error={errors.preferredTime}
                          {...register("preferredTime")}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                            isEmergency
                              ? "border-brand-60 bg-brand-5"
                              : "border-brand-90/10 hover:border-brand-90/25"
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 accent-brand-90"
                            {...register("isEmergency")}
                          />

                          <span>
                            <span className="block text-sm font-bold text-brand-ink">
                              This is an emergency
                            </span>

                            <span className="mt-1 block text-sm leading-6 text-brand-ink/60">
                              Flag this request as urgent. This does not
                              guarantee immediate assistance.
                            </span>
                          </span>
                        </label>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-brand-90/10 p-4">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 accent-brand-90"
                            {...register("consent", inputRules.consent)}
                          />

                          <span className="text-sm leading-6 text-brand-ink/75">
                            I consent to Dr. Saab using the information provided
                            to process and respond to this service request.
                            <span className="ml-1 text-brand-80">*</span>
                          </span>
                        </label>

                        {errors.consent && <FormError error={errors.consent} />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation and close */}
                <div className="mt-8 flex flex-col gap-3 border-t border-brand-90/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={activeStep === 0 ? onClose : goToPreviousStep}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-90/15 px-8 py-3 text-sm font-bold text-brand-90 transition hover:bg-brand-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
                  >
                    {activeStep === 0 ? (
                      "Close"
                    ) : (
                      <>
                        <ArrowLeft size={17} />
                        Previous
                      </>
                    )}
                  </button>

                  {activeStep < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={goToNextStep}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-90 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
                    >
                      Continue
                      <ArrowRight size={17} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-90 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-95 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      {!isSubmitting && <ArrowRight size={17} />}
                    </button>
                  )}
                </div>

                <p className="mt-5 text-center text-xs leading-5 text-brand-ink/50">
                  Fields marked * are required. Submitting this form sends a
                  service request, not a confirmed booking.
                </p>
              </div>

              {submissionError && (
                <div
                  role="alert"
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                >
                  {submissionError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function VisualTrustItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-lime">
        <Icon size={19} />
      </div>

      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-1 text-xs leading-5 text-white/60">{description}</p>
      </div>
    </div>
  );
}
