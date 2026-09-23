import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Journey />
        <Toolkit />
      </main>
      <Contact />
    </div>
  );
}
