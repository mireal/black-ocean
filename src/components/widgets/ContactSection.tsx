import { Box, Stack, Typography } from "@mui/material";
import ContactForm from "../features/ContactForm";

function ContactSection() {
  return (
    <>
      <Stack
        id={"contact-form"}
        direction={{ mobileP: "column", desktopS: "row" }}
        paddingTop={{ mobileP: "40px", tablet: "60px" }}
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopM: "40px",
        }}
        sx={{ backgroundColor: "black" }}
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
            fontWeight="bold"
            lineHeight="80%"
            letterSpacing="-4px"
            textTransform="uppercase"
          >
            DROP US A LINE
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
    </>
  );
}

export default ContactSection;
