import { Box, Grid2, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <Stack alignItems='center'>
      <Box
        id={"about-section"}
        maxWidth="1368px"
        width='100%'
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
          {t("about.title")}
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
              {t("about.description")}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Stack>
  );
}

export default AboutSection;
