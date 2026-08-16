import { apiSlice } from "../../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
      query: (body) => ({
        url: "/cart",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Cart"],
    }),

    updateCart: builder.mutation({
      query: ({ itemId, quantity, size, color }) => ({
        url: `/cart/${itemId}`,
        method: "PUT",
        data: {
          quantity,
          size,
          color,
        },
      }),
      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation({
      query: (itemId) => ({
        url: `/cart/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    clearCart: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
} = cartApi;
