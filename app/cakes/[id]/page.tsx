import Image from "next/image";
import axios from "axios";
import CartButton from "@/components/common/CartButton";
import ItemNotFound from "@/components/common/ItemNotFound";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";

type Product = {
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
export default function CakeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [cake, setCake] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCake = async () => {
      try {
        const { id } = await params;

        const response = await axios.get<{ data: Product }>(
          `http://localhost:8000/products/${id}`
        );

        setCake(response.data.data || null);
      } catch (error) {
        console.error("Error fetching cake:", error);
        setCake(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCake();
  }, [params]);
  if (loading) {
  return <Loading />;
}
    if (!cake) {
      return (
        <ItemNotFound
          title="Cake Not Found"
          description="Sorry, we couldn't find the cake you're looking for."
        />
      );
    }

  return (
    <main className="min-h-screen  py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={cake.image}
              alt={cake.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest ">
              {cake.category}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-foreground">
              {cake.name}
            </h1>

            <p className="mt-5 text-muted-foreground">
              {cake.description}
            </p>

            {/* Flavours */}
            <h3 className="mt-6 text-xl font-semibold">
              Flavours
            </h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {cake.flavours.map((flavour) => (
                <span
                  key={flavour}
                  className="rounded-full bg-[#FCE8DE] px-4 py-2"
                >
                  {flavour}
                </span>
              ))}
            </div>

            {/* Sizes */}
            <h3 className="mt-4 text-xl font-semibold">
              Sizes
            </h3>

            <div className="mt-2 flex flex-wrap gap-3">
              {cake.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-lg border px-4 py-2"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Price */}
            <p className="mt-2 text-3xl font-bold">
              Rs. {cake.price}
            </p>

            {/* Rating */}
            <h3 className="mt-2 text-xl font-semibold">
              Rating
            </h3>

            <p className="mt-1 text-lg">
              {cake.rating}/5
            </p>


            {/* Add to Cart */}

            <div className="mt-auto p-5 pt-0">
              <CartButton
                product={{
                  id: cake.id,
                  name: cake.name,
                  price: cake.price,
                  image: cake.image,
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}