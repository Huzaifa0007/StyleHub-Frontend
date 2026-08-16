import { useState } from "react";
import toast from "react-hot-toast";

import { useUpdateOrderStatusMutation } from "../adminAPI";

function OrderStatusSelect({ order }) {
  const [updateStatus, { isLoading }] = useUpdateOrderStatusMutation();

  const [selectedStatus, setSelectedStatus] = useState(order.orderStatus);

  async function handleChange(e) {
    const newStatus = e.target.value;

    setSelectedStatus(newStatus);

    try {
      await updateStatus({
        id: order._id,
        status: newStatus,
      }).unwrap();

      toast.success("Status Updated");
    } catch (err) {
      setSelectedStatus(order.orderStatus);

      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  const statusStyles = {
    Pending:
      "border-amber-200 bg-amber-50 text-amber-700 focus:border-amber-400",
    Processing:
      "border-blue-200 bg-blue-50 text-blue-700 focus:border-blue-400",
    Shipped:
      "border-indigo-200 bg-indigo-50 text-indigo-700 focus:border-indigo-400",
    Delivered:
      "border-emerald-200 bg-emerald-50 text-emerald-700 focus:border-emerald-400",
    Cancelled: "border-red-200 bg-red-50 text-red-700 focus:border-red-400",
  };

  const currentStyle =
    statusStyles[selectedStatus] ||
    "border-gray-200 bg-gray-50 text-gray-700 focus:border-gray-400";

  return (
    <div className="relative w-[138px]">
      <select
        value={selectedStatus}
        onChange={handleChange}
        disabled={isLoading}
        aria-label={`Update order ${order._id.slice(-6)} status`}
        className={`
          w-full
          appearance-none
          rounded-xl
          border
          px-3
          py-2.5
          pr-8
          text-xs
          font-semibold
          outline-none
          transition-all
          duration-200
          ${currentStyle}
          hover:brightness-[0.98]
          focus:ring-2
          focus:ring-black/5
          disabled:cursor-not-allowed
          disabled:opacity-60
        `}
      >
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Custom Arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-current">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {isLoading && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-[1px]">
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
        </span>
      )}
    </div>
  );
}

export default OrderStatusSelect;
