import { apiSlice } from "../../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ===========================
    // PUBLIC
    // ===========================

    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params,
      }),

      providesTags: ["Product"],
    }),

    getProduct: builder.query({
      query: (slug) => ({
        url: `/products/${slug}`,
        method: "GET",
      }),

      providesTags: ["Product"],
    }),

    // ===========================
    // ADMIN
    // ===========================

    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        data: body,
      }),

      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        data: body,
      }),

      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Product"],
    }),

    replaceImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}/images`,
        method: "PUT",
        data: body,
      }),

      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,

  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useReplaceImagesMutation,
} = productApi;
