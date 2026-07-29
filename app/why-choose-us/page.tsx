import {
  CakeSlice,
  Truck,
  Gift,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CakeSlice,
    title: "Freshly Baked",
    description:
      "Every cake is baked fresh daily using premium ingredients.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and safe doorstep delivery for every celebration.",
  },
  {
    icon: Gift,
    title: "Custom Designs",
    description:
      "Personalized cakes designed exactly how you imagine them.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We never compromise on taste, freshness, or quality.",
  },
];

export default function whyChooseUs() {
  return (
    <section className="bg-background min-h-screen w-full    py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center text-foreground">
                     
          <h2 className="mt-6 text-4xl font-bold t md:text-5xl  text-primary">
            Crafted With Love,
            <br />
            Baked To Perfection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg  text-muted-foreground ">
            Every cake is prepared with passion, premium ingredients,
            and attention to every little detail.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8  rounded-3xl shadow-md sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-4xl bg-background p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold  text-muted-foreground">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}