import { ProductQuery, ProductResponse, ProductsResponse } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UUID } from "crypto";

export const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/', credentials:"include" }),
    endpoints: (builder) => ({
        getAllProductsByCategory: builder.query<ProductsResponse, { query: ProductQuery }>({
            query: ({ query }) => `/products${query ? `${query.category ? `?category=${query.category}` : '?'}&limit=${query.limit}&skip=${query.skip}` : ""}`,
            keepUnusedDataFor: 5
        }),
        getProduct: builder.query<ProductResponse, { id: UUID; query: ProductQuery }>({
            query: ({ id, query }) => `/products/${id}?category=${query.category}`,
            keepUnusedDataFor: 5
        })
    })
})

export const {
    useGetAllProductsByCategoryQuery,
    useGetProductQuery
} = productApi