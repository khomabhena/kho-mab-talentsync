import Clients from "@/components/Clients";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Solutions from "@/components/Solutions";
import Subscribe from "@/components/Subscribe";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Nav />
      <Hero />
      <Clients />
      <Solutions />
      <Testimonials />
      <FAQs />
      <Subscribe />
      <Footer />
    </div>
  );
}
