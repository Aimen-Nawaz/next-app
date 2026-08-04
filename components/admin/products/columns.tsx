"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";



export const columns = (
  onView: (id: string, category: string) => void,
  onEdit: (id: string) => void,
  onDelete: (id: string) => void
): ColumnDef<Product>[] => [
    {
      accessorKey: "image",
      header: "Image",
    },

    {
      accessorKey: "name",
      header: "Product",
    },

    {
      accessorKey: "category",
      header: "Category",
    },

    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <>Rs. {row.original.price}</>,
    },

    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{row.original.rating}</span>
        </div>
      ),
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex  gap-2">


          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              onView(
                row.original.id,
                row.original.category
              )
            }
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(row.original.id)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={() =>
              onDelete(row.original.id)
            }
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];