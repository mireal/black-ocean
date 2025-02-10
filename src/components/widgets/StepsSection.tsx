import { Box, Grid2, Stack, Typography } from "@mui/material";
import StepCard from "../entities/StepCard";
import { useTranslation } from "react-i18next";

function StepsSection() {
  const { t } = useTranslation();

  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundImage: 'url("./assets/images/hero-bg.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        maxWidth="1440px"
        width="100%"
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
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
          textTransform="uppercase"
          paddingBottom={{ mobileP: "15px", mobileL: "20px", desktopS: "0" }}
        >
          {t("steps.title")}
        </Typography>

        <Grid2 container columns={{ mobileP: 1, tablet: 3 }} rowGap="40px">
          {/* big paragraph */}
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={{ mobileP: 1, tablet: 3, desktopS: 2 }}
          >
            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: "20px", tablet: "24px" }}
              fontWeight="600"
              textTransform="uppercase"
            >
              {t("steps.subtitle")}
            </Typography>
          </Grid2>
          <Grid2 size={1}>
            <StepCard keyName="first" />
          </Grid2>

          <Grid2 size={1}>
            <StepCard keyName="second" />
          </Grid2>

          <Grid2 size={1}>
            <StepCard keyName="third" />
          </Grid2>
        </Grid2>

        {/* image container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobileP: "column", mobileL: "row" },
            justifyContent: { mobileP: "flex-start", mobileL: "space-between" },
            gap: "10px",
            mt: { mobileP: "60px", tablet: "80px" },
          }}
        >
          {/* small image */}
          <Box
            sx={{
              width: { mobileP: "50%", mobileL: "35%", tablet: "25%" },
            }}
          >
            <img
              src="./assets/images/steps-small.png"
              style={{ width: "100%" }}
            />
          </Box>

          {/* big image */}
          <Box
            sx={{
              width: { mobileP: "100%", mobileL: "50%" },
            }}
          >
            <img
              src="./assets/images/steps-big.png"
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default StepsSection;
