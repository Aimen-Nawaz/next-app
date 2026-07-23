import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full  pt-28 pb-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-stretch px-6">

        {/* Left Image */}
        <div className="relative min-h-175 lg:h-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/categories/about123.jpg"
            alt="About Cake & Bake"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="pt-8">
          <span className="rounded-full bg-muted px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-primary">
            About Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-foreground">
            Every Cake Tells
            <br />
            A Sweet Story
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At <strong>Cake & Bake</strong>, we believe every celebration
            deserves a beautiful and delicious cake. Our talented bakers use
            fresh ingredients, creative designs, and lots of love to create
            memorable cakes for birthdays, weddings, anniversaries, and every
            special occasion.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From classic flavors to custom creations, every cake is handcrafted
            with care to make your moments even sweeter.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you're celebrating a birthday, wedding, baby shower, graduation,
            or any special occasion, our team is dedicated to creating cakes that
            perfectly match your vision and taste. Every order is baked fresh and
            decorated with attention to every detail.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Our passion for baking, commitment to quality, and love for creativity
            have made Cake & Bake a trusted choice for families and cake lovers.
            We believe every slice should bring happiness and create memories that
            last long after the celebration ends.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Thank you for choosing Cake & Bake to be part of your special moments.
            We look forward to making your celebrations even sweeter with our
            handcrafted cakes.
          </p>
          <Link href="/cakes/categories">
            <Button size="lg" className="rounded-full px-8">
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

        </div>

      </div>
    </main>
  );
}