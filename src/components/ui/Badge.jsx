function Badge({ children, color = "gray" }) {
  const colors = {
    green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    red: "bg-red-50 text-red-700 ring-red-200",
    yellow: "bg-amber-50 text-amber-700 ring-amber-200",
    blue: "bg-blue-50 text-blue-700 ring-blue-200",
    purple: "bg-purple-50 text-purple-700 ring-purple-200",
    gray: "bg-gray-100 text-gray-700 ring-gray-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ring-1
        ring-inset
        ${colors[color] || colors.gray}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;
