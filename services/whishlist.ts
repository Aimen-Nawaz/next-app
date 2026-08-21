import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Wishlist {
    id: string;
    userId: string;
    productId: string;
    product?: {
        id: string;
        name: string;
        price: number;
        image?: string;
    };
}

export const wishlistApi = createApi({
    reducerPath: "wishlist",

    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
        credentials: "include",
    }),
    endpoints: (builder) => ({

        createWishlist: builder.mutation<Wishlist, { productId: string }>({
            query: (body) => ({
                url: "/wishlist",
                method: "POST",
                body
            }),
     

        }),


        getWishlist: builder.query<Wishlist[], void>({
            query: () => ({
                url: "/wishlist",
                method: "GET",
            }),
          
        }),

        deleteWishlist: builder.mutation<{ message: string; result: Wishlist }, string>({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: "DELETE",
            }),
            
        }),
    }),
});

export const {
    useCreateWishlistMutation,
    useGetWishlistQuery,
    useDeleteWishlistMutation,
} = wishlistApi;