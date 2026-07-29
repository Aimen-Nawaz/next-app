import Hero from "./_components/Hero";
import ProductsSection from "./_components/ProductSection";
import AboutPage from "./_components/About";
import HowToOrder from "../how-to-order/page";
import ContactPage from "../contact/page"
import SectionNav from "@/components/common/SectionNav";



export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />

      </section>
       <div className="sticky top-20 sm:top-20 md:top-20 lg:top-16 z-40 w-full border-b bg-background shadow-sm">
        <SectionNav/>
       </div>


      {/* ================= Cakes ================= */}
      <section id="cakes">
        <ProductsSection
          category="cake"
          title="Explore Our Cakes"
          description="Browse our handcrafted collection of delicious cakes, baked fresh with premium ingredients for every special celebration."

        />
      </section>

      {/* ================= Cookies ================= */}
      <section id="cookies">
        <ProductsSection
          category="cookie"
          title="Explore Our Cookies"
          description="Enjoy our freshly baked cookies, made with premium ingredients and delicious flavors."
        />
      </section>

      {/* ================= Bread ================= */}
      <section id="bread">
        <ProductsSection
          category="bread"
          title="Explore Our Breads"
          description="Discover our fresh and delicious breads, baked daily with care and quality ingredients."
        />
      </section>

      <section id="about">
        <AboutPage />
      </section>


      <section id="contact">
        <HowToOrder />
        <ContactPage />
      </section>

    </>
  );
}