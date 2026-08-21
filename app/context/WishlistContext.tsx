"use client";

import { createContext, useContext,  ReactNode } from "react";
import {
  useGetWishlistQuery,
  useCreateWishlistMutation,
  useDeleteWishlistMutation,
} from "@/services/whishlist";

export interface WishlistItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  totalWishlistItems: number;
  addToWishlist: (item: WishlistItem) =>void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
 const { data: wishlist = [], error } = useGetWishlistQuery();

const [createWishlist] = useCreateWishlistMutation();
const [deleteWishlist] = useDeleteWishlistMutation();

const wishlistItems: WishlistItem[] = wishlist.map((item) => ({
  id: item.id,
  productId: item.productId,
  name: item.product?.name ?? "",
  price: Number(item.product?.price ?? 0),
  image: item.product?.image ?? "",
}));



const addToWishlist = async (item: WishlistItem) => {
  await createWishlist({
    productId: item.productId,
  }).unwrap();
};

const removeFromWishlist = async (productId: string) => {
  await deleteWishlist(productId).unwrap();
};


const isInWishlist = (productId: string) =>
  wishlistItems.some(
    (item) => item.productId === productId
  );
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        totalWishlistItems: wishlistItems.length,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }

  return context;
}