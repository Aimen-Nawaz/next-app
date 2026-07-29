"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useCart } from "@/app/context/CartContext";
import Cart from "./Cart";

export default function NavbarCart() {
  const { cartItems, totalPrice } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* ================= Mobile Cart Dialog ================= */}
      <div className="block sm:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="relative h-8 w-8 sm:h-9 sm:w-9"
            >
              <ShoppingCart className="size-4 sm:size-5" />

              {cartCount > 0 && (
                <Badge
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    p-0
                    text-[10px]
                    text-white
                    sm:h-5
                    sm:w-5
                    sm:text-xs
                  "
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[95%] max-w-md rounded-2xl p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl">
                Your Cart
              </DialogTitle>

              <DialogDescription className="text-xs sm:text-sm">
                Review your items before checkout
              </DialogDescription>
            </DialogHeader>

            {/* Cart Items */}
            <div className="max-h-[55vh] space-y-4 overflow-y-auto py-2">
              {cartItems.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  Cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <Cart
                    key={item.id}
                    item={item}
                  />
                ))
              )}
            </div>

            {/* Total */}
            <div className="border-t border-border pt-4">
              <div className="mb-4 flex justify-between">
                <span className="text-sm font-semibold sm:text-base">
                  Total
                </span>

                <span className="text-base font-bold text-primary sm:text-lg">
                  Rs. {totalPrice.toFixed(0)}
                </span>
              </div>

              <Link href="/checkout">
                <Button className="w-full text-sm sm:text-base">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* ================= Desktop / Tablet Cart Sheet ================= */}
      <div className="hidden sm:block">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="relative h-10 w-10 lg:h-11 lg:w-11"
            >
              <ShoppingCart className="size-6 lg:size-7" />

              {cartCount > 0 && (
                <Badge
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    p-0
                    text-xs
                    text-white
                  "
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>

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

            {/* Cart Items */}
            <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-center text-sm text-muted-foreground">
                  Cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <Cart
                    key={item.id}
                    item={item}
                  />
                ))
              )}
            </div>

            {/* Total */}
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
                <Button className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}