import { CalendarDays, CreditCard, UserRound } from "lucide-react";

import OrderStatusSelect from "./OrderStatusSelect";

function OrderRow({ order }) {
  const orderId = order._id.slice(-6).toUpperCase();

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const paymentStatus = order.paymentStatus || "Pending";

  const paymentStyles = {
    Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    Pending: "bg-amber-50 text-amber-700 ring-amber-600/10",
    Failed: "bg-red-50 text-red-700 ring-red-600/10",
    Refunded: "bg-gray-100 text-gray-700 ring-gray-600/10",
  };

  const paymentClass =
    paymentStyles[paymentStatus] ||
    "bg-gray-100 text-gray-700 ring-gray-600/10";

  return (
    <tr className="group transition-colors duration-200 hover:bg-gray-50/70">
      {/* Order */}
      <td className="px-5 py-5 sm:px-6">
        <div>
          <span className="inline-flex rounded-lg bg-gray-950 px-2.5 py-1.5 font-mono text-xs font-semibold tracking-wide text-white">
            #{orderId}
          </span>

          <p className="mt-2 text-[11px] text-gray-400">Order ID</p>
        </div>
      </td>

      {/* Customer */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <UserRound size={16} className="text-gray-500" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-900">
              {order.user?.name || "Unknown Customer"}
            </p>

            <p className="mt-0.5 text-xs text-gray-400">Customer</p>
          </div>
        </div>
      </td>

      {/* Total */}
      <td className="px-5 py-5">
        <span className="text-sm font-bold tracking-[-0.01em] text-gray-950">
          ₹{Number(order.totalPrice).toLocaleString("en-IN")}
        </span>
      </td>

      {/* Payment */}
      <td className="px-5 py-5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${paymentClass}`}
        >
          <CreditCard size={13} />
          {paymentStatus}
        </span>
      </td>

      {/* Status */}
      <td className="px-5 py-5">
        <OrderStatusSelect order={order} />
      </td>

      {/* Date */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CalendarDays size={15} className="shrink-0 text-gray-400" />

          <span>{formattedDate}</span>
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;
