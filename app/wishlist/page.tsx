"use client";
import { useWishlist } from "@/app/context/WishlistContext";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 text-center items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold ">My Wishlist ❤️</h1>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-2xl border bg-background shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-62 w-full object-cover"
              />

              <div className="p-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-2 font-medium">${item.price}</p>
              </div>
              <div className="mt-auto p-5 pt-0">
                <Button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 w-full rounded-lg "
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}