import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#FFF9F6] min-h-screen w-full  pt-28 pb-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}
        <div className="h-full overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/categories/about1.jpg"
            alt="About Cake & Bake"
            width={700}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="pt-8">
          <span className="rounded-full bg-[#FCE8DE] px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#A65A2E]">
            About Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-[#2D221C]">
            Every Cake Tells
            <br />
            A Sweet Story
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At <strong>Cake & Bake</strong>, we believe every celebration
            deserves a beautiful and delicious cake. Our talented bakers use
            fresh ingredients, creative designs, and lots of love to create
            memorable cakes for birthdays, weddings, anniversaries, and every
            special occasion.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From classic flavors to custom creations, every cake is handcrafted
            with care to make your moments even sweeter.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Whether you're celebrating a birthday, wedding, baby shower, graduation,
            or any special occasion, our team is dedicated to creating cakes that
            perfectly match your vision and taste. Every order is baked fresh and
            decorated with attention to every detail.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our passion for baking, commitment to quality, and love for creativity
            have made Cake & Bake a trusted choice for families and cake lovers.
            We believe every slice should bring happiness and create memories that
            last long after the celebration ends.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Thank you for choosing Cake & Bake to be part of your special moments.
            We look forward to making your celebrations even sweeter with our
            handcrafted cakes.
          </p>
          <Link href="/cakes/categories">
            <Button className="rounded-xl bg-[#A65A2E] px-6 py-3 mt-2 text-white hover:bg-[#8C4724]">
              Explore Our Cakes
            </Button>
          </Link>
       
        </div>

      </div>
    </main>
  );
}