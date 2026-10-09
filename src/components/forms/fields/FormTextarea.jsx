import { forwardRef } from "react";
import FormField from "./FormField";

const FormTextarea = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      required = false,
      error,
      hint,
      rows = 5,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <FormField
        label={label}
        name={name}
        id={id}
        required={required}
        hint={hint}
        error={error}
        className={className}
      >
        {({ id: fieldId, describedBy, invalid }) => (
          <textarea
            {...props}
            ref={ref}
            id={fieldId}
            name={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            className={`
              mt-2 min-h-[130px] w-full resize-y rounded-[9px]
              border bg-white px-4 py-3 text-[12px]
              font-medium leading-6 text-brand-ink
              outline-none transition
              placeholder:text-brand-ink/30
              disabled:cursor-not-allowed disabled:bg-brand-5
              ${
                invalid
                  ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                  : "border-brand-90/10 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
              }
            `}
          />
        )}
      </FormField>
    );
  },
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
