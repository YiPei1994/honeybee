import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <header className="relative w-full h-auto">
        <Header />
      </header>

      <main className="relative">
        <Hero />
        <About />
      </main>
      <footer></footer>
    </>
  );
}
