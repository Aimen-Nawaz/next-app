"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash } from "lucide-react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import Image from "next/image";



export const columns = (
  onView: (id: string, category: string) => void,
  onEdit: (product: Product) => void,
  onDelete: (product: Product) => void
): ColumnDef<Product>[] => [
    {
      header: "Product",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Image src={`/${row.original.image}`} alt={row.original.name} width={50} height={50} className="rounded-sm aspect" />
          <span className="font-medium">{row.original.name}</span>
        </div>
      ),
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
           onClick={() => onEdit(row.original)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={() =>
              onDelete(row.original)
            }
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];