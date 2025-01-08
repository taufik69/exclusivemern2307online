import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exlusiveApi = createApi({
  reducerPath: "exlusive",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: (builder) => ({
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),
    GetAllCategory: builder.query({
      query: () => "/category",
    }),
    GetAllProduct: builder.query({
      query: () => "/product",
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/singleproduct/${id}`,
    }),
  }),
});

export const {
  useGetAllBannerQuery,
  useGetAllCategoryQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
} = exlusiveApi;
