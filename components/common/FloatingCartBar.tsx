"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { useCart } from "@/app/context/CartContext";
import Cart from "@/components/common/Cart";

export default function FloatingCartBar() {
  const { cartItems, totalPrice } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  // Don't show floating cart when empty
  if (cartItems.length === 0) {
    return null;
  }

  // Total items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* ================= FLOATING CART BAR ================= */}
      <div
        className="
          fixed
          bottom-4
          left-1/2
          z-50
          w-[90%]
          max-w-3xl
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            rounded-2xl
            bg-[#B5A06B]
            px-4
            py-3
            shadow-xl
            sm:px-6
            sm:py-4
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-white sm:h-7 sm:w-7" />

              {/* COUNT */}
              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-5
                  min-w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-1
                  text-xs
                  font-bold
                  text-[#B5A06B]
                "
              >
                {totalItems}
              </span>
            </div>

            {/* TOTAL PRICE */}
            <span className="text-base font-bold text-white sm:text-lg">
              Rs.{" "}
              {totalPrice.toLocaleString("en-GB", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          {/* VIEW CART */}
          <Button
            onClick={() => setCartOpen(true)} className="   rounded-xl   px-   py-2text-smfont-bold sm:px-6
              sm:py-3
              sm:text-base
            "
          >
            View Cart →
          </Button>
        </div>
      </div>

      <Sheet
        open={cartOpen}
        onOpenChange={setCartOpen}
      >
        <SheetContent
          className="
            flex
            h-full
            w-full
            flex-col
            md:max-w-md
            lg:max-w-lg
          "
        >
          <SheetHeader>
            <SheetTitle className="text-xl md:text-2xl">
              Your Cart
            </SheetTitle>

            <SheetDescription className="text-sm md:text-base">
              Review your items before checkout
            </SheetDescription>
          </SheetHeader>

        
          <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
            {cartItems.map((item) => (
              <Cart
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* TOTAL */}
          <div className="border-t border-border pt-4">
            <div className="mb-4 flex justify-between">
              <span className="text-base font-semibold md:text-lg">
                Total
              </span>

              <span className="text-lg font-bold text-primary md:text-xl">
                Rs. {totalPrice.toFixed(0)}
              </span>
            </div>

              <Link href="/checkout">
            <Button
              className="w-full"
              onClick={() => {
                setCartOpen(false);
          
              }}
            >
              Proceed to Checkout
            </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}