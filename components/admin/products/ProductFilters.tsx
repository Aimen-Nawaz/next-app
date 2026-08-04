"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  onAdd: () => void;
};

export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  onAdd,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col mt-2 gap-3 sm:flex-row">
        <Input
          placeholder="Search products..."
          className="w-full p-2 sm:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className=" sm:w-48 mb-2">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent className="text-muted-foreground mt-7">
            <SelectItem value="all" className="text-muted-foreground p-2">
              All Categories
            </SelectItem>
            <SelectItem value="cake" id="cakes">
              Cake
            </SelectItem>
            <SelectItem value="cookie" id="cookies">
              Cookie
            </SelectItem>
            <SelectItem value="bread" id="breads">
              Bread
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={() => {
            console.log("Button clicked");
            onAdd();
          }}
        >
          Add Product
        </Button>
      </div>
    </div>
  );
}