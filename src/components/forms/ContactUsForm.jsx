import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

import FormInput from "./fields/FormInput";
import FormSelect from "./fields/FormSelect";
import FormTextarea from "./fields/FormTextarea";
import FormCheckbox from "./fields/FormCheckbox";
import FormError from "./fields/FormError";

const DEFAULT_VALUES = {
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

const ENQUIRY_TYPES = [
  { label: "Book a Service", value: "service" },
  { label: "Technical Support", value: "technical-support" },
  { label: "Panchayat Partnership", value: "panchayat" },
  { label: "Urban Partner", value: "urban-partner" },
  { label: "Franchise", value: "franchise" },
  { label: "General Enquiry", value: "general" },
];

const ContactUsForm = ({ defaultEnquiry = "", onSubmit }) => {
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      ...DEFAULT_VALUES,
      enquiry: defaultEnquiry,
    },
  });

  // Synchronize the enquiry selected outside the form
  // without clearing other fields the user has completed.
  useEffect(() => {
    if (defaultEnquiry) {
      setValue("enquiry", defaultEnquiry, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [defaultEnquiry, setValue]);

  const submitForm = async (data) => {
    setSubmitError("");

    try {
      // Business logic/API submission stays in the parent.
      await onSubmit(data);

      reset({
        ...DEFAULT_VALUES,
        enquiry: defaultEnquiry,
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        error?.message || "We couldn't submit your enquiry. Please try again.",
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
      <div>
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-black tracking-[1px] text-brand-60">
            01
          </span>

          <div>
            <h3 className="text-[15px] font-black text-brand-95">Personal</h3>

            <p className="mt-1 text-[11px] text-brand-ink/50">
              How can we reach you?
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormInput
            label="Name"
            placeholder="Your full name"
            autoComplete="name"
            required
            error={errors.name?.message}
            {...register("name", {
              required: "Please enter your name.",
              setValueAs: (value) => value.trim(),
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
              maxLength: {
                value: 80,
                message: "Name cannot exceed 80 characters.",
              },
            })}
          />

          <FormInput
            label="Mobile Number"
            type="tel"
            placeholder="10-digit mobile number"
            autoComplete="tel"
            inputMode="numeric"
            required
            error={errors.mobile?.message}
            {...register("mobile", {
              required: "Please enter your mobile number.",
              setValueAs: (value) => value.replace(/\s+/g, ""),
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number.",
              },
            })}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="sm:col-span-2"
            error={errors.email?.message}
            {...register("email", {
              setValueAs: (value) => value.trim(),
              validate: (value) =>
                !value ||
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                "Enter a valid email address.",
            })}
          />
        </div>
      </div>

      <div className="my-8 border-t border-brand-90/10" />

      {/* 02 — ORGANISATION */}
      <div>
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-black tracking-[1px] text-brand-60">
            02
          </span>

          <div>
            <h3 className="text-[15px] font-black text-brand-95">
              Organisation
            </h3>

            <p className="mt-1 text-[11px] text-brand-ink/50">
              Tell us about your organisation, if applicable.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormInput
            label="Organisation"
            placeholder="Organisation / company name"
            autoComplete="organization"
            {...register("organisation", {
              setValueAs: (value) => value.trim(),
              maxLength: {
                value: 150,
                message: "Organisation name is too long.",
              },
            })}
          />

          <FormInput
            label="Designation"
            placeholder="Your designation"
            {...register("designation", {
              setValueAs: (value) => value.trim(),
              maxLength: {
                value: 100,
                message: "Designation is too long.",
              },
            })}
          />
        </div>
      </div>

      <div className="my-8 border-t border-brand-90/10" />

      {/* 03 — LOCATION */}
      <div>
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-black tracking-[1px] text-brand-60">
            03
          </span>

          <div>
            <h3 className="text-[15px] font-black text-brand-95">Location</h3>

            <p className="mt-1 text-[11px] text-brand-ink/50">
              Where are you based?
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormInput
            label="State"
            placeholder="Enter your state"
            autoComplete="address-level1"
            required
            error={errors.state?.message}
            {...register("state", {
              required: "Please enter your state.",
              setValueAs: (value) => value.trim(),
              maxLength: {
                value: 80,
                message: "State name is too long.",
              },
            })}
          />

          <FormInput
            label="District"
            placeholder="Enter your district"
            required
            error={errors.district?.message}
            {...register("district", {
              required: "Please enter your district.",
              setValueAs: (value) => value.trim(),
              maxLength: {
                value: 80,
                message: "District name is too long.",
              },
            })}
          />
        </div>
      </div>

      <div className="my-8 border-t border-brand-90/10" />

      {/* 04 — ENQUIRY */}
      <div>
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-black tracking-[1px] text-brand-60">
            04
          </span>

          <div>
            <h3 className="text-[15px] font-black text-brand-95">Enquiry</h3>

            <p className="mt-1 text-[11px] text-brand-ink/50">
              What would you like to discuss?
            </p>
          </div>
        </div>

        <div className="mt-6">
          <FormSelect
            label="Enquiry Type"
            options={ENQUIRY_TYPES}
            placeholder="Select enquiry type"
            required
            error={errors.enquiry?.message}
            {...register("enquiry", {
              required: "Please select an enquiry type.",
            })}
          />
        </div>

        <FormTextarea
          className="mt-5"
          label="Message"
          placeholder="Tell us about your requirement..."
          required
          rows={6}
          error={errors.message?.message}
          {...register("message", {
            required: "Please tell us how we can help.",
            setValueAs: (value) => value.trim(),
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters.",
            },
            maxLength: {
              value: 1000,
              message: "Message cannot exceed 1000 characters.",
            },
          })}
        />
      </div>

      <div className="my-8 border-t border-brand-90/10" />

      {/* CONSENT */}
      <FormCheckbox
        label="I agree to be contacted by the Dr. Saab team regarding my enquiry."
        required
        error={errors.consent?.message}
        {...register("consent", {
          required: "Please agree to be contacted regarding your enquiry.",
        })}
      />

      {/* API / SUBMISSION ERROR */}
      {submitError && (
        <div className="mt-5">
          <FormError>{submitError}</FormError>
        </div>
      )}

      {/* SUBMIT */}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[380px] text-[10px] leading-5 text-brand-ink/45">
          Your information will be used to understand and respond to your
          enquiry.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[44px] items-center justify-center rounded-[7px] border border-brand-90 bg-brand-90 px-6 py-3 text-[11px] font-black text-white transition hover:-translate-y-0.5 hover:bg-brand-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-60/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <span
                aria-hidden="true"
                className="mr-2 h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
              />
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

export default ContactUsForm;
