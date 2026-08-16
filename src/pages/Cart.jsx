import toast from "react-hot-toast";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";

import EmptyCart from "../features/cart/EmptyCart";
import CartItem from "../features/cart/CartItem";
import CartSummary from "../features/cart/CartSummary";

import {
  useGetCartQuery,
  useRemoveCartItemMutation,
  useClearCartMutation,
} from "../features/cart/cartAPI";

function Cart() {
  const { data, isLoading } = useGetCartQuery();

  const [removeCartItem, { isLoading: removing }] = useRemoveCartItemMutation();

  const [clearCart, { isLoading: clearing }] = useClearCartMutation();

  const cart = data?.data;

  const subtotal = cart?.subtotal || 0;
  const shipping = cart?.shipping || 0;
  const tax = cart?.tax || 0;
  const total = cart?.total || 0;

  if (isLoading) {
    return <Loader />;
  }

  if (!cart || cart.items.length === 0) {
    return <EmptyCart />;
  }

  async function remove(itemId) {
    try {
      await removeCartItem(itemId).unwrap();

      toast.success("Item removed");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function clear() {
    try {
      await clearCart().unwrap();

      toast.success("Cart cleared");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <main className="bg-white">
      <Container>
        {/* Page Header */}
        <section className="pb-10 pt-12 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <div className="flex flex-col gap-6 border-b border-gray-200 pb-10 sm:gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-[11px]">
                Your Selection
              </span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1
                  className="
                    text-[38px]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.045em]
                    text-gray-950

                    sm:text-[48px]

                    lg:text-[58px]
                  "
                >
                  Shopping Cart
                </h1>

                <p
                  className="
                    mt-5
                    max-w-[560px]
                    text-sm
                    leading-7
                    text-gray-500

                    sm:text-[15px]
                  "
                >
                  Review your selected pieces and customize your selections
                  before checkout.
                </p>
              </div>

              {/* Item Count */}
              <div className="shrink-0">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                  {cart.items.length}{" "}
                  {cart.items.length === 1 ? "Item" : "Items"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cart */}
        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cart.items.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  loading={removing || clearing}
                  onRemove={() => remove(item._id)}
                />
              ))}
            </div>

            {/* Summary */}
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
              clearCart={clear}
            />
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Cart;
