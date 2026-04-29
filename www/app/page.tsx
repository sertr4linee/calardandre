import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Atelier } from "./_components/Atelier";
import { Metiers } from "./_components/Metiers";
import { Galerie } from "./_components/Galerie";
import { Zone } from "./_components/Zone";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <>
      <span className="grain" aria-hidden />
      <Header />
      <main className="relative">
        <Hero />
        <Atelier />
        <Metiers />
        <Galerie />
        <Zone />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
