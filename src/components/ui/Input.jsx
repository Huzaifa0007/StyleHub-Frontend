import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Input({ label, type = "text", name, register, error, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="
            mb-2
            block
            text-[13px]
            font-semibold
            tracking-[-0.01em]
            text-gray-950
          "
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="group relative w-full">
        <input
          id={name}
          type={inputType}
          {...(register && name ? register(name) : {})}
          className={`
            h-[54px]
            w-full
            rounded-[12px]
            border
            bg-white
            px-4
            text-[15px]
            font-medium
            text-gray-950
            outline-none
            transition-all
            duration-200

            placeholder:text-gray-400
            placeholder:font-normal

            ${isPassword ? "pr-[52px]" : "pr-4"}

            ${
              error
                ? `
                  border-red-400
                  bg-red-50/[0.15]
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-500/10
                `
                : `
                  border-gray-200
                  hover:border-gray-300
                  focus:border-gray-950
                  focus:bg-white
                  focus:ring-4
                  focus:ring-gray-950/[0.06]
                `
            }
          `}
          {...props}
        />

        {/* Password Visibility */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="
              absolute
              right-3
              top-1/2
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-lg
              text-gray-400
              transition-all
              duration-200
              hover:bg-gray-100
              hover:text-gray-900
              focus:outline-none
              focus:ring-2
              focus:ring-gray-950/10
              active:scale-95
            "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff size={18} strokeWidth={1.8} />
            ) : (
              <Eye size={18} strokeWidth={1.8} />
            )}
          </button>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />

          <p className="text-xs font-medium text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  );
}

export default Input;
