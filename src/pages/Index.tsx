import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SubscribeBar from "@/components/SubscribeBar";
import AboutSection from "@/components/AboutSection";
import ChallengesSection from "@/components/ChallengesSection";
import PictureThisSection from "@/components/PictureThisSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SubscribeBar />
        <AboutSection />
        <ChallengesSection />
        <PictureThisSection />
        <ServicesSection />
        <TestimonialSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
