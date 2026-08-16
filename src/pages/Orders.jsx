import { PackageCheck } from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import OrderCard from "../features/order/OrderCard";

import { useGetMyOrdersQuery } from "../features/order/orderAPI";

function Orders() {
  const { data, isLoading } = useGetMyOrdersQuery();

  if (isLoading) {
    return <Loader />;
  }

  const orders = data?.data || [];

  if (!orders.length) {
    return <Empty title="No orders yet" />;
  }

  return (
    <Container className="py-10 sm:py-12 lg:py-16">
      {/* Page Header */}
      <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
              <PackageCheck size={18} className="text-gray-700" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Account
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-[42px]">
            My Orders
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
            View your recent purchases, order details and delivery information.
          </p>
        </div>

        {/* Order Count */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
          <span className="text-xs font-medium text-gray-500">
            Total Orders
          </span>

          <span className="text-sm font-bold text-gray-950">
            {orders.length}
          </span>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-5">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </Container>
  );
}

export default Orders;
