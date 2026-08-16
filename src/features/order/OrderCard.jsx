import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";

import { useCancelOrderMutation } from "./orderAPI";

import { CalendarDays, ChevronRight, Package, XCircle } from "lucide-react";

function OrderCard({ order }) {
  const [cancelOrder, { isLoading }] = useCancelOrderMutation();

  async function handleCancel() {
    try {
      await cancelOrder(order._id).unwrap();

      toast.success("Order cancelled");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-all
        duration-300

        hover:-translate-y-[1px]
        hover:border-gray-300
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]
      "
    >
      {/* =====================================================
          ORDER HEADER
      ====================================================== */}

      <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Order Info */}

          <div className="flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-gray-200
                bg-gray-50
              "
            >
              <Package size={18} strokeWidth={1.8} className="text-gray-700" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Order
              </p>

              <h2 className="mt-1 text-sm font-bold tracking-[-0.01em] text-gray-950 sm:text-[15px]">
                #{order._id.slice(-8).toUpperCase()}
              </h2>

              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
                <CalendarDays size={13} />

                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Status */}

          <span
            className={`
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              px-3.5
              py-1.5
              text-xs
              font-semibold
              tracking-[-0.01em]

              ${
                order.orderStatus === "Delivered"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : order.orderStatus === "Cancelled"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-amber-200 bg-amber-50 text-amber-700"
              }
            `}
          >
            <span
              className={`
                mr-2
                h-1.5
                w-1.5
                rounded-full

                ${
                  order.orderStatus === "Delivered"
                    ? "bg-green-500"
                    : order.orderStatus === "Cancelled"
                      ? "bg-red-500"
                      : "bg-amber-500"
                }
              `}
            />

            {order.orderStatus}
          </span>
        </div>
      </div>

      {/* =====================================================
          ORDER ITEMS
      ====================================================== */}

      <div className="px-5 py-5 sm:px-6">
        <div className="space-y-1">
          {order.orderItems.map((item, index) => (
            <div
              key={item.product}
              className={`
                flex
                gap-4
                py-4

                ${
                  index !== order.orderItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }
              `}
            >
              {/* Product Image */}

              <div
                className="
                  h-[82px]
                  w-[68px]
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  bg-gray-100
                  sm:h-[92px]
                  sm:w-[76px]
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
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Product Info */}

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-gray-950 sm:text-[15px]">
                      {item.name}
                    </h3>

                    {/* Product Meta */}

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span
                        className="
                          rounded-md
                          border
                          border-gray-200
                          bg-gray-50
                          px-2
                          py-1
                          text-[11px]
                          font-medium
                          text-gray-600
                        "
                      >
                        Qty {item.quantity}
                      </span>

                      <span
                        className="
                          rounded-md
                          border
                          border-gray-200
                          bg-gray-50
                          px-2
                          py-1
                          text-[11px]
                          font-medium
                          text-gray-600
                        "
                      >
                        Size {item.size}
                      </span>

                      <span
                        className="
                          rounded-md
                          border
                          border-gray-200
                          bg-gray-50
                          px-2
                          py-1
                          text-[11px]
                          font-medium
                          text-gray-600
                        "
                      >
                        {item.color}
                      </span>
                    </div>
                  </div>

                  {/* Item Price */}

                  <div className="shrink-0 sm:text-right">
                    <p className="text-sm font-bold text-gray-950">
                      ₹{item.price * item.quantity}
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      ₹{item.price} each
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          ORDER FOOTER
      ====================================================== */}

      <div className="border-t border-gray-100 bg-gray-50/60 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Total */}

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Order Total
            </p>

            <p className="mt-1 text-2xl font-bold tracking-[-0.04em] text-gray-950">
              ₹{order.totalPrice}
            </p>
          </div>

          {/* Actions */}

          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Link
              to={`/orders/${order._id}`}
              className="
                group/button
                inline-flex
                h-14
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-5
                text-sm
                font-semibold
                text-gray-900
                shadow-sm
                transition-all
                duration-300

                hover:border-gray-300
                hover:bg-gray-50
                hover:shadow-md

                sm:w-auto
              "
            >
              View Details
              <ChevronRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-0.5
                "
              />
            </Link>

            {order.orderStatus === "Pending" && (
              <Button
                className="
                  h-11
                  w-full
                  rounded-xl
                  px-5
                  sm:w-auto
                "
                disabled={isLoading}
                onClick={handleCancel}
              >
                <XCircle size={16} />

                {isLoading ? "Cancelling..." : "Cancel Order"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
