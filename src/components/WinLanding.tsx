import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { AmenitiesSection } from "./sections/AmenitiesSection";
import { ApartmentsSection } from "./sections/ApartmentsSection";
import { LocationSection } from "./sections/LocationSection";
import { ContactSection } from "./sections/ContactSection";
import { Navigation } from "./Navigation";
import { PlantasSection } from "./sections/PlantasSection";
import { WhatsAppButton } from "./sections/WhatsAppButton";
import Footer from "./Footer";
import GalleryImagesSection from "./sections/GalleryImagesSection";
import { TorresSection } from "./sections/TorresSection";

const WinLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <GalleryImagesSection />
      <ApartmentsSection />
      <PlantasSection />
      <TorresSection />
      <LocationSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default WinLanding;