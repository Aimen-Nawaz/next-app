import {
  Search,
  Palette,
  ShoppingCart,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Our Collection",
    description:
      "Explore our delicious cakes, cookies, breads, and desserts.",
  },
  {
    icon: Palette,
    title: "Choose & Customize",
    description:
      "Select your favorite flavor, size, design, and add special requests.",
  },
  {
    icon: ShoppingCart,
    title: "Place Your Order",
    description:
      "Order online or contact us for personalized cake designs.",
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description:
      "We bake fresh and deliver your order safely to your doorstep.",
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary">
            How to Order
          </h2>

          <p className="mt-4 text-muted-foreground">
            Ordering your favorite treats is quick and easy.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border bg-[#FFF9F6] p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full ">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold ">
                  {step.title}
                </h3>

                <p className="mt-3">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}