import { Box, Grid2, Typography } from "@mui/material";

function AboutSection() {
  return (
    <>
      <Box
        id={"about-section"}
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
        {/* header */}
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{
            mobileP: "32px",
            tablet: "44px",
            desktopS: "54px",
            desktopM: "64px",
          }}
          fontWeight="600"
          textAlign="center"
          textTransform="uppercase"
          paddingBottom={{ mobileP: "15px", mobileL: "20px", desktopS: "0" }}
        >
          Our aim - to supply best service in providing web traffic which will
          grow your sales results.
        </Typography>

        {/* content */}
        <Grid2
          container
          columns={{ mobileP: 1, tablet: 2, desktopS: 3 }}
          direction={{ mobileP: "column", tablet: "row" }}
          spacing={{ mobileP: "15px", tablet: "20px", desktopM: "60px" }}
        >
          {/* image */}
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={1}
            height={{
              mobileP: "250px",
              tablet: "417px",
              desktopS: "542px",
              desktopM: "570px",
            }}
            bottom={{ desktopS: "50px", desktopM: "60px" }}
            sx={{
              position: "relative",
              "& img": {
                position: "relative",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                zIndex: "-1",
              },
            }}
          >
            <img src="./assets/images/about.png"></img>
          </Grid2>

          {/* text */}
          <Grid2 size={1} alignSelf="center">
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: "20px", tablet: "24px" }}
              fontWeight="600"
              textTransform="uppercase"
              textAlign={{ mobileP: "center", tablet: "left" }}
            >
              Besides that, we supply software for your business which decide
              your tasks with 100% accuracy. Mission of Black Ocean is to
              guarantee the highest level of quality on the market. Team of
              Black Ocean always provide technical support and service for
              clients.
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default AboutSection;
