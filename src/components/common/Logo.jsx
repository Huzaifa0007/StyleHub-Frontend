import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="
        group
        inline-flex
        items-center
        text-[28px]
        font-black
        leading-none
        tracking-[-0.055em]
        text-gray-950
        transition-opacity
        duration-200
        hover:opacity-90

        sm:text-[30px]
      "
      aria-label="StyleHub Home"
    >
      <span>Style</span>

      <span
        className="
          text-red-500
          transition-colors
          duration-200
          group-hover:text-red-600
        "
      >
        Hub
      </span>

      <span
        className="
          ml-1.5
          mt-[-15px]
          h-1.5
          w-1.5
          rounded-full
          bg-red-500
          transition-transform
          duration-200
          group-hover:scale-125
        "
        aria-hidden="true"
      />
    </Link>
  );
}

export default Logo;
