"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";
import type { CartItem } from "@/types/product";



type Props = {
  item: CartItem;
};

export default function CartItemCard({ item }: Props) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="relative flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">

      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">

        <Image
          src={`/${item.image}`}
          alt={item.name}
          width={90}
          height={90}
          className="h-16 w-16 shrink-0 rounded-lg object-cover sm:h-20 sm:w-20 md:h-[90px] md:w-[90px]"
        />

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#2D221C] sm:text-base md:text-lg">
            {item.name}
          </h3>

          <p className="mt-1 text-sm font-bold text-[#A65A2E] sm:text-base">
            Rs. {item.price}
          </p>

          {/* Quantity */}
          <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">

            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7 sm:h-8 sm:w-8"
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
            >
              -
            </Button>

            <span className="text-sm font-semibold sm:text-base">
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7 sm:h-8 sm:w-8"
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
      <div className="shrink-0 text-right">

        <p className="text-sm font-bold text-[#A65A2E] sm:text-base md:text-lg">
          Rs. {item.price * item.quantity}
        </p>

        <Button
          variant="ghost"
          size="icon"
          className="mt-2 h-8 w-8 text-red-500 hover:text-red-700 sm:mt-4 sm:h-9 sm:w-9"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

      </div>

    </div>
  );
}