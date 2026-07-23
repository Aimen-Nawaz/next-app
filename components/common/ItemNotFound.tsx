"use client";

import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

type ItemNotFoundProps = {
  title?: string;
  description?: string;
};

export default function ItemNotFound({
  title = "No Items Found",
  description = "We couldn't find any delicious treats here right now. Please check back later.",
}: ItemNotFoundProps) {
  return (
    <div className="col-span-full flex min-h-[450px] flex-col items-center justify-center px-6 text-center">
      {/* Icon */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <SearchX className="h-12 w-12 text-primary" />
      </div>

      {/* Text */}
      <h2 className="mt-7 text-3xl font-bold text-foreground">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        {description}
      </p>

      {/* Button */}
      <Link href="/">
        <Button className="mt-7 rounded-full px-7">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}