"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function CartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
  <Button
      onClick={() => addToCart(product)}
      className="w-full h-11 rounded-xl"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}