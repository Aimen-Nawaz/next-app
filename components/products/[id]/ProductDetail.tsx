"use client";

import { useMemo } from "react";
import Image from "next/image";
import CartButton from "@/components/common/CartButton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useGetProductQuery } from "@/services/product";
import { UUID } from "crypto";

type ProductDetailProps = {
  productId: string;
  category: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProductDetail({
  productId,
  category,
  open,
  onOpenChange,
}: ProductDetailProps) {
  const queryArgs = useMemo(
    () => ({
      id: productId as UUID,
      query: {
        category,
      },
    }),
    [category, productId]
  );

  const {
    data: productRes,
    isLoading: loading,
  } = useGetProductQuery(queryArgs, {
    skip: !(open && productId),
  });

  const product = productRes?.data;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[90vw]
          max-w-xl
          max-h-[90vh]
          overflow-hidden
          rounded-2xl
          p-0
        "
      >
        {/* LOADING */}
        {loading ? (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-muted-foreground">
              Loading product...
            </p>
          </div>
        ) : !product ? (
          /* PRODUCT NOT FOUND */
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-muted-foreground">
              Product Not Found
            </p>
          </div>
        ) : (
          <div className="flex max-h-[90vh] flex-col overflow-hidden">
            {/* ================= IMAGE ================= */}
            <div
              className="
                relative
                h-[180px]
                w-full
                shrink-0
                overflow-hidden
                bg-background
                sm:h-[210px]
                md:h-[230px]
              "
            >
              {product.image ? (
                <Image
                  src={
                    product.image.startsWith("/")
                      ? product.image
                      : `/${product.image}`
                  }
                  alt={product.name}
                  fill
                  sizes="
                    (max-width: 640px) 90vw,
                    (max-width: 768px) 90vw,
                    576px
                  "
                  className="object-cover object-center"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    No Image Available
                  </p>
                </div>
              )}
            </div>

            {/* ================= CONTENT ================= */}
            <div
              className="
                min-h-0
                overflow-y-auto
                p-4
                sm:p-5
              "
            >
           
              <DialogHeader className="text-left">
                <DialogTitle
                  className="
                    text-lg
                    font-bold
                    leading-tight
                    sm:text-xl
                    md:text-2xl
                  "
                >
                  {product.name}
                </DialogTitle>

                <DialogDescription
                  className="
                    mt-1.5
                    text-xs
                    leading-5
                    text-muted-foreground
                    sm:text-sm
                  "
                >
                  {product.description}
                </DialogDescription>
              </DialogHeader>

              {product.flavours?.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-sm font-semibold">
                    Flavours
                  </h3>

                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {product.flavours.map((flavour) => (
                      <span
                        key={flavour}
                        className="
                          rounded-full
                          bg-[#FCE8DE]
                          px-2.5
                          py-1
                          text-xs
                          font-medium
                        "
                      >
                        {flavour}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= SIZES ================= */}
              {product.sizes?.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-sm font-semibold">
                    Available Sizes
                  </h3>

                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="
                          rounded-md
                          border
                          px-2.5
                          py-1
                          text-xs
                          font-medium
                        "
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= PRICE ================= */}
              <div className="mt-2">
                <p className="text-lg font-bold text-primary sm:text-xl">
                  Rs. {product.price}
                </p>

                {/* RATING */}
                <p className="mt-1 text-xs text-muted-foreground">
                  Rating:{" "}
                  <span className="font-semibold text-foreground">
                    {product.rating}/5
                  </span>
                </p>
              </div>

              {/* ================= ADD TO CART ================= */}
              <div className="mt-2 w-full">
                <CartButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}