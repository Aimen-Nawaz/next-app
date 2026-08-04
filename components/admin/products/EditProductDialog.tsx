"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProductForm from "./ProductForm";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
};

export default function EditProductDialog({
  open,
  onOpenChange,
  productId,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <ProductForm productId={productId} />
      </DialogContent>
    </Dialog>
  );
}