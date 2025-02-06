import { Box } from "@mui/material";
import AboutSection from "../components/widgets/AboutSection";
import BridgifySection from "../components/widgets/BridgifySection";
import ContactSection from "../components/widgets/ContactSection";
import FooterSection from "../components/widgets/FooterSection";
import HeroSection from "../components/widgets/HeroSection";
import NumbersSection from "../components/widgets/NumbersSection";
import OurServices from "../components/widgets/OurServicesSection";
import StepsSection from "../components/widgets/StepsSection";
import TestimonialsSection from "../components/widgets/TestimonialsSection";
import WhySection from "../components/widgets/WhySection";

function Home() {
  return (
    <>
      <Box overflow='hidden'>
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
      </Box>
    </>
  );
}

export default Home;
