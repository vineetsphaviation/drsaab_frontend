import { getFormErrorMessages } from "./formErrorUtils";

export default function FormErrorSummary({
  error,
  fallback,
  className = "",
}) {
  const messages = getFormErrorMessages(error, fallback);

  if (messages.length === 0) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700 ${className}`}
    >
      <p className="font-bold">
        {messages.length === 1
          ? "We couldn't submit your request:"
          : "Please review the following issues:"}
      </p>
      {messages.length === 1 ? (
        <p className="mt-1">{messages[0]}</p>
      ) : (
        <ul className="mt-1 list-inside list-disc space-y-1">
          {messages.map((message, index) => (
            <li key={`${message}-${index}`}>{message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
