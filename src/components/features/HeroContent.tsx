import { Box, Typography, Button, Grid2 } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function HeroContent() {
  return (
    <>
      <Box>
        {/* title */}
        <Typography
          variant="h1"
          color="primary.main"
          textTransform="uppercase"
          fontSize={{ mobileP: 32, tablet: 44, desktopS: 54, DesktopM: 64 }}
          fontWeight="450"
          paddingTop={{
            mobileP: "40px",
            mobileL: "60px",
            tablet: "140px",
            desktopS: "80px",
            desktopL: "120px",
          }}
        >
          <Box
            width={"30vw"}
            sx={{ display: { mobileP: "none", tablet: "inline-block" } }}
          />
          Simplify your digital journey with tailored web traffic strategies and
          cutting-edge software designed to elevate your business performance.
        </Typography>

        {/* subtitle */}

        <Grid2
          container
          columns={2}
          paddingTop={{
            mobileP: "3vh",
            mobileL: "5vh",
            tablet: "30px",
            desktopS: "40px",
          }}
        >
          <Grid2 offset={{ tablet: 1 }}>
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={16}
              lineHeight={"125%"}
              fontWeight={600}
            >
              Optimize your online presence with precision, unlock exclusive
              tools to tackle business challenges, and drive growth with
              scalable, reliable solutions from Black Ocean.
            </Typography>
          </Grid2>
        </Grid2>

        {/* button */}

        <Grid2 container columns={2}>
          <Grid2
            offset={{ tablet: 1 }}
            position="absolute"
            bottom={{ mobileP: "20px", mobileL: "30px" }}
            left={{ mobileP: "16px", tablet: 0 }}
          >
            <Button
              variant="text"
              endIcon={<ArrowDownwardIcon />}
              sx={{
                paddingX: 0,
                textTransform: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            >
              Scroll to explore
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default HeroContent;
