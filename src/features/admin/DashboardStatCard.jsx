function DashboardStatCard({
  title,
  value,
  icon,
  color = "bg-gray-100",
  iconColor = "text-gray-700",
  trend,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-gray-200/80
        bg-white
        p-5
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-gray-300
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
        sm:p-6
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-500">{title}</p>

          <h2 className="mt-3 truncate text-2xl font-bold tracking-[-0.035em] text-gray-950 sm:text-3xl">
            {value}
          </h2>

          {trend && (
            <p className="mt-2 text-xs font-medium text-gray-400">{trend}</p>
          )}
        </div>

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${color}
            ${iconColor}
            transition-transform
            duration-300
            group-hover:scale-105
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default DashboardStatCard;
