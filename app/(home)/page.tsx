  import Hero from "./_components/Hero";
  import Cakes from "../cakes/cakesname";
  import Cookies from "../cookies/cookies";
  import Bread from "../bread/bread";
 import AboutPage from "../about/about";


export default function Home() {
    return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="cakes">
        <Cakes />
      </section>

      <section id="cookies">
        <Cookies />
      </section>

      <section id="bread">
        <Bread />
      </section>

      <section id="about">
        <AboutPage />
      </section>

   
    </>
  );
}