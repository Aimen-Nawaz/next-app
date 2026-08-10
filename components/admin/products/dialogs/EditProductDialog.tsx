"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProductForm from "../form/ProductForm";
import { Product } from "@/types/product";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
};

export default function EditProductDialog({
  open,
  onOpenChange,
  product,
}: Props) {
  if (!product) {
    return null; // or render a loading state, or a message indicating no product is selected
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <ProductForm product={product} open={open} onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}