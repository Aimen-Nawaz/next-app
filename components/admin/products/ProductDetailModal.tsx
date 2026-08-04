"use client";

import ProductDetail from "@/components/products/[id]/ProductDetail";

type Props = {
  productId: string;
  category: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProductDetailModal({
productId,
  category,
  open,
  onOpenChange,
}: Props) {
  return (
    <ProductDetail
      productId={productId}
      category={category}
      open={open}
      onOpenChange={onOpenChange}
    />
  );
}