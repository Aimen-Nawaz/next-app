"use client";
import { useWishlist } from "@/app/context/WishlistContext";

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
            <div key={item.id} className="overflow-hidden rounded-2xl border bg-white shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="mt-2 font-medium">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}