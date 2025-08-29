import { Aboutus } from "@/components/Aboutus";
import { Accordian } from "@/components/Accordian";
import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PdfoSection } from "@/components/PdfoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MenuBar />
      <HeroSection />
      <PdfoSection />
      <Aboutus />
      <Accordian />
      <Footer />
    </div>
  );
}
