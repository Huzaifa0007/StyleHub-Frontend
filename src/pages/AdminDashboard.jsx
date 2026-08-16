import Container from "../components/common/Container";
import Loader from "../components/common/Loader";

import DashboardStats from "../features/admin/DashboardStats";
import OrderStatusCards from "../features/admin/OrderStatusCards";
import LatestOrdersTable from "../features/admin/LatestOrdersTable";
import LowStockProducts from "../features/admin/LowStockProducts";
import RevenueChart from "../features/admin/RevenueChart";
import AdminQuickLinks from "../features/admin/AdminQuickLinks";
import BestSellingProducts from "../features/admin/BestSellingProducts";

import {
  useGetDashboardQuery,
  useGetMonthlyRevenueQuery,
  useGetBestSellingProductsQuery,
} from "../features/admin/adminAPI";

function AdminDashboard() {
  const { data: dashboardData, isLoading: dashboardLoading } =
    useGetDashboardQuery();

  const { data: revenueData, isLoading: revenueLoading } =
    useGetMonthlyRevenueQuery();

  const { data: bestSellingData, isLoading: bestSellingLoading } =
    useGetBestSellingProductsQuery();

  if (dashboardLoading) {
    return <Loader />;
  }

  const dashboard = dashboardData?.data;

  const revenue = revenueData?.data || [];

  const bestSellingProducts = bestSellingData?.data || [];

  return (
    <div className="min-h-screen bg-[#f8f8f7]">
      <Container className="py-8 sm:py-10 lg:py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              StyleHub Administration
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.035em] text-gray-950 sm:text-4xl">
            Dashboard
          </h1>

          <p className="text-sm leading-6 text-gray-500 sm:text-[15px]">
            Monitor your store performance, orders, products, and customers.
          </p>
        </div>

        {/* Statistics */}
        <DashboardStats dashboard={dashboard} />

        {/* Order Status */}
        <div className="mt-8">
          <OrderStatusCards status={dashboard.orderStatus} />
        </div>

        {/* Quick Management */}
        <AdminQuickLinks />

        {/* Revenue */}
        <div className="mt-8">
          {revenueLoading ? <Loader /> : <RevenueChart data={revenue} />}
        </div>

        {/* Best Selling */}
        <div className="mt-8">
          {bestSellingLoading ? (
            <Loader />
          ) : (
            <BestSellingProducts products={bestSellingProducts} />
          )}
        </div>

        {/* Latest Orders + Low Stock */}
        <div className="mt-8 grid gap-8 xl:grid-cols-3">
          <div className="min-w-0 xl:col-span-2">
            <LatestOrdersTable orders={dashboard.latestOrders} />
          </div>

          <div className="min-w-0">
            <LowStockProducts products={dashboard.lowStockProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AdminDashboard;
