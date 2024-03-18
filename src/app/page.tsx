import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Learns from "@/components/learns/Learns";
import Products from "@/components/products/Products";
import Reviews from "@/components/products/Reviews";

export default function Home() {
  return (
    <>
      <header className="relative w-full h-auto">
        <Header />
      </header>
      <main className="relative">
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Gallery />
        <Learns />
      </main>
      <Footer />{" "}
    </>
  );
}
