import { Box, styled } from "@mui/material";

const PaddedSection = styled(Box)({
  paddingY: { mobileP: "60px", tablet: "80px", desktopS: "120px" },
  paddingX: {
    mobileP: "10px",
    mobileL: "16px",
    tablet: "20px",
    desktopS: "40px",
  },
}) as typeof Box;

export default PaddedSection;
