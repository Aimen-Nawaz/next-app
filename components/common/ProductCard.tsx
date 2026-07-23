"use client";

import Image from "next/image";

import CartButton from "@/components/common/CartButton";
import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type Product = {
  id: string;
  name: string;
  price: number;
  excerpt: string;
  description: string;
  rating: number;
  category: string;
  flavours: string[];
  sizes: string[];
  image: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product}: ProductCardProps) {
  const { addToWishlist, isInWishlist } = useWishlist();

  const liked = isInWishlist(product.id);
  console.log("==>", product)
  return (
    <div className="overflow-hidden rounded-3xl  bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">

        {/* ❤️ Wishlist button (ADD HERE) */}
        < Button
          onClick={() =>
            addToWishlist({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
          className="absolute right-3 top-3 z-10 rounded-lg bg-background/40 p-1 shadow"
        >
          <Heart
            className={`size-6 ${liked ? "fill-destructive text-destructive" : "text-destructive"
              }`}
          />
        </Button>
        <Link href={`/cakes/${product.id}`}>

          <Image
            src={`/${product.image}`}
            alt={product.name}
            width={400}
            height={300}
            className="h-72 w-full object-cover"
            loading="lazy"
          />

          <div className="p-5">

            <h3 className="text-xl font-semibold text-foreground">
              {product.name}
            </h3>

            <p className="mt-2 text-lg font-bold text-primary">
              Rs. {product.price}
            </p>

            <p className="mt-2 text-muted-foreground">
              {product.excerpt}
            </p>

          </div>

        </Link>


        <div className="mt-auto p-5 pt-0">
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
  );
}