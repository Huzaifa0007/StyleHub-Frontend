import { CreditCard, Lock, ShoppingBag, CheckCircle2 } from "lucide-react";

import Button from "../../components/ui/Button";

function CheckoutSummary({
  cart,
  selectedAddress,
  paymentMethod,
  onPlaceOrder,
  loading,
}) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        {/* Header */}

        <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white">
              <ShoppingBag size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                Order Review
              </p>

              <h2 className="mt-0.5 text-xl font-bold text-gray-950">
                Order Summary
              </h2>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}

        <div className="px-5 py-6 sm:px-6">
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Subtotal</span>

              <span className="font-medium text-gray-900">
                ₹{cart.subtotal}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Shipping</span>

              <span className="font-medium text-gray-900">
                ₹{cart.shipping}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">GST</span>

              <span className="font-medium text-gray-900">₹{cart.tax}</span>
            </div>
          </div>

          <div className="my-5 border-t border-dashed border-gray-200" />

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-950">
                Total Amount
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Inclusive of applicable taxes
              </p>
            </div>

            <p className="text-2xl font-bold tracking-tight text-gray-950">
              ₹{cart.total}
            </p>
          </div>

          {/* Payment */}

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <CreditCard size={17} className="text-gray-700" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Payment Method
                </p>

                <p className="mt-1 text-sm font-bold text-gray-950">
                  {paymentMethod}
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Pay when your order is delivered.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}

          <Button
            className="mt-6"
            disabled={!selectedAddress || loading}
            onClick={onPlaceOrder}
          >
            {loading ? (
              "Placing Order..."
            ) : !selectedAddress ? (
              "Select Address First"
            ) : (
              <>
                <CheckCircle2 size={18} />
                Place Order
              </>
            )}
          </Button>

          {/* Security */}

          <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] font-medium text-gray-400">
            <Lock size={13} />
            Secure & protected checkout
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutSummary;
