import { Box, Divider, Stack, Typography } from "@mui/material";

export default function FooterContactLinks() {
  return (
    <>
      <Box>
        <Divider />
        <Typography
          variant="h5"
          color="primary.contrastText"
          fontSize={{ mobileP: '20px', mobileL: "24px" }}
          fontWeight="600"
          textTransform="uppercase"
        >
          <Stack
            direction={{ mobileP: "column", tablet: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box
              flex={1}
              textAlign={{ mobileP: "center", tablet: "left" }}
              pt="20px"
            >
              {" "}
              Michelská 966/74, 141 00 Prague 4 - Michle
            </Box>

            <Divider />

            <Stack
              flex={1}
              alignItems={{ mobileP: "center", tablet: "flex-start" }}
              spacing="20px"
              pt="20px"
            >
              <Box pl={{ mobileP: 0, tablet: "20px" }}>
                +420 773 635 962
              </Box>
              <Box pl={{ mobileP: 0, tablet: "20px" }}>
                info@oceanperform.com
              </Box>
            </Stack>
          </Stack>
        </Typography>

        <Divider
          sx={{
            display: { tablet: "none" },
            mt: "20px",
          }}
        />
      </Box>
    </>
  );
}
