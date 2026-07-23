"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="col-span-full flex min-h-[400px] flex-col items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Outer ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted border-t-primary" />

        {/* Inner circle */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-foreground">
        Fresh treats are on the way...
      </h3>

      <p className="mt-2 text-center text-muted-foreground">
        We're preparing something delicious for you!
      </p>
    </div>
  );
}