import { apiSlice } from "../../api/apiSlice";

export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => ({
        url: "/wishlist",
        method: "GET",
      }),

      providesTags: ["Wishlist"],
    }),

    addToWishlist: builder.mutation({
      query: ({ productId, size, color, quantity }) => ({
        url: "/wishlist",
        method: "POST",
        data: {
          productId,
          size,
          color,
          quantity,
        },
      }),

      invalidatesTags: ["Wishlist"],
    }),

    updateWishlistItem: builder.mutation({
      query: ({ itemId, quantity, size, color }) => ({
        url: `/wishlist/${itemId}`,
        method: "PUT",
        data: {
          quantity,
          size,
          color,
        },
      }),

      invalidatesTags: ["Wishlist"],
    }),

    removeFromWishlist: builder.mutation({
      query: (itemId) => ({
        url: `/wishlist/${itemId}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useUpdateWishlistItemMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;
