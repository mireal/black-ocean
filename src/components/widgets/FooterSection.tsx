import { Box, Stack } from "@mui/material";
import FooterContactLinks from "../features/FooterContactLinks";
import FooterInfoLinks from "../features/FooterInfoLinks";

function FooterSection() {
  return (
    <Stack
      alignItems='center'
      bgcolor="black"
    >
      <Box
        maxWidth="1368px"
        width='100%'
        paddingX={{
          mobileP: "10px",
          mobileL: "16px",
          tablet: "20px",
          desktopM: "40px",
        }}
        paddingY={{ mobileP: "40px", tablet: "60px" }}
        display="flex"
        flexDirection="column"
        gap="60px"
      >
        <FooterContactLinks />
        <FooterInfoLinks />
      </Box>
    </Stack>
  );
}

export default FooterSection;
