import { Box, Stack, Typography } from "@mui/material";
import ContactForm from "../features/ContactForm";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <Stack alignItems="center" sx={{ backgroundColor: "#010418" }}>
      <Stack
        maxWidth="1440px"
        width="100%"
        id={"contact-form"}
        direction={{ mobileP: "column", desktopS: "row" }}
        paddingTop={{ mobileP: "40px", tablet: "60px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopM: "40px",
        }}
        sx={{ backgroundColor: "#010418" }}
      >
        <Box flex={{ mobileP: "none", desktopS: 1 }} mb="20px">
          <Typography
            variant="h2"
            color="primary.main"
            fontSize={{
              mobileP: "64px",
              tablet: "84px",
              desktopS: "104px",
              desktopM: "114px",
            }}
            fontWeight="600"
            lineHeight="80%"
            letterSpacing="-4px"
            textTransform="uppercase"
          >
            {t("form.title")}
          </Typography>
        </Box>
        <Stack
          flex={{ mobileP: "none", desktopS: 1 }}
          spacing="15px"
          useFlexGap
        >
          <ContactForm />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactSection;
