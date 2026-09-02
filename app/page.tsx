import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutApproach from "@/components/AboutApproach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <AboutApproach />
      <Contact />
      <Footer />
    </main>
  );
}
