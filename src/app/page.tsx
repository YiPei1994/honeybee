import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <header className="max-w-screen-xl m-auto">
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
