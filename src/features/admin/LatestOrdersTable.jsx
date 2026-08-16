import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function getStatusStyles(status) {
  switch (status?.toLowerCase()) {
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-100";

    case "processing":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "shipped":
      return "bg-indigo-50 text-indigo-700 border-indigo-100";

    case "delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-100";

    case "cancelled":
      return "bg-red-50 text-red-700 border-red-100";

    default:
      return "bg-gray-50 text-gray-600 border-gray-100";
  }
}

function LatestOrdersTable({ orders = [] }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200/80
        bg-white
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 p-5 sm:p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Recent activity
          </p>

          <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-gray-950">
            Latest Orders
          </h2>
        </div>

        <Link
          to="/admin/orders"
          className="
            hidden
            items-center
            gap-1.5
            text-xs
            font-semibold
            text-gray-500
            transition-colors
            hover:text-gray-950
            sm:flex
          "
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {orders.length === 0 ? (
        <div className="flex min-h-[220px] flex-col items-center justify-center px-6 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-gray-400">
            <ShoppingBag size={18} />
          </div>

          <p className="mt-3 text-sm font-medium text-gray-500">
            No recent orders
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60">
                <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Order
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Amount
                </th>

                <th className="px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 last:border-none hover:bg-gray-50/60"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">
                      #{order._id.slice(-6).toUpperCase()}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                        {order.user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>

                      <span className="max-w-[180px] truncate text-sm text-gray-600">
                        {order.user?.name || "Unknown"}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm font-bold text-gray-950">
                    ₹{Number(order.totalPrice).toLocaleString()}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        border
                        px-3
                        py-1
                        text-[11px]
                        font-semibold
                        ${getStatusStyles(order.orderStatus)}
                      `}
                    >
                      {order.orderStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LatestOrdersTable;
