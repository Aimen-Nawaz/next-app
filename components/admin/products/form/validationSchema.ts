import { z } from "zod";

export const productSchema = z.object({
  "product-name": z
    .string()
    .min(2, "Product name is required"),

  price: z.number({
      error: "Price is required",
    })
    .min(1, "Price must be greater than 0"),

  category: z.string()
    .min(1, "Category is required"),

  rating: z
    .number({
      error: "Rating is required",
    })
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5"),

  excerpt: z
    .string()
    .min(1, "Short description is required"),

  description: z
    .string()
    .min(1, "Description is required"),

  flavours: z
    .array(z.string())
    .min(2, "At least two flavours are required"),

  sizes: z
    .array(z.string())
    .min(2, "At least two sizes are required"),

  image: z.any().optional(), 
});

export type ProductFormData = z.infer<typeof productSchema>;