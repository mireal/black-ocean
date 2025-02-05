import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const linkStyle = {
  margin: 0,
  color: "inherit",
  "&:hover": {
    color: "white",
  },
};

export default function FooterInfoLinks() {
  return (
    <>
      <Box>
        <Typography
          variant="h5"
          color="primary.dark"
          fontSize="16px"
          fontWeight="bold"
          noWrap
        >
          <Stack
            direction={{ mobileP: "column-reverse", desktopS: "row" }}
            justifyContent="flex-start"
            spacing="20px"
          >
            <Box flex="grow"> Black Ocean s. r. o. All rights reserved. </Box>

            <Stack
              direction={{ mobileP: "column", tablet: "row" }}
              justifyContent="space-between"
              flex="auto"
            >
              <Box display={{ mobileP: "none", desktopS: "block" }} />

              <Link
                component={RouterLink}
                underline="none"
                to="/policies/cookie"
                sx={linkStyle}
              >
                {" "}
                Cookie Policy{" "}
              </Link>
              <Link
                component={RouterLink}
                underline="none"
                to="/policies/privacy"
                sx={linkStyle}
              >
                {" "}
                Privacy Policy{" "}
              </Link>
              <Link
                component={RouterLink}
                underline="none"
                to="/policies/risk-management"
                sx={linkStyle}
              >
                {" "}
                Risk Management Policy{" "}
              </Link>
              <Link
                component={RouterLink}
                underline="none"
                to="/terms-and-conditions"
                sx={linkStyle}
              >
                {" "}
                Terms and Conditions{" "}
              </Link>
            </Stack>
          </Stack>
        </Typography>
      </Box>
    </>
  );
}
