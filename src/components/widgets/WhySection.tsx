import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import AdvantageRectangle from "../entities/AdvantageRectangle";
import StyledButtonDark from "../shared/StyledButtonDark";

function WhySection() {
  return (
    <>
      {/* section padding */}
      <Box
        id={"why-section"}
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
            Why choose Black Ocean?
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
                Expert-driven solutions, proven industry leadership, and
                dedicated support empower your business to achieve lasting
                success and measurable results.
              </Typography>
            </Box>

            <Stack>
              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={1} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      Technical Divercity
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      We understand all areas of software development at a high
                      level. Understanding the structure of the sphere enables
                      us to offer the most effective solutions for our clients.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={2} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      Profesional Team
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      Our team comprises highly skilled professionals who work
                      seamlessly together, combining expertise and dedication to
                      deliver exceptional results, ensuring every project meets
                      the highest standards.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={3} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      Sphere Leader
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      We confidently declare that our company is a leader among
                      others. We provide the best quality for certain price
                      level.
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Divider />

                <Stack
                  direction={{ mobileP: "column", tablet: "row" }}
                  spacing={{ mobileP: "15px", tablet: "60px" }}
                  useFlexGap
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ mobileP: "column", tablet: "row" }}
                    gap="40px"
                    flex={1}
                  >
                    <AdvantageRectangle filledRectangles={4} />

                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight="600"
                      color="primary.main"
                    >
                      Full Project Support
                    </Typography>
                  </Box>

                  <Box flex={1}>
                    <Typography
                      variant="body1"
                      color="primary.contrastText"
                      fontSize="18px"
                      lineHeight="125%"
                    >
                      We are responsible for the work done with a guarantee for
                      our services. On request, we provide technical support for
                      software or web traffic.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <StyledButtonDark sx={{ mt: "30px" }}>
                Become a Client
              </StyledButtonDark>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

export default WhySection;
