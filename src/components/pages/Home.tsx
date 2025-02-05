import AboutSection from "../widgets/AboutSection";
import BridgifySection from "../widgets/BridgifySection";
import ContactSection from "../widgets/ContactSection";
import FooterSection from "../widgets/FooterSection";
import HeroSection from "../widgets/HeroSection";
import NumbersSection from "../widgets/NumbersSection";
import OurServices from "../widgets/OurServicesSection";
import StepsSection from "../widgets/StepsSection";
import TestimonialsSection from "../widgets/TestimonialsSection";
import WhySection from "../widgets/WhySection";

function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <AboutSection />
      <BridgifySection />
      <WhySection />
      <StepsSection />
      <NumbersSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default Home;
