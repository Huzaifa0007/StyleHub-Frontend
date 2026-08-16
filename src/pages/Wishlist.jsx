import toast from "react-hot-toast";
import { Heart } from "lucide-react";

import Container from "../components/common/Container";
import Loader from "../components/common/Loader";

import WishlistItem from "../features/wishlist/WishlistItem";
import EmptyWishlist from "../features/wishlist/EmptyWishlist";

import {
  useGetWishlistQuery,
  useRemoveFromWishlistMutation,
} from "../features/wishlist/wishlistAPI";

import { useAddToCartMutation } from "../features/cart/cartAPI";

function Wishlist() {
  const { data, isLoading } = useGetWishlistQuery();

  const [removeWishlist, { isLoading: removing }] =
    useRemoveFromWishlistMutation();

  const [addToCart, { isLoading: addingToCart }] = useAddToCartMutation();

  if (isLoading) {
    return <Loader />;
  }

  const items = data?.data?.items || [];

  if (!items.length) {
    return <EmptyWishlist />;
  }

  async function remove(itemId) {
    try {
      await removeWishlist(itemId).unwrap();

      toast.success("Removed from wishlist");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  async function moveToCart(item) {
    try {
      await addToCart({
        productId: item.product._id,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      }).unwrap();

      await removeWishlist(item._id).unwrap();

      toast.success("Moved to cart");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <main className="bg-white">
      <Container>
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <section className="pb-10 pt-12 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-20">
          <div className="flex flex-col gap-7 border-b border-gray-200 pb-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gray-950" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-[11px]">
                Your Selection
              </span>
            </div>

            {/* Heading + Count */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1
                  className="
                    text-[40px]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.045em]
                    text-gray-950

                    sm:text-[50px]

                    lg:text-[60px]
                  "
                >
                  My Wishlist
                </h1>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-gray-500

                    sm:text-[15px]
                  "
                >
                  A collection of pieces you've saved for later. Keep your
                  favourites close and move them to your cart whenever you're
                  ready.
                </p>
              </div>

              {/* Wishlist Count */}
              <div className="flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                <Heart size={15} strokeWidth={1.7} />

                <span>
                  {items.length}{" "}
                  {items.length === 1 ? "Saved Piece" : "Saved Pieces"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WISHLIST ITEMS
        ===================================================== */}
        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="space-y-5 sm:space-y-6">
            {items.map((item) => (
              <WishlistItem
                key={item._id}
                item={item}
                loading={removing || addingToCart}
                onRemove={() => remove(item._id)}
                onMove={() => moveToCart(item)}
              />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Wishlist;
