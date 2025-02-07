import { Box, Divider, Stack, Typography } from "@mui/material";
import ServiceContent from "../features/ServiceContent";
import StyledButton from "../shared/StyledButton";
import { useTranslation } from "react-i18next";

function OurServices() {
  const { t } = useTranslation();


  const keys = [
    "iosApps",
    "androidApps",
    "macOS",
    "crm",
    "analysis",
    "webTraffic",
  ]

  return (
    <Stack alignItems='center'>
      <Box
        id={"services-section"}
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
        <Typography
          variant="h2"
          color="primary.main"
          fontSize={{
            mobileP: "32px",
            tablet: "44px",
            desktopS: "54px",
            desktopM: "64px",
          }}
          mb={{ mobileP: "20px", tablet: "30px" }}
        >
          {t("services.title")}
        </Typography>
        <Divider />

        <ServiceContent keys={keys} />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          gap="20px"
        >
          <Box height="100px" display="flex" justifyContent="center">
            <Divider orientation="vertical" sx={{ alignSelf: "center" }} />
          </Box>
          <StyledButton
            variant="contained"
            href="#contact-form"
            sx={{
              paddingX: { mobileP: "72px", desktopS: "120px" },
              alignSelf: "center",
              textWrap: "nowrap",
            }}
          >
            {t("services.button")}
          </StyledButton>
        </Box>
      </Box>
    </Stack>
  );
}

export default OurServices;
