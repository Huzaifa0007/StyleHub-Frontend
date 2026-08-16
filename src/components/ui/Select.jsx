function Select({
  label,
  name,
  register,
  error,
  children,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && <label className="font-medium">{label}</label>}

      <select
        {...(register && name ? register(name) : {})}
        className={`
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-3
          outline-none
          focus:border-black
          ${className}
        `}
        {...props}
      >
        {children}
      </select>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default Select;
