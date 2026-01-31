import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-cream">
      <Navbar />

      <div className="flex-1 flex flex-col">
        <Hero />
        <Featured />
        <Testimonials />
      </div>

      <WhatsAppFloating />
      <Footer />
    </main>
  );
}
