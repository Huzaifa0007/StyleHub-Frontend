import { Users, ShoppingBag, Package, IndianRupee } from "lucide-react";

import DashboardStatCard from "./DashboardStatCard";

function DashboardStats({ dashboard }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <DashboardStatCard
        title="Total Users"
        value={dashboard.totalUsers}
        icon={<Users size={21} strokeWidth={1.8} />}
        color="bg-blue-50"
        iconColor="text-blue-600"
      />

      <DashboardStatCard
        title="Total Products"
        value={dashboard.totalProducts}
        icon={<Package size={21} strokeWidth={1.8} />}
        color="bg-emerald-50"
        iconColor="text-emerald-600"
      />

      <DashboardStatCard
        title="Total Orders"
        value={dashboard.totalOrders}
        icon={<ShoppingBag size={21} strokeWidth={1.8} />}
        color="bg-orange-50"
        iconColor="text-orange-600"
      />

      <DashboardStatCard
        title="Total Revenue"
        value={`₹${dashboard.totalRevenue.toLocaleString()}`}
        icon={<IndianRupee size={21} strokeWidth={1.8} />}
        color="bg-violet-50"
        iconColor="text-violet-600"
      />
    </div>
  );
}

export default DashboardStats;
