"use client";

import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";
import ItemNotFound from "@/components/common/ItemNotFound";


type CookiesProps = {
  home?: boolean
}
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  excerpt: string;
  description: string;
  rating: number;
  category: string;
  flavours: string[];
  sizes: string[];
};

export default function Cookies({ home = false }: CookiesProps) {
  const [cookies, setCookies] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCookies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/products?category=cookie"
        );

        setCookies(response.data.data);
      } catch (error) {
        console.error("Error fetching cookies:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchCookies();
  }, []);


  return (
    <section className="bg-background min-h-screen w-full  py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold  text-foreground">
          Our Cookies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground ">
          Freshly baked cookies made with premium ingredients and lots of love.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : cookies.length > 0 ? (
            (home ? cookies.slice(0, 4) : cookies).map((cookie) => (
              <ProductCard
                key={cookie.id}
                product={cookie}
              />
            ))
           ) :  (
                <ItemNotFound
                  title="No Cookie Found"
                  description="We don't have any cakes available right now. Please check back soon for something delicious!"
                />
              )}
        </div>
        {home && (
          <div className="mt-12 flex justify-center">
            <Link href="/cookies">
              <Button size="lg" className="rounded-full px-8">
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}

      </div>
    </section >
  );
}