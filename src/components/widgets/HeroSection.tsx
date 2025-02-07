import Navbar from "../features/Navbar";
import HeroContent from "../features/HeroContent";
import { Box, Divider } from "@mui/material";

function HeroSection() {
  return (
    <>
      <Box
        height={"100vh"}
        maxHeight="1000px"
        width={"100vw"}
        display="flex"
        flexDirection="column"
        alignItems="center"
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
        {/* horizontal */}
        <Divider
          sx={{
            position: "absolute",
            top: { mobileP: "82px", desktopS: "146px" },
            width: "100%",
          }}
        />

        <Box maxWidth="1368px" position="relative" width="100%" height="100%">
          {/* right corner */}
          <Divider
            orientation="vertical"
            sx={{
              position: "absolute",
              top: 0,
              height: "100vh",
              maxHeight: "1000px",
              right: 0,
            }}
          />

          {/* left corner on mobile, middle on desktop */}
          <Divider
            orientation="vertical"
            sx={{
              position: "absolute",
              top: 0,
              height: "100vh",
              maxHeight: "1000px",
              left: {
                mobileP: 0,
                tablet: "50%",
              },
            }}
          />

          {/* vertical first, desktop only*/}
          <Divider
            orientation="vertical"
            sx={{
              position: "absolute",
              top: 0,
              height: "100vh",
              maxHeight: "1000px",
              left: {
                mobileP: "-100%",
                tablet: "199px",
                desktopS: "315px",
                desktopM: "460px",
                desktopL: "451px",
              },
            }}
          />

          <Navbar />
          <HeroContent />
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
