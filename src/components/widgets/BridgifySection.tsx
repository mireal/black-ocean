import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import StyledButton from "../shared/StyledButton";
import SouthEastSharpIcon from "@mui/icons-material/SouthEastSharp";
import { useTranslation } from "react-i18next";

function BridgifySection() {
  const { t } = useTranslation();

  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundImage: 'url("./assets/images/bridgify-bg.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* section padding */}
      <Box
        id={"bridgify-section"}
        maxWidth="1368px"
        width="100%"
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
        position="relative"
      >
        {/* title */}
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
        >
          {t("bridgify.title")}
        </Typography>

        {/* content header */}
        <Grid2 container columns={6} paddingTop="20px">
          <Grid2 offset={{ desktopS: 2 }}>
            {/* accent line */}
            <Divider
              orientation="vertical"
              sx={{
                position: "absolute",
                display: { mobileP: "none", desktopS: "block" },
                top: 0,
                height: "100%",
              }}
            />

            <Typography
              variant="body1"
              color="primary.light"
              fontSize={{ mobileP: "20px", tablet: "24px" }}
              fontWeight="600"
              textTransform="uppercase"
            >
              {t("bridgify.description")}
            </Typography>
          </Grid2>
        </Grid2>

        {/* content paragraph */}
        <Grid2 container columns={4}>
          <Grid2 offset={{ mobileP: 0, tablet: 1, desktopS: 2 }} pt="30px">
            <Typography
              variant="body1"
              color="primary.contrastText"
              fontSize="18px"
              lineHeight="125%"
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                mr={{
                  mobileP: 0,
                  desktopS: "64px",
                  desktopM: "184px",
                  desktopL: "268px",
                }}
              >
                <Box>{t("bridgify.subtitle 1")}</Box>
                <Box mb="20px">{t("bridgify.subtitle 2")}</Box>

                <StyledButton endIcon={<SouthEastSharpIcon />}>
                  {t("bridgify.button")}
                </StyledButton>
              </Box>
            </Typography>
          </Grid2>
        </Grid2>

        {/* accent line left border*/}
        <Divider
          orientation="vertical"
          sx={{
            position: "absolute",
            display: { mobileP: "none", desktopS: "block" },
            top: 0,
            left: {
              mobileP: "10px",
              mobileL: "16px",
              tablet: "20px",
              desktopS: "40px",
            },
            height: "100%",
          }}
        />
      </Box>
    </Stack>
  );
}

export default BridgifySection;
