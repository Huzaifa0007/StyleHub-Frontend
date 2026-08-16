function Button({
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        group
        relative
        inline-flex
        h-[56px]
        w-full
        items-center
        justify-center
        gap-2
        overflow-hidden
        rounded-[12px]
        bg-gray-950
        px-6
        text-[15px]
        font-semibold
        tracking-[-0.01em]
        text-white
        shadow-[0_8px_25px_rgba(0,0,0,0.10)]
        transition-all
        duration-300

        hover:-translate-y-[1px]
        hover:bg-black
        hover:shadow-[0_14px_35px_rgba(0,0,0,0.15)]

        active:translate-y-0
        active:shadow-[0_6px_18px_rgba(0,0,0,0.10)]

        focus:outline-none
        focus:ring-2
        focus:ring-gray-950
        focus:ring-offset-2

        disabled:cursor-not-allowed
        disabled:translate-y-0
        disabled:opacity-50
        disabled:shadow-none

        ${className}
      `}
      {...props}
    >
      {/* Subtle shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;
