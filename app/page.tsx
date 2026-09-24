import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

// Re-render the static page once a day on Vercel (ISR), so the server HTML
// (what crawlers and link previews read) keeps the experience figure current.
export const revalidate = 86400;

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
