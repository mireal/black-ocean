import { Box, Grid2, Stack, Typography } from "@mui/material";
import StyledButtonDark from "../shared/StyledButtonDark";
import { useTranslation } from "react-i18next";
import WhyBlock from "../features/WhyBlock";

function WhySection() {
  const { t } = useTranslation();
  const keys = ["first", "second", "third", "fourth"];

  return (
    <Stack alignItems="center">
      {/* section padding */}
      <Box
        id={"why-section"}
        maxWidth="1368px"
        width="100%"
        paddingY={{ mobileP: "60px", tablet: "80px", desktopS: "120px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopS: "40px",
        }}
      >
        {/* header */}
        <Box mb="20px">
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
            {t("why.title")}
          </Typography>
        </Box>

        {/* content */}
        <Grid2 container columns={3}>
          <Grid2
            offset={{ mobileP: 0, desktopS: 1 }}
            size={{ mobileP: 3, desktopS: 2 }}
          >
            <Box mb="40px">
              {/* big paragraph */}
              <Typography
                variant="body1"
                color="primary.light"
                fontSize={{ mobileP: "20px", tablet: "24px" }}
                fontWeight="600"
                textTransform="uppercase"
              >
                {t("why.subtitle")}
              </Typography>
            </Box>

            <Stack gap="20px">
              {keys.map((key, index) => (
                <WhyBlock key={key} keyName={key} rectangles={index + 1} />
              ))}

              <StyledButtonDark sx={{ mt: "30px" }} href="#contact-form">
                {t("why.button")}
              </StyledButtonDark>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </Stack>
  );
}

export default WhySection;
