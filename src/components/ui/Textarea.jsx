function Textarea({
  label,
  name,
  register,
  error,
  rows = 5,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && <label className="font-medium">{label}</label>}

      <textarea
        rows={rows}
        {...(register && name ? register(name) : {})}
        className={`
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          outline-none
          resize-none
          focus:border-black
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default Textarea;
