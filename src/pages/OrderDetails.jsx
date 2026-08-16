import { useParams } from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
  CreditCard,
  MapPin,
  PackageCheck,
  ReceiptText,
} from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";
import Empty from "../components/common/Empty";

import OrderItem from "../features/order/OrderItem";
import OrderStatusBadge from "../features/order/OrderStatusBadge";

import { useGetSingleOrderQuery } from "../features/order/orderAPI";

function OrderDetails() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleOrderQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  const order = data?.data;

  if (!order) {
    return <Empty title="Order not found" />;
  }

  return (
    <Container className="py-10 sm:py-12 lg:py-16">
      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-gray-50
            "
          >
            <PackageCheck
              size={18}
              strokeWidth={1.8}
              className="text-gray-700"
            />
          </div>

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-gray-400
            "
          >
            Order Details
          </span>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1
              className="
                text-3xl
                font-bold
                tracking-[-0.04em]
                text-gray-950
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Order #{order._id.slice(-8).toUpperCase()}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <CalendarDays size={15} />

                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>

              <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

              <OrderStatusBadge status={order.orderStatus} />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {/* ===================================================
            ORDER ITEMS
        ==================================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-[0_4px_20px_rgba(0,0,0,0.04)]
            lg:col-span-2
          "
        >
          {/* Section Header */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-gray-100
              px-5
              py-5
              sm:px-6
            "
          >
            <div>
              <h2 className="text-lg font-bold tracking-[-0.02em] text-gray-950">
                Order Items
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Products included in this order
              </p>
            </div>

            <div
              className="
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-gray-600
              "
            >
              {order.orderItems.length}{" "}
              {order.orderItems.length === 1 ? "Item" : "Items"}
            </div>
          </div>

          {/* Items */}

          <div className="px-5 sm:px-6">
            {order.orderItems.map((item) => (
              <OrderItem key={item.product} item={item} />
            ))}
          </div>
        </div>

        {/* ===================================================
            ORDER INFORMATION
        ==================================================== */}

        <div className="space-y-5">
          {/* Order Status */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-[0_4px_20px_rgba(0,0,0,0.04)]
              sm:p-6
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-50
                  text-gray-700
                "
              >
                <PackageCheck size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-950">Order Status</p>

                <p className="text-xs text-gray-500">Current order progress</p>
              </div>
            </div>

            <OrderStatusBadge status={order.orderStatus} />
          </div>

          {/* Payment */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-[0_4px_20px_rgba(0,0,0,0.04)]
              sm:p-6
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-50
                  text-gray-700
                "
              >
                <CreditCard size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-950">Payment</p>

                <p className="text-xs text-gray-500">Payment information</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">Method</span>

                <span className="text-right text-sm font-semibold text-gray-900">
                  {order.paymentMethod}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">Status</span>

                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                  {order.paymentStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-5
              shadow-[0_4px_20px_rgba(0,0,0,0.04)]
              sm:p-6
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-50
                  text-gray-700
                "
              >
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-950">
                  Shipping Address
                </p>

                <p className="text-xs text-gray-500">Delivery location</p>
              </div>
            </div>

            <div className="space-y-1.5 text-sm leading-6 text-gray-600">
              <p className="font-semibold text-gray-950">
                {order.shippingAddress.fullName}
              </p>

              <p>{order.shippingAddress.phone}</p>

              <div className="pt-2">
                <p>{order.shippingAddress.addressLine1}</p>

                {order.shippingAddress.addressLine2 && (
                  <p>{order.shippingAddress.addressLine2}</p>
                )}

                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state}
                </p>

                <p>
                  {order.shippingAddress.country} -{" "}
                  {order.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>

          {/* Price Summary */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-[0_4px_20px_rgba(0,0,0,0.04)]
            "
          >
            <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-50
                  text-gray-700
                "
              >
                <ReceiptText size={17} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-950">Price Summary</p>

                <p className="text-xs text-gray-500">Final order total</p>
              </div>
            </div>

            <div className="space-y-3 px-5 py-5 sm:px-6">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Items</span>

                <span className="font-medium text-gray-900">
                  ₹{order.itemsPrice}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Shipping</span>

                <span className="font-medium text-gray-900">
                  ₹{order.shippingPrice}
                </span>
              </div>

              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Tax</span>

                <span className="font-medium text-gray-900">
                  ₹{order.taxPrice}
                </span>
              </div>

              <div className="my-4 border-t border-gray-100" />

              <div className="flex items-end justify-between gap-4">
                <span className="text-sm font-semibold text-gray-700">
                  Total
                </span>

                <span className="text-2xl font-bold tracking-[-0.03em] text-gray-950">
                  ₹{order.totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OrderDetails;
