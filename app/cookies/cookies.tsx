"use client";

import Image from "next/image";
import CartButton from "@/components/common/CartButton";
import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { cookies } from "@/lib/data/cookies";
import Link from "next/link";


export default function Cookies() {
  const { addToWishlist, isInWishlist } = useWishlist();


  return (
    <section className="bg-[#FFF9F6] min-h-screen w-full  py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-[#2D221C]">
          Our Cookies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Freshly baked cookies made with premium ingredients and lots of love.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cookies.map((cookie) => {
            const liked = isInWishlist(cookie.id);

            return (
              <div
                key={cookie.id}
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Wishlist Button */}
                <button
                  onClick={() =>
                    addToWishlist({
                      id: cookie.id,
                      name: cookie.name,
                      price: cookie.price,
                      image: cookie.image,
                    })
                  }
                  className="absolute right-3 top-3 z-10 rounded-full p-2 "
                >
                  <Heart
                    className={`h-5 w-5 ${liked
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                      }`}
                  />
                </button>
                <Link href={`/cookies/${cookie.id}`}>

                  <Image
                    src={cookie.image}
                    alt={cookie.name}
                    width={400}
                    height={300}
                    className="h-64 w-full  object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-semibold text-foreground">
                      {cookie.name}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-primary">
                      Rs. {cookie.price}
                    </p>

                    <p className="mt-2 text-muted-foreground">
                      {cookie.excerpt}
                    </p>

                  </div>

                </Link>



                <div className="mt-3">
                  <CartButton
                    product={{
                      id: cookie.id,
                      name: cookie.name,
                      price: cookie.price,
                      image: cookie.image,
                    }}
                  />
                </div>
              </div>
              
        );
          })}
      </div>
    </div>
    </section >
  );
}