"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {
  productId?: string;
};
export default function ProductForm({
  productId,
}: Props) {

  return (
    <form className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Product Name */}
        <div className="space-y-2 ">
          <Label htmlFor="name ">Product Name</Label>
          <Input id="name" placeholder="Chocolate Cake" />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="1500"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Select>
            <SelectTrigger className="p-2">
              <SelectValue   placeholder="Select Category " />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="cake">Cake</SelectItem>
              <SelectItem value="cookie">Cookie</SelectItem>
              <SelectItem value="bread">Bread</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            type="number"
            min={1}
            max={5}
            placeholder="5"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <Label htmlFor="excerpt">Short Description</Label>
        <Textarea
          id="excerpt"
          placeholder="Small description..."
        />
      </div>

      {/* Description */}
      <div className="space-y-2 mt-1">
        <Label htmlFor="description">Full Description</Label>
        <Textarea
          id="description"
          rows={5}
          placeholder="Write product description..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Flavours */}
        <div className="space-y-2 mt-1">
          <Label htmlFor="flavours">
            Flavours
          </Label>
          <Input
            id="flavours"
            placeholder="Chocolate, Vanilla"
          />
        </div>

        {/* Sizes */}
        <div className="space-y-2 mt-1">
          <Label htmlFor="sizes">
            Sizes
          </Label>
          <Input
            id="sizes"
            placeholder="Small, Medium, Large"
          />
        </div>
      </div>

      {/* Image */}
      <div className="space-y-2 ">
        <Label htmlFor="image">
          Product Image
        </Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>

        <Button type="submit">
          Save Product
        </Button>
      </div>
    </form>
  );
}