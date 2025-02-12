import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exlusiveApi = createApi({
  reducerPath: "exlusive",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    withCredentials: true,
    credentials: "include",
  }),
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
    AddToCart: builder.mutation({
      query: (bodyObject) => ({
        url: `/addtocart`,
        method: "post",
        body: bodyObject,
      }),
    }),

    getUserCartItem: builder.query({
      query: () => `/useritem`,
    }),
  }),
});

export const {
  useGetAllBannerQuery,
  useGetAllCategoryQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useAddToCartMutation,
  useGetUserCartItemQuery,
} = exlusiveApi;
