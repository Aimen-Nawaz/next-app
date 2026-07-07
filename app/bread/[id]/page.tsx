import Image from "next/image";
import { breads } from "@/lib/data/bread";
import CartButton from "@/components/common/CartButton";

export default async function BreadDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const bread = breads.find((item) => item.id === Number(id));

  if (!bread) {
    return (
      <h1 className="text-center text-3xl font-bold">
        Bread Not Found
      </h1>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F6] py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={bread.image}
              alt={bread.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#A65A2E]">
              {bread.category}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#2D221C]">
              {bread.name}
            </h1>

            <p className="mt-5 text-gray-600">
              {bread.description}
            </p>

            {/* Flavours */}
            <h3 className="mt-6 text-xl font-semibold">
              Flavours
            </h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {bread.flavours.map((flavour) => (
                <span
                  key={flavour}
                  className="rounded-full bg-[#FCE8DE] px-4 py-2"
                >
                  {flavour}
                </span>
              ))}
            </div>

            {/* Sizes */}
            <h3 className="mt-6 text-xl font-semibold">
              Sizes
            </h3>

            <div className="mt-3 flex flex-wrap gap-3">
              {bread.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-lg border px-4 py-2"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Price */}
            <p className="mt-4 text-3xl font-bold">
              Rs. {bread.price}
            </p>

            {/* Rating */}
            <h3 className="mt-4 text-xl font-semibold">
              Rating
            </h3>

            <p className="mt-1 text-lg">
              {bread.rating}/5
            </p>

        

            {/* Cart Button */}
            <div className="mt-8">
              <CartButton
                product={{
                  id: bread.id,
                  name: bread.name,
                  price: bread.price,
                  image: bread.image,
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}