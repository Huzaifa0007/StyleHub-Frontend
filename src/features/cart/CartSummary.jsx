import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

import Button from "../../components/ui/Button";

function CartSummary({ subtotal, shipping, tax, total, clearCart }) {
  return (
    <div
      className="
        sticky
        top-24
        overflow-hidden
        rounded-[20px]
        border
        border-gray-200
        bg-white
        shadow-[0_12px_40px_rgba(0,0,0,0.05)]
      "
    >
      {/* Header */}
      <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-gray-400
              "
            >
              Your Order
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-gray-950">
              Order Summary
            </h2>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
            <ShieldCheck
              size={17}
              strokeWidth={1.8}
              className="text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="px-5 py-6 sm:px-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>

            <span className="font-medium text-gray-900">₹{subtotal}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Shipping</span>

            <span className="font-medium text-gray-900">₹{shipping}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Tax</span>

            <span className="font-medium text-gray-900">₹{tax}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-100" />

        {/* Total */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Total</p>

            <p className="mt-1 text-xs text-gray-400">
              Inclusive of applicable charges
            </p>
          </div>

          <p
            className="
              text-[26px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-gray-950
            "
          >
            ₹{total}
          </p>
        </div>

        {/* Checkout */}
        <Link to="/checkout" className="block">
          <Button className="mt-7">
            Proceed To Checkout
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Button>
        </Link>

        {/* Clear Cart */}
        <button
          type="button"
          onClick={clearCart}
          className="
            mt-4
            w-full
            text-center
            text-xs
            font-medium
            text-gray-400
            transition-colors
            duration-200
            hover:text-red-500
          "
        >
          Clear cart
        </button>
      </div>

      {/* Trust Footer */}
      <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
          <ShieldCheck size={14} strokeWidth={1.7} />

          <span>Secure checkout &amp; Cash on Delivery</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
