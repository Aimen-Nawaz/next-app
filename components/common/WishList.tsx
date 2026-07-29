"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { useWishlist } from "@/app/context/WishlistContext";

export default function NavbarWishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const wishlistCount = wishlistItems.length;

  return (
    <>
      {/* ================= Mobile Wishlist Dialog ================= */}
      <div className="block sm:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="relative h-8 w-8"
            >
              <Bookmark className="size-5" />

              {wishlistCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-[10px] text-white">
                  {wishlistCount}
                </Badge>
              )}
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[95%] max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle>My Wishlist ❤️</DialogTitle>

              <DialogDescription>
                Your saved favourite products
              </DialogDescription>
            </DialogHeader>

            <div className="max-h-[60vh] space-y-4 overflow-y-auto">
              {wishlistItems.length === 0 ? (
                <p className="py-8 text-center text-muted-foreground">
                  Your wishlist is empty.
                </p>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-xl border p-3"
                  >
                    <img
                      src={`/${item.image}`}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold">
                        {item.name}
                      </h3>

                      <p className="font-medium text-primary">
                        Rs. {item.price}
                      </p>
                    </div>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))
              )}
            </div>

            <Link href="/wishlist">
              <Button className="w-full">
                View Full Wishlist
              </Button>
            </Link>
          </DialogContent>
        </Dialog>
      </div>

      {/* ================= Tablet / Desktop Wishlist Sheet ================= */}
      <div className="hidden sm:block">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="relative h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
            >
              <Bookmark className="size-5 sm:size:2 md:size-6 lg:size-7" />

              {wishlistCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-0 text-xs text-white">
                  {wishlistCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent className="flex h-full w-full flex-col sm:max-w-md lg:max-w-lg">
            <SheetHeader>
              <SheetTitle>My Wishlist ❤️</SheetTitle>

              <SheetDescription>
                Your saved favourite products
              </SheetDescription>
            </SheetHeader>

            <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
              {wishlistItems.length === 0 ? (
                <p className="py-8 text-center text-muted-foreground">
                  Your wishlist is empty.
                </p>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-xl border p-4"
                  >
                    <img
                      src={`/${item.image}`}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-medium text-primary">
                        Rs. {item.price}
                      </p>

                      <Button
                        size="sm"
                        variant="destructive"
                        className="mt-2"
                        onClick={() =>
                          removeFromWishlist(item.id)
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <Link href="/wishlist">
              <Button className="w-full">
                View Full Wishlist
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}