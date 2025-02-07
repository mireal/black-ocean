import { Box, Typography, Button, Grid2 } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslation } from "react-i18next";

function HeroContent() {
  const { t } = useTranslation();

  return (
    <>
      <Box width='100%' height='100%'>

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
            width={{
              tablet: "199px",
              desktopS: "315px",
              desktopM: '460px',
              desktopL: '451px'
            }}
            sx={{ display: { mobileP: "none", tablet: "inline-block" } }}
          />
          {t("hero.title")}
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
              maxWidth={{ mobileP: '300px', mobileL: '365px', desktopS: '393px' }}
            >
              {t("hero.subtitle")}
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
                padding: 0,
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
              {t("hero.scroll")}
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default HeroContent;
