"use client";
import { useEffect, useState } from "react"

import { boolean } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Loading from "../loading";
import ProductCard from "../../components/common/ProductCard";

type BreadProps = {
  home?: boolean
}
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

export default function Bread({ home = false }: BreadProps) {

  const [breads, setBreads] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBreads = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/products?category=bread"
        );

        setBreads(response.data.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBreads();
  }, []);




  return (
    <section className="bg-background text-foreground min-h-screen w-full py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-foreground">
          Fresh Bread
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Soft, fresh, and baked daily with premium ingredients.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {breads.length !== 0 ? (home ? breads.slice(0, 4) : breads).map((bread) => (
            <ProductCard
              key={bread.id}
              product={bread}
            />
          )) : (
            <Loading />
          )}
        </div>
        {home && (
          <div className="mt-12 flex justify-center">
            <Link href="/bread">
              <Button size="lg" className="rounded-full px-8">
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}