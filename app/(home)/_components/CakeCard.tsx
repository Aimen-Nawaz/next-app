"use client";

import Image from "next/image";
import type { Cake } from "@/lib/data/cakes";
import CartButton from "@/components/common/CartButton";
import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import Link from "next/link";

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  const { addToWishlist, isInWishlist } = useWishlist();

  const liked = isInWishlist(cake.id);

  return (
    <div className="overflow-hidden rounded-3xl  bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">

        {/* ❤️ Wishlist button (ADD HERE) */}
        <button
          onClick={() =>
            addToWishlist({
              id: cake.id,
              name: cake.name,
              price: cake.price,
              image: cake.image,
            })
          }
          className="absolute right-3 top-3 z-10 rounded-full bg-transparent p-2 shadow"
        >
          <Heart
            className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
          />
        </button>
        <Link href={`/cakes/${cake.id}`}>

          <Image
            src={cake.image}
            alt={cake.name}
            width={400}
            height={300}
            className="h-64 w-full object-cover"
          />

          <div className="p-5">

            <h3 className="text-xl font-semibold text-foreground">
              {cake.name}
            </h3>

            <p className="mt-2 text-lg font-bold text-primary">
              Rs. {cake.price}
            </p>

            <p className="mt-2 text-muted-foreground">
              {cake.excerpt}
            </p>

          </div>

        </Link>



        <CartButton
          product={{
            id: cake.id,
            name: cake.name,
            price: cake.price,
            image: cake.image,
          }}
        />
      </div>
    </div>
  );
}