"use client";

import Link from "next/link";
import { User } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      {/* ================= Profile Button ================= */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
        >
          <User className="size-4 sm:size-5 md:size-6 lg:size-7" />
        </Button>
      </DropdownMenuTrigger>

      {/* ================= Dropdown Menu ================= */}
      <DropdownMenuContent
        align="end"
        className="w-40 sm:w-44 md:w-48 lg:w-52"
      >
        <DropdownMenuItem asChild>
          <Link href="/login" className="text-xs sm:text-sm md:text-base">
            Login
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/register" className="text-xs sm:text-sm md:text-base">
            Register
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile" className="text-xs sm:text-sm md:text-base">
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/orders" className="text-xs sm:text-sm md:text-base">
            Orders
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}