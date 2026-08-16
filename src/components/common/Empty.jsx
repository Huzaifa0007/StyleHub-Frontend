function Empty({
  title,
  message = "There is nothing to display here right now.",
  action = null,
}) {
  return (
    <div
      className="
        flex
        min-h-[420px]
        items-center
        justify-center
        px-4
        py-20
      "
    >
      <div className="max-w-lg text-center">
        {/* Decorative mark */}
        <div
          className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-gray-50
            text-lg
            text-gray-400
          "
        >
          ✦
        </div>

        <p
          className="
            mt-7
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-gray-400
          "
        >
          StyleHub
        </p>

        <h2
          className="
            mt-3
            text-2xl
            font-semibold
            tracking-[-0.03em]
            text-gray-950

            sm:text-3xl
          "
        >
          {title}
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-md
            text-sm
            leading-7
            text-gray-500
          "
        >
          {message}
        </p>

        {action && <div className="mt-7">{action}</div>}
      </div>
    </div>
  );
}

export default Empty;
