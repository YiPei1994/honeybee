import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
