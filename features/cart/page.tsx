"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type Props = {
  item: CartItem;
};

export default function CartItemCard({ item }: Props) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="relative flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Left Side */}
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          width={90}
          height={90}
          className="rounded-lg object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-[#2D221C]">
            {item.name}
          </h3>

          <p className="mt-1 text-[#A65A2E] font-bold">
            Rs. {item.price}
          </p>

          {/* Quantity */}
          <div className="mt-4 flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
            >
              -
            </Button>

            <span className="font-semibold">
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="outline"
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-right">
        <p className="text-lg font-bold text-[#A65A2E]">
          Rs. {item.price * item.quantity}
        </p>

        <Button
          variant="ghost"
          size="icon"
          className="mt-4 text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}