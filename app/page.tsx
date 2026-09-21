import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ServiceArea from "@/components/ServiceArea/ServiceArea";
import Service from "@/components/Service/Service";
import Calculator from "@/components/Calculator/Calculator";
import WhyMe from "@/components/WhyMe/WhyMe";
import Reviews from "@/components/Reviews/Rewiews";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServiceArea />
      <Service />
      <Calculator />
      <WhyMe />
      <Reviews />
      <Footer />
    </main>
  );
}
