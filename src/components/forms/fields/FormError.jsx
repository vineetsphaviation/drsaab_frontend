const FormError = ({ id, children, className = "" }) => {
  const message =
    typeof children === "string" ? children : children?.message;

  if (typeof message !== "string" || !message) return null;

  return (
    <p
      id={id}
      role="alert"
      className={`mt-1.5 text-[13px] font-medium leading-5 text-red-600 ${className}`}
    >
      {message}
    </p>
  );
};

export default FormError;