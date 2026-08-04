"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductForm from "./ProductForm";

type Props = {
  addopen: boolean;
  onOpenChange: (addopen: boolean) => void;
};

export default function AddProductDialog({
  addopen,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={addopen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground text-center">Add Product</DialogTitle>
        </DialogHeader>

        {/* Product form goes here */}
          <ProductForm />
      </DialogContent>
    </Dialog>
  );
}