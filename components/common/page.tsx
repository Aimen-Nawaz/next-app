"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cartItems, totalItems } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {totalItems === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item: any) => (
            <div
              key={item.id}
              className="border p-4 rounded flex justify-between"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}