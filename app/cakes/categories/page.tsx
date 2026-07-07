import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "./why-choose-us";


const categories = [
  {
    id: 1,
    title: "Birthday Cakes",
    description: "Make every birthday extra special with beautifully crafted cakes.",
    image: "/images/categories/birthday.jpg",
    href: "/cake?category=birthday",
  },
  {
    id: 2,
    title: "Wedding Cakes",
    description: "Elegant multi-tier cakes designed for unforgettable weddings.",
    image: "/images/categories/weddinga.jpg",
    href: "/cake?category=wedding",
  },
  {
    id: 3,
    title: "Customized Cakes",
    description: "Personalized cakes created exactly the way you imagine.",
    image: "/images/categories/custom.jpg",
    href: "/cake?category=custom",
  },
  {
    id: 4,
    title: "Cupcakes",
    description: "Soft, delicious cupcakes perfect for every celebration.",
    image: "/images/categories/cupcake.jpg",
    href: "/cake?category=cupcake",
  },
];

export default function CakeCategories() {
  return (
    <main className="min-h-screen bg-[#FFF9F6] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#2D221C]">
            Explore Our Cake Collection
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover handcrafted cakes for birthdays, weddings, anniversaries,
            and every special occasion.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#2D221C]">
                  {category.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

                <Link
                  href={category.href}
                  className="mt-6 inline-block rounded-xl bg-[#A65A2E] px-6 py-3 text-white transition hover:bg-[#8C4724]"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
  <WhyChooseUs />
</div>
    </main>
  );
}