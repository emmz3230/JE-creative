import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutApproach from "@/components/AboutApproach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Design Studio for Ambitious Brands",
  description:
    "The JE Creative is a senior-led digital design studio for UI/UX, web development, brand identity, design systems, 3D web experiences, and technical writing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Digital Design Studio for Ambitious Brands",
    description:
      "Senior-led design and development for ambitious digital brands.",
    url: "/",
  },
};

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
