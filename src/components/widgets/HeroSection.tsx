import Navbar from "../features/Navbar";
import HeroContent from "../features/HeroContent";
import { Box, Divider } from "@mui/material";

function HeroSection() {
  return (
    <>

      {/* below navbar */}
      <Divider sx={{
        position: 'absolute',
        top: { mobileP: '82px', desktopS: '166px' },
        // left:'50%',
        width: '100%'
      }} />

      {/* right corner */}
      <Divider orientation="vertical" sx={{
        position: 'absolute',
        top: 0,
        height: '100vh',
        right: {
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px"
        }
      }} />

      {/* left corner on mobile, middle on desktop */}
      <Divider orientation="vertical" sx={{
        position: 'absolute',
        top: 0,
        height: '100vh',
        left: {
          mobileP: "10px",
          mobileL: "16px",
          tablet: "50%",
        }
      }} />

      {/* vertical desktop only*/}
      <Divider orientation="vertical" sx={{
        position: 'absolute',
        top: 0,
        height: '100vh',
        left: {
          tablet:'25%',
          desktopM:'30%'
        }
      }} />

      <Box
        height={"100vh"}
        width={"100vw"}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
        sx={{
          backgroundImage: 'url("./assets/images/hero-bg.png")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <HeroContent />



      </Box>
    </>
  );
}

export default HeroSection;
