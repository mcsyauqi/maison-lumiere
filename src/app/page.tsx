import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Residences from "@/components/Residences";
import Lifestyle from "@/components/Lifestyle";
import Neighborhood from "@/components/Neighborhood";
import Materials from "@/components/Materials";
import Testimonial from "@/components/Testimonial";
import PrivateViewing from "@/components/PrivateViewing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Residences />
      <Lifestyle />
      <Neighborhood />
      <Materials />
      <Testimonial />
      <PrivateViewing />
      <Footer />
    </main>
  );
}
