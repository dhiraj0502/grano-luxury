import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignatureDishes from "@/components/SignatureDishes";
import StorySection from "@/components/StorySection";
import ImageBreak from "@/components/ImageBreak";
import WineExperience from "@/components/WineExperience";
import MichelinRecognition from "@/components/MichelinRecognition";
import Testimonials from "@/components/Testimonials";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <SignatureDishes />

      <StorySection />

      <ImageBreak />

      <WineExperience />

      <MichelinRecognition />

      <Testimonials />

      <ReservationCTA />

      <Footer />
    </main>
  );
}