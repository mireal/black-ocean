import { Box, Stack, Typography } from "@mui/material";
import TestimonialsContent from "../features/TestimonialsContent";
import { useTranslation } from "react-i18next";

function TestimonialsSection() {
  const { t } = useTranslation();
  const keys = ["first", "second", "third", "fourth", "fifth", "sixth"];

  return (
    <Stack alignItems="center">
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
          mb="40px"
        >
          {t("testimonials.title")}
        </Typography>

        <TestimonialsContent keys={keys} />
      </Box>
    </Stack>
  );
}

export default TestimonialsSection;
