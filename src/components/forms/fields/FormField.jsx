import { useId } from "react";
import FormError from "./FormError";

const FormField = ({
  label,
  name,
  required = false,
  hint,
  error,
  children,
  className = "",
  id: providedId,
}) => {
  const generatedId = useId();
  const fieldId = providedId || `field-${name || generatedId}`;
  const hintId = `${fieldId}-hint`;
  const errorId = `${fieldId}-error`;

  const describedBy =
    [hint && !error ? hintId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className={`min-w-0 ${className}`}>
      {label && (
        <label
          htmlFor={fieldId}
          className="block text-[10px] font-black uppercase tracking-[.8px] text-brand-95"
        >
          {label}

          {required && (
            <span className="ml-1 text-brand-70" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {typeof children === "function"
        ? children({
            id: fieldId,
            describedBy,
            errorId: error ? errorId : undefined,
            invalid: Boolean(error),
          })
        : children}

      {hint && !error && (
        <p
          id={hintId}
          className="mt-1.5 text-[10px] leading-4 text-brand-ink/50"
        >
          {hint}
        </p>
      )}

      <FormError id={errorId}>{error}</FormError>
    </div>
  );
};

export default FormField;
