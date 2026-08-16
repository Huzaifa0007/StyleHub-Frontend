import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import OrdersTable from "../features/admin/orders/OrdersTable";

import { useGetAllOrdersQuery } from "../features/admin/adminAPI";
import { ShoppingBag } from "lucide-react";

function AdminOrders() {
  const { data, isLoading } = useGetAllOrdersQuery();

  if (isLoading) {
    return <Loader />;
  }

  const orders = data?.data || [];

  if (!orders.length) {
    return (
      <Container className="py-10">
        <Empty title="No Orders Found" />
      </Container>
    );
  }

  return (
    <Container className="py-8 sm:py-10 lg:py-12">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-white">
              <ShoppingBag size={17} />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              Store Management
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-[-0.04em] text-gray-950 sm:text-4xl">
            Order Management
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
            Review customer orders, monitor payments, and keep order statuses up
            to date.
          </p>
        </div>

        {/* Order Count */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-gray-600">
            {orders.length} {orders.length === 1 ? "Order" : "Orders"}
          </span>
        </div>
      </div>

      <OrdersTable orders={orders} />
    </Container>
  );
}

export default AdminOrders;
