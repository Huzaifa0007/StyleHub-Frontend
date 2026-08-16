import { apiSlice } from "../../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),

      providesTags: ["AdminDashboard"],
    }),

    getUsers: builder.query({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),

      providesTags: ["Users"],
    }),

    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/admin/users/${id}/role`,
        method: "PUT",
        data: { role },
      }),

      invalidatesTags: ["Users"],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Users"],
    }),

    getMonthlyRevenue: builder.query({
      query: () => ({
        url: "/admin/analytics/revenue",
        method: "GET",
      }),

      providesTags: ["Analytics"],
    }),

    getBestSellingProducts: builder.query({
      query: () => ({
        url: "/admin/analytics/best-selling",
        method: "GET",
      }),

      providesTags: ["Analytics"],
    }),

    // PRODUCTS

    getAdminProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params,
      }),

      providesTags: ["Product"],
    }),

    createProduct: builder.mutation({
      query: (formData) => ({
        url: "/products",
        method: "POST",
        data: formData,
      }),

      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        data,
      }),

      invalidatesTags: ["Product"],
    }),

    replaceProductImages: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}/images`,
        method: "PUT",
        data,
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

    getAllOrders: builder.query({
      query: () => ({
        url: "/orders/admin/all",
        method: "GET",
      }),

      providesTags: ["Order"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/orders/${id}/status`,
        method: "PATCH",
        data: {
          status,
        },
      }),

      invalidatesTags: ["Order", "AdminDashboard"],
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
  useGetMonthlyRevenueQuery,
  useGetBestSellingProductsQuery,
  useGetAdminProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useReplaceProductImagesMutation,
  useDeleteProductMutation,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = adminApi;
