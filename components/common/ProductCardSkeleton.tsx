import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md">
      {/* Image Skeleton */}
      <Skeleton className="h-72 w-full rounded-none" />

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Product Name */}
        <Skeleton className="h-6 w-3/4" />

        {/* Price */}
        <Skeleton className="h-5 w-1/3" />

        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />

        {/* Cart Button */}
        <Skeleton className="mt-5 h-10 w-full rounded-full" />
      </div>
    </div>
  );
}