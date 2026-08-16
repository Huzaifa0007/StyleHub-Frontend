import toast from "react-hot-toast";

import {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../features/wishlist/wishlistAPI";

import { useSelector } from "react-redux";

function useWishlist(productId) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { data } = useGetWishlistQuery(undefined, {
    skip: !isAuthenticated,
  });

  const [addToWishlist, { isLoading: adding }] = useAddToWishlistMutation();

  const [removeFromWishlist, { isLoading: removing }] =
    useRemoveFromWishlistMutation();

  const wishlistItems = data?.data?.items || [];

  const isWishlisted = wishlistItems.some(
    (item) => item.product?._id === productId,
  );

  async function toggleWishlist({ size = "", color = "", quantity = 1 } = {}) {
    if (!isAuthenticated) {
      toast.error("Please login first");
      return;
    }

    try {
      if (isWishlisted) {
        const item = wishlistItems.find(
          (item) => item.product?._id === productId,
        );

        if (item) {
          await removeFromWishlist(item._id).unwrap();
          toast.success("Removed from wishlist");
        }
      } else {
        await addToWishlist({
          productId,
          size,
          color,
          quantity,
        }).unwrap();

        toast.success("Added to wishlist");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return {
    isWishlisted,
    toggleWishlist,
    loading: adding || removing,
    wishlistCount: wishlistItems.length,
  };
}

export default useWishlist;
