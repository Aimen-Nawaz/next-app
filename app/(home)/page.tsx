  import Hero from "./_components/Hero";
  import Cakes from "../cakes/page";
  import Cookies from "../cookies/page";
  import Bread from "../bread/bread";
 import AboutPage from "../about/about";
import HowToOrder from "../how-to-order/page";
import ContactPage from "../contact/page";


export default function Home() {
    return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="cakes">
    <Cakes home />
      </section>

      <section id="cookies">
        <Cookies home />
      </section>

      <section id="bread">
        <Bread  home />
      </section>

      <section id="about">
        <AboutPage />
      </section>
  
  <section id="contact">
        <HowToOrder/>
         <ContactPage/>
      </section>
   
    </>
  );
}