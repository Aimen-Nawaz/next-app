import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch px-4 sm:px-5 md:px-6 lg:px-8">

        {/* Left Image */}
        <div className="relative min-h-100 sm:min-h-125 md:min-h-150 lg:min-h-175 lg:h-full overflow-hidden rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl shadow-xl">
          <Image
            src="/images/categories/about123.jpg"
            alt="About Cake & Bake"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="pt-0 sm:pt-2 md:pt-4 lg:pt-8">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-primary sm:px-4 sm:py-2 sm:text-sm sm:tracking-[2px] md:px-5 md:text-sm md:tracking-[3px] lg:px-5 lg:py-2 lg:text-sm lg:tracking-[3px]">
            About Us
          </span>

          <h1 className="mt-4 text-3xl font-bold text-foreground sm:mt-5 sm:text-4xl md:mt-6 md:text-5xl lg:mt-6 lg:text-5xl">
            Every Cake Tells
            <br />
            A Sweet Story
          </h1>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8 lg:mt-6 lg:text-lg lg:leading-8">
            At <strong>Cake & Bake</strong>, we believe every celebration
            deserves a beautiful and delicious cake. Our talented bakers use
            fresh ingredients, creative designs, and lots of love to create
            memorable cakes for birthdays, weddings, anniversaries, and every
            special occasion.
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-5 lg:text-lg lg:leading-8">
            From classic flavors to custom creations, every cake is handcrafted
            with care to make your moments even sweeter.
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-5 lg:text-lg lg:leading-8">
            Whether you're celebrating a birthday, wedding, baby shower, graduation,
            or any special occasion, our team is dedicated to creating cakes that
            perfectly match your vision and taste. Every order is baked fresh and
            decorated with attention to every detail.
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-5 lg:text-lg lg:leading-8">
            Our passion for baking, commitment to quality, and love for creativity
            have made Cake & Bake a trusted choice for families and cake lovers.
            We believe every slice should bring happiness and create memories that
            last long after the celebration ends.
          </p>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-5 lg:text-lg lg:leading-8">
            Thank you for choosing Cake & Bake to be part of your special moments.
            We look forward to making your celebrations even sweeter with our
            handcrafted cakes.
          </p>

        </div>

      </div>
    </main>
  );
}