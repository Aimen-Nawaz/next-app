"use client";
import { useDeleteProductMutation } from "@/services/product";
import type { UUID } from "node:crypto";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
productId:string
};

export default function DeleteProductDialog({
  open,
  onOpenChange,
  productId,
}: Props) {
  const [deleteProduct, { isLoading }] =
    useDeleteProductMutation();

  const handleDelete = async () => {
    console.log("DELETE ID:", productId);

    if (!productId) {
      return;
    }

    try {
      const result = await deleteProduct({
        id: productId,
      }).unwrap();

      console.log("DELETE SUCCESS:", result);

      onOpenChange(false);
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  
  }; 
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Product
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete this product?
            <br />
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
             onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
          >
            Delete Product
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}