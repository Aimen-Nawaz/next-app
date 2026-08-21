"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";

import CartButton from "@/components/common/CartButton";
import ProductDetail from "@/components/products/[id]/ProductDetail";
import {
  useCreateWishlistMutation,
  useGetWishlistQuery,
  useDeleteWishlistMutation,
} from "@/services/whishlist"
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { useMeQuery } from "@/services/auth";
import { WishList } from "@/types/user";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  // liked:boolean
  wishItem: WishList | undefined
}

export default function ProductCard({
  product,
  // liked = false
  wishItem
}: ProductCardProps) {


  const [open, setOpen] = useState(false);




  const [createWishlist] = useCreateWishlistMutation();

  const [deleteWishlist] = useDeleteWishlistMutation();



  const liked = !!wishItem;

  const handleWishlist = async () => {
    try {
      if (wishItem) {
        await deleteWishlist(wishItem.id).unwrap();
      } else {
        await createWishlist({
          productId: product.id,
        }).unwrap();
      }
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };
console.log(  "PRODUCT:",product.name,  "PRODUCT ID:",  product.id, "WISH ITEM:", wishItem, "LIKED:", liked
  );

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative">

          {/* WISHLIST BUTTON */}
          <Button
            type="button"
            onClick={handleWishlist}
            className="absolute right-2 top-2 z-10 h-8 w-8 rounded-lg bg-background/40 p-1 shadow sm:right-3 sm:top-3 sm:h-9 sm:w-9 md:h-10 md:w-10"
          >
            <Heart
              className={cn(`size-4 sm:size-5 md:size-6 text-destructive`,
                liked && "fill-destructive"
              )}
            />
          </Button>

          {/* PRODUCT IMAGE + DETAILS */}
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          >
            <Image
              src={
                product.image.startsWith("/")
                  ? product.image
                  : `/${product.image}`
              }
              alt={product.name}
              width={400}
              height={300}
              className="h-52 w-full object-cover sm:h-56 md:h-64 lg:h-72"
              loading="lazy"
            />

            <div className="p-3 sm:p-4 md:p-5">
              <h3 className="text-base font-semibold text-foreground sm:text-lg md:text-xl">
                {product.name}
              </h3>

              <p className="mt-1 text-base font-bold text-primary sm:text-lg">
                Rs. {product.price}
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm md:text-base">
                {product.excerpt}
              </p>
            </div>
          </div>

          {/* ADD TO CART */}
          <div className="p-3 pt-0 sm:p-4 md:p-5">
            <CartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />
          </div>
        </div>
      </div>

      {/* PRODUCT DETAIL DIALOG */}
      <ProductDetail
        productId={product.id}
        category={product.category}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}