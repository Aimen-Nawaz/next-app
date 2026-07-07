import { cakes } from "@/lib/data/cakes";
import CakeCard from "@/app/(home)/_components/CakeCard";

export default function Cakes() {
  return (
    <main className="bg-[#FFF9F6] min-h-screen w-full  pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#FCE8DE] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#A65A2E]">
            Our Collection
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#2D221C]">
            Explore Our Cakes
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Browse our handcrafted collection of delicious cakes, baked fresh
            with premium ingredients for birthdays, weddings, anniversaries,
            and every special celebration.
          </p>
        </div>

        {/* Cakes Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
        

      </div>
    </main>
  );
}