import { createApi } from "@reduxjs/toolkit/query/react";

import api from "./axios";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await api({
        url,
        method,
        data,
        params,
      });

      return {
        data: result.data,
      };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Auth", "Product", "Cart", "Wishlist", "Order", "Address", "User"],

  endpoints: () => ({}),
});
