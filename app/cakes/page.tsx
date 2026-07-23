"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";
import ItemNotFound from "@/components/common/ItemNotFound";
import ProductCard from "@/components/common/ProductCard";


type CakesProps = {
  home?: boolean;
};
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

export default function Cakes({ home = false }: CakesProps) {

  const [cakes, setCakes] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "/products?category=cake"
        );

        setCakes(response.data.data);

      } catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchCakes();
  }, []);

  return (
    <main className="bg-background min-h-screen w-full  pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg- px-5 py-2 text-sm font-semibold uppercase tracking-[3px] t">
            Our Collection
          </span>

          <h1 className="mt-6 text-5xl font-bold  ">
            Explore Our Cakes
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Browse our handcrafted collection of delicious cakes, baked fresh
            with premium ingredients for birthdays, weddings, anniversaries,
            and every special celebration.
          </p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            Array.from({ length: 4}).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : cakes.length > 0 ? (
            (home ? cakes.slice(0, 4) : cakes).map((cake) => (
              <ProductCard
                key={cake.id}
                product={cake}
              />
            ))
          ) : (
            <ItemNotFound
              title="No Cakes Found"
              description="We don't have any cakes available right now. Please check back soon for something delicious!"
            />
          )}
        </div>

        {home && (
          <div className="mt-12 flex justify-center">
            <Link href="/cakes">
              <Button size="lg" className="rounded-full px-8">
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )
        }

      </div >
    </main >
  );
}