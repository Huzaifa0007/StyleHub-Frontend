import { ClipboardList } from "lucide-react";

import OrderRow from "./OrderRow";

function OrdersTable({ orders }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50">
            <ClipboardList size={17} className="text-gray-700" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-950 sm:text-[15px]">
              All Orders
            </h2>

            <p className="mt-0.5 text-xs text-gray-400">
              Recent customer purchases
            </p>
          </div>
        </div>

        <span className="hidden text-xs font-medium text-gray-400 sm:block">
          {orders.length} total
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:px-6">
                Order
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Customer
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Total
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Payment
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Status
              </th>

              <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <OrderRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Hint */}
      <div className="border-t border-gray-100 bg-gray-50/40 px-5 py-3.5 sm:px-6">
        <p className="text-[11px] text-gray-400">
          Update an order's status directly from the table.
        </p>
      </div>
    </section>
  );
}

export default OrdersTable;
