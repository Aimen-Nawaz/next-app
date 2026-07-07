"use client";

import Link from "next/link";
import Image from "next/image";
import CartButton from "@/components/common/CartButton";
import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { breads } from "@/lib/data/bread";

export default function Bread() {
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <section className="bg-background text-foreground min-h-screen w-full py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-foreground">
          Fresh Bread
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Soft, fresh, and baked daily with premium ingredients.
        </p>


        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {breads.map((bread) => {

            const liked = isInWishlist(bread.id);

            return (
              <div
                key={bread.id}
                className="relative overflow-hidden rounded-2xl bg-card shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Wishlist Button */}
                <button
                  onClick={() =>
                    addToWishlist({
                      id: bread.id,
                      name: bread.name,
                      price: bread.price,
                      image: bread.image,
                    })
                  }
                  className="absolute right-3 top-3 z-10 rounded-full bg-background p-2 shadow"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      liked
                        ? "fill-red-500 text-red-500"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>


                {/* Product Detail Link */}
                <Link href={`/bread/${bread.id}`}>

                  <Image
                    src={bread.image}
                    alt={bread.name}
                    width={400}
                    height={300}
                    className="h-64 w-full  object-cover"
                  />


                  <div className="p-5">

                    <h3 className="text-xl font-semibold text-foreground">
                      {bread.name}
                    </h3>


                    <p className="mt-2 text-lg font-bold text-primary">
                      Rs. {bread.price}
                    </p>


                    <p className="mt-2 text-muted-foreground">
                      {bread.excerpt}
                    </p>

                  </div>

                </Link>


                {/* Cart Button */}
                <div className="px-5 pb-5">

                  <CartButton
                    product={{
                      id: bread.id,
                      name: bread.name,
                      price: bread.price,
                      image: bread.image,
                    }}
                  />

                </div>


              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}