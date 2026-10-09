import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import FormField from "./FormField";

const FormSelect = forwardRef(
  (
    {
      label,
      name,
      options = [],
      placeholder = "Select an option",
      required = false,
      error,
      hint,
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
          <div className="relative">
            <select
              {...props}
              ref={ref}
              id={fieldId}
              name={name}
              required={required}
              defaultValue={props.defaultValue ?? ""}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={`
                mt-2 h-12 w-full appearance-none rounded-[9px]
                border bg-white pl-4 pr-10 text-[12px]
                font-medium text-brand-ink outline-none transition
                disabled:cursor-not-allowed disabled:bg-brand-5
                ${
                  invalid
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
                    : "border-brand-90/10 focus:border-brand-60 focus:ring-2 focus:ring-brand-60/10"
                }
              `}
            >
              <option value="" disabled>
                {placeholder}
              </option>

              {options.map((option) => {
                const normalized =
                  typeof option === "string"
                    ? { label: option, value: option }
                    : option;

                return (
                  <option
                    key={normalized.value}
                    value={normalized.value}
                    disabled={normalized.disabled}
                  >
                    {normalized.label}
                  </option>
                );
              })}
            </select>

            <ChevronDown
              size={15}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-[26px] text-brand-ink/45"
            />
          </div>
        )}
      </FormField>
    );
  },
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
