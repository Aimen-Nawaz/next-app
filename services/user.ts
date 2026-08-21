import { User, UserResponse, UsersResponse } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const user = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<UsersResponse, string>({
            query: () => '/users'
        })
    })
})

export const { useGetAllUsersQuery } = user