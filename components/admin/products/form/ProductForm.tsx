"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductFormData, productSchema } from "./validationSchema";
import { useForm, Controller } from "react-hook-form";
import { useAddProductMutation, useUpdateProductMutation } from "@/services/product";
import { Product } from "@/types/product";
import { UUID } from "node:crypto";
import { arraysEqual } from "@/lib/utils";


const FLAVOUR_OPTIONS = ["Chocolate", "Vanilla", "Strawberry", "Caramel"];
const SIZE_OPTIONS = ["Small", "Medium", "Large", "Extra Large"];

type Props = {
  product?: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProductForm({
  product,
  open,
  onOpenChange,
}: Props) {
  const [addProduct, { isLoading: isAdding, error: addError }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating, error: updateError }] = useUpdateProductMutation();

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      flavours: [],
      sizes: [],
    },
  });
  useEffect(() => {
    if (product) {
      reset({
        "product-name": product.name,
        price: product.price,
        category: product.category,
        rating: product.rating,
        excerpt: product.excerpt,
        description: product.description,
        flavours: product.flavours ?? [],
        sizes: product.sizes ?? [],
      });
    }
  }, [product, reset]);
  const onSubmit = async (data: ProductFormData) => {
    console.log("Form submitted", data);

    const productFormData = new FormData();
    if (product) {
      Object.entries(data).forEach(([key, value]) => {
        if (key === "image" && value instanceof FileList && value.length > 0) {
          console.log("Key:", key, "Value:", value, "type", typeof value, "Product Value:", product[key], "type", typeof product[key]);
          return productFormData.append(key, value[0]);
        } else if (key === "product-name" && value !== product.name) {
          console.log("Key:", key, "Value:", value, "type", typeof value, "Product Value:", product.name, "type", typeof product.name);
          return productFormData.append("name", value as string);
        } else if ((key === "flavours" || key === "sizes") && !arraysEqual(value, (product as Record<string, typeof value>)[key])) {
          console.log("Key:", key, "Value:", value, "type", typeof value, "Product Value:", product[key], "type", typeof product[key]);
          return (value as string[]).forEach((val) => productFormData.append(key, val));
        }
        else if (value !== (product as Record<string, typeof value>)[key]) {
          console.log("Key:", key, "Value:", value, "type", typeof value, "Product Value:", product[key], "type", typeof product[key]);
          return productFormData.append(key, value);
        }
      });
    } else {
      Object.entries(data).forEach(([key, value]) => {
        if (key === "image" && value instanceof FileList && value.length > 0) {
          return productFormData.append(key, value[0]);
        } else if (key === "product-name") {
          return productFormData.append("name", value as string);
        } else if (key === "flavours" || key === "sizes") {
          return (value as string[]).forEach((val) => productFormData.append(key, val));
        }
        else {
          return productFormData.append(key, value);
        }
      });
    }

    try {
      if (product) {
        await updateProduct({ id: product.id as UUID, formData: productFormData });
      } else {
        await addProduct(productFormData);
      }
      // reset();
      // open && onOpenChange(false);
    } catch (error) {
      console.error("Error adding product:", error);
      alert(error ?? "Failed to add product. Please try again.");
    }
  }

  return (
    <form
      className="space-y-6 "
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset()}
    >

      <div className="grid gap-4 md:grid-cols-2">
        {/* Product Name */}
        <div className="space-y-2 ">
          <Label htmlFor="product-name">Product Name</Label>
          <Input
            id="product-name"
            placeholder="Chocolate Cake"
            {...register("product-name")}
          />
        </div>
        {errors["product-name"] && (
          <p className="text-sm text-red-500">{errors["product-name"].message}</p>
        )}

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="1500"
            {...register("price", { valueAsNumber: true })}
          />
        </div>
        {errors.price && (
          <p className="text-sm text-red-500">{errors.price.message}</p>
        )}

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value}
              >
                <SelectTrigger className="p-2">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="cake">Cake</SelectItem>
                  <SelectItem value="cookie">Cookie</SelectItem>
                  <SelectItem value="bread">Bread</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            type="number"
            step={0.1}
            min={0}
            max={5}
            placeholder="5"
            {...register("rating", { valueAsNumber: true })}
          />
        </div>
        {errors.rating && (
          <p className="text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <Label htmlFor="excerpt">Short Description</Label>
        <Textarea
          id="excerpt"
          placeholder="Small description..."
          {...register("excerpt")}
        />
      </div>
      {errors.excerpt && (
        <p className="text-sm text-red-500">{errors.excerpt.message}</p>
      )}

      {/* Description */}
      <div className="space-y-2 mt-1">
        <Label htmlFor="description">Full Description</Label>
        <Textarea
          id="description"
          rows={5}
          placeholder="Write product description..."
          {...register("description")}
        />
      </div>
      {errors.description && (
        <p className="text-sm text-red-500">{errors.description.message}</p>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Flavours */}
        <div className="space-y-2 mt-1">
          <Label>Flavours</Label>
          <Controller
            name="flavours"
            control={control}
            render={({ field }) => (
              <div className="grid gap-2">
                {FLAVOUR_OPTIONS.map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <Checkbox
                      checked={field.value?.includes(option)}
                      onCheckedChange={(checked) => {
                        const nextValues = checked
                          ? [...(field.value ?? []), option]
                          : (field.value ?? []).filter((value) => value !== option);
                        field.onChange(nextValues);
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.flavours && (
            <p className="text-sm text-red-500">{errors.flavours.message}</p>
          )}
        </div>

        {/* Sizes */}
        <div className="space-y-2 mt-1">
          <Label>Sizes</Label>
          <Controller
            name="sizes"
            control={control}
            render={({ field }) => (
              <div className="grid gap-2">
                {SIZE_OPTIONS.map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <Checkbox
                      checked={field.value?.includes(option)}
                      onCheckedChange={(checked) => {
                        const nextValues = checked
                          ? [...(field.value ?? []), option]
                          : (field.value ?? []).filter((value) => value !== option);
                        field.onChange(nextValues);
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          />
          {errors.sizes && (
            <p className="text-sm text-red-500">{errors.sizes.message}</p>
          )}
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
          {...register("image")}
        />
      </div>
      {errors.image && (
        <p className="text-sm text-red-500">
          {errors.image?.message as string}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-2">
        <Button type="reset" variant="outline">
          Cancel
        </Button>

        <Button type="submit">
          Save Product
        </Button>
      </div>
    </form>
  );
}