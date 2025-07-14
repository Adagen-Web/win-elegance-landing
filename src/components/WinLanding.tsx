import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { AmenitiesSection } from "./sections/AmenitiesSection";
import { ApartmentsSection } from "./sections/ApartmentsSection";
import { LocationSection } from "./sections/LocationSection";
import { ContactSection } from "./sections/ContactSection";
import { Navigation } from "./Navigation";

const WinLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <ApartmentsSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default WinLanding;