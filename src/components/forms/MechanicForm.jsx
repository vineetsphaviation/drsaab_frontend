import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  GraduationCap,
  MapPin,
  UserRound,
} from "lucide-react";

import FormInput from "./fields/FormInput";
import FormSelect from "./fields/FormSelect";
import FormTextarea from "./fields/FormTextarea";
import FormCheckbox from "./fields/FormCheckbox";
import FormError from "./fields/FormError";
import FormErrorSummary from "./fields/FormErrorSummary";
import { getFormErrorMessages } from "./fields/formErrorUtils";

const MECHANIC_OCCUPATIONS = [
  "MECHANIC",
  "ELECTRICIAN",
  "EV_TECHNICIAN",
  "BATTERY_DEALER",
  "SOLAR_TECHNICIAN",
  "DRONE_PILOT",
  "WORKSHOP_OWNER",
  "ITI_GRADUATE",
  "POLYTECHNIC_GRADUATE",
  "FLEET_OPERATOR",
  "BUSINESS_OWNER",
  "STUDENT",
  "NEW_ENTREPRENEUR",
  "OTHER",
];

const INTERESTED_TRAINING = [
  "EV_FUNDAMENTALS",
  "BATTERY_CHARGING",
  "ELECTRICAL_SAFETY",
  "EV_DIAGNOSTICS",
  "TWO_WHEELER_SERVICING",
  "E_RICKSHAW_SERVICING",
  "DRONE_SUPPORT",
  "SOLAR_INVERTER",
  "BATTERY_HANDLING",
  "CUSTOMER_SERVICE",
  "DIGITAL_BOOKING",
  "INVENTORY_MANAGEMENT",
  "ENTERPRISE_OPERATIONS",
];

const PREFERRED_TRAINING_MODES = ["ONLINE", "OFFLINE", "HYBRID"];

const formatLabel = (value) =>
  value
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const OCCUPATION_OPTIONS = MECHANIC_OCCUPATIONS.map((value) => ({
  value,
  label: formatLabel(value),
}));

const TRAINING_MODE_OPTIONS = PREFERRED_TRAINING_MODES.map((value) => ({
  value,
  label: formatLabel(value),
}));

const YES_NO_OPTIONS = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const STEPS = [
  {
    title: "Personal & Location",
    description: "Tell us about yourself and where you are based.",
    icon: UserRound,
    fields: [
      "fullName",
      "mobile",
      "whatsappNumber",
      "email",
      "state",
      "district",
      "city",
      "block",
      "panchayat",
      "pinCode",
    ],
  },
  {
    title: "Professional Profile",
    description: "Share your experience, qualifications, and current work.",
    icon: MapPin,
    fields: [
      "occupation",
      "yearsOfExperience",
      "technicalQualification",
      "existingWorkshop",
      "businessName",
      "currentServices",
    ],
  },
  {
    title: "Training Preferences",
    description:
      "Choose the training programs and learning mode that suit you.",
    icon: GraduationCap,
    fields: ["interestedTraining", "preferredTrainingMode", "consent"],
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
  occupation: "",
  yearsOfExperience: "",
  technicalQualification: "",
  existingWorkshop: false,
  businessName: "",
  currentServices: "",
  interestedTraining: [],
  preferredTrainingMode: "",
  consent: false,
};

const REQUIRED_MESSAGES = {
  fullName: "Please enter your full name.",
  mobile: "Please enter your mobile number.",
  state: "Please enter your state.",
  district: "Please enter your district.",
  pinCode: "Please enter your PIN code.",
  occupation: "Please select your occupation.",
  preferredTrainingMode: "Please select your preferred training mode.",
};

function getErrorMessage(errors, name) {
  return errors[name]?.message;
}

const MechanicForm = ({
  onSubmit,
  onClose,
  defaultValues = {},
  isLoading = false,
  isSuccess = false,
  apiError = null,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [submissionError, setSubmissionError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...DEFAULT_VALUES,
      ...defaultValues,
      interestedTraining: defaultValues.interestedTraining || [],
    },
    mode: "onTouched",
  });

  const {
    field: trainingField,
    fieldState: { error: trainingError },
  } = useController({
    control,
    name: "interestedTraining",
    rules: {
      validate: (value) =>
        (Array.isArray(value) && value.length > 0) ||
        "Select at least one training program.",
    },
  });

  const currentStep = STEPS[activeStep];
  const StepIcon = currentStep.icon;
  const progress = ((activeStep + 1) / STEPS.length) * 100;

  const selectedTraining = Array.isArray(trainingField.value)
    ? trainingField.value
    : [];
  const existingWorkshop = watch("existingWorkshop");

  const fieldRules = {
    fullName: {
      required: REQUIRED_MESSAGES.fullName,
      maxLength: {
        value: 100,
        message: "Name cannot exceed 100 characters.",
      },
    },
    mobile: {
      required: REQUIRED_MESSAGES.mobile,
    },
    email: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address.",
      },
    },
    state: {
      required: REQUIRED_MESSAGES.state,
      maxLength: {
        value: 100,
        message: "State cannot exceed 100 characters.",
      },
    },
    district: {
      required: REQUIRED_MESSAGES.district,
      maxLength: {
        value: 100,
        message: "District cannot exceed 100 characters.",
      },
    },
    pinCode: {
      required: REQUIRED_MESSAGES.pinCode,
    },
    occupation: {
      required: REQUIRED_MESSAGES.occupation,
    },
    preferredTrainingMode: {
      required: REQUIRED_MESSAGES.preferredTrainingMode,
    },
    consent: {
      validate: (value) =>
        value === true || "Consent is required to submit your application.",
    },
  };

  const goToNextStep = async () => {
    const valid = await trigger(currentStep.fields);

    if (valid) {
      setSubmissionError("");
      setActiveStep((step) => Math.min(step + 1, STEPS.length - 1));
    }
  };

  const goToPreviousStep = () => {
    setSubmissionError("");
    setActiveStep((step) => Math.max(step - 1, 0));
  };

  const submitForm = async (values) => {
    setSubmissionError("");

    try {
      if (typeof onSubmit !== "function") {
        throw new Error("Application submission handler is not configured.");
      }

      const payload = {
        ...values,
        fullName: values.fullName.trim(),
        mobile: values.mobile.trim(),
        whatsappNumber: values.whatsappNumber.trim() || null,
        email: values.email.trim().toLowerCase() || null,
        state: values.state.trim(),
        district: values.district.trim(),
        city: values.city.trim() || null,
        block: values.block.trim() || null,
        panchayat: values.panchayat.trim() || null,
        pinCode: values.pinCode.trim(),
        yearsOfExperience:
          values.yearsOfExperience === ""
            ? null
            : Number(values.yearsOfExperience),
        technicalQualification: values.technicalQualification.trim() || null,
        existingWorkshop: Boolean(values.existingWorkshop),
        businessName: values.businessName.trim() || null,
        currentServices: values.currentServices.trim() || null,
        interestedTraining: values.interestedTraining,
        consent: Boolean(values.consent),
      };

      await onSubmit(payload);
    } catch (error) {
      setSubmissionError(
        getFormErrorMessages(
          error,
          "We couldn't submit your application. Please try again.",
        ).join(" "),
      );
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full rounded-3xl border border-brand-90/10 bg-white p-6 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-5 text-brand-90">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-5 text-2xl font-bold text-brand-ink">
          Application submitted
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-ink/65">
          Thank you for your interest in Dr. Saab training programs. Our team
          will review your application and contact you about the next steps.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-90 px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-95"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-brand-90/10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
        {/* Information panel */}
        <aside className="relative isolate overflow-hidden bg-brand-95 text-white">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-70 via-brand-90 to-brand-95" />

          <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full border border-white/10" />

          <div className="absolute -bottom-20 -left-16 -z-10 h-56 w-56 rounded-full bg-brand-60/15 blur-3xl" />

          <div className="relative flex flex-col gap-7 p-5 sm:p-7 lg:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-lime">
              <BatteryCharging size={28} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-lime">
                Mechanic & Technician Program
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Upgrade your skills.
                <span className="block text-white/65">Build your future.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Explore practical training across EVs, batteries, electrical
                safety, drones, solar systems, and service operations.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Training suited to your work",
                  description:
                    "Choose programs that match your interests and experience.",
                },
                {
                  title: "Flexible learning preferences",
                  description:
                    "Tell us whether online, offline, or hybrid training suits you.",
                },
                {
                  title: "A guided application",
                  description:
                    "Submit your details for review by the Dr. Saab team.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-brand-lime"
                  />

                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Form panel */}
        <div className="min-w-0 bg-white p-4 sm:p-6 lg:p-7">
          <div className="mb-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-80">
                  Step {activeStep + 1} of {STEPS.length}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-brand-ink sm:text-3xl">
                  {currentStep.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-brand-ink/65">
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
              aria-label="Mechanic application progress"
              aria-valuemin={1}
              aria-valuemax={STEPS.length}
              aria-valuenow={activeStep + 1}
            >
              <div
                className="h-full rounded-full bg-brand-60 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className={`text-[12px] font-bold uppercase tracking-wide sm:text-xs ${
                    index <= activeStep ? "text-brand-90" : "text-brand-ink/35"
                  }`}
                >
                  <span className="block">{index + 1}</span>
                  <span className="mt-1 block">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(submitForm)} noValidate>
            {/* STEP 1: PERSONAL AND LOCATION */}
            {activeStep === 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput
                  label="Full name"
                  name="fullName"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  error={getErrorMessage(errors, "fullName")}
                  {...register("fullName", fieldRules.fullName)}
                />

                <FormInput
                  label="Mobile number"
                  name="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  autoComplete="tel"
                  required
                  error={getErrorMessage(errors, "mobile")}
                  {...register("mobile", fieldRules.mobile)}
                />

                <FormInput
                  label="WhatsApp number"
                  name="whatsappNumber"
                  type="tel"
                  placeholder="Optional"
                  autoComplete="tel"
                  {...register("whatsappNumber")}
                />

                <FormInput
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  error={getErrorMessage(errors, "email")}
                  {...register("email", fieldRules.email)}
                />

                <FormInput
                  label="State"
                  name="state"
                  placeholder="Enter state"
                  autoComplete="address-level1"
                  required
                  error={getErrorMessage(errors, "state")}
                  {...register("state", fieldRules.state)}
                />

                <FormInput
                  label="District"
                  name="district"
                  placeholder="Enter district"
                  autoComplete="address-level2"
                  required
                  error={getErrorMessage(errors, "district")}
                  {...register("district", fieldRules.district)}
                />

                <FormInput
                  label="City / Town"
                  name="city"
                  placeholder="Optional"
                  {...register("city")}
                />

                <FormInput
                  label="Block"
                  name="block"
                  placeholder="Optional"
                  {...register("block")}
                />

                <FormInput
                  label="Panchayat / Village"
                  name="panchayat"
                  placeholder="Optional"
                  {...register("panchayat")}
                />

                <FormInput
                  label="PIN code"
                  name="pinCode"
                  placeholder="Enter PIN code"
                  autoComplete="postal-code"
                  required
                  error={getErrorMessage(errors, "pinCode")}
                  {...register("pinCode", fieldRules.pinCode)}
                />
              </div>
            )}

            {/* STEP 2: PROFESSIONAL PROFILE */}
            {activeStep === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <FormSelect
                  label="Occupation"
                  name="occupation"
                  options={OCCUPATION_OPTIONS}
                  placeholder="Select occupation"
                  required
                  error={getErrorMessage(errors, "occupation")}
                  {...register("occupation", fieldRules.occupation)}
                />

                <FormInput
                  label="Years of experience"
                  name="yearsOfExperience"
                  type="number"
                  placeholder="Enter years of experience"
                  min={0}
                  max={80}
                  error={getErrorMessage(errors, "yearsOfExperience")}
                  {...register("yearsOfExperience", {
                    setValueAs: (value) => (value === "" ? "" : Number(value)),
                    min: {
                      value: 0,
                      message: "Experience cannot be negative.",
                    },
                    max: {
                      value: 80,
                      message: "Enter a value up to 80 years.",
                    },
                  })}
                />

                <FormInput
                  label="Technical qualification"
                  name="technicalQualification"
                  placeholder="e.g. ITI, Diploma"
                  maxLength={200}
                  {...register("technicalQualification")}
                />

                <FormSelect
                  label="Do you have an existing workshop?"
                  name="existingWorkshop"
                  options={YES_NO_OPTIONS}
                  required
                  {...register("existingWorkshop", {
                    setValueAs: (value) => value === "true",
                  })}
                />

                {existingWorkshop && (
                  <FormInput
                    label="Business / workshop name"
                    name="businessName"
                    placeholder="Enter workshop name"
                    maxLength={150}
                    {...register("businessName")}
                  />
                )}

                <div className="sm:col-span-2">
                  <FormTextarea
                    label="Current services or work"
                    name="currentServices"
                    placeholder="Describe your current work, repairs, or services..."
                    rows={4}
                    maxLength={2000}
                    {...register("currentServices")}
                  />
                </div>
              </div>
            )}

            {/* STEP 3: TRAINING AND CONSENT */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-brand-ink">
                        Interested training programs
                        <span className="ml-1 text-brand-70">*</span>
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-brand-ink/55">
                        Select one or more areas you would like to learn.
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-brand-5 px-3 py-1 text-xs font-bold text-brand-90">
                      {selectedTraining.length} selected
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {INTERESTED_TRAINING.map((training) => (
                      <FormCheckbox
                        key={training}
                        label={formatLabel(training)}
                        name="interestedTraining"
                        value={training}
                        checked={selectedTraining.includes(training)}
                        onBlur={trainingField.onBlur}
                        onChange={(event) => {
                          const nextValues = event.target.checked
                            ? [...selectedTraining, training]
                            : selectedTraining.filter(
                                (item) => item !== training,
                              );

                          trainingField.onChange(nextValues);
                        }}
                      />
                    ))}
                  </div>

                  <FormError>
                    {trainingError?.message ||
                      getErrorMessage(errors, "interestedTraining")}
                  </FormError>
                </div>

                <FormSelect
                  label="Preferred training mode"
                  name="preferredTrainingMode"
                  options={TRAINING_MODE_OPTIONS}
                  placeholder="Select training mode"
                  required
                  error={getErrorMessage(errors, "preferredTrainingMode")}
                  {...register(
                    "preferredTrainingMode",
                    fieldRules.preferredTrainingMode,
                  )}
                />

                <div className="rounded-2xl border border-brand-90/10 p-4">
                  <FormCheckbox
                    label="I consent to Dr. Saab using my information to review my application and contact me regarding training opportunities."
                    name="consent"
                    required
                    error={getErrorMessage(errors, "consent")}
                    {...register("consent", fieldRules.consent)}
                  />
                </div>
              </div>
            )}

            <FormErrorSummary error={apiError} fallback={submissionError} />

            {/* Navigation */}
            <div className="mt-8 flex flex-col gap-3 border-t border-brand-90/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={activeStep === 0 ? onClose : goToPreviousStep}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-brand-90/15 px-7 py-3 text-sm font-bold text-brand-90 transition hover:bg-brand-5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-90 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
                >
                  Continue
                  <ArrowRight size={17} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-90 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-60/30"
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                  {!isLoading && <ArrowRight size={17} />}
                </button>
              )}
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-brand-ink/50">
              Fields marked * are required. Submitting an application does not
              guarantee enrollment or a training seat.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MechanicForm;
