import { authApi } from '@/services/auth'
import { productApi } from '@/services/product'
import { user } from '@/services/user'
import { wishlistApi } from '@/services/whishlist'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [user.reducerPath]: user.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [wishlistApi.reducerPath]: wishlistApi.reducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(user.middleware, authApi.middleware, productApi.middleware, wishlistApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>