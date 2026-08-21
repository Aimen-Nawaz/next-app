import { Login, Register, UserResponse, VerifyEmail, ResetPassword } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({ baseUrl: '/api/', credentials: "include" }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, Login>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body: body
            }),

        }),
        register: builder.mutation<UserResponse, Register>({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body: body
            }),
        }),
        me: builder.query<UserResponse, void>({
            query: () => 'auth/me'
        }),
        verifyEmail: builder.mutation<UserResponse, VerifyEmail>({
            query: (body) => ({
                url: 'auth/verify-email',
                method: 'POST',
                body: body
            }),
        }),
        resetPassword: builder.mutation<UserResponse, ResetPassword>({
            query: (body) => ({
                url: 'auth/reset-password',
                method: 'PATCH',
                body: body
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useMeQuery,
    useVerifyEmailMutation,
    useResetPasswordMutation

} = authApi