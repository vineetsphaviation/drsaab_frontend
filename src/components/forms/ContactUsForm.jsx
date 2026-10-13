import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

import FormInput from "./fields/FormInput";
import FormSelect from "./fields/FormSelect";
import FormTextarea from "./fields/FormTextarea";
import FormCheckbox from "./fields/FormCheckbox";
import FormErrorSummary from "./fields/FormErrorSummary";
import { getFormErrorMessages } from "./fields/formErrorUtils";

const DEFAULT_VALUES = {
  fullName: "",
  organisation: "",
  designation: "",
  mobile: "",
  email: "",
  state: "",
  district: "",
  enquiryCategory: "",
  message: "",
  consent: false,
};

const ENQUIRY_CATEGORIES = [
  { label: "Book a Service", value: "BOOK_SERVICE" },
  { label: "Franchise", value: "FRANCHISE" },
  { label: "Mechanic Registration", value: "MECHANIC_REGISTRATION" },
  { label: "Training", value: "TRAINING" },
  { label: "OEM Partnership", value: "OEM_PARTNERSHIP" },
  { label: "Fleet Partnership", value: "FLEET_PARTNERSHIP" },
  { label: "Government Partnership", value: "GOVERNMENT_PARTNERSHIP" },
  { label: "College Partnership", value: "COLLEGE_PARTNERSHIP" },
  { label: "Finance Partnership", value: "FINANCE_PARTNERSHIP" },
  { label: "Media", value: "MEDIA" },
  { label: "General Enquiry", value: "GENERAL" },
];

const ContactUsForm = ({
  defaultEnquiry = "",
  onSubmit,
  isSubmitting: isSubmittingFromApi = false,
}) => {
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting: isFormSubmitting },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...DEFAULT_VALUES,
      enquiryCategory: defaultEnquiry,
    },
  });

  useEffect(() => {
    if (defaultEnquiry) {
      setValue("enquiryCategory", defaultEnquiry, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [defaultEnquiry, setValue]);

  const submitForm = async (data) => {
    setSubmitError("");

    // Normalize the payload before sending it.
    const payload = {
      fullName: data.fullName.trim(),
      organisation: data.organisation.trim(),
      designation: data.designation.trim(),
      mobile: data.mobile.trim(),
      email: data.email.trim().toLowerCase(),
      state: data.state.trim(),
      district: data.district.trim(),
      enquiryCategory: data.enquiryCategory,
      message: data.message.trim(),
      consent: data.consent,
    };

    try {
      await onSubmit(payload);

      reset({
        ...DEFAULT_VALUES,
        enquiryCategory: defaultEnquiry,
      });
    } catch (error) {
      setSubmitError(
        getFormErrorMessages(
          error,
          "Unable to submit your enquiry. Please try again.",
        ).join(" "),
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      noValidate
      className="rounded-[18px] border border-brand-90/10 bg-white p-6 shadow-[0_20px_60px_rgba(3,78,55,.06)] sm:p-8"
    >
      {/* 01 — PERSONAL */}
      <FormSectionHeading
        number="01"
        title="Personal"
        description="How can we reach you?"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormInput
          label="Full Name"
          placeholder="Your full name"
          autoComplete="name"
          required
          maxLength={100}
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Please enter your full name.",
            setValueAs: (value) => value.trim(),
            maxLength: {
              value: 100,
              message: "Name cannot exceed 100 characters.",
            },
          })}
        />

        <FormInput
          label="Mobile Number"
          type="tel"
          placeholder="Your mobile number"
          autoComplete="tel"
          required
          error={errors.mobile?.message}
          {...register("mobile", {
            required: "Please enter your mobile number.",
            setValueAs: (value) => value.trim(),
          })}
        />

        <FormInput
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          maxLength={254}
          className="sm:col-span-2"
          error={errors.email?.message}
          {...register("email", {
            required: "Please enter your email address.",
            setValueAs: (value) => value.trim().toLowerCase(),
            maxLength: {
              value: 254,
              message: "Email cannot exceed 254 characters.",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
      </div>

      <FormDivider />

      {/* 02 — ORGANISATION */}
      <FormSectionHeading
        number="02"
        title="Organisation"
        description="Tell us about your organisation, if applicable."
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormInput
          label="Organisation"
          placeholder="Organisation / company name"
          autoComplete="organization"
          maxLength={150}
          error={errors.organisation?.message}
          {...register("organisation", {
            setValueAs: (value) => value.trim(),
            maxLength: {
              value: 150,
              message: "Organisation cannot exceed 150 characters.",
            },
          })}
        />

        <FormInput
          label="Designation"
          placeholder="Your designation"
          maxLength={100}
          error={errors.designation?.message}
          {...register("designation", {
            setValueAs: (value) => value.trim(),
            maxLength: {
              value: 100,
              message: "Designation cannot exceed 100 characters.",
            },
          })}
        />
      </div>

      <FormDivider />

      {/* 03 — LOCATION */}
      <FormSectionHeading
        number="03"
        title="Location"
        description="Where are you based?"
      />

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormInput
          label="State"
          placeholder="Enter your state"
          autoComplete="address-level1"
          maxLength={100}
          error={errors.state?.message}
          {...register("state", {
            setValueAs: (value) => value.trim(),
            maxLength: {
              value: 100,
              message: "State cannot exceed 100 characters.",
            },
          })}
        />

        <FormInput
          label="District"
          placeholder="Enter your district"
          maxLength={100}
          error={errors.district?.message}
          {...register("district", {
            setValueAs: (value) => value.trim(),
            maxLength: {
              value: 100,
              message: "District cannot exceed 100 characters.",
            },
          })}
        />
      </div>

      <FormDivider />

      {/* 04 — ENQUIRY */}
      <FormSectionHeading
        number="04"
        title="Enquiry"
        description="What would you like to discuss?"
      />

      <div className="mt-6">
        <FormSelect
          label="Enquiry Category"
          options={ENQUIRY_CATEGORIES}
          placeholder="Select enquiry category"
          required
          error={errors.enquiryCategory?.message}
          {...register("enquiryCategory", {
            required: "Please select an enquiry category.",
            validate: (value) =>
              ENQUIRY_CATEGORIES.some((option) => option.value === value) ||
              "Please select a valid enquiry category.",
          })}
        />
      </div>

      <FormTextarea
        className="mt-5"
        label="Message"
        placeholder="Tell us about your requirement..."
        required
        rows={6}
        maxLength={5000}
        error={errors.message?.message}
        {...register("message", {
          required: "Please enter your message.",
          setValueAs: (value) => value.trim(),
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters.",
          },
          maxLength: {
            value: 5000,
            message: "Message cannot exceed 5000 characters.",
          },
        })}
      />

      <FormDivider />

      {/* CONSENT */}
      <FormCheckbox
        label="I agree to be contacted by the Dr. Saab team regarding my enquiry."
        required
        error={errors.consent?.message}
        {...register("consent", {
          validate: (value) =>
            value === true || "Consent is required to submit an enquiry.",
        })}
      />

      <FormErrorSummary fallback={submitError} className="mt-5" />

      {/* SUBMIT */}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[380px] text-[10px] leading-5 text-brand-ink/45">
          Your information will be used to understand and respond to your
          enquiry.
        </p>

        <button
          type="submit"
          disabled={isFormSubmitting || isSubmittingFromApi}
          className="inline-flex min-h-[44px] items-center justify-center rounded-[7px] border border-brand-90 bg-brand-90 px-6 py-3 text-[11px] font-black text-white transition hover:-translate-y-0.5 hover:bg-brand-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-60/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isFormSubmitting || isSubmittingFromApi ? (
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
  );
};

function FormSectionHeading({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[11px] font-black tracking-[1px] text-brand-60">
        {number}
      </span>

      <div>
        <h3 className="text-[15px] font-black text-brand-95">{title}</h3>
        <p className="mt-1 text-[11px] text-brand-ink/50">{description}</p>
      </div>
    </div>
  );
}

function FormDivider() {
  return <div className="my-8 border-t border-brand-90/10" />;
}

export default ContactUsForm;
