import { apiSlice } from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/users/profile",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: ["User"],
    }),

    changePassword: builder.mutation({
      query: (body) => ({
        url: "/users/change-password",
        method: "PUT",
        data: body,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = userApi;
