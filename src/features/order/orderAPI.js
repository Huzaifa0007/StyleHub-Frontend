import { apiSlice } from "../../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        data: body,
      }),

      invalidatesTags: ["Order", "Cart"],
    }),

    getMyOrders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),

      providesTags: ["Order"],
    }),

    getSingleOrder: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),

      providesTags: ["Order"],
    }),

    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}/cancel`,
        method: "PATCH",
      }),

      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetSingleOrderQuery,
  useCancelOrderMutation,
} = orderApi;
