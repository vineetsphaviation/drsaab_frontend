const FormError = ({ id, children, className = "" }) => {
  if (!children) return null;

  return (
    <p
      id={id}
      role="alert"
      className={`mt-1.5 text-[11px] font-medium leading-5 text-red-600 ${className}`}
    >
      {children}
    </p>
  );
};

export default FormError;