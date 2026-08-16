function OrderItem({ item }) {
  return (
    <div
      className="
        flex
        gap-4
        border-b
        border-gray-100
        py-5
        last:border-b-0
        sm:gap-5
      "
    >
      {/* Product Image */}

      <div
        className="
          h-24
          w-20
          shrink-0
          overflow-hidden
          rounded-xl
          bg-gray-100
          sm:h-28
          sm:w-24
        "
      >
        <img
          src={item.image}
          alt={item.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Product Information */}

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-sm
                font-semibold
                tracking-[-0.01em]
                text-gray-950
                sm:text-[15px]
              "
            >
              {item.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className="
                  rounded-md
                  border
                  border-gray-200
                  bg-gray-50
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-gray-600
                "
              >
                Qty {item.quantity}
              </span>

              {item.size && (
                <span
                  className="
                    rounded-md
                    border
                    border-gray-200
                    bg-gray-50
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-gray-600
                  "
                >
                  Size {item.size}
                </span>
              )}

              {item.color && (
                <span
                  className="
                    rounded-md
                    border
                    border-gray-200
                    bg-gray-50
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-gray-600
                  "
                >
                  {item.color}
                </span>
              )}
            </div>
          </div>

          {/* Price */}

          <div className="shrink-0 sm:text-right">
            <p className="text-base font-bold text-gray-950">₹{item.price}</p>

            <p className="mt-1 text-[11px] text-gray-400">per item</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
