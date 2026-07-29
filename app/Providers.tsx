"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import CartProvider from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </Provider>
  );
}
