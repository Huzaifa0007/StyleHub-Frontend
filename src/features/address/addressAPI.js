import { apiSlice } from "../../api/apiSlice";

export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: () => ({
        url: "/addresses",
        method: "GET",
      }),
      providesTags: ["Address"],
    }),

    addAddress: builder.mutation({
      query: (body) => ({
        url: "/addresses",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Address"],
    }),

    updateAddress: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/addresses/${id}`,
        method: "PUT",
        data: body,
      }),
      invalidatesTags: ["Address"],
    }),

    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/addresses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Address"],
    }),

    setDefaultAddress: builder.mutation({
      query: (id) => ({
        url: `/addresses/${id}/default`,
        method: "PATCH",
      }),
      invalidatesTags: ["Address"],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useSetDefaultAddressMutation,
} = addressApi;
