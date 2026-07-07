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

import { useCart } from "@/app/context/CartContext";
import CartItemCard from "@/features/cart/page";

export default function NavbarCart() {
  const { cartItems, totalPrice } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="relative"
        >
          <ShoppingCart className="h-6 w-6" />

          {cartCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 p-0 text-xs text-white flex items-center justify-center">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex h-full w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>

          <SheetDescription>
            Review your items before checkout
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
              />
            ))
          )}
        </div>

        <div className="border-t border-border pt-4">
          <div className="mb-4 flex justify-between">
            <span className="font-semibold">Total</span>

            <span className="font-bold text-primary">
              ${totalPrice.toFixed(0)}
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
  );
}