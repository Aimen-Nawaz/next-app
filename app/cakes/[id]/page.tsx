import Image from "next/image";
import { cakes } from "@/lib/data/cakes";
import CartButton from "@/components/common/CartButton";

export default async function CakeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cake = cakes.find((item) => item.id === Number(id));

  if (!cake) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Cake Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F6] py-20">
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

            <p className="text-sm font-semibold uppercase tracking-widest text-[#A65A2E]">
              {cake.category}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#2D221C]">
              {cake.name}
            </h1>

            <p className="mt-5 text-gray-600">
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
            <div className="mt-3">
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