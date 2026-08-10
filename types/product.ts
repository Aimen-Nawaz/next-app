export type Product = {
  id: string;
  name: string;
  price: number;
  excerpt: string;
  description: string;
  rating: number;
  category: string;
  flavours: string[];
  sizes: string[];
  image: string;
};

export type ProductsResponse = {
  message: String,
  data: Product[]
  limit: number,
  skip: number,
  total: number
}
export type ProductResponse = {
  message: String,
  data: Product,
}

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type ProductsSectionProps = {
  category: "cake" | "cookie" | "bread";
  title: string;
  description: string;
  home?: boolean;
};

export type ProductQuery = {
  category?: String,
  limit?: number,
  skip?: number
}