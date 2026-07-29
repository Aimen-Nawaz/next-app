
import type { ProductsSectionProps } from "@/types/product";
import ProductList from "../productList";



export default function ProductsSection({
  category,
  title,
  description,
  home = false,
}: ProductsSectionProps) {


  return (
    <section className="w-full bg-background py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16">

          <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[2px] sm:px-4 sm:py-2 sm:text-sm sm:tracking-[2px] md:px-5 md:text-sm md:tracking-[3px] lg:px-5 lg:py-2 lg:text-sm lg:tracking-[3px]">
            Our Collection
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:mt-5 sm:text-4xl md:mt-6 md:text-5xl lg:mt-6 lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg lg:mt-5 lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">

          <ProductList
            category={category}
            title={title}
          />

        </div>

      </div>
    </section>
  );
}