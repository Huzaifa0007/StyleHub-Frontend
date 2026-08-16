import {
  Clock3,
  LoaderCircle,
  Truck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function StatusCard({ title, value, icon: Icon, iconBg, iconColor }) {
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
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            ${iconBg}
            ${iconColor}
          `}
        >
          <Icon size={18} strokeWidth={1.8} />
        </div>

        <span className="text-2xl font-bold tracking-[-0.03em] text-gray-950">
          {value}
        </span>
      </div>

      <p className="mt-4 text-xs font-medium text-gray-500">{title}</p>
    </div>
  );
}

function OrderStatusCards({ status }) {
  return (
    <section>
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
          Orders
        </p>

        <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-gray-950">
          Order Status
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <StatusCard
          title="Pending"
          value={status.pending}
          icon={Clock3}
          iconBg="bg-amber-50"
          iconColor="text-amber-600"
        />

        <StatusCard
          title="Processing"
          value={status.processing}
          icon={LoaderCircle}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <StatusCard
          title="Shipped"
          value={status.shipped}
          icon={Truck}
          iconBg="bg-indigo-50"
          iconColor="text-indigo-600"
        />

        <StatusCard
          title="Delivered"
          value={status.delivered}
          icon={CheckCircle2}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <StatusCard
          title="Cancelled"
          value={status.cancelled}
          icon={XCircle}
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />
      </div>
    </section>
  );
}

export default OrderStatusCards;
