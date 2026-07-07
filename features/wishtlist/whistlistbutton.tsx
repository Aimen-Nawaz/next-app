"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function WishlistButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLiked(!liked)}
      className="hover:bg-transparent"
    >
      <Heart
        className={`h-5 w-5 transition ${
          liked ? "fill-red-500 text-red-500" : "text-gray-600"
        }`}
      />
    </Button>
  );
}