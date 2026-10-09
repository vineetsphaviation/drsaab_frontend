import { forwardRef } from "react";
import FormError from "./FormError";

const FormCheckbox = forwardRef(
  (
    {
      label,
      name,
      required = false,
      error,
      hint,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const fieldId = id || `field-${name}`;
    const hintId = `${fieldId}-hint`;
    const errorId = `${fieldId}-error`;

    const describedBy =
      [hint && !error ? hintId : null, error ? errorId : null]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div className={className}>
        <label
          htmlFor={fieldId}
          className="flex cursor-pointer items-start gap-3"
        >
          <input
            {...props}
            ref={ref}
            id={fieldId}
            name={name}
            type="checkbox"
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className="
              mt-0.5 h-4 w-4 shrink-0 cursor-pointer
              rounded accent-[#075f45]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-60/40
            "
          />

          <span className="text-[11px] leading-5 text-brand-ink/65">
            {label}

            {required && (
              <span className="ml-1 text-brand-70" aria-hidden="true">
                *
              </span>
            )}
          </span>
        </label>

        {hint && !error && (
          <p
            id={hintId}
            className="ml-7 mt-1.5 text-[10px] leading-4 text-brand-ink/50"
          >
            {hint}
          </p>
        )}

        <FormError id={errorId} className="ml-7">
          {error}
        </FormError>
      </div>
    );
  },
);

FormCheckbox.displayName = "FormCheckbox";

export default FormCheckbox;
